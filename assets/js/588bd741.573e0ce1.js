"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[4053],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,g=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7896),r=(n(2784),n(876));const i={sidebar_position:1},o="Quick Start (Vanilla JS)",s={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",title:"Quick Start (Vanilla JS)",description:"This section covers how to use Lexical, independently of any framework or library. For those intending to use Lexical in their React applications,",source:"@site/docs/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/lexical/docs/getting-started/quick-start",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/getting-started/quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/lexical/docs/intro"},next:{title:"Getting Started with React",permalink:"/lexical/docs/getting-started/react"}},l={},d=[{value:"Creating an editor and using it",id:"creating-an-editor-and-using-it",level:3},{value:"Working with Editor States",id:"working-with-editor-states",level:3},{value:"Updating an editor",id:"updating-an-editor",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start-vanilla-js"},"Quick Start (Vanilla JS)"),(0,r.kt)("p",null,"This section covers how to use Lexical, independently of any framework or library. For those intending to use Lexical in their React applications,\nit's advisable to ",(0,r.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/getting-started/react"},"check out the Getting Started with React page"),"."),(0,r.kt)("h3",{id:"creating-an-editor-and-using-it"},"Creating an editor and using it"),(0,r.kt)("p",null,"When you work with Lexical, you normally work with a single editor instance. An editor instance can be thought of as the one responsible\nfor wiring up an EditorState with the DOM. The editor is also the place where you can register custom nodes, add listeners, and transforms."),(0,r.kt)("p",null,"An editor instance can be created from the ",(0,r.kt)("inlineCode",{parentName:"p"},"lexical")," package and accepts an optional configuration object that allows for theming and other options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {createEditor} from 'lexical';\n\nconst config = {\n  namespace: 'MyEditor',\n  theme: {\n    ...\n  },\n  onError: console.error\n};\n\nconst editor = createEditor(config);\n")),(0,r.kt)("p",null,"Once you have an editor instance, when ready, you can associate the editor instance with a content editable ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>")," element in your document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const contentEditableElement = document.getElementById('editor');\n\neditor.setRootElement(contentEditableElement);\n")),(0,r.kt)("p",null,"If you want to clear the editor instance from the element, you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". Alternatively, you can switch to another element if need be,\njust pass an alternative element reference to ",(0,r.kt)("inlineCode",{parentName:"p"},"setRootElement()"),"."),(0,r.kt)("h3",{id:"working-with-editor-states"},"Working with Editor States"),(0,r.kt)("p",null,"With Lexical, the source of truth is not the DOM, but rather an underlying state model\nthat Lexical maintains and associates with an editor instance. You can get the latest\neditor state from an editor by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"editor.getEditorState()"),"."),(0,r.kt)("p",null,"Editor states are serializable to JSON, and the editor instance provides a useful method\nto deserialize stringified editor states."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const stringifiedEditorState = JSON.stringify(editor.getEditorState().toJSON());\n\nconst newEditorState = editor.parseEditorState(stringifiedEditorState);\n")),(0,r.kt)("h3",{id:"updating-an-editor"},"Updating an editor"),(0,r.kt)("p",null,"There are a few ways to update an editor instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trigger an update with ",(0,r.kt)("inlineCode",{parentName:"li"},"editor.update()")),(0,r.kt)("li",{parentName:"ul"},"Setting the editor state via ",(0,r.kt)("inlineCode",{parentName:"li"},"editor.setEditorState()")),(0,r.kt)("li",{parentName:"ul"},"Applying a change as part of an existing update via ",(0,r.kt)("inlineCode",{parentName:"li"},"editor.registerNodeTransform()")),(0,r.kt)("li",{parentName:"ul"},"Using a command listener with ",(0,r.kt)("inlineCode",{parentName:"li"},"editor.registerCommand(EXAMPLE_COMMAND, () => {...}, priority)"))),(0,r.kt)("p",null,"The most common way to update the editor is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"editor.update()"),". Calling this function\nrequires a function to be passed in that will provide access to mutate the underlying\neditor state. When starting a fresh update, the current editor state is cloned and\nused as the starting point. From a technical perspective, this means that Lexical leverages a technique\ncalled double-buffering during updates. There's an editor state to represent what is current on\nthe screen, and another work-in-progress editor state that represents future changes."),(0,r.kt)("p",null,"Creating an update is typically an async process that allows Lexical to batch multiple updates together in\na single update \u2013 improving performance. When Lexical is ready to commit the update to\nthe DOM, the underlying mutations and changes in the update will form a new immutable\neditor state. Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"editor.getEditorState()")," will then return the latest editor state\nbased on the changes from the update."),(0,r.kt)("p",null,"Here's an example of how you can update an editor instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {$getRoot, $getSelection, $createParagraphNode, $createTextNode} from 'lexical';\n\n// Inside the `editor.update` you can use special $ prefixed helper functions.\n// These functions cannot be used outside the closure, and will error if you try.\n// (If you're familiar with React, you can imagine these to be a bit like using a hook\n// outside of a React function component).\neditor.update(() => {\n  // Get the RootNode from the EditorState\n  const root = $getRoot();\n\n  // Get the selection from the EditorState\n  const selection = $getSelection();\n\n  // Create a new ParagraphNode\n  const paragraphNode = $createParagraphNode();\n\n  // Create a new TextNode\n  const textNode = $createTextNode('Hello world');\n\n  // Append the text node to the paragraph\n  paragraphNode.append(textNode);\n\n  // Finally, append the paragraph to the root\n  root.append(paragraphNode);\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It's important to note that the core library (the 'lexical' package) does not listen for any commands or perform any updates to the editor state in response to user events out-of-the-box.")," In order to see text and other content appear in the editor, you need to register ",(0,r.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/commands#editorregistercommand"},"command listeners")," and update the editor in the callback. Lexical provides a couple of helper packages to make it easy to wire up a lot of the basic commands you might want for ",(0,r.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/packages/lexical-plain-text"},"plain text")," or ",(0,r.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/packages/lexical-rich-text"},"rich text")," experiences."),(0,r.kt)("p",null,"If you want to know when the editor updates so you can react to the changes, you can add an update\nlistener to the editor, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"editor.registerUpdateListener(({editorState}) => {\n  // The latest EditorState can be found as `editorState`.\n  // To read the contents of the EditorState, use the following API:\n\n  editorState.read(() => {\n    // Just like editor.update(), .read() expects a closure where you can use\n    // the $ prefixed helper functions.\n  });\n});\n")))}u.isMDXComponent=!0}}]);