---
id: "lexical.ParagraphNode"
title: "Class: ParagraphNode"
custom_edit_url: null
---

[lexical](../modules/lexical.md).ParagraphNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`ParagraphNode`**

## Properties

### constructor

• **constructor**: [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`ParagraphNode`](lexical.ParagraphNode.md)\>

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor-1)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:46](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L46)

## Methods

### collapseAtStart

▸ **collapseAtStart**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[collapseAtStart](lexical.ElementNode.md#collapseatstart)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:133](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L133)

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

[packages/lexical/src/nodes/LexicalParagraphNode.ts:58](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L58)

___

### exportDOM

▸ **exportDOM**(`editor`): [`DOMExportOutput`](../modules/lexical.md#domexportoutput)

Controls how the this node is serialized to HTML. This is important for
copy and paste between Lexical and non-Lexical editors, or Lexical editors with different namespaces,
in which case the primary transfer format is HTML. It's also important if you're serializing
to HTML for any other reason via [@lexical/html!$generateHtmlFromNodes](../modules/lexical_html.md#$generatehtmlfromnodes). You could
also use this method to build your own HTML renderer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](lexical.LexicalEditor.md) |

#### Returns

[`DOMExportOutput`](../modules/lexical.md#domexportoutput)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportDOM](lexical.ElementNode.md#exportdom)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:84](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L84)

___

### exportJSON

▸ **exportJSON**(): [`SerializedParagraphNode`](../modules/lexical.md#serializedparagraphnode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedParagraphNode`](../modules/lexical.md#serializedparagraphnode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:107](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L107)

___

### insertNewAfter

▸ **insertNewAfter**(`rangeSelection`, `restoreSelection`): [`ParagraphNode`](lexical.ParagraphNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rangeSelection` | [`RangeSelection`](lexical.RangeSelection.md) |
| `restoreSelection` | `boolean` |

#### Returns

[`ParagraphNode`](lexical.ParagraphNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[insertNewAfter](lexical.ElementNode.md#insertnewafter)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:118](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L118)

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
| `prevNode` | [`ParagraphNode`](lexical.ParagraphNode.md) |
| `dom` | `HTMLElement` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:67](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L67)

___

### clone

▸ **clone**(`node`): [`ParagraphNode`](lexical.ParagraphNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ParagraphNode`](lexical.ParagraphNode.md) |

#### Returns

[`ParagraphNode`](lexical.ParagraphNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[clone](lexical.ElementNode.md#clone)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:52](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L52)

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

[packages/lexical/src/nodes/LexicalParagraphNode.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L48)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

ElementNode.importDOM

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:75](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L75)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`ParagraphNode`](lexical.ParagraphNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedParagraphNode`](../modules/lexical.md#serializedparagraphnode) |

#### Returns

[`ParagraphNode`](lexical.ParagraphNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[importJSON](lexical.ElementNode.md#importjson)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:103](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L103)
