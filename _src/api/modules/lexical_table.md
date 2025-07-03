---
id: "lexical_table"
title: "Module: @lexical/table"
custom_edit_url: null
---

## Classes

- [TableCellNode](../classes/lexical_table.TableCellNode.md)
- [TableNode](../classes/lexical_table.TableNode.md)
- [TableObserver](../classes/lexical_table.TableObserver.md)
- [TableRowNode](../classes/lexical_table.TableRowNode.md)
- [TableSelection](../classes/lexical_table.TableSelection.md)

## Type Aliases

### HTMLTableElementWithWithTableSelectionState

Ƭ **HTMLTableElementWithWithTableSelectionState**: `HTMLTableElement` & \{ `__lexicalTableSelection?`: [`TableObserver`](../classes/lexical_table.TableObserver.md)  }

#### Defined in

[packages/lexical-table/src/LexicalTableSelectionHelpers.ts:1247](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelectionHelpers.ts#L1247)

___

### InsertTableCommandPayload

Ƭ **InsertTableCommandPayload**: `Readonly`\<\{ `columns`: `string` ; `includeHeaders?`: [`InsertTableCommandPayloadHeaders`](lexical_table.md#inserttablecommandpayloadheaders) ; `rows`: `string`  }\>

#### Defined in

[packages/lexical-table/src/LexicalTableCommands.ts:20](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCommands.ts#L20)

___

### InsertTableCommandPayloadHeaders

Ƭ **InsertTableCommandPayloadHeaders**: `Readonly`\<\{ `columns`: `boolean` ; `rows`: `boolean`  }\> \| `boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableCommands.ts:13](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCommands.ts#L13)

___

### SerializedTableCellNode

Ƭ **SerializedTableCellNode**: [`Spread`](lexical.md#spread)\<\{ `backgroundColor?`: ``null`` \| `string` ; `colSpan?`: `number` ; `headerState`: `TableCellHeaderState` ; `rowSpan?`: `number` ; `verticalAlign?`: `string` ; `width?`: `number`  }, [`SerializedElementNode`](lexical.md#serializedelementnode)\>

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:46](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L46)

___

### SerializedTableNode

Ƭ **SerializedTableNode**: [`Spread`](lexical.md#spread)\<\{ `colWidths?`: readonly `number`[] ; `frozenColumnCount?`: `number` ; `frozenRowCount?`: `number` ; `rowStriping?`: `boolean`  }, [`SerializedElementNode`](lexical.md#serializedelementnode)\>

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:52](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L52)

___

### SerializedTableRowNode

Ƭ **SerializedTableRowNode**: [`Spread`](lexical.md#spread)\<\{ `height?`: `number`  }, [`SerializedElementNode`](lexical.md#serializedelementnode)\>

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:26](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L26)

___

### TableDOMCell

Ƭ **TableDOMCell**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `elem` | `HTMLElement` |
| `hasBackgroundColor` | `boolean` |
| `highlighted` | `boolean` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:49](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L49)

___

### TableMapType

Ƭ **TableMapType**: [`TableMapValueType`](lexical_table.md#tablemapvaluetype)[][]

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:50](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L50)

___

### TableMapValueType

Ƭ **TableMapValueType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cell` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |
| `startColumn` | `number` |
| `startRow` | `number` |

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:45](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L45)

___

### TableSelectionShape

Ƭ **TableSelectionShape**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fromX` | `number` |
| `fromY` | `number` |
| `toX` | `number` |
| `toY` | `number` |

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:38](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L38)

## Variables

### INSERT\_TABLE\_COMMAND

• `Const` **INSERT\_TABLE\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<[`InsertTableCommandPayload`](lexical_table.md#inserttablecommandpayload)\>

#### Defined in

[packages/lexical-table/src/LexicalTableCommands.ts:26](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCommands.ts#L26)

___

### TableCellHeaderStates

• `Const` **TableCellHeaderStates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BOTH` | `number` |
| `COLUMN` | `number` |
| `NO_STATUS` | `number` |
| `ROW` | `number` |

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:36](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L36)

## Functions

### $computeTableMap

▸ **$computeTableMap**(`tableNode`, `cellA`, `cellB`): [[`TableMapType`](lexical_table.md#tablemaptype), [`TableMapValueType`](lexical_table.md#tablemapvaluetype), [`TableMapValueType`](lexical_table.md#tablemapvaluetype)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |
| `cellA` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |
| `cellB` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |

#### Returns

[[`TableMapType`](lexical_table.md#tablemaptype), [`TableMapValueType`](lexical_table.md#tablemapvaluetype), [`TableMapValueType`](lexical_table.md#tablemapvaluetype)]

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:1027](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L1027)

___

### $computeTableMapSkipCellCheck

▸ **$computeTableMapSkipCellCheck**(`tableNode`, `cellA`, `cellB`): [tableMap: TableMapType, cellAValue: TableMapValueType \| null, cellBValue: TableMapValueType \| null]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |
| `cellA` | ``null`` \| [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |
| `cellB` | ``null`` \| [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |

#### Returns

[tableMap: TableMapType, cellAValue: TableMapValueType \| null, cellBValue: TableMapValueType \| null]

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:1042](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L1042)

___

### $createTableCellNode

▸ **$createTableCellNode**(`headerState?`, `colSpan?`, `width?`): [`TableCellNode`](../classes/lexical_table.TableCellNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `headerState` | `number` | `TableCellHeaderStates.NO_STATUS` |
| `colSpan` | `number` | `1` |
| `width?` | `number` | `undefined` |

#### Returns

[`TableCellNode`](../classes/lexical_table.TableCellNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:428](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L428)

___

### $createTableNode

▸ **$createTableNode**(): [`TableNode`](../classes/lexical_table.TableNode.md)

#### Returns

[`TableNode`](../classes/lexical_table.TableNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:648](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L648)

___

### $createTableNodeWithDimensions

▸ **$createTableNodeWithDimensions**(`rowCount`, `columnCount`, `includeHeaders?`): [`TableNode`](../classes/lexical_table.TableNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rowCount` | `number` | `undefined` |
| `columnCount` | `number` | `undefined` |
| `includeHeaders` | [`InsertTableCommandPayloadHeaders`](lexical_table.md#inserttablecommandpayloadheaders) | `true` |

#### Returns

[`TableNode`](../classes/lexical_table.TableNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:40](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L40)

___

### $createTableRowNode

▸ **$createTableRowNode**(`height?`): [`TableRowNode`](../classes/lexical_table.TableRowNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `height?` | `number` |

#### Returns

[`TableRowNode`](../classes/lexical_table.TableRowNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:141](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L141)

___

### $createTableSelection

▸ **$createTableSelection**(): [`TableSelection`](../classes/lexical_table.TableSelection.md)

#### Returns

[`TableSelection`](../classes/lexical_table.TableSelection.md)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:375](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L375)

___

### $createTableSelectionFrom

▸ **$createTableSelectionFrom**(`tableNode`, `anchorCell`, `focusCell`): [`TableSelection`](../classes/lexical_table.TableSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |
| `anchorCell` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |
| `focusCell` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |

#### Returns

[`TableSelection`](../classes/lexical_table.TableSelection.md)

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:386](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L386)

___

### $deleteTableColumn

▸ **$deleteTableColumn**(`tableNode`, `targetIndex`): [`TableNode`](../classes/lexical_table.TableNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |
| `targetIndex` | `number` |

#### Returns

[`TableNode`](../classes/lexical_table.TableNode.md)

**`Deprecated`**

This function does not support merged cells. Use [$deleteTableColumnAtSelection](lexical_table.md#$deletetablecolumnatselection) instead.

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:587](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L587)

___

### $deleteTableColumnAtSelection

▸ **$deleteTableColumnAtSelection**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:717](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L717)

___

### $deleteTableColumn\_\_EXPERIMENTAL

▸ **$deleteTableColumn__EXPERIMENTAL**(): `void`

#### Returns

`void`

**`Deprecated`**

renamed to [$deleteTableColumnAtSelection](lexical_table.md#$deletetablecolumnatselection)

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:799](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L799)

___

### $deleteTableRowAtSelection

▸ **$deleteTableRowAtSelection**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:610](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L610)

___

### $deleteTableRow\_\_EXPERIMENTAL

▸ **$deleteTableRow__EXPERIMENTAL**(): `void`

#### Returns

`void`

**`Deprecated`**

renamed to [$deleteTableRowAtSelection](lexical_table.md#$deletetablerowatselection)

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:715](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L715)

___

### $findCellNode

▸ **$findCellNode**(`node`): ``null`` \| [`TableCellNode`](../classes/lexical_table.TableCellNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

``null`` \| [`TableCellNode`](../classes/lexical_table.TableCellNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableSelectionHelpers.ts:1832](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelectionHelpers.ts#L1832)

___

### $findTableNode

▸ **$findTableNode**(`node`): ``null`` \| [`TableNode`](../classes/lexical_table.TableNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

``null`` \| [`TableNode`](../classes/lexical_table.TableNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableSelectionHelpers.ts:1837](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelectionHelpers.ts#L1837)

___

### $getElementForTableNode

▸ **$getElementForTableNode**(`editor`, `tableNode`): `TableDOMTable`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |

#### Returns

`TableDOMTable`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:598](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L598)

___

### $getNodeTriplet

▸ **$getNodeTriplet**(`source`): [[`TableCellNode`](../classes/lexical_table.TableCellNode.md), [`TableRowNode`](../classes/lexical_table.TableRowNode.md), [`TableNode`](../classes/lexical_table.TableNode.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`LexicalNode`](../classes/lexical.LexicalNode.md) \| [`PointType`](lexical.md#pointtype) \| [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |

#### Returns

[[`TableCellNode`](../classes/lexical_table.TableCellNode.md), [`TableRowNode`](../classes/lexical_table.TableRowNode.md), [`TableNode`](../classes/lexical_table.TableNode.md)]

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:1115](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L1115)

___

### $getTableAndElementByKey

▸ **$getTableAndElementByKey**(`tableNodeKey`, `editor?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableNodeKey` | `string` |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `tableElement` | [`HTMLTableElementWithWithTableSelectionState`](lexical_table.md#htmltableelementwithwithtableselectionstate) |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |

#### Defined in

[packages/lexical-table/src/LexicalTableObserver.ts:65](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableObserver.ts#L65)

___

### $getTableCellNodeFromLexicalNode

▸ **$getTableCellNodeFromLexicalNode**(`startingNode`): [`TableCellNode`](../classes/lexical_table.TableCellNode.md) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `startingNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

[`TableCellNode`](../classes/lexical_table.TableCellNode.md) \| ``null``

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:82](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L82)

___

### $getTableCellNodeRect

▸ **$getTableCellNodeRect**(`tableCellNode`): \{ `colSpan`: `number` ; `columnIndex`: `number` ; `rowIndex`: `number` ; `rowSpan`: `number`  } \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableCellNode` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |

#### Returns

\{ `colSpan`: `number` ; `columnIndex`: `number` ; `rowIndex`: `number` ; `rowSpan`: `number`  } \| ``null``

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:1258](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L1258)

___

### $getTableColumnIndexFromTableCellNode

▸ **$getTableColumnIndexFromTableCellNode**(`tableCellNode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableCellNode` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |

#### Returns

`number`

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:126](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L126)

___

### $getTableNodeFromLexicalNodeOrThrow

▸ **$getTableNodeFromLexicalNodeOrThrow**(`startingNode`): [`TableNode`](../classes/lexical_table.TableNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startingNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

[`TableNode`](../classes/lexical_table.TableNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:106](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L106)

___

### $getTableRowIndexFromTableCellNode

▸ **$getTableRowIndexFromTableCellNode**(`tableCellNode`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableCellNode` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md) |

#### Returns

`number`

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:118](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L118)

___

### $getTableRowNodeFromTableCellNodeOrThrow

▸ **$getTableRowNodeFromTableCellNodeOrThrow**(`startingNode`): [`TableRowNode`](../classes/lexical_table.TableRowNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startingNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

[`TableRowNode`](../classes/lexical_table.TableRowNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:94](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L94)

___

### $insertTableColumn

▸ **$insertTableColumn**(`tableNode`, `targetIndex`, `shouldInsertAfter?`, `columnCount`, `table`): [`TableNode`](../classes/lexical_table.TableNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) | `undefined` |
| `targetIndex` | `number` | `undefined` |
| `shouldInsertAfter` | `boolean` | `true` |
| `columnCount` | `number` | `undefined` |
| `table` | `TableDOMTable` | `undefined` |

#### Returns

[`TableNode`](../classes/lexical_table.TableNode.md)

**`Deprecated`**

This function does not support merged cells. Use [$insertTableColumnAtSelection](lexical_table.md#$inserttablecolumnatselection) or $insertTableColumnAtNode instead.

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:376](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L376)

___

### $insertTableColumnAtSelection

▸ **$insertTableColumnAtSelection**(`insertAfter?`): [`TableCellNode`](../classes/lexical_table.TableCellNode.md) \| ``null``

Inserts a column before or after the current focus cell node,
taking into account any spans. If successful, returns the
first inserted cell node.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `insertAfter` | `boolean` | `true` |

#### Returns

[`TableCellNode`](../classes/lexical_table.TableCellNode.md) \| ``null``

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:440](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L440)

___

### $insertTableColumn\_\_EXPERIMENTAL

▸ **$insertTableColumn__EXPERIMENTAL**(`insertAfter?`): [`TableCellNode`](../classes/lexical_table.TableCellNode.md) \| ``null``

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `insertAfter` | `boolean` | `true` |

#### Returns

[`TableCellNode`](../classes/lexical_table.TableCellNode.md) \| ``null``

**`Deprecated`**

renamed to [$insertTableColumnAtSelection](lexical_table.md#$inserttablecolumnatselection)

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:478](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L478)

___

### $insertTableRow

▸ **$insertTableRow**(`tableNode`, `targetIndex`, `shouldInsertAfter?`, `rowCount`, `table`): [`TableNode`](../classes/lexical_table.TableNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) | `undefined` |
| `targetIndex` | `number` | `undefined` |
| `shouldInsertAfter` | `boolean` | `true` |
| `rowCount` | `number` | `undefined` |
| `table` | `TableDOMTable` | `undefined` |

#### Returns

[`TableNode`](../classes/lexical_table.TableNode.md)

**`Deprecated`**

This function does not support merged cells. Use [$insertTableRowAtSelection](lexical_table.md#$inserttablerowatselection) or $insertTableRowAtNode instead.

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:172](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L172)

___

### $insertTableRowAtSelection

▸ **$insertTableRowAtSelection**(`insertAfter?`): [`TableRowNode`](../classes/lexical_table.TableRowNode.md) \| ``null``

Inserts a table row before or after the current focus cell node,
taking into account any spans. If successful, returns the
inserted table row node.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `insertAfter` | `boolean` | `true` |

#### Returns

[`TableRowNode`](../classes/lexical_table.TableRowNode.md) \| ``null``

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:257](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L257)

___

### $insertTableRow\_\_EXPERIMENTAL

▸ **$insertTableRow__EXPERIMENTAL**(`insertAfter?`): [`TableRowNode`](../classes/lexical_table.TableRowNode.md) \| ``null``

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `insertAfter` | `boolean` | `true` |

#### Returns

[`TableRowNode`](../classes/lexical_table.TableRowNode.md) \| ``null``

**`Deprecated`**

renamed to [$insertTableRowAtSelection](lexical_table.md#$inserttablerowatselection)

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:295](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L295)

___

### $isScrollableTablesActive

▸ **$isScrollableTablesActive**(`editor?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |

#### Returns

`boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:151](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L151)

___

### $isTableCellNode

▸ **$isTableCellNode**(`node`): node is TableCellNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is TableCellNode

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:436](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L436)

___

### $isTableNode

▸ **$isTableNode**(`node`): node is TableNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is TableNode

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:652](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L652)

___

### $isTableRowNode

▸ **$isTableRowNode**(`node`): node is TableRowNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is TableRowNode

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:145](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L145)

___

### $isTableSelection

▸ **$isTableSelection**(`x`): x is TableSelection

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is TableSelection

#### Defined in

[packages/lexical-table/src/LexicalTableSelection.ts:371](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelection.ts#L371)

___

### $mergeCells

▸ **$mergeCells**(`cellNodes`): [`TableCellNode`](../classes/lexical_table.TableCellNode.md) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `cellNodes` | [`TableCellNode`](../classes/lexical_table.TableCellNode.md)[] |

#### Returns

[`TableCellNode`](../classes/lexical_table.TableCellNode.md) \| ``null``

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:819](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L819)

___

### $removeTableRowAtIndex

▸ **$removeTableRowAtIndex**(`tableNode`, `indexToDelete`): [`TableNode`](../classes/lexical_table.TableNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |
| `indexToDelete` | `number` |

#### Returns

[`TableNode`](../classes/lexical_table.TableNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:154](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L154)

___

### $unmergeCell

▸ **$unmergeCell**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableUtils.ts:928](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableUtils.ts#L928)

___

### applyTableHandlers

▸ **applyTableHandlers**(`tableNode`, `element`, `editor`, `hasTabHandler`): [`TableObserver`](../classes/lexical_table.TableObserver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |
| `element` | `HTMLElement` |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `hasTabHandler` | `boolean` |

#### Returns

[`TableObserver`](../classes/lexical_table.TableObserver.md)

#### Defined in

[packages/lexical-table/src/LexicalTableSelectionHelpers.ts:180](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelectionHelpers.ts#L180)

___

### getDOMCellFromTarget

▸ **getDOMCellFromTarget**(`node`): [`TableDOMCell`](lexical_table.md#tabledomcell) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| `Node` |

#### Returns

[`TableDOMCell`](lexical_table.md#tabledomcell) \| ``null``

#### Defined in

[packages/lexical-table/src/LexicalTableSelectionHelpers.ts:1277](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelectionHelpers.ts#L1277)

___

### getTableElement

▸ **getTableElement**\<`T`\>(`tableNode`, `dom`): [`HTMLTableElementWithWithTableSelectionState`](lexical_table.md#htmltableelementwithwithtableselectionstate) \| `T` & ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``null`` \| `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableNode` | [`TableNode`](../classes/lexical_table.TableNode.md) |
| `dom` | `T` |

#### Returns

[`HTMLTableElementWithWithTableSelectionState`](lexical_table.md#htmltableelementwithwithtableselectionstate) \| `T` & ``null``

#### Defined in

[packages/lexical-table/src/LexicalTableSelectionHelpers.ts:124](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelectionHelpers.ts#L124)

___

### getTableObserverFromTableElement

▸ **getTableObserverFromTableElement**(`tableElement`): [`TableObserver`](../classes/lexical_table.TableObserver.md) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableElement` | [`HTMLTableElementWithWithTableSelectionState`](lexical_table.md#htmltableelementwithwithtableselectionstate) |

#### Returns

[`TableObserver`](../classes/lexical_table.TableObserver.md) \| ``null``

#### Defined in

[packages/lexical-table/src/LexicalTableSelectionHelpers.ts:1271](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableSelectionHelpers.ts#L1271)

___

### registerTableCellUnmergeTransform

▸ **registerTableCellUnmergeTransform**(`editor`): () => `void`

Register a transform to ensure that all TableCellNode have a colSpan and rowSpan of 1.
This should only be registered when you do not want to support merged cells.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | The editor |

#### Returns

`fn`

An unregister callback

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTablePluginHelpers.ts:176](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTablePluginHelpers.ts#L176)

___

### registerTablePlugin

▸ **registerTablePlugin**(`editor`): () => `void`

Register the INSERT_TABLE_COMMAND listener and the table integrity transforms. The
table selection observer should be registered separately after this with
[registerTableSelectionObserver](lexical_table.md#registertableselectionobserver).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | The editor |

#### Returns

`fn`

An unregister callback

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTablePluginHelpers.ts:305](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTablePluginHelpers.ts#L305)

___

### registerTableSelectionObserver

▸ **registerTableSelectionObserver**(`editor`, `hasTabHandler?`): () => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | `undefined` |
| `hasTabHandler` | `boolean` | `true` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTablePluginHelpers.ts:231](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTablePluginHelpers.ts#L231)

___

### setScrollableTablesActive

▸ **setScrollableTablesActive**(`editor`, `active`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `active` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:157](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L157)
