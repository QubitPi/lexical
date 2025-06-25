---
id: "lexical_mark"
title: "Module: @lexical/mark"
custom_edit_url: null
---

## Classes

- [MarkNode](../classes/lexical_mark.MarkNode.md)

## Type Aliases

### SerializedMarkNode

Ƭ **SerializedMarkNode**: [`Spread`](lexical.md#spread)\<\{ `ids`: `string`[]  }, [`SerializedElementNode`](lexical.md#serializedelementnode)\>

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:26](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L26)

## Functions

### $createMarkNode

▸ **$createMarkNode**(`ids?`): [`MarkNode`](../classes/lexical_mark.MarkNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ids` | readonly `string`[] | `NO_IDS` |

#### Returns

[`MarkNode`](../classes/lexical_mark.MarkNode.md)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:187](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L187)

___

### $getMarkIDs

▸ **$getMarkIDs**(`node`, `offset`): ``null`` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TextNode`](../classes/lexical.TextNode.md) |
| `offset` | `number` |

#### Returns

``null`` \| `string`[]

#### Defined in

[packages/lexical-mark/src/index.ts:136](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/index.ts#L136)

___

### $isMarkNode

▸ **$isMarkNode**(`node`): node is MarkNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is MarkNode

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:191](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L191)

___

### $unwrapMarkNode

▸ **$unwrapMarkNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`MarkNode`](../classes/lexical_mark.MarkNode.md) |

#### Returns

`void`

#### Defined in

[packages/lexical-mark/src/index.ts:21](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/index.ts#L21)

___

### $wrapSelectionInMarkNode

▸ **$wrapSelectionInMarkNode**(`selection`, `isBackward`, `id`, `createNode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | [`RangeSelection`](../classes/lexical.RangeSelection.md) |
| `isBackward` | `boolean` |
| `id` | `string` |
| `createNode?` | (`ids`: `string`[]) => [`MarkNode`](../classes/lexical_mark.MarkNode.md) |

#### Returns

`void`

#### Defined in

[packages/lexical-mark/src/index.ts:36](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/index.ts#L36)
