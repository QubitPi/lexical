---
id: "lexical_code.CodeHighlightNode"
title: "Class: CodeHighlightNode"
custom_edit_url: null
---

[@lexical/code](../modules/lexical_code.md).CodeHighlightNode

## Hierarchy

- [`TextNode`](lexical.TextNode.md)

  ↳ **`CodeHighlightNode`**

## Constructors

### constructor

• **new CodeHighlightNode**(`text?`, `highlightType?`, `key?`): [`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `''` |
| `highlightType?` | ``null`` \| `string` | `undefined` |
| `key?` | `string` | `undefined` |

#### Returns

[`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[constructor](lexical.TextNode.md#constructor)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:104](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L104)

## Methods

### canHaveFormat

▸ **canHaveFormat**(): `boolean`

#### Returns

`boolean`

true if the text node supports font styling, false otherwise.

#### Overrides

[TextNode](lexical.TextNode.md).[canHaveFormat](lexical.TextNode.md#canhaveformat)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:136](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L136)

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

[packages/lexical-code/src/CodeHighlightNode.ts:140](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L140)

___

### createParentElementNode

▸ **createParentElementNode**(): [`ElementNode`](lexical.ElementNode.md)

The creation logic for any required parent. Should be implemented if [isParentRequired](lexical.LexicalNode.md#isparentrequired) returns true.

#### Returns

[`ElementNode`](lexical.ElementNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[createParentElementNode](lexical.TextNode.md#createparentelementnode)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:201](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L201)

___

### exportJSON

▸ **exportJSON**(): `SerializedCodeHighlightNode`

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

`SerializedCodeHighlightNode`

#### Overrides

[TextNode](lexical.TextNode.md).[exportJSON](lexical.TextNode.md#exportjson)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:185](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L185)

___

### getHighlightType

▸ **getHighlightType**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:125](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L125)

___

### isParentRequired

▸ **isParentRequired**(): ``true``

Whether or not this node has a required parent. Used during copy + paste operations
to normalize nodes that would otherwise be orphaned. For example, ListItemNodes without
a ListNode parent or TextNodes with a ParagraphNode parent.

#### Returns

``true``

#### Overrides

[TextNode](lexical.TextNode.md).[isParentRequired](lexical.TextNode.md#isparentrequired)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:197](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L197)

___

### setFormat

▸ **setFormat**(`format`): `this`

Sets the node format to the provided TextFormatType or 32-bit integer. Note that the TextFormatType
version of the argument can only specify one format and doing so will remove all other formats that
may be applied to the node. For toggling behavior, consider using [TextNode.toggleFormat](lexical.TextNode.md#toggleformat)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `number` | TextFormatType or 32-bit integer representing the node format. |

#### Returns

`this`

this TextNode.
// TODO 0.12 This should just be a `string`.

#### Overrides

[TextNode](lexical.TextNode.md).[setFormat](lexical.TextNode.md#setformat)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:193](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L193)

___

### setHighlightType

▸ **setHighlightType**(`highlightType?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `highlightType?` | ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:130](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L130)

___

### updateDOM

▸ **updateDOM**(`prevNode`, `dom`, `config`): `boolean`

Called when a node changes and should update the DOM
in whatever way is necessary to make it align with any changes that might
have happened during the update.

Returning "true" here will cause lexical to unmount and recreate the DOM node
(by calling createDOM). You would need to do this if the element tag changes,
for instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevNode` | `this` |
| `dom` | `HTMLElement` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`boolean`

#### Overrides

[TextNode](lexical.TextNode.md).[updateDOM](lexical.TextNode.md#updatedom)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:150](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L150)

___

### updateFromJSON

▸ **updateFromJSON**(`serializedNode`): `this`

Update this LexicalNode instance from serialized JSON. It's recommended
to implement as much logic as possible in this method instead of the
static importJSON method, so that the functionality can be inherited in subclasses.

The LexicalUpdateJSON utility type should be used to ignore any type, version,
or children properties in the JSON so that the extended JSON from subclasses
are acceptable parameters for the super call.

If overridden, this method must call super.

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<`SerializedCodeHighlightNode`\> |

#### Returns

`this`

**`Example`**

```ts
class MyTextNode extends TextNode {
  // ...
  static importJSON(serializedNode: SerializedMyTextNode): MyTextNode {
    return $createMyTextNode()
      .updateFromJSON(serializedNode);
  }
  updateFromJSON(
    serializedNode: LexicalUpdateJSON<SerializedMyTextNode>,
  ): this {
    return super.updateFromJSON(serializedNode)
      .setMyProperty(serializedNode.myProperty);
  }
}
```

#### Overrides

[TextNode](lexical.TextNode.md).[updateFromJSON](lexical.TextNode.md#updatefromjson)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:177](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L177)

___

### clone

▸ **clone**(`node`): [`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`CodeHighlightNode`](lexical_code.CodeHighlightNode.md) |

#### Returns

[`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[clone](lexical.TextNode.md#clone)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:117](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L117)

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

[packages/lexical-code/src/CodeHighlightNode.ts:113](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L113)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | `SerializedCodeHighlightNode` |

#### Returns

[`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

#### Overrides

[TextNode](lexical.TextNode.md).[importJSON](lexical.TextNode.md#importjson)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:171](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L171)
