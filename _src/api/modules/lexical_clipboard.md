---
id: "lexical_clipboard"
title: "Module: @lexical/clipboard"
custom_edit_url: null
---

## Interfaces

- [LexicalClipboardData](../interfaces/lexical_clipboard.LexicalClipboardData.md)

## Functions

### $generateJSONFromSelectedNodes

▸ **$generateJSONFromSelectedNodes**\<`SerializedNode`\>(`editor`, `selection`): `Object`

Gets the Lexical JSON of the nodes inside the provided Selection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SerializedNode` | extends `BaseSerializedNode` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | LexicalEditor to get the JSON content from. |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | Selection to get the JSON content from. |

#### Returns

`Object`

an object with the editor namespace and a list of serializable nodes as JavaScript objects.

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |
| `nodes` | `SerializedNode`[] |

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:392](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L392)

___

### $generateNodesFromSerializedNodes

▸ **$generateNodesFromSerializedNodes**(`serializedNodes`): [`LexicalNode`](../classes/lexical.LexicalNode.md)[]

This method takes an array of objects conforming to the BaseSerializedNode interface and returns
an Array containing instances of the corresponding LexicalNode classes registered on the editor.
Normally, you'd get an Array of BaseSerialized nodes from [$generateJSONFromSelectedNodes](lexical_clipboard.md#$generatejsonfromselectednodes)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedNodes` | `BaseSerializedNode`[] | an Array of objects conforming to the BaseSerializedNode interface. |

#### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md)[]

an Array of Lexical Node objects.

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:422](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L422)

___

### $getClipboardDataFromSelection

▸ **$getClipboardDataFromSelection**(`selection?`): [`LexicalClipboardData`](../interfaces/lexical_clipboard.LexicalClipboardData.md)

Serialize the content of the current selection to strings in
text/plain, text/html, and application/x-lexical-editor (Lexical JSON)
formats (as available).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | the selection to serialize (defaults to $getSelection()) |

#### Returns

[`LexicalClipboardData`](../interfaces/lexical_clipboard.LexicalClipboardData.md)

LexicalClipboardData

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:562](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L562)

___

### $getHtmlContent

▸ **$getHtmlContent**(`editor`, `selection?`): `string`

Returns the *currently selected* Lexical content as an HTML string, relying on the
logic defined in the exportDOM methods on the LexicalNode classes. Note that
this will not return the HTML content of the entire editor (unless all the content is included
in the current selection).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | LexicalEditor instance to get HTML content from |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | The selection to use (default is $getSelection()) |

#### Returns

`string`

a string of HTML content

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:55](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L55)

___

### $getLexicalContent

▸ **$getLexicalContent**(`editor`, `selection?`): ``null`` \| `string`

Returns the *currently selected* Lexical content as a JSON string, relying on the
logic defined in the exportJSON methods on the LexicalNode classes. Note that
this will not return the JSON content of the entire editor (unless all the content is included
in the current selection).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | LexicalEditor instance to get the JSON content from |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | The selection to use (default is $getSelection()) |

#### Returns

``null`` \| `string`

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:84](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L84)

___

### $insertDataTransferForPlainText

▸ **$insertDataTransferForPlainText**(`dataTransfer`, `selection`): `void`

Attempts to insert content of the mime-types text/plain or text/uri-list from
the provided DataTransfer object into the editor at the provided selection.
text/uri-list is only used if text/plain is not also provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dataTransfer` | `DataTransfer` | an object conforming to the [DataTransfer interface] (https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface) |
| `selection` | [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | the selection to use as the insertion point for the content in the DataTransfer object |

#### Returns

`void`

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:111](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L111)

___

### $insertDataTransferForRichText

▸ **$insertDataTransferForRichText**(`dataTransfer`, `selection`, `editor`): `void`

Attempts to insert content of the mime-types application/x-lexical-editor, text/html,
text/plain, or text/uri-list (in descending order of priority) from the provided DataTransfer
object into the editor at the provided selection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dataTransfer` | `DataTransfer` | an object conforming to the [DataTransfer interface] (https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface) |
| `selection` | [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | the selection to use as the insertion point for the content in the DataTransfer object |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | the LexicalEditor the content is being inserted into. |

#### Returns

`void`

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:132](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L132)

___

### $insertGeneratedNodes

▸ **$insertGeneratedNodes**(`editor`, `nodes`, `selection`): `void`

Inserts Lexical nodes into the editor using different strategies depending on
some simple selection-based heuristics. If you're looking for a generic way to
to insert nodes into the editor at a specific selection point, you probably want
[lexical.$insertNodes](lexical.md#$insertnodes)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | LexicalEditor instance to insert the nodes into. |
| `nodes` | [`LexicalNode`](../classes/lexical.LexicalNode.md)[] | The nodes to insert. |
| `selection` | [`BaseSelection`](../interfaces/lexical.BaseSelection.md) | The selection to insert the nodes into. |

#### Returns

`void`

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:223](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L223)

___

### copyToClipboard

▸ **copyToClipboard**(`editor`, `event`, `data?`): `Promise`\<`boolean`\>

Copies the content of the current selection to the clipboard in
text/plain, text/html, and application/x-lexical-editor (Lexical JSON)
formats.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | the LexicalEditor instance to copy content from |
| `event` | ``null`` \| `ClipboardEvent` | the native browser ClipboardEvent to add the content to. |
| `data?` | [`LexicalClipboardData`](../interfaces/lexical_clipboard.LexicalClipboardData.md) | - |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:451](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L451)

___

### setLexicalClipboardDataTransfer

▸ **setLexicalClipboardDataTransfer**(`clipboardData`, `data`): `void`

Call setData on the given clipboardData for each MIME type present
in the given data (from [$getClipboardDataFromSelection](lexical_clipboard.md#$getclipboarddatafromselection))

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `clipboardData` | `DataTransfer` | the event.clipboardData to populate from data |
| `data` | [`LexicalClipboardData`](../interfaces/lexical_clipboard.LexicalClipboardData.md) | The lexical data |

#### Returns

`void`

#### Defined in

[packages/lexical-clipboard/src/clipboard.ts:587](https://github.com/QubitPi/lexical/tree/main/packages/lexical-clipboard/src/clipboard.ts#L587)
