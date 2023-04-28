"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[9671],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7896),i=(n(2784),n(876));const r={sidebar_position:1},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Lexical is an extensible JavaScript web text-editor framework with an emphasis on reliability, accessibility, and performance. Lexical aims to provide a best-in-class developer experience, so you can easily prototype and build features with confidence. Combined with a highly extensible architecture, Lexical allows developers to create unique text editing experiences that scale in size and functionality.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/lexical/docs/intro",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",next:{title:"Quick Start (Vanilla JS)",permalink:"/lexical/docs/getting-started/quick-start"}},l={},c=[{value:"What can be built with Lexical?",id:"what-can-be-built-with-lexical",level:2},{value:"Lexical&#39;s Design",id:"lexicals-design",level:2},{value:"Editor instances",id:"editor-instances",level:3},{value:"Editor States",id:"editor-states",level:3},{value:"Editor Updates",id:"editor-updates",level:3},{value:"DOM Reconciler",id:"dom-reconciler",level:3},{value:"Listeners, Node Transforms and Commands",id:"listeners-node-transforms-and-commands",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Lexical is an extensible JavaScript web text-editor framework with an emphasis on reliability, accessibility, and performance. Lexical aims to provide a best-in-class developer experience, so you can easily prototype and build features with confidence. Combined with a highly extensible architecture, Lexical allows developers to create unique text editing experiences that scale in size and functionality."),(0,i.kt)("p",null,"Lexical works by attaching itself to a ",(0,i.kt)("inlineCode",{parentName:"p"},"contentEditable")," element and from there you can work with Lexical's declarative APIs to make\nthings happen without needing to worry about specific edge-cases around the DOM. In fact, you rarely need to interact with the DOM at all in\nmost cases (unless you build your own custom nodes)."),(0,i.kt)("p",null,"The core package of Lexical is only 22kb in file size (min+gzip) and you only ever pay the cost for what you need. So Lexical can grow with\nyour surface and the requirements. Furthermore, in frameworks that support lazy-loading, you can defer Lexical plugins until the user actually interacts with the editor itself \u2013 which can greatly help improve performance."),(0,i.kt)("h2",{id:"what-can-be-built-with-lexical"},"What can be built with Lexical?"),(0,i.kt)("p",null,"Lexical makes it possible to easily create complex text editing experiences that otherwise would be very complex with the built-in browser tooling. We built Lexical to enable developers to move-fast and create different types of text experiences that scale to specific requirements. Here are some (but not all) examples of what you can do with Lexical:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Simple plain-text editors that have more requirements than a ",(0,i.kt)("inlineCode",{parentName:"li"},"<textarea>"),", such as requiring features like mentions, custom emojis, links and hashtags."),(0,i.kt)("li",{parentName:"ul"},"More complex rich-text editors that can be used to post content on blogs, social media, messaging applications."),(0,i.kt)("li",{parentName:"ul"},"A full-blown WYSIWYG editor that can be used in a CMS or rich content editor."),(0,i.kt)("li",{parentName:"ul"},"Real-time collaborative text editing experiences that combine many of the above points.")),(0,i.kt)("p",null,"You can think of Lexical as a text editor UI framework. Whilst Lexical is currently only usable on the web, the team is also experimenting\nwith building native versions of Lexical for other platforms. At Meta, Lexical powers web text editing experiences for hundreds of millions of users everyday across Facebook, Workplace, Messenger, WhatsApp and Instagram."),(0,i.kt)("h2",{id:"lexicals-design"},"Lexical's Design"),(0,i.kt)("p",null,"The core of Lexical is a dependency-free text editor framework that allows developers to build powerful, simple and complex,\neditor surfaces. Lexical has a few concepts that are worth exploring:"),(0,i.kt)("h3",{id:"editor-instances"},"Editor instances"),(0,i.kt)("p",null,"Editor instances are the core thing that wires everything together. You can attach a contenteditable DOM element to editor instances, and also\nregister listeners and commands. Most importantly, the editor allows for updates to its ",(0,i.kt)("inlineCode",{parentName:"p"},"EditorState"),". You can create an editor instance\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"createEditor()")," API, however you normally don't have to worry when using framework bindings such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/react")," as this\nis handled for you."),(0,i.kt)("h3",{id:"editor-states"},"Editor States"),(0,i.kt)("p",null,"An Editor State is the underlying data model that represents what you want to show on the DOM. Editor States contain two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a Lexical node tree"),(0,i.kt)("li",{parentName:"ul"},"a Lexical selection object")),(0,i.kt)("p",null,"Editor States are immutable once created, and in order to create one, you must do so via ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.update(() => {...})"),'. However, you\ncan also "hook" into an existing update using node transforms or command handlers \u2013 which are invoked as part of an existing update\nworkflow to prevent cascading/water-falling of updates. You can retrieve the current editor state using ',(0,i.kt)("inlineCode",{parentName:"p"},"editor.getEditorState()"),"."),(0,i.kt)("p",null,"Editor States are also fully serializable to JSON and can easily be serialized back into the editor using ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.parseEditorState()"),"."),(0,i.kt)("h3",{id:"editor-updates"},"Editor Updates"),(0,i.kt)("p",null,"When you want to change something in an Editor State, you must do it via an update, ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.update(() => {...})"),". The closure passed\nto the update call is important. It's a place where you have full \"lexical\" context of the active editor state, and it exposes\naccess to the underlying Editor State's node tree. We promote using ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," prefixed functions in this context, as it signifies a place\nwhere they can be used exclusively. Attempting to use them outside of an update will trigger a runtime error with an appropriate error.\nFor those familiar with React Hooks, you can think of these as having a similar functionality (except ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," functions can be used in any order)."),(0,i.kt)("h3",{id:"dom-reconciler"},"DOM Reconciler"),(0,i.kt)("p",null,'Lexical has its own DOM reconciler that takes a set of Editor States (always the "current" and the "pending") and applies a "diff"\non them. It then uses this diff to update only the parts of the DOM that need changing. You can think of this as a kind-of virtual DOM,\nexcept Lexical is able to skip doing much of the diffing work, as it knows what was mutated in a given update. The DOM reconciler\nadopts performance optimizations that benefit the typical heuristics of a content editable \u2013 and is able to ensure consistency for\nLTR and RTL languages automatically.'),(0,i.kt)("h3",{id:"listeners-node-transforms-and-commands"},"Listeners, Node Transforms and Commands"),(0,i.kt)("p",null,"Outside of invoking updates, the bulk of work done with Lexical is via listeners, node transforms and commands. These all stem from\nthe editor and are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),". Another important feature is that all the register methods return a function to easily unsubscribe them. For example here is how you listen to an update to a Lexical editor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const unregisterListener = editor.registerUpdateListener(({editorState}) => {\n  // An update has occurred!\n  console.log(editorState);\n});\n\n// Ensure we remove the listener later!\nunregisterListener();\n")),(0,i.kt)("p",null,"Commands are the communication system used to wire everything together in Lexical. Custom commands can be created using ",(0,i.kt)("inlineCode",{parentName:"p"},"createCommand()")," and\ndispatched to an editor using ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.dispatchCommand(command, payload)"),". Lexical dispatches commands internally when key presses are triggered\nand when other important signals occur. Commands can also be handled using ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.registerCommand(handler, priority)"),", and incoming commands are\npropagated through all handlers by priority until a handler stops the propagation (in a similar way to event propagation in the browser)."))}p.isMDXComponent=!0}}]);