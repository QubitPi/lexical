---
id: "lexical_utils"
title: "Module: @lexical/utils"
custom_edit_url: null
---

## Interfaces

- [DFSNode](../interfaces/lexical_utils.DFSNode.md)
- [StateConfigWrapper](../interfaces/lexical_utils.StateConfigWrapper.md)

## References

### $splitNode

Re-exports [$splitNode](lexical.md#$splitnode)

___

### isBlockDomNode

Re-exports [isBlockDomNode](lexical.md#isblockdomnode)

___

### isHTMLAnchorElement

Re-exports [isHTMLAnchorElement](lexical.md#ishtmlanchorelement)

___

### isHTMLElement

Re-exports [isHTMLElement](lexical.md#ishtmlelement)

___

### isInlineDomNode

Re-exports [isInlineDomNode](lexical.md#isinlinedomnode)

## Type Aliases

### DOMNodeToLexicalConversion

Ƭ **DOMNodeToLexicalConversion**: (`element`: `Node`) => [`LexicalNode`](../classes/lexical.LexicalNode.md)

#### Type declaration

▸ (`element`): [`LexicalNode`](../classes/lexical.LexicalNode.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `Node` |

##### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md)

#### Defined in

[packages/lexical-utils/src/index.ts:402](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L402)

___

### DOMNodeToLexicalConversionMap

Ƭ **DOMNodeToLexicalConversionMap**: `Record`\<`string`, [`DOMNodeToLexicalConversion`](lexical_utils.md#domnodetolexicalconversion)\>

#### Defined in

[packages/lexical-utils/src/index.ts:404](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L404)

___

### ObjectKlass

Ƭ **ObjectKlass**\<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

• (`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

[packages/lexical-utils/src/index.ts:644](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L644)

## Variables

### CAN\_USE\_BEFORE\_INPUT

• `Const` **CAN\_USE\_BEFORE\_INPUT**: `boolean` = `CAN_USE_BEFORE_INPUT_`

#### Defined in

[packages/lexical-utils/src/index.ts:79](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L79)

___

### CAN\_USE\_DOM

• `Const` **CAN\_USE\_DOM**: `boolean` = `CAN_USE_DOM_`

#### Defined in

[packages/lexical-utils/src/index.ts:80](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L80)

___

### IS\_ANDROID

• `Const` **IS\_ANDROID**: `boolean` = `IS_ANDROID_`

#### Defined in

[packages/lexical-utils/src/index.ts:81](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L81)

___

### IS\_ANDROID\_CHROME

• `Const` **IS\_ANDROID\_CHROME**: `boolean` = `IS_ANDROID_CHROME_`

#### Defined in

[packages/lexical-utils/src/index.ts:82](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L82)

___

### IS\_APPLE

• `Const` **IS\_APPLE**: `boolean` = `IS_APPLE_`

#### Defined in

[packages/lexical-utils/src/index.ts:83](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L83)

___

### IS\_APPLE\_WEBKIT

• `Const` **IS\_APPLE\_WEBKIT**: `boolean` = `IS_APPLE_WEBKIT_`

#### Defined in

[packages/lexical-utils/src/index.ts:84](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L84)

___

### IS\_CHROME

• `Const` **IS\_CHROME**: `boolean` = `IS_CHROME_`

#### Defined in

[packages/lexical-utils/src/index.ts:85](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L85)

___

### IS\_FIREFOX

• `Const` **IS\_FIREFOX**: `boolean` = `IS_FIREFOX_`

#### Defined in

[packages/lexical-utils/src/index.ts:86](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L86)

___

### IS\_IOS

• `Const` **IS\_IOS**: `boolean` = `IS_IOS_`

#### Defined in

[packages/lexical-utils/src/index.ts:87](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L87)

___

### IS\_SAFARI

• `Const` **IS\_SAFARI**: `boolean` = `IS_SAFARI_`

#### Defined in

[packages/lexical-utils/src/index.ts:88](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L88)

## Functions

### $descendantsMatching

▸ **$descendantsMatching**\<`T`\>(`children`, `$predicate`): `T`[]

A depth first traversal of the children array that stops at and collects
each node that `$predicate` matches. This is typically used to discard
invalid or unsupported wrapping nodes on a children array in the `after`
of an [lexical!DOMConversionOutput](lexical.md#domconversionoutput). For example, a TableNode must only have
TableRowNode as children, but an importer might add invalid nodes based on
caption, tbody, thead, etc. and this will unwrap and discard those.

This function is read-only and performs no mutation operations, which makes
it suitable for import and export purposes but likely not for any in-place
mutation. You should use [$unwrapAndFilterDescendants](lexical_utils.md#$unwrapandfilterdescendants) for in-place
mutations such as node transforms.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `children` | [`LexicalNode`](../classes/lexical.LexicalNode.md)[] | The children to traverse |
| `$predicate` | (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md)) => node is T | Should return true for nodes that are permitted to be children of root |

#### Returns

`T`[]

The children or their descendants that match $predicate

#### Defined in

[packages/lexical-utils/src/index.ts:793](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L793)

___

### $dfs

▸ **$dfs**(`startNode?`, `endNode?`): [`DFSNode`](../interfaces/lexical_utils.DFSNode.md)[]

"Depth-First Search" starts at the root/top node of a tree and goes as far as it can down a branch end
before backtracking and finding a new path. Consider solving a maze by hugging either wall, moving down a
branch until you hit a dead-end (leaf) and backtracking to find the nearest branching path and repeat.
It will then return all the nodes found in the search in an array of objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startNode?` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to start the search, if omitted, it will start at the root node. |
| `endNode?` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to end the search, if omitted, it will find all descendants of the startingNode. |

#### Returns

[`DFSNode`](../interfaces/lexical_utils.DFSNode.md)[]

An array of objects of all the nodes found by the search, including their depth into the tree.
\{depth: number, node: LexicalNode\} It will always return at least 1 node (the start node).

#### Defined in

[packages/lexical-utils/src/index.ts:203](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L203)

___

### $dfsIterator

▸ **$dfsIterator**(`startNode?`, `endNode?`): `IterableIterator`\<[`DFSNode`](../interfaces/lexical_utils.DFSNode.md)\>

$dfs iterator (left to right). Tree traversal is done on the fly as new values are requested with O(1) memory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startNode?` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to start the search, if omitted, it will start at the root node. |
| `endNode?` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to end the search, if omitted, it will find all descendants of the startingNode. |

#### Returns

`IterableIterator`\<[`DFSNode`](../interfaces/lexical_utils.DFSNode.md)\>

An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).

#### Defined in

[packages/lexical-utils/src/index.ts:241](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L241)

___

### $filter

▸ **$filter**\<`T`\>(`nodes`, `filterFn`): `T`[]

Filter the nodes

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodes` | [`LexicalNode`](../classes/lexical.LexicalNode.md)[] | Array of nodes that needs to be filtered |
| `filterFn` | (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md)) => ``null`` \| `T` | A filter function that returns node if the current node satisfies the condition otherwise null |

#### Returns

`T`[]

Array of filtered nodes

#### Defined in

[packages/lexical-utils/src/index.ts:667](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L667)

___

### $findMatchingParent

▸ **$findMatchingParent**\<`T`\>(`startingNode`, `findFn`): ``null`` \| `T`

Starts with a node and moves up the tree (toward the root node) to find a matching node based on
the search parameters of the findFn. (Consider JavaScripts' .find() function where a testing function must be
passed as an argument. eg. if( (node) => node.__type === 'div') ) return true; otherwise return false

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startingNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node where the search starts. |
| `findFn` | (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md)) => node is T | A testing function that returns true if the current node satisfies the testing parameters. |

#### Returns

``null`` \| `T`

A parent node that matches the findFn parameters, or null if one wasn't found.

#### Defined in

[packages/lexical-utils/src/index.ts:418](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L418)

▸ **$findMatchingParent**(`startingNode`, `findFn`): ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

Starts with a node and moves up the tree (toward the root node) to find a matching node based on
the search parameters of the findFn. (Consider JavaScripts' .find() function where a testing function must be
passed as an argument. eg. if( (node) => node.__type === 'div') ) return true; otherwise return false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startingNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node where the search starts. |
| `findFn` | (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md)) => `boolean` | A testing function that returns true if the current node satisfies the testing parameters. |

#### Returns

``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

A parent node that matches the findFn parameters, or null if one wasn't found.

#### Defined in

[packages/lexical-utils/src/index.ts:422](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L422)

___

### $firstToLastIterator

▸ **$firstToLastIterator**(`node`): `Iterable`\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>

Return an iterator that yields each child of node from first to last, taking
care to preserve the next sibling before yielding the value in case the caller
removes the yielded node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`ElementNode`](../classes/lexical.ElementNode.md) | The node whose children to iterate |

#### Returns

`Iterable`\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>

An iterator of the node's children

#### Defined in

[packages/lexical-utils/src/index.ts:823](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L823)

___

### $getAdjacentCaret

▸ **$getAdjacentCaret**\<`D`\>(`caret`): ``null`` \| [`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<[`LexicalNode`](../classes/lexical.LexicalNode.md), `D`\>

Get the adjacent caret in the same direction

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caret` | ``null`` \| [`NodeCaret`](lexical.md#nodecaret)\<`D`\> | A caret or null |

#### Returns

``null`` \| [`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<[`LexicalNode`](../classes/lexical.LexicalNode.md), `D`\>

`caret.getAdjacentCaret()` or `null`

#### Defined in

[packages/lexical-utils/src/index.ts:216](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L216)

___

### $getAdjacentSiblingOrParentSiblingCaret

▸ **$getAdjacentSiblingOrParentSiblingCaret**\<`D`\>(`startCaret`, `rootMode?`): ``null`` \| [[`NodeCaret`](lexical.md#nodecaret)\<`D`\>, `number`]

Returns the Node sibling when this exists, otherwise the closest parent sibling. For example
R -> P -> T1, T2
  -> P2
returns T2 for node T1, P2 for node T2, and null for node P2.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startCaret` | [`NodeCaret`](lexical.md#nodecaret)\<`D`\> | `undefined` |
| `rootMode` | [`RootMode`](lexical.md#rootmode) | `'root'` |

#### Returns

``null`` \| [[`NodeCaret`](lexical.md#nodecaret)\<`D`\>, `number`]

An array (tuple) containing the found Lexical node and the depth difference, or null, if this node doesn't exist.

#### Defined in

[packages/lexical-utils/src/index.ts:883](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L883)

___

### $getDepth

▸ **$getDepth**(`node`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

`number`

#### Defined in

[packages/lexical-utils/src/index.ts:313](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L313)

___

### $getNearestBlockElementAncestorOrThrow

▸ **$getNearestBlockElementAncestorOrThrow**(`startNode`): [`ElementNode`](../classes/lexical.ElementNode.md)

Returns the element node of the nearest ancestor, otherwise throws an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The starting node of the search |

#### Returns

[`ElementNode`](../classes/lexical.ElementNode.md)

The ancestor node found

#### Defined in

[packages/lexical-utils/src/index.ts:385](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L385)

___

### $getNearestNodeOfType

▸ **$getNearestNodeOfType**\<`T`\>(`node`, `klass`): `T` \| ``null``

Takes a node and traverses up its ancestors (toward the root node)
in order to find a specific type of node.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ElementNode`](../classes/lexical.ElementNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | the node to begin searching. |
| `klass` | [`Klass`](lexical.md#klass)\<`T`\> | an instance of the type of node to look for. |

#### Returns

`T` \| ``null``

the node of type klass that was passed, or null if none exist.

#### Defined in

[packages/lexical-utils/src/index.ts:363](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L363)

___

### $getNextRightPreorderNode

▸ **$getNextRightPreorderNode**(`startingNode`): [`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null``

Performs a right-to-left preorder tree traversal.
From the starting node it goes to the rightmost child, than backtracks to parent and finds new rightmost path.
It will return the next node in traversal sequence after the startingNode.
The traversal is similar to $dfs functions above, but the nodes are visited right-to-left, not left-to-right.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startingNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to start the search. |

#### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null``

The next node in pre-order right to left traversal sequence or `null`, if the node does not exist

#### Defined in

[packages/lexical-utils/src/index.ts:333](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L333)

___

### $getNextSiblingOrParentSibling

▸ **$getNextSiblingOrParentSibling**(`node`): ``null`` \| [[`LexicalNode`](../classes/lexical.LexicalNode.md), `number`]

Returns the Node sibling when this exists, otherwise the closest parent sibling. For example
R -> P -> T1, T2
  -> P2
returns T2 for node T1, P2 for node T2, and null for node P2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | LexicalNode. |

#### Returns

``null`` \| [[`LexicalNode`](../classes/lexical.LexicalNode.md), `number`]

An array (tuple) containing the found Lexical node and the depth difference, or null, if this node doesn't exist.

#### Defined in

[packages/lexical-utils/src/index.ts:304](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L304)

___

### $insertFirst

▸ **$insertFirst**(`parent`, `node`): `void`

Appends the node before the first child of the parent node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`ElementNode`](../classes/lexical.ElementNode.md) | A parent node |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | Node that needs to be appended |

#### Returns

`void`

#### Defined in

[packages/lexical-utils/src/index.ts:685](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L685)

___

### $insertNodeToNearestRoot

▸ **$insertNodeToNearestRoot**\<`T`\>(`node`): `T`

If the selected insertion area is the root/shadow root node (see [lexical!$isRootOrShadowRoot](lexical.md#$isrootorshadowroot)),
the node will be appended there, otherwise, it will be inserted before the insertion area.
If there is no selection where the node is to be inserted, it will be appended after any current nodes
within the tree, as a child of the root node. A paragraph will then be added after the inserted node and selected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `T` | The node to be inserted |

#### Returns

`T`

The node after its insertion

#### Defined in

[packages/lexical-utils/src/index.ts:562](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L562)

___

### $insertNodeToNearestRootAtCaret

▸ **$insertNodeToNearestRootAtCaret**\<`T`, `D`\>(`node`, `caret`, `options?`): [`NodeCaret`](lexical.md#nodecaret)\<`D`\>

If the insertion caret is the root/shadow root node (see [lexical!$isRootOrShadowRoot](lexical.md#$isrootorshadowroot)),
the node will be inserted there, otherwise the parent nodes will be split according to the
given options.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `T` | The node to be inserted |
| `caret` | [`PointCaret`](lexical.md#pointcaret)\<`D`\> | The location to insert or split from |
| `options?` | [`SplitAtPointCaretNextOptions`](../interfaces/lexical.SplitAtPointCaretNextOptions.md) | - |

#### Returns

[`NodeCaret`](lexical.md#nodecaret)\<`D`\>

The node after its insertion

#### Defined in

[packages/lexical-utils/src/index.ts:598](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L598)

___

### $isEditorIsNestedEditor

▸ **$isEditorIsNestedEditor**(`editor`): `boolean`

Checks if the editor is a nested editor created by LexicalNestedComposer

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |

#### Returns

`boolean`

#### Defined in

[packages/lexical-utils/src/index.ts:728](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L728)

___

### $lastToFirstIterator

▸ **$lastToFirstIterator**(`node`): `Iterable`\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>

Return an iterator that yields each child of node from last to first, taking
care to preserve the previous sibling before yielding the value in case the caller
removes the yielded node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`ElementNode`](../classes/lexical.ElementNode.md) | The node whose children to iterate |

#### Returns

`Iterable`\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>

An iterator of the node's children

#### Defined in

[packages/lexical-utils/src/index.ts:835](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L835)

___

### $restoreEditorState

▸ **$restoreEditorState**(`editor`, `editorState`): `void`

Clones the editor and marks it as dirty to be reconciled. If there was a selection,
it would be set back to its previous state, or null otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | The lexical editor |
| `editorState` | [`EditorState`](../classes/lexical.EditorState.md) | The editor's state |

#### Returns

`void`

#### Defined in

[packages/lexical-utils/src/index.ts:533](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L533)

___

### $reverseDfs

▸ **$reverseDfs**(`startNode?`, `endNode?`): [`DFSNode`](../interfaces/lexical_utils.DFSNode.md)[]

$dfs iterator (right to left). Tree traversal is done on the fly as new values are requested with O(1) memory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startNode?` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to start the search, if omitted, it will start at the root node. |
| `endNode?` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to end the search, if omitted, it will find all descendants of the startingNode. |

#### Returns

[`DFSNode`](../interfaces/lexical_utils.DFSNode.md)[]

An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).

#### Defined in

[packages/lexical-utils/src/index.ts:228](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L228)

___

### $reverseDfsIterator

▸ **$reverseDfsIterator**(`startNode?`, `endNode?`): `IterableIterator`\<[`DFSNode`](../interfaces/lexical_utils.DFSNode.md)\>

$dfs iterator (right to left). Tree traversal is done on the fly as new values are requested with O(1) memory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startNode?` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to start the search, if omitted, it will start at the root node. |
| `endNode?` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to end the search, if omitted, it will find all descendants of the startingNode. |

#### Returns

`IterableIterator`\<[`DFSNode`](../interfaces/lexical_utils.DFSNode.md)\>

An iterator, each yielded value is a DFSNode. It will always return at least 1 node (the start node).

#### Defined in

[packages/lexical-utils/src/index.ts:349](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L349)

___

### $unwrapAndFilterDescendants

▸ **$unwrapAndFilterDescendants**(`root`, `$predicate`): `boolean`

A depth first last-to-first traversal of root that stops at each node that matches
$predicate and ensures that its parent is root. This is typically used to discard
invalid or unsupported wrapping nodes. For example, a TableNode must only have
TableRowNode as children, but an importer might add invalid nodes based on
caption, tbody, thead, etc. and this will unwrap and discard those.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | [`ElementNode`](../classes/lexical.ElementNode.md) | The root to start the traversal |
| `$predicate` | (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md)) => `boolean` | Should return true for nodes that are permitted to be children of root |

#### Returns

`boolean`

true if this unwrapped or removed any nodes

#### Defined in

[packages/lexical-utils/src/index.ts:743](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L743)

___

### $unwrapNode

▸ **$unwrapNode**(`node`): `void`

Replace this node with its children

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`ElementNode`](../classes/lexical.ElementNode.md) | The ElementNode to unwrap and remove |

#### Returns

`void`

#### Defined in

[packages/lexical-utils/src/index.ts:868](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L868)

___

### $wrapNodeInElement

▸ **$wrapNodeInElement**(`node`, `createElementNode`): [`ElementNode`](../classes/lexical.ElementNode.md)

Wraps the node into another node created from a createElementNode function, eg. $createParagraphNode

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | Node to be wrapped. |
| `createElementNode` | () => [`ElementNode`](../classes/lexical.ElementNode.md) | Creates a new lexical element to wrap the to-be-wrapped node and returns it. |

#### Returns

[`ElementNode`](../classes/lexical.ElementNode.md)

A new lexical element with the previous node appended within (as a child, including its children).

#### Defined in

[packages/lexical-utils/src/index.ts:633](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L633)

___

### addClassNamesToElement

▸ **addClassNamesToElement**(`element`, `...classNames`): `void`

Takes an HTML element and adds the classNames passed within an array,
ignoring any non-string types. A space can be used to add multiple classes
eg. addClassNamesToElement(element, ['element-inner active', true, null])
will add both 'element-inner' and 'active' as classes to that element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | The element in which the classes are added |
| `...classNames` | (`undefined` \| ``null`` \| `string` \| `boolean`)[] | An array defining the class names to add to the element |

#### Returns

`void`

#### Defined in

[packages/lexical-utils/src/index.ts:98](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L98)

___

### calculateZoomLevel

▸ **calculateZoomLevel**(`element`): `number`

Calculates the zoom level of an element as a result of using
css zoom property. For browsers that implement standardized CSS
zoom (Firefox, Chrome >= 128), this will always return 1.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| `Element` |

#### Returns

`number`

#### Defined in

[packages/lexical-utils/src/index.ts:714](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L714)

___

### isMimeType

▸ **isMimeType**(`file`, `acceptableMimeTypes`): `boolean`

Returns true if the file type matches the types passed within the acceptableMimeTypes array, false otherwise.
The types passed must be strings and are CASE-SENSITIVE.
eg. if file is of type 'text' and acceptableMimeTypes = ['TEXT', 'IMAGE'] the function will return false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | The file you want to type check. |
| `acceptableMimeTypes` | `string`[] | An array of strings of types which the file is checked against. |

#### Returns

`boolean`

true if the file is an acceptable mime type, false otherwise.

#### Defined in

[packages/lexical-utils/src/index.ts:134](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L134)

___

### makeStateWrapper

▸ **makeStateWrapper**\<`K`, `V`\>(`stateConfig`): [`StateConfigWrapper`](../interfaces/lexical_utils.StateConfigWrapper.md)\<`K`, `V`\>

EXPERIMENTAL

A convenience interface for working with [$getState](lexical.md#$getstate) and
[$setState](lexical.md#$setstate).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stateConfig` | [`StateConfig`](../classes/lexical.StateConfig.md)\<`K`, `V`\> | The stateConfig to wrap with convenience functionality |

#### Returns

[`StateConfigWrapper`](../interfaces/lexical_utils.StateConfigWrapper.md)\<`K`, `V`\>

a StateWrapper

#### Defined in

[packages/lexical-utils/src/index.ts:964](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L964)

___

### markSelection

▸ **markSelection**(`editor`, `onReposition?`): () => `void`

Place one or multiple newly created Nodes at the current selection. Multiple
nodes will only be created when the selection spans multiple lines (aka
client rects).

This function can come useful when you want to show the selection but the
editor has been focused away.

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `onReposition?` | (`node`: `HTMLElement`[]) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-utils/src/markSelection.ts:67](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/markSelection.ts#L67)

___

### mediaFileReader

▸ **mediaFileReader**(`files`, `acceptableMimeTypes`): `Promise`\<\{ `file`: `File` ; `result`: `string`  }[]\>

Lexical File Reader with:
 1. MIME type support
 2. batched results (HistoryPlugin compatibility)
 3. Order aware (respects the order when multiple Files are passed)

const filesResult = await mediaFileReader(files, ['image/']);
filesResult.forEach(file => editor.dispatchCommand('INSERT_IMAGE', \{
  src: file.result,
\}));

#### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `File`[] |
| `acceptableMimeTypes` | `string`[] |

#### Returns

`Promise`\<\{ `file`: `File` ; `result`: `string`  }[]\>

#### Defined in

[packages/lexical-utils/src/index.ts:157](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L157)

___

### mergeRegister

▸ **mergeRegister**(`...func`): () => `void`

Returns a function that will execute all functions passed when called. It is generally used
to register multiple lexical listeners and then tear them down with a single function call, such
as React's useEffect hook.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...func` | `Func`[] | An array of cleanup functions meant to be executed by the returned function. |

#### Returns

`fn`

the function which executes all the passed cleanup functions.

▸ (): `void`

##### Returns

`void`

**`Example`**

```ts
useEffect(() => {
  return mergeRegister(
    editor.registerCommand(...registerCommand1 logic),
    editor.registerCommand(...registerCommand2 logic),
    editor.registerCommand(...registerCommand3 logic)
  )
}, [editor])
```
In this case, useEffect is returning the function returned by mergeRegister as a cleanup
function to be executed after either the useEffect runs again (due to one of its dependencies
updating) or the component it resides in unmounts.
Note the functions don't necessarily need to be in an array as all arguments
are considered to be the func argument and spread from there.
The order of cleanup is the reverse of the argument order. Generally it is
expected that the first "acquire" will be "released" last (LIFO order),
because a later step may have some dependency on an earlier one.

#### Defined in

[packages/lexical-utils/src/mergeRegister.ts:36](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/mergeRegister.ts#L36)

___

### objectKlassEquals

▸ **objectKlassEquals**\<`T`\>(`object`, `objectClass`): object is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `unknown` | = The instance of the type |
| `objectClass` | [`ObjectKlass`](lexical_utils.md#objectklass)\<`T`\> | = The class of the type |

#### Returns

object is T

Whether the object is has the same Klass of the objectClass, ignoring the difference across window (e.g. different iframes)

#### Defined in

[packages/lexical-utils/src/index.ts:651](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L651)

___

### positionNodeOnRange

▸ **positionNodeOnRange**(`editor`, `range`, `onReposition`): () => `void`

Place one or multiple newly created Nodes at the passed Range's position.
Multiple nodes will only be created when the Range spans multiple lines (aka
client rects).

This function can come particularly useful to highlight particular parts of
the text without interfering with the EditorState, that will often replicate
the state across collab and clipboard.

This function accounts for DOM updates which can modify the passed Range.
Hence, the function return to remove the listener.

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `range` | `Range` |
| `onReposition` | (`node`: `HTMLElement`[]) => `void` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-utils/src/positionNodeOnRange.ts:38](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/positionNodeOnRange.ts#L38)

___

### registerNestedElementResolver

▸ **registerNestedElementResolver**\<`N`\>(`editor`, `targetNode`, `cloneNode`, `handleOverlap`): () => `void`

Attempts to resolve nested element nodes of the same type into a single node of that type.
It is generally used for marks/commenting

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`ElementNode`](../classes/lexical.ElementNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | The lexical editor |
| `targetNode` | [`Klass`](lexical.md#klass)\<`N`\> | The target for the nested element to be extracted from. |
| `cloneNode` | (`from`: `N`) => `N` | See $createMarkNode |
| `handleOverlap` | (`from`: `N`, `to`: `N`) => `void` | Handles any overlap between the node to extract and the targetNode |

#### Returns

`fn`

The lexical editor

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-utils/src/index.ts:452](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L452)

___

### removeClassNamesFromElement

▸ **removeClassNamesFromElement**(`element`, `...classNames`): `void`

Takes an HTML element and removes the classNames passed within an array,
ignoring any non-string types. A space can be used to remove multiple classes
eg. removeClassNamesFromElement(element, ['active small', true, null])
will remove both the 'active' and 'small' classes from that element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | The element in which the classes are removed |
| `...classNames` | (`undefined` \| ``null`` \| `string` \| `boolean`)[] | An array defining the class names to remove from the element |

#### Returns

`void`

#### Defined in

[packages/lexical-utils/src/index.ts:116](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L116)

___

### selectionAlwaysOnDisplay

▸ **selectionAlwaysOnDisplay**(`editor`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-utils/src/selectionAlwaysOnDisplay.ts:13](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/selectionAlwaysOnDisplay.ts#L13)
