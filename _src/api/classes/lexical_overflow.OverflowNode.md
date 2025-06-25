---
id: "lexical_overflow.OverflowNode"
title: "Class: OverflowNode"
custom_edit_url: null
---

[@lexical/overflow](../modules/lexical_overflow.md).OverflowNode

## Hierarchy

- [`ElementNode`](lexical.ElementNode.md)

  ↳ **`OverflowNode`**

## Methods

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

[packages/lexical-overflow/src/index.ts:34](https://github.com/QubitPi/lexical/tree/main/packages/lexical-overflow/src/index.ts#L34)

___

### excludeFromCopy

▸ **excludeFromCopy**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[excludeFromCopy](lexical.ElementNode.md#excludefromcopy)

#### Defined in

[packages/lexical-overflow/src/index.ts:55](https://github.com/QubitPi/lexical/tree/main/packages/lexical-overflow/src/index.ts#L55)

___

### insertNewAfter

▸ **insertNewAfter**(`selection`, `restoreSelection?`): ``null`` \| [`LexicalNode`](lexical.LexicalNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selection` | [`RangeSelection`](lexical.RangeSelection.md) | `undefined` |
| `restoreSelection` | `boolean` | `true` |

#### Returns

``null`` \| [`LexicalNode`](lexical.LexicalNode.md)

#### Overrides

[ElementNode](lexical.ElementNode.md).[insertNewAfter](lexical.ElementNode.md#insertnewafter)

#### Defined in

[packages/lexical-overflow/src/index.ts:47](https://github.com/QubitPi/lexical/tree/main/packages/lexical-overflow/src/index.ts#L47)

___

### updateDOM

▸ **updateDOM**(`prevNode`, `dom`): `boolean`

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

#### Returns

`boolean`

#### Overrides

[ElementNode](lexical.ElementNode.md).[updateDOM](lexical.ElementNode.md#updatedom)

#### Defined in

[packages/lexical-overflow/src/index.ts:43](https://github.com/QubitPi/lexical/tree/main/packages/lexical-overflow/src/index.ts#L43)
