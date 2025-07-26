---
id: "lexical"
title: "Module: lexical"
custom_edit_url: null
---

## Classes

- [ArtificialNode\_\_DO\_NOT\_USE](../classes/lexical.ArtificialNode__DO_NOT_USE.md)
- [DecoratorNode](../classes/lexical.DecoratorNode.md)
- [EditorState](../classes/lexical.EditorState.md)
- [ElementDOMSlot](../classes/lexical.ElementDOMSlot.md)
- [ElementNode](../classes/lexical.ElementNode.md)
- [LexicalEditor](../classes/lexical.LexicalEditor.md)
- [LexicalNode](../classes/lexical.LexicalNode.md)
- [LineBreakNode](../classes/lexical.LineBreakNode.md)
- [NodeSelection](../classes/lexical.NodeSelection.md)
- [ParagraphNode](../classes/lexical.ParagraphNode.md)
- [Point](../classes/lexical.Point.md)
- [RangeSelection](../classes/lexical.RangeSelection.md)
- [RootNode](../classes/lexical.RootNode.md)
- [StateConfig](../classes/lexical.StateConfig.md)
- [TabNode](../classes/lexical.TabNode.md)
- [TextNode](../classes/lexical.TextNode.md)

## Interfaces

- [BaseCaret](../interfaces/lexical.BaseCaret.md)
- [BaseSelection](../interfaces/lexical.BaseSelection.md)
- [CaretRange](../interfaces/lexical.CaretRange.md)
- [ChildCaret](../interfaces/lexical.ChildCaret.md)
- [CommonAncestorResultAncestor](../interfaces/lexical.CommonAncestorResultAncestor.md)
- [CommonAncestorResultBranch](../interfaces/lexical.CommonAncestorResultBranch.md)
- [CommonAncestorResultDescendant](../interfaces/lexical.CommonAncestorResultDescendant.md)
- [CommonAncestorResultSame](../interfaces/lexical.CommonAncestorResultSame.md)
- [EditorStateReadOptions](../interfaces/lexical.EditorStateReadOptions.md)
- [SerializedEditorState](../interfaces/lexical.SerializedEditorState.md)
- [SiblingCaret](../interfaces/lexical.SiblingCaret.md)
- [SplitAtPointCaretNextOptions](../interfaces/lexical.SplitAtPointCaretNextOptions.md)
- [StateValueConfig](../interfaces/lexical.StateValueConfig.md)
- [StaticNodeConfigValue](../interfaces/lexical.StaticNodeConfigValue.md)
- [StepwiseIteratorConfig](../interfaces/lexical.StepwiseIteratorConfig.md)
- [TextPointCaret](../interfaces/lexical.TextPointCaret.md)
- [TextPointCaretSlice](../interfaces/lexical.TextPointCaretSlice.md)
- [UpdateListenerPayload](../interfaces/lexical.UpdateListenerPayload.md)

## Type Aliases

### AnyStateConfig

Ƭ **AnyStateConfig**: [`StateConfig`](../classes/lexical.StateConfig.md)\<`any`, `any`\>

For advanced use cases, using this type is not recommended unless
it is required (due to TypeScript's lack of features like
higher-kinded types).

A [StateConfig](../classes/lexical.StateConfig.md) type with any key and any value that can be
used in situations where the key and value type can not be known,
such as in a generic constraint when working with a collection of
StateConfig.

[StateConfigKey](lexical.md#stateconfigkey) and [StateConfigValue](lexical.md#stateconfigvalue) will be
useful when this is used as a generic constraint.

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:290](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L290)

___

### BaseStaticNodeConfig

Ƭ **BaseStaticNodeConfig**: \{ readonly [K in string]?: StaticNodeConfigValue\<LexicalNode, string\> }

This is the type of LexicalNode.$config() that can be
overridden by subclasses.

#### Defined in

[packages/lexical/src/LexicalNode.ts:170](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L170)

___

### CaretDirection

Ƭ **CaretDirection**: ``"next"`` \| ``"previous"``

The direction of a caret, 'next' points towards the end of the document
and 'previous' points towards the beginning

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:22](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L22)

___

### CaretType

Ƭ **CaretType**: ``"sibling"`` \| ``"child"``

A sibling caret type points from a LexicalNode origin to its next or previous sibling,
and a child caret type points from an ElementNode origin to its first or last child.

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:32](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L32)

___

### CommandListener

Ƭ **CommandListener**\<`P`\>: (`payload`: `P`, `editor`: [`LexicalEditor`](../classes/lexical.LexicalEditor.md)) => `boolean`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Type declaration

