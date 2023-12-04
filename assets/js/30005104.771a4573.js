"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[7800],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?a.createElement(m,c(c({ref:t},p),{},{components:r})):a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7896),n=(r(2784),r(876));const i={title:"",sidebar_position:3,sidebar_label:"@lexical/rich-text"},c=void 0,o={unversionedId:"packages/lexical-rich-text",id:"packages/lexical-rich-text",title:"",description:"{@import ../../../lexical-rich-text/README.md}",source:"@site/docs/packages/lexical-rich-text.md",sourceDirName:"packages",slug:"/packages/lexical-rich-text",permalink:"/lexical/docs/packages/lexical-rich-text",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/packages/lexical-rich-text.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"",sidebar_position:3,sidebar_label:"@lexical/rich-text"},sidebar:"docs",previous:{title:"@lexical/plain-text",permalink:"/lexical/docs/packages/lexical-plain-text"},next:{title:"@lexical/selection",permalink:"/lexical/docs/packages/lexical-selection"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("h1",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"h1"},"@lexical/rich-text")),(0,n.kt)("p",{parentName:"p"},"This package provides a starting point for Lexical users by registering listeners for a set of basic commands that cover simple text-editing behavior such as entering text, deleting characters, copy + paste, or changing the selection with arrow keys. It also provides default behavior for rich text features, such as headings, formatted, text and blockquotes."),(0,n.kt)("p",{parentName:"p"},"You can use this package as a starting point, and then add additional command listeners to customize the functionality of your editor. If you don't want or need rich text functionality, you may want to consider using ",(0,n.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/packages/lexical-plain-text"},"@lexical/plain-text")," instead.")))}d.isMDXComponent=!0}}]);