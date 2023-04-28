"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[8889],{876:(e,t,i)=>{i.d(t,{Zo:()=>I,kt:()=>j});var n=i(2784);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function M(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var N=n.createContext({}),u=function(e){var t=n.useContext(N),i=t;return e&&(i="function"==typeof e?e(t):M(M({},t),e)),i},I=function(e){var t=u(e.components);return n.createElement(N.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,N=e.parentName,I=o(e,["components","mdxType","originalType","parentName"]),c=u(i),j=a,s=c["".concat(N,".").concat(j)]||c[j]||l[j]||r;return i?n.createElement(s,M(M({ref:t},I),{},{components:i})):n.createElement(s,M({ref:t},I))}));function j(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,M=new Array(r);M[0]=c;var o={};for(var N in t)hasOwnProperty.call(t,N)&&(o[N]=t[N]);o.originalType=e,o.mdxType="string"==typeof e?e:a,M[1]=o;for(var u=2;u<r;u++)M[u]=i[u];return n.createElement.apply(null,M)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},1520:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>N,contentTitle:()=>M,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=i(7896),a=(i(2784),i(876));const r={},M="Node Transforms",o={unversionedId:"concepts/transforms",id:"concepts/transforms",title:"Node Transforms",description:"Transforms are the most efficient mechanism to respond to changes to the EditorState.",source:"@site/docs/concepts/transforms.md",sourceDirName:"concepts",slug:"/concepts/transforms",permalink:"/lexical/docs/concepts/transforms",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/concepts/transforms.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Listeners",permalink:"/lexical/docs/concepts/listeners"},next:{title:"Commands",permalink:"/lexical/docs/concepts/commands"}},N={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Lifecycle",id:"lifecycle",level:2},{value:"Preconditions",id:"preconditions",level:2},{value:"Transforms on parent nodes",id:"transforms-on-parent-nodes",level:2},{value:"registerLexicalTextEntity",id:"registerlexicaltextentity",level:2},{value:"Examples",id:"examples",level:2}],I={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},I,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node-transforms"},"Node Transforms"),(0,a.kt)("p",null,"Transforms are the most efficient mechanism to respond to changes to the EditorState."),(0,a.kt)("p",null,'For example:\nUser types a character and you want to color the word blue if the word is now equal to "congrats".\nWe programmatically add an ',(0,a.kt)("inlineCode",{parentName:"p"},"@Mention")," to the editor, the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Mention")," is immediately next to another ",(0,a.kt)("inlineCode",{parentName:"p"},"@Mention")," (",(0,a.kt)("inlineCode",{parentName:"p"},"@Mention@Mention"),"). Since we believe this makes mentions hard to read, we want to destroy/replace both mentions and render them as plain TextNode's instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const removeTransform = editor.registerNodeTransform(TextNode, (textNode) => {\n  if (textNode.getTextContent() === 'blue') {\n    textNode.setTextContent('green');\n  }\n});\n")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"editor.registerNodeTransform<T: LexicalNode>(Class<T>, T): () => void\n")),(0,a.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,a.kt)("p",null,"Transforms are executed sequentially before changes are propagated to the DOM and multiple transforms still lead to a single DOM reconciliation (the most expensive operation in Lexical's lifecycle)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transforms lifecycle",src:i(4135).Z,width:"2343",height:"658"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beware!")),(0,a.kt)("p",null,"In most cases, it is possible to achieve the same or very similar result through an ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/listeners#registerupdatelistener"},"update listener")," followed by an update. This is highly discouraged as it triggers an additional render (the most expensive lifecycle operation)."),(0,a.kt)("p",null,"Additionally, each cycle creates a brand new EditorState object which can interfere with plugins like HistoryPlugin (undo-redo) if not handled correctly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"editor.registerUpdateListener(() => {\n  editor.update(() => {\n    // Don't do this\n  });\n});\n")),(0,a.kt)("h2",{id:"preconditions"},"Preconditions"),(0,a.kt)("p",null,"Preconditions are fundamental for transforms to prevent them from running multiple times and ultimately causing an infinite loop."),(0,a.kt)("p",null,"Transforms are designed to run when nodes have been modified (aka marking nodes dirty). For the most part, transforms only need to run once after the update but the sequential nature of transforms makes it possible to have order bias. Hence, transforms are run over and over until this particular type of Node is no longer marked as dirty by any of the transforms."),(0,a.kt)("p",null,"Hence, we have to make sure that the transforms do not mark the node dirty unnecessarily."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// When a TextNode changes (marked as dirty) make it bold\neditor.registerNodeTransform(TextNode, textNode => {\n  // Important: Check current format state\n  if (!textNode.hasFormat('bold')) {\n    textNode.toggleFormat('bold');\n  }\n}\n")),(0,a.kt)("p",null,"But oftentimes, the order is not important. The below would always end up in the result of the two transforms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Plugin 1\neditor.registerNodeTransform(TextNode, textNode => {\n  // This transform runs twice but does nothing the first time because it doesn't meet the preconditions\n  if (textNode.getTextContent() === 'modified') {\n    textNode.setTextContent('re-modified');\n  }\n})\n// Plugin 2\neditor.registerNodeTransform(TextNode, textNode => {\n  // This transform runs only once\n  if (textNode.getTextContent() === 'original') {\n    textNode.setTextContent('modified');\n  }\n})\n// App\neditor.addListener('update', ({editorState}) => {\n  const text = editorState.read($textContent);\n  // text === 're-modified'\n});\n")),(0,a.kt)("h2",{id:"transforms-on-parent-nodes"},"Transforms on parent nodes"),(0,a.kt)("p",null,"Transforms are very specific to a type of node. This applies to both the declaration (",(0,a.kt)("inlineCode",{parentName:"p"},"registerNodeTransform(ImageNode)"),") and the times it triggers during an update cycle."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Won't trigger\neditor.registerNodeTransform(ParagraphNode, ..)\n// Will trigger as TextNode was marked dirty\neditor.registerNodeTransform(TextNode, ..)\neditor.update(() => {\n  const textNode = $getNodeByKey('3');\n  textNode.setTextContent('foo');\n});\n")),(0,a.kt)("p",null,"While the marked dirty rule is always true, there are some cases when it's not immediately obvious and/or we force nearby nodes to become dirty for the sake of easier transform logic:\nYou add a node to an ElementNode, the ElementNode and the newly added children are marked dirty, also its new immediate siblings\nYou remove a node, its parent is marked dirty, also the node's immediate siblings prior to being removed\nYou move a node via ",(0,a.kt)("inlineCode",{parentName:"p"},"replace"),", rules 2 and 1 are applied."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"editor.registerNodeTransform(ParagraphNode, paragraph => {\n // Triggers\n});\neditor.update(() => {\n  const paragraph = $getRoot().getFirstChild();\n  paragraph.append($createTextNode('foo');\n});\n")),(0,a.kt)("h2",{id:"registerlexicaltextentity"},"registerLexicalTextEntity"),(0,a.kt)("p",null,"It is common to have certain nodes that are created/destroyed based on their text content and siblings. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"#lexical")," is a valid hashtag whereas ",(0,a.kt)("inlineCode",{parentName:"p"},"#!lexical")," is not."),(0,a.kt)("p",null,"This is a perfectly valid case for transforms but we have gone ahead and already built a utility transform wrapper for you for this specific case:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"registerLexicalTextEntity<N: TextNode>(\n  editor: LexicalEditor,\n  getMatch: (text: string) => null | EntityMatch,\n  targetNode: Class<N>,\n  createNode: (textNode: TextNode) => N,\n): Array<() => void>;\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/lexical/blob/main/examples/emoticons.md"},"Emoticons (guided example)")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/plugins/EmojisPlugin/index.ts"},"Emojis")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/lexical/blob/main/packages/lexical-playground/src/plugins/AutoLinkPlugin/index.tsx"},"AutoLink")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/lexical/blob/main/packages/lexical-react/src/LexicalHashtagPlugin.ts"},"HashtagPlugin"))))}l.isMDXComponent=!0},4135:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTcxLjU1IDMyOS4wMDQiIHdpZHRoPSIyMzQzLjA5OSIgaGVpZ2h0PSI2NTguMDA3Ij48ZGVmcz48c3R5bGU+QGZvbnQtZmFjZXtmb250LWZhbWlseTomcXVvdDtWaXJnaWwmcXVvdDs7c3JjOnVybChodHRwczovL2V4Y2FsaWRyYXcuY29tL1ZpcmdpbC53b2ZmMil9QGZvbnQtZmFjZXtmb250LWZhbWlseTomcXVvdDtDYXNjYWRpYSZxdW90OztzcmM6dXJsKGh0dHBzOi8vZXhjYWxpZHJhdy5jb20vQ2FzY2FkaWEud29mZjIpfTwvc3R5bGU+PC9kZWZzPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMTE3MS41NXYzMjkuMDA0SDB6Ii8+PHBhdGggZD0iTTIzOS4xOCA4NC44NjFjNTYuOTEgMS4yNSAxMTMuODEgMS4wNSAxODMuMzktLjE5bS0xODAuOTcgMS40YzQ1LjYyIDEuMDIgODkuNzggMS4wOCAxODAuNjQuNDJtLjgxLTEuMjNjLS44NyA0MS45My0xLjAxIDg0LjIzLTIuMTYgMTQ4LjU2bTEuMDktMTQ2LjYyYzEuMiA0My4wOC43MyA4NS42OS4zNiAxNDguMjNtLTEuODgtLjAzYy0zNC45NS0uNjgtNzIuNTktMi42OS0xODAuNDEtLjkybTE4Mi4xMSAxLjUxYy00My4yMS0uMjgtODQuMjYtLjAyLTE4MC4yNi4zMm0tMS4wNi0yLjc0YzIuMi00Ny40MS0uNDgtMTAwLjM1IDEuMjItMTQ1LjM0bS0xLjM4IDE0Ny4yMmMtLjE3LTU3LjMyLTEuNDMtMTE1LjQ5LS42NC0xNDkuNTYiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iODUuNSIgeT0iMTgiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0id2hpdGUtc3BhY2U6cHJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDYuMDMgMTQ4LjMzMSkiPnVwZGF0ZUZuPC90ZXh0PjxwYXRoIGQ9Ik03NS42IDk5LjYzMmMxMi45NyAxNC41IDI2LjggMjQuODEgNTkuMzQgNTkuMDJtLTYxLjg1LTU5LjM0YzI0LjE4IDIzLjIxIDQ3LjI4IDQzLjMgNjIuNzUgNTcuNDFtMS45Ni0uNTRjLTI2LjIgMjMuNTUtNDcuMTMgNDIuMDYtNjIuNzMgNTcuMTJtNjAuMjEtNTUuODZjLTE1LjY5IDE0LjI4LTI5LjkzIDI4LjY3LTYxLjggNTUuNzltLjg1LjA3Yy0xNS4zNi0xNS4wNS0zMy4zMi0yNy43NC02NS45Ny01Ni40OW02NS42NiA1Ny4wOWMtMTMuOTktMTQuNTItMzAuMzYtMjYuMTUtNjMuODUtNTcuMDZtMS4zNC0uNTdjMTguMDctMTcuMTUgMzYuMjQtMzIuOCA2MS4wMi01NS4xMW0tNjIuMjUgNTUuNjdjMjIuMjctMTkuMjQgNDMuMjctMzguNjMgNjQuMjQtNTYuNDUiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iNTgiIHk9IjE4IiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9IndoaXRlLXNwYWNlOnByZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUgMTMxLjcyOCkiPmtleWJvYXJkIDwvdGV4dD48dGV4dCB4PSI1OCIgeT0iNDMiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0id2hpdGUtc3BhY2U6cHJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNSAxMzEuNzI4KSI+ZXZlbnQ8L3RleHQ+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMTQzLjA3MiAxNTMuNDY3YzE0LjQ3LjExIDcyLjU2LjYyIDg2Ljg5LjkybS04NS4wOSAxLjM5YzE0LjM0LjM0IDY5LjYxLjU3IDg0LjAxLjE4IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTk5Ljc5MiAxNjYuMDY3YzguMDEtMy45OCAxNi4zOC0yLjkyIDI3Ljg0LTEwLjQ3bS0yNy40OSAxMS41MWMxMC45OC00IDIyLjk4LTguNzQgMjkuNDUtMTAuMTYiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xOTkuNjEyIDE0NS41NDdjNy45OSAxLjA1IDE2LjQyIDcuMTMgMjguMDIgMTAuMDVtLTI3LjY4LTkuMDFjMTAuOTUgNC4xIDIzLjAyIDcuNDcgMjkuNjQgMTAuMzYiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjwvZz48cGF0aCBkPSJNNDk1LjM1NyA4Ljg1YzcxLjg3LjA1IDE0My43Mi0xLjk1IDE4Mi43NyAyLjQ3bS0xODAuODktLjg0YzUyLjUtLjUxIDEwNy4wOS45NCAxNzguOTIuMzFtLS44Ny0uMThjLjA0IDMyLjM4LjI5IDY3LjM2IDIuNiAxNDguODdtLTEuMzItMTQ4Ljc4YzEuMDYgMzcuNTkuMzcgNzcuMDEuMzMgMTQ4LjltLTEuNy0xLjY4Yy0zOC42My4zOC03OS4wNSAxLjE1LTE3Ni41MyAyLjM1bTE3Ny42NS0xLjY0Yy02OS42Ny0uNS0xMzkuODggMS4yOC0xNzkuODMtLjYxbS0xLjE5IDEuOWMuODItNDMuNjIgMS4zMy04NC45NiAxLjA5LTE1MC4xNW0xLjMyIDE0OS4xMWMtMi4yMi01OC40My0xLjQ4LTExOC4wMy0uNTctMTQ5Ljc5IiBzdHJva2U9IiM1Yzk0MGQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijg1IiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM1Yzk0MGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJ3aGl0ZS1zcGFjZTpwcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMS45NjcgNzIpIj50cmFuc2Zvcm0xPC90ZXh0PjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTQzMC4yNzcgMTI1LjM1NmMxMC4xMi0yLjkzIDUxLjIxLTE0LjkxIDYxLjU2LTE4LjI5bS02My4wOCAxNy43N2M5Ljg4LTMuMjcgNTEuNTQtMTYuMTQgNjIuMDUtMTkuMjciIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik00NjguNDc3IDEyMy4zNTZjOC45NC01LjU4IDE0LjM1LTE0LjI4IDIzLjk3LTE5LjYxbS0yNi4zOSAxOS43NWM3LjM1LTUuMjIgMTIuNzItOS40MiAyNC4xLTE4LjMxIiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNDYyLjQ5NyAxMDMuNzI2YzExLjE1IDEuNTIgMTguNzItLjA5IDI5Ljk1LjAybS0zMi4zNi4xMmM4Ljk5LjA0IDE1Ljk2IDEuMSAzMC4wNyAxLjMyIiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48L2c+PHBhdGggZD0iTTc0OC42NSA4My4wMDFjNTEuNjQtLjIxIDEwMS44Ny0xLjI1IDE2OC41NyAxLjAzbS0xNjcuNTMtLjc1YzYwLjg4LTEuNDIgMTIyLjkyLTEuNiAxNjcuNTctMS4xM20uOTYuM2MuNTMgNDIuODItLjQzIDg1LjY3LS4zIDE1MC42OG0tLjU0LTE1MS4yMWMtMi4yIDQ4LjY2LTEuMzYgOTcuMTctLjIxIDE1MC4zOG0uNTQtLjg0Yy00OC41NyAyLjYxLTk2LjIuMzktMTY4LjEzLjg1bTE2Ny4xOS4xMmMtNTYuNjcgMS45My0xMTUuMDYgMS40Ny0xNjcuMTYuMTdtLjg3LS42N2MtMS43My0zOS42Ny4xNS03Ny42MS0xLjgyLTE1MC44OW0uOTYgMTUxLjMxYy0uMDYtNDcuNzEtLjY4LTk2LjQuMDUtMTUwLjY0IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTY4My44NzQgMTA4LjgwNmMxMC4wOCAzLjAyIDUwLjA3IDE1LjA5IDU5Ljg5IDE4LjE1bS02MC45NC0xOC42OGM5Ljk0IDMuMiA1MC4zOCAxNC4xIDYwLjIgMTYuOTQiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik03MTQuNzU0IDEyOC4yMDZjOS4wMi0yLjUgMTguODEtMy43NyAyOC4zMi0yLjM1bS0yOS40NiAyLjA5YzEwLjY3LTEuNTYgMjAuMDEtMi4zMSAyOC43Mi0zLjM4IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNzIwLjI2NCAxMDguNDM2YzcuNDUgMy43OCAxNS41IDguNzUgMjIuODEgMTcuNDJtLTIzLjk1LTE3LjY4YzguNjIgNS4zOCAxNi4wNCAxMS41NSAyMy4yMSAxNi4zOSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIi8+PC9nPjx0ZXh0IHg9Ijc5IiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJ3aGl0ZS1zcGFjZTpwcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc1NC4xMyAxMzIuMzQxKSI+RE9NIGNoYW5nZXM8L3RleHQ+PHRleHQgeD0iNzkiIHk9IjQzIiBmb250LWZhbWlseT0iVmlyZ2lsLCBTZWdvZSBVSSBFbW9qaSIgZm9udC1zaXplPSIyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgc3R5bGU9IndoaXRlLXNwYWNlOnByZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzU0LjEzIDEzMi4zNDEpIj5yZWNvbmNpbGVkPC90ZXh0PjxwYXRoIGQ9Ik05OTEuNTUgODAuODZjNDEuMjcgMS4zIDc5LjYzLjQ0IDE2OS44OS0xLjA3bS0xNjguNjEgMS44NGM0MS4wOC4yNCA4MCAuNTUgMTY3Ljc0LS4zOG0xLjQ2Ljc1Yy0uMjQgMzUuMTkuOTkgNzIuMDktMS4xOSAxNTEuMjdtLjgzLTE1MS45MWMuNjMgNTcuMzkgMi4wNSAxMTQuMy41OCAxNDkuNzdtLjM3Ljc1Yy01MS4yLS4wNC0xMDAuNzUtLjg2LTE2Ny4zNS0uMjRtMTY1LjM2LS41Yy02NC40Ni4zNi0xMjkuMS0uNjItMTY2Ljc1IDEuMDVtMS40OS0uMDNjLTIuOTYtNDguNjMtMy05Ni42OS0yLTE1MC4zM20tLjQ0IDE1MC40OWMtMS4zMi01OC45MS4yMy0xMTcuMDcuMzUtMTUwLjg1IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTkyNi4zMTQgMTUzLjI1N2MxMC4zOC4wNiA1MS44OC43OSA2Mi4zMS44NW0tNjAuNzQtMi4xNWMxMC40LS4zMiA1MC4wOS0uMjkgNjAuMjQuMTkiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik05NTguOTM0IDE2My4yNDdjNy4wNy0xLjE3IDExLjk3LTUuMTcgMjcuMzItMTIuMzZtLTI2LjU1IDExLjQ1YzguMTktMy42NCAxNy4wMi03LjA5IDI4LjAxLTEwLjc4IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNOTU5LjM0NCAxNDIuNzM3YzYuOTkgMi45OCAxMS44MSAzLjE0IDI2LjkxIDguMTVtLTI2LjE0LTkuMDdjNy45OSAyLjUxIDE2LjcgNS4yMiAyNy42IDkuNzQiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjwvZz48dGV4dCB4PSI3OSIgeT0iMTgiIGZvbnQtZmFtaWx5PSJWaXJnaWwsIFNlZ29lIFVJIEVtb2ppIiBmb250LXNpemU9IjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBzdHlsZT0id2hpdGUtc3BhY2U6cHJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5OTguNTUgMTQ0LjE2KSI+dXBkYXRlIGxpc3RlbmVyPC90ZXh0PjxwYXRoIGQ9Ik00OTYuOTU2IDE2OC4zNTRjNjMuMzkgMS40OSAxMjQuOTggMy4wMyAxNzkuNjkgMS4zNG0tMTc4LjAzLjI4YzU5Ljg4LS4wNiAxMTguNzQtLjA0IDE3OS4xLS4zN20tLjY1LS42NGMuNDcgNTEuODIuNjcgMTAwLjIuNDIgMTQ4LjcxbS41NS0xNDguMjFjMS4yNyA0Ni4yMyAxLjE1IDkyLjkzLjA2IDE0OS4xMW0tLjc2IDIuMzhjLTQyLjIzLTMuNzYtODQuMzUtMi41Ny0xNzcuNzMtLjUzbTE3OC45Mi0yLjE1Yy03MS40NCAyLjA4LTE0Mi4wOSAzLjMtMTgwLjY0LS4yNG0uNC44M2MuNzctNDguMTggMS45LTk2LjY2LS4yLTE0Ny4wNm0uODEgMTQ2Ljc5Yy0uNzEtNDEuMS0xLjM2LTgwLjEuMDYtMTQ4LjM4IiBzdHJva2U9IiM1Yzk0MGQiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjx0ZXh0IHg9Ijg1IiB5PSIxOCIgZm9udC1mYW1pbHk9IlZpcmdpbCwgU2Vnb2UgVUkgRW1vamkiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM1Yzk0MGQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHN0eWxlPSJ3aGl0ZS1zcGFjZTpwcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwMy41NTYgMjMyLjAwNCkiPnRyYW5zZm9ybTI8L3RleHQ+PGcgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNNDI4Ljc4NiAxNjguMjA2YzkuNCA3LjAyIDQ4Ljc5IDM0LjYxIDU4LjU1IDQxLjUybS01Ni45MS00Mi4yMmM5LjY1IDYuNyA0OS4xNSAzMy45MiA1OS4wMiA0MC42NSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTQ2MS40OTYgMTk4Ljc1NmMxMi4wNiAzLjE5IDIzLjM3IDkuNTUgMjguNTIgOC4wOW0tMjkuNTgtNS43MWM0Ljg2LjIyIDEwLjczIDIgMjkuNiA3LjkzIiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNDczLjEwNiAxODEuODM2YzcuNTEgOS43MiAxNC4yNyAyMi43MyAxNi45MSAyNS4wMW0tMTcuOTctMjIuNjNjMi40NSAzLjcgNS45OCA4LjkgMTcuOTkgMjQuODUiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjwvZz48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik02ODcuMDk0IDE5OC43NGM4Ljc2LTUuMjIgNDIuNzUtMjYuNDEgNTEuNDktMzEuNjZtLTUyLjY1IDMwLjUxYzkuMTktNS4wNyA0Ni4xMS0yNC42NCA1NC45NC0yOS41N003MjAuNjM0IDE4OS4xMWMzLjY5LTQuMjUgOS4wNi0xMS4yOSAxOC40MS0xOS44Nm0tMTcuNCAyMS4xYzYuNi03LjM5IDE0LjI2LTE0Ljg2IDE4LjMyLTIxLjUzIiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNzEwLjg1NCAxNzEuMDdjNi4xMi4zNSAxNC4wMS0yLjA1IDI4LjE5LTEuODJtLTI3LjE4IDMuMDZjOS44OS0xLjEgMjAuOTUtMi4yOSAyOC4xLTMuNDkiIHN0cm9rZT0iIzAwMCIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4="}}]);