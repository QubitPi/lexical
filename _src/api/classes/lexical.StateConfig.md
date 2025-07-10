---
id: "lexical.StateConfig"
title: "Class: StateConfig<K, V>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).StateConfig

The return value of [createState](../modules/lexical.md#createstate), for use with
[$getState](../modules/lexical.md#$getstate) and [$setState](../modules/lexical.md#$setstate).

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

## Constructors

### constructor

• **new StateConfig**\<`K`, `V`\>(`key`, `stateValueConfig`): [`StateConfig`](lexical.StateConfig.md)\<`K`, `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `stateValueConfig` | [`StateValueConfig`](../interfaces/lexical.StateValueConfig.md)\<`V`\> |

#### Returns

[`StateConfig`](lexical.StateConfig.md)\<`K`, `V`\>

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:263](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L263)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `V`

The result of `stateValueConfig.parse(undefined)`, which is computed only
once and used as the default value. When the current value `isEqual` to
the `defaultValue`, it will not be serialized to JSON.

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:262](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L262)

___

### isEqual

• `Readonly` **isEqual**: (`a`: `V`, `b`: `V`) => `boolean`

An equality function from the StateValueConfig, with a default of
Object.is.

#### Type declaration

▸ (`a`, `b`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `V` |
| `b` | `V` |

##### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:256](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L256)

___

### key

• `Readonly` **key**: `K`

The string key used when serializing this state to JSON

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:243](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L243)

___

### parse

• `Readonly` **parse**: (`value?`: `unknown`) => `V`

The parse function from the StateValueConfig passed to createState

#### Type declaration

▸ (`value?`): `V`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `unknown` |

##### Returns

`V`

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:245](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L245)

___

### unparse

• `Readonly` **unparse**: (`value`: `V`) => `unknown`

The unparse function from the StateValueConfig passed to createState,
with a default that is simply a pass-through that assumes the value is
JSON serializable.

#### Type declaration

▸ (`value`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

`unknown`

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:251](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L251)
