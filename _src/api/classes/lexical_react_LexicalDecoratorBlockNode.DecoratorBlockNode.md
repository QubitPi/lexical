---
id: "lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode"
title: "Class: DecoratorBlockNode"
custom_edit_url: null
---

[@lexical/react/LexicalDecoratorBlockNode](../modules/lexical_react_LexicalDecoratorBlockNode.md).DecoratorBlockNode

## Hierarchy

- [`DecoratorNode`](lexical.DecoratorNode.md)\<`JSX.Element`\>

  ↳ **`DecoratorBlockNode`**

## Constructors

### constructor

• **new DecoratorBlockNode**(`format?`, `key?`): [`DecoratorBlockNode`](lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format?` | [`ElementFormatType`](../modules/lexical.md#elementformattype) |
| `key?` | `string` |

#### Returns

[`DecoratorBlockNode`](lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode.md)

#### Overrides

[DecoratorNode](lexical.DecoratorNode.md).[constructor](lexical.DecoratorNode.md#constructor)

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:31](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L31)

## Properties

### \_\_format

• **\_\_format**: [`ElementFormatType`](../modules/lexical.md#elementformattype)

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:29](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L29)

___

### constructor

• **constructor**: [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<(`key?`: `string`) => [`DecoratorNode`](lexical.DecoratorNode.md)\<`Element`\>\>

#### Inherited from

DecoratorNode.constructor

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

[DecoratorNode](lexical.DecoratorNode.md).[importDOM](lexical.DecoratorNode.md#importdom)

#### Defined in

[packages/lexical/src/LexicalNode.ts:527](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L527)

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

[DecoratorNode](lexical.DecoratorNode.md).[$config](lexical.DecoratorNode.md#$config)

#### Defined in

[packages/lexical/src/LexicalNode.ts:446](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L446)

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

[DecoratorNode](lexical.DecoratorNode.md).[afterCloneFrom](lexical.DecoratorNode.md#afterclonefrom)

#### Defined in

[packages/lexical/src/LexicalNode.ts:515](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L515)

___

### canIndent

▸ **canIndent**(): ``false``

#### Returns

``false``

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:51](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L51)

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
| `Config` | extends [`StaticNodeConfigValue`](../interfaces/lexical.StaticNodeConfigValue.md)\<[`DecoratorBlockNode`](lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode.md), `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `Type` |
| `config` | `Config` |

#### Returns

`StaticNodeConfigRecord`\<`Type`, `Config`\>

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[config](lexical.DecoratorNode.md#config)

#### Defined in

[packages/lexical/src/LexicalNode.ts:455](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L455)

___

### createDOM

▸ **createDOM**(): `HTMLElement`

Called during the reconciliation process to determine which nodes
to insert into the DOM for this Lexical Node.

This method must return exactly one HTMLElement. Nested elements are not supported.

Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.

#### Returns

`HTMLElement`

#### Overrides

[DecoratorNode](lexical.DecoratorNode.md).[createDOM](lexical.DecoratorNode.md#createdom)

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:55](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L55)

___

### createParentElementNode

▸ **createParentElementNode**(): [`ElementNode`](lexical.ElementNode.md)

The creation logic for any required parent. Should be implemented if [isParentRequired](lexical.LexicalNode.md#isparentrequired) returns true.

#### Returns

[`ElementNode`](lexical.ElementNode.md)

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[createParentElementNode](lexical.DecoratorNode.md#createparentelementnode)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1369](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1369)

___

### decorate

▸ **decorate**(`editor`, `config`): `Element`

The returned value is added to the LexicalEditor._decorators

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](lexical.LexicalEditor.md) |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`Element`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[decorate](lexical.DecoratorNode.md#decorate)

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

[DecoratorNode](lexical.DecoratorNode.md).[exportDOM](lexical.DecoratorNode.md#exportdom)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1079](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1079)

___

### exportJSON

▸ **exportJSON**(): [`SerializedDecoratorBlockNode`](../modules/lexical_react_LexicalDecoratorBlockNode.md#serializeddecoratorblocknode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedDecoratorBlockNode`](../modules/lexical_react_LexicalDecoratorBlockNode.md#serializeddecoratorblocknode)

#### Overrides

[DecoratorNode](lexical.DecoratorNode.md).[exportJSON](lexical.DecoratorNode.md#exportjson)

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:36](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L36)

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

[DecoratorNode](lexical.DecoratorNode.md).[getCommonAncestor](lexical.DecoratorNode.md#getcommonancestor)

#### Defined in

[packages/lexical/src/LexicalNode.ts:822](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L822)

___

### getIndexWithinParent

▸ **getIndexWithinParent**(): `number`

Returns the zero-based index of this node within the parent.

#### Returns

`number`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getIndexWithinParent](lexical.DecoratorNode.md#getindexwithinparent)

#### Defined in

[packages/lexical/src/LexicalNode.ts:648](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L648)

___

### getKey

▸ **getKey**(): `string`

Returns this nodes key.

#### Returns

`string`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getKey](lexical.DecoratorNode.md#getkey)

#### Defined in

[packages/lexical/src/LexicalNode.ts:640](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L640)

___

### getLatest

▸ **getLatest**(): `this`

Returns the latest version of the node from the active EditorState.
This is used to avoid getting values from stale node references.

#### Returns

`this`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getLatest](lexical.DecoratorNode.md#getlatest)

#### Defined in

[packages/lexical/src/LexicalNode.ts:973](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L973)

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

[DecoratorNode](lexical.DecoratorNode.md).[getNextSibling](lexical.DecoratorNode.md#getnextsibling)

#### Defined in

[packages/lexical/src/LexicalNode.ts:793](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L793)

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

[DecoratorNode](lexical.DecoratorNode.md).[getNextSiblings](lexical.DecoratorNode.md#getnextsiblings)

#### Defined in

[packages/lexical/src/LexicalNode.ts:804](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L804)

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

[DecoratorNode](lexical.DecoratorNode.md).[getNodesBetween](lexical.DecoratorNode.md#getnodesbetween)

#### Defined in

[packages/lexical/src/LexicalNode.ts:892](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L892)

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

[DecoratorNode](lexical.DecoratorNode.md).[getParent](lexical.DecoratorNode.md#getparent)

#### Defined in

[packages/lexical/src/LexicalNode.ts:668](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L668)

___

### getParentKeys

▸ **getParentKeys**(): `string`[]

Returns a list of the keys of every ancestor of this node,
all the way up to the RootNode.

#### Returns

`string`[]

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getParentKeys](lexical.DecoratorNode.md#getparentkeys)

#### Defined in

[packages/lexical/src/LexicalNode.ts:745](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L745)

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

[DecoratorNode](lexical.DecoratorNode.md).[getParentOrThrow](lexical.DecoratorNode.md#getparentorthrow)

#### Defined in

[packages/lexical/src/LexicalNode.ts:679](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L679)

___

### getParents

▸ **getParents**(): [`ElementNode`](lexical.ElementNode.md)[]

Returns a list of the every ancestor of this node,
all the way up to the RootNode.

#### Returns

[`ElementNode`](lexical.ElementNode.md)[]

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getParents](lexical.DecoratorNode.md#getparents)

#### Defined in

[packages/lexical/src/LexicalNode.ts:730](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L730)

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

[DecoratorNode](lexical.DecoratorNode.md).[getPreviousSibling](lexical.DecoratorNode.md#getprevioussibling)

#### Defined in

[packages/lexical/src/LexicalNode.ts:760](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L760)

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

[DecoratorNode](lexical.DecoratorNode.md).[getPreviousSiblings](lexical.DecoratorNode.md#getprevioussiblings)

#### Defined in

[packages/lexical/src/LexicalNode.ts:771](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L771)

___

### getTextContent

▸ **getTextContent**(): `string`

Returns the text content of the node. Override this for
custom nodes that should have a representation in plain text
format (for copy + paste, for example)

#### Returns

`string`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getTextContent](lexical.DecoratorNode.md#gettextcontent)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1023](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1023)

___

### getTextContentSize

▸ **getTextContentSize**(): `number`

Returns the length of the string produced by calling getTextContent on this node.

#### Returns

`number`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getTextContentSize](lexical.DecoratorNode.md#gettextcontentsize)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1031](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1031)

___

### getTopLevelElement

▸ **getTopLevelElement**(): ``null`` \| [`ElementNode`](lexical.ElementNode.md) \| [`DecoratorBlockNode`](lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode.md)

Returns the highest (in the EditorState tree)
non-root ancestor of this node, or null if none is found. See [lexical!$isRootOrShadowRoot](../modules/lexical.md#$isrootorshadowroot)
for more information on which Elements comprise "roots".

#### Returns

``null`` \| [`ElementNode`](lexical.ElementNode.md) \| [`DecoratorBlockNode`](lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode.md)

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getTopLevelElement](lexical.DecoratorNode.md#gettoplevelelement)

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:19](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L19)

___

### getTopLevelElementOrThrow

▸ **getTopLevelElementOrThrow**(): [`ElementNode`](lexical.ElementNode.md) \| [`DecoratorBlockNode`](lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode.md)

Returns the highest (in the EditorState tree)
non-root ancestor of this node, or throws if none is found. See [lexical!$isRootOrShadowRoot](../modules/lexical.md#$isrootorshadowroot)
for more information on which Elements comprise "roots".

#### Returns

[`ElementNode`](lexical.ElementNode.md) \| [`DecoratorBlockNode`](lexical_react_LexicalDecoratorBlockNode.DecoratorBlockNode.md)

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getTopLevelElementOrThrow](lexical.DecoratorNode.md#gettoplevelelementorthrow)

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:20](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L20)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node.

#### Returns

`string`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getType](lexical.DecoratorNode.md#gettype)

#### Defined in

[packages/lexical/src/LexicalNode.ts:554](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L554)

___

### getWritable

▸ **getWritable**(): `this`

Returns a mutable version of the node using [$cloneWithProperties](../modules/lexical.md#$clonewithproperties)
if necessary. Will throw an error if called outside of a Lexical Editor
[LexicalEditor.update](lexical.LexicalEditor.md#update) callback.

#### Returns

`this`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getWritable](lexical.DecoratorNode.md#getwritable)

#### Defined in

[packages/lexical/src/LexicalNode.ts:990](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L990)

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

[DecoratorNode](lexical.DecoratorNode.md).[insertAfter](lexical.DecoratorNode.md#insertafter)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1254](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1254)

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

[DecoratorNode](lexical.DecoratorNode.md).[insertBefore](lexical.DecoratorNode.md#insertbefore)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1321](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1321)

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

[DecoratorNode](lexical.DecoratorNode.md).[is](lexical.DecoratorNode.md#is)

#### Defined in

[packages/lexical/src/LexicalNode.ts:839](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L839)

___

### isAttached

▸ **isAttached**(): `boolean`

Returns true if there is a path between this node and the RootNode, false otherwise.
This is a way of determining if the node is "attached" EditorState. Unattached nodes
won't be reconciled and will ultimately be cleaned up by the Lexical GC.

#### Returns

`boolean`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[isAttached](lexical.DecoratorNode.md#isattached)

#### Defined in

[packages/lexical/src/LexicalNode.ts:571](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L571)

___

### isBefore

▸ **isBefore**(`targetNode`): `boolean`

Returns true if this node logically precedes the target node in the
editor state, false otherwise (including if there is no common ancestor).

Note that this notion of isBefore is based on post-order; a descendant
node is always before its ancestors. See also
[$getCommonAncestor](../modules/lexical.md#$getcommonancestor) and $comparePointCaretNext for
more flexible ways to determine the relative positions of nodes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetNode` | [`LexicalNode`](lexical.LexicalNode.md) | the node we're testing to see if it's after this one. |

#### Returns

`boolean`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[isBefore](lexical.DecoratorNode.md#isbefore)

#### Defined in

[packages/lexical/src/LexicalNode.ts:857](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L857)

___

### isDirty

▸ **isDirty**(): `boolean`

Returns true if this node has been marked dirty during this update cycle.

#### Returns

`boolean`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[isDirty](lexical.DecoratorNode.md#isdirty)

#### Defined in

[packages/lexical/src/LexicalNode.ts:962](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L962)

___

### isInline

▸ **isInline**(): ``false``

#### Returns

``false``

#### Overrides

[DecoratorNode](lexical.DecoratorNode.md).[isInline](lexical.DecoratorNode.md#isinline)

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:69](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L69)

___

### isIsolated

▸ **isIsolated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[isIsolated](lexical.DecoratorNode.md#isisolated)

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:35](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L35)

___

### isKeyboardSelectable

▸ **isKeyboardSelectable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[isKeyboardSelectable](lexical.DecoratorNode.md#iskeyboardselectable)

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

[DecoratorNode](lexical.DecoratorNode.md).[isParentOf](lexical.DecoratorNode.md#isparentof)

#### Defined in

[packages/lexical/src/LexicalNode.ts:880](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L880)

___

### isParentRequired

▸ **isParentRequired**(): `boolean`

Whether or not this node has a required parent. Used during copy + paste operations
to normalize nodes that would otherwise be orphaned. For example, ListItemNodes without
a ListNode parent or TextNodes with a ParagraphNode parent.

#### Returns

`boolean`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[isParentRequired](lexical.DecoratorNode.md#isparentrequired)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1361](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1361)

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

[DecoratorNode](lexical.DecoratorNode.md).[isSelected](lexical.DecoratorNode.md#isselected)

#### Defined in

[packages/lexical/src/LexicalNode.ts:595](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L595)

___

### markDirty

▸ **markDirty**(): `void`

Marks a node dirty, triggering transforms and
forcing it to be reconciled during the update cycle.

#### Returns

`void`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[markDirty](lexical.DecoratorNode.md#markdirty)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1430](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1430)

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

[DecoratorNode](lexical.DecoratorNode.md).[remove](lexical.DecoratorNode.md#remove)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1173](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1173)

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

[DecoratorNode](lexical.DecoratorNode.md).[replace](lexical.DecoratorNode.md#replace)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1184](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1184)

___

### selectEnd

▸ **selectEnd**(): [`RangeSelection`](lexical.RangeSelection.md)

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[selectEnd](lexical.DecoratorNode.md#selectend)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1377](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1377)

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

[DecoratorNode](lexical.DecoratorNode.md).[selectNext](lexical.DecoratorNode.md#selectnext)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1409](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1409)

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

[DecoratorNode](lexical.DecoratorNode.md).[selectPrevious](lexical.DecoratorNode.md#selectprevious)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1387](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1387)

___

### selectStart

▸ **selectStart**(): [`RangeSelection`](lexical.RangeSelection.md)

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[selectStart](lexical.DecoratorNode.md#selectstart)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1373](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1373)

___

### setFormat

▸ **setFormat**(`format`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`ElementFormatType`](../modules/lexical.md#elementformattype) |

#### Returns

`this`

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:63](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L63)

___

### updateDOM

▸ **updateDOM**(): ``false``

Called when a node changes and should update the DOM
in whatever way is necessary to make it align with any changes that might
have happened during the update.

Returning "true" here will cause lexical to unmount and recreate the DOM node
(by calling createDOM). You would need to do this if the element tag changes,
for instance.

#### Returns

``false``

#### Overrides

[DecoratorNode](lexical.DecoratorNode.md).[updateDOM](lexical.DecoratorNode.md#updatedom)

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:59](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L59)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedDecoratorBlockNode`](../modules/lexical_react_LexicalDecoratorBlockNode.md#serializeddecoratorblocknode)\> |

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

[DecoratorNode](lexical.DecoratorNode.md).[updateFromJSON](lexical.DecoratorNode.md#updatefromjson)

#### Defined in

[packages/lexical-react/src/LexicalDecoratorBlockNode.ts:43](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalDecoratorBlockNode.ts#L43)

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

[DecoratorNode](lexical.DecoratorNode.md).[clone](lexical.DecoratorNode.md#clone)

#### Defined in

[packages/lexical/src/LexicalNode.ts:423](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L423)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node. Every node must
implement this and it MUST BE UNIQUE amongst nodes registered
on the editor.

#### Returns

`string`

#### Inherited from

[DecoratorNode](lexical.DecoratorNode.md).[getType](lexical.DecoratorNode.md#gettype-1)

#### Defined in

[packages/lexical/src/LexicalNode.ts:409](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L409)

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

[DecoratorNode](lexical.DecoratorNode.md).[importJSON](lexical.DecoratorNode.md#importjson)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1108](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1108)

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

[DecoratorNode](lexical.DecoratorNode.md).[transform](lexical.DecoratorNode.md#transform)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1159](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1159)
