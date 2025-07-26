---
id: "lexical.CommonAncestorResultBranch"
title: "Interface: CommonAncestorResultBranch<A, B>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).CommonAncestorResultBranch

Node a and node b have a common ancestor but are on different branches,
the `a` and `b` properties of this result are the ancestors of a and b
that are children of the commonAncestor. Since they are siblings, their
positions are comparable to determine order in the document.

## Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `B` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

## Properties

### a

• `Readonly` **a**: [`ElementNode`](../classes/lexical.ElementNode.md) \| `A`

The ancestor of `a` that is a child of `commonAncestor`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1325](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1325)

___

### b

• `Readonly` **b**: [`ElementNode`](../classes/lexical.ElementNode.md) \| `B`

The ancestor of `b` that is a child of `commonAncestor`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1327](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1327)

___

### commonAncestor

• `Readonly` **commonAncestor**: [`ElementNode`](../classes/lexical.ElementNode.md)

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1323](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1323)

___

### type

• `Readonly` **type**: ``"branch"``

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1322](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1322)
