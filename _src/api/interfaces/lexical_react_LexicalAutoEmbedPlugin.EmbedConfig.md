---
id: "lexical_react_LexicalAutoEmbedPlugin.EmbedConfig"
title: "Interface: EmbedConfig<TEmbedMatchResultData, TEmbedMatchResult>"
custom_edit_url: null
---

[@lexical/react/LexicalAutoEmbedPlugin](../modules/lexical_react_LexicalAutoEmbedPlugin.md).EmbedConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEmbedMatchResultData` | `unknown` |
| `TEmbedMatchResult` | [`EmbedMatchResult`](../modules/lexical_react_LexicalAutoEmbedPlugin.md#embedmatchresult)\<`TEmbedMatchResultData`\> |

## Properties

### insertNode

• **insertNode**: (`editor`: [`LexicalEditor`](../classes/lexical.LexicalEditor.md), `result`: `TEmbedMatchResult`) => `void`

#### Type declaration

▸ (`editor`, `result`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `result` | `TEmbedMatchResult` |

##### Returns

`void`

#### Defined in

[packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx:55](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx#L55)

___

### parseUrl

• **parseUrl**: (`text`: `string`) => ``null`` \| `TEmbedMatchResult` \| `Promise`\<``null`` \| `TEmbedMatchResult`\>

#### Type declaration

▸ (`text`): ``null`` \| `TEmbedMatchResult` \| `Promise`\<``null`` \| `TEmbedMatchResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

##### Returns

``null`` \| `TEmbedMatchResult` \| `Promise`\<``null`` \| `TEmbedMatchResult`\>

#### Defined in

[packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx:51](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx#L51)

___

### type

• **type**: `string`

#### Defined in

[packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx:49](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx#L49)
