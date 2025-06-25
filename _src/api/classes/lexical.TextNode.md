---
id: "lexical.TextNode"
title: "Class: TextNode"
custom_edit_url: null
---

[lexical](../modules/lexical.md).TextNode

## Hierarchy

- [`LexicalNode`](lexical.LexicalNode.md)

  ↳ **`TextNode`**

  ↳↳ [`TabNode`](lexical.TabNode.md)

  ↳↳ [`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

  ↳↳ [`HashtagNode`](lexical_hashtag.HashtagNode.md)

## Constructors

### constructor

• **new TextNode**(`text?`, `key?`): [`TextNode`](lexical.TextNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `''` |
| `key?` | `string` | `undefined` |

#### Returns

[`TextNode`](lexical.TextNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[constructor](lexical.LexicalNode.md#constructor)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:323](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L323)

## Properties

### \_\_text

• **\_\_text**: `string`

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:296](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L296)

___

### constructor

• **constructor**: [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`TextNode`](lexical.TextNode.md)\>

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:295](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L295)

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

[LexicalNode](lexical.LexicalNode.md).[afterCloneFrom](lexical.LexicalNode.md#afterclonefrom)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:314](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L314)

___

### canHaveFormat

▸ **canHaveFormat**(): `boolean`

#### Returns

`boolean`

true if the text node supports font styling, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:473](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L473)

___

### canInsertTextAfter

▸ **canInsertTextAfter**(): `boolean`

This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
when a user event would cause text to be inserted after them in the editor. If true, Lexical will attempt
to insert text into this node. If false, it will insert the text in a new sibling node.

#### Returns

`boolean`

true if text can be inserted after the node, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:940](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L940)

___

### canInsertTextBefore

▸ **canInsertTextBefore**(): `boolean`

This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
when a user event would cause text to be inserted before them in the editor. If true, Lexical will attempt
to insert text into this node. If false, it will insert the text in a new sibling node.

#### Returns

`boolean`

true if text can be inserted before the node, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:929](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L929)

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
| `Config` | extends [`StaticNodeConfigValue`](../interfaces/lexical.StaticNodeConfigValue.md)\<[`TextNode`](lexical.TextNode.md), `Type`\> |

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

[packages/lexical/src/LexicalNode.ts:455](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L455)

___

### createDOM

▸ **createDOM**(`config`, `editor?`): `HTMLElement`

Called during the reconciliation process to determine which nodes
to insert into the DOM for this Lexical Node.

This method must return exactly one HTMLElement. Nested elements are not supported.

Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) | allows access to things like the EditorTheme (to apply classes) during reconciliation. |
| `editor?` | [`LexicalEditor`](lexical.LexicalEditor.md) | allows access to the editor for context during reconciliation. |

#### Returns

`HTMLElement`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[createDOM](lexical.LexicalNode.md#createdom)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:486](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L486)

___

### createParentElementNode

▸ **createParentElementNode**(): [`ElementNode`](lexical.ElementNode.md)

The creation logic for any required parent. Should be implemented if [isParentRequired](lexical.LexicalNode.md#isparentrequired) returns true.

#### Returns

[`ElementNode`](lexical.ElementNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[createParentElementNode](lexical.LexicalNode.md#createparentelementnode)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1369](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1369)

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

[packages/lexical/src/nodes/LexicalTextNode.ts:642](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L642)

___

### exportJSON

▸ **exportJSON**(): [`SerializedTextNode`](../modules/lexical.md#serializedtextnode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedTextNode`](../modules/lexical.md#serializedtextnode)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[exportJSON](lexical.LexicalNode.md#exportjson)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:680](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L680)

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

[packages/lexical/src/LexicalNode.ts:822](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L822)

___

### getDetail

▸ **getDetail**(): `number`

Returns a 32-bit integer that represents the TextDetailTypes currently applied to the
TextNode. You probably don't want to use this method directly - consider using TextNode.isDirectionless
or TextNode.isUnmergeable instead.

#### Returns

`number`

a number representing the detail of the text node.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:350](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L350)

