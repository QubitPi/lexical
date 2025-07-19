---
id: "lexical_code"
title: "Module: @lexical/code"
custom_edit_url: null
---

## Classes

- [CodeHighlightNode](../classes/lexical_code.CodeHighlightNode.md)
- [CodeNode](../classes/lexical_code.CodeNode.md)

## References

### normalizeCodeLanguage

Renames and re-exports [normalizeCodeLang](lexical_code.md#normalizecodelang)

## Type Aliases

### SerializedCodeNode

Ƭ **SerializedCodeNode**: [`Spread`](lexical.md#spread)\<\{ `language`: `string` \| ``null`` \| `undefined` ; `theme?`: `string`  }, [`SerializedElementNode`](lexical.md#serializedelementnode)\>

#### Defined in

[packages/lexical-code/src/CodeNode.ts:43](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L43)

## Variables

### CODE\_LANGUAGE\_FRIENDLY\_NAME\_MAP

• `Const` **CODE\_LANGUAGE\_FRIENDLY\_NAME\_MAP**: `Record`\<`string`, `string`\>

#### Defined in

[packages/lexical-code/src/FacadePrism.ts:45](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FacadePrism.ts#L45)

___

### CODE\_LANGUAGE\_MAP

• `Const` **CODE\_LANGUAGE\_MAP**: `Record`\<`string`, `string`\>

#### Defined in

[packages/lexical-code/src/FacadePrism.ts:65](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FacadePrism.ts#L65)

___

### DEFAULT\_CODE\_LANGUAGE

• `Const` **DEFAULT\_CODE\_LANGUAGE**: ``"javascript"``

#### Defined in

[packages/lexical-code/src/CodeNode.ts:51](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L51)

___

### PrismTokenizer

• `Const` **PrismTokenizer**: `Tokenizer`

#### Defined in

[packages/lexical-code/src/CodeHighlighterPrism.ts:81](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlighterPrism.ts#L81)

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

[packages/lexical-code/src/CodeHighlightNode.ts:153](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L153)

___

### $createCodeNode

▸ **$createCodeNode**(`language?`, `theme?`): [`CodeNode`](../classes/lexical_code.CodeNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `language?` | ``null`` \| `string` |
| `theme?` | ``null`` \| `string` |

#### Returns

[`CodeNode`](../classes/lexical_code.CodeNode.md)

#### Defined in

[packages/lexical-code/src/CodeNode.ts:409](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L409)

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

[packages/lexical-code/src/FlatStructureUtils.ts:167](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FlatStructureUtils.ts#L167)

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

[packages/lexical-code/src/FlatStructureUtils.ts:42](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FlatStructureUtils.ts#L42)

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

[packages/lexical-code/src/FlatStructureUtils.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FlatStructureUtils.ts#L48)

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

[packages/lexical-code/src/FlatStructureUtils.ts:54](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FlatStructureUtils.ts#L54)

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

[packages/lexical-code/src/CodeHighlightNode.ts:160](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlightNode.ts#L160)

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

[packages/lexical-code/src/CodeNode.ts:416](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L416)

___

### getCodeLanguageOptions

▸ **getCodeLanguageOptions**(): [`string`, `string`][]

#### Returns

[`string`, `string`][]

#### Defined in

[packages/lexical-code/src/FacadePrism.ts:94](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FacadePrism.ts#L94)

___

### getCodeLanguages

▸ **getCodeLanguages**(): `string`[]

#### Returns

`string`[]

#### Defined in

[packages/lexical-code/src/FacadePrism.ts:85](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FacadePrism.ts#L85)

___

### getCodeThemeOptions

▸ **getCodeThemeOptions**(): [`string`, `string`][]

#### Returns

[`string`, `string`][]

#### Defined in

[packages/lexical-code/src/FacadePrism.ts:107](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FacadePrism.ts#L107)

___

### getDefaultCodeLanguage

▸ **getDefaultCodeLanguage**(): `string`

#### Returns

`string`

#### Defined in

[packages/lexical-code/src/CodeNode.ts:52](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeNode.ts#L52)

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

[packages/lexical-code/src/index.ts:52](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/index.ts#L52)

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

[packages/lexical-code/src/index.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/index.ts#L48)

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

[packages/lexical-code/src/FacadePrism.ts:80](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FacadePrism.ts#L80)

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

[packages/lexical-code/src/index.ts:50](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/index.ts#L50)

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

[packages/lexical-code/src/index.ts:54](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/index.ts#L54)

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

[packages/lexical-code/src/FacadePrism.ts:76](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/FacadePrism.ts#L76)

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

[packages/lexical-code/src/CodeHighlighterPrism.ts:752](https://github.com/QubitPi/lexical/tree/main/packages/lexical-code/src/CodeHighlighterPrism.ts#L752)
