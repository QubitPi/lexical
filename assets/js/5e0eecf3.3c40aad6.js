"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[7590],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7896),i=(n(2784),n(876));const r={title:"",sidebar_position:9,sidebar_label:"@lexical/list"},l=void 0,o={unversionedId:"packages/lexical-list",id:"packages/lexical-list",title:"",description:"{@import ../../../lexical-list/README.md}",source:"@site/docs/packages/lexical-list.md",sourceDirName:"packages",slug:"/packages/lexical-list",permalink:"/lexical/docs/packages/lexical-list",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/packages/lexical-list.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"",sidebar_position:9,sidebar_label:"@lexical/list"},sidebar:"docs",previous:{title:"@lexical/link",permalink:"/lexical/docs/packages/lexical-link"},next:{title:"@lexical/markdown",permalink:"/lexical/docs/packages/lexical-markdown"}},s={},p=[],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/list")),(0,i.kt)("p",{parentName:"p"},"This package exposes the primitives for implementing lists in Lexical. If you're trying to implement conventional lists with React, take a look at the ListPlugin exposed\nby ",(0,i.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/packages/lexical-react"},"@lexical/react"),", which wraps these primitives into a neat component that you can drop into any LexicalComposer."),(0,i.kt)("p",{parentName:"p"},"The API of @lexical/list primarily consists of Lexical Nodes that encapsulate list behaviors and a set of functions that can be called to trigger typical list manipulation functionality:"),(0,i.kt)("h2",{parentName:"p"},"Functions"),(0,i.kt)("h3",{parentName:"p"},"insertList"),(0,i.kt)("p",{parentName:"p"},"As the name suggests, this inserts a list of the provided type according to an algorithm that tries to determine the best way to do that based on\nthe current Selection. For instance, if some text is selected, insertList may try to move it into the first item in the list. See the API documentation for more detail."),(0,i.kt)("h3",{parentName:"p"},"removeList"),(0,i.kt)("p",{parentName:"p"},"Attempts to remove lists inside the current selection based on a set of opinionated heuristics that implement conventional editor behaviors. For instance, it converts empty ListItemNodes into empty ParagraphNodes."),(0,i.kt)("h2",{parentName:"p"},"Nodes"),(0,i.kt)("h3",{parentName:"p"},"ListNode"),(0,i.kt)("h3",{parentName:"p"},"ListItemNode"),(0,i.kt)("h2",{parentName:"p"},"Commands"),(0,i.kt)("p",{parentName:"p"},"For convenience, we provide a set of commands that can be used to connect a plugin to trigger typical list manipulation functionality:"),(0,i.kt)("h3",{parentName:"p"},"INSERT_UNORDERED_LIST_COMMAND"),(0,i.kt)("h3",{parentName:"p"},"INSERT_ORDERED_LIST_COMMAND"),(0,i.kt)("h3",{parentName:"p"},"INSERT_CHECK_LIST_COMMAND"),(0,i.kt)("h3",{parentName:"p"},"REMOVE_LIST_COMMAND"),(0,i.kt)("p",{parentName:"p"},"It's important to note that these commands don't have any functionality on their own. They are just for convenience and require you to register a handler for them in order to actually change the editor state when they are dispatched, as below:"),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// MyListPlugin.ts\n\neditor.registerCommand(INSERT_UNORDERED_LIST_COMMAND, () => {\n    insertList(editor, 'bullet');\n    return true;\n}, COMMAND_PRIORITY_LOW);\n\n// MyInsertListToolbarButton.ts\n\nfunction onButtonClick(e: MouseEvent) {\n    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);\n}\n\n")),(0,i.kt)("h2",{parentName:"p"},"Theming"),(0,i.kt)("p",{parentName:"p"},"Lists can be styled using the following properties in the EditorTheme passed to the editor in the initial config (the values are classses that will be applied in the denoted contexts):"),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  list?: {\n    // Applies to all lists of type \"bullet\"\n    ul?: EditorThemeClassName;\n    // Used to apply specific styling to nested levels of bullet lists\n    // e.g., [ 'bullet-list-level-one', 'bullet-list-level-two' ]\n    ulDepth?: Array<EditorThemeClassName>;\n    // Applies to all lists of type \"number\"\n    ol?: EditorThemeClassName;\n    // Used to apply specific styling to nested levels of number lists\n    // e.g., [ 'number-list-level-one', 'number-list-level-two' ]\n    olDepth?: Array<EditorThemeClassName>;\n    // Applies to all list items\n    listitem?: EditorThemeClassName;\n    // Applies to all list items with checked property set to \"true\"\n    listitemChecked?: EditorThemeClassName;\n    // Applies to all list items with checked property set to \"false\"\n    listitemUnchecked?: EditorThemeClassName;\n    // Applies only to list and list items that are not at the top level.\n    nested?: {\n      list?: EditorThemeClassName;\n      listitem?: EditorThemeClassName;\n    };\n  };\n}\n"))))}d.isMDXComponent=!0}}]);