▸ (`payload`, `editor`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `P` |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |

##### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:344](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L344)

___

### CommandListenerPriority

Ƭ **CommandListenerPriority**: ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4``

#### Defined in

[packages/lexical/src/LexicalEditor.ts:348](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L348)

___

### CommandPayloadType

Ƭ **CommandPayloadType**\<`TCommand`\>: `TCommand` extends [`LexicalCommand`](lexical.md#lexicalcommand)\<infer TPayload\> ? `TPayload` : `never`

Type helper for extracting the payload type from a command.

**`Example`**

```ts
const MY_COMMAND = createCommand<SomeType>();

// ...

editor.registerCommand(MY_COMMAND, payload => {
  // Type of `payload` is inferred here. But lets say we want to extract a function to delegate to
  $handleMyCommand(editor, payload);
  return true;
});

function $handleMyCommand(editor: LexicalEditor, payload: CommandPayloadType<typeof MY_COMMAND>) {
  // `payload` is of type `SomeType`, extracted from the command.
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TCommand` | extends [`LexicalCommand`](lexical.md#lexicalcommand)\<`unknown`\> |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:381](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L381)

___

### CommonAncestorResult

Ƭ **CommonAncestorResult**\<`A`, `B`\>: [`CommonAncestorResultSame`](../interfaces/lexical.CommonAncestorResultSame.md)\<`A`\> \| [`CommonAncestorResultAncestor`](../interfaces/lexical.CommonAncestorResultAncestor.md)\<`A` & [`ElementNode`](../classes/lexical.ElementNode.md)\> \| [`CommonAncestorResultDescendant`](../interfaces/lexical.CommonAncestorResultDescendant.md)\<`B` & [`ElementNode`](../classes/lexical.ElementNode.md)\> \| [`CommonAncestorResultBranch`](../interfaces/lexical.CommonAncestorResultBranch.md)\<`A`, `B`\>

The result of comparing two nodes that share some common ancestor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `B` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1332](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1332)

___

### CreateEditorArgs

Ƭ **CreateEditorArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disableEvents?` | `boolean` |
| `editable?` | `boolean` |
| `editorState?` | [`EditorState`](../classes/lexical.EditorState.md) |
| `html?` | [`HTMLConfig`](lexical.md#htmlconfig) |
| `namespace?` | `string` |
| `nodes?` | `ReadonlyArray`\<[`LexicalNodeConfig`](lexical.md#lexicalnodeconfig)\> |
| `onError?` | `ErrorHandler` |
| `parentEditor?` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `theme?` | [`EditorThemeClasses`](lexical.md#editorthemeclasses) |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:218](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L218)

___

### DOMChildConversion

Ƭ **DOMChildConversion**: (`lexicalNode`: [`LexicalNode`](../classes/lexical.LexicalNode.md), `parentLexicalNode`: [`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null`` \| `undefined`) => [`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null`` \| `undefined`

#### Type declaration

▸ (`lexicalNode`, `parentLexicalNode`): [`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null`` \| `undefined`

##### Parameters

| Name | Type |
| :------ | :------ |
| `lexicalNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `parentLexicalNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null`` \| `undefined` |

##### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null`` \| `undefined`

#### Defined in

[packages/lexical/src/LexicalNode.ts:351](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L351)

___

### DOMConversion

Ƭ **DOMConversion**\<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` = `HTMLElement` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `conversion` | [`DOMConversionFn`](lexical.md#domconversionfn)\<`T`\> |
| `priority?` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` |

#### Defined in

[packages/lexical/src/LexicalNode.ts:342](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L342)

___

### DOMConversionFn

Ƭ **DOMConversionFn**\<`T`\>: (`element`: `T`) => [`DOMConversionOutput`](lexical.md#domconversionoutput) \| ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` = `HTMLElement` |

#### Type declaration

▸ (`element`): [`DOMConversionOutput`](lexical.md#domconversionoutput) \| ``null``

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

##### Returns

[`DOMConversionOutput`](lexical.md#domconversionoutput) \| ``null``

#### Defined in

[packages/lexical/src/LexicalNode.ts:347](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L347)

___

### DOMConversionMap

Ƭ **DOMConversionMap**\<`T`\>: `Record`\<`NodeName`, `DOMConversionProp`\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `HTMLElement` = `HTMLElement` |

#### Defined in

[packages/lexical/src/LexicalNode.ts:356](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L356)

___

### DOMConversionOutput

Ƭ **DOMConversionOutput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | (`childLexicalNodes`: [`LexicalNode`](../classes/lexical.LexicalNode.md)[]) => [`LexicalNode`](../classes/lexical.LexicalNode.md)[] |
| `forChild?` | [`DOMChildConversion`](lexical.md#domchildconversion) |
| `node` | ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) \| [`LexicalNode`](../classes/lexical.LexicalNode.md)[] |

#### Defined in

[packages/lexical/src/LexicalNode.ts:362](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L362)

___

### DOMExportOutput

Ƭ **DOMExportOutput**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | (`generatedElement`: `HTMLElement` \| `DocumentFragment` \| `Text` \| ``null`` \| `undefined`) => `HTMLElement` \| `DocumentFragment` \| `Text` \| ``null`` \| `undefined` |
| `element` | `HTMLElement` \| `DocumentFragment` \| `Text` \| ``null`` |

#### Defined in

[packages/lexical/src/LexicalNode.ts:373](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L373)

___

### DOMExportOutputMap

Ƭ **DOMExportOutputMap**: `Map`\<[`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>, (`editor`: [`LexicalEditor`](../classes/lexical.LexicalEditor.md), `target`: [`LexicalNode`](../classes/lexical.LexicalNode.md)) => [`DOMExportOutput`](lexical.md#domexportoutput)\>

#### Defined in

[packages/lexical/src/LexicalNode.ts:368](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L368)

___

### EditableListener

Ƭ **EditableListener**: (`editable`: `boolean`) => `void`

#### Type declaration

▸ (`editable`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `editable` | `boolean` |

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:346](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L346)

___

### EditorConfig

Ƭ **EditorConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disableEvents?` | `boolean` |
| `namespace` | `string` |
| `theme` | [`EditorThemeClasses`](lexical.md#editorthemeclasses) |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:193](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L193)

___

### EditorSetOptions

Ƭ **EditorSetOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tag?` | `string` |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:117](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L117)

___

### EditorThemeClassName

Ƭ **EditorThemeClassName**: `string`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:73](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L73)

___

### EditorThemeClasses

Ƭ **EditorThemeClasses**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockCursor?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `characterLimit?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `code?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `codeHighlight?` | `Record`\<`string`, [`EditorThemeClassName`](lexical.md#editorthemeclassname)\> |
| `embedBlock?` | \{ `base?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `focus?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname)  } |
| `embedBlock.base?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `embedBlock.focus?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `hashtag?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `heading?` | \{ `h1?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `h2?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `h3?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `h4?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `h5?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `h6?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname)  } |
| `heading.h1?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `heading.h2?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `heading.h3?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `heading.h4?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `heading.h5?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `heading.h6?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `hr?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `hrSelected?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `image?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `indent?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `link?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list?` | \{ `checklist?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `listitem?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `listitemChecked?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `listitemUnchecked?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `nested?`: \{ `list?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `listitem?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname)  } ; `ol?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `olDepth?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname)[] ; `ul?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `ulDepth?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname)[]  } |
| `list.checklist?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list.listitem?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list.listitemChecked?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list.listitemUnchecked?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list.nested?` | \{ `list?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname) ; `listitem?`: [`EditorThemeClassName`](lexical.md#editorthemeclassname)  } |
| `list.nested.list?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list.nested.listitem?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list.ol?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list.olDepth?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname)[] |
| `list.ul?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `list.ulDepth?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname)[] |
| `ltr?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `mark?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `markOverlap?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `paragraph?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `quote?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `root?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `rtl?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `specialText?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tab?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `table?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableAddColumns?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableAddRows?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableCell?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableCellActionButton?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableCellActionButtonContainer?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableCellHeader?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableCellResizer?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableCellSelected?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableRow?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableScrollableWrapper?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableSelected?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `tableSelection?` | [`EditorThemeClassName`](lexical.md#editorthemeclassname) |
| `text?` | `TextNodeThemeClasses` |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:129](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L129)

___

### EditorUpdateOptions

Ƭ **EditorUpdateOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `discrete?` | ``true`` | If true, prevents this update from being batched, forcing it to run synchronously. |
| `onUpdate?` | () => `void` | - |
| `skipTransforms?` | ``true`` | Setting this to true will suppress all node transforms for this update cycle. Useful for synchronizing updates in some cases. |
| `tag?` | [`UpdateTag`](lexical.md#updatetag) \| [`UpdateTag`](lexical.md#updatetag)[] | A tag to identify this update, in an update listener, for instance. See also [$addUpdateTag](lexical.md#$addupdatetag). |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:92](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L92)

___

### ElementFormatType

Ƭ **ElementFormatType**: ``"left"`` \| ``"start"`` \| ``"center"`` \| ``"right"`` \| ``"end"`` \| ``"justify"`` \| ``""``

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:68](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L68)

___

### ElementPoint

Ƭ **ElementPoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_selection` | [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |
| `getNode` | () => [`ElementNode`](../classes/lexical.ElementNode.md) |
| `is` | (`point`: [`PointType`](lexical.md#pointtype)) => `boolean` |
| `isBefore` | (`point`: [`PointType`](lexical.md#pointtype)) => `boolean` |
| `key` | [`NodeKey`](lexical.md#nodekey) |
| `offset` | `number` |
| `set` | (`key`: [`NodeKey`](lexical.md#nodekey), `offset`: `number`, `type`: ``"text"`` \| ``"element"``, `onlyIfChanged?`: `boolean`) => `void` |
| `type` | ``"element"`` |

#### Defined in

[packages/lexical/src/LexicalSelection.ts:111](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L111)

___

### EventHandler

Ƭ **EventHandler**: (`event`: `Event`, `editor`: [`LexicalEditor`](../classes/lexical.LexicalEditor.md)) => `void`

#### Type declaration

▸ (`event`, `editor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEvents.ts:1316](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEvents.ts#L1316)

___

### FlipDirection

Ƭ **FlipDirection**\<`D`\>: typeof `FLIP_DIRECTION`[`D`]

A type utility to flip next and previous

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:26](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L26)

___

### HTMLConfig

Ƭ **HTMLConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `export?` | [`DOMExportOutputMap`](lexical.md#domexportoutputmap) |
| `import?` | [`DOMConversionMap`](lexical.md#domconversionmap) |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:208](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L208)

___

### Klass

Ƭ **Klass**\<`T`\>: `InstanceType`\<`T`[``"constructor"``]\> extends `T` ? `T`[``"constructor"``] : `GenericConstructor`\<`T`\> & `T`[``"constructor"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:67](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L67)

___

### KlassConstructor

Ƭ **KlassConstructor**\<`Cls`\>: `GenericConstructor`\<`InstanceType`\<`Cls`\>\> & \{ [k in keyof Cls]: Cls[k] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Cls` | extends `GenericConstructor`\<`any`\> |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:62](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L62)

___

### LexicalCommand

Ƭ **LexicalCommand**\<`TPayload`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `TPayload` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type?` | `string` |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:357](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L357)

___

### LexicalExportJSON

Ƭ **LexicalExportJSON**\<`T`\>: `Prettify`\<`Omit`\<`ReturnType`\<`T`[``"exportJSON"``]\>, ``"type"``\> & \{ `type`: `GetStaticNodeType`\<`T`\>  } & [`NodeStateJSON`](lexical.md#nodestatejson)\<`T`\>\>

The most precise type we can infer for the JSON that will
be produced by T.exportJSON().

Do not use this for the return type of T.exportJSON()! It must be
a more generic type to be compatible with subclassing.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Defined in

[packages/lexical/src/LexicalNode.ts:225](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L225)

___

### LexicalNodeConfig

Ƭ **LexicalNodeConfig**: [`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\> \| [`LexicalNodeReplacement`](lexical.md#lexicalnodereplacement)

A LexicalNode class or LexicalNodeReplacement configuration

#### Defined in

[packages/lexical/src/LexicalEditor.ts:216](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L216)

___

### LexicalNodeReplacement

Ƭ **LexicalNodeReplacement**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `replace` | [`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\> |
| `with` | \<T\>(`node`: `InstanceType`\<`T`\>) => [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `withKlass?` | [`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\> |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:199](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L199)

___

### LexicalUpdateJSON

Ƭ **LexicalUpdateJSON**\<`T`\>: `Omit`\<`T`, ``"children"`` \| ``"type"`` \| ``"version"``\>

Omit the children, type, and version properties from the given SerializedLexicalNode definition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SerializedLexicalNode`](lexical.md#serializedlexicalnode) |

#### Defined in

[packages/lexical/src/LexicalNode.ts:234](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L234)

___

### MutationListener

Ƭ **MutationListener**: (`nodes`: `Map`\<[`NodeKey`](lexical.md#nodekey), [`NodeMutation`](lexical.md#nodemutation)\>, `payload`: \{ `dirtyLeaves`: `Set`\<`string`\> ; `prevEditorState`: [`EditorState`](../classes/lexical.EditorState.md) ; `updateTags`: `Set`\<`string`\>  }) => `void`

#### Type declaration

▸ (`nodes`, `payload`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `Map`\<[`NodeKey`](lexical.md#nodekey), [`NodeMutation`](lexical.md#nodemutation)\> |
| `payload` | `Object` |
| `payload.dirtyLeaves` | `Set`\<`string`\> |
| `payload.prevEditorState` | [`EditorState`](../classes/lexical.EditorState.md) |
| `payload.updateTags` | `Set`\<`string`\> |

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:335](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L335)

___

### NodeCaret

Ƭ **NodeCaret**\<`D`\>: [`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<[`LexicalNode`](../classes/lexical.LexicalNode.md), `D`\> \| [`ChildCaret`](../interfaces/lexical.ChildCaret.md)\<[`ElementNode`](../classes/lexical.ElementNode.md), `D`\>

A NodeCaret is the combination of an origin node and a direction
that points towards where a connected node will be fetched, inserted,
or replaced. A SiblingCaret points from a node to its next or previous
sibling, and a ChildCaret points to its first or last child
(using next or previous as direction, for symmetry with SiblingCaret).

The differences between NodeCaret and PointType are:
- NodeCaret can only be used to refer to an entire node (PointCaret is used when a full analog is needed). A PointType of text type can be used to refer to a specific location inside of a TextNode.
- NodeCaret stores an origin node, type (sibling or child), and direction (next or previous). A PointType stores a type (text or element), the key of a node, and a text or child offset within that node.
- NodeCaret is directional and always refers to a very specific node, eliminating all ambiguity. PointType can refer to the location before or at a node depending on context.
- NodeCaret is more robust to nearby mutations, as it relies only on a node's direct connections. An element Any change to the count of previous siblings in an element PointType will invalidate it.
- NodeCaret is designed to work more directly with the internal representation of the document tree, making it suitable for use in traversals without performing any redundant work.

The caret does *not* update in response to any mutations, you should
not persist it across editor updates, and using a caret after its origin
node has been removed or replaced may result in runtime errors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) = [`CaretDirection`](lexical.md#caretdirection) |

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:150](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L150)

___

### NodeKey

Ƭ **NodeKey**: `string`

#### Defined in

[packages/lexical/src/LexicalNode.ts:380](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L380)

___

### NodeMap

Ƭ **NodeMap**: `Map`\<[`NodeKey`](lexical.md#nodekey), [`LexicalNode`](../classes/lexical.LexicalNode.md)\>

#### Defined in

[packages/lexical/src/LexicalNode.ts:69](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L69)

___

### NodeMutation

Ƭ **NodeMutation**: ``"created"`` \| ``"updated"`` \| ``"destroyed"``

#### Defined in

[packages/lexical/src/LexicalEditor.ts:252](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L252)

___

### NodeStateJSON

Ƭ **NodeStateJSON**\<`T`\>: `Prettify`\<\{ `$?`: `Prettify`\<`CollectStateJSON`\<`GetNodeStateConfig`\<`T`\>, ``false``\>\>  } & `CollectStateJSON`\<`GetNodeStateConfig`\<`T`\>, ``true``\>\>

The NodeState JSON produced by this LexicalNode

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:151](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L151)

___

### PasteCommandType

Ƭ **PasteCommandType**: `ClipboardEvent` \| `InputEvent` \| `KeyboardEvent`

#### Defined in

[packages/lexical/src/LexicalCommands.ts:15](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L15)

___

### PointCaret

Ƭ **PointCaret**\<`D`\>: [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<[`TextNode`](../classes/lexical.TextNode.md), `D`\> \| [`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<[`LexicalNode`](../classes/lexical.LexicalNode.md), `D`\> \| [`ChildCaret`](../interfaces/lexical.ChildCaret.md)\<[`ElementNode`](../classes/lexical.ElementNode.md), `D`\>

A PointCaret is a NodeCaret that also includes a
TextPointCaret type which refers to a specific offset of a TextNode.
This type is separate because it is not relevant to general node traversal
so it doesn't make sense to have it show up except when defining
a CaretRange and in those cases there will be at most two of them only
at the boundaries.

The addition of TextPointCaret allows this type to represent any location
that is representable by PointType, as the TextPointCaret refers to a
specific offset within a TextNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) = [`CaretDirection`](lexical.md#caretdirection) |

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:166](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L166)

___

### PointType

Ƭ **PointType**: [`TextPoint`](lexical.md#textpoint) \| [`ElementPoint`](lexical.md#elementpoint)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:127](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L127)

___

### RootListener

Ƭ **RootListener**: (`rootElement`: ``null`` \| `HTMLElement`, `prevRootElement`: ``null`` \| `HTMLElement`) => `void`

#### Type declaration

▸ (`rootElement`, `prevRootElement`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `rootElement` | ``null`` \| `HTMLElement` |
| `prevRootElement` | ``null`` \| `HTMLElement` |

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:328](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L328)

___

### RootMode

Ƭ **RootMode**: ``"root"`` \| ``"shadowRoot"``

The RootMode is specified in all caret traversals where the traversal can go up
towards the root. 'root' means that it will stop at the document root,
and 'shadowRoot' will stop at the document root or any shadow root
(per [$isRootOrShadowRoot](lexical.md#$isrootorshadowroot)).

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:39](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L39)

___

### SerializedEditor

Ƭ **SerializedEditor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `editorState` | [`SerializedEditorState`](../interfaces/lexical.SerializedEditorState.md) |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:419](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L419)

___

### SerializedElementNode

Ƭ **SerializedElementNode**\<`T`\>: [`Spread`](lexical.md#spread)\<\{ `children`: `T`[] ; `direction`: ``"ltr"`` \| ``"rtl"`` \| ``null`` ; `format`: [`ElementFormatType`](lexical.md#elementformattype) ; `indent`: `number` ; `textFormat?`: `number` ; `textStyle?`: `string`  }, [`SerializedLexicalNode`](lexical.md#serializedlexicalnode)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SerializedLexicalNode`](lexical.md#serializedlexicalnode) = [`SerializedLexicalNode`](lexical.md#serializedlexicalnode) |

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:54](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L54)

___

### SerializedLexicalNode

Ƭ **SerializedLexicalNode**: `Object`

The base type for all serialized nodes

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `$?` | `Record`\<`string`, `unknown`\> | Any state persisted with the NodeState API that is not configured for flat storage |
| `type` | `string` | The type string used by the Node class |
| `version` | `number` | A numeric version for this schema, defaulting to 1, but not generally recommended for use |

#### Defined in

[packages/lexical/src/LexicalNode.ts:74](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L74)

___

### SerializedLineBreakNode

Ƭ **SerializedLineBreakNode**: [`SerializedLexicalNode`](lexical.md#serializedlexicalnode)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:24](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L24)

___

### SerializedParagraphNode

Ƭ **SerializedParagraphNode**: [`Spread`](lexical.md#spread)\<\{ `textFormat`: `number` ; `textStyle`: `string`  }, [`SerializedElementNode`](lexical.md#serializedelementnode)\>

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:36](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L36)

___

### SerializedRootNode

Ƭ **SerializedRootNode**\<`T`\>: [`SerializedElementNode`](lexical.md#serializedelementnode)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`SerializedLexicalNode`](lexical.md#serializedlexicalnode) = [`SerializedLexicalNode`](lexical.md#serializedlexicalnode) |

#### Defined in

[packages/lexical/src/nodes/LexicalRootNode.ts:20](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalRootNode.ts#L20)

___

### SerializedTabNode

Ƭ **SerializedTabNode**: [`SerializedTextNode`](lexical.md#serializedtextnode)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:24](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L24)

___

### SerializedTextNode

Ƭ **SerializedTextNode**: [`Spread`](lexical.md#spread)\<\{ `detail`: `number` ; `format`: `number` ; `mode`: [`TextModeType`](lexical.md#textmodetype) ; `style`: `string` ; `text`: `string`  }, [`SerializedLexicalNode`](lexical.md#serializedlexicalnode)\>

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:77](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L77)

___

### Spread

Ƭ **Spread**\<`T1`, `T2`\>: `Omit`\<`T2`, keyof `T1`\> & `T1`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Defined in

[packages/lexical/src/LexicalEditor.ts:58](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L58)

___

### StateConfigKey

Ƭ **StateConfigKey**\<`S`\>: `S` extends [`StateConfig`](../classes/lexical.StateConfig.md)\<infer K, infer \_V\> ? `K` : `never`

Get the key type (K) from a StateConfig

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`AnyStateConfig`](lexical.md#anystateconfig) |

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:38](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L38)

___

### StateConfigValue

Ƭ **StateConfigValue**\<`S`\>: `S` extends [`StateConfig`](../classes/lexical.StateConfig.md)\<infer \_K, infer V\> ? `V` : `never`

Get the value type (V) from a StateConfig

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`AnyStateConfig`](lexical.md#anystateconfig) |

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:29](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L29)

___

### StateValueOrUpdater

Ƭ **StateValueOrUpdater**\<`Cfg`\>: [`ValueOrUpdater`](lexical.md#valueorupdater)\<[`StateConfigValue`](lexical.md#stateconfigvalue)\<`Cfg`\>\>

A type alias to make it easier to define setter methods on your node class

**`Example`**

```ts
const fooState = createState("foo", { parse: ... });
class MyClass extends TextNode {
  // ...
  setFoo(valueOrUpdater: StateValueOrUpdater<typeof fooState>): this {
    return $setState(this, fooState, valueOrUpdater);
  }
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Cfg` | extends [`AnyStateConfig`](lexical.md#anystateconfig) |

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:65](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L65)

___

### StaticNodeConfig

Ƭ **StaticNodeConfig**\<`T`, `Type`\>: [`BaseStaticNodeConfig`](lexical.md#basestaticnodeconfig) & \{ readonly [K in Type]?: StaticNodeConfigValue\<T, Type\> }

Used to extract the node and type from a StaticNodeConfigRecord

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `Type` | extends `string` |

#### Defined in

[packages/lexical/src/LexicalNode.ts:177](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L177)

___

### TextFormatType

Ƭ **TextFormatType**: ``"bold"`` \| ``"underline"`` \| ``"strikethrough"`` \| ``"italic"`` \| ``"highlight"`` \| ``"code"`` \| ``"subscript"`` \| ``"superscript"`` \| ``"lowercase"`` \| ``"uppercase"`` \| ``"capitalize"``

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:90](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L90)

___

### TextModeType

Ƭ **TextModeType**: ``"normal"`` \| ``"token"`` \| ``"segmented"``

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:103](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L103)

___

### TextPoint

Ƭ **TextPoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_selection` | [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |
| `getNode` | () => [`TextNode`](../classes/lexical.TextNode.md) |
| `is` | (`point`: [`PointType`](lexical.md#pointtype)) => `boolean` |
| `isBefore` | (`point`: [`PointType`](lexical.md#pointtype)) => `boolean` |
| `key` | [`NodeKey`](lexical.md#nodekey) |
| `offset` | `number` |
| `set` | (`key`: [`NodeKey`](lexical.md#nodekey), `offset`: `number`, `type`: ``"text"`` \| ``"element"``, `onlyIfChanged?`: `boolean`) => `void` |
| `type` | ``"text"`` |

#### Defined in

[packages/lexical/src/LexicalSelection.ts:95](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L95)

___

### TextPointCaretSliceTuple

Ƭ **TextPointCaretSliceTuple**\<`D`\>: readonly [anchorSlice: null \| TextPointCaretSlice\<TextNode, D\>, focusSlice: null \| TextPointCaretSlice\<TextNode, D\>]

A utility type to specify that a CaretRange may have zero,
one, or two associated TextPointCaretSlice. If the anchor
and focus are on the same node, the anchorSlice will contain
the slice and focusSlie will be null.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:371](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L371)

___

### Transform

Ƭ **Transform**\<`T`\>: (`node`: `T`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Type declaration

▸ (`node`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:244](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L244)

___

### UpdateListener

Ƭ **UpdateListener**: (`payload`: [`UpdateListenerPayload`](../interfaces/lexical.UpdateListenerPayload.md)) => `void`

A listener that gets called after the editor is updated

#### Type declaration

▸ (`payload`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`UpdateListenerPayload`](../interfaces/lexical.UpdateListenerPayload.md) |

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:322](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L322)

___

### UpdateTag

Ƭ **UpdateTag**: typeof [`COLLABORATION_TAG`](lexical.md#collaboration_tag) \| typeof `FOCUS_TAG` \| typeof [`HISTORIC_TAG`](lexical.md#historic_tag) \| typeof [`HISTORY_MERGE_TAG`](lexical.md#history_merge_tag) \| typeof [`HISTORY_PUSH_TAG`](lexical.md#history_push_tag) \| typeof [`PASTE_TAG`](lexical.md#paste_tag) \| typeof [`SKIP_COLLAB_TAG`](lexical.md#skip_collab_tag) \| typeof [`SKIP_DOM_SELECTION_TAG`](lexical.md#skip_dom_selection_tag) \| typeof [`SKIP_SCROLL_INTO_VIEW_TAG`](lexical.md#skip_scroll_into_view_tag) \| `string` & {}

The set of known update tags to help with TypeScript suggestions.

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:63](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L63)

___

### ValueOrUpdater

Ƭ **ValueOrUpdater**\<`V`\>: `V` \| (`prevValue`: `V`) => `V`

A value type, or an updater for that value type. For use with
[$setState](lexical.md#$setstate) or any user-defined wrappers around it.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:49](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L49)

## Variables

### BLUR\_COMMAND

• `Const` **BLUR\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`FocusEvent`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:212](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L212)

___

### CAN\_REDO\_COMMAND

• `Const` **CAN\_REDO\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`boolean`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:206](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L206)

___

### CAN\_UNDO\_COMMAND

• `Const` **CAN\_UNDO\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`boolean`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:208](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L208)

___

### CLEAR\_EDITOR\_COMMAND

• `Const` **CLEAR\_EDITOR\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:200](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L200)

___

### CLEAR\_HISTORY\_COMMAND

• `Const` **CLEAR\_HISTORY\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:203](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L203)

___

### CLICK\_COMMAND

• `Const` **CLICK\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`MouseEvent`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:28](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L28)

___

### COLLABORATION\_TAG

• `Const` **COLLABORATION\_TAG**: ``"collaboration"``

Indicates that the update is related to collaborative editing

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:37](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L37)

___

### COMMAND\_PRIORITY\_CRITICAL

• `Const` **COMMAND\_PRIORITY\_CRITICAL**: ``4``

#### Defined in

[packages/lexical/src/LexicalEditor.ts:354](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L354)

___

### COMMAND\_PRIORITY\_EDITOR

• `Const` **COMMAND\_PRIORITY\_EDITOR**: ``0``

#### Defined in

[packages/lexical/src/LexicalEditor.ts:350](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L350)

___

### COMMAND\_PRIORITY\_HIGH

• `Const` **COMMAND\_PRIORITY\_HIGH**: ``3``

#### Defined in

[packages/lexical/src/LexicalEditor.ts:353](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L353)

___

### COMMAND\_PRIORITY\_LOW

• `Const` **COMMAND\_PRIORITY\_LOW**: ``1``

#### Defined in

[packages/lexical/src/LexicalEditor.ts:351](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L351)

___

### COMMAND\_PRIORITY\_NORMAL

• `Const` **COMMAND\_PRIORITY\_NORMAL**: ``2``

#### Defined in

[packages/lexical/src/LexicalEditor.ts:352](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L352)

___

### CONTROLLED\_TEXT\_INSERTION\_COMMAND

• `Const` **CONTROLLED\_TEXT\_INSERTION\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`InputEvent` \| `string`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:49](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L49)

___

### COPY\_COMMAND

• `Const` **COPY\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`ClipboardEvent` \| `KeyboardEvent` \| ``null``\>

Dispatched on a copy event, either via the clipboard or a KeyboardEvent
(Cmd+C on macOS, Ctrl+C elsewhere).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:184](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L184)

___

### CUT\_COMMAND

• `Const` **CUT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`ClipboardEvent` \| `KeyboardEvent` \| ``null``\>

Dispatched on a cut event, either via the clipboard or a KeyboardEvent
(Cmd+X on macOS, Ctrl+X elsewhere).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:191](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L191)

___

### DELETE\_CHARACTER\_COMMAND

• `Const` **DELETE\_CHARACTER\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`boolean`\>

Dispatched to delete a character, the payload will be `true` if the deletion
is backwards (backspace or delete on macOS) and `false` if forwards
(delete or Fn+Delete on macOS).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:35](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L35)

___

### DELETE\_LINE\_COMMAND

• `Const` **DELETE\_LINE\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`boolean`\>

Dispatched to delete a line, the payload will be `true` if the deletion is
backwards (Cmd+Delete on macOS), and `false` if forwards
(Fn+Cmd+Delete on macOS).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:69](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L69)

___

### DELETE\_WORD\_COMMAND

• `Const` **DELETE\_WORD\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`boolean`\>

Dispatched to delete a word, the payload will be `true` if the deletion is
backwards (Ctrl+Backspace or Opt+Delete on macOS), and `false` if
forwards (Ctrl+Delete or Fn+Opt+Delete on macOS).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:61](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L61)

___

### DRAGEND\_COMMAND

• `Const` **DRAGEND\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`DragEvent`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:178](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L178)

___

### DRAGOVER\_COMMAND

• `Const` **DRAGOVER\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`DragEvent`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:176](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L176)

___

### DRAGSTART\_COMMAND

• `Const` **DRAGSTART\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`DragEvent`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:174](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L174)

___

### DROP\_COMMAND

• `Const` **DROP\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`DragEvent`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:170](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L170)

___

### FOCUS\_COMMAND

• `Const` **FOCUS\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`FocusEvent`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:210](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L210)

___

### FORMAT\_ELEMENT\_COMMAND

• `Const` **FORMAT\_ELEMENT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<[`ElementFormatType`](lexical.md#elementformattype)\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:172](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L172)

___

### FORMAT\_TEXT\_COMMAND

• `Const` **FORMAT\_TEXT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<[`TextFormatType`](lexical.md#textformattype)\>

Dispatched to format the selected text.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:75](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L75)

___

### HISTORIC\_TAG

• `Const` **HISTORIC\_TAG**: ``"historic"``

Indicates that the update is related to history operations (undo/redo)

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:17](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L17)

___

### HISTORY\_MERGE\_TAG

• `Const` **HISTORY\_MERGE\_TAG**: ``"history-merge"``

Indicates that the current update should be merged with the previous history entry

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:27](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L27)

___

### HISTORY\_PUSH\_TAG

• `Const` **HISTORY\_PUSH\_TAG**: ``"history-push"``

Indicates that a new history entry should be pushed to the history stack

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:22](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L22)

___

### INDENT\_CONTENT\_COMMAND

• `Const` **INDENT\_CONTENT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:164](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L164)

___

### INSERT\_LINE\_BREAK\_COMMAND

• `Const` **INSERT\_LINE\_BREAK\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`boolean`\>

Dispatched to insert a line break. With a false payload the
cursor moves to the new line (Shift+Enter), with a true payload the cursor
does not move (Ctrl+O on macOS).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:43](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L43)

___

### INSERT\_PARAGRAPH\_COMMAND

• `Const` **INSERT\_PARAGRAPH\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:46](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L46)

___

### INSERT\_TAB\_COMMAND

• `Const` **INSERT\_TAB\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:162](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L162)

___

### IS\_ALL\_FORMATTING

• `Const` **IS\_ALL\_FORMATTING**: `number`

#### Defined in

[packages/lexical/src/LexicalConstants.ts:53](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L53)

___

### IS\_BOLD

• `Const` **IS\_BOLD**: ``1``

#### Defined in

[packages/lexical/src/LexicalConstants.ts:41](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L41)

___

### IS\_CODE

• `Const` **IS\_CODE**: `number`

#### Defined in

[packages/lexical/src/LexicalConstants.ts:45](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L45)

___

### IS\_HIGHLIGHT

• `Const` **IS\_HIGHLIGHT**: `number`

#### Defined in

[packages/lexical/src/LexicalConstants.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L48)

___

### IS\_ITALIC

• `Const` **IS\_ITALIC**: `number`

#### Defined in

[packages/lexical/src/LexicalConstants.ts:42](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L42)

___

### IS\_STRIKETHROUGH

• `Const` **IS\_STRIKETHROUGH**: `number`

#### Defined in

[packages/lexical/src/LexicalConstants.ts:43](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L43)

___

### IS\_SUBSCRIPT

• `Const` **IS\_SUBSCRIPT**: `number`

#### Defined in

[packages/lexical/src/LexicalConstants.ts:46](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L46)

___

### IS\_SUPERSCRIPT

• `Const` **IS\_SUPERSCRIPT**: `number`

#### Defined in

[packages/lexical/src/LexicalConstants.ts:47](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L47)

___

### IS\_UNDERLINE

• `Const` **IS\_UNDERLINE**: `number`

#### Defined in

[packages/lexical/src/LexicalConstants.ts:44](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L44)

___

### KEY\_ARROW\_DOWN\_COMMAND

• `Const` **KEY\_ARROW\_DOWN\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched when the `'ArrowUp'` key is pressed.
The shift and/or alt (option) modifier keys may also be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:124](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L124)

___

### KEY\_ARROW\_LEFT\_COMMAND

• `Const` **KEY\_ARROW\_LEFT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched when the `'ArrowLeft'` key is pressed.
The shift modifier key may also be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:106](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L106)

___

### KEY\_ARROW\_RIGHT\_COMMAND

• `Const` **KEY\_ARROW\_RIGHT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched when the `'ArrowRight'` key is pressed.
The shift modifier key may also be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:94](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L94)

___

### KEY\_ARROW\_UP\_COMMAND

• `Const` **KEY\_ARROW\_UP\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched when the `'ArrowUp'` key is pressed.
The shift and/or alt (option) modifier keys may also be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:118](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L118)

___

### KEY\_BACKSPACE\_COMMAND

• `Const` **KEY\_BACKSPACE\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched whenever the `'Backspace'` key is pressed, the shift
modifier key may be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:143](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L143)

___

### KEY\_DELETE\_COMMAND

• `Const` **KEY\_DELETE\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched whenever the `'Delete'` key is pressed (Fn+Delete on macOS).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:154](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L154)

___

### KEY\_DOWN\_COMMAND

• `Const` **KEY\_DOWN\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched when any key is pressed.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:88](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L88)

___

### KEY\_ENTER\_COMMAND

• `Const` **KEY\_ENTER\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent` \| ``null``\>

Dispatched when the enter key is pressed, may also be called with a null
payload when the intent is to insert a newline. The shift modifier key
must be down, any other modifier keys may also be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:131](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L131)

___

### KEY\_ESCAPE\_COMMAND

• `Const` **KEY\_ESCAPE\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched whenever the `'Escape'` key is pressed, any modifier
keys may be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:149](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L149)

___

### KEY\_MODIFIER\_COMMAND

• `Const` **KEY\_MODIFIER\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

**`Deprecated`**

in v0.31.0, use KEY_DOWN_COMMAND and check for modifiers
directly.

Dispatched after any KeyboardEvent when modifiers are pressed

#### Defined in

[packages/lexical/src/LexicalCommands.ts:220](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L220)

___

### KEY\_SPACE\_COMMAND

• `Const` **KEY\_SPACE\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched whenever the space (`' '`) key is pressed, any modifier
keys may be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:137](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L137)

___

### KEY\_TAB\_COMMAND

• `Const` **KEY\_TAB\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched whenever the `'Tab'` key is pressed. The shift modifier key
may be down.

#### Defined in

[packages/lexical/src/LexicalCommands.ts:160](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L160)

___

### MOVE\_TO\_END

• `Const` **MOVE\_TO\_END**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched when the move to end keyboard shortcut is pressed,
(Cmd+Right on macOS; Ctrl+Right elsewhere).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:100](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L100)

___

### MOVE\_TO\_START

• `Const` **MOVE\_TO\_START**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched when the move to start keyboard shortcut is pressed,
(Cmd+Left on macOS; Ctrl+Left elsewhere).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:112](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L112)

___

### NODE\_STATE\_KEY

• `Const` **NODE\_STATE\_KEY**: ``"$"``

#### Defined in

[packages/lexical/src/LexicalConstants.ts:158](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L158)

___

### OUTDENT\_CONTENT\_COMMAND

• `Const` **OUTDENT\_CONTENT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:167](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L167)

___

### PASTE\_COMMAND

• `Const` **PASTE\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<[`PasteCommandType`](lexical.md#pastecommandtype)\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:52](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L52)

___

### PASTE\_TAG

• `Const` **PASTE\_TAG**: ``"paste"``

Indicates that the update is related to a paste operation

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:32](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L32)

___

### REDO\_COMMAND

• `Const` **REDO\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

Dispatched on redo (Shift+Cmd+Z on macOS, Shift+Ctrl+Z or Ctrl+Y elsewhere).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:84](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L84)

___

### REMOVE\_TEXT\_COMMAND

• `Const` **REMOVE\_TEXT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`InputEvent` \| ``null``\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:54](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L54)

___

### SELECTION\_CHANGE\_COMMAND

• `Const` **SELECTION\_CHANGE\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:21](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L21)

___

### SELECTION\_INSERT\_CLIPBOARD\_NODES\_COMMAND

• `Const` **SELECTION\_INSERT\_CLIPBOARD\_NODES\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<\{ `nodes`: [`LexicalNode`](../classes/lexical.LexicalNode.md)[] ; `selection`: [`BaseSelection`](../interfaces/lexical.BaseSelection.md)  }\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:24](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L24)

___

### SELECT\_ALL\_COMMAND

• `Const` **SELECT\_ALL\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`KeyboardEvent`\>

Dispatched on the select all keyboard shortcut
(Cmd+A on macOS, Ctrl+A elsehwere).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:198](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L198)

___

### SKIP\_COLLAB\_TAG

• `Const` **SKIP\_COLLAB\_TAG**: ``"skip-collab"``

Indicates that the update should skip collaborative sync

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:42](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L42)

___

### SKIP\_DOM\_SELECTION\_TAG

• `Const` **SKIP\_DOM\_SELECTION\_TAG**: ``"skip-dom-selection"``

Indicates that the update should skip updating the DOM selection
This is useful when you want to make updates without changing the selection or focus

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:53](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L53)

