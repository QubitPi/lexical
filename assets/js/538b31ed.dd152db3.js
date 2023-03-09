"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[2944],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7896),a=(r(2784),r(876));const i={title:"",sidebar_position:8,sidebar_label:"@lexical/history"},o=void 0,l={unversionedId:"packages/lexical-history",id:"packages/lexical-history",title:"",description:"{@import ../../../lexical-history/README.md}",source:"@site/docs/packages/lexical-history.md",sourceDirName:"packages",slug:"/packages/lexical-history",permalink:"/lexical/docs/packages/lexical-history",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/packages/lexical-history.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"",sidebar_position:8,sidebar_label:"@lexical/history"},sidebar:"docs",previous:{title:"@lexical/headless",permalink:"/lexical/docs/packages/lexical-headless"},next:{title:"@lexical/link",permalink:"/lexical/docs/packages/lexical-link"}},s={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("h1",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"h1"},"@lexical/history")),(0,a.kt)("p",{parentName:"p"},"This package contains history helpers for Lexical."),(0,a.kt)("h3",{parentName:"p"},"Methods"),(0,a.kt)("h4",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"h4"},"registerHistory")),(0,a.kt)("p",{parentName:"p"},"Registers necessary listeners to manage undo/redo history stack and related editor commands. It returns ",(0,a.kt)("inlineCode",{parentName:"p"},"unregister")," callback that cleans up all listeners and should be called on editor unmount."),(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function registerHistory(\n  editor: LexicalEditor,\n  externalHistoryState: HistoryState,\n  delay: number,\n): () => void\n")),(0,a.kt)("h3",{parentName:"p"},"Commands"),(0,a.kt)("p",{parentName:"p"},"History package handles ",(0,a.kt)("inlineCode",{parentName:"p"},"UNDO_COMMAND"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"REDO_COMMAND")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CLEAR_HISTORY_COMMAND")," commands. It also triggers ",(0,a.kt)("inlineCode",{parentName:"p"},"CAN_UNDO_COMMAND")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CAN_REDO_COMMAND")," commands when history state is changed. These commands could be used to work with history state:"),(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {UNDO_COMMAND, REDO_COMMAND} from 'lexical';\n\n<Toolbar>\n  <Button onClick={() => editor.dispatchCommand(UNDO_COMMAND)}>Undo</Button>\n  <Button onClick={() => editor.dispatchCommand(REDO_COMMAND)}>Redo</Button>\n</Toolbar>;\n"))))}m.isMDXComponent=!0}}]);