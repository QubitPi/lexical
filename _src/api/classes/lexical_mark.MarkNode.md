---
id: "lexical_mark.MarkNode"
title: "Class: MarkNode"
custom_edit_url: null
---

[@lexical/mark](../modules/lexical_mark.md).MarkNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`MarkNode`**

## Constructors

### constructor

• **new MarkNode**(`ids?`, `key?`): [`MarkNode`](lexical_mark.MarkNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ids` | readonly `string`[] | `NO_IDS` |
| `key?` | `string` | `undefined` |

#### Returns

[`MarkNode`](lexical_mark.MarkNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:67](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L67)

## Methods

### addID

▸ **addID**(`id`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:118](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L118)

___

### canBeEmpty

▸ **canBeEmpty**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canBeEmpty](lexical.ElementNode.md#canbeempty)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:151](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L151)

___

### canInsertTextAfter

▸ **canInsertTextAfter**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canInsertTextAfter](lexical.ElementNode.md#caninserttextafter)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:147](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L147)

___

### canInsertTextBefore

▸ **canInsertTextBefore**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canInsertTextBefore](lexical.ElementNode.md#caninserttextbefore)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:143](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L143)

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

[packages/lexical-mark/src/MarkNode.ts:72](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L72)

___

### deleteID

▸ **deleteID**(`id`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:123](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L123)

___

### excludeFromCopy

▸ **excludeFromCopy**(`destination`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | ``"clone"`` \| ``"html"`` |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[excludeFromCopy](lexical.ElementNode.md#excludefromcopy)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:182](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L182)

___

### exportJSON

▸ **exportJSON**(): [`SerializedMarkNode`](../modules/lexical_mark.md#serializedmarknode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedMarkNode`](../modules/lexical_mark.md#serializedmarknode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:60](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L60)

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

[packages/lexical-mark/src/MarkNode.ts:159](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L159)

___

### getIDs

▸ **getIDs**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:108](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L108)

___

### hasID

▸ **hasID**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:104](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L104)

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

[ElementNode](lexical.ElementNode.md).[insertNewAfter](lexical.ElementNode.md#insertnewafter)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:134](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L134)

___

### isInline

▸ **isInline**(): ``true``

#### Returns

``true``

#### Overrides

[ElementNode](lexical.ElementNode.md).[isInline](lexical.ElementNode.md#isinline)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:155](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L155)

___

### setIDs

▸ **setIDs**(`ids`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | readonly `string`[] |

#### Returns

`this`

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:112](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L112)

___

### updateDOM

▸ **updateDOM**(`prevNode`, `element`, `config`): `boolean`

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
| `element` | `HTMLElement` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:81](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L81)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedMarkNode`](../modules/lexical_mark.md#serializedmarknode)\> |

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

[packages/lexical-mark/src/MarkNode.ts:56](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L56)

___

### clone

▸ **clone**(`node`): [`MarkNode`](lexical_mark.MarkNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`MarkNode`](lexical_mark.MarkNode.md) |

#### Returns

[`MarkNode`](lexical_mark.MarkNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[clone](lexical.ElementNode.md#clone)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:44](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L44)

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

[packages/lexical-mark/src/MarkNode.ts:40](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L40)

___

### importDOM

▸ **importDOM**(): ``null``

#### Returns

``null``

#### Overrides

ElementNode.importDOM

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L48)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`MarkNode`](lexical_mark.MarkNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedMarkNode`](../modules/lexical_mark.md#serializedmarknode) |

#### Returns

[`MarkNode`](lexical_mark.MarkNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[importJSON](lexical.ElementNode.md#importjson)

#### Defined in

[packages/lexical-mark/src/MarkNode.ts:52](https://github.com/QubitPi/lexical/tree/main/packages/lexical-mark/src/MarkNode.ts#L52)
