---
id: "lexical_react_useLexicalNodeSelection"
title: "Module: @lexical/react/useLexicalNodeSelection"
custom_edit_url: null
---

## Functions

### useLexicalNodeSelection

▸ **useLexicalNodeSelection**(`key`): [`boolean`, (`selected`: `boolean`) => `void`, () => `void`]

A custom hook to manage the selection state of a specific node in a Lexical editor.

This hook provides utilities to:
- Check if a node is selected.
- Update its selection state.
- Clear the selection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the node to track selection for. |

#### Returns

[`boolean`, (`selected`: `boolean`) => `void`, () => `void`]

A tuple containing:
- `isSelected` (boolean): Whether the node is currently selected.
- `setSelected` (function): A function to set the selection state of the node.
- `clearSelected` (function): A function to clear the selection of the node.

#### Defined in

[packages/lexical-react/src/useLexicalNodeSelection.ts:57](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/useLexicalNodeSelection.ts#L57)
