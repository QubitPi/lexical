---
id: "lexical_rich_text"
title: "Module: @lexical/rich-text"
custom_edit_url: null
---

## Classes

- [HeadingNode](../classes/lexical_rich_text.HeadingNode.md)
- [QuoteNode](../classes/lexical_rich_text.QuoteNode.md)

## Type Aliases

### HeadingTagType

Ƭ **HeadingTagType**: ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"``

#### Defined in

[packages/lexical-rich-text/src/index.ts:214](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L214)

___

### SerializedHeadingNode

Ƭ **SerializedHeadingNode**: [`Spread`](lexical.md#spread)\<\{ `tag`: ``"h1"`` \| ``"h2"`` \| ``"h3"`` \| ``"h4"`` \| ``"h5"`` \| ``"h6"``  }, [`SerializedElementNode`](lexical.md#serializedelementnode)\>

#### Defined in

[packages/lexical-rich-text/src/index.ts:110](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L110)

___

### SerializedQuoteNode

Ƭ **SerializedQuoteNode**: [`SerializedElementNode`](lexical.md#serializedelementnode)

#### Defined in

[packages/lexical-rich-text/src/index.ts:121](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L121)

## Variables

### DRAG\_DROP\_PASTE

• `Const` **DRAG\_DROP\_PASTE**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`File`[]\>

#### Defined in

[packages/lexical-rich-text/src/index.ts:117](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L117)

## Functions

### $createHeadingNode

▸ **$createHeadingNode**(`headingTag?`): [`HeadingNode`](../classes/lexical_rich_text.HeadingNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `headingTag` | [`HeadingTagType`](lexical_rich_text.md#headingtagtype) | `'h1'` |

#### Returns

[`HeadingNode`](../classes/lexical_rich_text.HeadingNode.md)

#### Defined in

[packages/lexical-rich-text/src/index.ts:437](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L437)

___

### $createQuoteNode

▸ **$createQuoteNode**(): [`QuoteNode`](../classes/lexical_rich_text.QuoteNode.md)

#### Returns

[`QuoteNode`](../classes/lexical_rich_text.QuoteNode.md)

#### Defined in

[packages/lexical-rich-text/src/index.ts:204](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L204)

___

### $isHeadingNode

▸ **$isHeadingNode**(`node`): node is HeadingNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is HeadingNode

#### Defined in

[packages/lexical-rich-text/src/index.ts:443](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L443)

___

### $isQuoteNode

▸ **$isQuoteNode**(`node`): node is QuoteNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is QuoteNode

#### Defined in

[packages/lexical-rich-text/src/index.ts:208](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L208)

___

### eventFiles

▸ **eventFiles**(`event`): [`boolean`, `File`[], `boolean`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DragEvent` \| [`PasteCommandType`](lexical.md#pastecommandtype) |

#### Returns

[`boolean`, `File`[], `boolean`]

#### Defined in

[packages/lexical-rich-text/src/index.ts:493](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L493)

___

### registerRichText

▸ **registerRichText**(`editor`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-rich-text/src/index.ts:590](https://github.com/QubitPi/lexical/tree/main/packages/lexical-rich-text/src/index.ts#L590)
