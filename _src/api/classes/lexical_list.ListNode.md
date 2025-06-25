---
id: "lexical_list.ListNode"
title: "Class: ListNode"
custom_edit_url: null
---

[@lexical/list](../modules/lexical_list.md).ListNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`ListNode`**

## Constructors

### constructor

• **new ListNode**(`listType?`, `start?`, `key?`): [`ListNode`](lexical_list.ListNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `listType` | [`ListType`](../modules/lexical_list.md#listtype) | `'number'` |
| `start` | `number` | `1` |
| `key?` | `string` | `undefined` |

#### Returns

[`ListNode`](lexical_list.ListNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:83](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L83)

## Methods

### afterCloneFrom

▸ **afterCloneFrom**(`prevNode`): `void`

Perform any state updates on the clone of prevNode that are not already
handled by the constructor call in the static clone method. If you have
state to update in your clone that is not handled directly by the
constructor, it is advisable to override this method but it is required
to include a call to `super.afterCloneFrom(prevNode)` in your
implementation. This is only intended to be called by
[$cloneWithProperties](../modules/lexical.md#$clonewithproperties) function or via a super call.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevNode` | `this` |

#### Returns

`void`

**`Example`**

```ts
class ClassesTextNode extends TextNode {
  // Not shown: static getType, static importJSON, exportJSON, createDOM, updateDOM
  __classes = new Set<string>();
  static clone(node: ClassesTextNode): ClassesTextNode {
    // The inherited TextNode constructor is used here, so
    // classes is not set by this method.
    return new ClassesTextNode(node.__text, node.__key);
  }
  afterCloneFrom(node: this): void {
    // This calls TextNode.afterCloneFrom and LexicalNode.afterCloneFrom
    // for necessary state updates
    super.afterCloneFrom(node);
    this.__addClasses(node.__classes);
  }
  // This method is a private implementation detail, it is not
  // suitable for the public API because it does not call getWritable
  __addClasses(classNames: Iterable<string>): this {
    for (const className of classNames) {
      this.__classes.add(className);
    }
    return this;
  }
  addClass(...classNames: string[]): this {
    return this.getWritable().__addClasses(classNames);
  }
  removeClass(...classNames: string[]): this {
    const node = this.getWritable();
    for (const className of classNames) {
      this.__classes.delete(className);
    }
    return this;
  }
  getClasses(): Set<string> {
    return this.getLatest().__classes;
  }
}
```

#### Overrides

[ElementNode](lexical.ElementNode.md).[afterCloneFrom](lexical.ElementNode.md#afterclonefrom)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:91](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L91)

___

### canBeEmpty

▸ **canBeEmpty**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canBeEmpty](lexical.ElementNode.md#canbeempty)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:180](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L180)

___

### canIndent

▸ **canIndent**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canIndent](lexical.ElementNode.md#canindent)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:184](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L184)

___

### createDOM

▸ **createDOM**(`config`, `_editor?`): `HTMLElement`

Called during the reconciliation process to determine which nodes
to insert into the DOM for this Lexical Node.

This method must return exactly one HTMLElement. Nested elements are not supported.

Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) | allows access to things like the EditorTheme (to apply classes) during reconciliation. |
| `_editor?` | [`LexicalEditor`](lexical.LexicalEditor.md) | allows access to the editor for context during reconciliation. |

#### Returns

`HTMLElement`

#### Overrides

[ElementNode](lexical.ElementNode.md).[createDOM](lexical.ElementNode.md#createdom)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:125](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L125)

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

[packages/lexical-list/src/LexicalListNode.ts:156](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L156)

___

### exportJSON

▸ **exportJSON**(): [`SerializedListNode`](../modules/lexical_list.md#serializedlistnode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedListNode`](../modules/lexical_list.md#serializedlistnode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:171](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L171)

___

### extractWithChild

▸ **extractWithChild**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`LexicalNode`](lexical.LexicalNode.md) |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[extractWithChild](lexical.ElementNode.md#extractwithchild)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:210](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L210)

___

### getListType

▸ **getListType**(): [`ListType`](../modules/lexical_list.md#listtype)

#### Returns

[`ListType`](../modules/lexical_list.md#listtype)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:109](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L109)

___

### getStart

▸ **getStart**(): `number`

#### Returns

`number`

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:113](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L113)

___

### getTag

▸ **getTag**(): [`ListNodeTagType`](../modules/lexical_list.md#listnodetagtype)

#### Returns

[`ListNodeTagType`](../modules/lexical_list.md#listnodetagtype)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:98](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L98)

___

### setListType

▸ **setListType**(`type`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ListType`](../modules/lexical_list.md#listtype) |

#### Returns

`this`

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:102](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L102)

___

### setStart

▸ **setStart**(`start`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:117](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L117)

___

### splice

▸ **splice**(`start`, `deleteCount`, `nodesToInsert`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `deleteCount` | `number` |
| `nodesToInsert` | [`LexicalNode`](lexical.LexicalNode.md)[] |

#### Returns

`this`

#### Overrides

[ElementNode](lexical.ElementNode.md).[splice](lexical.ElementNode.md#splice)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:188](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L188)

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

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical-list/src/LexicalListNode.ts:139](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L139)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedListNode`](../modules/lexical_list.md#serializedlistnode)\> |

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

[packages/lexical-list/src/LexicalListNode.ts:149](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListNode.ts#L149)
