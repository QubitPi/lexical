---
id: "lexical_utils.StateConfigWrapper"
title: "Interface: StateConfigWrapper<K, V>"
custom_edit_url: null
---

[@lexical/utils](../modules/lexical_utils.md).StateConfigWrapper

A wrapper that creates bound functions and methods for the
StateConfig to save some boilerplate when defining methods
or exporting only the accessors from your modules rather
than exposing the StateConfig directly.

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

## Properties

### $get

• `Readonly` **$get**: \<T\>(`node`: `T`) => `V`

`(node) => $getState(node, stateConfig)`

#### Type declaration

▸ \<`T`\>(`node`): `V`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

##### Returns

`V`

#### Defined in

[packages/lexical-utils/src/index.ts:914](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L914)

___

### $set

• `Readonly` **$set**: \<T\>(`node`: `T`, `valueOrUpdater`: [`ValueOrUpdater`](../modules/lexical.md#valueorupdater)\<`V`\>) => `T`

`(node, valueOrUpdater) => $setState(node, stateConfig, valueOrUpdater)`

#### Type declaration

▸ \<`T`\>(`node`, `valueOrUpdater`): `T`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `valueOrUpdater` | [`ValueOrUpdater`](../modules/lexical.md#valueorupdater)\<`V`\> |

##### Returns

`T`

#### Defined in

[packages/lexical-utils/src/index.ts:916](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L916)

___

### accessors

• `Readonly` **accessors**: readonly [\<T\>(`node`: `T`) => `V`, \<T\>(`node`: `T`, `valueOrUpdater`: [`ValueOrUpdater`](../modules/lexical.md#valueorupdater)\<`V`\>) => `T`]

`[$get, $set]`

#### Defined in

[packages/lexical-utils/src/index.ts:921](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L921)

___

### stateConfig

• `Readonly` **stateConfig**: [`StateConfig`](../classes/lexical.StateConfig.md)\<`K`, `V`\>

A reference to the stateConfig

#### Defined in

[packages/lexical-utils/src/index.ts:912](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L912)

## Methods

### makeGetterMethod

▸ **makeGetterMethod**\<`T`\>(): (`this`: `T`) => `V`

`() => function () { return $get(this) }`

Should be called with an explicit `this` type parameter.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

`fn`

▸ (`this`): `V`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

##### Returns

`V`

**`Example`**

```ts
class MyNode {
  // …
  myGetter = myWrapper.makeGetterMethod<this>();
}
```

#### Defined in

[packages/lexical-utils/src/index.ts:935](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L935)

___

### makeSetterMethod

▸ **makeSetterMethod**\<`T`\>(): (`this`: `T`, `valueOrUpdater`: [`ValueOrUpdater`](../modules/lexical.md#valueorupdater)\<`V`\>) => `T`

`() => function (valueOrUpdater) { return $set(this, valueOrUpdater) }`

Must be called with an explicit `this` type parameter.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

`fn`

▸ (`this`, `valueOrUpdater`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `valueOrUpdater` | [`ValueOrUpdater`](../modules/lexical.md#valueorupdater)\<`V`\> |

##### Returns

`T`

**`Example`**

```ts
class MyNode {
  // …
  mySetter = myWrapper.makeSetterMethod<this>();
}
```

#### Defined in

[packages/lexical-utils/src/index.ts:949](https://github.com/QubitPi/lexical/tree/main/packages/lexical-utils/src/index.ts#L949)
