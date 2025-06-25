---
id: "lexical.TabNode"
title: "Class: TabNode"
custom_edit_url: null
---

[lexical](../modules/lexical.md).TabNode

## Hierarchy

- [`TextNode`](lexical.TextNode.md)

  ↳ **`TabNode`**

## Constructors

### constructor

• **new TabNode**(`key?`): [`TabNode`](lexical.TabNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

[`TabNode`](lexical.TabNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[constructor](lexical.TextNode.md#constructor)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:36](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L36)

## Methods

### canInsertTextAfter

▸ **canInsertTextAfter**(): `boolean`

This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
when a user event would cause text to be inserted after them in the editor. If true, Lexical will attempt
to insert text into this node. If false, it will insert the text in a new sibling node.

#### Returns

`boolean`

true if text can be inserted after the node, false otherwise.

#### Overrides

[TextNode](lexical.TextNode.md).[canInsertTextAfter](lexical.TextNode.md#caninserttextafter)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:96](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L96)

___

### canInsertTextBefore

▸ **canInsertTextBefore**(): `boolean`

This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
when a user event would cause text to be inserted before them in the editor. If true, Lexical will attempt
to insert text into this node. If false, it will insert the text in a new sibling node.

#### Returns

`boolean`

true if text can be inserted before the node, false otherwise.

#### Overrides

[TextNode](lexical.TextNode.md).[canInsertTextBefore](lexical.TextNode.md#caninserttextbefore)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:92](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L92)

___

### createDOM

▸ **createDOM**(`config`): `HTMLElement`

Called during the reconciliation process to determine which nodes
to insert into the DOM for this Lexical Node.

This method must return exactly one HTMLElement. Nested elements are not supported.

Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) | allows access to things like the EditorTheme (to apply classes) during reconciliation. |

#### Returns

`HTMLElement`

#### Overrides

[TextNode](lexical.TextNode.md).[createDOM](lexical.TextNode.md#createdom)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:45](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L45)

___

### setDetail

▸ **setDetail**(`detail`): `this`

Sets the node detail to the provided TextDetailType or 32-bit integer. Note that the TextDetailType
version of the argument can only specify one detail value and doing so will remove all other detail values that
may be applied to the node. For toggling behavior, consider using [TextNode.toggleDirectionless](lexical.TextNode.md#toggledirectionless)
or [TextNode.toggleUnmergeable](lexical.TextNode.md#toggleunmergeable)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `detail` | `number` \| `TextDetailType` | TextDetailType or 32-bit integer representing the node detail. |

#### Returns

`this`

this TextNode.
// TODO 0.12 This should just be a `string`.

#### Overrides

[TextNode](lexical.TextNode.md).[setDetail](lexical.TextNode.md#setdetail)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:82](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L82)

___

### setMode

▸ **setMode**(`type`): `this`

Sets the mode of the node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TextModeType`](../modules/lexical.md#textmodetype) |

#### Returns

`this`

this TextNode.

#### Overrides

[TextNode](lexical.TextNode.md).[setMode](lexical.TextNode.md#setmode)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:87](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L87)

___

### setTextContent

▸ **setTextContent**(`text`): `this`

Sets the text content of the node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | the string to set as the text value of the node. |

#### Returns

`this`

this TextNode.

#### Overrides

[TextNode](lexical.TextNode.md).[setTextContent](lexical.TextNode.md#settextcontent)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:60](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L60)

___

### spliceText

▸ **spliceText**(`offset`, `delCount`, `newText`, `moveSelection?`): [`TextNode`](lexical.TextNode.md)

Inserts the provided text into this TextNode at the provided offset, deleting the number of characters
specified. Can optionally calculate a new selection after the operation is complete.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | the offset at which the splice operation should begin. |
| `delCount` | `number` | the number of characters to delete, starting from the offset. |
| `newText` | `string` | the text to insert into the TextNode at the offset. |
| `moveSelection?` | `boolean` | optional, whether or not to move selection to the end of the inserted substring. |

#### Returns

[`TextNode`](lexical.TextNode.md)

this TextNode.

#### Overrides

[TextNode](lexical.TextNode.md).[spliceText](lexical.TextNode.md#splicetext)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:68](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L68)

___

### clone

▸ **clone**(`node`): [`TabNode`](lexical.TabNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TabNode`](lexical.TabNode.md) |

#### Returns

[`TabNode`](lexical.TabNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[clone](lexical.TextNode.md#clone)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:32](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L32)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node. Every node must
implement this and it MUST BE UNIQUE amongst nodes registered
on the editor.

#### Returns

`string`

#### Overrides

[TextNode](lexical.TextNode.md).[getType](lexical.TextNode.md#gettype-1)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:28](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L28)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

[TextNode](lexical.TextNode.md).[importDOM](lexical.TextNode.md#importdom)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:41](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L41)

___

### importJSON

▸ **importJSON**(`serializedTabNode`): [`TabNode`](lexical.TabNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedTabNode` | [`SerializedTextNode`](../modules/lexical.md#serializedtextnode) |

#### Returns

[`TabNode`](lexical.TabNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[importJSON](lexical.TextNode.md#importjson)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:56](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L56)
