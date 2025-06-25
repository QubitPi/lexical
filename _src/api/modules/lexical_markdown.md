---
id: "lexical_markdown"
title: "Module: @lexical/markdown"
custom_edit_url: null
---

## Type Aliases

### ElementTransformer

Ƭ **ElementTransformer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependencies` | [`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>[] | - |
| `export` | (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md), `traverseChildren`: (`node`: [`ElementNode`](../classes/lexical.ElementNode.md)) => `string`) => `string` \| ``null`` | - |
| `regExp` | `RegExp` | - |
| `replace` | (`parentNode`: [`ElementNode`](../classes/lexical.ElementNode.md), `children`: [`LexicalNode`](../classes/lexical.LexicalNode.md)[], `match`: `string`[], `isImport`: `boolean`) => `boolean` \| `void` | - |
| `type` | ``"element"`` | - |

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:51](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L51)

___

### MultilineElementTransformer

Ƭ **MultilineElementTransformer**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `dependencies` | [`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>[] | - |
| `export?` | (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md), `traverseChildren`: (`node`: [`ElementNode`](../classes/lexical.ElementNode.md)) => `string`) => `string` \| ``null`` | - |
| `handleImportAfterStartMatch?` | (`args`: \{ `lines`: `string`[] ; `rootNode`: [`ElementNode`](../classes/lexical.ElementNode.md) ; `startLineIndex`: `number` ; `startMatch`: `RegExpMatchArray` ; `transformer`: [`MultilineElementTransformer`](lexical_markdown.md#multilineelementtransformer)  }) => [`boolean`, `number`] \| ``null`` \| `undefined` | - |
| `regExpEnd?` | `RegExp` \| \{ `optional?`: ``true`` ; `regExp`: `RegExp`  } | This regex determines when to stop matching. Anything in between regExpStart and regExpEnd will be matched |
| `regExpStart` | `RegExp` | This regex determines when to start matching |
| `replace` | (`rootNode`: [`ElementNode`](../classes/lexical.ElementNode.md), `children`: [`LexicalNode`](../classes/lexical.LexicalNode.md)[] \| ``null``, `startMatch`: `string`[], `endMatch`: `string`[] \| ``null``, `linesInBetween`: `string`[] \| ``null``, `isImport`: `boolean`) => `boolean` \| `void` | - |
| `type` | ``"multiline-element"`` | - |

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:81](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L81)

___

### TextFormatTransformer

Ƭ **TextFormatTransformer**: `Readonly`\<\{ `format`: `ReadonlyArray`\<[`TextFormatType`](lexical.md#textformattype)\> ; `intraword?`: `boolean` ; `tag`: `string` ; `type`: ``"text-format"``  }\>

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:150](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L150)

___

### TextMatchTransformer

Ƭ **TextMatchTransformer**: `Readonly`\<\{ `dependencies`: [`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>[] ; `export?`: (`node`: [`LexicalNode`](../classes/lexical.LexicalNode.md), `exportChildren`: (`node`: [`ElementNode`](../classes/lexical.ElementNode.md)) => `string`, `exportFormat`: (`node`: [`TextNode`](../classes/lexical.TextNode.md), `textContent`: `string`) => `string`) => `string` \| ``null`` ; `getEndIndex?`: (`node`: [`TextNode`](../classes/lexical.TextNode.md), `match`: `RegExpMatchArray`) => `number` \| ``false`` ; `importRegExp?`: `RegExp` ; `regExp`: `RegExp` ; `replace?`: (`node`: [`TextNode`](../classes/lexical.TextNode.md), `match`: `RegExpMatchArray`) => `void` \| [`TextNode`](../classes/lexical.TextNode.md) ; `trigger?`: `string` ; `type`: ``"text-match"``  }\>

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:157](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L157)

___

### Transformer

Ƭ **Transformer**: [`ElementTransformer`](lexical_markdown.md#elementtransformer) \| [`MultilineElementTransformer`](lexical_markdown.md#multilineelementtransformer) \| [`TextFormatTransformer`](lexical_markdown.md#textformattransformer) \| [`TextMatchTransformer`](lexical_markdown.md#textmatchtransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:45](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L45)

## Variables

### BOLD\_ITALIC\_STAR

• `Const` **BOLD\_ITALIC\_STAR**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:501](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L501)

___

### BOLD\_ITALIC\_UNDERSCORE

• `Const` **BOLD\_ITALIC\_UNDERSCORE**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:507](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L507)

___

### BOLD\_STAR

• `Const` **BOLD\_STAR**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:514](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L514)

___

### BOLD\_UNDERSCORE

• `Const` **BOLD\_UNDERSCORE**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:520](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L520)

___

### CHECK\_LIST

