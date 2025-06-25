---
id: "lexical.TextPointCaretSlice"
title: "Interface: TextPointCaretSlice<T, D>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).TextPointCaretSlice

A TextPointCaretSlice is a wrapper for a TextPointCaret that carries a signed
distance representing the direction and amount of text selected from the given
caret. A negative distance means that text before offset is selected, a
positive distance means that text after offset is selected. The offset+distance
pair is not affected in any way by the direction of the caret.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TextNode`](../classes/lexical.TextNode.md) = [`TextNode`](../classes/lexical.TextNode.md) |
| `D` | extends [`CaretDirection`](../modules/lexical.md#caretdirection) = [`CaretDirection`](../modules/lexical.md#caretdirection) |

## Properties

### caret

• `Readonly` **caret**: [`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, `D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:337](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L337)

___

### distance

• `Readonly` **distance**: `number`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:338](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L338)

___

### getSliceIndices

• **getSliceIndices**: () => [startIndex: number, endIndex: number]

#### Type declaration

▸ (): [startIndex: number, endIndex: number]

##### Returns

[startIndex: number, endIndex: number]

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:342](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L342)

___

### getTextContent

• **getTextContent**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:346](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L346)

___

### getTextContentSize

• **getTextContentSize**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:350](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L350)

___

### type

• `Readonly` **type**: ``"slice"``

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:336](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L336)

## Methods

### removeTextSlice

▸ **removeTextSlice**(): [`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, `D`\>

Remove the slice of text from the contained caret, returning a new
TextPointCaret without the wrapper (since the size would be zero).

Note that this is a lower-level utility that does not have any specific
behavior for 'segmented' or 'token' modes and it will not remove
an empty TextNode.

#### Returns

[`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, `D`\>

The inner TextPointCaret with the same offset and direction
         and the latest TextNode origin after mutation

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:362](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L362)
