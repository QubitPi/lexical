---
id: "lexical_hashtag.HashtagNode"
title: "Class: HashtagNode"
custom_edit_url: null
---

[@lexical/hashtag](../modules/lexical_hashtag.md).HashtagNode

## Hierarchy

- [`TextNode`](lexical.TextNode.md)

  ↳ **`HashtagNode`**

## Methods

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

[packages/lexical-hashtag/src/LexicalHashtagNode.ts:34](https://github.com/QubitPi/lexical/tree/main/packages/lexical-hashtag/src/LexicalHashtagNode.ts#L34)

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

[packages/lexical-hashtag/src/LexicalHashtagNode.ts:24](https://github.com/QubitPi/lexical/tree/main/packages/lexical-hashtag/src/LexicalHashtagNode.ts#L24)

___

### isTextEntity

▸ **isTextEntity**(): ``true``

This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
when used with the registerLexicalTextEntity function. If you're using registerLexicalTextEntity, the
node class that you create and replace matched text with should return true from this method.

#### Returns

``true``

true if the node is to be treated as a "text entity", false otherwise.

#### Overrides

[TextNode](lexical.TextNode.md).[isTextEntity](lexical.TextNode.md#istextentity)

#### Defined in

[packages/lexical-hashtag/src/LexicalHashtagNode.ts:38](https://github.com/QubitPi/lexical/tree/main/packages/lexical-hashtag/src/LexicalHashtagNode.ts#L38)

___

### clone

▸ **clone**(`node`): [`HashtagNode`](lexical_hashtag.HashtagNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`HashtagNode`](lexical_hashtag.HashtagNode.md) |

#### Returns

[`HashtagNode`](lexical_hashtag.HashtagNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[clone](lexical.TextNode.md#clone)

#### Defined in

[packages/lexical-hashtag/src/LexicalHashtagNode.ts:20](https://github.com/QubitPi/lexical/tree/main/packages/lexical-hashtag/src/LexicalHashtagNode.ts#L20)

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

[packages/lexical-hashtag/src/LexicalHashtagNode.ts:16](https://github.com/QubitPi/lexical/tree/main/packages/lexical-hashtag/src/LexicalHashtagNode.ts#L16)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`HashtagNode`](lexical_hashtag.HashtagNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedTextNode`](../modules/lexical.md#serializedtextnode) |

#### Returns

[`HashtagNode`](lexical_hashtag.HashtagNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[importJSON](lexical.TextNode.md#importjson)

#### Defined in

[packages/lexical-hashtag/src/LexicalHashtagNode.ts:30](https://github.com/QubitPi/lexical/tree/main/packages/lexical-hashtag/src/LexicalHashtagNode.ts#L30)
