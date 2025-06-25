---
id: "lexical_react_LexicalNodeContextMenuPlugin.NodeContextMenuSeparator"
title: "Class: NodeContextMenuSeparator"
custom_edit_url: null
---

[@lexical/react/LexicalNodeContextMenuPlugin](../modules/lexical_react_LexicalNodeContextMenuPlugin.md).NodeContextMenuSeparator

## Hierarchy

- `MenuOption`

  ↳ **`NodeContextMenuSeparator`**

## Constructors

### constructor

• **new NodeContextMenuSeparator**(`options?`): [`NodeContextMenuSeparator`](lexical_react_LexicalNodeContextMenuPlugin.NodeContextMenuSeparator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.$showOn?` | (`node`: [`LexicalNode`](lexical.LexicalNode.md)) => `boolean` |

#### Returns

[`NodeContextMenuSeparator`](lexical_react_LexicalNodeContextMenuPlugin.NodeContextMenuSeparator.md)

#### Overrides

MenuOption.constructor

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:73](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L73)

## Properties

### $showOn

• `Optional` **$showOn**: (`node`: [`LexicalNode`](lexical.LexicalNode.md)) => `boolean`

#### Type declaration

▸ (`node`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LexicalNode`](lexical.LexicalNode.md) |

##### Returns

`boolean`

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:71](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L71)

___

### key

• **key**: `string`

#### Inherited from

MenuOption.key

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:29](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L29)

___

### ref

• `Optional` **ref**: `MutableRefObject`\<``null`` \| `HTMLElement`\>

#### Inherited from

MenuOption.ref

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:30](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L30)

___

### type

• **type**: `string`

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:70](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L70)

## Methods

### setRefElement

▸ **setRefElement**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| `HTMLElement` |

#### Returns

`void`

#### Inherited from

MenuOption.setRefElement

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:38](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L38)
