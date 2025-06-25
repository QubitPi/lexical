---
id: "lexical.LineBreakNode"
title: "Class: LineBreakNode"
custom_edit_url: null
---

[lexical](../modules/lexical.md).LineBreakNode

## Hierarchy

- [`LexicalNode`](lexical.LexicalNode.md)

  ↳ **`LineBreakNode`**

## Constructors

### constructor

• **new LineBreakNode**(`key?`): [`LineBreakNode`](lexical.LineBreakNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

[`LineBreakNode`](lexical.LineBreakNode.md)

#### Overrides

[LexicalNode](lexical.LexicalNode.md).[constructor](lexical.LexicalNode.md#constructor)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:37](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L37)

## Properties

### constructor

• **constructor**: [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`LineBreakNode`](lexical.LineBreakNode.md)\>

#### Overrides

LexicalNode.constructor

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:28](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L28)

## Methods

### createDOM

▸ **createDOM**(): `HTMLElement`

Called during the reconciliation process to determine which nodes
to insert into the DOM for this Lexical Node.

This method must return exactly one HTMLElement. Nested elements are not supported.

Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.

#### Returns

`HTMLElement`

#### Overrides

[LexicalNode](lexical.LexicalNode.md).[createDOM](lexical.LexicalNode.md#createdom)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:45](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L45)

___

### getTextContent

▸ **getTextContent**(): ``"\n"``

Returns the text content of the node. Override this for
custom nodes that should have a representation in plain text
format (for copy + paste, for example)

#### Returns

``"\n"``

#### Overrides

[LexicalNode](lexical.LexicalNode.md).[getTextContent](lexical.LexicalNode.md#gettextcontent)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:41](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L41)

___

### isInline

▸ **isInline**(): ``true``

#### Returns

``true``

#### Overrides

[LexicalNode](lexical.LexicalNode.md).[isInline](lexical.LexicalNode.md#isinline)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:53](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L53)

___

### updateDOM

▸ **updateDOM**(): ``false``

Called when a node changes and should update the DOM
in whatever way is necessary to make it align with any changes that might
have happened during the update.

Returning "true" here will cause lexical to unmount and recreate the DOM node
(by calling createDOM). You would need to do this if the element tag changes,
for instance.

#### Returns

``false``

#### Overrides

[LexicalNode](lexical.LexicalNode.md).[updateDOM](lexical.LexicalNode.md#updatedom)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:49](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L49)

___

### clone

▸ **clone**(`node`): [`LineBreakNode`](lexical.LineBreakNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LineBreakNode`](lexical.LineBreakNode.md) |

#### Returns

[`LineBreakNode`](lexical.LineBreakNode.md)

#### Overrides

[LexicalNode](lexical.LexicalNode.md).[clone](lexical.LexicalNode.md#clone)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:33](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L33)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node. Every node must
implement this and it MUST BE UNIQUE amongst nodes registered
on the editor.

#### Returns

`string`

#### Overrides

[LexicalNode](lexical.LexicalNode.md).[getType](lexical.LexicalNode.md#gettype-1)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:29](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L29)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

LexicalNode.importDOM

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:57](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L57)

___

### importJSON

▸ **importJSON**(`serializedLineBreakNode`): [`LineBreakNode`](lexical.LineBreakNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedLineBreakNode` | [`SerializedLexicalNode`](../modules/lexical.md#serializedlexicalnode) |

#### Returns

[`LineBreakNode`](lexical.LineBreakNode.md)

#### Overrides

[LexicalNode](lexical.LexicalNode.md).[importJSON](lexical.LexicalNode.md#importjson)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:71](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L71)
