---
id: "lexical.StateValueConfig"
title: "Interface: StateValueConfig<V>"
custom_edit_url: null
---

[lexical](../modules/lexical.md).StateValueConfig

Configure a value to be used with StateConfig.

The value type should be inferred from the definition of parse.

If the value type is not JSON serializable, then unparse must also be provided.

Values should be treated as immutable, much like React.useState. Mutating
stored values directly will cause unpredictable behavior, is not supported,
and may trigger errors in the future.

**`Example`**

```ts
const numberOrNullState = createState('numberOrNull', {parse: (v) => typeof v === 'number' ? v : null});
//    ^? State<'numberOrNull', StateValueConfig<number | null>>
const numberState = createState('number', {parse: (v) => typeof v === 'number' ? v : 0});
//    ^? State<'number', StateValueConfig<number>>
```

Only the parse option is required, it is generally not useful to
override `unparse` or `isEqual`. However, if you are using
non-primitive types such as Array, Object, Date, or something
more exotic then you would want to override this. In these
cases you might want to reach for third party libraries.

**`Example`**

```ts
const isoDateState = createState('isoDate', {
  parse: (v): null | Date => {
    const date = typeof v === 'string' ? new Date(v) : null;
    return date && !isNaN(date.valueOf()) ? date : null;
  }
  isEqual: (a, b) => a === b || (a && b && a.valueOf() === b.valueOf()),
  unparse: (v) => v && v.toString()
});
```

You may find it easier to write a parse function using libraries like
zod, valibot, ajv, Effect, TypeBox, etc. perhaps with a wrapper function.

## Type parameters

| Name |
| :------ |
| `V` |

## Properties

### isEqual

• `Optional` **isEqual**: (`a`: `V`, `b`: `V`) => `boolean`

This is optional and for advanced use cases only.

Used to define the equality function so you can use an Array or Object
as V and still omit default values from the exported JSON.

The default is `Object.is`, but something like `fast-deep-equal` might be
more appropriate for your use case.

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

[packages/lexical/src/LexicalNodeState.ts:234](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L234)

___

### parse

• **parse**: (`jsonValue`: `unknown`) => `V`

This function must return a default value when called with undefined,
otherwise it should parse the given JSON value to your type V. Note
that it is not required to copy or clone the given value, you can
pass it directly through if it matches the expected type.

When you encounter an invalid value, it's up to you to decide
as to whether to ignore it and return the default value,
return some non-default error value, or throw an error.

It is possible for V to include undefined, but if it does, then
it should also be considered the default value since undefined
can not be serialized to JSON so it is indistinguishable from the
default.

Similarly, if your V is a function, then usage of [$setState](../modules/lexical.md#$setstate)
must use an updater function because your type will be indistinguishable
from an updater function.

#### Type declaration

▸ (`jsonValue`): `V`

##### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `unknown` |

##### Returns

`V`

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:217](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L217)

___

### unparse

• `Optional` **unparse**: (`parsed`: `V`) => `unknown`

This is optional and for advanced use cases only.

You may specify a function that converts V back to JSON.
This is mandatory when V is not a JSON serializable type.

#### Type declaration

▸ (`parsed`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `parsed` | `V` |

##### Returns

`unknown`

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:224](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L224)
