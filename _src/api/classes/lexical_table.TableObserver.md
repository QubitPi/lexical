---
id: "lexical_table.TableObserver"
title: "Class: TableObserver"
custom_edit_url: null
---

[@lexical/table](../modules/lexical_table.md).TableObserver

## Constructors

### constructor

• **new TableObserver**(`editor`, `tableNodeKey`): [`TableObserver`](lexical_table.TableObserver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](lexical.LexicalEditor.md) |
| `tableNodeKey` | `string` |

#### Returns

[`TableObserver`](lexical_table.TableObserver.md)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:113](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L113)

## Properties

### abortController

• **abortController**: `AbortController`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:109](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L109)

___

### anchorCell

• **anchorCell**: ``null`` \| [`TableDOMCell`](../modules/lexical_table.md#tabledomcell)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:99](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L99)

___

### anchorCellNodeKey

• **anchorCellNodeKey**: ``null`` \| `string`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:101](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L101)

___

### anchorX

• **anchorX**: `number`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:96](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L96)

___

### anchorY

• **anchorY**: `number`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:97](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L97)

___

### editor

• **editor**: [`LexicalEditor`](lexical.LexicalEditor.md)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:103](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L103)

___

### focusCell

• **focusCell**: ``null`` \| [`TableDOMCell`](../modules/lexical_table.md#tabledomcell)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:100](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L100)

___

### focusCellNodeKey

• **focusCellNodeKey**: ``null`` \| `string`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:102](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L102)

___

### focusX

• **focusX**: `number`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:91](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L91)

___

### focusY

• **focusY**: `number`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:92](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L92)

___

### hasHijackedSelectionStyles

• **hasHijackedSelectionStyles**: `boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:105](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L105)

___

### isHighlightingCells

• **isHighlightingCells**: `boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:95](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L95)

___

### isSelecting

• **isSelecting**: `boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:106](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L106)

___

### listenerOptions

• **listenerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:110](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L110)

___

### listenersToRemove

• **listenersToRemove**: `Set`\<() => `void`\>

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:93](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L93)

___

### nextFocus

• **nextFocus**: ``null`` \| \{ `focusCell`: [`TableDOMCell`](../modules/lexical_table.md#tabledomcell) ; `override`: `boolean`  }

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:111](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L111)

___

### pointerType

• **pointerType**: ``null`` \| `string`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:107](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L107)

___

### shouldCheckSelection

• **shouldCheckSelection**: `boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:108](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L108)

___

### table

• **table**: `TableDOMTable`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:94](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L94)

___

### tableNodeKey

• **tableNodeKey**: `string`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:98](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L98)

___

### tableSelection

• **tableSelection**: ``null`` \| [`TableSelection`](lexical_table.TableSelection.md)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:104](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L104)

## Methods

### $clearHighlight

▸ **$clearHighlight**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:207](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L207)

___

### $clearText

▸ **$clearText**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:459](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L459)

___

### $disableHighlightStyle

▸ **$disableHighlightStyle**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:244](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L244)

___

### $enableHighlightStyle

▸ **$enableHighlightStyle**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:232](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L232)

___

### $formatCells

▸ **$formatCells**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TextFormatType`](../modules/lexical.md#textformattype) |

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:431](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L431)

___

### $getAnchorTableCell

▸ **$getAnchorTableCell**(): ``null`` \| [`TableCellNode`](lexical_table.TableCellNode.md)

#### Returns

``null`` \| [`TableCellNode`](lexical_table.TableCellNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:385](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L385)

___

### $getAnchorTableCellOrThrow

▸ **$getAnchorTableCellOrThrow**(): [`TableCellNode`](lexical_table.TableCellNode.md)

#### Returns

[`TableCellNode`](lexical_table.TableCellNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:390](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L390)

___

### $getFocusTableCell

▸ **$getFocusTableCell**(): ``null`` \| [`TableCellNode`](lexical_table.TableCellNode.md)

#### Returns

``null`` \| [`TableCellNode`](lexical_table.TableCellNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:399](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L399)

___

### $getFocusTableCellOrThrow

▸ **$getFocusTableCellOrThrow**(): [`TableCellNode`](lexical_table.TableCellNode.md)

#### Returns

[`TableCellNode`](lexical_table.TableCellNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:403](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L403)

___

### $lookup

▸ **$lookup**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tableElement` | [`HTMLTableElementWithWithTableSelectionState`](../modules/lexical_table.md#htmltableelementwithwithtableselectionstate) |
| `tableNode` | [`TableNode`](lexical_table.TableNode.md) |

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:154](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L154)

___

### $setAnchorCellForSelection

▸ **$setAnchorCellForSelection**(`cell`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cell` | [`TableDOMCell`](../modules/lexical_table.md#tabledomcell) |

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:409](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L409)

___

### $setFocusCellForSelection

▸ **$setFocusCellForSelection**(`cell`, `ignoreStart?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cell` | [`TableDOMCell`](../modules/lexical_table.md#tabledomcell) | `undefined` |
| `ignoreStart` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:335](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L335)

___

### $updateTableTableSelection

▸ **$updateTableTableSelection**(`selection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`TableSelection`](lexical_table.TableSelection.md) |

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:253](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L253)

___

### getTable

▸ **getTable**(): `TableDOMTable`

#### Returns

`TableDOMTable`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:142](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L142)

___

### removeListeners

▸ **removeListeners**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:146](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L146)

___

### trackTable

▸ **trackTable**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:161](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L161)
