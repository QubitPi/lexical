---
id: "lexical.Point"
title: "Class: Point"
custom_edit_url: null
---

[lexical](../modules/lexical.md).Point

## Constructors

### constructor

• **new Point**(`key`, `offset`, `type`): [`Point`](lexical.Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `offset` | `number` |
| `type` | ``"text"`` \| ``"element"`` |

#### Returns

[`Point`](lexical.Point.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:135](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L135)

## Properties

### \_selection

• **\_selection**: ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:133](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L133)

___

### key

• **key**: `string`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:130](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L130)

___

### offset

• **offset**: `number`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:131](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L131)

___

### type

• **type**: ``"text"`` \| ``"element"``

#### Defined in

[packages/lexical/src/LexicalSelection.ts:132](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L132)

## Methods

### getNode

▸ **getNode**(): [`LexicalNode`](lexical.LexicalNode.md)

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:167](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L167)

___

### is

▸ **is**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`PointType`](../modules/lexical.md#pointtype) |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:150](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L150)

___

### isBefore

▸ **isBefore**(`b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | [`PointType`](../modules/lexical.md#pointtype) |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:158](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L158)

___

### set

▸ **set**(`key`, `offset`, `type`, `onlyIfChanged?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `offset` | `number` |
| `type` | ``"text"`` \| ``"element"`` |
| `onlyIfChanged?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:176](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L176)
