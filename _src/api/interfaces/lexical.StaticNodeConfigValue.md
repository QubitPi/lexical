---
id: "lexical.StaticNodeConfigValue"
title: "Interface: StaticNodeConfigValue<T, Type>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).StaticNodeConfigValue

EXPERIMENTAL
The configuration of a node returned by LexicalNode.$config()

**`Example`**

```ts
class CustomText extends TextNode {
  $config() {
    return this.config('custom-text', {extends: TextNode}};
  }
}
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `Type` | extends `string` |

## Properties

### $importJSON

• `Optional` `Readonly` **$importJSON**: (`serializedNode`: [`SerializedLexicalNode`](../modules/lexical.md#serializedlexicalnode)) => `T`

An alternative to the static importJSON() method
that provides better type inference.

#### Type declaration

▸ (`serializedNode`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedLexicalNode`](../modules/lexical.md#serializedlexicalnode) |

##### Returns

`T`

#### Defined in

[packages/lexical/src/LexicalNode.ts:116](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L116)

___

### $transform

• `Optional` `Readonly` **$transform**: (`node`: `T`) => `void`

An alternative to the internal static transform() method
that provides better type inference.

#### Type declaration

▸ (`node`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalNode.ts:111](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L111)

___

### extends

• `Optional` `Readonly` **extends**: [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`LexicalNode`](../classes/lexical.LexicalNode.md)\>

If specified, this must be the exact superclass of the node. It is not
checked at compile time and it is provided automatically at runtime.

You would want to specify this when you are extending a node that
has non-trivial configuration in its $config such
as required state. If you do not specify this, the inferred
types for your node class might be missing some of that.

#### Defined in

[packages/lexical/src/LexicalNode.ts:162](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L162)

___

### importDOM

• `Optional` `Readonly` **importDOM**: [`DOMConversionMap`](../modules/lexical.md#domconversionmap)\<`HTMLElement`\>

An alternative to the static importDOM() method

#### Defined in

[packages/lexical/src/LexicalNode.ts:120](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L120)

___

### stateConfigs

• `Optional` `Readonly` **stateConfigs**: readonly `RequiredNodeStateConfig`[]

EXPERIMENTAL

An array of RequiredNodeStateConfig to initialize your node with
its state requirements. This may be used to configure serialization of
that state.

This function will be called (at most) once per editor initialization,
directly on your node's prototype. It must not depend on any state
initialized in the constructor.

**`Example`**

```ts
const flatState = createState("flat", {parse: parseNumber});
const nestedState = createState("nested", {parse: parseNumber});
class MyNode extends TextNode {
  $config() {
    return this.config(
      'my-node',
      {
        extends: TextNode,
        stateConfigs: [
          { stateConfig: flatState, flat: true},
          nestedState,
        ]
      },
    );
  }
}
```

#### Defined in

[packages/lexical/src/LexicalNode.ts:152](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L152)

___

### type

• `Optional` `Readonly` **type**: `Type`

The exact type of T.getType(), e.g. 'text' - the method itself must
have a more generic 'string' type to be compatible wtih subclassing.

#### Defined in

[packages/lexical/src/LexicalNode.ts:106](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L106)