___

### SKIP\_SCROLL\_INTO\_VIEW\_TAG

• `Const` **SKIP\_SCROLL\_INTO\_VIEW\_TAG**: ``"skip-scroll-into-view"``

Indicates that the update should skip scrolling the selection into view

#### Defined in

[packages/lexical/src/LexicalUpdateTags.ts:47](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdateTags.ts#L47)

___

### TEXT\_TYPE\_TO\_FORMAT

• `Const` **TEXT\_TYPE\_TO\_FORMAT**: `Record`\<[`TextFormatType`](lexical.md#textformattype) \| `string`, `number`\>

#### Defined in

[packages/lexical/src/LexicalConstants.ts:106](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalConstants.ts#L106)

___

### UNDO\_COMMAND

• `Const` **UNDO\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`void`\>

Dispatched on undo (Cmd+Z on macOS, Ctrl+Z elsewhere).

#### Defined in

[packages/lexical/src/LexicalCommands.ts:80](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L80)

## Functions

### $addUpdateTag

▸ **$addUpdateTag**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`UpdateTag`](lexical.md#updatetag) |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1405](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1405)

___

### $applyNodeReplacement

▸ **$applyNodeReplacement**\<`N`\>(`node`): `N`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `N` |

#### Returns

`N`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1520](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1520)

___

### $caretFromPoint

▸ **$caretFromPoint**\<`D`\>(`point`, `direction`): [`PointCaret`](lexical.md#pointcaret)\<`D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Pick`\<[`PointType`](lexical.md#pointtype), ``"type"`` \| ``"key"`` \| ``"offset"``\> |
| `direction` | `D` |

#### Returns

[`PointCaret`](lexical.md#pointcaret)\<`D`\>

a PointCaret for the point

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:61](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L61)

___

### $caretRangeFromSelection

▸ **$caretRangeFromSelection**(`selection`): [`CaretRange`](../interfaces/lexical.CaretRange.md)

Get a pair of carets for a RangeSelection.

If the focus is before the anchor, then the direction will be
'previous', otherwise the direction will be 'next'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | [`RangeSelection`](../classes/lexical.RangeSelection.md) |

#### Returns

[`CaretRange`](../interfaces/lexical.CaretRange.md)

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:156](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L156)

___

### $cloneWithProperties

▸ **$cloneWithProperties**\<`T`\>(`latestNode`): `T`

Returns a clone of a node using `node.constructor.clone()` followed by
`clone.afterCloneFrom(node)`. The resulting clone must have the same key,
parent/next/prev pointers, and other properties that are not set by
`node.constructor.clone` (format, style, etc.). This is primarily used by
[LexicalNode.getWritable](../classes/lexical.LexicalNode.md#getwritable) to create a writable version of an
existing node. The clone is the same logical node as the original node,
do not try and use this function to duplicate or copy an existing node.

Does not mutate the EditorState.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `latestNode` | `T` | The node to be cloned. |

#### Returns

`T`

The clone of the node.

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1958](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1958)

___

### $comparePointCaretNext

▸ **$comparePointCaretNext**(`a`, `b`): ``-1`` \| ``0`` \| ``1``

A total ordering for `PointCaret<'next'>`, based on
the same order that a [CaretRange](../interfaces/lexical.CaretRange.md) would iterate
them.

For a given origin node:
- ChildCaret comes before SiblingCaret
- TextPointCaret comes before SiblingCaret

An exception is thrown when a and b do not have any
common ancestor.

This ordering is a sort of mix of pre-order and post-order
because each ElementNode will show up as a ChildCaret
on 'enter' (pre-order) and a SiblingCaret on 'leave' (post-order).

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PointCaret`](lexical.md#pointcaret)\<``"next"``\> |
| `b` | [`PointCaret`](lexical.md#pointcaret)\<``"next"``\> |

#### Returns

``-1`` \| ``0`` \| ``1``

-1 if a comes before b, 0 if a and b are the same, or 1 if a comes after b

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1229](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1229)

___

### $copyNode

▸ **$copyNode**\<`T`\>(`node`): `T`

Returns a shallow clone of node with a new key. All properties of the node
will be copied to the new node (by `clone` and then `afterCloneFrom`),
except those related to parent/sibling/child
relationships in the `EditorState`. This means that the copy must be
separately added to the document, and it will not have any children.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `T` | The node to be copied. |

#### Returns

`T`

The copy of the node.

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1513](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1513)

___

### $create

▸ **$create**\<`T`\>(`klass`): `T`

Create an node from its class.

Note that this will directly construct the final `withKlass` node type,
and will ignore the deprecated `with` functions. This allows `$create` to
skip any intermediate steps where the replaced node would be created and
then immediately discarded (once per configured replacement of that node).

This does not support any arguments to the constructor.
Setters can be used to initialize your node, and they can
be chained. You can of course write your own mutliple-argument functions
to wrap that.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `klass` | [`Klass`](lexical.md#klass)\<`T`\> |

#### Returns

`T`

**`Example`**

```ts
function $createTokenText(text: string): TextNode {
  return $create(TextNode).setTextContent(text).setMode('token');
}
```

#### Defined in

[packages/lexical/src/LexicalUtils.ts:2136](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L2136)

___

### $createLineBreakNode

▸ **$createLineBreakNode**(): [`LineBreakNode`](../classes/lexical.LineBreakNode.md)

#### Returns

[`LineBreakNode`](../classes/lexical.LineBreakNode.md)

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:82](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L82)

___

### $createNodeSelection

▸ **$createNodeSelection**(): [`NodeSelection`](../classes/lexical.NodeSelection.md)

#### Returns

[`NodeSelection`](../classes/lexical.NodeSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:2569](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L2569)

___

### $createParagraphNode

▸ **$createParagraphNode**(): [`ParagraphNode`](../classes/lexical.ParagraphNode.md)

#### Returns

[`ParagraphNode`](../classes/lexical.ParagraphNode.md)

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:167](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L167)

___

### $createPoint

▸ **$createPoint**(`key`, `offset`, `type`): [`PointType`](lexical.md#pointtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `offset` | `number` |
| `type` | ``"text"`` \| ``"element"`` |

#### Returns

[`PointType`](lexical.md#pointtype)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:217](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L217)

___

### $createRangeSelection

▸ **$createRangeSelection**(): [`RangeSelection`](../classes/lexical.RangeSelection.md)

#### Returns

[`RangeSelection`](../classes/lexical.RangeSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:2563](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L2563)

___

### $createRangeSelectionFromDom

▸ **$createRangeSelectionFromDom**(`domSelection`, `editor`): ``null`` \| [`RangeSelection`](../classes/lexical.RangeSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `domSelection` | ``null`` \| `Selection` |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |

#### Returns

``null`` \| [`RangeSelection`](../classes/lexical.RangeSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:2592](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L2592)

___

### $createTabNode

▸ **$createTabNode**(): [`TabNode`](../classes/lexical.TabNode.md)

#### Returns

[`TabNode`](../classes/lexical.TabNode.md)

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:101](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L101)

___

### $createTextNode

▸ **$createTextNode**(`text?`): [`TextNode`](../classes/lexical.TextNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `''` |

#### Returns

[`TextNode`](../classes/lexical.TextNode.md)

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:1374](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L1374)

___

### $extendCaretToRange

▸ **$extendCaretToRange**\<`D`\>(`anchor`): [`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

Construct a CaretRange that starts at anchor and goes to the end of the
document in the anchor caret's direction.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`PointCaret`](lexical.md#pointcaret)\<`D`\> |

#### Returns

[`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1127](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1127)

___

### $getAdjacentChildCaret

▸ **$getAdjacentChildCaret**\<`D`\>(`caret`): ``null`` \| [`NodeCaret`](lexical.md#nodecaret)\<`D`\>

Gets the adjacent caret, if not-null and if the origin of the adjacent caret is an ElementNode, then return
the ChildCaret. This can be used along with the getParentAdjacentCaret method to perform a full DFS
style traversal of the tree.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caret` | ``null`` \| [`NodeCaret`](lexical.md#nodecaret)\<`D`\> | The caret to start at |

#### Returns

``null`` \| [`NodeCaret`](lexical.md#nodecaret)\<`D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:977](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L977)

___

### $getAdjacentNode

▸ **$getAdjacentNode**(`focus`, `isBackward`): ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `focus` | [`PointType`](lexical.md#pointtype) |
| `isBackward` | `boolean` |

#### Returns

``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md)

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1259](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1259)

___

### $getAdjacentSiblingOrParentSiblingCaret

▸ **$getAdjacentSiblingOrParentSiblingCaret**\<`D`\>(`startCaret`, `rootMode?`): ``null`` \| [[`NodeCaret`](lexical.md#nodecaret)\<`D`\>, `number`]

Returns the Node sibling when this exists, otherwise the closest parent sibling. For example
R -> P -> T1, T2
  -> P2
returns T2 for node T1, P2 for node T2, and null for node P2.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `startCaret` | [`NodeCaret`](lexical.md#nodecaret)\<`D`\> | `undefined` | The initial caret |
| `rootMode` | [`RootMode`](lexical.md#rootmode) | `'root'` | The root mode, 'root' ('default') or 'shadowRoot' |

#### Returns

``null`` \| [[`NodeCaret`](lexical.md#nodecaret)\<`D`\>, `number`]

An array (tuple) containing the found caret and the depth difference, or null, if this node doesn't exist.

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:596](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L596)

___

### $getCaretInDirection

▸ **$getCaretInDirection**\<`Caret`, `D`\>(`caret`, `direction`): [`NodeCaret`](lexical.md#nodecaret)\<`D`\> \| `Caret` extends [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<[`TextNode`](../classes/lexical.TextNode.md), [`CaretDirection`](lexical.md#caretdirection)\> ? [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<[`TextNode`](../classes/lexical.TextNode.md), `D`\> : `never`

Return the caret if it's in the given direction, otherwise return
caret.getFlipped().

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Caret` | extends [`PointCaret`](lexical.md#pointcaret)\<[`CaretDirection`](lexical.md#caretdirection)\> |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caret` | `Caret` | Any PointCaret |
| `direction` | `D` | The desired direction |

#### Returns

[`NodeCaret`](lexical.md#nodecaret)\<`D`\> \| `Caret` extends [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<[`TextNode`](../classes/lexical.TextNode.md), [`CaretDirection`](lexical.md#caretdirection)\> ? [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<[`TextNode`](../classes/lexical.TextNode.md), `D`\> : `never`

A PointCaret in direction

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:519](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L519)

___

### $getCaretRange

▸ **$getCaretRange**\<`D`\>(`anchor`, `focus`): [`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

Construct a CaretRange from anchor and focus carets pointing in the
same direction. In order to get the expected behavior,
the anchor must point towards the focus or be the same point.

In the 'next' direction the anchor should be at or before the
focus in the document. In the 'previous' direction the anchor
should be at or after the focus in the document
(similar to a backwards RangeSelection).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`PointCaret`](lexical.md#pointcaret)\<`D`\> |
| `focus` | [`PointCaret`](lexical.md#pointcaret)\<`D`\> |

#### Returns

[`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

a CaretRange

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1156](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1156)

___

### $getCaretRangeInDirection

▸ **$getCaretRangeInDirection**\<`D`\>(`range`, `direction`): [`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

Return the range if it's in the given direction, otherwise
construct a new range using a flipped focus as the anchor
and a flipped anchor as the focus. This transformation
preserves the section of the document that it's working
with, but reverses the order of iteration.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `range` | [`CaretRange`](../interfaces/lexical.CaretRange.md)\<[`CaretDirection`](lexical.md#caretdirection)\> | Any CaretRange |
| `direction` | `D` | The desired direction |

#### Returns

[`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

A CaretRange in direction

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:548](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L548)

___

### $getCharacterOffsets

▸ **$getCharacterOffsets**(`selection`): [`number`, `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |

#### Returns

[`number`, `number`]

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1962](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1962)

___

### $getChildCaret

▸ **$getChildCaret**\<`T`, `D`\>(`origin`, `direction`): [`ChildCaret`](../interfaces/lexical.ChildCaret.md)\<`T`, `D`\>

Get a caret that points at the first or last child of the given origin node,
which must be an ElementNode.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ElementNode`](../classes/lexical.ElementNode.md) |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | `T` | The origin ElementNode |
| `direction` | `D` | 'next' for first child or 'previous' for last child |

#### Returns

[`ChildCaret`](../interfaces/lexical.ChildCaret.md)\<`T`, `D`\>

null if origin is null or not an ElementNode, otherwise a ChildCaret for this origin and direction

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:950](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L950)

___

### $getChildCaretAtIndex

▸ **$getChildCaretAtIndex**\<`D`\>(`parent`, `index`, `direction`): [`NodeCaret`](lexical.md#nodecaret)\<`D`\>

Get a caret pointing at the child at the given index, or the last
caret in that node if out of bounds.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | [`ElementNode`](../classes/lexical.ElementNode.md) | An ElementNode |
| `index` | `number` | The index of the origin for the caret |
| `direction` | `D` | - |

#### Returns

[`NodeCaret`](lexical.md#nodecaret)\<`D`\>

A caret pointing towards the node at that index

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:570](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L570)

___

### $getChildCaretOrSelf

▸ **$getChildCaretOrSelf**\<`Caret`\>(`caret`): `Caret` \| [`ChildCaret`](../interfaces/lexical.ChildCaret.md)\<[`ElementNode`](../classes/lexical.ElementNode.md), `NonNullable`\<`Caret`\>[``"direction"``]\>

Gets the ChildCaret if one is possible at this caret origin, otherwise return the caret

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Caret` | extends ``null`` \| [`PointCaret`](lexical.md#pointcaret)\<[`CaretDirection`](lexical.md#caretdirection)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `caret` | `Caret` |

#### Returns

`Caret` \| [`ChildCaret`](../interfaces/lexical.ChildCaret.md)\<[`ElementNode`](../classes/lexical.ElementNode.md), `NonNullable`\<`Caret`\>[``"direction"``]\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:964](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L964)

___

### $getCollapsedCaretRange

▸ **$getCollapsedCaretRange**\<`D`\>(`anchor`): [`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

Construct a collapsed CaretRange that starts and ends at anchor.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | [`PointCaret`](lexical.md#pointcaret)\<`D`\> |

#### Returns

[`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1136](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1136)

___

### $getCommonAncestor

▸ **$getCommonAncestor**\<`A`, `B`\>(`a`, `b`): ``null`` \| [`CommonAncestorResult`](lexical.md#commonancestorresult)\<`A`, `B`\>

Find a common ancestor of a and b and return a detailed result object,
or null if there is no common ancestor between the two nodes.

The result object will have a commonAncestor property, and the other
properties can be used to quickly compare these positions in the tree.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `B` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `A` | A LexicalNode |
| `b` | `B` | A LexicalNode |

#### Returns

``null`` \| [`CommonAncestorResult`](lexical.md#commonancestorresult)\<`A`, `B`\>

A comparison result between the two nodes or null if they have no common ancestor

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1367](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1367)

___

### $getCommonAncestorResultBranchOrder

▸ **$getCommonAncestorResultBranchOrder**\<`A`, `B`\>(`compare`): ``-1`` \| ``1``

Return the ordering of siblings in a CommonAncestorResultBranch

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `B` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `compare` | [`CommonAncestorResultBranch`](../interfaces/lexical.CommonAncestorResultBranch.md)\<`A`, `B`\> |

#### Returns

``-1`` \| ``1``

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1272](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1272)

___

### $getEditor

▸ **$getEditor**(): [`LexicalEditor`](../classes/lexical.LexicalEditor.md)

Utility function for accessing current active editor instance.

#### Returns

[`LexicalEditor`](../classes/lexical.LexicalEditor.md)

Current active editor

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1895](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1895)

___

### $getNearestNodeFromDOMNode

▸ **$getNearestNodeFromDOMNode**(`startingDOM`, `editorState?`): [`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `startingDOM` | `Node` |
| `editorState?` | [`EditorState`](../classes/lexical.EditorState.md) |

#### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md) \| ``null``

#### Defined in

[packages/lexical/src/LexicalUtils.ts:547](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L547)

___

### $getNearestRootOrShadowRoot

▸ **$getNearestRootOrShadowRoot**(`node`): [`RootNode`](../classes/lexical.RootNode.md) \| [`ElementNode`](../classes/lexical.ElementNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

[`RootNode`](../classes/lexical.RootNode.md) \| [`ElementNode`](../classes/lexical.ElementNode.md)

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1477](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1477)

___

### $getNodeByKey

▸ **$getNodeByKey**\<`T`\>(`key`, `_editorState?`): `T` \| ``null``

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `_editorState?` | [`EditorState`](../classes/lexical.EditorState.md) |

#### Returns

`T` \| ``null``

#### Defined in

[packages/lexical/src/LexicalUtils.ts:506](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L506)

___

### $getNodeByKeyOrThrow

▸ **$getNodeByKeyOrThrow**\<`N`\>(`key`): `N`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`N`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1586](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1586)

___

### $getPreviousSelection

▸ **$getPreviousSelection**(): ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md)

#### Returns

``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:2725](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L2725)

___

### $getRoot

▸ **$getRoot**(): [`RootNode`](../classes/lexical.RootNode.md)

#### Returns

[`RootNode`](../classes/lexical.RootNode.md)

#### Defined in

[packages/lexical/src/LexicalUtils.ts:615](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L615)

___

### $getSelection

▸ **$getSelection**(): ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md)

#### Returns

``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md)

#### Defined in

[packages/lexical/src/LexicalSelection.ts:2720](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L2720)

___

### $getSiblingCaret

▸ **$getSiblingCaret**\<`T`, `D`\>(`origin`, `direction`): [`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<`T`, `D`\>

Get a caret that points at the next or previous sibling of the given origin node.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | `T` | The origin node |
| `direction` | `D` | 'next' or 'previous' |

#### Returns

[`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<`T`, `D`\>

null if origin is null, otherwise a SiblingCaret for this origin and direction

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:843](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L843)

▸ **$getSiblingCaret**\<`T`, `D`\>(`origin`, `direction`): ``null`` \| [`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<`T`, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | ``null`` \| `T` |
| `direction` | `D` |

#### Returns

``null`` \| [`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<`T`, `D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:847](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L847)

___

### $getState

▸ **$getState**\<`K`, `V`\>(`node`, `stateConfig`, `version?`): `V`

The accessor for working with node state. This will read the value for the
state on the given node, and will return `stateConfig.defaultValue` if the
state has never been set on this node.

The `version` parameter is optional and should generally be `'latest'`,
consistent with the behavior of other node methods and functions,
but for certain use cases such as `updateDOM` you may have a need to
use `'direct'` to read the state from a previous version of the node.

For very advanced use cases, you can expect that 'direct' does not
require an editor state, just like directly accessing other properties
of a node without an accessor (e.g. `textNode.__text`).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) | `undefined` | Any LexicalNode |
| `stateConfig` | [`StateConfig`](../classes/lexical.StateConfig.md)\<`K`, `V`\> | `undefined` | The configuration of the state to read |
| `version` | ``"latest"`` \| ``"direct"`` | `'latest'` | The default value 'latest' will read the latest version of the node state, 'direct' will read the version that is stored on this LexicalNode which not reflect the version used in the current editor state |

#### Returns

`V`

The current value from the state, or the default value provided by the configuration.

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:331](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L331)

___

### $getStateChange

▸ **$getStateChange**\<`T`, `K`, `V`\>(`node`, `prevNode`, `stateConfig`): ``null`` \| [value: V, prevValue: V]

Given two versions of a node and a stateConfig, compare their state values
using `$getState(nodeVersion, stateConfig, 'direct')`.
If the values are equal according to `stateConfig.isEqual`, return `null`,
otherwise return `[value, prevValue]`.

This is useful for implementing updateDOM. Note that the `'direct'`
version argument is used for both nodes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `T` | Any LexicalNode |
| `prevNode` | `T` | A previous version of node |
| `stateConfig` | [`StateConfig`](../classes/lexical.StateConfig.md)\<`K`, `V`\> | The configuration of the state to read |

#### Returns

``null`` \| [value: V, prevValue: V]

`[value, prevValue]` if changed, otherwise `null`

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:359](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L359)

___

### $getTextContent

▸ **$getTextContent**(): `string`

#### Returns

`string`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:3122](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L3122)

___

### $getTextNodeOffset

▸ **$getTextNodeOffset**(`origin`, `offset`, `mode?`): `number`

Get a normalized offset into a TextNode given a numeric offset or a
direction for which end of the string to use. Throws in dev if the offset
is not in the bounds of the text content size.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `origin` | [`TextNode`](../classes/lexical.TextNode.md) | `undefined` | a TextNode |
| `offset` | `number` \| [`CaretDirection`](lexical.md#caretdirection) | `undefined` | An absolute offset into the TextNode string, or a direction for which end to use as the offset |
| `mode` | ``"error"`` \| ``"clamp"`` | `'error'` | If 'error' (the default) out of bounds offsets will be an error in dev. Otherwise it will clamp to a valid offset. |

#### Returns

`number`

An absolute offset into the TextNode string

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:902](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L902)

___

### $getTextPointCaret

▸ **$getTextPointCaret**\<`T`, `D`\>(`origin`, `direction`, `offset`): [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<`T`, `D`\>

Construct a TextPointCaret

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TextNode`](../classes/lexical.TextNode.md) |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `origin` | `T` | The TextNode |
| `direction` | `D` | The direction (next points to the end of the text, previous points to the beginning) |
| `offset` | `number` \| [`CaretDirection`](lexical.md#caretdirection) | The offset into the text in absolute positive string coordinates (0 is the start) |

#### Returns

[`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<`T`, `D`\>

a TextPointCaret

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:866](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L866)

▸ **$getTextPointCaret**\<`T`, `D`\>(`origin`, `direction`, `offset`): ``null`` \| [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<`T`, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TextNode`](../classes/lexical.TextNode.md) |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | ``null`` \| `T` |
| `direction` | `D` |
| `offset` | `number` \| [`CaretDirection`](lexical.md#caretdirection) |

#### Returns

``null`` \| [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<`T`, `D`\>

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:874](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L874)

___

### $getTextPointCaretSlice

▸ **$getTextPointCaretSlice**\<`T`, `D`\>(`caret`, `distance`): [`TextPointCaretSlice`](../interfaces/lexical.TextPointCaretSlice.md)\<`T`, `D`\>

Construct a TextPointCaretSlice given a TextPointCaret and a signed distance. The
distance should be negative to slice text before the caret's offset, and positive
to slice text after the offset. The direction of the caret itself is not
relevant to the string coordinates when working with a TextPointCaretSlice
but mutation operations will preserve the direction.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TextNode`](../classes/lexical.TextNode.md) |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `caret` | [`TextPointCaret`](../interfaces/lexical.TextPointCaret.md)\<`T`, `D`\> |
| `distance` | `number` |

#### Returns

[`TextPointCaretSlice`](../interfaces/lexical.TextPointCaretSlice.md)\<`T`, `D`\>

TextPointCaretSlice

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:935](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L935)

___

### $hasAncestor

▸ **$hasAncestor**(`child`, `targetNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `targetNode` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1443](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1443)

___

### $hasUpdateTag

▸ **$hasUpdateTag**(`tag`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`UpdateTag`](lexical.md#updatetag) |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1400](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1400)

___

### $insertNodes

▸ **$insertNodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`LexicalNode`](../classes/lexical.LexicalNode.md)[] |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalSelection.ts:3113](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L3113)

___

### $isBlockElementNode

▸ **$isBlockElementNode**(`node`): node is ElementNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is ElementNode

#### Defined in

[packages/lexical/src/LexicalSelection.ts:2533](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L2533)

___

### $isChildCaret

▸ **$isChildCaret**\<`D`\>(`caret`): caret is ChildCaret\<ElementNode, D\>

Guard to check if the given argument is specifically a ChildCaret

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `caret` | `undefined` \| ``null`` \| [`PointCaret`](lexical.md#pointcaret)\<`D`\> |

#### Returns

caret is ChildCaret\<ElementNode, D\>

true if caret is a ChildCaret

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:759](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L759)

___

### $isDecoratorNode

▸ **$isDecoratorNode**\<`T`\>(`node`): node is DecoratorNode\<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is DecoratorNode\<T\>

#### Defined in

[packages/lexical/src/nodes/LexicalDecoratorNode.ts:48](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalDecoratorNode.ts#L48)

___

### $isElementNode

▸ **$isElementNode**(`node`): node is ElementNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is ElementNode

#### Defined in

[packages/lexical/src/nodes/LexicalElementNode.ts:993](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalElementNode.ts#L993)

___

### $isExtendableTextPointCaret

▸ **$isExtendableTextPointCaret**\<`D`\>(`caret`): caret is TextPointCaret\<TextNode, D\> & Object

Determine whether the TextPointCaret's offset can be extended further without leaving the TextNode.
Returns false if the given caret is not a TextPointCaret or the offset can not be moved further in
direction.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caret` | [`PointCaret`](lexical.md#pointcaret)\<`D`\> | A PointCaret |

#### Returns

caret is TextPointCaret\<TextNode, D\> & Object

true if caret is a TextPointCaret with an offset that is not at the end of the text given the direction.

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:500](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L500)

___

### $isInlineElementOrDecoratorNode

▸ **$isInlineElementOrDecoratorNode**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1470](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1470)

___

### $isLeafNode

▸ **$isLeafNode**(`node`): node is DecoratorNode\<unknown\> \| TextNode \| LineBreakNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is DecoratorNode\<unknown\> \| TextNode \| LineBreakNode

#### Defined in

[packages/lexical/src/LexicalUtils.ts:295](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L295)

___

### $isLineBreakNode

▸ **$isLineBreakNode**(`node`): node is LineBreakNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is LineBreakNode

#### Defined in

[packages/lexical/src/nodes/LexicalLineBreakNode.ts:86](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalLineBreakNode.ts#L86)

___

### $isNodeCaret

▸ **$isNodeCaret**\<`D`\>(`caret`): caret is PointCaret\<D\>

Guard to check if the given argument is any type of caret

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `caret` | `undefined` \| ``null`` \| [`PointCaret`](lexical.md#pointcaret)\<`D`\> |

#### Returns

caret is PointCaret\<D\>

true if caret is any type of caret

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:735](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L735)

___

### $isNodeSelection

▸ **$isNodeSelection**(`x`): x is NodeSelection

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is NodeSelection

#### Defined in

[packages/lexical/src/LexicalSelection.ts:1946](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L1946)

___

### $isParagraphNode

▸ **$isParagraphNode**(`node`): node is ParagraphNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is ParagraphNode

#### Defined in

[packages/lexical/src/nodes/LexicalParagraphNode.ts:171](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalParagraphNode.ts#L171)

___

### $isRangeSelection

▸ **$isRangeSelection**(`x`): x is RangeSelection

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

x is RangeSelection

#### Defined in

[packages/lexical/src/LexicalSelection.ts:456](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalSelection.ts#L456)

___

### $isRootNode

▸ **$isRootNode**(`node`): node is RootNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) \| [`RootNode`](../classes/lexical.RootNode.md) |

#### Returns

node is RootNode

#### Defined in

[packages/lexical/src/nodes/LexicalRootNode.ts:113](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalRootNode.ts#L113)

___

### $isRootOrShadowRoot

▸ **$isRootOrShadowRoot**(`node`): node is RootNode \| ShadowRootNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is RootNode \| ShadowRootNode

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1497](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1497)

___

### $isSiblingCaret

▸ **$isSiblingCaret**\<`D`\>(`caret`): caret is SiblingCaret\<LexicalNode, D\>

Guard to check if the given argument is specifically a SiblingCaret (or TextPointCaret)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `caret` | `undefined` \| ``null`` \| [`PointCaret`](lexical.md#pointcaret)\<`D`\> |

#### Returns

caret is SiblingCaret\<LexicalNode, D\>

true if caret is a SiblingCaret

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:747](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L747)

___

### $isTabNode

▸ **$isTabNode**(`node`): node is TabNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is TabNode

#### Defined in

[packages/lexical/src/nodes/LexicalTabNode.ts:105](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTabNode.ts#L105)

___

### $isTextNode

▸ **$isTextNode**(`node`): node is TextNode

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `undefined` \| ``null`` \| [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Returns

node is TextNode

#### Defined in

[packages/lexical/src/nodes/LexicalTextNode.ts:1378](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/nodes/LexicalTextNode.ts#L1378)

___

### $isTextPointCaret

▸ **$isTextPointCaret**\<`D`\>(`caret`): caret is TextPointCaret\<TextNode, D\>

Guard to check if the given caret is specifically a TextPointCaret

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caret` | `undefined` \| ``null`` \| [`PointCaret`](lexical.md#pointcaret)\<`D`\> | Any caret |

#### Returns

caret is TextPointCaret\<TextNode, D\>

true if it is a TextPointCaret

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:723](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L723)

___

### $isTextPointCaretSlice

▸ **$isTextPointCaretSlice**\<`D`\>(`caretOrSlice`): caretOrSlice is TextPointCaretSlice\<TextNode, D\>

Guard to check for a TextPointCaretSlice

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caretOrSlice` | `undefined` \| ``null`` \| [`PointCaret`](lexical.md#pointcaret)\<`D`\> \| [`TextPointCaretSlice`](../interfaces/lexical.TextPointCaretSlice.md)\<[`TextNode`](../classes/lexical.TextNode.md), `D`\> | A caret or slice |

#### Returns

caretOrSlice is TextPointCaretSlice\<TextNode, D\>

true if caretOrSlice is a TextPointCaretSlice

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1113](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1113)

___

### $isTokenOrSegmented

▸ **$isTokenOrSegmented**(`node`): `boolean`

Return true if the TextNode is a TabNode, or is in token or segmented mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TextNode`](../classes/lexical.TextNode.md) |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:234](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L234)

___

### $isTokenOrTab

▸ **$isTokenOrTab**(`node`): `boolean`

Return true if the TextNode is a TabNode or is in token mode.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`TextNode`](../classes/lexical.TextNode.md) |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:227](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L227)

___

### $nodesOfType

▸ **$nodesOfType**\<`T`\>(`klass`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `klass` | [`Klass`](lexical.md#klass)\<`T`\> |

#### Returns

`T`[]

**`Deprecated`**

Use [LexicalEditor.registerMutationListener](../classes/lexical.LexicalEditor.md#registermutationlistener) with `skipInitialization: false` instead.

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1216](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1216)

___

### $normalizeCaret

▸ **$normalizeCaret**\<`D`\>(`initialCaret`): [`PointCaret`](lexical.md#pointcaret)\<`D`\>

Normalize a caret to the deepest equivalent PointCaret.
This will return a TextPointCaret with the offset set according
to the direction if given a caret with a TextNode origin
or a caret with an ElementNode origin with the deepest ChildCaret
having an adjacent TextNode.

If given a TextPointCaret, it will be returned, as no normalization
is required when an offset is already present.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialCaret` | [`PointCaret`](lexical.md#pointcaret)\<`D`\> |

#### Returns

[`PointCaret`](lexical.md#pointcaret)\<`D`\>

The normalized PointCaret

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:475](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L475)

___

### $normalizeSelection\_\_EXPERIMENTAL

▸ **$normalizeSelection__EXPERIMENTAL**(`selection`): [`RangeSelection`](../classes/lexical.RangeSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | [`RangeSelection`](../classes/lexical.RangeSelection.md) |

#### Returns

[`RangeSelection`](../classes/lexical.RangeSelection.md)

#### Defined in

[packages/lexical/src/LexicalNormalization.ts:95](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNormalization.ts#L95)

___

### $onUpdate

▸ **$onUpdate**(`updateFn`): `void`

Add a function to run after the current update. This will run after any
`onUpdate` function already supplied to `editor.update()`, as well as any
functions added with previous calls to `$onUpdate`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateFn` | () => `void` | The function to run after the current update. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1418](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1418)

___

### $parseSerializedNode

▸ **$parseSerializedNode**(`serializedNode`): [`LexicalNode`](../classes/lexical.LexicalNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedNode` | [`SerializedLexicalNode`](lexical.md#serializedlexicalnode) |

#### Returns

[`LexicalNode`](../classes/lexical.LexicalNode.md)

#### Defined in

[packages/lexical/src/LexicalUpdates.ts:356](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdates.ts#L356)

___

### $removeTextFromCaretRange

▸ **$removeTextFromCaretRange**\<`D`\>(`initialRange`, `sliceMode?`): [`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

Remove all text and nodes in the given range. If the range spans multiple
blocks then the remaining contents of the later block will be merged with
the earlier block.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `initialRange` | [`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\> | `undefined` | The range to remove text and nodes from |
| `sliceMode` | ``"removeEmptySlices"`` \| ``"preserveEmptyTextSliceCaret"`` | `'removeEmptySlices'` | If 'preserveEmptyTextPointCaret' it will leave an empty TextPointCaret at the anchor for insert if one exists, otherwise empty slices will be removed |

#### Returns

[`CaretRange`](../interfaces/lexical.CaretRange.md)\<`D`\>

The new collapsed range (biased towards the earlier node)

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:232](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L232)

___

### $rewindSiblingCaret

▸ **$rewindSiblingCaret**\<`T`, `D`\>(`caret`): [`NodeCaret`](lexical.md#nodecaret)\<`D`\>

Given a SiblingCaret we can always compute a caret that points to the
origin of that caret in the same direction. The adjacent caret of the
returned caret will be equivalent to the given caret.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `caret` | [`SiblingCaret`](../interfaces/lexical.SiblingCaret.md)\<`T`, `D`\> | The caret to "rewind" |

#### Returns

[`NodeCaret`](lexical.md#nodecaret)\<`D`\>

A new caret (ChildCaret or SiblingCaret) with the same direction

**`Example`**

```ts
siblingCaret.is($rewindSiblingCaret(siblingCaret).getAdjacentCaret())
```

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:183](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L183)

___

### $selectAll

▸ **$selectAll**(`selection?`): [`RangeSelection`](../classes/lexical.RangeSelection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection?` | ``null`` \| [`RangeSelection`](../classes/lexical.RangeSelection.md) |

#### Returns

[`RangeSelection`](../classes/lexical.RangeSelection.md)

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1134](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1134)

___

### $setCompositionKey

▸ **$setCompositionKey**(`compositionKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `compositionKey` | ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:477](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L477)

___

### $setPointFromCaret

▸ **$setPointFromCaret**\<`D`\>(`point`, `caret`): `void`

Update the given point in-place from the PointCaret

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`PointType`](lexical.md#pointtype) | the point to set |
| `caret` | [`PointCaret`](lexical.md#pointcaret)\<`D`\> | the caret to set the point from |

#### Returns

`void`

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:91](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L91)

___

### $setSelection

▸ **$setSelection**(`selection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | ``null`` \| [`BaseSelection`](../interfaces/lexical.BaseSelection.md) |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:623](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L623)

___

### $setSelectionFromCaretRange

▸ **$setSelectionFromCaretRange**(`caretRange`): [`RangeSelection`](../classes/lexical.RangeSelection.md)

Set a RangeSelection on the editor from the given CaretRange

#### Parameters

| Name | Type |
| :------ | :------ |
| `caretRange` | [`CaretRange`](../interfaces/lexical.CaretRange.md)\<[`CaretDirection`](lexical.md#caretdirection)\> |

#### Returns

[`RangeSelection`](../classes/lexical.RangeSelection.md)

The new RangeSelection

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:127](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L127)

___

### $setState

▸ **$setState**\<`Node`, `K`, `V`\>(`node`, `stateConfig`, `valueOrUpdater`): `Node`

Set the state defined by stateConfig on node. Like with `React.useState`
you may directly specify the value or use an updater function that will
be called with the previous value of the state on that node (which will
be the `stateConfig.defaultValue` if not set).

When an updater function is used, the node will only be marked dirty if
`stateConfig.isEqual(prevValue, value)` is false.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Node` | extends [`LexicalNode`](../classes/lexical.LexicalNode.md) |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Node` | The LexicalNode to set the state on |
| `stateConfig` | [`StateConfig`](../classes/lexical.StateConfig.md)\<`K`, `V`\> | The configuration for this state |
| `valueOrUpdater` | [`ValueOrUpdater`](lexical.md#valueorupdater)\<`V`\> | The value or updater function |

#### Returns

`Node`

node

**`Example`**

```ts
const toggle = createState('toggle', {parse: Boolean});
// set it direction
$setState(node, counterState, true);
// use an updater
$setState(node, counterState, (prev) => !prev);
```

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:392](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L392)

___

### $splitAtPointCaretNext

▸ **$splitAtPointCaretNext**(`pointCaret`, `«destructured»?`): ``null`` \| [`NodeCaret`](lexical.md#nodecaret)\<``"next"``\>

Split a node at a PointCaret and return a NodeCaret at that point, or null if the
node can't be split. This is non-recursive and will only perform at most one split.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointCaret` | [`PointCaret`](lexical.md#pointcaret)\<``"next"``\> |
| `«destructured»` | [`SplitAtPointCaretNextOptions`](../interfaces/lexical.SplitAtPointCaretNextOptions.md) |

#### Returns

``null`` \| [`NodeCaret`](lexical.md#nodecaret)\<``"next"``\>

The NodeCaret pointing to the location of the split (or null if a split is not possible)

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:689](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L689)

___

### $splitNode

▸ **$splitNode**(`node`, `offset`): [[`ElementNode`](../classes/lexical.ElementNode.md) \| ``null``, [`ElementNode`](../classes/lexical.ElementNode.md)]

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`ElementNode`](../classes/lexical.ElementNode.md) |
| `offset` | `number` |

#### Returns

[[`ElementNode`](../classes/lexical.ElementNode.md) \| ``null``, [`ElementNode`](../classes/lexical.ElementNode.md)]

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1719](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1719)

___

### $updateRangeSelectionFromCaretRange

▸ **$updateRangeSelectionFromCaretRange**(`selection`, `caretRange`): `void`

Update the points of a RangeSelection based on the given PointCaret.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selection` | [`RangeSelection`](../classes/lexical.RangeSelection.md) |
| `caretRange` | [`CaretRange`](../interfaces/lexical.CaretRange.md)\<[`CaretDirection`](lexical.md#caretdirection)\> |

#### Returns

`void`

#### Defined in

[packages/lexical/src/caret/LexicalCaretUtils.ts:142](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaretUtils.ts#L142)

___

### buildImportMap

▸ **buildImportMap**\<`K`\>(`importMap`): [`DOMConversionMap`](lexical.md#domconversionmap)

An identity function that will infer the type of DOM nodes
based on tag names to make it easier to construct a
DOMConversionMap.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `importMap` | \{ [NodeName in string]: DOMConversionPropByTagName\<NodeName\> } |

#### Returns

[`DOMConversionMap`](lexical.md#domconversionmap)

#### Defined in

[packages/lexical/src/LexicalNode.ts:336](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNode.ts#L336)

___

### createCommand

▸ **createCommand**\<`T`\>(`type?`): [`LexicalCommand`](lexical.md#lexicalcommand)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` |

#### Returns

[`LexicalCommand`](lexical.md#lexicalcommand)\<`T`\>

#### Defined in

[packages/lexical/src/LexicalCommands.ts:17](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalCommands.ts#L17)

___

### createEditor

▸ **createEditor**(`editorConfig?`): [`LexicalEditor`](../classes/lexical.LexicalEditor.md)

Creates a new LexicalEditor attached to a single contentEditable (provided in the config). This is
the lowest-level initialization API for a LexicalEditor. If you're using React or another framework,
consider using the appropriate abstractions, such as LexicalComposer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editorConfig?` | [`CreateEditorArgs`](lexical.md#createeditorargs) | the editor configuration. |

#### Returns

[`LexicalEditor`](../classes/lexical.LexicalEditor.md)

a LexicalEditor instance

#### Defined in

[packages/lexical/src/LexicalEditor.ts:506](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L506)

___

### createState

▸ **createState**\<`K`, `V`\>(`key`, `valueConfig`): [`StateConfig`](../classes/lexical.StateConfig.md)\<`K`, `V`\>

Create a StateConfig for the given string key and StateValueConfig.

The key must be locally unique. In dev you will get a key collision error
when you use two separate StateConfig on the same node with the same key.

The returned StateConfig value should be used with [$getState](lexical.md#$getstate) and
[$setState](lexical.md#$setstate).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to use |
| `valueConfig` | [`StateValueConfig`](../interfaces/lexical.StateValueConfig.md)\<`V`\> | Configuration for the value type |

#### Returns

[`StateConfig`](../classes/lexical.StateConfig.md)\<`K`, `V`\>

a StateConfig

#### Defined in

[packages/lexical/src/LexicalNodeState.ts:305](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalNodeState.ts#L305)

___

### flipDirection

▸ **flipDirection**\<`D`\>(`direction`): [`FlipDirection`](lexical.md#flipdirection)\<`D`\>

Flip a direction ('next' -> 'previous'; 'previous' -> 'next').

Note that TypeScript can't prove that FlipDirection is its own
inverse (but if you have a concrete 'next' or 'previous' it will
simplify accordingly).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`CaretDirection`](lexical.md#caretdirection) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | `D` | A direction |

#### Returns

[`FlipDirection`](lexical.md#flipdirection)\<`D`\>

The opposite direction

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:580](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L580)

___

### getDOMOwnerDocument

▸ **getDOMOwnerDocument**(`target`): `Document` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | ``null`` \| `EventTarget` |

#### Returns

`Document` \| ``null``

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1337](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1337)

___

### getDOMSelection

▸ **getDOMSelection**(`targetWindow`): ``null`` \| `Selection`

Returns the selection for the given window, or the global window if null.
Will return null if CAN_USE_DOM is false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetWindow` | ``null`` \| `Window` | The window to get the selection from |

#### Returns

``null`` \| `Selection`

a Selection or null

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1702](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1702)

___

### getDOMSelectionFromTarget

▸ **getDOMSelectionFromTarget**(`eventTarget`): ``null`` \| `Selection`

Returns the selection for the defaultView of the ownerDocument of given EventTarget.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventTarget` | ``null`` \| `EventTarget` | The node to get the selection from |

#### Returns

``null`` \| `Selection`

a Selection or null

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1712](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1712)

___

### getDOMTextNode

▸ **getDOMTextNode**(`element`): `Text` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | ``null`` \| `Node` |

#### Returns

`Text` \| ``null``

#### Defined in

[packages/lexical/src/LexicalUtils.ts:254](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L254)

___

### getNearestEditorFromDOMNode

▸ **getNearestEditorFromDOMNode**(`node`): [`LexicalEditor`](../classes/lexical.LexicalEditor.md) \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | ``null`` \| `Node` |

#### Returns

[`LexicalEditor`](../classes/lexical.LexicalEditor.md) \| ``null``

#### Defined in

[packages/lexical/src/LexicalUtils.ts:194](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L194)

___

### isBlockDomNode

▸ **isBlockDomNode**(`node`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Node` | the Dom Node to check |

#### Returns

`boolean`

if the Dom Node is a block node

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1839](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1839)

___

### isCurrentlyReadOnlyMode

▸ **isCurrentlyReadOnlyMode**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalUpdates.ts:79](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUpdates.ts#L79)

___

### isDOMDocumentNode

▸ **isDOMDocumentNode**(`node`): node is Document

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `unknown` | The element being tested |

#### Returns

node is Document

Returns true if node is an DOM Document node, false otherwise.

#### Defined in

[packages/lexical/src/LexicalUtils.ts:250](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L250)

___

### isDOMNode

▸ **isDOMNode**(`x`): x is Node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | The element being tested |

#### Returns

x is Node

Returns true if x is a DOM Node, false otherwise.

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1804](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1804)

___

### isDOMTextNode

▸ **isDOMTextNode**(`node`): node is Text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `unknown` | The element being tested |

#### Returns

node is Text

Returns true if node is an DOM Text node, false otherwise.

#### Defined in

[packages/lexical/src/LexicalUtils.ts:242](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L242)

___

### isDocumentFragment

▸ **isDocumentFragment**(`x`): x is DocumentFragment

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | The element being testing |

#### Returns

x is DocumentFragment

Returns true if x is a document fragment, false otherwise.

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1817](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1817)

___

### isExactShortcutMatch

▸ **isExactShortcutMatch**(`event`, `expectedKey`, `mask`): `boolean`

Match a KeyboardEvent with its expected state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `KeyboardEventModifiers` | A KeyboardEvent, or structurally similar object |
| `expectedKey` | `string` | The string to compare with event.key (case insensitive) |
| `mask` | `KeyboardEventModifierMask` | An object specifying the expected state of the modifiers |

#### Returns

`boolean`

true if the event matches

#### Defined in

[packages/lexical/src/LexicalUtils.ts:957](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L957)

___

### isHTMLAnchorElement

▸ **isHTMLAnchorElement**(`x`): x is HTMLAnchorElement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | The element being tested |

#### Returns

x is HTMLAnchorElement

Returns true if x is an HTML anchor tag, false otherwise

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1788](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1788)

___

### isHTMLElement

▸ **isHTMLElement**(`x`): x is HTMLElement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | The element being tested |

#### Returns

x is HTMLElement

Returns true if x is an HTML element, false otherwise.

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1796](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1796)

___

### isInlineDomNode

▸ **isInlineDomNode**(`node`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `Node` | the Dom Node to check |

#### Returns

`boolean`

if the Dom Node is an inline node

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1826](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1826)

___

### isLexicalEditor

▸ **isLexicalEditor**(`editor`): editor is LexicalEditor

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | `unknown` |

#### Returns

editor is LexicalEditor

true if the given argument is a LexicalEditor instance from this build of Lexical

#### Defined in

[packages/lexical/src/LexicalUtils.ts:189](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L189)

___

### isModifierMatch

▸ **isModifierMatch**(`event`, `mask`): `boolean`

Match a KeyboardEvent with its expected modifier state

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `KeyboardEventModifiers` | A KeyboardEvent, or structurally similar object |
| `mask` | `KeyboardEventModifierMask` | An object specifying the expected state of the modifiers |

#### Returns

`boolean`

true if the event matches

#### Defined in

[packages/lexical/src/LexicalUtils.ts:937](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L937)

___

### isSelectionCapturedInDecoratorInput

▸ **isSelectionCapturedInDecoratorInput**(`anchorDOM`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorDOM` | `Node` |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:148](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L148)

___

### isSelectionWithinEditor

▸ **isSelectionWithinEditor**(`editor`, `anchorDOM`, `focusDOM`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `anchorDOM` | ``null`` \| `Node` |
| `focusDOM` | ``null`` \| `Node` |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:165](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L165)

___

### makeStepwiseIterator

▸ **makeStepwiseIterator**\<`State`, `Stop`, `Value`\>(`config`): `IterableIterator`\<`Value`\>

A generalized utility for creating a stepwise iterator
based on:

- an initial state
- a stop guard that returns true if the iteration is over, this
  is typically used to detect a sentinel value such as null or
  undefined from the state but may return true for other conditions
  as well
- a step function that advances the state (this will be called
  after map each time next() is called to prepare the next state)
- a map function that will be called that may transform the state
  before returning it. It will only be called once for each next()
  call when stop(state) === false

#### Type parameters

| Name |
| :------ |
| `State` |
| `Stop` |
| `Value` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`StepwiseIteratorConfig`](../interfaces/lexical.StepwiseIteratorConfig.md)\<`State`, `Stop`, `Value`\> |

#### Returns

`IterableIterator`\<`Value`\>

An IterableIterator

#### Defined in

[packages/lexical/src/caret/LexicalCaret.ts:1185](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/caret/LexicalCaret.ts#L1185)

___

### resetRandomKey

▸ **resetRandomKey**(): `void`

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:102](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L102)

___

### setNodeIndentFromDOM

▸ **setNodeIndentFromDOM**(`elementDom`, `elementNode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementDom` | `HTMLElement` |
| `elementNode` | [`ElementNode`](../classes/lexical.ElementNode.md) |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalUtils.ts:1981](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalUtils.ts#L1981)
