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
</LexicalComposer>;
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

React wrapper for `@lexical/plain-text` that adds major features for plain text editing, including typing, deletion and copy/pasting.

```jsx
<PlainTextPlugin
  contentEditable={
    <ContentEditable
      aria-placeholder={'Enter some text...'}
      placeholder={<div>Enter some text...</div>}
    />
  }
  ErrorBoundary={LexicalErrorBoundary}
/>
```

### `LexicalRichTextPlugin`

React wrapper for `@lexical/rich-text` that adds major features for rich text editing, including typing, deletion, copy/pasting, indent/outdent and bold/italic/underline/strikethrough text formatting.

```jsx
<RichTextPlugin
  contentEditable={
    <ContentEditable
      aria-placeholder={'Enter some text...'}
      placeholder={<div>Enter some text...</div>}
    />
  }
  ErrorBoundary={LexicalErrorBoundary}
/>
```

:::caution

The `LexicalRichTextPlugin`
[does NOT offer the rich text _toolbar_ menus](https://github.com/facebook/lexical/discussions/2649#discussioncomment-3179738)
such as the one shown below:

![Error loading toolbar-menu-example.png](./img/toolbar-menu-example.png)

The toolbar plugin, however, can be implemented by ourselves by following
[this example](https://codesandbox.io/s/lexical-rich-text-example-57px3t). In order to get rid of **styles.css**, we 
will replace it with [styled-component](https://qubitpi.github.io/styled-components-website/). For example, in
**style.css** we define dropdown as

```css
.dropdown {
  z-index: 5;
  display: block;
  position: absolute;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  min-width: 100px;
  min-height: 40px;
  background-color: #fff;
}
```

We will have a **styled.ts** file alongside with **ToolbarPlugin.js** with the contents

```typescript
import styled from "styled-components";

export const Dropdown = styled.div`
  z-index: 5;
  display: block;
  position: absolute;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  min-width: 100px;
  min-height: 40px;
  background-color: #fff;
`;
```

Then we can replace 

```javascript
    <div className="dropdown" ref={dropDownRef}>
      ...
    </div>
```


```javascript
    <Dropdown
      ref={dropDownRef}
    >
      ...
    </Dropdown>
```

:::

### `LexicalOnChangePlugin`

Plugin that calls `onChange` whenever Lexical state is updated. Using `ignoreHistoryMergeTagChange` (`true` by default) and `ignoreSelectionChange` (`false` by default) can give more granular control over changes that are causing `onChange` call.

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
  updateSomeData: (someData: any) => { dispatch({ type: '...', payload: '...' }) }
})

export default withBus(connect(null, mapDispatchToProps)(Editor))
```

The key is to pass custom logic (i.e. `updateSomeData`) through functional programming without having to modifying
`onChange` or `OnChangePlugin` signatures.

### `LexicalHistoryPlugin`

React wrapper for `@lexical/history` that adds support for history stack management and `undo` / `redo` commands.

```jsx
<HistoryPlugin />
```

### `LexicalLinkPlugin`

React wrapper for `@lexical/link` that adds support for links, including `$toggleLink` command support that toggles link for selected text.

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

[![See API Documentation](/img/see-api-documentation.svg)](/docs/api/modules/lexical_react_LexicalTablePlugin)

React wrapper for `@lexical/table` that adds support for tables.

```jsx
<TablePlugin />
```

### `LexicalTabIndentationPlugin`

Plugin that allows tab indentation in combination with `@lexical/rich-text`.

```jsx
<TabIndentationPlugin />
```

### `LexicalAutoLinkPlugin`

Plugin will convert text into links based on passed matchers list. In example below whenever user types url-like string it will automatically convert it into a link node

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
      // attributes: { rel: 'noreferrer', target: '_blank' }, // Optional link attributes
    };
  },
];

...

<AutoLinkPlugin matchers={MATCHERS} />
```

### `LexicalClearEditorPlugin`

Adds `clearEditor` command support to clear editor's content.

```jsx
<ClearEditorPlugin />
```

### `LexicalMarkdownShortcutPlugin`

Adds markdown shortcut support: headings, lists, code blocks, quotes, links and inline styles (bold, italic, strikethrough).

```jsx
<MarkdownShortcutPlugin />
```

### `LexicalTableOfContentsPlugin`

This plugin allows you to render a table of contents for a page from the headings from the editor. It listens to any deletions or modifications to those headings and updates the table of contents. Additionally, it's able to track any newly added headings and inserts them in the table of contents once they are created. This plugin also supports lazy loading - so you can defer adding the plugin until when the user needs it.

In order to use `TableOfContentsPlugin`, you need to pass a callback function in its children. This callback function gives you access to the up-to-date data of the table of contents. You can access this data through a single parameter for the callback which comes in the form of an array of arrays `[[headingKey, headingTextContent, headingTag], [], [], ...]`

`headingKey`: Unique key that identifies the heading.
`headingTextContent`: A string of the exact text of the heading.
`headingTag`: A string that reads either 'h1', 'h2', or 'h3'.

```jsx
<TableOfContentsPlugin>
  {(tableOfContentsArray) => {
    return (
      <MyCustomTableOfContentsPlugin tableOfContents={tableOfContentsArray} />
    );
  }}
</TableOfContentsPlugin>
```

### `LexicalEditorRefPlugin`

Allows you to get a ref to the underlying editor instance outside of LexicalComposer, which is convenient when you want to interact with the editor
from a separate part of your application.

```jsx
const editorRef = useRef(null);
<EditorRefPlugin editorRef={editorRef} />;
```

### `LexicalSelectionAlwaysOnDisplay`

By default, browser text selection becomes invisible when clicking away from the editor. This plugin ensures the selection remains visible.

```jsx
<SelectionAlwaysOnDisplay />
```
