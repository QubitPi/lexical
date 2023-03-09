"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[551],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7896),a=(r(2784),r(876));const o={title:"",sidebar_position:11,sidebar_label:"@lexical/markdown"},i=void 0,l={unversionedId:"packages/lexical-markdown",id:"packages/lexical-markdown",title:"",description:"{@import ../../../lexical-markdown/README.md}",source:"@site/docs/packages/lexical-markdown.md",sourceDirName:"packages",slug:"/packages/lexical-markdown",permalink:"/lexical/docs/packages/lexical-markdown",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/packages/lexical-markdown.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"",sidebar_position:11,sidebar_label:"@lexical/markdown"},sidebar:"docs",previous:{title:"@lexical/list",permalink:"/lexical/docs/packages/lexical-list"},next:{title:"@lexical/offset",permalink:"/lexical/docs/packages/lexical-offset"}},p={},s=[],c={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("h1",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"h1"},"@lexical/markdown")),(0,a.kt)("p",{parentName:"p"},"This package contains markdown helpers for Lexical: import, export and shortcuts."),(0,a.kt)("h2",{parentName:"p"},"Import and export"),(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  $convertFromMarkdownString,\n  $convertToMarkdownString,\n  TRANSFORMERS,\n} from '@lexical/markdown';\n\neditor.update(() => {\n  const markdown = $convertToMarkdownString(TRANSFORMERS);\n  ...\n});\n\neditor.update(() => {\n  $convertFromMarkdownString(markdown, TRANSFORMERS);\n});\n")),(0,a.kt)("p",{parentName:"p"},"It can also be used for initializing editor's state from markdown string. Here's an example with react ",(0,a.kt)("inlineCode",{parentName:"p"},"<RichTextPlugin>")),(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<LexicalComposer initialConfig={{\n  editorState: () => $convertFromMarkdownString(markdown, TRANSFORMERS)\n}}>\n  <RichTextPlugin />\n</LexicalComposer>\n")),(0,a.kt)("h2",{parentName:"p"},"Shortcuts"),(0,a.kt)("p",{parentName:"p"},"Can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<MarkdownShortcutPlugin>")," if using React"),(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { TRANSFORMERS } from '@lexical/markdown';\nimport {MarkdownShortcutPlugin} from '@lexical/react/LexicalMarkdownShortcutPlugin';\n\n<LexicalComposer>\n  <MarkdownShortcutPlugin transformers={TRANSFORMERS} />\n</LexicalComposer>\n")),(0,a.kt)("p",{parentName:"p"},"Or ",(0,a.kt)("inlineCode",{parentName:"p"},"registerMarkdownShortcuts")," to register it manually:"),(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  registerMarkdownShortcuts,\n  TRANSFORMERS,\n} from '@lexical/markdown';\n\nconst editor = createEditor(...);\nregisterMarkdownShortcuts(editor, TRANSFORMERS);\n")),(0,a.kt)("h2",{parentName:"p"},"Transformers"),(0,a.kt)("p",{parentName:"p"},"Markdown functionality relies on transformers configuration. It's an array of objects that define how certain text or nodes\nare processed during import, export or while typing. ",(0,a.kt)("inlineCode",{parentName:"p"},"@lexical/markdown")," package provides set of built-in transformers:"),(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Element transformers\nUNORDERED_LIST\nCODE\nHEADING\nORDERED_LIST\nQUOTE\n\n// Text format transformers\nBOLD_ITALIC_STAR\nBOLD_ITALIC_UNDERSCORE\nBOLD_STAR\nBOLD_UNDERSCORE\nINLINE_CODE\nITALIC_STAR\nITALIC_UNDERSCORE\nSTRIKETHROUGH\n\n// Text match transformers\nLINK\n")),(0,a.kt)("p",{parentName:"p"},"And bundles of commonly used transformers:"),(0,a.kt)("ul",{parentName:"p"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TRANSFORMERS")," - all built-in transformers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ELEMENT_TRANSFORMERS")," - all built-in element transformers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TEXT_FORMAT_TRANSFORMERS")," - all built-in text format transformers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TEXT_MATCH_TRANSFORMERS")," - all built-in text match transformers")),(0,a.kt)("p",{parentName:"p"},"Transformers are explicitly passed to markdown API allowing application-specific subset of markdown or custom transformers."),(0,a.kt)("p",{parentName:"p"},"There're three types of transformers:"),(0,a.kt)("ul",{parentName:"p"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Element transformer")," handles top level elements (lists, headings, quotes, tables or code blocks)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Text format transformer")," applies text range formats defined in ",(0,a.kt)("inlineCode",{parentName:"li"},"TextFormatType")," (bold, italic, underline, strikethrough, code, subscript and superscript)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Text match transformer")," relies on matching leaf text node content")),(0,a.kt)("p",{parentName:"p"},"See ",(0,a.kt)("inlineCode",{parentName:"p"},"MarkdownTransformers.js")," for transformer implementation examples")))}d.isMDXComponent=!0}}]);