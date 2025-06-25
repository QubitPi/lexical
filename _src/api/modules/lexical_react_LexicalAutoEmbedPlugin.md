---
id: "lexical_react_LexicalAutoEmbedPlugin"
title: "Module: @lexical/react/LexicalAutoEmbedPlugin"
custom_edit_url: null
---

## Classes

- [AutoEmbedOption](../classes/lexical_react_LexicalAutoEmbedPlugin.AutoEmbedOption.md)

## Interfaces

- [EmbedConfig](../interfaces/lexical_react_LexicalAutoEmbedPlugin.EmbedConfig.md)

## Type Aliases

### EmbedMatchResult

Ƭ **EmbedMatchResult**\<`TEmbedMatchResult`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEmbedMatchResult` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data?` | `TEmbedMatchResult` |
| `id` | `string` |
| `url` | `string` |

#### Defined in

[packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx:38](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx#L38)

## Variables

### INSERT\_EMBED\_COMMAND

• `Const` **INSERT\_EMBED\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<[`EmbedConfig`](../interfaces/lexical_react_LexicalAutoEmbedPlugin.EmbedConfig.md)[``"type"``]\>

#### Defined in

[packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx:61](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx#L61)

___

### URL\_MATCHER

• `Const` **URL\_MATCHER**: `RegExp`

#### Defined in

[packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx:58](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx#L58)

## Functions

### LexicalAutoEmbedPlugin

▸ **LexicalAutoEmbedPlugin**\<`TEmbedConfig`\>(`«destructured»`): `JSX.Element` \| ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEmbedConfig` | extends [`EmbedConfig`](../interfaces/lexical_react_LexicalAutoEmbedPlugin.EmbedConfig.md)\<`unknown`, [`EmbedMatchResult`](lexical_react_LexicalAutoEmbedPlugin.md#embedmatchresult)\<`unknown`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `LexicalAutoEmbedPluginProps`\<`TEmbedConfig`\> |

#### Returns

`JSX.Element` \| ``null``

#### Defined in

[packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx:91](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalAutoEmbedPlugin.tsx#L91)
