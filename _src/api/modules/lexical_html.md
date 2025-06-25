---
id: "lexical_html"
title: "Module: @lexical/html"
custom_edit_url: null
---

## Functions

### $generateHtmlFromNodes

▸ **$generateHtmlFromNodes**(`editor`, `selection?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `selection?` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |

#### Returns

`string`

#### Defined in

[packages/lexical-html/src/index.ts:68](https://github.com/QubitPi/lexical/tree/main/packages/lexical-html/src/index.ts#L68)

___

### $generateNodesFromDOM

▸ **$generateNodesFromDOM**(`editor`, `dom`): [`LexicalNode`](../classes/lexical.LexicalNode.md)[]

How you parse your html string to get a document is left up to you. In the browser you can use the native
DOMParser API to generate a document (see clipboard.ts), but to use in a headless environment you can use JSDom
or an equivalent library and pass in the document here.

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `dom` | `Document` |

#### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Defined in

[packages/lexical-html/src/index.ts:42](https://github.com/QubitPi/lexical/tree/main/packages/lexical-html/src/index.ts#L42)
