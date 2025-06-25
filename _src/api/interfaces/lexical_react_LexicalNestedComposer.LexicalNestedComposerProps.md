---
id: "lexical_react_LexicalNestedComposer.LexicalNestedComposerProps"
title: "Interface: LexicalNestedComposerProps"
custom_edit_url: null
---

[@lexical/react/LexicalNestedComposer](../modules/lexical_react_LexicalNestedComposer.md).LexicalNestedComposerProps

## Properties

### children

• `Optional` **children**: `ReactNode`

Any children (e.g. plug-ins) for this editor. Note that the nested editor
does not inherit any plug-ins or registrations from those plug-ins (such
as transforms and command listeners that may be necessary for correct
operation of those nodes) from the parent editor. If you are using nodes
that require plug-ins they must also be instantiated here.

#### Defined in

[packages/lexical-react/src/LexicalNestedComposer.tsx:47](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNestedComposer.tsx#L47)

___

### initialEditor

• **initialEditor**: [`LexicalEditor`](../classes/lexical.LexicalEditor.md)

The nested editor, created outside of this component (typically in the
implementation of a LexicalNode) with createEditor

#### Defined in

[packages/lexical-react/src/LexicalNestedComposer.tsx:52](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNestedComposer.tsx#L52)

___

### initialNodes

• `Optional` **initialNodes**: readonly ([`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`LexicalNode`](../classes/lexical.LexicalNode.md)\> \| [`LexicalNodeReplacement`](../modules/lexical.md#lexicalnodereplacement))[]

**`Deprecated`**

This feature is not safe or correctly implemented and will be
removed in v0.32.0. The only correct time to configure the nodes is when
creating the initialEditor.

**`Example`**

```ts
// This is normally in the implementation of a LexicalNode that
// owns the nested editor
editor = createEditor({nodes: [], parentEditor: $getEditor()});
```

#### Defined in

[packages/lexical-react/src/LexicalNestedComposer.tsx:69](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNestedComposer.tsx#L69)

___

### initialTheme

• `Optional` **initialTheme**: [`EditorThemeClasses`](../modules/lexical.md#editorthemeclasses)

Optionally overwrite the theme of the initialEditor

#### Defined in

[packages/lexical-react/src/LexicalNestedComposer.tsx:56](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNestedComposer.tsx#L56)

___

### skipCollabChecks

• `Optional` **skipCollabChecks**: ``true``

If this is not explicitly set to true, and the collab plugin is active,
rendering the children of this component will not happen until collab is ready.

#### Defined in

[packages/lexical-react/src/LexicalNestedComposer.tsx:74](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNestedComposer.tsx#L74)

___

### skipEditableListener

• `Optional` **skipEditableListener**: ``true``

If this is not explicitly set to true, the editable state of the nested
editor will automatically follow the parent editor's editable state.
When set to true, the nested editor is responsible for managing its own
editable state.

Available since v0.29.0

#### Defined in

[packages/lexical-react/src/LexicalNestedComposer.tsx:83](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNestedComposer.tsx#L83)
