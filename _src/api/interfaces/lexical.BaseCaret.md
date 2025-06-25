---
id: "lexical.BaseCaret"
title: "Interface: BaseCaret<T, D, Type>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).BaseCaret

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `D` | extends [`CaretDirection`](../modules/lexical.md#caretdirection) |
| `Type` | `Type` |

## Hierarchy

- `Iterable`\<[`SiblingCaret`](lexical.SiblingCaret.md)\<[`LexicalNode`](../classes/lexical.LexicalNode.md), `D`\>\>

  ↳ **`BaseCaret`**

  ↳↳ [`ChildCaret`](lexical.ChildCaret.md)

  ↳↳ [`SiblingCaret`](lexical.SiblingCaret.md)

  ↳↳ [`TextPointCaret`](lexical.TextPointCaret.md)

## Properties

### direction

• `Readonly` **direction**: `D`

next if pointing at the next sibling or first child, previous if pointing at the previous sibling or last child

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

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:63](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L63)

___

### getNodeAtCaret

• **getNodeAtCaret**: () => ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

Get the node connected to the origin in the caret's direction, or null if there is no node

#### Type declaration

▸ (): ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

##### Returns

``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

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

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:59](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L59)

___

### getSiblingCaret

• **getSiblingCaret**: () => [`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

Get a new SiblingCaret with this same node

#### Type declaration

▸ (): [`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

##### Returns

[`SiblingCaret`](lexical.SiblingCaret.md)\<`T`, `D`\>

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

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:75](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L75)

___

### origin

• `Readonly` **origin**: `T`

The origin node of this caret, typically this is what you will use in traversals

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

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:85](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L85)

___

### type

• `Readonly` **type**: `Type`

sibling for a SiblingCaret (pointing at the next or previous sibling) or child for a ChildCaret (pointing at the first or last child)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:55](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L55)
