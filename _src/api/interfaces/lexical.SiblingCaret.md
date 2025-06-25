---
id: "lexical.SiblingCaret"
title: "Interface: SiblingCaret<T, D>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).SiblingCaret

A SiblingCaret points from an origin LexicalNode towards its next or previous sibling.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) = [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `D` | extends [`CaretDirection`](../modules/lexical.md#caretdirection) = [`CaretDirection`](../modules/lexical.md#caretdirection) |

## Hierarchy

- [`BaseCaret`](lexical.BaseCaret.md)\<`T`, `D`, ``"sibling"``\>

  ↳ **`SiblingCaret`**

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

• **getChildCaret**: () => ``null`` \| [`ChildCaret`](lexical.ChildCaret.md)\<`T` & [`ElementNode`](../classes/lexical.ElementNode.md), `D`\>

If the origin of this node is an ElementNode, return the ChildCaret of this origin in the same direction.
If the origin is not an ElementNode, this will return null.

#### Type declaration

▸ (): ``null`` \| [`ChildCaret`](lexical.ChildCaret.md)\<`T` & [`ElementNode`](../classes/lexical.ElementNode.md), `D`\>

##### Returns

``null`` \| [`ChildCaret`](lexical.ChildCaret.md)\<`T` & [`ElementNode`](../classes/lexical.ElementNode.md), `D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:184](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L184)

___

### getFlipped

• **getFlipped**: () => [`NodeCaret`](../modules/lexical.md#nodecaret)\<[`FlipDirection`](../modules/lexical.md#flipdirection)\<`D`\>\>

Get a new NodeCaret with the head and tail of its directional arrow flipped, such that flipping twice is the identity.
For example, given a non-empty parent with a firstChild and lastChild, and a second emptyParent node with no children:

**`Example`**

```
caret.getFlipped().getFlipped().is(caret) === true;
$getChildCaret(parent, 'next').getFlipped().is($getSiblingCaret(firstChild, 'previous')) === true;
$getSiblingCaret(lastChild, 'next').getFlipped().is($getChildCaret(parent, 'previous')) === true;
$getSiblingCaret(firstChild, 'next).getFlipped().is($getSiblingCaret(lastChild, 'previous')) === true;
$getChildCaret(emptyParent, 'next').getFlipped().is($getChildCaret(emptyParent, 'previous')) === true;
```

#### Type declaration

▸ (): [`NodeCaret`](../modules/lexical.md#nodecaret)\<[`FlipDirection`](../modules/lexical.md#flipdirection)\<`D`\>\>

##### Returns

[`NodeCaret`](../modules/lexical.md#nodecaret)\<[`FlipDirection`](../modules/lexical.md#flipdirection)\<`D`\>\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:221](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L221)

___

### getLatest

• **getLatest**: () => [`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

Get a new caret with the latest origin pointer

#### Type declaration

▸ (): [`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

##### Returns

[`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:179](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L179)

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

[packages/lexical/src/caret/LexicalCaret.ts:191](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L191)

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

• **isSameNodeCaret**: (`other`: `undefined` \| ``null`` \| [`PointCaret`](../modules/lexical.md#pointcaret)\<[`CaretDirection`](../modules/lexical.md#caretdirection)\>) => other is (SiblingCaret\<T, D\> \| T) extends TextNode ? TextPointCaret\<T & TextNode, D\> : never

Return true if other is a SiblingCaret or TextPointCaret with the same
origin (by node key comparison) and direction.

#### Type declaration

▸ (`other`): other is (SiblingCaret\<T, D\> \| T) extends TextNode ? TextPointCaret\<T & TextNode, D\> : never

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`PointCaret`](../modules/lexical.md#pointcaret)\<[`CaretDirection`](../modules/lexical.md#caretdirection)\> |

##### Returns

other is (SiblingCaret\<T, D\> \| T) extends TextNode ? TextPointCaret\<T & TextNode, D\> : never

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:196](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L196)

___

### isSamePointCaret

• **isSamePointCaret**: (`other`: `undefined` \| ``null`` \| [`PointCaret`](../modules/lexical.md#pointcaret)\<[`CaretDirection`](../modules/lexical.md#caretdirection)\>) => other is SiblingCaret\<T, D\>

Return true if other is a SiblingCaret with the same
origin (by node key comparison) and direction.

#### Type declaration

▸ (`other`): other is SiblingCaret\<T, D\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`PointCaret`](../modules/lexical.md#pointcaret)\<[`CaretDirection`](../modules/lexical.md#caretdirection)\> |

##### Returns

other is SiblingCaret\<T, D\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:205](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L205)

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

• `Readonly` **type**: ``"sibling"``

sibling for a SiblingCaret (pointing at the next or previous sibling) or child for a ChildCaret (pointing at the first or last child)

#### Inherited from

[BaseCaret](lexical.BaseCaret.md).[type](lexical.BaseCaret.md#type)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:55](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L55)
