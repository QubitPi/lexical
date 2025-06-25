---
id: "lexical.CaretRange"
title: "Interface: CaretRange<D>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).CaretRange

A RangeSelection expressed as a pair of Carets

## Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](../modules/lexical.md#caretdirection) = [`CaretDirection`](../modules/lexical.md#caretdirection) |

## Hierarchy

- `Iterable`\<[`NodeCaret`](../modules/lexical.md#nodecaret)\<`D`\>\>

  ↳ **`CaretRange`**

## Properties

### anchor

• **anchor**: [`PointCaret`](../modules/lexical.md#pointcaret)\<`D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:99](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L99)

___

### direction

• `Readonly` **direction**: `D`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:98](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L98)

___

### focus

• **focus**: [`PointCaret`](../modules/lexical.md#pointcaret)\<`D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:100](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L100)

___

### getTextSlices

• **getTextSlices**: () => [`TextPointCaretSliceTuple`](../modules/lexical.md#textpointcaretslicetuple)\<`D`\>

There are between zero and two non-null TextSliceCarets for a CaretRange.
Note that when anchor and focus share an origin node the second element
will be null because the slice is entirely represented by the first element.

`[slice, slice]`: anchor and focus are TextPointCaret with distinct origin nodes
`[slice, null]`: anchor is a TextPointCaret
`[null, slice]`: focus is a TextPointCaret
`[null, null]`: Neither anchor nor focus are TextPointCarets

#### Type declaration

▸ (): [`TextPointCaretSliceTuple`](../modules/lexical.md#textpointcaretslicetuple)\<`D`\>

##### Returns

[`TextPointCaretSliceTuple`](../modules/lexical.md#textpointcaretslicetuple)\<`D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:122](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L122)

___

### isCollapsed

• **isCollapsed**: () => `boolean`

Return true if anchor and focus are the same caret

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:102](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L102)

___

### iterNodeCarets

• **iterNodeCarets**: (`rootMode?`: [`RootMode`](../modules/lexical.md#rootmode)) => `IterableIterator`\<[`NodeCaret`](../modules/lexical.md#nodecaret)\<`D`\>\>

Iterate the carets between anchor and focus in a pre-order fashion, note
that this does not include any text slices represented by the anchor and/or
focus. Those are accessed separately from getTextSlices.

An ElementNode origin will be yielded as a ChildCaret on enter,
and a SiblingCaret on leave.

#### Type declaration

▸ (`rootMode?`): `IterableIterator`\<[`NodeCaret`](../modules/lexical.md#nodecaret)\<`D`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `rootMode?` | [`RootMode`](../modules/lexical.md#rootmode) |

##### Returns

`IterableIterator`\<[`NodeCaret`](../modules/lexical.md#nodecaret)\<`D`\>\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:111](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L111)

___

### type

• `Readonly` **type**: ``"node-caret-range"``

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:97](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L97)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`\<[`NodeCaret`](../modules/lexical.md#nodecaret)\<`D`\>, `any`, `undefined`\>

#### Returns

`Iterator`\<[`NodeCaret`](../modules/lexical.md#nodecaret)\<`D`\>, `any`, `undefined`\>

#### Inherited from

Iterable.[iterator]

#### Defined in

[node_modules/typescript/lib/lib.es2015.iterable.d.ts:49](https://github.com/QubitPi/lexical/tree/main/node_modules/typescript/lib/lib.es2015.iterable.d.ts#L49)
