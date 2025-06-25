---
id: "lexical_react_LexicalTreeView"
title: "Module: @lexical/react/LexicalTreeView"
custom_edit_url: null
---

## Functions

### TreeView

▸ **TreeView**(`props`): `JSX.Element`

TreeView is a React component that provides a visual representation of
the Lexical editor's state and enables debugging features like time travel
and custom tree node rendering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | The properties passed to the TreeView component. |
| `props.customPrintNode?` | [`CustomPrintNodeFn`](lexical_devtools_core.md#customprintnodefn) | A function for customizing the display of nodes in the tree. |
| `props.editor` | [`LexicalEditor`](../classes/lexical.LexicalEditor.md) | The Lexical editor instance to be visualized and debugged. |
| `props.timeTravelButtonClassName?` | `string` | Custom class name for the time travel toggle button. |
| `props.timeTravelPanelButtonClassName?` | `string` | Custom class name for buttons inside the time travel panel. |
| `props.timeTravelPanelClassName?` | `string` | Custom class name for the overall time travel panel container. |
| `props.timeTravelPanelSliderClassName?` | `string` | Custom class name for the time travel slider in the panel. |
| `props.treeTypeButtonClassName?` | `string` | Custom class name for the tree type toggle button. |
| `props.viewClassName?` | `string` | Custom class name for the tree view container. |

#### Returns

`JSX.Element`

- A React element that visualizes the editor's state and supports debugging interactions.

#### Defined in

[packages/lexical-react/src/LexicalTreeView.tsx:40](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalTreeView.tsx#L40)
