---
id: "lexical_list.ListItemNode"
title: "Class: ListItemNode"
custom_edit_url: null
---

[@lexical/list](../modules/lexical_list.md).ListItemNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`ListItemNode`**

## Constructors

### constructor

• **new ListItemNode**(`value?`, `checked?`, `key?`): [`ListItemNode`](lexical_list.ListItemNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `1` |
| `checked` | `undefined` \| `boolean` | `undefined` |
| `key?` | `string` | `undefined` |

#### Returns

[`ListItemNode`](lexical_list.ListItemNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:106](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L106)

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

[packages/lexical-list/src/LexicalListItemNode.ts:116](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L116)

___

### append

▸ **append**(`...nodes`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | [`LexicalNode`](lexical.LexicalNode.md)[] |

#### Returns

`this`

#### Overrides

[ElementNode](lexical.ElementNode.md).[append](lexical.ElementNode.md#append)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:200](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L200)

___

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

[packages/lexical-list/src/LexicalListItemNode.ts:466](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L466)

___

### canMergeWith

▸ **canMergeWith**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LexicalNode`](lexical.LexicalNode.md) |

#### Returns

`boolean`

#### Overrides

ElementNode.canMergeWith

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:439](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L439)

___

### collapseAtStart

▸ **collapseAtStart**(`selection`): ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | [`RangeSelection`](lexical.RangeSelection.md) |

#### Returns

``true``

#### Overrides

[ElementNode](lexical.ElementNode.md).[collapseAtStart](lexical.ElementNode.md#collapseatstart)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:319](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L319)

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

[packages/lexical-list/src/LexicalListItemNode.ts:122](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L122)

___

### createParentElementNode

▸ **createParentElementNode**(): [`ElementNode`](lexical.ElementNode.md)

The creation logic for any required parent. Should be implemented if [isParentRequired](lexical.LexicalNode.md#isparentrequired) returns true.

#### Returns

[`ElementNode`](lexical.ElementNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[createParentElementNode](lexical.ElementNode.md#createparentelementnode)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:462](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L462)

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

[packages/lexical-list/src/LexicalListItemNode.ts:174](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L174)

___

### exportJSON

▸ **exportJSON**(): [`SerializedListItemNode`](../modules/lexical_list.md#serializedlistitemnode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedListItemNode`](../modules/lexical_list.md#serializedlistitemnode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:192](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L192)

___

### extractWithChild

▸ **extractWithChild**(`child`, `selection`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`LexicalNode`](lexical.LexicalNode.md) |
| `selection` | [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[extractWithChild](lexical.ElementNode.md#extractwithchild)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:443](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L443)

___

### getChecked

▸ **getChecked**(): `undefined` \| `boolean`

#### Returns

`undefined` \| `boolean`

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:370](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L370)

___

### getIndent

▸ **getIndent**(): `number`

#### Returns

`number`

#### Overrides

[ElementNode](lexical.ElementNode.md).[getIndent](lexical.ElementNode.md#getindent)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:394](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L394)

___

### getValue

▸ **getValue**(): `number`

#### Returns

`number`

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:358](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L358)

___

### insertAfter

▸ **insertAfter**(`node`, `restoreSelection?`): [`LexicalNode`](lexical.LexicalNode.md)

Inserts a node after this LexicalNode (as the next sibling).

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `node` | [`LexicalNode`](lexical.LexicalNode.md) | `undefined` | The node to insert after this one. |
| `restoreSelection` | `boolean` | `true` | Whether or not to attempt to resolve the selection to the appropriate place after the operation is complete. |

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[insertAfter](lexical.ElementNode.md#insertafter)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:260](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L260)

___

### insertNewAfter

▸ **insertNewAfter**(`_`, `restoreSelection?`): [`ParagraphNode`](lexical.ParagraphNode.md) \| [`ListItemNode`](lexical_list.ListItemNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_` | [`RangeSelection`](lexical.RangeSelection.md) | `undefined` |
| `restoreSelection` | `boolean` | `true` |

#### Returns

[`ParagraphNode`](lexical.ParagraphNode.md) \| [`ListItemNode`](lexical_list.ListItemNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[insertNewAfter](lexical.ElementNode.md#insertnewafter)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:306](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L306)

___

### isParentRequired

▸ **isParentRequired**(): ``true``

Whether or not this node has a required parent. Used during copy + paste operations
to normalize nodes that would otherwise be orphaned. For example, ListItemNodes without
a ListNode parent or TextNodes with a ParagraphNode parent.

#### Returns

``true``

#### Overrides

[ElementNode](lexical.ElementNode.md).[isParentRequired](lexical.ElementNode.md#isparentrequired)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:458](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L458)

___

### remove

▸ **remove**(`preserveEmptyParent?`): `void`

Removes this LexicalNode from the EditorState. If the node isn't re-inserted
somewhere, the Lexical garbage collector will eventually clean it up.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `preserveEmptyParent?` | `boolean` | If falsy, the node's parent will be removed if it's empty after the removal operation. This is the default behavior, subject to other node heuristics such as [ElementNode#canBeEmpty](lexical.ElementNode.md#canbeempty) |

#### Returns

`void`

#### Overrides

[ElementNode](lexical.ElementNode.md).[remove](lexical.ElementNode.md#remove)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:290](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L290)

___

### replace

▸ **replace**\<`N`\>(`replaceWithNode`, `includeChildren?`): `N`

Replaces this LexicalNode with the provided node, optionally transferring the children
of the replaced node to the replacing node.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`LexicalNode`](lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `replaceWithNode` | `N` | The node to replace this one with. |
| `includeChildren?` | `boolean` | Whether or not to transfer the children of this node to the replacing node. |

#### Returns

`N`

#### Overrides

[ElementNode](lexical.ElementNode.md).[replace](lexical.ElementNode.md#replace)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:216](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L216)

___

### setChecked

▸ **setChecked**(`checked?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checked?` | `boolean` |

#### Returns

`this`

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:383](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L383)

___

### setIndent

▸ **setIndent**(`indent`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indent` | `number` |

#### Returns

`this`

#### Overrides

[ElementNode](lexical.ElementNode.md).[setIndent](lexical.ElementNode.md#setindent)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:411](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L411)

___

### setValue

▸ **setValue**(`value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:364](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L364)

___

### toggleChecked

▸ **toggleChecked**(): `this`

#### Returns

`this`

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:389](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L389)

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
| `prevNode` | [`ListItemNode`](lexical_list.ListItemNode.md) |
| `dom` | `HTMLElement` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:154](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L154)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedListItemNode`](../modules/lexical_list.md#serializedlistitemnode)\> |

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

[packages/lexical-list/src/LexicalListItemNode.ts:165](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L165)

___

### updateListItemDOM

▸ **updateListItemDOM**(`prevNode`, `dom`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevNode` | ``null`` \| [`ListItemNode`](lexical_list.ListItemNode.md) |
| `dom` | `HTMLLIElement` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`void`

#### Defined in

[packages/lexical-list/src/LexicalListItemNode.ts:129](https://github.com/QubitPi/lexical/tree/main/packages/lexical-list/src/LexicalListItemNode.ts#L129)
