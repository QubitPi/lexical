---
id: "lexical_link.LinkNode"
title: "Class: LinkNode"
custom_edit_url: null
---

[@lexical/link](../modules/lexical_link.md).LinkNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`LinkNode`**

  ↳↳ [`AutoLinkNode`](lexical_link.AutoLinkNode.md)

## Constructors

### constructor

• **new LinkNode**(`url?`, `attributes?`, `key?`): [`LinkNode`](lexical_link.LinkNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `''` |
| `attributes` | [`LinkAttributes`](../modules/lexical_link.md#linkattributes) | `{}` |
| `key?` | `string` | `undefined` |

#### Returns

[`LinkNode`](lexical_link.LinkNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor)

#### Defined in

[packages/lexical-link/src/index.ts:92](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L92)

## Methods

### canBeEmpty

▸ **canBeEmpty**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canBeEmpty](lexical.ElementNode.md#canbeempty)

#### Defined in

[packages/lexical-link/src/index.ts:251](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L251)

___

### canInsertTextAfter

▸ **canInsertTextAfter**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canInsertTextAfter](lexical.ElementNode.md#caninserttextafter)

#### Defined in

[packages/lexical-link/src/index.ts:247](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L247)

___

### canInsertTextBefore

▸ **canInsertTextBefore**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canInsertTextBefore](lexical.ElementNode.md#caninserttextbefore)

#### Defined in

[packages/lexical-link/src/index.ts:243](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L243)

___

### createDOM

▸ **createDOM**(`config`): `LinkHTMLElementType`

Called during the reconciliation process to determine which nodes
to insert into the DOM for this Lexical Node.

This method must return exactly one HTMLElement. Nested elements are not supported.

Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) | allows access to things like the EditorTheme (to apply classes) during reconciliation. |

#### Returns

`LinkHTMLElementType`

#### Overrides

[ElementNode](lexical.ElementNode.md).[createDOM](lexical.ElementNode.md#createdom)

#### Defined in

[packages/lexical-link/src/index.ts:105](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L105)

___

### exportJSON

▸ **exportJSON**(): [`SerializedLinkNode`](../modules/lexical_link.md#serializedlinknode) \| [`SerializedAutoLinkNode`](../modules/lexical_link.md#serializedautolinknode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedLinkNode`](../modules/lexical_link.md#serializedlinknode) \| [`SerializedAutoLinkNode`](../modules/lexical_link.md#serializedautolinknode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical-link/src/index.ts:180](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L180)

___

### extractWithChild

▸ **extractWithChild**(`child`, `selection`, `destination`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`LexicalNode`](lexical.LexicalNode.md) |
| `selection` | [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |
| `destination` | ``"clone"`` \| ``"html"`` |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[extractWithChild](lexical.ElementNode.md#extractwithchild)

#### Defined in

[packages/lexical-link/src/index.ts:259](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L259)

___

### getRel

▸ **getRel**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[packages/lexical-link/src/index.ts:210](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L210)

___

### getTarget

▸ **getTarget**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[packages/lexical-link/src/index.ts:200](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L200)

___

### getTitle

▸ **getTitle**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[packages/lexical-link/src/index.ts:220](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L220)

___

### getURL

▸ **getURL**(): `string`

#### Returns

`string`

#### Defined in

[packages/lexical-link/src/index.ts:190](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L190)

___

### insertNewAfter

▸ **insertNewAfter**(`_`, `restoreSelection?`): ``null`` \| [`ElementNode`](lexical.ElementNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_` | [`RangeSelection`](lexical.RangeSelection.md) | `undefined` |
| `restoreSelection` | `boolean` | `true` |

#### Returns

``null`` \| [`ElementNode`](lexical.ElementNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[insertNewAfter](lexical.ElementNode.md#insertnewafter)

#### Defined in

[packages/lexical-link/src/index.ts:230](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L230)

___

### isEmailURI

▸ **isEmailURI**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical-link/src/index.ts:278](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L278)

___

### isInline

▸ **isInline**(): ``true``

#### Returns

``true``

#### Overrides

[ElementNode](lexical.ElementNode.md).[isInline](lexical.ElementNode.md#isinline)

#### Defined in

[packages/lexical-link/src/index.ts:255](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L255)

___

### isWebSiteURI

▸ **isWebSiteURI**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical-link/src/index.ts:282](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L282)

___

### sanitizeUrl

▸ **sanitizeUrl**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[packages/lexical-link/src/index.ts:166](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L166)

___

### setRel

▸ **setRel**(`rel`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rel` | ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-link/src/index.ts:214](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L214)

___

### setTarget

▸ **setTarget**(`target`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-link/src/index.ts:204](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L204)

___

### setTitle

▸ **setTitle**(`title`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-link/src/index.ts:224](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L224)

___

### setURL

▸ **setURL**(`url`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-link/src/index.ts:194](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L194)

___

### updateDOM

▸ **updateDOM**(`prevNode`, `anchor`, `config`): `boolean`

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
| `anchor` | `LinkHTMLElementType` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical-link/src/index.ts:135](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L135)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedLinkNode`](../modules/lexical_link.md#serializedlinknode)\> |

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

[packages/lexical-link/src/index.ts:157](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L157)

___

### updateLinkDOM

▸ **updateLinkDOM**(`prevNode`, `anchor`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevNode` | ``null`` \| [`LinkNode`](lexical_link.LinkNode.md) |
| `anchor` | `LinkHTMLElementType` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`void`

#### Defined in

[packages/lexical-link/src/index.ts:112](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L112)

___

### clone

▸ **clone**(`node`): [`LinkNode`](lexical_link.LinkNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LinkNode`](lexical_link.LinkNode.md) |

#### Returns

[`LinkNode`](lexical_link.LinkNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[clone](lexical.ElementNode.md#clone)

#### Defined in

[packages/lexical-link/src/index.ts:84](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L84)

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

[packages/lexical-link/src/index.ts:80](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L80)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

ElementNode.importDOM

#### Defined in

[packages/lexical-link/src/index.ts:144](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L144)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`LinkNode`](lexical_link.LinkNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedLinkNode`](../modules/lexical_link.md#serializedlinknode) |

#### Returns

[`LinkNode`](lexical_link.LinkNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[importJSON](lexical.ElementNode.md#importjson)

#### Defined in

[packages/lexical-link/src/index.ts:153](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L153)
