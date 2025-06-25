---
id: "lexical.ElementDOMSlot"
title: "Class: ElementDOMSlot<T>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).ElementDOMSlot

A utility class for managing the DOM children of an ElementNode

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` = `HTMLElement` |

## Constructors

### constructor

• **new ElementDOMSlot**\<`T`\>(`element`, `before?`, `after?`): [`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` = `HTMLElement` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `T` | The element returned by createDOM |
| `before?` | ``null`` \| `Node` | All managed children will be inserted before this node, if defined |
| `after?` | ``null`` \| `Node` | All managed children will be inserted after this node, if defined |

#### Returns

[`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`T`\>

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:90](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L90)

## Properties

### after

• `Readonly` **after**: ``null`` \| `Node`

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:89](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L89)

___

### before

• `Readonly` **before**: ``null`` \| `Node`

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:88](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L88)

___

### element

• `Readonly` **element**: `T`

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:87](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L87)

## Methods

### getFirstChild

▸ **getFirstChild**(): ``null`` \| `ChildNode`

Returns the first managed child of this node,
which will either be this.after.nextSibling or this.element.firstChild,
and will never be this.before if it is defined.

#### Returns

``null`` \| `ChildNode`

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:168](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L168)

___

### insertChild

▸ **insertChild**(`dom`): `this`

Insert the given child before this.before and any reconciler managed line break node,
or append it if this.before is not defined

#### Parameters

| Name | Type |
| :------ | :------ |
| `dom` | `Node` |

#### Returns

`this`

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:129](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L129)

___

### removeChild

▸ **removeChild**(`dom`): `this`

Remove the managed child from this container, will throw if it was not already there

#### Parameters

| Name | Type |
| :------ | :------ |
| `dom` | `Node` |

#### Returns

`this`

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:141](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L141)

___

### replaceChild

▸ **replaceChild**(`dom`, `prevDom`): `this`

Replace managed child prevDom with dom. Will throw if prevDom is not a child

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dom` | `Node` | The new node to replace prevDom |
| `prevDom` | `Node` | the node that will be replaced |

#### Returns

`this`

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:155](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L155)

___

### withAfter

▸ **withAfter**(`after`): [`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`T`\>

Return a new ElementDOMSlot where all managed children will be inserted after this node

#### Parameters

| Name | Type |
| :------ | :------ |
| `after` | `undefined` \| ``null`` \| `Node` |

#### Returns

[`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`T`\>

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:111](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L111)

___

### withBefore

▸ **withBefore**(`before`): [`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`T`\>

Return a new ElementDOMSlot where all managed children will be inserted before this node

#### Parameters

| Name | Type |
| :------ | :------ |
| `before` | `undefined` \| ``null`` \| `Node` |

#### Returns

[`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`T`\>

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:105](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L105)

___

### withElement

▸ **withElement**\<`ElementType`\>(`element`): [`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`ElementType`\>

Return a new ElementDOMSlot with an updated root element

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ElementType` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `ElementType` |

#### Returns

[`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`ElementType`\>

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:117](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L117)
