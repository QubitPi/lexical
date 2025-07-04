---
id: "lexical_link.AutoLinkNode"
title: "Class: AutoLinkNode"
custom_edit_url: null
---

[@lexical/link](../modules/lexical_link.md).AutoLinkNode

## Hierarchy

- [`LinkNode`](lexical_link.LinkNode.md)

  ↳ **`AutoLinkNode`**

## Constructors

### constructor

• **new AutoLinkNode**(`url?`, `attributes?`, `key?`): [`AutoLinkNode`](lexical_link.AutoLinkNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `''` |
| `attributes` | `Partial`\<[`Spread`](../modules/lexical.md#spread)\<[`LinkAttributes`](../modules/lexical_link.md#linkattributes), \{ `isUnlinked?`: `boolean`  }\>\> | `{}` |
| `key?` | `string` | `undefined` |

#### Returns

[`AutoLinkNode`](lexical_link.AutoLinkNode.md)

#### Overrides

[LinkNode](lexical_link.LinkNode.md).[constructor](lexical_link.LinkNode.md#constructor)

#### Defined in

[packages/lexical-link/src/index.ts:342](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L342)

## Properties

### \_\_isUnlinked

• **\_\_isUnlinked**: `boolean`

Indicates whether the autolink was ever unlinked. *

#### Defined in

[packages/lexical-link/src/index.ts:340](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L340)

___

### constructor

• **constructor**: [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`ElementNode`](lexical.ElementNode.md)\>

#### Inherited from

LinkNode.constructor

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:310](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L310)

## Methods

### canBeEmpty

▸ **canBeEmpty**(): ``false``

#### Returns

``false``

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[canBeEmpty](lexical_link.LinkNode.md#canbeempty)

#### Defined in

[packages/lexical-link/src/index.ts:251](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L251)

___

### canInsertTextAfter

▸ **canInsertTextAfter**(): ``false``

#### Returns

``false``

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[canInsertTextAfter](lexical_link.LinkNode.md#caninserttextafter)

#### Defined in

[packages/lexical-link/src/index.ts:247](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L247)

___

### canInsertTextBefore

▸ **canInsertTextBefore**(): ``false``

#### Returns

``false``

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[canInsertTextBefore](lexical_link.LinkNode.md#caninserttextbefore)

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

[LinkNode](lexical_link.LinkNode.md).[createDOM](lexical_link.LinkNode.md#createdom)

#### Defined in

[packages/lexical-link/src/index.ts:381](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L381)

___

### exportJSON

▸ **exportJSON**(): [`SerializedAutoLinkNode`](../modules/lexical_link.md#serializedautolinknode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedAutoLinkNode`](../modules/lexical_link.md#serializedautolinknode)

#### Overrides

[LinkNode](lexical_link.LinkNode.md).[exportJSON](lexical_link.LinkNode.md#exportjson)

#### Defined in

[packages/lexical-link/src/index.ts:417](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L417)

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

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[extractWithChild](lexical_link.LinkNode.md#extractwithchild)

#### Defined in

[packages/lexical-link/src/index.ts:259](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L259)

___

### getIsUnlinked

▸ **getIsUnlinked**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical-link/src/index.ts:371](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L371)

___

### getRel

▸ **getRel**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[getRel](lexical_link.LinkNode.md#getrel)

#### Defined in

[packages/lexical-link/src/index.ts:210](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L210)

___

### getTarget

▸ **getTarget**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[getTarget](lexical_link.LinkNode.md#gettarget)

#### Defined in

[packages/lexical-link/src/index.ts:200](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L200)

___

### getTitle

▸ **getTitle**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[getTitle](lexical_link.LinkNode.md#gettitle)

#### Defined in

[packages/lexical-link/src/index.ts:220](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L220)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node.

#### Returns

`string`

#### Inherited from

LinkNode.getType

#### Defined in

[packages/lexical/src/LexicalNode.ts:557](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L557)

___

### getURL

▸ **getURL**(): `string`

#### Returns

`string`

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[getURL](lexical_link.LinkNode.md#geturl)

#### Defined in

[packages/lexical-link/src/index.ts:190](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L190)

___

### insertNewAfter

▸ **insertNewAfter**(`selection`, `restoreSelection?`): ``null`` \| [`ElementNode`](lexical.ElementNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selection` | [`RangeSelection`](lexical.RangeSelection.md) | `undefined` |
| `restoreSelection` | `boolean` | `true` |

#### Returns

``null`` \| [`ElementNode`](lexical.ElementNode.md)

#### Overrides

[LinkNode](lexical_link.LinkNode.md).[insertNewAfter](lexical_link.LinkNode.md#insertnewafter)

#### Defined in

[packages/lexical-link/src/index.ts:424](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L424)

___

### isEmailURI

▸ **isEmailURI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[isEmailURI](lexical_link.LinkNode.md#isemailuri)

#### Defined in

[packages/lexical-link/src/index.ts:278](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L278)

___

### isInline

▸ **isInline**(): ``true``

#### Returns

``true``

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[isInline](lexical_link.LinkNode.md#isinline)

#### Defined in

[packages/lexical-link/src/index.ts:255](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L255)

___

### isWebSiteURI

▸ **isWebSiteURI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[isWebSiteURI](lexical_link.LinkNode.md#iswebsiteuri)

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

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[sanitizeUrl](lexical_link.LinkNode.md#sanitizeurl)

#### Defined in

[packages/lexical-link/src/index.ts:166](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L166)

___

### setIsUnlinked

▸ **setIsUnlinked**(`value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`this`

#### Defined in

[packages/lexical-link/src/index.ts:375](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L375)

___

### setRel

▸ **setRel**(`rel`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rel` | ``null`` \| `string` |

#### Returns

`this`

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[setRel](lexical_link.LinkNode.md#setrel)

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

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[setTarget](lexical_link.LinkNode.md#settarget)

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

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[setTitle](lexical_link.LinkNode.md#settitle)

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

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[setURL](lexical_link.LinkNode.md#seturl)

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

[LinkNode](lexical_link.LinkNode.md).[updateDOM](lexical_link.LinkNode.md#updatedom)

#### Defined in

[packages/lexical-link/src/index.ts:389](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L389)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedAutoLinkNode`](../modules/lexical_link.md#serializedautolinknode)\> |

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

[LinkNode](lexical_link.LinkNode.md).[updateFromJSON](lexical_link.LinkNode.md#updatefromjson)

#### Defined in

[packages/lexical-link/src/index.ts:404](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L404)

___

### updateLinkDOM

▸ **updateLinkDOM**(`prevNode`, `anchor`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevNode` | ``null`` \| [`AutoLinkNode`](lexical_link.AutoLinkNode.md) |
| `anchor` | `LinkHTMLElementType` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`void`

#### Inherited from

[LinkNode](lexical_link.LinkNode.md).[updateLinkDOM](lexical_link.LinkNode.md#updatelinkdom)

#### Defined in

[packages/lexical-link/src/index.ts:112](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L112)

___

### clone

▸ **clone**(`node`): [`AutoLinkNode`](lexical_link.AutoLinkNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`AutoLinkNode`](lexical_link.AutoLinkNode.md) |

#### Returns

[`AutoLinkNode`](lexical_link.AutoLinkNode.md)

#### Overrides

[LinkNode](lexical_link.LinkNode.md).[clone](lexical_link.LinkNode.md#clone)

#### Defined in

[packages/lexical-link/src/index.ts:358](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L358)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node. Every node must
implement this and it MUST BE UNIQUE amongst nodes registered
on the editor.

#### Returns

`string`

#### Overrides

[LinkNode](lexical_link.LinkNode.md).[getType](lexical_link.LinkNode.md#gettype)

#### Defined in

[packages/lexical-link/src/index.ts:354](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L354)

___

### importDOM

▸ **importDOM**(): ``null``

#### Returns

``null``

#### Overrides

[LinkNode](lexical_link.LinkNode.md).[importDOM](lexical_link.LinkNode.md#importdom)

#### Defined in

[packages/lexical-link/src/index.ts:412](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L412)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`AutoLinkNode`](lexical_link.AutoLinkNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedAutoLinkNode`](../modules/lexical_link.md#serializedautolinknode) |

#### Returns

[`AutoLinkNode`](lexical_link.AutoLinkNode.md)

#### Overrides

[LinkNode](lexical_link.LinkNode.md).[importJSON](lexical_link.LinkNode.md#importjson)

#### Defined in

[packages/lexical-link/src/index.ts:400](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L400)
