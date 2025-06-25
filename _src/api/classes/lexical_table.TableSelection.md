---
id: "lexical_table.TableSelection"
title: "Class: TableSelection"
custom_edit_url: null
---

[@lexical/table](../modules/lexical_table.md).TableSelection

## Implements

- [`BaseSelection`](../interfaces/lexical.BaseSelection.md)

## Constructors

### constructor

• **new TableSelection**(`tableKey`, `anchor`, `focus`): [`TableSelection`](lexical_table.TableSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableKey` | `string` |
| `anchor` | [`PointType`](../modules/lexical.md#pointtype) |
| `focus` | [`PointType`](../modules/lexical.md#pointtype) |

#### Returns

[`TableSelection`](lexical_table.TableSelection.md)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:115](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L115)

## Properties

### \_cachedNodes

• **\_cachedNodes**: ``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[_cachedNodes](../interfaces/lexical.BaseSelection.md#_cachednodes)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:112](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L112)

___

### anchor

• **anchor**: [`PointType`](../modules/lexical.md#pointtype)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:110](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L110)

___

### dirty

• **dirty**: `boolean`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[dirty](../interfaces/lexical.BaseSelection.md#dirty)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:113](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L113)

___

### focus

• **focus**: [`PointType`](../modules/lexical.md#pointtype)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:111](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L111)

___

### tableKey

• **tableKey**: `string`

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:109](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L109)

## Methods

### clone

▸ **clone**(): [`TableSelection`](lexical_table.TableSelection.md)

#### Returns

[`TableSelection`](lexical_table.TableSelection.md)

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[clone](../interfaces/lexical.BaseSelection.md#clone)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:185](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L185)

___

### extract

▸ **extract**(): [`LexicalNode`](lexical.LexicalNode.md)[]

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[extract](../interfaces/lexical.BaseSelection.md#extract)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:197](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L197)

___

### getCachedNodes

▸ **getCachedNodes**(): ``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Returns

``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getCachedNodes](../interfaces/lexical.BaseSelection.md#getcachednodes)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:155](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L155)

___

### getNodes

▸ **getNodes**(): [`LexicalNode`](lexical.LexicalNode.md)[]

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getNodes](../interfaces/lexical.BaseSelection.md#getnodes)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:283](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L283)

___

### getShape

▸ **getShape**(): [`TableSelectionShape`](../modules/lexical_table.md#tableselectionshape)

#### Returns

[`TableSelectionShape`](../modules/lexical_table.md#tableselectionshape)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:244](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L244)

___

### getStartEndPoints

▸ **getStartEndPoints**(): [[`PointType`](../modules/lexical.md#pointtype), [`PointType`](../modules/lexical.md#pointtype)]

#### Returns

[[`PointType`](../modules/lexical.md#pointtype), [`PointType`](../modules/lexical.md#pointtype)]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getStartEndPoints](../interfaces/lexical.BaseSelection.md#getstartendpoints)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:125](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L125)

___

### getTextContent

▸ **getTextContent**(): `string`

#### Returns

`string`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getTextContent](../interfaces/lexical.BaseSelection.md#gettextcontent)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:358](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L358)

___

### hasFormat

▸ **hasFormat**(`type`): `boolean`

Returns whether the provided TextFormatType is present on the Selection.
This will be true if any paragraph in table cells has the specified format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`TextFormatType`](../modules/lexical.md#textformattype) | the TextFormatType to check for. |

#### Returns

`boolean`

true if the provided format is currently toggled on on the Selection, false otherwise.

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:216](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L216)

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

[packages/lexical-table/src/LexicalTableSelection.ts:231](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L231)

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

[packages/lexical-table/src/LexicalTableSelection.ts:201](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L201)

___

### insertText

▸ **insertText**(): `void`

#### Returns

`void`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[insertText](../interfaces/lexical.BaseSelection.md#inserttext)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:205](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L205)

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

[packages/lexical-table/src/LexicalTableSelection.ts:163](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L163)

___

### isBackward

▸ **isBackward**(): `boolean`

Returns whether the Selection is "backwards", meaning the focus
logically precedes the anchor in the EditorState.

#### Returns

`boolean`

true if the Selection is backwards, false otherwise.

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[isBackward](../interfaces/lexical.BaseSelection.md#isbackward)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:151](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L151)

___

### isCollapsed

▸ **isCollapsed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[isCollapsed](../interfaces/lexical.BaseSelection.md#iscollapsed)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:193](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L193)

___

### isValid

▸ **isValid**(): `boolean`

[$createTableSelection](../modules/lexical_table.md#$createtableselection) unfortunately makes it very easy to create
nonsense selections, so we have a method to see if the selection probably
makes sense.

#### Returns

`boolean`

true if the TableSelection is (probably) valid

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:136](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L136)

___

### set

▸ **set**(`tableKey`, `anchorCellKey`, `focusCellKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableKey` | `string` |
| `anchorCellKey` | `string` |
| `focusCellKey` | `string` |

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:172](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L172)

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

[packages/lexical-table/src/LexicalTableSelection.ts:159](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L159)
