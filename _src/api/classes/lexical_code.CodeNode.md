---
id: "lexical_code.CodeNode"
title: "Class: CodeNode"
custom_edit_url: null
---

[@lexical/code](../modules/lexical_code.md).CodeNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`CodeNode`**

## Constructors

### constructor

• **new CodeNode**(`language?`, `key?`): [`CodeNode`](lexical_code.CodeNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `language?` | ``null`` \| `string` |
| `key?` | `string` |

#### Returns

[`CodeNode`](lexical_code.CodeNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:85](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L85)

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

[packages/lexical-code/src/CodeNode.ts:92](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L92)

___

### canIndent

▸ **canIndent**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canIndent](lexical.ElementNode.md#canindent)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:366](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L366)

___

### collapseAtStart

▸ **collapseAtStart**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[collapseAtStart](lexical.ElementNode.md#collapseatstart)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:370](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L370)

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

[packages/lexical-code/src/CodeNode.ts:100](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L100)

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

[packages/lexical-code/src/CodeNode.ts:175](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L175)

___

### exportJSON

▸ **exportJSON**(): [`SerializedCodeNode`](../modules/lexical_code.md#serializedcodenode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedCodeNode`](../modules/lexical_code.md#serializedcodenode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:278](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L278)

___

### getIsSyntaxHighlightSupported

▸ **getIsSyntaxHighlightSupported**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical-code/src/CodeNode.ts:394](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L394)

___

### getLanguage

▸ **getLanguage**(): `undefined` \| ``null`` \| `string`

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[packages/lexical-code/src/CodeNode.ts:384](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L384)

___

### getTheme

▸ **getTheme**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/lexical-code/src/CodeNode.ts:404](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L404)

___

### insertNewAfter

▸ **insertNewAfter**(`selection`, `restoreSelection?`): ``null`` \| [`TabNode`](lexical.TabNode.md) \| [`ParagraphNode`](lexical.ParagraphNode.md) \| [`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selection` | [`RangeSelection`](lexical.RangeSelection.md) | `undefined` |
| `restoreSelection` | `boolean` | `true` |

#### Returns

``null`` \| [`TabNode`](lexical.TabNode.md) \| [`ParagraphNode`](lexical.ParagraphNode.md) \| [`CodeHighlightNode`](lexical_code.CodeHighlightNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[insertNewAfter](lexical.ElementNode.md#insertnewafter)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:287](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L287)

___

### setIsSyntaxHighlightSupported

▸ **setIsSyntaxHighlightSupported**(`isSupported`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isSupported` | `boolean` |

#### Returns

`this`

#### Defined in

[packages/lexical-code/src/CodeNode.ts:388](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L388)

___

### setLanguage

▸ **setLanguage**(`language`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `undefined` \| ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-code/src/CodeNode.ts:378](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L378)

___

### setTheme

▸ **setTheme**(`theme`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `undefined` \| ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-code/src/CodeNode.ts:398](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L398)

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

[packages/lexical-code/src/CodeNode.ts:123](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L123)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedCodeNode`](../modules/lexical_code.md#serializedcodenode)\> |

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

[packages/lexical-code/src/CodeNode.ts:271](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L271)

___

### clone

▸ **clone**(`node`): [`CodeNode`](lexical_code.CodeNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`CodeNode`](lexical_code.CodeNode.md) |

#### Returns

[`CodeNode`](lexical_code.CodeNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[clone](lexical.ElementNode.md#clone)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:81](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L81)

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

[packages/lexical-code/src/CodeNode.ts:77](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L77)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

ElementNode.importDOM

#### Defined in

[packages/lexical-code/src/CodeNode.ts:200](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L200)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`CodeNode`](lexical_code.CodeNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedCodeNode`](../modules/lexical_code.md#serializedcodenode) |

#### Returns

[`CodeNode`](lexical_code.CodeNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[importJSON](lexical.ElementNode.md#importjson)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:267](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L267)
