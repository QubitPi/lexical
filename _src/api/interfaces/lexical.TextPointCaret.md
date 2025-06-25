---
id: "lexical.TextPointCaret"
title: "Interface: TextPointCaret<T, D>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).TextPointCaret

A TextPointCaret is a special case of a SiblingCaret that also carries
an offset used for representing partially selected TextNode at the edges
of a CaretRange.

The direction determines which part of the text is adjacent to the caret,
if next it's all of the text after offset. If previous, it's all of the
text before offset.

While this can be used in place of any SiblingCaret of a TextNode,
the offset into the text will be ignored except in contexts that
specifically use the TextPointCaret or PointCaret types.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TextNode`](../classes/lexical.TextNode.md) = [`TextNode`](../classes/lexical.TextNode.md) |
| `D` | extends [`CaretDirection`](../modules/lexical.md#caretdirection) = [`CaretDirection`](../modules/lexical.md#caretdirection) |

## Hierarchy

- [`BaseCaret`](lexical.BaseCaret.md)\<`T`, `D`, ``"text"``\>

  ↳ **`TextPointCaret`**

## Properties

### direction

• `Readonly` **direction**: `D`

next if pointing at the next sibling or first child, previous if pointing at the previous sibling or last child

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[direction](lexical.BaseCaret.md#direction)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:57](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L57)

___

### getAdjacentCaret

• **getAdjacentCaret**: () => ``null`` \| [`SiblingCaret`](lexical.SiblingCaret.md)\<[`LexicalNode`](../classes/lexical.LexicalNode.md), `D`\>

Get a new SiblingCaret from getNodeAtCaret() in the same direction.

#### Type declaration

▸ (): ``null`` \| [`SiblingCaret`](lexical.SiblingCaret.md)\<[`LexicalNode`](../classes/lexical.LexicalNode.md), `D`\>

##### Returns

``null`` \| [`SiblingCaret`](lexical.SiblingCaret.md)\<[`LexicalNode`](../classes/lexical.LexicalNode.md), `D`\>

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[getAdjacentCaret](lexical.BaseCaret.md#getadjacentcaret)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:63](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L63)

___

### getChildCaret

• **getChildCaret**: () => ``null``

A TextPointCaret can not have a ChildCaret.

#### Type declaration

▸ (): ``null``

##### Returns

``null``

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:291](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L291)

___

### getFlipped

• **getFlipped**: () => [`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, [`FlipDirection`](../modules/lexical.md#flipdirection)\<`D`\>\>

Get a new TextPointCaret with the head and tail of its directional arrow flipped, such that flipping twice is the identity.
For a TextPointCaret this merely flips the direction because the arrow is internal to the node.

**`Example`**

```
caret.getFlipped().getFlipped().is(caret) === true;
```

#### Type declaration

▸ (): [`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, [`FlipDirection`](../modules/lexical.md#flipdirection)\<`D`\>\>

##### Returns

[`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, [`FlipDirection`](../modules/lexical.md#flipdirection)\<`D`\>\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:322](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L322)

___

### getLatest

• **getLatest**: () => [`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, `D`\>

Get a new caret with the latest origin pointer

#### Type declaration

▸ (): [`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, `D`\>

##### Returns

[`TextPointCaret`](lexical.TextPointCaret.md)\<`T`, `D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:287](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L287)

___

### getNodeAtCaret

• **getNodeAtCaret**: () => ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

Get the node connected to the origin in the caret's direction, or null if there is no node

#### Type declaration

▸ (): ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

##### Returns

``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[getNodeAtCaret](lexical.BaseCaret.md#getnodeatcaret)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:61](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L61)

___

### getParentAtCaret

• **getParentAtCaret**: () => ``null`` \| [`ElementNode`](../classes/lexical.ElementNode.md)

Get the ElementNode that is the logical parent (`origin` for `ChildCaret`, `origin.getParent()` for `SiblingCaret`)

#### Type declaration

▸ (): ``null`` \| [`ElementNode`](../classes/lexical.ElementNode.md)

##### Returns

``null`` \| [`ElementNode`](../classes/lexical.ElementNode.md)

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[getParentAtCaret](lexical.BaseCaret.md#getparentatcaret)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:59](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L59)

___

### getParentCaret

• **getParentCaret**: (`mode?`: [`RootMode`](../modules/lexical.md#rootmode)) => ``null`` \| [`SiblingCaret`](lexical.SiblingCaret.md)\<[`ElementNode`](../classes/lexical.ElementNode.md), `D`\>

Get the caret in the same direction from the parent of this origin.

#### Type declaration

▸ (`mode?`): ``null`` \| [`SiblingCaret`](lexical.SiblingCaret.md)\<[`ElementNode`](../classes/lexical.ElementNode.md), `D`\>

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode?` | [`RootMode`](../modules/lexical.md#rootmode) | 'root' to return null at the root, 'shadowRoot' to return null at the root or any shadow root |

##### Returns

``null`` \| [`SiblingCaret`](lexical.SiblingCaret.md)\<[`ElementNode`](../classes/lexical.ElementNode.md), `D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:298](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L298)

___

### getSiblingCaret

• **getSiblingCaret**: () => [`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

Get a new SiblingCaret with this same node

#### Type declaration

▸ (): [`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

##### Returns

[`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[getSiblingCaret](lexical.BaseCaret.md#getsiblingcaret)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:67](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L67)

___

### insert

• **insert**: (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md)) => `this`

Insert a node connected to origin in this direction (before the node that this caret is pointing towards, if any existed).
For a `SiblingCaret` this is `origin.insertAfter(node)` for next, or `origin.insertBefore(node)` for previous.
For a `ChildCaret` this is `origin.splice(0, 0, [node])` for next or `origin.append(node)` for previous.

#### Type declaration

▸ (`node`): `this`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

##### Returns

`this`

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[insert](lexical.BaseCaret.md#insert)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:75](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L75)

___

### isSameNodeCaret

• **isSameNodeCaret**: (`other`: `undefined` \| ``null`` \| [`PointCaret`](../modules/lexical.md#pointcaret)\<[`CaretDirection`](../modules/lexical.md#caretdirection)\>) => other is TextPointCaret\<T, D\> \| SiblingCaret\<T, D\>

Return true if other is a TextPointCaret or SiblingCaret with the same
origin (by node key comparison) and direction.

#### Type declaration

▸ (`other`): other is TextPointCaret\<T, D\> \| SiblingCaret\<T, D\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`PointCaret`](../modules/lexical.md#pointcaret)\<[`CaretDirection`](../modules/lexical.md#caretdirection)\> |

##### Returns

other is TextPointCaret\<T, D\> \| SiblingCaret\<T, D\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:303](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L303)

___

### isSamePointCaret

• **isSamePointCaret**: (`other`: `undefined` \| ``null`` \| [`PointCaret`](../modules/lexical.md#pointcaret)\<[`CaretDirection`](../modules/lexical.md#caretdirection)\>) => other is TextPointCaret\<T, D\>

Return true if other is a ChildCaret with the same
origin (by node key comparison) and direction.

#### Type declaration

▸ (`other`): other is TextPointCaret\<T, D\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`PointCaret`](../modules/lexical.md#pointcaret)\<[`CaretDirection`](../modules/lexical.md#caretdirection)\> |

##### Returns

other is TextPointCaret\<T, D\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:310](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L310)

___

### offset

• `Readonly` **offset**: `number`

The offset into the string

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:285](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L285)

___

### origin

• `Readonly` **origin**: `T`

The origin node of this caret, typically this is what you will use in traversals

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[origin](lexical.BaseCaret.md#origin)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:53](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L53)

___

### remove

• **remove**: () => `this`

Remove the getNodeAtCaret() node that this caret is pointing towards, if it exists

#### Type declaration

▸ (): `this`

##### Returns

`this`

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[remove](lexical.BaseCaret.md#remove)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:69](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L69)

___

### replaceOrInsert

• **replaceOrInsert**: (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md), `includeChildren?`: `boolean`) => `this`

If getNodeAtCaret() is not null then replace it with node, otherwise insert node

#### Type declaration

▸ (`node`, `includeChildren?`): `this`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `includeChildren?` | `boolean` |

##### Returns

`this`

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[replaceOrInsert](lexical.BaseCaret.md#replaceorinsert)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:77](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L77)

___

### splice

• **splice**: (`deleteCount`: `number`, `nodes`: `Iterable`\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>, `nodesDirection?`: [`CaretDirection`](../modules/lexical.md#caretdirection)) => `this`

Splice an iterable (typically an Array) of nodes into this location.

#### Type declaration

▸ (`deleteCount`, `nodes`, `nodesDirection?`): `this`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `deleteCount` | `number` | The number of existing nodes to replace or delete |
| `nodes` | `Iterable`\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\> | An iterable of nodes that will be inserted in this location, using replace instead of insert for the first deleteCount nodes |
| `nodesDirection?` | [`CaretDirection`](../modules/lexical.md#caretdirection) | The direction of the nodes iterable, defaults to 'next' |

##### Returns

`this`

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[splice](lexical.BaseCaret.md#splice)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:85](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L85)

___

### type

• `Readonly` **type**: ``"text"``

sibling for a SiblingCaret (pointing at the next or previous sibling) or child for a ChildCaret (pointing at the first or last child)

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[type](lexical.BaseCaret.md#type)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:55](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L55)
