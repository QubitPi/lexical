---
id: "lexical.BaseSelection"
title: "Interface: BaseSelection"
custom_edit_url: null
---

[lexical](../modules/lexical.md).BaseSelection

## Implemented by

- [`NodeSelection`](../classes/lexical.NodeSelection.md)
- [`RangeSelection`](../classes/lexical.RangeSelection.md)
- [`TableSelection`](../classes/lexical_table.TableSelection.md)

## Properties

### \_cachedNodes

• **\_cachedNodes**: ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Defined in

[packages/lexical/src/LexicalSelection.ts:296](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L296)

___

### dirty

• **dirty**: `boolean`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:297](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L297)

## Methods

### clone

▸ **clone**(): [`BaseSelection`](lexical.BaseSelection.md)

#### Returns

[`BaseSelection`](lexical.BaseSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:299](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L299)

___

### extract

▸ **extract**(): [`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Defined in

[packages/lexical/src/LexicalSelection.ts:300](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L300)

___

### getCachedNodes

▸ **getCachedNodes**(): ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Returns

``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Defined in

[packages/lexical/src/LexicalSelection.ts:310](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L310)

___

### getNodes

▸ **getNodes**(): [`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Defined in

[packages/lexical/src/LexicalSelection.ts:301](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L301)

___

### getStartEndPoints

▸ **getStartEndPoints**(): ``null`` \| [[`PointType`](../modules/lexical.md#pointtype), [`PointType`](../modules/lexical.md#pointtype)]

#### Returns

``null`` \| [[`PointType`](../modules/lexical.md#pointtype), [`PointType`](../modules/lexical.md#pointtype)]

#### Defined in

[packages/lexical/src/LexicalSelection.ts:307](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L307)

___

### getTextContent

▸ **getTextContent**(): `string`

#### Returns

`string`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:302](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L302)

___

### insertNodes

▸ **insertNodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`LexicalNode`](../classes/lexical.LexicalNode.md)[] |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:306](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L306)

___

### insertRawText

▸ **insertRawText**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:304](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L304)

___

### insertText

▸ **insertText**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:303](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L303)

___

### is

▸ **is**(`selection`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`BaseSelection`](lexical.BaseSelection.md) |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:305](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L305)

___

### isBackward

▸ **isBackward**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:309](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L309)

___

### isCollapsed

▸ **isCollapsed**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:308](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L308)

___

### setCachedNodes

▸ **setCachedNodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)[] |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:311](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L311)