___

### getFormat

▸ **getFormat**(): `number`

Returns a 32-bit integer that represents the TextFormatTypes currently applied to the
TextNode. You probably don't want to use this method directly - consider using TextNode.hasFormat instead.

#### Returns

`number`

a number representing the format of the text node.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:338](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L338)

___

### getFormatFlags

▸ **getFormatFlags**(`type`, `alignWithFormat`): `number`

Returns the format flags applied to the node as a 32-bit integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TextFormatType`](../modules/lexical.md#textformattype) |
| `alignWithFormat` | ``null`` \| `number` |

#### Returns

`number`

a number representing the TextFormatTypes applied to the node.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:463](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L463)

___

### getIndexWithinParent

▸ **getIndexWithinParent**(): `number`

Returns the zero-based index of this node within the parent.

#### Returns

`number`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getIndexWithinParent](lexical.LexicalNode.md#getindexwithinparent)

#### Defined in

[packages/lexical/src/LexicalNode.ts:648](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L648)

___

### getKey

▸ **getKey**(): `string`

Returns this nodes key.

#### Returns

`string`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getKey](lexical.LexicalNode.md#getkey)

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

[LexicalNode](lexical.LexicalNode.md).[getLatest](lexical.LexicalNode.md#getlatest)

#### Defined in

[packages/lexical/src/LexicalNode.ts:973](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L973)

___

### getMode

▸ **getMode**(): [`TextModeType`](../modules/lexical.md#textmodetype)

Returns the mode (TextModeType) of the TextNode, which may be "normal", "token", or "segmented"

#### Returns

[`TextModeType`](../modules/lexical.md#textmodetype)

TextModeType.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:360](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L360)

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

[LexicalNode](lexical.LexicalNode.md).[getNextSiblings](lexical.LexicalNode.md#getnextsiblings)

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

[LexicalNode](lexical.LexicalNode.md).[getNodesBetween](lexical.LexicalNode.md#getnodesbetween)

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

[LexicalNode](lexical.LexicalNode.md).[getParent](lexical.LexicalNode.md#getparent)

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

[LexicalNode](lexical.LexicalNode.md).[getParentKeys](lexical.LexicalNode.md#getparentkeys)

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

[LexicalNode](lexical.LexicalNode.md).[getParentOrThrow](lexical.LexicalNode.md#getparentorthrow)

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

[LexicalNode](lexical.LexicalNode.md).[getParents](lexical.LexicalNode.md#getparents)

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

[LexicalNode](lexical.LexicalNode.md).[getPreviousSibling](lexical.LexicalNode.md#getprevioussibling)

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

[LexicalNode](lexical.LexicalNode.md).[getPreviousSiblings](lexical.LexicalNode.md#getprevioussiblings)

#### Defined in

[packages/lexical/src/LexicalNode.ts:771](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L771)

___

### getStyle

▸ **getStyle**(): `string`

Returns the styles currently applied to the node. This is analogous to CSSText in the DOM.

#### Returns

`string`

CSSText-like string of styles applied to the underlying DOM node.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:370](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L370)

___

### getTextContent

▸ **getTextContent**(): `string`

Returns the text content of the node as a string.

#### Returns

`string`

a string representing the text content of the node.

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getTextContent](lexical.LexicalNode.md#gettextcontent)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:453](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L453)

___

### getTextContentSize

▸ **getTextContentSize**(): `number`

Returns the length of the string produced by calling getTextContent on this node.

#### Returns

`number`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getTextContentSize](lexical.LexicalNode.md#gettextcontentsize)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1031](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1031)

___

### getTopLevelElement

▸ **getTopLevelElement**(): ``null`` \| [`ElementNode`](lexical.ElementNode.md)

Returns the highest (in the EditorState tree)
non-root ancestor of this node, or null if none is found. See [lexical!$isRootOrShadowRoot](../modules/lexical.md#$isrootorshadowroot)
for more information on which Elements comprise "roots".

#### Returns

``null`` \| [`ElementNode`](lexical.ElementNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getTopLevelElement](lexical.LexicalNode.md#gettoplevelelement)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:288](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L288)

___

### getTopLevelElementOrThrow

▸ **getTopLevelElementOrThrow**(): [`ElementNode`](lexical.ElementNode.md)

Returns the highest (in the EditorState tree)
non-root ancestor of this node, or throws if none is found. See [lexical!$isRootOrShadowRoot](../modules/lexical.md#$isrootorshadowroot)
for more information on which Elements comprise "roots".

#### Returns

[`ElementNode`](lexical.ElementNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getTopLevelElementOrThrow](lexical.LexicalNode.md#gettoplevelelementorthrow)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:289](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L289)

___

### getType

▸ **getType**(): `string`

Returns the string type of this node.

#### Returns

`string`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[getType](lexical.LexicalNode.md#gettype)

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

[LexicalNode](lexical.LexicalNode.md).[getWritable](lexical.LexicalNode.md#getwritable)

#### Defined in

[packages/lexical/src/LexicalNode.ts:990](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L990)

___

### hasFormat

▸ **hasFormat**(`type`): `boolean`

Returns whether or not the node has the provided format applied. Use this with the human-readable TextFormatType
string values to get the format of a TextNode.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`TextFormatType`](../modules/lexical.md#textformattype) | the TextFormatType to check for. |

#### Returns

`boolean`

true if the node has the provided format, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:433](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L433)

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

[LexicalNode](lexical.LexicalNode.md).[insertBefore](lexical.LexicalNode.md#insertbefore)

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

[LexicalNode](lexical.LexicalNode.md).[is](lexical.LexicalNode.md#is)

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

[LexicalNode](lexical.LexicalNode.md).[isAttached](lexical.LexicalNode.md#isattached)

#### Defined in

[packages/lexical/src/LexicalNode.ts:571](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L571)

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

[packages/lexical/src/LexicalNode.ts:857](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L857)

___

### isComposing

▸ **isComposing**(): `boolean`

#### Returns

`boolean`

true if Lexical detects that an IME or other 3rd-party script is attempting to
mutate the TextNode, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:391](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L391)

___

### isDirectionless

▸ **isDirectionless**(): `boolean`

Returns whether or not the node is "directionless". Directionless nodes don't respect changes between RTL and LTR modes.

#### Returns

`boolean`

true if the node is directionless, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:410](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L410)

___

### isDirty

▸ **isDirty**(): `boolean`

Returns true if this node has been marked dirty during this update cycle.

#### Returns

`boolean`

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isDirty](lexical.LexicalNode.md#isdirty)

#### Defined in

[packages/lexical/src/LexicalNode.ts:962](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L962)

___

### isInline

▸ **isInline**(): ``true``

#### Returns

``true``

true if the text node is inline, false otherwise.

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[isInline](lexical.LexicalNode.md#isinline)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:480](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L480)

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

[LexicalNode](lexical.LexicalNode.md).[isParentRequired](lexical.LexicalNode.md#isparentrequired)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1361](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1361)

___

### isSegmented

▸ **isSegmented**(): `boolean`

Returns whether or not the node is in "segmented" mode. TextNodes in segmented mode can be navigated through character-by-character
with a RangeSelection, but are deleted in space-delimited "segments".

#### Returns

`boolean`

true if the node is in segmented mode, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:401](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L401)

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

[packages/lexical/src/LexicalNode.ts:595](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L595)

___

### isSimpleText

▸ **isSimpleText**(): `boolean`

Returns whether or not the node is simple text. Simple text is defined as a TextNode that has the string type "text"
(i.e., not a subclass) and has no mode applied to it (i.e., not segmented or token).

#### Returns

`boolean`

true if the node is simple text, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:444](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L444)

___

### isTextEntity

▸ **isTextEntity**(): `boolean`

This method is meant to be overridden by TextNode subclasses to control the behavior of those nodes
when used with the registerLexicalTextEntity function. If you're using registerLexicalTextEntity, the
node class that you create and replace matched text with should return true from this method.

#### Returns

`boolean`

true if the node is to be treated as a "text entity", false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:1172](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L1172)

___

### isToken

▸ **isToken**(): `boolean`

Returns whether or not the node is in "token" mode. TextNodes in token mode can be navigated through character-by-character
with a RangeSelection, but are deleted as a single entity (not individually by character).

#### Returns

`boolean`

true if the node is in token mode, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:381](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L381)

___

### isUnmergeable

▸ **isUnmergeable**(): `boolean`

Returns whether or not the node is unmergeable. In some scenarios, Lexical tries to merge
adjacent TextNodes into a single TextNode. If a TextNode is unmergeable, this won't happen.

#### Returns

`boolean`

true if the node is unmergeable, false otherwise.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:420](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L420)

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

[packages/lexical/src/LexicalNode.ts:1430](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1430)

___

### mergeWithSibling

▸ **mergeWithSibling**(`target`): [`TextNode`](lexical.TextNode.md)

Merges the target TextNode into this TextNode, removing the target node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`TextNode`](lexical.TextNode.md) | the TextNode to merge into this one. |

#### Returns

[`TextNode`](lexical.TextNode.md)

this TextNode.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:1117](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L1117)

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

[LexicalNode](lexical.LexicalNode.md).[replace](lexical.LexicalNode.md#replace)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1184](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1184)

___

### select

▸ **select**(`_anchorOffset?`, `_focusOffset?`): [`RangeSelection`](lexical.RangeSelection.md)

Sets the current Lexical selection to be a RangeSelection with anchor and focus on this TextNode at the provided offsets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_anchorOffset?` | `number` | the offset at which the Selection anchor will be placed. |
| `_focusOffset?` | `number` | the offset at which the Selection focus will be placed. |

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