• `Const` **CHECK\_LIST**: [`ElementTransformer`](lexical_markdown.md#elementtransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:469](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L469)

___

### CODE

• `Const` **CODE**: [`MultilineElementTransformer`](lexical_markdown.md#multilineelementtransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:376](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L376)

___

### ELEMENT\_TRANSFORMERS

• `Const` **ELEMENT\_TRANSFORMERS**: [`ElementTransformer`](lexical_markdown.md#elementtransformer)[]

#### Defined in

[packages/lexical-markdown/src/index.ts:41](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/index.ts#L41)

___

### HEADING

• `Const` **HEADING**: [`ElementTransformer`](lexical_markdown.md#elementtransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:321](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L321)

___

### HIGHLIGHT

• `Const` **HIGHLIGHT**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:495](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L495)

___

### INLINE\_CODE

• `Const` **INLINE\_CODE**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:489](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L489)

___

### ITALIC\_STAR

• `Const` **ITALIC\_STAR**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:533](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L533)

___

### ITALIC\_UNDERSCORE

• `Const` **ITALIC\_UNDERSCORE**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:539](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L539)

___

### LINK

• `Const` **LINK**: [`TextMatchTransformer`](lexical_markdown.md#textmatchtransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:550](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L550)

___

### MULTILINE\_ELEMENT\_TRANSFORMERS

• `Const` **MULTILINE\_ELEMENT\_TRANSFORMERS**: [`MultilineElementTransformer`](lexical_markdown.md#multilineelementtransformer)[]

#### Defined in

[packages/lexical-markdown/src/index.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/index.ts#L48)

___

### ORDERED\_LIST

• `Const` **ORDERED\_LIST**: [`ElementTransformer`](lexical_markdown.md#elementtransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:479](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L479)

___

### QUOTE

• `Const` **QUOTE**: [`ElementTransformer`](lexical_markdown.md#elementtransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:338](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L338)

___

### STRIKETHROUGH

• `Const` **STRIKETHROUGH**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:527](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L527)

___

### TEXT\_FORMAT\_TRANSFORMERS

• `Const` **TEXT\_FORMAT\_TRANSFORMERS**: [`TextFormatTransformer`](lexical_markdown.md#textformattransformer)[]

#### Defined in

[packages/lexical-markdown/src/index.ts:56](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/index.ts#L56)

___

### TEXT\_MATCH\_TRANSFORMERS

• `Const` **TEXT\_MATCH\_TRANSFORMERS**: [`TextMatchTransformer`](lexical_markdown.md#textmatchtransformer)[]

#### Defined in

[packages/lexical-markdown/src/index.ts:68](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/index.ts#L68)

___

### TRANSFORMERS

• `Const` **TRANSFORMERS**: [`Transformer`](lexical_markdown.md#transformer)[]

#### Defined in

[packages/lexical-markdown/src/index.ts:70](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/index.ts#L70)

___

### UNORDERED\_LIST

• `Const` **UNORDERED\_LIST**: [`ElementTransformer`](lexical_markdown.md#elementtransformer)

#### Defined in

[packages/lexical-markdown/src/MarkdownTransformers.ts:459](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownTransformers.ts#L459)

## Functions

### $convertFromMarkdownString

▸ **$convertFromMarkdownString**(`markdown`, `transformers?`, `node?`, `shouldPreserveNewLines?`, `shouldMergeAdjacentLines?`): `void`

Renders markdown from a string. The selection is moved to the start after the operation.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `markdown` | `string` | `undefined` | - |
| `transformers` | [`Transformer`](lexical_markdown.md#transformer)[] | `TRANSFORMERS` | - |
| `node?` | [`ElementNode`](../classes/lexical.ElementNode.md) | `undefined` | - |
| `shouldPreserveNewLines?` | `boolean` | `false` | By setting this to true, new lines will be preserved between conversions |
| `shouldMergeAdjacentLines?` | `boolean` | `false` | By setting this to true, adjacent non empty lines will be merged according to commonmark spec: https://spec.commonmark.org/0.24/#example-177. Not applicable if shouldPreserveNewLines = true. |

#### Returns

`void`

#### Defined in

[packages/lexical-markdown/src/index.ts:83](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/index.ts#L83)

___

### $convertToMarkdownString

▸ **$convertToMarkdownString**(`transformers?`, `node?`, `shouldPreserveNewLines?`): `string`

Renders string from markdown. The selection is moved to the start after the operation.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transformers` | [`Transformer`](lexical_markdown.md#transformer)[] | `TRANSFORMERS` |
| `node?` | [`ElementNode`](../classes/lexical.ElementNode.md) | `undefined` |
| `shouldPreserveNewLines` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[packages/lexical-markdown/src/index.ts:103](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/index.ts#L103)

___

### registerMarkdownShortcuts

▸ **registerMarkdownShortcuts**(`editor`, `transformers?`): () => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | `undefined` |
| `transformers` | [`Transformer`](lexical_markdown.md#transformer)[] | `TRANSFORMERS` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-markdown/src/MarkdownShortcuts.ts:396](https://github.com/QubitPi/lexical/tree/main/packages/lexical-markdown/src/MarkdownShortcuts.ts#L396)
