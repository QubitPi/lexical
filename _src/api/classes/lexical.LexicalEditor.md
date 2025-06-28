---
id: "lexical.LexicalEditor"
title: "Class: LexicalEditor"
custom_edit_url: null
---

[lexical](../modules/lexical.md).LexicalEditor

## Properties

### constructor

• **constructor**: [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`LexicalEditor`](lexical.LexicalEditor.md)\>

#### Defined in

[packages/lexical/src/LexicalEditor.ts:637](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L637)

___

### version

▪ `Static` **version**: `undefined` \| `string`

The version with build identifiers for this editor (since 0.17.1)

#### Defined in

[packages/lexical/src/LexicalEditor.ts:640](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L640)

## Methods

### blur

▸ **blur**(): `void`

Removes focus from the editor.

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1368](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1368)

___

### dispatchCommand

▸ **dispatchCommand**\<`TCommand`\>(`type`, `payload`): `boolean`

Dispatches a command of the specified type with the specified payload.
This triggers all command listeners (set by [LexicalEditor.registerCommand](lexical.LexicalEditor.md#registercommand))
for this type, passing them the provided payload. The command listeners
will be triggered in an implicit [LexicalEditor.update](lexical.LexicalEditor.md#update), unless
this was invoked from inside an update in which case that update context
will be re-used (as if this was a dollar function itself).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TCommand` | extends [`LexicalCommand`](../modules/lexical.md#lexicalcommand)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `TCommand` | the type of command listeners to trigger. |
| `payload` | [`CommandPayloadType`](../modules/lexical.md#commandpayloadtype)\<`TCommand`\> | the data to pass as an argument to the command listeners. |

#### Returns

`boolean`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1100](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1100)

___

### focus

▸ **focus**(`callbackFn?`, `options?`): `void`

Focuses the editor by marking the existing selection as dirty, or by
creating a new selection at `defaultSelection` if one does not already
exist. If you want to force a specific selection, you should call
`root.selectStart()` or `root.selectEnd()` in an update.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn?` | () => `void` | A function to run after the editor is focused. |
| `options` | `EditorFocusOptions` | A bag of options |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1327](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1327)

___

### getDecorators

▸ **getDecorators**\<`T`\>(): `Record`\<`string`, `T`\>

Gets a map of all decorators in the editor.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Record`\<`string`, `T`\>

A mapping of call decorator keys to their decorated content

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1111](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1111)

___

### getEditorState

▸ **getEditorState**(): [`EditorState`](lexical.EditorState.md)

Gets the active editor state.

#### Returns

[`EditorState`](lexical.EditorState.md)

The editor state

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1220](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1220)

___

### getElementByKey

▸ **getElementByKey**(`key`): ``null`` \| `HTMLElement`

Gets the underlying HTMLElement associated with the LexicalNode for the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key of the LexicalNode. |

#### Returns

``null`` \| `HTMLElement`

the HTMLElement rendered by the LexicalNode associated with the key.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1212](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1212)

___

### getKey

▸ **getKey**(): `string`

Gets the key of the editor

#### Returns

`string`

The editor key

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1129](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1129)

___

### getRootElement

▸ **getRootElement**(): ``null`` \| `HTMLElement`

#### Returns

``null`` \| `HTMLElement`

the current root element of the editor. If you want to register
an event listener, do it via [LexicalEditor.registerRootListener](lexical.LexicalEditor.md#registerrootlistener), since
this reference may not be stable.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1121](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1121)

___

### hasNode

▸ **hasNode**\<`T`\>(`node`): `boolean`

Used to assert that a certain node is registered, usually by plugins to ensure nodes that they
depend on have been registered.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`LexicalNode`](lexical.LexicalNode.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`boolean`

True if the editor has registered the provided node type, false otherwise.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1077](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1077)

___

### hasNodes

▸ **hasNodes**\<`T`\>(`nodes`): `boolean`

Used to assert that certain nodes are registered, usually by plugins to ensure nodes that they
depend on have been registered.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`LexicalNode`](lexical.LexicalNode.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `T`[] |

#### Returns

`boolean`

True if the editor has registered all of the provided node types, false otherwise.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1086](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1086)

___

### isComposing

▸ **isComposing**(): `boolean`

#### Returns

`boolean`

true if the editor is currently in "composition" mode due to receiving input
through an IME, or 3P extension, for example. Returns false otherwise.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:772](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L772)

___

### isEditable

▸ **isEditable**(): `boolean`

Returns true if the editor is editable, false otherwise.

#### Returns

`boolean`

True if the editor is editable, false otherwise.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1385](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1385)

___

### parseEditorState

▸ **parseEditorState**(`maybeStringifiedEditorState`, `updateFn?`): [`EditorState`](lexical.EditorState.md)

Parses a SerializedEditorState (usually produced by [EditorState.toJSON](lexical.EditorState.md#tojson)) and returns
and EditorState object that can be, for example, passed to [LexicalEditor.setEditorState](lexical.LexicalEditor.md#seteditorstate). Typically,
deserialization from JSON stored in a database uses this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeStringifiedEditorState` | `string` \| [`SerializedEditorState`](../interfaces/lexical.SerializedEditorState.md)\<[`SerializedLexicalNode`](../modules/lexical.md#serializedlexicalnode)\> |
| `updateFn?` | () => `void` |

#### Returns

[`EditorState`](lexical.EditorState.md)

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1284](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1284)

___

### read

▸ **read**\<`T`\>(`callbackFn`): `T`

Executes a read of the editor's state, with the
editor context available (useful for exporting and read-only DOM
operations). Much like update, but prevents any mutation of the
editor's state. Any pending updates will be flushed immediately before
the read.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | () => `T` | A function that has access to read-only editor state. |

#### Returns

`T`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1303](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1303)

___

### registerCommand

▸ **registerCommand**\<`P`\>(`command`, `listener`, `priority`): () => `void`

Registers a listener that will trigger anytime the provided command
is dispatched with LexicalEditor.dispatch, subject to priority.
Listeners that run at a higher priority can "intercept" commands and
prevent them from propagating to other handlers by returning true.

Listeners are always invoked in an [LexicalEditor.update](lexical.LexicalEditor.md#update) and can
call dollar functions.

Listeners registered at the same priority level will run
deterministically in the order of registration.

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | [`LexicalCommand`](../modules/lexical.md#lexicalcommand)\<`P`\> | the command that will trigger the callback. |
| `listener` | [`CommandListener`](../modules/lexical.md#commandlistener)\<`P`\> | the function that will execute when the command is dispatched. |
| `priority` | [`CommandListenerPriority`](../modules/lexical.md#commandlistenerpriority) | the relative priority of the listener. 0 \| 1 \| 2 \| 3 \| 4 (or [COMMAND_PRIORITY_EDITOR](../modules/lexical.md#command_priority_editor) \| [COMMAND_PRIORITY_LOW](../modules/lexical.md#command_priority_low) \| [COMMAND_PRIORITY_NORMAL](../modules/lexical.md#command_priority_normal) \| [COMMAND_PRIORITY_HIGH](../modules/lexical.md#command_priority_high) \| [COMMAND_PRIORITY_CRITICAL](../modules/lexical.md#command_priority_critical)) |

#### Returns

`fn`

a teardown function that can be used to cleanup the listener.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:878](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L878)

___

### registerDecoratorListener

▸ **registerDecoratorListener**\<`T`\>(`listener`): () => `void`

Registers a listener for when the editor's decorator object changes. The decorator object contains
all DecoratorNode keys -> their decorated value. This is primarily used with external UI frameworks.

Will trigger the provided callback each time the editor transitions between these states until the
teardown function is called.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `DecoratorListener`\<`T`\> |

#### Returns

`fn`

a teardown function that can be used to cleanup the listener.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:812](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L812)

___

### registerEditableListener

▸ **registerEditableListener**(`listener`): () => `void`

Registers a listener for for when the editor changes between editable and non-editable states.
Will trigger the provided callback each time the editor transitions between these states until the
teardown function is called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EditableListener`](../modules/lexical.md#editablelistener) |

#### Returns

`fn`

a teardown function that can be used to cleanup the listener.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:796](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L796)

___

### registerMutationListener

▸ **registerMutationListener**(`klass`, `listener`, `options?`): () => `void`

Registers a listener that will run when a Lexical node of the provided class is
mutated. The listener will receive a list of nodes along with the type of mutation
that was performed on each: created, destroyed, or updated.

One common use case for this is to attach DOM event listeners to the underlying DOM nodes as Lexical nodes are created.
[LexicalEditor.getElementByKey](lexical.LexicalEditor.md#getelementbykey) can be used for this.

If any existing nodes are in the DOM, and skipInitialization is not true, the listener
will be called immediately with an updateTag of 'registerMutationListener' where all
nodes have the 'created' NodeMutation. This can be controlled with the skipInitialization option
(whose default was previously true for backwards compatibility with &lt;=0.16.1 but has been changed to false as of 0.21.0).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `klass` | [`KlassConstructor`](../modules/lexical.md#klassconstructor)\<typeof [`LexicalNode`](lexical.LexicalNode.md)\> | The class of the node that you want to listen to mutations on. |
| `listener` | [`MutationListener`](../modules/lexical.md#mutationlistener) | The logic you want to run when the node is mutated. |
| `options?` | `MutationListenerOptions` | see MutationListenerOptions |

#### Returns

`fn`

a teardown function that can be used to cleanup the listener.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:942](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L942)

___

### registerNodeTransform

▸ **registerNodeTransform**\<`T`\>(`klass`, `listener`): () => `void`

Registers a listener that will run when a Lexical node of the provided class is
marked dirty during an update. The listener will continue to run as long as the node
is marked dirty. There are no guarantees around the order of transform execution!

Watch out for infinite loops. See [Node Transforms](https://lexical.dev/docs/concepts/transforms)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LexicalNode`](lexical.LexicalNode.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `klass` | [`Klass`](../modules/lexical.md#klass)\<`T`\> | The class of the node that you want to run transforms on. |
| `listener` | [`Transform`](../modules/lexical.md#transform)\<`T`\> | The logic you want to run when the node is updated. |

#### Returns

`fn`

a teardown function that can be used to cleanup the listener.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1045](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1045)

___

### registerRootListener

▸ **registerRootListener**(`listener`): () => `void`

Registers a listener for when the editor's root DOM element (the content editable
Lexical attaches to) changes. This is primarily used to attach event listeners to the root
 element. The root listener function is executed directly upon registration and then on
any subsequent update.

Will trigger the provided callback each time the editor transitions between these states until the
teardown function is called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`RootListener`](../modules/lexical.md#rootlistener) |

#### Returns

`fn`

a teardown function that can be used to cleanup the listener.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:847](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L847)

___

### registerTextContentListener

▸ **registerTextContentListener**(`listener`): () => `void`

Registers a listener for when Lexical commits an update to the DOM and the text content of
the editor changes from the previous state of the editor. If the text content is the
same between updates, no notifications to the listeners will happen.

Will trigger the provided callback each time the editor transitions between these states until the
teardown function is called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `TextContentListener` |

#### Returns

`fn`

a teardown function that can be used to cleanup the listener.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:829](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L829)

___

### registerUpdateListener

▸ **registerUpdateListener**(`listener`): () => `void`

Registers a listener for Editor update event. Will trigger the provided callback
each time the editor goes through an update (via [LexicalEditor.update](lexical.LexicalEditor.md#update)) until the
teardown function is called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`UpdateListener`](../modules/lexical.md#updatelistener) |

#### Returns

`fn`

a teardown function that can be used to cleanup the listener.

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:782](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L782)

___

### setEditable

▸ **setEditable**(`editable`): `void`

Sets the editable property of the editor. When false, the
editor will not listen for user events on the underling contenteditable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editable` | `boolean` | the value to set the editable mode to. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1393](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1393)

___

### setEditorState

▸ **setEditorState**(`editorState`, `options?`): `void`

Imperatively set the EditorState. Triggers reconciliation like an update.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `editorState` | [`EditorState`](lexical.EditorState.md) | the state to set the editor |
| `options?` | [`EditorSetOptions`](../modules/lexical.md#editorsetoptions) | options for the update. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1229](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1229)

___

### setRootElement

▸ **setRootElement**(`nextRootElement`): `void`

Imperatively set the root contenteditable element that Lexical listens
for events on.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextRootElement` | ``null`` \| `HTMLElement` |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1137](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1137)

___

### toJSON

▸ **toJSON**(): [`SerializedEditor`](../modules/lexical.md#serializededitor)

Returns a JSON-serializable javascript object NOT a JSON string.
You still must call JSON.stringify (or something else) to turn the
state into a string you can transfer over the wire and store in a database.

See [LexicalNode.exportJSON](lexical.LexicalNode.md#exportjson)

#### Returns

[`SerializedEditor`](../modules/lexical.md#serializededitor)

A JSON-serializable javascript object

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1408](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1408)

___

### update

▸ **update**(`updateFn`, `options?`): `void`

Executes an update to the editor state. The updateFn callback is the ONLY place
where Lexical editor state can be safely mutated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateFn` | () => `void` | A function that has access to writable editor state. |
| `options?` | [`EditorUpdateOptions`](../modules/lexical.md#editorupdateoptions) | A bag of options to control the behavior of the update. |

#### Returns

`void`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:1314](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L1314)
