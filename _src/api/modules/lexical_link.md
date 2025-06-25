---
id: "lexical_link"
title: "Module: @lexical/link"
custom_edit_url: null
---

## Classes

- [AutoLinkNode](../classes/lexical_link.AutoLinkNode.md)
- [LinkNode](../classes/lexical_link.LinkNode.md)

## Type Aliases

### AutoLinkAttributes

Ƭ **AutoLinkAttributes**: `Partial`\<[`Spread`](lexical.md#spread)\<[`LinkAttributes`](lexical_link.md#linkattributes), \{ `isUnlinked?`: `boolean`  }\>\>

#### Defined in

[packages/lexical-link/src/index.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L48)

___

### LinkAttributes

Ƭ **LinkAttributes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `rel?` | ``null`` \| `string` |
| `target?` | ``null`` \| `string` |
| `title?` | ``null`` \| `string` |

#### Defined in

[packages/lexical-link/src/index.ts:42](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L42)

___

### SerializedAutoLinkNode

Ƭ **SerializedAutoLinkNode**: [`Spread`](lexical.md#spread)\<\{ `isUnlinked`: `boolean`  }, [`SerializedLinkNode`](lexical_link.md#serializedlinknode)\>

#### Defined in

[packages/lexical-link/src/index.ts:328](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L328)

___

### SerializedLinkNode

Ƭ **SerializedLinkNode**: [`Spread`](lexical.md#spread)\<\{ `url`: `string`  }, [`Spread`](lexical.md#spread)\<[`LinkAttributes`](lexical_link.md#linkattributes), [`SerializedElementNode`](lexical.md#serializedelementnode)\>\>

#### Defined in

[packages/lexical-link/src/index.ts:52](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L52)

## Variables

### TOGGLE\_LINK\_COMMAND

• `Const` **TOGGLE\_LINK\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`string` \| \{ `url`: `string`  } & [`LinkAttributes`](lexical_link.md#linkattributes) \| ``null``\>

#### Defined in

[packages/lexical-link/src/index.ts:471](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L471)

## Functions

### $createAutoLinkNode

▸ **$createAutoLinkNode**(`url?`, `attributes?`): [`AutoLinkNode`](../classes/lexical_link.AutoLinkNode.md)

Takes a URL and creates an AutoLinkNode. AutoLinkNodes are generally automatically generated
during typing, which is especially useful when a button to generate a LinkNode is not practical.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `''` | The URL the LinkNode should direct to. |
| `attributes?` | `Partial`\<[`Spread`](lexical.md#spread)\<[`LinkAttributes`](lexical_link.md#linkattributes), \{ `isUnlinked?`: `boolean`  }\>\> | `undefined` | Optional HTML a tag attributes. \{ target, rel, title \} |

#### Returns

[`AutoLinkNode`](../classes/lexical_link.AutoLinkNode.md)

The LinkNode.

#### Defined in

[packages/lexical-link/src/index.ts:453](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L453)

___

### $createLinkNode

▸ **$createLinkNode**(`url?`, `attributes?`): [`LinkNode`](../classes/lexical_link.LinkNode.md)

Takes a URL and creates a LinkNode.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `''` | The URL the LinkNode should direct to. |
| `attributes?` | [`LinkAttributes`](lexical_link.md#linkattributes) | `undefined` | Optional HTML a tag attributes \{ target, rel, title \} |

#### Returns

[`LinkNode`](../classes/lexical_link.LinkNode.md)

The LinkNode.

#### Defined in

[packages/lexical-link/src/index.ts:310](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L310)

___

### $isAutoLinkNode

▸ **$isAutoLinkNode**(`node`): node is AutoLinkNode

Determines if node is an AutoLinkNode.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to be checked. |

#### Returns

node is AutoLinkNode

true if node is an AutoLinkNode, false otherwise.

#### Defined in

[packages/lexical-link/src/index.ts:465](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L465)

___

### $isLinkNode

▸ **$isLinkNode**(`node`): node is LinkNode

Determines if node is a LinkNode.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) | The node to be checked. |

#### Returns

node is LinkNode

true if node is a LinkNode, false otherwise.

#### Defined in

[packages/lexical-link/src/index.ts:322](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L322)

___

### $toggleLink

▸ **$toggleLink**(`url`, `attributes?`): `void`

Generates or updates a LinkNode. It can also delete a LinkNode if the URL is null,
but saves any children and brings them up to the parent node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | ``null`` \| `string` | The URL the link directs to. |
| `attributes` | [`LinkAttributes`](lexical_link.md#linkattributes) | Optional HTML a tag attributes. \{ target, rel, title \} |

#### Returns

`void`

#### Defined in

[packages/lexical-link/src/index.ts:541](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L541)

___

### formatUrl

▸ **formatUrl**(`url`): `string`

Formats a URL string by adding appropriate protocol if missing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL to format |

#### Returns

`string`

Formatted URL with appropriate protocol

#### Defined in

[packages/lexical-link/src/index.ts:723](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L723)

___

### toggleLink

▸ **toggleLink**(`url`, `attributes?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | ``null`` \| `string` |
| `attributes` | [`LinkAttributes`](lexical_link.md#linkattributes) |

#### Returns

`void`

**`Deprecated`**

renamed to [$toggleLink](lexical_link.md#$togglelink) by @lexical/eslint-plugin rules-of-lexical

#### Defined in

[packages/lexical-link/src/index.ts:702](https://github.com/QubitPi/lexical/tree/main/packages/lexical-link/src/index.ts#L702)
