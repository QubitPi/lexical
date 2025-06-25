---
id: "lexical_react_LexicalNodeContextMenuPlugin.NodeContextMenuOption"
title: "Class: NodeContextMenuOption"
custom_edit_url: null
---

[@lexical/react/LexicalNodeContextMenuPlugin](../modules/lexical_react_LexicalNodeContextMenuPlugin.md).NodeContextMenuOption

## Hierarchy

- `MenuOption`

  ↳ **`NodeContextMenuOption`**

## Constructors

### constructor

• **new NodeContextMenuOption**(`title`, `options`): [`NodeContextMenuOption`](lexical_react_LexicalNodeContextMenuPlugin.NodeContextMenuOption.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `options` | `Object` |
| `options.$onSelect` | () => `void` |
| `options.$showOn?` | (`node`: [`LexicalNode`](lexical.LexicalNode.md)) => `boolean` |
| `options.disabled?` | `boolean` |

#### Returns

[`NodeContextMenuOption`](lexical_react_LexicalNodeContextMenuPlugin.NodeContextMenuOption.md)

#### Overrides

MenuOption.constructor

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:50](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L50)

## Properties

### $onSelect

• **$onSelect**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:47](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L47)

___

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

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L48)

___

### disabled

• **disabled**: `boolean`

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:46](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L46)

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

### title

• **title**: `string`

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:45](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L45)

___

### type

• **type**: `string`

#### Defined in

[packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx:44](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalNodeContextMenuPlugin.tsx#L44)

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
