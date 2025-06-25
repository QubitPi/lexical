---
id: "lexical_react_LexicalTablePlugin.TablePluginProps"
title: "Interface: TablePluginProps"
custom_edit_url: null
---

[@lexical/react/LexicalTablePlugin](../modules/lexical_react_LexicalTablePlugin.md).TablePluginProps

## Properties

### hasCellBackgroundColor

• `Optional` **hasCellBackgroundColor**: `boolean`

When `false` (default `true`), the background color of TableCellNode will always be removed.

#### Defined in

[packages/lexical-react/src/LexicalTablePlugin.ts:32](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalTablePlugin.ts#L32)

___

### hasCellMerge

• `Optional` **hasCellMerge**: `boolean`

When `false` (default `true`), merged cell support (colspan and rowspan) will be disabled and all
tables will be forced into a regular grid with 1x1 table cells.

#### Defined in

[packages/lexical-react/src/LexicalTablePlugin.ts:28](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalTablePlugin.ts#L28)

___

### hasHorizontalScroll

• `Optional` **hasHorizontalScroll**: `boolean`

When `true` (default `false`), tables will be wrapped in a `<div>` to enable horizontal scrolling

#### Defined in

[packages/lexical-react/src/LexicalTablePlugin.ts:40](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalTablePlugin.ts#L40)

___

### hasTabHandler

• `Optional` **hasTabHandler**: `boolean`

When `true` (default `true`), the tab key can be used to navigate table cells.

#### Defined in

[packages/lexical-react/src/LexicalTablePlugin.ts:36](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalTablePlugin.ts#L36)
