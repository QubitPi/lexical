---
sidebar_position: 1
---

# Lexical Plugins

React-based plugins are using Lexical editor instance from `<LexicalComposer>` context:

```js
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
```

```jsx
const initialConfig = {
  namespace: 'MyEditor',
  theme,
  onError,
};

<LexicalComposer initialConfig={initialConfig}>
  <PlainTextPlugin
    contentEditable={<ContentEditable />}
    placeholder={<div>Enter some text...</div>}
  />
  <HistoryPlugin />
  <OnChangePlugin onChange={onChange} />
  ...
</LexicalComposer>
```

> Note: Many plugins might require you to register the one or many Lexical nodes in order for the plugin to work. You can do this by passing a reference to the node to the `nodes` array in your initial editor configuration.

```jsx
const initialConfig = {
  namespace: 'MyEditor',
  theme,
  nodes: [ListNode, ListItemNode], // Pass the references to the nodes here
  onError,
};
```

### `LexicalPlainTextPlugin`

React wrapper for `@lexical/plain-text` that adds major features for plain text editing, including typing, deletion and copy/pasting

```jsx
<PlainTextPlugin
  contentEditable={<ContentEditable />}
  placeholder={<div>Enter some text...</div>}
  ErrorBoundary={LexicalErrorBoundary}
/>
```

### `LexicalRichTextPlugin`

React wrapper for `@lexical/rich-text` that adds major features for rich text editing, including typing, deletion, copy/pasting, indent/outdent and bold/italic/underline/strikethrough text formatting

```jsx
<RichTextPlugin
  contentEditable={<ContentEditable />}
  placeholder={<div>Enter some text...</div>}
  ErrorBoundary={LexicalErrorBoundary}
/>
```

### `LexicalOnChangePlugin`

Plugin that calls `onChange` whenever Lexical state is updated. Using `ignoreHistoryMergeTagChange` (`true` by default) and `ignoreSelectionChange` (`false` by default) can give more granular control over changes that are causing `onChange` call

```jsx
<OnChangePlugin onChange={onChange} />
```

The TypeScript signature of `onChange` is

```typescript
onChange: (editorState: EditorState, editor: LexicalEditor) => void;
```

We are free to pass any or no argument at all to `onChange` in TypeScript. For example, the following definition is
valid:

```typescript
onst onChange = function (editorState: EditorState): void {
  ...
}
```

#### Running Hooks in `LexicalOnChangePlugin`

