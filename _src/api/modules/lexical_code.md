---
id: "lexical_code"
title: "Module: @lexical/code"
custom_edit_url: null
---

## Classes

- [CodeHighlightNode](../classes/lexical_code.CodeHighlightNode.md)
- [CodeNode](../classes/lexical_code.CodeNode.md)

## Type Aliases

### SerializedCodeNode

Ƭ **SerializedCodeNode**: [`Spread`](lexical.md#spread)\<\{ `language`: `string` \| ``null`` \| `undefined`  }, [`SerializedElementNode`](lexical.md#serializedelementnode)\>

#### Defined in

[packages/lexical-code/src/CodeNode.ts:44](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L44)

## Variables

### CODE\_LANGUAGE\_FRIENDLY\_NAME\_MAP

• `Const` **CODE\_LANGUAGE\_FRIENDLY\_NAME\_MAP**: `Record`\<`string`, `string`\>

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L48)

___

### CODE\_LANGUAGE\_MAP

• `Const` **CODE\_LANGUAGE\_MAP**: `Record`\<`string`, `string`\>

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:68](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L68)

___

### DEFAULT\_CODE\_LANGUAGE

• `Const` **DEFAULT\_CODE\_LANGUAGE**: ``"javascript"``

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:39](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L39)

___

### PrismTokenizer

• `Const` **PrismTokenizer**: `Tokenizer`

#### Defined in

[packages/lexical-code/src/CodeHighlighter.ts:76](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlighter.ts#L76)

## Functions

### $createCodeHighlightNode

▸ **$createCodeHighlightNode**(`text?`, `highlightType?`): [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `''` |
| `highlightType?` | ``null`` \| `string` | `undefined` |

#### Returns

[`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:218](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L218)

___

### $createCodeNode

▸ **$createCodeNode**(`language?`): [`CodeNode`](../classes/lexical_code.CodeNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `language?` | ``null`` \| `string` |

#### Returns

[`CodeNode`](../classes/lexical_code.CodeNode.md)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:355](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L355)

___

### $getEndOfCodeInLine

▸ **$getEndOfCodeInLine**(`anchor`): [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`TabNode`](../classes/lexical.TabNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |

#### Returns

[`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md)

#### Defined in

[packages/lexical-code/src/CodeHighlighter.ts:199](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlighter.ts#L199)

___

### $getFirstCodeNodeOfLine

▸ **$getFirstCodeNodeOfLine**(`anchor`): [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`LineBreakNode`](../classes/lexical.LineBreakNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |

#### Returns

[`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:249](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L249)

___

### $getLastCodeNodeOfLine

▸ **$getLastCodeNodeOfLine**(`anchor`): [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`LineBreakNode`](../classes/lexical.LineBreakNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |

#### Returns

[`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:255](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L255)

___

### $getStartOfCodeInLine

▸ **$getStartOfCodeInLine**(`anchor`, `offset`): ``null`` \| \{ `node`: [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md) ; `offset`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`TabNode`](../classes/lexical.TabNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |
| `offset` | `number` |

#### Returns

``null`` \| \{ `node`: [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md) ; `offset`: `number`  }

#### Defined in

[packages/lexical-code/src/CodeHighlighter.ts:86](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlighter.ts#L86)

___

### $isCodeHighlightNode

▸ **$isCodeHighlightNode**(`node`): node is CodeHighlightNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |

#### Returns

node is CodeHighlightNode

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:225](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L225)

___

### $isCodeNode

▸ **$isCodeNode**(`node`): node is CodeNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is CodeNode

#### Defined in

[packages/lexical-code/src/CodeNode.ts:361](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L361)

___

### getCodeLanguages

▸ **getCodeLanguages**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:90](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L90)

___

### getDefaultCodeLanguage

▸ **getDefaultCodeLanguage**(): `string`

#### Returns

`string`

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:88](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L88)

___

### getEndOfCodeInLine

▸ **getEndOfCodeInLine**(`anchor`): [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`TabNode`](../classes/lexical.TabNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |

#### Returns

[`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md)

**`Deprecated`**

renamed to [$getEndOfCodeInLine](lexical_code.md#$getendofcodeinline) by @lexical/eslint-plugin rules-of-lexical

#### Defined in

[packages/lexical-code/src/index.ts:43](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/index.ts#L43)

___

### getFirstCodeNodeOfLine

▸ **getFirstCodeNodeOfLine**(`anchor`): [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`LineBreakNode`](../classes/lexical.LineBreakNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |

#### Returns

[`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

**`Deprecated`**

renamed to [$getFirstCodeNodeOfLine](lexical_code.md#$getfirstcodenodeofline) by @lexical/eslint-plugin rules-of-lexical

#### Defined in

[packages/lexical-code/src/index.ts:39](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/index.ts#L39)

___

### getLanguageFriendlyName

▸ **getLanguageFriendlyName**(`lang`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang` | `string` |

#### Returns

`string`

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:83](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L83)

___

### getLastCodeNodeOfLine

▸ **getLastCodeNodeOfLine**(`anchor`): [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`LineBreakNode`](../classes/lexical.LineBreakNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |

#### Returns

[`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

**`Deprecated`**

renamed to [$getLastCodeNodeOfLine](lexical_code.md#$getlastcodenodeofline) by @lexical/eslint-plugin rules-of-lexical

#### Defined in

[packages/lexical-code/src/index.ts:41](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/index.ts#L41)

___

### getStartOfCodeInLine

▸ **getStartOfCodeInLine**(`anchor`, `offset`): ``null`` \| \{ `node`: [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md) ; `offset`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`TabNode`](../classes/lexical.TabNode.md) \| [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) |
| `offset` | `number` |

#### Returns

``null`` \| \{ `node`: [`CodeHighlightNode`](../classes/lexical_code.CodeHighlightNode.md) \| [`TabNode`](../classes/lexical.TabNode.md) \| [`LineBreakNode`](../classes/lexical.LineBreakNode.md) ; `offset`: `number`  }

**`Deprecated`**

renamed to [$getStartOfCodeInLine](lexical_code.md#$getstartofcodeinline) by @lexical/eslint-plugin rules-of-lexical

#### Defined in

[packages/lexical-code/src/index.ts:45](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/index.ts#L45)

___

### normalizeCodeLang

▸ **normalizeCodeLang**(`lang`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lang` | `string` |

#### Returns

`string`

#### Defined in

[packages/lexical-code/src/CodeHighlightNode.ts:79](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L79)

___

### registerCodeHighlighting

▸ **registerCodeHighlighting**(`editor`, `tokenizer?`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `tokenizer?` | `Tokenizer` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-code/src/CodeHighlighter.ts:903](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlighter.ts#L903)
