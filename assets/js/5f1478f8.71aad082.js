"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[9497],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(7896),i=(r(2784),r(876));const o={id:"twitter",title:"Twitter Plugin",sidebar_label:"Twitter Plugin"},l=void 0,a={unversionedId:"demos/plugins/embeds/twitter",id:"demos/plugins/embeds/twitter",title:"Twitter Plugin",description:"This page focuses on implementing the Twitter plugin and the code you need to embed tweets into your editor. You can check out the CodeSandbox directly or view, edit and try out the code in real-time inside the embed.",source:"@site/docs/demos/plugins/embeds/twitter.md",sourceDirName:"demos/plugins/embeds",slug:"/demos/plugins/embeds/twitter",permalink:"/lexical/docs/demos/plugins/embeds/twitter",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/demos/plugins/embeds/twitter.md",tags:[],version:"current",frontMatter:{id:"twitter",title:"Twitter Plugin",sidebar_label:"Twitter Plugin"},sidebar:"demos",previous:{title:"Figma Plugin",permalink:"/lexical/docs/demos/plugins/embeds/figma"},next:{title:"YouTube Plugin",permalink:"/lexical/docs/demos/plugins/embeds/youtube"}},s={},d=[],c={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page focuses on implementing the Twitter plugin and the code you need to embed tweets into your editor. You can check out the CodeSandbox directly or view, edit and try out the code in real-time inside the embed. "),(0,i.kt)("p",null,"To use, enter the URL of the relevant tweet, and it will get embedded into the editor. You will not see any additional embeds if the URL is wrong or doesn't exist."),(0,i.kt)("p",null,"The example here is very simplified, so you can create your own logic for handling wrong URLs or canceling the embedding. The size of the embed is also adjustable. "),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/lexical-twitter-plugin-example-6lh3jg?fontsize=14&hidenavigation=1&module=/src/Editor.js,/src/plugins/TwitterPlugin.ts,/src/nodes/TweetNode.tsx&theme=dark&view=split",style:{width:"100%",height:"700px",border:0,borderRadius:"4px",overflow:"hidden"},title:"lexical-twitter-plugin-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0}}]);