---
id: "lexical.StepwiseIteratorConfig"
title: "Interface: StepwiseIteratorConfig<State, Stop, Value>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).StepwiseIteratorConfig

## Type parameters

| Name |
| :------ |
| `State` |
| `Stop` |
| `Value` |

## Properties

### hasNext

• `Readonly` **hasNext**: (`value`: `State` \| `Stop`) => value is State

#### Type declaration

▸ (`value`): value is State

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `State` \| `Stop` |

##### Returns

value is State

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:127](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L127)

___

### initial

• `Readonly` **initial**: `State` \| `Stop`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:126](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L126)

___

### map

• `Readonly` **map**: (`value`: `State`) => `Value`

#### Type declaration

▸ (`value`): `Value`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `State` |

##### Returns

`Value`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:129](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L129)

___

### step

• `Readonly` **step**: (`value`: `State`) => `State` \| `Stop`

#### Type declaration

▸ (`value`): `State` \| `Stop`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `State` |

##### Returns

`State` \| `Stop`

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:128](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L128)
