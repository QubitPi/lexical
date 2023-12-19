"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[414],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(876));const o={},i="Lexical's Design",s={unversionedId:"design",id:"design",title:"Lexical's Design",description:"Note: this document is still a work-in-progress and things are likely still in flux.",source:"@site/docs/design.md",sourceDirName:".",slug:"/design",permalink:"/lexical/docs/design",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/design.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lexicals-design"},"Lexical's Design"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: this document is still a work-in-progress and things are likely still in flux.")),(0,a.kt)("p",null,"Lexical was built from the ground up to be a lean and extensible text-editing framework."),(0,a.kt)("p",null,"You can think of Lexical as more of a text editing engine, rather than a monolithic text\neditor that provides everything out-of-the-box. It might help to think of Lexical as\na framework like React \u2013 where React provides some hooks and a reconciler, and then you\nbuild the things you need on top, rather than have them included by default."),(0,a.kt)("p",null,'The main concept of Lexical is the editor state. Lexical uses a double-buffering technique\nto ensure consistency and reliability. There are never more than two editor states in play.\nThe "current" editor state represents what you can visibly see on screen and the "pending"\neditor state is what is currently being constructed to be shown in the future. Once the\n"pending" editor state is ready, it swaps and becomes the new "current" editor state.'),(0,a.kt)("p",null,"Lexical's core concerns itself with four main concerns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updates: the act of making changes to editor state"),(0,a.kt)("li",{parentName:"ul"},"Node Transforms: the process of acting on ongoing updates"),(0,a.kt)("li",{parentName:"ul"},"Reconciliation: the process of patching the DOM with the latest editor state"),(0,a.kt)("li",{parentName:"ul"},"Listening/Commands: the process of reacting to changes that occur internally")),(0,a.kt)("p",null,"Additionally, Lexical uses DOM mutation observers to ensure that any outside changes to\nthe editor DOM element are either reverted back to Lexical's current editor state, or are\ncommunicated as intents that cause further updates to the editor state (text changes)."),(0,a.kt)("p",null,"This separation was done to ensure developers have a way of applying custom logic with the\nimplementation and framework of their choice. This makes it possible to use Lexical with\nReact, or any other JavaScript web framework/library. This also makes it easier to tackle\nproblems around collaboration and undo/redo, where you might have an alternative model involved.\nInstead of hoping for the text editor to support what you want, you can work with the editor\nto make what you want."),(0,a.kt)("p",null,"This design can make getting started a bit more complex in certain cases, but as we've been\nable to demonstrate with our ",(0,a.kt)("inlineCode",{parentName:"p"},"@lexical/react")," plugins and hooks \u2013 you can get started, in the\nform of an out-of-the-box experience."))}d.isMDXComponent=!0}}]);