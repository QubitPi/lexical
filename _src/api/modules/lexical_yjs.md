---
id: "lexical_yjs"
title: "Module: @lexical/yjs"
custom_edit_url: null
---

## Interfaces

- [Provider](../interfaces/lexical_yjs.Provider.md)

## Type Aliases

### Binding

Ƭ **Binding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientID` | `number` |
| `collabNodeMap` | `Map`\<[`NodeKey`](lexical.md#nodekey), `CollabElementNode` \| `CollabTextNode` \| `CollabDecoratorNode` \| `CollabLineBreakNode`\> |
| `cursors` | `Map`\<[`ClientID`](lexical_yjs.md#clientid), `Cursor`\> |
| `cursorsContainer` | ``null`` \| `HTMLElement` |
| `doc` | `Doc` |
| `docMap` | `Map`\<`string`, `Doc`\> |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `excludedProperties` | [`ExcludedProperties`](lexical_yjs.md#excludedproperties) |
| `id` | `string` |
| `nodeProperties` | `Map`\<`string`, `string`[]\> |
| `root` | `CollabElementNode` |

#### Defined in

[packages/lexical-yjs/src/Bindings.ts:25](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/Bindings.ts#L25)

___

### ClientID

Ƭ **ClientID**: `number`

#### Defined in

[packages/lexical-yjs/src/Bindings.ts:24](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/Bindings.ts#L24)

___

### Delta

Ƭ **Delta**: [`Operation`](lexical_yjs.md#operation)[]

#### Defined in

[packages/lexical-yjs/src/index.ts:57](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L57)

___

### ExcludedProperties

Ƭ **ExcludedProperties**: `Map`\<[`Klass`](lexical.md#klass)\<[`LexicalNode`](../classes/lexical.LexicalNode.md)\>, `Set`\<`string`\>\>

#### Defined in

[packages/lexical-yjs/src/Bindings.ts:44](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/Bindings.ts#L44)

___

### Operation

Ƭ **Operation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `__type`: `string`  } |
| `attributes.__type` | `string` |
| `insert` | `string` \| `Record`\<`string`, `unknown`\> |

#### Defined in

[packages/lexical-yjs/src/index.ts:51](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L51)

___

### ProviderAwareness

Ƭ **ProviderAwareness**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getLocalState` | () => [`UserState`](lexical_yjs.md#userstate) \| ``null`` |
| `getStates` | () => `Map`\<`number`, [`UserState`](lexical_yjs.md#userstate)\> |
| `off` | (`type`: ``"update"``, `cb`: () => `void`) => `void` |
| `on` | (`type`: ``"update"``, `cb`: () => `void`) => `void` |
| `setLocalState` | (`arg0`: [`UserState`](lexical_yjs.md#userstate)) => `void` |
| `setLocalStateField` | (`field`: `string`, `value`: `unknown`) => `void` |

#### Defined in

[packages/lexical-yjs/src/index.ts:30](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L30)

___

### SyncCursorPositionsFn

Ƭ **SyncCursorPositionsFn**: (`binding`: [`Binding`](lexical_yjs.md#binding), `provider`: [`Provider`](../interfaces/lexical_yjs.Provider.md), `options?`: `SyncCursorPositionsOptions`) => `void`

#### Type declaration

▸ (`binding`, `provider`, `options?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `binding` | [`Binding`](lexical_yjs.md#binding) |
| `provider` | [`Provider`](../interfaces/lexical_yjs.Provider.md) |
| `options?` | `SyncCursorPositionsOptions` |

##### Returns

`void`

#### Defined in

[packages/lexical-yjs/src/SyncCursors.ts:413](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/SyncCursors.ts#L413)

___

### UserState

Ƭ **UserState**: `Object`

#### Index signature

▪ [key: `string`]: `unknown`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `anchorPos` | ``null`` \| `RelativePosition` |
| `awarenessData` | `object` |
| `color` | `string` |
| `focusPos` | ``null`` \| `RelativePosition` |
| `focusing` | `boolean` |
| `name` | `string` |

#### Defined in

[packages/lexical-yjs/src/index.ts:16](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L16)

___

### YjsEvent

Ƭ **YjsEvent**: `Record`\<`string`, `unknown`\>

#### Defined in

[packages/lexical-yjs/src/index.ts:59](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L59)

___

### YjsNode

Ƭ **YjsNode**: `Record`\<`string`, `unknown`\>

#### Defined in

[packages/lexical-yjs/src/index.ts:58](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L58)

## Variables

### CONNECTED\_COMMAND

• `Const` **CONNECTED\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`boolean`\>

#### Defined in

[packages/lexical-yjs/src/index.ts:25](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L25)

___

### TOGGLE\_CONNECT\_COMMAND

• `Const` **TOGGLE\_CONNECT\_COMMAND**: [`LexicalCommand`](lexical.md#lexicalcommand)\<`boolean`\>

#### Defined in

[packages/lexical-yjs/src/index.ts:27](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L27)

## Functions

### createBinding

▸ **createBinding**(`editor`, `provider`, `id`, `doc`, `docMap`, `excludedProperties?`): [`Binding`](lexical_yjs.md#binding)

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) |
| `provider` | [`Provider`](../interfaces/lexical_yjs.Provider.md) |
| `id` | `string` |
| `doc` | `undefined` \| ``null`` \| `Doc` |
| `docMap` | `Map`\<`string`, `Doc`\> |
| `excludedProperties?` | [`ExcludedProperties`](lexical_yjs.md#excludedproperties) |

#### Returns

[`Binding`](lexical_yjs.md#binding)

#### Defined in

[packages/lexical-yjs/src/Bindings.ts:46](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/Bindings.ts#L46)

___

### createUndoManager

▸ **createUndoManager**(`binding`, `root`): `UndoManager`

#### Parameters

| Name | Type |
| :------ | :------ |
| `binding` | [`Binding`](lexical_yjs.md#binding) |
| `root` | `YXmlText` |

#### Returns

`UndoManager`

#### Defined in

[packages/lexical-yjs/src/index.ts:64](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L64)

___

### getAnchorAndFocusCollabNodesForUserState

▸ **getAnchorAndFocusCollabNodesForUserState**(`binding`, `userState`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `binding` | [`Binding`](lexical_yjs.md#binding) |
| `userState` | [`UserState`](lexical_yjs.md#userstate) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `anchorCollabNode` | ``null`` \| `AnyCollabNode` |
| `anchorOffset` | `number` |
| `focusCollabNode` | ``null`` \| `AnyCollabNode` |
| `focusOffset` | `number` |

#### Defined in

[packages/lexical-yjs/src/SyncCursors.ts:304](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/SyncCursors.ts#L304)

___

### initLocalState

▸ **initLocalState**(`provider`, `name`, `color`, `focusing`, `awarenessData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](../interfaces/lexical_yjs.Provider.md) |
| `name` | `string` |
| `color` | `string` |
| `focusing` | `boolean` |
| `awarenessData` | `object` |

#### Returns

`void`

#### Defined in

[packages/lexical-yjs/src/index.ts:73](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L73)

___

### setLocalStateFocus

▸ **setLocalStateFocus**(`provider`, `name`, `color`, `focusing`, `awarenessData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`Provider`](../interfaces/lexical_yjs.Provider.md) |
| `name` | `string` |
| `color` | `string` |
| `focusing` | `boolean` |
| `awarenessData` | `object` |

#### Returns

`void`

#### Defined in

[packages/lexical-yjs/src/index.ts:90](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/index.ts#L90)

___

### syncCursorPositions

▸ **syncCursorPositions**(`binding`, `provider`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `binding` | [`Binding`](lexical_yjs.md#binding) |
| `provider` | [`Provider`](../interfaces/lexical_yjs.Provider.md) |
| `options?` | `SyncCursorPositionsOptions` |

#### Returns

`void`

#### Defined in

[packages/lexical-yjs/src/SyncCursors.ts:433](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/SyncCursors.ts#L433)

___

### syncLexicalUpdateToYjs

▸ **syncLexicalUpdateToYjs**(`binding`, `provider`, `prevEditorState`, `currEditorState`, `dirtyElements`, `dirtyLeaves`, `normalizedNodes`, `tags`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `binding` | [`Binding`](lexical_yjs.md#binding) |
| `provider` | [`Provider`](../interfaces/lexical_yjs.Provider.md) |
| `prevEditorState` | [`EditorState`](../classes/lexical.EditorState.md) |
| `currEditorState` | [`EditorState`](../classes/lexical.EditorState.md) |
| `dirtyElements` | `Map`\<`string`, `boolean`\> |
| `dirtyLeaves` | `Set`\<`string`\> |
| `normalizedNodes` | `Set`\<`string`\> |
| `tags` | `Set`\<`string`\> |

#### Returns

`void`

#### Defined in

[packages/lexical-yjs/src/SyncEditorStates.ts:256](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/SyncEditorStates.ts#L256)

___

### syncYjsChangesToLexical

▸ **syncYjsChangesToLexical**(`binding`, `provider`, `events`, `isFromUndoManger`, `syncCursorPositionsFn?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `binding` | [`Binding`](lexical_yjs.md#binding) | `undefined` |
| `provider` | [`Provider`](../interfaces/lexical_yjs.Provider.md) | `undefined` |
| `events` | `YEvent`\<`YText`\>[] | `undefined` |
| `isFromUndoManger` | `boolean` | `undefined` |
| `syncCursorPositionsFn` | [`SyncCursorPositionsFn`](lexical_yjs.md#synccursorpositionsfn) | `syncCursorPositions` |

#### Returns

`void`

#### Defined in

[packages/lexical-yjs/src/SyncEditorStates.ts:129](https://github.com/QubitPi/lexical/tree/main/packages/lexical-yjs/src/SyncEditorStates.ts#L129)
