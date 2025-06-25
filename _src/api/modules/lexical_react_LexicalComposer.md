---
id: "lexical_react_LexicalComposer"
title: "Module: @lexical/react/LexicalComposer"
custom_edit_url: null
---

## Type Aliases

### InitialConfigType

Ƭ **InitialConfigType**: `Readonly`\<\{ `editable?`: `boolean` ; `editorState?`: [`InitialEditorStateType`](lexical_react_LexicalComposer.md#initialeditorstatetype) ; `html?`: [`HTMLConfig`](lexical.md#htmlconfig) ; `namespace`: `string` ; `nodes?`: `ReadonlyArray`\<[`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\> \| [`LexicalNodeReplacement`](lexical.md#lexicalnodereplacement)\> ; `onError`: (`error`: `Error`, `editor`: [`LexicalEditor`](../classes/lexical.LexicalEditor.md)) => `void` ; `theme?`: [`EditorThemeClasses`](lexical.md#editorthemeclasses)  }\>

#### Defined in

[packages/lexical-react/src/LexicalComposer.tsx:43](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalComposer.tsx#L43)

___

### InitialEditorStateType

Ƭ **InitialEditorStateType**: ``null`` \| `string` \| [`EditorState`](../classes/lexical.EditorState.md) \| (`editor`: [`LexicalEditor`](../classes/lexical.LexicalEditor.md)) => `void`

#### Defined in

[packages/lexical-react/src/LexicalComposer.tsx:37](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalComposer.tsx#L37)

## Functions

### LexicalComposer

▸ **LexicalComposer**(`«destructured»`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Props` |

#### Returns

`JSX.Element`

#### Defined in

[packages/lexical-react/src/LexicalComposer.tsx:57](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalComposer.tsx#L57)
