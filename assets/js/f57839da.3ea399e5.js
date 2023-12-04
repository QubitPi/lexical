"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[7146],{876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7896),n=(r(2784),r(876));const o={title:"",sidebar_position:16,sidebar_label:"@lexical/headless"},i=void 0,l={unversionedId:"packages/lexical-headless",id:"packages/lexical-headless",title:"",description:"{@import ../../../lexical-headless/README.md}",source:"@site/docs/packages/lexical-headless.md",sourceDirName:"packages",slug:"/packages/lexical-headless",permalink:"/lexical/docs/packages/lexical-headless",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/packages/lexical-headless.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"",sidebar_position:16,sidebar_label:"@lexical/headless"},sidebar:"docs",previous:{title:"@lexical/hashtag",permalink:"/lexical/docs/packages/lexical-hashtag"},next:{title:"@lexical/history",permalink:"/lexical/docs/packages/lexical-history"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("h1",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"h1"},"@lexical/headless")),(0,n.kt)("p",{parentName:"p"},"This package allows you to interact with Lexical in a headless environment (one that does not rely on DOM, e.g. for Node.js environment), and use its\nmain features like editor.update(), editor.registerNodeTransform(), editor.registerUpdateListener()\nto create, update or traverse state."),(0,n.kt)("p",{parentName:"p"},"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"@lexical/headless"),":"),(0,n.kt)("pre",{parentName:"p"},(0,n.kt)("code",{parentName:"pre"},"npm install --save @lexical/headless\n")),(0,n.kt)("pre",{parentName:"p"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { createHeadlessEditor } = require('@lexical/headless');\n\nconst editor = createHeadlessEditor({\n  nodes: [],\n  onError: () => {},\n});\n\neditor.update(() => {\n  $getRoot().append(\n    $createParagraphNode().append(\n      $createTextNode('Hello world')\n    )\n  )\n});\n")),(0,n.kt)("p",{parentName:"p"},"Any plugins that do not rely on DOM could also be used. Here's an example of how\nyou can convert lexical editor state to markdown on server:"),(0,n.kt)("pre",{parentName:"p"},(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const { createHeadlessEditor } = require('@lexical/headless');\nconst { $convertToMarkdownString, TRANSFORMERS } = require('@lexical/markdown');\n\napp.get('article/:id/markdown', await (req, res) => {\n  const editor = createHeadlessEditor({\n    nodes: [],\n    onError: () => {},\n  });\n\n  const articleEditorStateJSON = await loadArticleBody(req.query.id);\n  editor.setEditorState(editor.parseEditorState(articleEditorStateJSON));  \n\n  editor.update(() => {\n    const markdown = $convertToMarkdownString(TRANSFORMERS);\n    res.send(markdown);\n  });\n});\n\n"))))}u.isMDXComponent=!0}}]);