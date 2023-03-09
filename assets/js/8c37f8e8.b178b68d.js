"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[8784],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7896),o=(n(2784),n(876));const i={id:"markdown",title:"Markdown Plugin",sidebar_label:"Markdown Plugin"},a=void 0,l={unversionedId:"demos/plugins/markdown",id:"demos/plugins/markdown",title:"Markdown Plugin",description:"This page focuses on implementing the markdown plugin and the code you need to incorporate markdown support into your editor. You can check out the CodeSandbox directly or view, edit and try out the code in real-time inside the embed.",source:"@site/docs/demos/plugins/markdown.md",sourceDirName:"demos/plugins",slug:"/demos/plugins/markdown",permalink:"/lexical/docs/demos/plugins/markdown",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/demos/plugins/markdown.md",tags:[],version:"current",frontMatter:{id:"markdown",title:"Markdown Plugin",sidebar_label:"Markdown Plugin"},sidebar:"demos",previous:{title:"List Plugin",permalink:"/lexical/docs/demos/plugins/lists"},next:{title:"Mentions Plugin",permalink:"/lexical/docs/demos/plugins/mentions"}},s={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page focuses on implementing the markdown plugin and the code you need to incorporate markdown support into your editor. You can check out the CodeSandbox directly or view, edit and try out the code in real-time inside the embed. "),(0,o.kt)("p",null,"The editor already has some prepopulated text, and you can press the button on the bottom right to turn the current text into Markdown text. If you press again, it will turn back to standard editor text. This is a rich text editor example, and you can see most of the formatting functionality (e.g., bold, italic, underlined text)."),(0,o.kt)("p",null,"Currently, for the purposes of simplicity, the link plugin is very basic, so you will have to press twice on the links to see the URL and edit it. You can further import the AutoLink and ClickableLink plugins to be able to click on the link to jump straight to the website of your preference. "),(0,o.kt)("p",null,"This plugin is also a part of the actions plugin. You can check out the other tools (e.g., delete all, lock/unlock text) by exploring the playground's source code."),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/lexical-markdown-plugin-example-4076jq?fontsize=14&hidenavigation=1&module=/src/Editor.js,/src/plugins/MarkdownTransformers.ts,/src/plugins/ActionsPlugin.tsx&theme=dark&view=split",style:{width:"100%",height:"700px",border:0,borderRadius:"4px",overflow:"hidden"},title:"lexical-markdown-plugin-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}p.isMDXComponent=!0}}]);