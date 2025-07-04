---
id: "lexical.DecoratorNode"
title: "Class: DecoratorNode<T>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).DecoratorNode

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`LexicalNode`](lexical.LexicalNode.md)

  ↳ **`DecoratorNode`**

  ↳↳ [`DecoratorBlockNode`](lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode.md)

  ↳↳ [`HorizontalRuleNode`](lexical_react_LexicalHorizontalRuleNode.HorizontalRuleNode.md)

## Constructors

### constructor

• **new DecoratorNode**\<`T`\>(`key?`): [`DecoratorNode`](lexical.DecoratorNode.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

[`DecoratorNode`](lexical.DecoratorNode.md)\<`T`\>

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[constructor](lexical.LexicalNode.md#constructor)

#### Defined in

[packages/lexical/src/LexicalNode.ts:532](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L532)

## Properties

### constructor

• **constructor**: [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<(`key?`: `string`) => [`DecoratorNode`](lexical.DecoratorNode.md)\<`T`\>\>

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:26](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L26)

___

### importDOM

▪ `Static` `Optional` **importDOM**: () => ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)\<`any`\>

#### Type declaration

▸ (): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)\<`any`\>

##### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)\<`any`\>

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[importDOM](lexical.LexicalNode.md#importdom)

#### Defined in

[packages/lexical/src/LexicalNode.ts:530](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L530)

## Methods

### $config

▸ **$config**(): [`BaseStaticNodeConfig`](../modules/lexical.md#basestaticnodeconfig)

Override this to implement the new static node configuration protocol,
this method is called directly on the prototype and must not depend
on anything initialized in the constructor. Generally it should be
a trivial implementation.

#### Returns

[`BaseStaticNodeConfig`](../modules/lexical.md#basestaticnodeconfig)

**`Example`**

```ts
class MyNode extends TextNode {
  $config() {
    return this.config('my-node', {extends: TextNode});
  }
}
```

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[$config](lexical.LexicalNode.md#$config)

#### Defined in

[packages/lexical/src/LexicalNode.ts:449](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L449)

___

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

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[afterCloneFrom](lexical.LexicalNode.md#afterclonefrom)

#### Defined in

[packages/lexical/src/LexicalNode.ts:518](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L518)

___

### config

▸ **config**\<`Type`, `Config`\>(`type`, `config`): `StaticNodeConfigRecord`\<`Type`, `Config`\>

This is a convenience method for $config that
aids in type inference. See [LexicalNode.$config](lexical.LexicalNode.md#$config)
for example usage.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `string` |
| `Config` | extends [`StaticNodeConfigValue`](../interfaces/lexical.StaticNodeConfigValue.md)\<[`DecoratorNode`](lexical.DecoratorNode.md)\<`T`\>, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Type` |
| `config` | `Config` |

#### Returns

`StaticNodeConfigRecord`\<`Type`, `Config`\>

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[config](lexical.LexicalNode.md#config)

#### Defined in

[packages/lexical/src/LexicalNode.ts:458](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L458)

___

### createDOM

▸ **createDOM**(`_config`, `_editor`): `HTMLElement`

Called during the reconciliation process to determine which nodes
to insert into the DOM for this Lexical Node.

This method must return exactly one HTMLElement. Nested elements are not supported.

Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_config` | [`EditorConfig`](../modules/lexical.md#editorconfig) | allows access to things like the EditorTheme (to apply classes) during reconciliation. |
| `_editor` | [`LexicalEditor`](lexical.LexicalEditor.md) | allows access to the editor for context during reconciliation. |

#### Returns

`HTMLElement`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[createDOM](lexical.LexicalNode.md#createdom)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1052](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1052)

___

### createParentElementNode

▸ **createParentElementNode**(): [`ElementNode`](lexical.ElementNode.md)

The creation logic for any required parent. Should be implemented if [isParentRequired](lexical.LexicalNode.md#isparentrequired) returns true.

#### Returns

[`ElementNode`](lexical.ElementNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[createParentElementNode](lexical.LexicalNode.md#createparentelementnode)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1372](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1372)

___

### decorate

▸ **decorate**(`editor`, `config`): `T`

The returned value is added to the LexicalEditor._decorators

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](lexical.LexicalEditor.md) |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`T`

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:31](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L31)

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

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[exportDOM](lexical.LexicalNode.md#exportdom)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1082](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1082)

___

### exportJSON

▸ **exportJSON**(): [`SerializedLexicalNode`](../modules/lexical.md#serializedlexicalnode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedLexicalNode`](../modules/lexical.md#serializedlexicalnode)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[exportJSON](lexical.LexicalNode.md#exportjson)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1094](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1094)

___

### getCommonAncestor

▸ **getCommonAncestor**\<`T`\>(`node`): ``null`` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ElementNode`](lexical.ElementNode.md) = [`ElementNode`](lexical.ElementNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`LexicalNode`](lexical.LexicalNode.md) | the other node to find the common ancestor of. |

#### Returns

``null`` \| `T`

**`Deprecated`**

use [$getCommonAncestor](../modules/lexical.md#$getcommonancestor)

Returns the closest common ancestor of this node and the provided one or null
if one cannot be found.

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getCommonAncestor](lexical.LexicalNode.md#getcommonancestor)

#### Defined in

[packages/lexical/src/LexicalNode.ts:825](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L825)

___

### getIndexWithinParent

▸ **getIndexWithinParent**(): `number`

Returns the zero-based index of this node within the parent.

#### Returns

`number`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getIndexWithinParent](lexical.LexicalNode.md#getindexwithinparent)

#### Defined in

[packages/lexical/src/LexicalNode.ts:651](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L651)

___

### getKey

▸ **getKey**(): `string`

Returns this nodes key.

#### Returns

`string`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getKey](lexical.LexicalNode.md#getkey)

#### Defined in

[packages/lexical/src/LexicalNode.ts:643](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L643)

___

### getLatest

▸ **getLatest**(): `this`

Returns the latest version of the node from the active EditorState.
This is used to avoid getting values from stale node references.

#### Returns

`this`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getLatest](lexical.LexicalNode.md#getlatest)

#### Defined in

[packages/lexical/src/LexicalNode.ts:976](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L976)

___

### getNextSibling

▸ **getNextSibling**\<`T`\>(): ``null`` \| `T`

Returns the "next" siblings - that is, the node that comes
after this one in the same parent

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](lexical.LexicalNode.md) |

#### Returns

``null`` \| `T`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getNextSibling](lexical.LexicalNode.md#getnextsibling)

#### Defined in

[packages/lexical/src/LexicalNode.ts:796](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L796)

___

### getNextSiblings

▸ **getNextSiblings**\<`T`\>(): `T`[]

Returns all "next" siblings - that is, the nodes that come between this
one and the last child of it's parent, inclusive.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](lexical.LexicalNode.md) |

#### Returns

`T`[]

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getNextSiblings](lexical.LexicalNode.md#getnextsiblings)

#### Defined in

[packages/lexical/src/LexicalNode.ts:807](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L807)

___

### getNodesBetween

▸ **getNodesBetween**(`targetNode`): [`LexicalNode`](lexical.LexicalNode.md)[]

Returns a list of nodes that are between this node and
the target node in the EditorState.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetNode` | [`LexicalNode`](lexical.LexicalNode.md) | the node that marks the other end of the range of nodes to be returned. |

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)[]

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getNodesBetween](lexical.LexicalNode.md#getnodesbetween)

#### Defined in

[packages/lexical/src/LexicalNode.ts:895](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L895)

___

### getParent

▸ **getParent**\<`T`\>(): ``null`` \| `T`

Returns the parent of this node, or null if none is found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ElementNode`](lexical.ElementNode.md) |

#### Returns

``null`` \| `T`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getParent](lexical.LexicalNode.md#getparent)

#### Defined in

[packages/lexical/src/LexicalNode.ts:671](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L671)

___

### getParentKeys

▸ **getParentKeys**(): `string`[]

Returns a list of the keys of every ancestor of this node,
all the way up to the RootNode.

#### Returns

`string`[]

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getParentKeys](lexical.LexicalNode.md#getparentkeys)

#### Defined in

[packages/lexical/src/LexicalNode.ts:748](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L748)

___

### getParentOrThrow

▸ **getParentOrThrow**\<`T`\>(): `T`

Returns the parent of this node, or throws if none is found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ElementNode`](lexical.ElementNode.md) |

#### Returns

`T`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getParentOrThrow](lexical.LexicalNode.md#getparentorthrow)

#### Defined in

[packages/lexical/src/LexicalNode.ts:682](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L682)

___

### getParents

▸ **getParents**(): [`ElementNode`](lexical.ElementNode.md)[]

Returns a list of the every ancestor of this node,
all the way up to the RootNode.

#### Returns

[`ElementNode`](lexical.ElementNode.md)[]

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getParents](lexical.LexicalNode.md#getparents)

#### Defined in

[packages/lexical/src/LexicalNode.ts:733](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L733)

___

### getPreviousSibling

▸ **getPreviousSibling**\<`T`\>(): ``null`` \| `T`

Returns the "previous" siblings - that is, the node that comes
before this one in the same parent.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](lexical.LexicalNode.md) |

#### Returns

``null`` \| `T`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getPreviousSibling](lexical.LexicalNode.md#getprevioussibling)

#### Defined in

[packages/lexical/src/LexicalNode.ts:763](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L763)

___

### getPreviousSiblings

▸ **getPreviousSiblings**\<`T`\>(): `T`[]

Returns the "previous" siblings - that is, the nodes that come between
this one and the first child of it's parent, inclusive.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](lexical.LexicalNode.md) |

#### Returns

`T`[]

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getPreviousSiblings](lexical.LexicalNode.md#getprevioussiblings)

#### Defined in

[packages/lexical/src/LexicalNode.ts:774](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L774)

___

### getTextContent

▸ **getTextContent**(): `string`

Returns the text content of the node. Override this for
custom nodes that should have a representation in plain text
format (for copy + paste, for example)

#### Returns

`string`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getTextContent](lexical.LexicalNode.md#gettextcontent)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1026](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1026)

___

### getTextContentSize

▸ **getTextContentSize**(): `number`

Returns the length of the string produced by calling getTextContent on this node.

#### Returns

`number`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getTextContentSize](lexical.LexicalNode.md#gettextcontentsize)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1034](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1034)

___

### getTopLevelElement

▸ **getTopLevelElement**(): ``null`` \| [`ElementNode`](lexical.ElementNode.md) \| [`DecoratorNode`](lexical.DecoratorNode.md)\<`T`\>

Returns the highest (in the EditorState tree)
non-root ancestor of this node, or null if none is found. See [lexical!$isRootOrShadowRoot](../modules/lexical.md#$isrootorshadowroot)
for more information on which Elements comprise "roots".

#### Returns

``null`` \| [`ElementNode`](lexical.ElementNode.md) \| [`DecoratorNode`](lexical.DecoratorNode.md)\<`T`\>

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getTopLevelElement](lexical.LexicalNode.md#gettoplevelelement)

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:19](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L19)

___

### getTopLevelElementOrThrow

▸ **getTopLevelElementOrThrow**(): [`ElementNode`](lexical.ElementNode.md) \| [`DecoratorNode`](lexical.DecoratorNode.md)\<`T`\>

Returns the highest (in the EditorState tree)
non-root ancestor of this node, or throws if none is found. See [lexical!$isRootOrShadowRoot](../modules/lexical.md#$isrootorshadowroot)
for more information on which Elements comprise "roots".

#### Returns

[`ElementNode`](lexical.ElementNode.md) \| [`DecoratorNode`](lexical.DecoratorNode.md)\<`T`\>

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getTopLevelElementOrThrow](lexical.LexicalNode.md#gettoplevelelementorthrow)

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:20](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L20)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node.

#### Returns

`string`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getType](lexical.LexicalNode.md#gettype)

#### Defined in

[packages/lexical/src/LexicalNode.ts:557](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L557)

___

### getWritable

▸ **getWritable**(): `this`

Returns a mutable version of the node using [$cloneWithProperties](../modules/lexical.md#$clonewithproperties)
if necessary. Will throw an error if called outside of a Lexical Editor
[LexicalEditor.update](lexical.LexicalEditor.md#update) callback.

#### Returns

`this`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getWritable](lexical.LexicalNode.md#getwritable)

#### Defined in

[packages/lexical/src/LexicalNode.ts:993](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L993)

___

### insertAfter

▸ **insertAfter**(`nodeToInsert`, `restoreSelection?`): [`LexicalNode`](lexical.LexicalNode.md)

Inserts a node after this LexicalNode (as the next sibling).

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nodeToInsert` | [`LexicalNode`](lexical.LexicalNode.md) | `undefined` | The node to insert after this one. |
| `restoreSelection` | `boolean` | `true` | Whether or not to attempt to resolve the selection to the appropriate place after the operation is complete. |

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[insertAfter](lexical.LexicalNode.md#insertafter)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1257](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1257)

___

### insertBefore

▸ **insertBefore**(`nodeToInsert`, `restoreSelection?`): [`LexicalNode`](lexical.LexicalNode.md)

Inserts a node before this LexicalNode (as the previous sibling).

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nodeToInsert` | [`LexicalNode`](lexical.LexicalNode.md) | `undefined` | The node to insert before this one. |
| `restoreSelection` | `boolean` | `true` | Whether or not to attempt to resolve the selection to the appropriate place after the operation is complete. |

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[insertBefore](lexical.LexicalNode.md#insertbefore)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1324](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1324)

___

### is

▸ **is**(`object`): `boolean`

Returns true if the provided node is the exact same one as this node, from Lexical's perspective.
Always use this instead of referential equality.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `undefined` \| ``null`` \| [`LexicalNode`](lexical.LexicalNode.md) | the node to perform the equality comparison on. |

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[is](lexical.LexicalNode.md#is)

#### Defined in

[packages/lexical/src/LexicalNode.ts:842](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L842)

___

### isAttached

▸ **isAttached**(): `boolean`

Returns true if there is a path between this node and the RootNode, false otherwise.
This is a way of determining if the node is "attached" EditorState. Unattached nodes
won't be reconciled and will ultimately be cleaned up by the Lexical GC.

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isAttached](lexical.LexicalNode.md#isattached)

#### Defined in

[packages/lexical/src/LexicalNode.ts:574](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L574)

___

### isBefore

▸ **isBefore**(`targetNode`): `boolean`

Returns true if this node logically precedes the target node in the
editor state, false otherwise (including if there is no common ancestor).

Note that this notion of isBefore is based on post-order; a descendant
node is always before its ancestors. See also
[$getCommonAncestor](../modules/lexical.md#$getcommonancestor) and [$comparePointCaretNext](../modules/lexical.md#$comparepointcaretnext) for
more flexible ways to determine the relative positions of nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetNode` | [`LexicalNode`](lexical.LexicalNode.md) | the node we're testing to see if it's after this one. |

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isBefore](lexical.LexicalNode.md#isbefore)

#### Defined in

[packages/lexical/src/LexicalNode.ts:860](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L860)

___

### isDirty

▸ **isDirty**(): `boolean`

Returns true if this node has been marked dirty during this update cycle.

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isDirty](lexical.LexicalNode.md#isdirty)

#### Defined in

[packages/lexical/src/LexicalNode.ts:965](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L965)

___

### isInline

▸ **isInline**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isInline](lexical.LexicalNode.md#isinline)

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:39](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L39)

___

### isIsolated

▸ **isIsolated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:35](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L35)

___

### isKeyboardSelectable

▸ **isKeyboardSelectable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:43](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L43)

___

### isParentOf

▸ **isParentOf**(`targetNode`): `boolean`

Returns true if this node is an ancestor of and distinct from the target node, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetNode` | [`LexicalNode`](lexical.LexicalNode.md) | the would-be child node. |

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isParentOf](lexical.LexicalNode.md#isparentof)

#### Defined in

[packages/lexical/src/LexicalNode.ts:883](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L883)

___

### isParentRequired

▸ **isParentRequired**(): `boolean`

Whether or not this node has a required parent. Used during copy + paste operations
to normalize nodes that would otherwise be orphaned. For example, ListItemNodes without
a ListNode parent or TextNodes with a ParagraphNode parent.

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isParentRequired](lexical.LexicalNode.md#isparentrequired)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1364](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1364)

___

### isSelected

▸ **isSelected**(`selection?`): `boolean`

Returns true if this node is contained within the provided Selection., false otherwise.
Relies on the algorithms implemented in [BaseSelection.getNodes](../interfaces/lexical.BaseSelection.md#getnodes) to determine
what's included.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selection?` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | The selection that we want to determine if the node is in. |

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isSelected](lexical.LexicalNode.md#isselected)

#### Defined in

[packages/lexical/src/LexicalNode.ts:598](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L598)

___

### markDirty

▸ **markDirty**(): `void`

Marks a node dirty, triggering transforms and
forcing it to be reconciled during the update cycle.

#### Returns

`void`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[markDirty](lexical.LexicalNode.md#markdirty)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1433](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1433)

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

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[remove](lexical.LexicalNode.md#remove)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1176](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1176)

___

### replace

▸ **replace**\<`N`\>(`replaceWith`, `includeChildren?`): `N`

Replaces this LexicalNode with the provided node, optionally transferring the children
of the replaced node to the replacing node.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`LexicalNode`](lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `replaceWith` | `N` | The node to replace this one with. |
| `includeChildren?` | `boolean` | Whether or not to transfer the children of this node to the replacing node. |

#### Returns

`N`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[replace](lexical.LexicalNode.md#replace)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1187](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1187)

___

### selectEnd

▸ **selectEnd**(): [`RangeSelection`](lexical.RangeSelection.md)

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[selectEnd](lexical.LexicalNode.md#selectend)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1380](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1380)

___

### selectNext

▸ **selectNext**(`anchorOffset?`, `focusOffset?`): [`RangeSelection`](lexical.RangeSelection.md)

Moves selection to the next sibling of this node, at the specified offsets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchorOffset?` | `number` | The anchor offset for selection. |
| `focusOffset?` | `number` | The focus offset for selection |

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[selectNext](lexical.LexicalNode.md#selectnext)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1412](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1412)

___

### selectPrevious

▸ **selectPrevious**(`anchorOffset?`, `focusOffset?`): [`RangeSelection`](lexical.RangeSelection.md)

Moves selection to the previous sibling of this node, at the specified offsets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `anchorOffset?` | `number` | The anchor offset for selection. |
| `focusOffset?` | `number` | The focus offset for selection |

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[selectPrevious](lexical.LexicalNode.md#selectprevious)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1390](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1390)

___

### selectStart

▸ **selectStart**(): [`RangeSelection`](lexical.RangeSelection.md)

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[selectStart](lexical.LexicalNode.md#selectstart)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1376](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1376)

___

### updateDOM

▸ **updateDOM**(`_prevNode`, `_dom`, `_config`): `boolean`

Called when a node changes and should update the DOM
in whatever way is necessary to make it align with any changes that might
have happened during the update.

Returning "true" here will cause lexical to unmount and recreate the DOM node
(by calling createDOM). You would need to do this if the element tag changes,
for instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_prevNode` | `unknown` |
| `_dom` | `HTMLElement` |
| `_config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[updateDOM](lexical.LexicalNode.md#updatedom)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1066](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1066)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedLexicalNode`](../modules/lexical.md#serializedlexicalnode)\> |

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

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[updateFromJSON](lexical.LexicalNode.md#updatefromjson)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1147](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1147)

___

### clone

▸ **clone**(`_data`): [`LexicalNode`](lexical.LexicalNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | `unknown` |

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[clone](lexical.LexicalNode.md#clone)

#### Defined in

[packages/lexical/src/LexicalNode.ts:426](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L426)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node. Every node must
implement this and it MUST BE UNIQUE amongst nodes registered
on the editor.

#### Returns

`string`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getType](lexical.LexicalNode.md#gettype-1)

#### Defined in

[packages/lexical/src/LexicalNode.ts:410](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L410)

___

### importJSON

▸ **importJSON**(`_serializedNode`): [`LexicalNode`](lexical.LexicalNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `_serializedNode` | [`SerializedLexicalNode`](../modules/lexical.md#serializedlexicalnode) |

#### Returns

[`LexicalNode`](lexical.LexicalNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[importJSON](lexical.LexicalNode.md#importjson)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1111](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1111)

___

### transform

▸ **transform**(): ``null`` \| (`node`: [`LexicalNode`](lexical.LexicalNode.md)) => `void`

Registers the returned function as a transform on the node during
Editor initialization. Most such use cases should be addressed via
the [LexicalEditor.registerNodeTransform](lexical.LexicalEditor.md#registernodetransform) API.

Experimental - use at your own risk.

#### Returns

``null`` \| (`node`: [`LexicalNode`](lexical.LexicalNode.md)) => `void`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[transform](lexical.LexicalNode.md#transform)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1162](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1162)
