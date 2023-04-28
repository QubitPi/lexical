"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[5217],{876:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(2784);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),s=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,h=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(h,l(l({ref:t},p),{},{components:o})):n.createElement(h,l({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4334:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=o(7896),r=(o(2784),o(876));const i={id:"speech-to-text",title:"Speech-to-Text Plugin",sidebar_label:"Speech-to-Text Plugin"},l=void 0,c={unversionedId:"demos/plugins/speech-to-text",id:"demos/plugins/speech-to-text",title:"Speech-to-Text Plugin",description:"This page focuses on implementing the speech-to-text plugin and the code you need to add a speech-to-text tool to your editor. You can check out the CodeSandbox directly or view, edit and try out the code in real-time inside the embed.",source:"@site/docs/demos/plugins/speech-to-text.md",sourceDirName:"demos/plugins",slug:"/demos/plugins/speech-to-text",permalink:"/lexical/docs/demos/plugins/speech-to-text",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/demos/plugins/speech-to-text.md",tags:[],version:"current",frontMatter:{id:"speech-to-text",title:"Speech-to-Text Plugin",sidebar_label:"Speech-to-Text Plugin"},sidebar:"demos",previous:{title:"Poll Plugin",permalink:"/lexical/docs/demos/plugins/poll"},next:{title:"Sticky Notes Plugin",permalink:"/lexical/docs/demos/plugins/sticky-notes"}},a={},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page focuses on implementing the speech-to-text plugin and the code you need to add a speech-to-text tool to your editor. You can check out the CodeSandbox directly or view, edit and try out the code in real-time inside the embed. "),(0,r.kt)("p",null,"This plugin is a part of the actions plugin. You can check out the other tools (e.g., delete all, lock/unlock text) by exploring the playground's source code."),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/lexical-speech-to-text-plugin-example-m4xk63?fontsize=14&hidenavigation=1&module=/src/Editor.js,/src/plugins/SpeechToTextPlugin.ts,/src/plugins/ActionsPlugin.tsx&theme=dark&view=split",style:{width:"100%",height:"700px",border:0,borderRadius:"4px",overflow:"hidden"},title:"lexical-speech-to-text-plugin-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0}}]);