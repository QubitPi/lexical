---
id: "lexical_code_shiki"
title: "Module: @lexical/code-shiki"
custom_edit_url: null
---

## Interfaces

- [Tokenizer](../interfaces/lexical_code_shiki.Tokenizer.md)

## Variables

### ShikiTokenizer

• `Const` **ShikiTokenizer**: [`Tokenizer`](../interfaces/lexical_code_shiki.Tokenizer.md)

#### Defined in

[packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:79](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/CodeHighlighterShiki.ts#L79)

## Functions

### getCodeLanguageOptions

▸ **getCodeLanguageOptions**(): [`string`, `string`][]

#### Returns

[`string`, `string`][]

#### Defined in

[packages/lexical-code-shiki/src/FacadeShiki.ts:119](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/FacadeShiki.ts#L119)

___

### getCodeThemeOptions

▸ **getCodeThemeOptions**(): [`string`, `string`][]

#### Returns

[`string`, `string`][]

#### Defined in

[packages/lexical-code-shiki/src/FacadeShiki.ts:122](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/FacadeShiki.ts#L122)

___

### isCodeLanguageLoaded

▸ **isCodeLanguageLoaded**(`language`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/lexical-code-shiki/src/FacadeShiki.ts:38](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/FacadeShiki.ts#L38)

___

### loadCodeLanguage

▸ **loadCodeLanguage**(`language`, `editor?`, `codeNodeKey?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |
| `editor?` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `codeNodeKey?` | `string` |

#### Returns

`void`

#### Defined in

[packages/lexical-code-shiki/src/FacadeShiki.ts:51](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/FacadeShiki.ts#L51)

___

### loadCodeTheme

▸ **loadCodeTheme**(`theme`, `editor?`, `codeNodeKey?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `theme` | `string` |
| `editor?` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `codeNodeKey?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/lexical-code-shiki/src/FacadeShiki.ts:97](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/FacadeShiki.ts#L97)

___

### normalizeCodeLanguage

▸ **normalizeCodeLanguage**(`language`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `language` | `string` |

#### Returns

`string`

#### Defined in

[packages/lexical-code-shiki/src/FacadeShiki.ts:126](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/FacadeShiki.ts#L126)

___

### registerCodeHighlighting

▸ **registerCodeHighlighting**(`editor`, `tokenizer?`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `tokenizer?` | [`Tokenizer`](../interfaces/lexical_code_shiki.Tokenizer.md) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:758](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/CodeHighlighterShiki.ts#L758)
