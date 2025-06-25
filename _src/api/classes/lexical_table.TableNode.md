---
id: "lexical_table.TableNode"
title: "Class: TableNode"
custom_edit_url: null
---

[@lexical/table](../modules/lexical_table.md).TableNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`TableNode`**

## Constructors

### constructor

• **new TableNode**(`key?`): [`TableNode`](lexical_table.TableNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

[`TableNode`](lexical_table.TableNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[constructor](lexical.ElementNode.md#constructor)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:232](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L232)

## Properties

### \_\_colWidths

• `Optional` **\_\_colWidths**: readonly `number`[]

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:179](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L179)

___

### \_\_frozenColumnCount

• **\_\_frozenColumnCount**: `number`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:177](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L177)

___

### \_\_frozenRowCount

• **\_\_frozenRowCount**: `number`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:178](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L178)

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

[packages/lexical-table/src/LexicalTableNode.ts:202](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L202)

___

### canBeEmpty

▸ **canBeEmpty**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canBeEmpty](lexical.ElementNode.md#canbeempty)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:434](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L434)

___

### canIndent

▸ **canIndent**(): ``false``

#### Returns

``false``

#### Overrides

[ElementNode](lexical.ElementNode.md).[canIndent](lexical.ElementNode.md#canindent)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:577](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L577)

___

### canSelectBefore

▸ **canSelectBefore**(): ``true``

#### Returns

``true``

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:573](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L573)

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

#### Overrides

[ElementNode](lexical.ElementNode.md).[createDOM](lexical.ElementNode.md#createdom)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:273](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L273)

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

[packages/lexical-table/src/LexicalTableNode.ts:352](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L352)

___

### exportJSON

▸ **exportJSON**(): [`SerializedTableNode`](../modules/lexical_table.md#serializedtablenode)

Controls how the this node is serialized to JSON. This is important for
copy and paste between Lexical editors sharing the same namespace. It's also important
if you're serializing to JSON for persistent storage somewhere.
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Returns

[`SerializedTableNode`](../modules/lexical_table.md#serializedtablenode)

#### Overrides

[ElementNode](lexical.ElementNode.md).[exportJSON](lexical.ElementNode.md#exportjson)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:239](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L239)

___

### extractWithChild

▸ **extractWithChild**(`child`, `selection`, `destination`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`LexicalNode`](lexical.LexicalNode.md) |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |
| `destination` | ``"clone"`` \| ``"html"`` |

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[extractWithChild](lexical.ElementNode.md#extractwithchild)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:251](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L251)

___

### getCellNodeFromCords

▸ **getCellNodeFromCords**(`x`, `y`, `table`): ``null`` \| [`TableCellNode`](lexical_table.TableCellNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `table` | `TableDOMTable` |

#### Returns

``null`` \| [`TableCellNode`](lexical_table.TableCellNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:509](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L509)

___

### getCellNodeFromCordsOrThrow

▸ **getCellNodeFromCordsOrThrow**(`x`, `y`, `table`): [`TableCellNode`](lexical_table.TableCellNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `table` | `TableDOMTable` |

#### Returns

[`TableCellNode`](lexical_table.TableCellNode.md)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:529](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L529)

___

### getColWidths

▸ **getColWidths**(): `undefined` \| readonly `number`[]

#### Returns

`undefined` \| readonly `number`[]

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:185](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L185)

___

### getColumnCount

▸ **getColumnCount**(): `number`

#### Returns

`number`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:581](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L581)

___

### getCordsFromCellNode

▸ **getCordsFromCellNode**(`tableCellNode`, `table`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableCellNode` | [`TableCellNode`](lexical_table.TableCellNode.md) |
| `table` | `TableDOMTable` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:442](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L442)

___

### getDOMCellFromCords

▸ **getDOMCellFromCords**(`x`, `y`, `table`): ``null`` \| [`TableDOMCell`](../modules/lexical_table.md#tabledomcell)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `table` | `TableDOMTable` |

#### Returns

``null`` \| [`TableDOMCell`](../modules/lexical_table.md#tabledomcell)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:471](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L471)

___

### getDOMCellFromCordsOrThrow

▸ **getDOMCellFromCordsOrThrow**(`x`, `y`, `table`): [`TableDOMCell`](../modules/lexical_table.md#tabledomcell)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `table` | `TableDOMTable` |

#### Returns

[`TableDOMCell`](../modules/lexical_table.md#tabledomcell)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:495](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L495)

___

### getDOMSlot

▸ **getDOMSlot**(`element`): [`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`HTMLTableElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

[`ElementDOMSlot`](lexical.ElementDOMSlot.md)\<`HTMLTableElement`\>

#### Overrides

ElementNode.getDOMSlot

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:259](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L259)

___

### getFrozenColumns

▸ **getFrozenColumns**(): `number`

#### Returns

`number`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:559](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L559)

___

### getFrozenRows

▸ **getFrozenRows**(): `number`

#### Returns

`number`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:569](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L569)

___

### getRowStriping

▸ **getRowStriping**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:543](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L543)

___

### isShadowRoot

▸ **isShadowRoot**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[isShadowRoot](lexical.ElementNode.md#isshadowroot)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:438](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L438)

___

### setColWidths

▸ **setColWidths**(`colWidths`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colWidths` | `undefined` \| readonly `number`[] |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:190](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L190)

___

### setFrozenColumns

▸ **setFrozenColumns**(`columnCount`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `columnCount` | `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:553](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L553)

___

### setFrozenRows

▸ **setFrozenRows**(`rowCount`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rowCount` | `number` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:563](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L563)

___

### setRowStriping

▸ **setRowStriping**(`newRowStriping`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newRowStriping` | `boolean` |

#### Returns

`this`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:547](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L547)

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

[packages/lexical-table/src/LexicalTableNode.ts:339](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L339)

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
| `serializedNode` | [`LexicalUpdateJSON`](../modules/lexical.md#lexicalupdatejson)\<[`SerializedTableNode`](../modules/lexical_table.md#serializedtablenode)\> |

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

[packages/lexical-table/src/LexicalTableNode.ts:223](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L223)

___

### updateTableElement

▸ **updateTableElement**(`prevNode`, `tableElement`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevNode` | ``null`` \| [`TableNode`](lexical_table.TableNode.md) |
| `tableElement` | `HTMLTableElement` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:319](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L319)

___

### updateTableWrapper

▸ **updateTableWrapper**(`prevNode`, `tableWrapper`, `tableElement`, `config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevNode` | ``null`` \| [`TableNode`](lexical_table.TableNode.md) |
| `tableWrapper` | `HTMLDivElement` |
| `tableElement` | `HTMLTableElement` |
| `config` | [`EditorConfig`](../modules/lexical.md#editorconfig) |

#### Returns

`void`

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:298](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L298)

___

### clone

▸ **clone**(`node`): [`TableNode`](lexical_table.TableNode.md)

Clones this node, creating a new node with a different key
and adding it to the EditorState (but not attaching it anywhere!). All nodes must
implement this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TableNode`](lexical_table.TableNode.md) |

#### Returns

[`TableNode`](lexical_table.TableNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[clone](lexical.ElementNode.md#clone)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:198](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L198)

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

[packages/lexical-table/src/LexicalTableNode.ts:181](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L181)

___

### importDOM

▸ **importDOM**(): ``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Returns

``null`` \| [`DOMConversionMap`](../modules/lexical.md#domconversionmap)

#### Overrides

ElementNode.importDOM

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:210](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L210)

___

### importJSON

▸ **importJSON**(`serializedNode`): [`TableNode`](lexical_table.TableNode.md)

Controls how the this node is deserialized from JSON. This is usually boilerplate,
but provides an abstraction between the node implementation and serialized interface that can
be important if you ever make breaking changes to a node schema (by adding or removing properties).
See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedTableNode`](../modules/lexical_table.md#serializedtablenode) |

#### Returns

[`TableNode`](lexical_table.TableNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[importJSON](lexical.ElementNode.md#importjson)

#### Defined in

[packages/lexical-table/src/LexicalTableNode.ts:219](https://github.com/QubitPi/lexical/tree/main/packages/lexical-table/src/LexicalTableNode.ts#L219)
