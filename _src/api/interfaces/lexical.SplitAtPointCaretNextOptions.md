---
id: "lexical.SplitAtPointCaretNextOptions"
title: "Interface: SplitAtPointCaretNextOptions"
custom_edit_url: null
---

[lexical](../modules/lexical.md).SplitAtPointCaretNextOptions

## Properties

### $copyElementNode

• `Optional` **$copyElementNode**: (`node`: [`ElementNode`](../classes/lexical.ElementNode.md)) => [`ElementNode`](../classes/lexical.ElementNode.md)

The function to create the right side of a split ElementNode (default [$copyNode](../modules/lexical.md#$copynode))

#### Type declaration

▸ (`node`): [`ElementNode`](../classes/lexical.ElementNode.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ElementNode`](../classes/lexical.ElementNode.md) |

##### Returns

[`ElementNode`](../classes/lexical.ElementNode.md)

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:664](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L664)

___

### $shouldSplit

• `Optional` **$shouldSplit**: (`node`: [`ElementNode`](../classes/lexical.ElementNode.md), `edge`: ``"first"`` \| ``"last"``) => `boolean`

If element.canBeEmpty() and would create an empty split, this function will be
called with the element and 'first' | 'last'. If it returns false, the empty
split will not be created. Default is `() => true` to always split when possible.

#### Type declaration

▸ (`node`, `edge`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ElementNode`](../classes/lexical.ElementNode.md) |
| `edge` | ``"first"`` \| ``"last"`` |

##### Returns

`boolean`

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:676](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L676)

___

### $splitTextPointCaretNext

• `Optional` **$splitTextPointCaretNext**: (`caret`: [`TextPointCaret`](lexical.TextPointCaret.md)\<[`TextNode`](../classes/lexical.TextNode.md), ``"next"``\>) => [`NodeCaret`](../modules/lexical.md#nodecaret)\<``"next"``\>

The function to split a TextNode (default $splitTextPointCaret)

#### Type declaration

▸ (`caret`): [`NodeCaret`](../modules/lexical.md#nodecaret)\<``"next"``\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `caret` | [`TextPointCaret`](lexical.TextPointCaret.md)\<[`TextNode`](../classes/lexical.TextNode.md), ``"next"``\> |

##### Returns

[`NodeCaret`](../modules/lexical.md#nodecaret)\<``"next"``\>

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:666](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L666)

___

### rootMode

• `Optional` **rootMode**: [`RootMode`](../modules/lexical.md#rootmode)

If the parent matches rootMode a split will not occur, default is 'shadowRoot'

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:670](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L670)
