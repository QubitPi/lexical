---
id: "lexical_react_LexicalContentEditable"
title: "Module: @lexical/react/LexicalContentEditable"
custom_edit_url: null
---

## Type Aliases

### ContentEditableElementProps

Ƭ **ContentEditableElementProps**: \{ `ariaActiveDescendant?`: `React.AriaAttributes`[``"aria-activedescendant"``] ; `ariaAutoComplete?`: `React.AriaAttributes`[``"aria-autocomplete"``] ; `ariaControls?`: `React.AriaAttributes`[``"aria-controls"``] ; `ariaDescribedBy?`: `React.AriaAttributes`[``"aria-describedby"``] ; `ariaErrorMessage?`: `React.AriaAttributes`[``"aria-errormessage"``] ; `ariaExpanded?`: `React.AriaAttributes`[``"aria-expanded"``] ; `ariaInvalid?`: `React.AriaAttributes`[``"aria-invalid"``] ; `ariaLabel?`: `React.AriaAttributes`[``"aria-label"``] ; `ariaLabelledBy?`: `React.AriaAttributes`[``"aria-labelledby"``] ; `ariaMultiline?`: `React.AriaAttributes`[``"aria-multiline"``] ; `ariaOwns?`: `React.AriaAttributes`[``"aria-owns"``] ; `ariaRequired?`: `React.AriaAttributes`[``"aria-required"``] ; `autoCapitalize?`: `HTMLDivElement`[``"autocapitalize"``] ; `data-testid?`: `string` \| ``null`` ; `editor`: [`LexicalEditor`](../classes/lexical.LexicalEditor.md)  } & `Omit`\<`React.AllHTMLAttributes`\<`HTMLDivElement`\>, ``"placeholder"``\>

#### Defined in

[packages/lexical-react/src/shared/LexicalContentEditableElement.tsx:18](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/shared/LexicalContentEditableElement.tsx#L18)

___

### ContentEditableProps

Ƭ **ContentEditableProps**: `Omit`\<[`ContentEditableElementProps`](lexical_react_LexicalContentEditable.md#contenteditableelementprops), ``"editor"``\> & \{ `aria-placeholder?`: `void` ; `placeholder?`: ``null``  } \| \{ `aria-placeholder`: `string` ; `placeholder`: (`isEditable`: `boolean`) => ``null`` \| `JSX.Element` \| `JSX.Element`  }

#### Defined in

[packages/lexical-react/src/LexicalContentEditable.tsx:23](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalContentEditable.tsx#L23)

___

### Props

Ƭ **Props**: [`ContentEditableProps`](lexical_react_LexicalContentEditable.md#contenteditableprops)

**`Deprecated`**

This type has been renamed to `ContentEditableProps` to provide a clearer and more descriptive name.
For backward compatibility, this type is still exported as `Props`, but it is recommended to migrate to using `ContentEditableProps` instead.

**`Note`**

This alias is maintained for compatibility purposes but may be removed in future versions.
Please update your codebase to use `ContentEditableProps` to ensure long-term maintainability.

#### Defined in

[packages/lexical-react/src/LexicalContentEditable.tsx:44](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalContentEditable.tsx#L44)

## Functions

### ContentEditable

▸ **ContentEditable**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ContentEditableProps`](lexical_react_LexicalContentEditable.md#contenteditableprops) & `RefAttributes`\<`HTMLDivElement`\> |

#### Returns

`ReactNode`

#### Defined in

[packages/lexical-react/src/LexicalContentEditable.tsx:46](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/LexicalContentEditable.tsx#L46)

___

### ContentEditableElement

▸ **ContentEditableElement**(`props`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | \{ `ariaActiveDescendant?`: `string` ; `ariaAutoComplete?`: ``"inline"`` \| ``"list"`` \| ``"none"`` \| ``"both"`` ; `ariaControls?`: `string` ; `ariaDescribedBy?`: `string` ; `ariaErrorMessage?`: `string` ; `ariaExpanded?`: `Booleanish` ; `ariaInvalid?`: `boolean` \| ``"true"`` \| ``"false"`` \| ``"grammar"`` \| ``"spelling"`` ; `ariaLabel?`: `string` ; `ariaLabelledBy?`: `string` ; `ariaMultiline?`: `Booleanish` ; `ariaOwns?`: `string` ; `ariaRequired?`: `Booleanish` ; `autoCapitalize?`: `string` ; `data-testid?`: ``null`` \| `string` ; `editor`: [`LexicalEditor`](../classes/lexical.LexicalEditor.md)  } & `Omit`\<`AllHTMLAttributes`\<`HTMLDivElement`\>, ``"placeholder"``\> & `RefAttributes`\<`HTMLDivElement`\> |

#### Returns

`ReactNode`

#### Defined in

[packages/lexical-react/src/shared/LexicalContentEditableElement.tsx:126](https://github.com/QubitPi/lexical/tree/main/packages/lexical-react/src/shared/LexicalContentEditableElement.tsx#L126)
