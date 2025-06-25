---
id: "lexical_rich_text.QuoteNode"
title: "Class: QuoteNode"
custom_edit_url: null
---

[@lexical/rich-text](../modules/lexical_rich_text.md).QuoteNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`QuoteNode`**

## Methods

### canMergeWhenEmpty

▸ **canMergeWhenEmpty**(): ``true``

Determines whether this node, when empty, can merge with a first block
of nodes being inserted.

This method is specifically called in [RangeSelection.insertNodes](lexical.RangeSelection.md#insertnodes)
to determine merging behavior during nodes insertion.

#### Returns

``true``

**`Example`**

```ts
// In a ListItemNode or QuoteNode implementation:
canMergeWhenEmpty(): true {
 return true;
}
```

#### Overrides

[ElementNode](lexical.ElementNode.md).[canMergeWhenEmpty](lexical.ElementNode.md#canmergewhenempty)

#### Defined in

[packages/lexical-rich-text/src/index.ts:199](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L199)

___

### collapseAtStart

▸ **collapseAtStart**(): ``true``

#### Returns

``true``

#### Overrides

[ElementNode](lexical.ElementNode.md).[collapseAtStart](lexical.ElementNode.md#collapseatstart)

#### Defined in

[packages/lexical-rich-text/src/index.ts:191](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L191)

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

[packages/lexical-rich-text/src/index.ts:135](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L135)

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

[packages/lexical-rich-text/src/index.ts:153](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L153)

___

### insertNewAfter

▸ **insertNewAfter**(`_`, `restoreSelection?`): [`ParagraphNode`](lexical.ParagraphNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | [`RangeSelection`](lexical.RangeSelection.md) |
| `restoreSelection?` | `boolean` |

#### Returns

[`ParagraphNode`](lexical.ParagraphNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[insertNewAfter](lexical.ElementNode.md#insertnewafter)

#### Defined in

[packages/lexical-rich-text/src/index.ts:183](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L183)

___

### updateDOM

▸ **updateDOM**(`prevNode`, `dom`): `boolean`

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

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical-rich-text/src/index.ts:140](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L140)

___

### clone

▸ **clone**(`node`): [`QuoteNode`](lexical_rich_text.QuoteNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`QuoteNode`](lexical_rich_text.QuoteNode.md) |

#### Returns

[`QuoteNode`](lexical_rich_text.QuoteNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[clone](lexical.ElementNode.md#clone)

#### Defined in

[packages/lexical-rich-text/src/index.ts:129](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L129)

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

[packages/lexical-rich-text/src/index.ts:125](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L125)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

ElementNode.importDOM

#### Defined in

[packages/lexical-rich-text/src/index.ts:144](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L144)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`QuoteNode`](lexical_rich_text.QuoteNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedQuoteNode`](../modules/lexical_rich_text.md#serializedquotenode) |

#### Returns

[`QuoteNode`](lexical_rich_text.QuoteNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[importJSON](lexical.ElementNode.md#importjson)

#### Defined in

[packages/lexical-rich-text/src/index.ts:177](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L177)