the new RangeSelection.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:827](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L827)

___

### selectEnd

▸ **selectEnd**(): [`RangeSelection`](lexical.RangeSelection.md)

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[selectEnd](lexical.LexicalNode.md#selectend)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:872](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L872)

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

[LexicalNode](lexical.LexicalNode.md).[selectPrevious](lexical.LexicalNode.md#selectprevious)

#### Defined in

[packages/lexical/src/LexicalNode.ts:1387](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1387)

___

### selectStart

▸ **selectStart**(): [`RangeSelection`](lexical.RangeSelection.md)

#### Returns

[`RangeSelection`](lexical.RangeSelection.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[selectStart](lexical.LexicalNode.md#selectstart)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:868](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L868)

___

### selectionTransform

▸ **selectionTransform**(`prevSelection`, `nextSelection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevSelection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |
| `nextSelection` | [`RangeSelection`](lexical.RangeSelection.md) |

#### Returns

`void`

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:695](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L695)

___

### setDetail

▸ **setDetail**(`detail`): `this`

Sets the node detail to the provided TextDetailType or 32-bit integer. Note that the TextDetailType
version of the argument can only specify one detail value and doing so will remove all other detail values that
may be applied to the node. For toggling behavior, consider using [TextNode.toggleDirectionless](lexical.TextNode.md#toggledirectionless)
or [TextNode.toggleUnmergeable](lexical.TextNode.md#toggleunmergeable)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `detail` | `number` \| `TextDetailType` | TextDetailType or 32-bit integer representing the node detail. |

#### Returns

`this`

this TextNode.
// TODO 0.12 This should just be a `string`.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:730](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L730)

___

### setFormat

▸ **setFormat**(`format`): `this`

Sets the node format to the provided TextFormatType or 32-bit integer. Note that the TextFormatType
version of the argument can only specify one format and doing so will remove all other formats that
may be applied to the node. For toggling behavior, consider using [TextNode.toggleFormat](lexical.TextNode.md#toggleformat)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `number` \| [`TextFormatType`](../modules/lexical.md#textformattype) | TextFormatType or 32-bit integer representing the node format. |

#### Returns

`this`

this TextNode.
// TODO 0.12 This should just be a `string`.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:712](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L712)

___

### setMode

▸ **setMode**(`type`): `this`

Sets the mode of the node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TextModeType`](../modules/lexical.md#textmodetype) |

#### Returns

`this`

this TextNode.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:793](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L793)

___

### setStyle

▸ **setStyle**(`style`): `this`

Sets the node style to the provided CSSText-like string. Set this property as you
would an HTMLElement style attribute to apply inline styles to the underlying DOM Element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `style` | `string` | CSSText to be applied to the underlying HTMLElement. |

#### Returns

`this`

this TextNode.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:745](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L745)

___

### setTextContent

▸ **setTextContent**(`text`): `this`

Sets the text content of the node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | the string to set as the text value of the node. |

#### Returns

`this`

this TextNode.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:810](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L810)

___

### spliceText

▸ **spliceText**(`offset`, `delCount`, `newText`, `moveSelection?`): [`TextNode`](lexical.TextNode.md)

Inserts the provided text into this TextNode at the provided offset, deleting the number of characters
specified. Can optionally calculate a new selection after the operation is complete.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | the offset at which the splice operation should begin. |
| `delCount` | `number` | the number of characters to delete, starting from the offset. |
| `newText` | `string` | the text to insert into the TextNode at the offset. |
| `moveSelection?` | `boolean` | optional, whether or not to move selection to the end of the inserted substring. |

#### Returns

[`TextNode`](lexical.TextNode.md)

this TextNode.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:888](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L888)

___

### splitText

▸ **splitText**(`...splitOffsets`): [`TextNode`](lexical.TextNode.md)[]

Splits this TextNode at the provided character offsets, forming new TextNodes from the substrings
formed by the split, and inserting those new TextNodes into the editor, replacing the one that was split.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...splitOffsets` | `number`[] | rest param of the text content character offsets at which this node should be split. |

#### Returns

[`TextNode`](lexical.TextNode.md)[]

an Array containing the newly-created TextNodes.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:952](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L952)

___

### toggleDirectionless

▸ **toggleDirectionless**(): `this`

Toggles the directionless detail value of the node. Prefer using this method over setDetail.

#### Returns

`this`

this TextNode.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:771](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L771)

___

### toggleFormat

▸ **toggleFormat**(`type`): `this`

Applies the provided format to this TextNode if it's not present. Removes it if it's present.
The subscript and superscript formats are mutually exclusive.
Prefer using this method to turn specific formats on and off.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`TextFormatType`](../modules/lexical.md#textformattype) | TextFormatType to toggle. |

#### Returns

`this`

this TextNode.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:760](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L760)

___

### toggleUnmergeable

▸ **toggleUnmergeable**(): `this`

Toggles the unmergeable detail value of the node. Prefer using this method over setDetail.

#### Returns

`this`

this TextNode.

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:782](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L782)

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

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[updateDOM](lexical.LexicalNode.md#updatedom)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:509](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L509)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedTextNode`](../modules/lexical.md#serializedtextnode)\> |

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

[packages/lexical/src/nodes/LexicalTextNode.ts:629](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L629)

___

### clone

▸ **clone**(`node`): [`TextNode`](lexical.TextNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TextNode`](lexical.TextNode.md) |

#### Returns

[`TextNode`](lexical.TextNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[clone](lexical.LexicalNode.md#clone)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:310](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L310)

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

[packages/lexical/src/nodes/LexicalTextNode.ts:306](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L306)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:572](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L572)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`TextNode`](lexical.TextNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedTextNode`](../modules/lexical.md#serializedtextnode) |

#### Returns

[`TextNode`](lexical.TextNode.md)

#### Inherited from

[LexicalNode](lexical.LexicalNode.md).[importJSON](lexical.LexicalNode.md#importjson)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:625](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L625)

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

[packages/lexical/src/LexicalNode.ts:1159](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L1159)
