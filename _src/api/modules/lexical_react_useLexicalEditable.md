---
id: "lexical_react_useLexicalEditable"
title: "Module: @lexical/react/useLexicalEditable"
custom_edit_url: null
---

## Functions

### useLexicalEditable

▸ **useLexicalEditable**(): `boolean`

Get the current value for [LexicalEditor.isEditable](../classes/lexical.LexicalEditor.md#iseditable)
using [useLexicalSubscription](lexical_react_useLexicalSubscription.md#uselexicalsubscription).
You should prefer this over manually observing the value with
[LexicalEditor.registerEditableListener](../classes/lexical.LexicalEditor.md#registereditablelistener),
which is a bit tricky to do correctly, particularly when using
React StrictMode (the default for development) or concurrency.

#### Returns

`boolean`

#### Defined in

[packages/lexical-react/src/useLexicalEditable.ts:31](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/useLexicalEditable.ts#L31)
