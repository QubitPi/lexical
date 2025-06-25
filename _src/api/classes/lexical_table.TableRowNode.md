---
id: "lexical_table.TableRowNode"
title: "Class: TableRowNode"
custom_edit_url: null
---

[@lexical/table](../modules/lexical_table.md).TableRowNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`TableRowNode`**

## Constructors

### constructor

• **new TableRowNode**(`height?`, `key?`): [`TableRowNode`](lexical_table.TableRowNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `height?` | `number` |
| `key?` | `string` |

#### Returns

[`TableRowNode`](lexical_table.TableRowNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:67](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L67)

## Methods

### canBeEmpty

▸ **canBeEmpty**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canBeEmpty](lexical.ElementNode.md#canbeempty)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:118](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L118)

___

### canIndent

▸ **canIndent**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canIndent](lexical.ElementNode.md#canindent)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:122](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L122)

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

[ElementNode](lexical.ElementNode.md).[createDOM](lexical.ElementNode.md#createdom)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:80](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L80)

___

### exportJSON

▸ **exportJSON**(): [`SerializedTableRowNode`](../modules/lexical_table.md#serializedtablerownode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedTableRowNode`](../modules/lexical_table.md#serializedtablerownode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:72](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L72)

___

### extractWithChild

▸ **extractWithChild**(`child`, `selection`, `destination`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`LexicalNode`](lexical.LexicalNode.md) |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |
| `destination` | ``"clone"`` \| ``"html"`` |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[extractWithChild](lexical.ElementNode.md#extractwithchild)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:92](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L92)

___

### getHeight

▸ **getHeight**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:110](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L110)

___

### isShadowRoot

▸ **isShadowRoot**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[isShadowRoot](lexical.ElementNode.md#isshadowroot)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:100](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L100)

___

### setHeight

▸ **setHeight**(`height?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height?` | `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:104](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L104)

___

### updateDOM

▸ **updateDOM**(`prevNode`): `boolean`

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

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:114](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L114)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedTableRowNode`](../modules/lexical_table.md#serializedtablerownode)\> |

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

[ElementNode](lexical.ElementNode.md).[updateFromJSON](lexical.ElementNode.md#updatefromjson)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:59](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L59)

___

### clone

▸ **clone**(`node`): [`TableRowNode`](lexical_table.TableRowNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TableRowNode`](lexical_table.TableRowNode.md) |

#### Returns

[`TableRowNode`](lexical_table.TableRowNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[clone](lexical.ElementNode.md#clone)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:42](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L42)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node. Every node must
implement this and it MUST BE UNIQUE amongst nodes registered
on the editor.

#### Returns

`string`

#### Overrides

[ElementNode](lexical.ElementNode.md).[getType](lexical.ElementNode.md#gettype-1)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:38](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L38)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

ElementNode.importDOM

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:46](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L46)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`TableRowNode`](lexical_table.TableRowNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedTableRowNode`](../modules/lexical_table.md#serializedtablerownode) |

#### Returns

[`TableRowNode`](lexical_table.TableRowNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[importJSON](lexical.ElementNode.md#importjson)

#### Defined in

[packages/lexical-table/src/LexicalTableRowNode.ts:55](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableRowNode.ts#L55)
