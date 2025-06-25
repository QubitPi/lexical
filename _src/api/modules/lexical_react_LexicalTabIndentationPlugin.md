---
id: "lexical_react_LexicalTabIndentationPlugin"
title: "Module: @lexical/react/LexicalTabIndentationPlugin"
custom_edit_url: null
---

## Functions

### TabIndentationPlugin

▸ **TabIndentationPlugin**(`«destructured»`): ``null``

This plugin adds the ability to indent content using the tab key. Generally, we don't
recommend using this plugin as it could negatively affect accessibility for keyboard
users, causing focus to become trapped within the editor.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `maxIndent?` | `number` |

#### Returns

``null``

#### Defined in

[packages/lexical-react/src/LexicalTabIndentationPlugin.tsx:118](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalTabIndentationPlugin.tsx#L118)

___

### registerTabIndentation

▸ **registerTabIndentation**(`editor`, `maxIndent?`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `maxIndent?` | `number` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-react/src/LexicalTabIndentationPlugin.tsx:65](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalTabIndentationPlugin.tsx#L65)
