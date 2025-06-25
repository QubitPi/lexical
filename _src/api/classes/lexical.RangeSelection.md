---
id: "lexical.RangeSelection"
title: "Class: RangeSelection"
custom_edit_url: null
---

[lexical](../modules/lexical.md).RangeSelection

## Implements

- [`BaseSelection`](../interfaces/lexical.BaseSelection.md)

## Constructors

### constructor

• **new RangeSelection**(`anchor`, `focus`, `format`, `style`): [`RangeSelection`](lexical.RangeSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`PointType`](../modules/lexical.md#pointtype) |
| `focus` | [`PointType`](../modules/lexical.md#pointtype) |
| `format` | `number` |
| `style` | `string` |

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:468](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L468)

## Properties

### \_cachedNodes

• **\_cachedNodes**: ``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[_cachedNodes](../interfaces/lexical.BaseSelection.md#_cachednodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:465](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L465)

___

### anchor

• **anchor**: [`PointType`](../modules/lexical.md#pointtype)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:463](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L463)

___

### dirty

• **dirty**: `boolean`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[dirty](../interfaces/lexical.BaseSelection.md#dirty)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:466](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L466)

___

### focus

• **focus**: [`PointType`](../modules/lexical.md#pointtype)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:464](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L464)

___

### format

• **format**: `number`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:461](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L461)

___

### style

• **style**: `string`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:462](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L462)

## Methods

### applyDOMRange

▸ **applyDOMRange**(`range`): `void`

Attempts to map a DOM selection range onto this Lexical Selection,
setting the anchor, focus, and type accordingly

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `range` | `StaticRange` | a DOM Selection range conforming to the StaticRange interface. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:647](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L647)

___

### clone

▸ **clone**(): [`RangeSelection`](lexical.RangeSelection.md)

Creates a new RangeSelection, copying over all the property values from this one.

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

a new RangeSelection with the same property values as this one.

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[clone](../interfaces/lexical.BaseSelection.md#clone)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:680](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L680)

___

### deleteCharacter

▸ **deleteCharacter**(`isBackward`): `void`

Performs one logical character deletion operation on the EditorState based on the current Selection.
Handles different node types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBackward` | `boolean` | whether or not the selection is backwards. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1716](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1716)

___

### deleteLine

▸ **deleteLine**(`isBackward`): `void`

Performs one logical line deletion operation on the EditorState based on the current Selection.
Handles different node types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBackward` | `boolean` | whether or not the selection is backwards. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1890](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1890)

___

### deleteWord

▸ **deleteWord**(`isBackward`): `void`

Performs one logical word deletion operation on the EditorState based on the current Selection.
Handles different node types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBackward` | `boolean` | whether or not the selection is backwards. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1910](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1910)

___

### extract

▸ **extract**(): [`LexicalNode`](lexical.LexicalNode.md)[]

Extracts the nodes in the Selection, splitting nodes where necessary
to get offset-level precision.

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)[]

The nodes in the Selection

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[extract](../interfaces/lexical.BaseSelection.md#extract)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1479](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1479)

___

### formatText

▸ **formatText**(`formatType`, `alignWithFormat?`): `void`

Applies the provided format to the TextNodes in the Selection, splitting or
merging nodes as necessary.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `formatType` | [`TextFormatType`](../modules/lexical.md#textformattype) | `undefined` | the format type to apply to the nodes in the Selection. |
| `alignWithFormat` | ``null`` \| `number` | `null` | a 32-bit integer representing formatting flags to align with. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1164](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1164)

___

### forwardDeletion

▸ **forwardDeletion**(`anchor`, `anchorNode`, `isBackward`): `boolean`

Helper for handling forward character and word deletion that prevents element nodes
like a table, columns layout being destroyed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchor` | [`PointType`](../modules/lexical.md#pointtype) | the anchor |
| `anchorNode` | [`ElementNode`](lexical.ElementNode.md) \| [`TextNode`](lexical.TextNode.md) | the anchor node in the selection |
| `isBackward` | `boolean` | whether or not selection is backwards |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1684](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1684)

___

### getCachedNodes

▸ **getCachedNodes**(): ``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Returns

``null`` \| [`LexicalNode`](lexical.LexicalNode.md)[]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getCachedNodes](../interfaces/lexical.BaseSelection.md#getcachednodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:484](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L484)

___

### getNodes

▸ **getNodes**(): [`LexicalNode`](lexical.LexicalNode.md)[]

Gets all the nodes in the Selection. Uses caching to make it generally suitable
for use in hot paths.

See also the [CaretRange](../interfaces/lexical.CaretRange.md) APIs (starting with
[$caretRangeFromSelection](../modules/lexical.md#$caretrangefromselection)), which are likely to provide a better
foundation for any operation where partial selection is relevant
(e.g. the anchor or focus are inside an ElementNode and TextNode)

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)[]

an Array containing all the nodes in the Selection

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getNodes](../interfaces/lexical.BaseSelection.md#getnodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:531](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L531)

___

### getStartEndPoints

▸ **getStartEndPoints**(): ``null`` \| [[`PointType`](../modules/lexical.md#pointtype), [`PointType`](../modules/lexical.md#pointtype)]

#### Returns

``null`` \| [[`PointType`](../modules/lexical.md#pointtype), [`PointType`](../modules/lexical.md#pointtype)]

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getStartEndPoints](../interfaces/lexical.BaseSelection.md#getstartendpoints)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1931](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1931)

___

### getTextContent

▸ **getTextContent**(): `string`

Gets the (plain) text content of all the nodes in the selection.

#### Returns

`string`

a string representing the text content of all the nodes in the Selection

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[getTextContent](../interfaces/lexical.BaseSelection.md#gettextcontent)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:579](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L579)

___

### hasFormat

▸ **hasFormat**(`type`): `boolean`

Returns whether the provided TextFormatType is present on the Selection. This will be true if any node in the Selection
has the specified format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`TextFormatType`](../modules/lexical.md#textformattype) | the TextFormatType to check for. |

#### Returns

`boolean`

true if the provided format is currently toggled on on the Selection, false otherwise.

#### Defined in

[packages/lexical/src/LexicalSelection.ts:719](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L719)

___

### insertLineBreak

▸ **insertLineBreak**(`selectStart?`): `void`

Inserts a logical linebreak, which may be a new LineBreakNode or a new ParagraphNode, into the EditorState at the
current Selection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectStart?` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1462](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1462)

___

### insertNodes

▸ **insertNodes**(`nodes`): `void`

Attempts to "intelligently" insert an arbitrary list of Lexical nodes into the EditorState at the
current Selection according to a set of heuristics that determine how surrounding nodes
should be changed, replaced, or moved to accommodate the incoming ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodes` | [`LexicalNode`](lexical.LexicalNode.md)[] | the nodes to insert |

#### Returns

`void`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[insertNodes](../interfaces/lexical.BaseSelection.md#insertnodes)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1315](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1315)

___

### insertParagraph

▸ **insertParagraph**(): ``null`` \| [`ElementNode`](lexical.ElementNode.md)

Inserts a new ParagraphNode into the EditorState at the current Selection

#### Returns

``null`` \| [`ElementNode`](lexical.ElementNode.md)

the newly inserted node.

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1431](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1431)

___

### insertRawText

▸ **insertRawText**(`text`): `void`

Attempts to insert the provided text into the EditorState at the current Selection.
converts tabs, newlines, and carriage returns into LexicalNodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | the text to insert into the Selection |

#### Returns

`void`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[insertRawText](../interfaces/lexical.BaseSelection.md#insertrawtext)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:730](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L730)

___

### insertText

▸ **insertText**(`text`): `void`

Insert the provided text into the EditorState at the current Selection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | the text to insert into the Selection |

#### Returns

`void`

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[insertText](../interfaces/lexical.BaseSelection.md#inserttext)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:752](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L752)

___

### is

▸ **is**(`selection`): `boolean`

Used to check if the provided selections is equal to this one by value,
including anchor, focus, format, and style properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | the Selection to compare this one to. |

#### Returns

`boolean`

true if the Selections are equal, false otherwise.

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[is](../interfaces/lexical.BaseSelection.md#is)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:498](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L498)

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

[packages/lexical/src/LexicalSelection.ts:1927](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1927)

___

### isCollapsed

▸ **isCollapsed**(): `boolean`

Returns whether the Selection is "collapsed", meaning the anchor and focus are
the same node and have the same offset.

#### Returns

`boolean`

true if the Selection is collapsed, false otherwise.

#### Implementation of

[BaseSelection](../interfaces/lexical.BaseSelection.md).[isCollapsed](../interfaces/lexical.BaseSelection.md#iscollapsed)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:516](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L516)

___

### modify

▸ **modify**(`alter`, `isBackward`, `granularity`): `void`

Modifies the Selection according to the parameters and a set of heuristics that account for
various node types. Can be used to safely move or extend selection by one logical "unit" without
dealing explicitly with all the possible node types.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alter` | ``"move"`` \| ``"extend"`` | the type of modification to perform |
| `isBackward` | `boolean` | whether or not selection is backwards |
| `granularity` | ``"character"`` \| ``"word"`` \| ``"lineboundary"`` | the granularity at which to apply the modification |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1537](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1537)

___

### removeText

▸ **removeText**(): `void`

Removes the text in the Selection, adjusting the EditorState accordingly.

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1147](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1147)

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

[packages/lexical/src/LexicalSelection.ts:488](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L488)

___

### setStyle

▸ **setStyle**(`style`): `void`

Sets the value of the style property on the Selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | the style to set at the value of the style property. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:707](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L707)

___

### setTextNodeRange

▸ **setTextNodeRange**(`anchorNode`, `anchorOffset`, `focusNode`, `focusOffset`): `void`

Sets this Selection to be of type "text" at the provided anchor and focus values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchorNode` | [`TextNode`](lexical.TextNode.md) | the anchor node to set on the Selection |
| `anchorOffset` | `number` | the offset to set on the Selection |
| `focusNode` | [`TextNode`](lexical.TextNode.md) | the focus node to set on the Selection |
| `focusOffset` | `number` | the focus offset to set on the Selection |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:564](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L564)

___

### toggleFormat

▸ **toggleFormat**(`format`): `void`

Toggles the provided format on all the TextNodes in the Selection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | [`TextFormatType`](../modules/lexical.md#textformattype) | a string TextFormatType to toggle on the TextNodes in the selection |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:697](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L697)