What if our `onChange` logic depends on things other than `editorState` and `editor`? For example, we might need to
[communicate with an external database](https://github.com/facebook/lexical/discussions/3355) to log the editor's
modified date or have to sync with a Redux store by dispatching something inside `onChange`. Is there a good way to
pass such logic into `onChange`? Yes.

Let's take Redux as an example

```typescript
export type EditorProps = {
  updateSomeData: (someData: any) => void
}

function Editor(props: EditorProps): JSX.Element {

  const onChange = function (editorState: EditorState): void {
    editorState.read(() => {
      // Read the contents of the EditorState here.
      ...

      props.updateSomeData(transformEditorStateToSomeData(editorState))
    })
  }
  
  const editorConfig = { ... };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <div className="editor-inner">
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  updateSomeData: (someData: any) => { dispatch({ type: 'SOME_UPDATE_ACTION', payload: someData }) }
})

export default withBus(connect(null, mapDispatchToProps)(Editor))
```

The logic of the code above goes like this:

We are dispatching actions to Redux store. The action simply updates the store state with the `someData`. 

Now `dispatch` is a function of the Redux store. We call `store.dispatch` to dispatch an action. **This is the only way 
to trigger a state change**. With React Redux, our `Editor` component never accesses the store directly - **connect** 
does it for us. With `connect`, we let the `Editor` component dispatch the aforementioned actions using 
**mapDispatchToProps**.

`mapDispatchToProps` is the second argument passed to `connect`. The `mapDispatchToProps` function will be called with 
`dispatch` as the first argument. We normally make use of this by returning a new function, i.e. our `updateSomeData`, 
that call `dispatch()` inside itself, and either pass in a plain action object directly or pass in the result of an 
action creator. In our case, we pass a plain action object directly:

```typescript
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  updateSomeData: (someData: any) => { dispatch({ type: 'UPDATE_ACTION_FOR_SOME_OTHER_COMPONENTS', payload: someData }) }
})
```

We see `mapDispatchToProps` essentially returns an object. The field (`updateSomeData`) inside this object will become
a separate prop for our `Editor` component. When this field is called as a function inside the `Editor` component, its
corresponding value, the function `(someData: any) => { dispatch(...) }`, will be called to dispatch an action. For
this reason, We call `updateSomeData` **action dispatching function**

The return of the `mapDispatchToProps` function will be merged to the connected component (`Editor`) as props. We may 
call it directly to dispatch its action:

```typescript
props.updateSomeData(transformEditorStateToSomeData(editorState))
```

The key is to pass custom logic (i.e. `updateSomeData`) through functional programming without having to modifying
`onChange` or `OnChangePlugin` signatures.

Next, we could have a
[Redux reducer](https://qubitpi.github.io/redux/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers) 
that updates store states:

```typescript
export const initialState = {
  nodes: [],
  relationships: []
}

...

export default function reducer(
  state = initialState,
  action: GraphEditorAction
) {
  switch (action.type) {
    case SOME_UPDATE_ACTION:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export function getEditorNodes(state: GlobalState) {
  return state["editor"].nodes
}
```

- Every reducer needs some initial state, that's why we have some one-time statement `state = initialState` above there
- The way we update the store states is simply key-merging the existing states with the states in the payload
- `nodes` & `relationships` in `initialState` are 2 example states that redux store maintains. 

How editor communicates to the central Redux store can be summarized in the figure below:

![Transforms lifecycle](/img/docs/redux-logic-in-lexical.png)

To automatically update the state in another connected component (say, `MyComponent`), we will use `getEditorNodes`
defined above. In `MyComponent`, we will have

```typescript
export default function MyComponent({ editorNodes }): JSX.Element {

  useEffect(() => {
    // Update the HTML with updated 'editorNodes'...
  }, [editorNodes]);
}

const mapStateToProps = (state: GlobalState) => ({
  editorNodes: getEditorNodes(state),
})
```

Whenever user types something new in editor, `MyComponent` will **automatically** get notified by Redux store via
`mapStateToProps`. The store will use `getEditorNodes` to map store state to `MyComponent` props and send it to 
`MyComponent` for re-rendering

### `LexicalHistoryPlugin`

React wrapper for `@lexical/history` that adds support for history stack management and `undo` / `redo` commands

```jsx
<HistoryPlugin />
```

### `LexicalLinkPlugin`

React wrapper for `@lexical/link` that adds support for links, including `toggleLink` command support that toggles link for selected text

```jsx
<LinkPlugin />
```

### `LexicalListPlugin`

React wrapper for `@lexical/list` that adds support for lists (ordered and unordered)

```jsx
<ListPlugin />
```

### `LexicalCheckListPlugin`

React wrapper for `@lexical/list` that adds support for check lists. Note that it requires some css to render check/uncheck marks. See PlaygroundEditorTheme.css for details.

```jsx
<CheckListPlugin />
```

### `LexicalTablePlugin`

React wrapper for `@lexical/table` that adds support for tables

```jsx
<TablePlugin />
```

### `LexicalTabIndentationPlugin`

Plugin that allows tab indentation in combination with `@lexical/rich-text`.

```jsx
<TabIndentationPlugin />
```

### `LexicalAutoLinkPlugin`

Plugin will convert text into links based on passed matchers list. In example below whenever user types url-like string it will automaticaly convert it into a link node

```jsx
const URL_MATCHER =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const MATCHERS = [
  (text) => {
    const match = URL_MATCHER.exec(text);
    if (match === null) {
      return null;
    }
    const fullMatch = match[0];
    return {
      index: match.index,
      length: fullMatch.length,
      text: fullMatch,
      url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
      // attributes: { rel: 'noopener', target: '_blank' }, // Optional link attributes
    };
  },
];

...

<AutoLinkPlugin matchers={MATCHERS} />
```

### `LexicalClearEditorPlugin`

Adds `clearEditor` command support to clear editor's content

### `LexicalMarkdownShortcutPlugin`

Adds markdown shortcut support: headings, lists, code blocks, quotes, links and inline styles (bold, italic, strikethrough)

### `TableOfContentsPlugin`
This plugin allows you to navigate to certain sections of the page by clicking on headings that exist inside these sections. Once you load the plugin, it automatically collects and injects the headings of the page inside the table of contents, then it listens to any deletions or modifications to those headings and updates the table of contents. Additionally, it's able to track any newly added headings and inserts them in the table of contents once they are created. This plugin also supports lazy loading - so you can defer adding the plugin until when the user needs it.
```jsx
<TableOfContentsPlugin />
```
You can alternatively leverage the use of `LexicalTableOfContents` API, which provides you with all the functioanlity that `TableOfContentsPlugin` provides, but without any styling.
In order to use `LexicalTableOfContents`, you need to pass a callback function in its children. This callback function gives you access to the up-to-date data of the table of contents. You can access this data through a single parameter for the callback which comes in the form of an array of arrays `[[headingKey, headingTextContent, headingTag], [], [], ...]`
`headingKey`: Unique key that identifies the heading.`headingTextContent`: A string of the exact text of the heading.`headingTag`: A string that reads either 'h1', 'h2', or 'h3'.
```jsx
<LexicalTableOfContents>
  {(tableOfContentsArray) => {
    return <MyCustomTableOfContetsPlugin tableOfContents={tableOfContentsArray} />;
  }}
</LexicalTableOfContents>
```
