---
id: "lexical.UpdateListenerPayload"
title: "Interface: UpdateListenerPayload"
custom_edit_url: null
---

[lexical](../modules/lexical.md).UpdateListenerPayload

The payload passed to an UpdateListener

## Properties

### dirtyElements

• **dirtyElements**: `Map`\<`string`, `boolean`\>

A Map of NodeKeys of ElementNodes to a boolean that is true
if the node was intentionally mutated ('unintentional' mutations
are triggered when an indirect descendant is marked dirty)

#### Defined in

[packages/lexical/src/LexicalEditor.ts:274](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L274)

___

### dirtyLeaves

• **dirtyLeaves**: `Set`\<`string`\>

A Set of NodeKeys of all nodes that were marked dirty that
do not inherit from ElementNode.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:279](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L279)

___

### editorState

• **editorState**: [`EditorState`](../classes/lexical.EditorState.md)

The new EditorState after all updates have been processed,
equivalent to `editor.getEditorState()`

#### Defined in

[packages/lexical/src/LexicalEditor.ts:284](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L284)

___

### mutatedNodes

• **mutatedNodes**: ``null`` \| `MutatedNodes`

The Map of LexicalNode constructors to a `Map<NodeKey, NodeMutation>`,
this is useful when you have a mutation listener type use cases that
should apply to all or most nodes. Will be null if no DOM was mutated,
such as when only the selection changed. Note that this will be empty
unless at least one MutationListener is explicitly registered
(any MutationListener is sufficient to compute the mutatedNodes Map
for all nodes).

Added in v0.28.0

#### Defined in

[packages/lexical/src/LexicalEditor.ts:296](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L296)

___

### normalizedNodes

• **normalizedNodes**: `Set`\<`string`\>

For advanced use cases only.

Tracks the keys of TextNode descendants that have been merged
with their siblings by normalization. Note that these keys may
not exist in either editorState or prevEditorState and generally
this is only used for conflict resolution edge cases in collab.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:305](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L305)

___

### prevEditorState

• **prevEditorState**: [`EditorState`](../classes/lexical.EditorState.md)

The previous EditorState that is being discarded

#### Defined in

[packages/lexical/src/LexicalEditor.ts:309](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L309)

___

### tags

• **tags**: `Set`\<`string`\>

The set of tags added with update options or [$addUpdateTag](../modules/lexical.md#$addupdatetag),
node that this includes all tags that were processed in this
reconciliation which may have been added by separate updates.

#### Defined in

[packages/lexical/src/LexicalEditor.ts:315](https://github.com/QubitPi/lexical/tree/main/packages/lexical/src/LexicalEditor.ts#L315)
