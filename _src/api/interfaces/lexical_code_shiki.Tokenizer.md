---
id: "lexical_code_shiki.Tokenizer"
title: "Interface: Tokenizer"
custom_edit_url: null
---

[@lexical/code-shiki](../modules/lexical_code_shiki.md).Tokenizer

## Properties

### defaultLanguage

• **defaultLanguage**: `string`

#### Defined in

[packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:72](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/CodeHighlighterShiki.ts#L72)

___

### defaultTheme

• **defaultTheme**: `string`

#### Defined in

[packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:73](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/CodeHighlighterShiki.ts#L73)

## Methods

### $tokenize

▸ **$tokenize**(`codeNode`, `language?`): [`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeNode` | [`CodeNode`](../classes/lexical_code.CodeNode.md) |
| `language?` | `string` |

#### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md)[]

#### Defined in

[packages/lexical-code-shiki/src/CodeHighlighterShiki.ts:74](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code-shiki/src/CodeHighlighterShiki.ts#L74)
