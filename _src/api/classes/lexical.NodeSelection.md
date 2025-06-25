---
id: "lexical.NodeSelection"
title: "Class: NodeSelection"
custom_edit_url: null
---

[lexical](../modules/lexical.md).NodeSelection

## Implements

- [`BaseSelection`](../interfaces/lexical.BaseSelection.md)

## Constructors

### constructor

• **new NodeSelection**(`objects`): [`NodeSelection`](lexical.NodeSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `objects` | `Set`\<`string`\> |

#### Returns

[`NodeSelection`](lexical.NodeSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:319](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L319)

## Properties

### \_cachedNodes

• **\_cachedNodes**: ``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[_cachedNodes](../interfaces/lexical.BaseSelection.md#_cachednodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:316](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L316)

___

### \_nodes

• **\_nodes**: `Set`\<`string`\>

#### Defined in

[packages/lexical/src/LexicalSelection.ts:315](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L315)

___

### dirty

• **dirty**: `boolean`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[dirty](../interfaces/lexical.BaseSelection.md#dirty)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:317](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L317)

## Methods

### add

▸ **add**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:354](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L354)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:366](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L366)

___

### clone

▸ **clone**(): [`NodeSelection`](lexical.NodeSelection.md)

#### Returns

[`NodeSelection`](lexical.NodeSelection.md)

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[clone](../interfaces/lexical.BaseSelection.md#clone)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:376](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L376)

___

### delete

▸ **delete**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:360](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L360)

___

### deleteNodes

▸ **deleteNodes**(): `void`

Remove all nodes in the NodeSelection. If there were any nodes,
replace the selection with a new RangeSelection at the previous
location of the first node.

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:444](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L444)

___

### extract

▸ **extract**(): [`LexicalNode`](lexical.LexicalNode.md)[]

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[extract](../interfaces/lexical.BaseSelection.md#extract)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:380](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L380)

___

### getCachedNodes

▸ **getCachedNodes**(): ``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Returns

``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getCachedNodes](../interfaces/lexical.BaseSelection.md#getcachednodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:325](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L325)

___

### getNodes

▸ **getNodes**(): [`LexicalNode`](lexical.LexicalNode.md)[]

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getNodes](../interfaces/lexical.BaseSelection.md#getnodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:411](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L411)

___

### getStartEndPoints

▸ **getStartEndPoints**(): ``null``

#### Returns

``null``

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getStartEndPoints](../interfaces/lexical.BaseSelection.md#getstartendpoints)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:350](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L350)

___

### getTextContent

▸ **getTextContent**(): `string`

#### Returns

`string`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getTextContent](../interfaces/lexical.BaseSelection.md#gettextcontent)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:430](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L430)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:372](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L372)

___

### insertNodes

▸ **insertNodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`LexicalNode`](lexical.LexicalNode.md)[] |

#### Returns

`void`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[insertNodes](../interfaces/lexical.BaseSelection.md#insertnodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:392](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L392)

___

### insertRawText

▸ **insertRawText**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[insertRawText](../interfaces/lexical.BaseSelection.md#insertrawtext)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:384](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L384)

___

### insertText

▸ **insertText**(): `void`

#### Returns

`void`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[insertText](../interfaces/lexical.BaseSelection.md#inserttext)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:388](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L388)

___

### is

▸ **is**(`selection`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |

#### Returns

`boolean`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[is](../interfaces/lexical.BaseSelection.md#is)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:333](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L333)

___

### isBackward

▸ **isBackward**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[isBackward](../interfaces/lexical.BaseSelection.md#isbackward)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:346](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L346)

___

### isCollapsed

▸ **isCollapsed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[isCollapsed](../interfaces/lexical.BaseSelection.md#iscollapsed)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:342](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L342)

___

### setCachedNodes

▸ **setCachedNodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | ``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[] |

#### Returns

`void`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[setCachedNodes](../interfaces/lexical.BaseSelection.md#setcachednodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:329](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L329)
