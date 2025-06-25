---
id: "lexical_table.TableCellNode"
title: "Class: TableCellNode"
custom_edit_url: null
---

[@lexical/table](../modules/lexical_table.md).TableCellNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`TableCellNode`**

## Constructors

### constructor

• **new TableCellNode**(`headerState?`, `colSpan?`, `width?`, `key?`): [`TableCellNode`](lexical_table.TableCellNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `headerState` | `number` | `TableCellHeaderStates.NO_STATUS` |
| `colSpan` | `number` | `1` |
| `width?` | `number` | `undefined` |
| `key?` | `string` | `undefined` |

#### Returns

[`TableCellNode`](lexical_table.TableCellNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:123](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L123)

## Methods

### afterCloneFrom

▸ **afterCloneFrom**(`node`): `void`

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
| `node` | `this` |

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

[packages/lexical-table/src/LexicalTableCellNode.ts:86](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L86)

___

### canBeEmpty

▸ **canBeEmpty**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canBeEmpty](lexical.ElementNode.md#canbeempty)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:314](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L314)

___

### canIndent

▸ **canIndent**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canIndent](lexical.ElementNode.md#canindent)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:318](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L318)

___

### collapseAtStart

▸ **collapseAtStart**(): ``true``

#### Returns

``true``

#### Overrides

[ElementNode](lexical.ElementNode.md).[collapseAtStart](lexical.ElementNode.md#collapseatstart)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:310](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L310)

___

### createDOM

▸ **createDOM**(`config`): `HTMLTableCellElement`

Called during the reconciliation process to determine which nodes
to insert into the DOM for this Lexical Node.

This method must return exactly one HTMLElement. Nested elements are not supported.

Do not attempt to update the Lexical EditorState during this phase of the update lifecycle.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) | allows access to things like the EditorTheme (to apply classes) during reconciliation. |

#### Returns

`HTMLTableCellElement`

#### Overrides

[ElementNode](lexical.ElementNode.md).[createDOM](lexical.ElementNode.md#createdom)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:138](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L138)

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

[packages/lexical-table/src/LexicalTableCellNode.ts:166](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L166)

___

### exportJSON

▸ **exportJSON**(): [`SerializedTableCellNode`](../modules/lexical_table.md#serializedtablecellnode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedTableCellNode`](../modules/lexical_table.md#serializedtablecellnode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:194](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L194)

___

### getBackgroundColor

▸ **getBackgroundColor**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:255](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L255)

___

### getColSpan

▸ **getColSpan**(): `number`

#### Returns

`number`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:208](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L208)

___

### getHeaderStyles

▸ **getHeaderStyles**(): `number`

#### Returns

`number`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:241](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L241)

___

### getRowSpan

▸ **getRowSpan**(): `number`

#### Returns

`number`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:218](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L218)

___

### getTag

▸ **getTag**(): ``"td"`` \| ``"th"``

#### Returns

``"td"`` \| ``"th"``

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:228](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L228)

___

### getVerticalAlign

▸ **getVerticalAlign**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:265](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L265)

___

### getWidth

▸ **getWidth**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:251](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L251)

___

### hasHeader

▸ **hasHeader**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:291](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L291)

___

### hasHeaderState

▸ **hasHeaderState**(`headerState`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerState` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:287](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L287)

___

### isShadowRoot

▸ **isShadowRoot**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[isShadowRoot](lexical.ElementNode.md#isshadowroot)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:306](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L306)

___

### setBackgroundColor

▸ **setBackgroundColor**(`newBackgroundColor`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newBackgroundColor` | ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:259](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L259)

___

### setColSpan

▸ **setColSpan**(`colSpan`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colSpan` | `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:212](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L212)

___

### setHeaderStyles

▸ **setHeaderStyles**(`headerState`, `mask?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `headerState` | `number` | `undefined` |
| `mask` | `number` | `TableCellHeaderStates.BOTH` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:232](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L232)

___

### setRowSpan

▸ **setRowSpan**(`rowSpan`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowSpan` | `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:222](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L222)

___

### setVerticalAlign

▸ **setVerticalAlign**(`newVerticalAlign`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newVerticalAlign` | `undefined` \| ``null`` \| `string` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:269](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L269)

___

### setWidth

▸ **setWidth**(`width`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `undefined` \| `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:245](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L245)

___

### toggleHeaderStyle

▸ **toggleHeaderStyle**(`headerStateToToggle`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headerStateToToggle` | `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:275](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L275)

___

### updateDOM

▸ **updateDOM**(`prevNode`): `boolean`

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

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:295](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L295)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedTableCellNode`](../modules/lexical_table.md#serializedtablecellnode)\> |

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

[packages/lexical-table/src/LexicalTableCellNode.ts:110](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L110)

___

### clone

▸ **clone**(`node`): [`TableCellNode`](lexical_table.TableCellNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TableCellNode`](lexical_table.TableCellNode.md) |

#### Returns

[`TableCellNode`](lexical_table.TableCellNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[clone](lexical.ElementNode.md#clone)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:77](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L77)

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

[packages/lexical-table/src/LexicalTableCellNode.ts:73](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L73)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

ElementNode.importDOM

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:93](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L93)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`TableCellNode`](lexical_table.TableCellNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedTableCellNode`](../modules/lexical_table.md#serializedtablecellnode) |

#### Returns

[`TableCellNode`](lexical_table.TableCellNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[importJSON](lexical.ElementNode.md#importjson)

#### Defined in

[packages/lexical-table/src/LexicalTableCellNode.ts:106](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableCellNode.ts#L106)
