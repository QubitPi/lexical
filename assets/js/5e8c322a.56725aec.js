"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[7597],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7896),i=(n(2784),n(876));const r={id:"index",title:"@lexical/monorepo",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"api/index",id:"api/index",title:"@lexical/monorepo",description:"Lexical",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/lexical/docs/api/",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@lexical/monorepo",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"api",next:{title:"Table of Contents",permalink:"/lexical/docs/api/modules"}},s={},d=[{value:"Getting started with React",id:"getting-started-with-react",level:2},{value:"Lexical is a framework",id:"lexical-is-a-framework",level:2},{value:"Editor instances",id:"editor-instances",level:3},{value:"Editor States",id:"editor-states",level:3},{value:"Editor Updates",id:"editor-updates",level:3},{value:"DOM Reconciler",id:"dom-reconciler",level:3},{value:"Listeners, Node Transforms and Commands",id:"listeners-node-transforms-and-commands",level:3},{value:"Working with Lexical",id:"working-with-lexical",level:2},{value:"Creating an editor and using it",id:"creating-an-editor-and-using-it",level:3},{value:"Working with Editor States",id:"working-with-editor-states",level:3},{value:"Updating an editor",id:"updating-an-editor",level:3},{value:"Contributing to Lexical",id:"contributing-to-lexical",level:2},{value:"Optional but recommended, use VSCode for development",id:"optional-but-recommended-use-vscode-for-development",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Browser Support",id:"browser-support",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Support",id:"support",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"License",id:"license",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{align:"center"},(0,i.kt)("a",{href:"https://lexical.dev"},"Lexical")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{alt:"GitHub Workflow Status",src:"https://img.shields.io/github/actions/workflow/status/facebook/lexical/test.yml"}),(0,i.kt)("a",{href:"https://www.npmjs.com/package/lexical"},(0,i.kt)("img",{alt:"Visit the NPM page",src:"https://img.shields.io/npm/v/lexical"})),(0,i.kt)("a",{href:"https://discord.gg/KmG4wQnnD9"},(0,i.kt)("img",{alt:"Add yourself to our Discord",src:"https://img.shields.io/discord/953974421008293909"})),(0,i.kt)("a",{href:"https://twitter.com/intent/follow?screen_name=lexicaljs"},(0,i.kt)("img",{alt:"Follow us on Twitter",src:"https://img.shields.io/twitter/follow/lexicaljs?style=social"}))),(0,i.kt)("p",null,"Lexical is an extensible JavaScript web text-editor framework with an emphasis on reliability, accessibility, and performance. Lexical aims to provide a best-in-class developer experience, so you can easily prototype and build features with confidence. Combined with a highly extensible architecture, Lexical allows developers to create unique text editing experiences that scale in size and functionality."),(0,i.kt)("p",null,"For documentation and more information about Lexical, be sure to ",(0,i.kt)("a",{parentName:"p",href:"https://lexical.dev"},"visit the Lexical website"),"."),(0,i.kt)("p",null,"Here are some examples of what you can do with Lexical:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playground.lexical.dev"},"Lexical Playground")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/lexical-plain-text-example-g932e"},"Plain text sandbox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/lexical-rich-text-example-5tncvy"},"Rich text sandbox"))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Overview:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#getting-started-with-react"},"Getting started with React"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#lexical-is-a-framework"},"Lexical is a framework"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#working-with-lexical"},"Working with Lexical"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#contributing-to-lexical"},"Contributing to Lexical")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"getting-started-with-react"},"Getting started with React"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Lexical is not only limited to React. Lexical can support any underlying DOM based library once bindings for that library have been created.")),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"lexical")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/react"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save lexical @lexical/react\n")),(0,i.kt)("p",null,"Below is an example of a basic plain text editor using ",(0,i.kt)("inlineCode",{parentName:"p"},"lexical")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/react")," (",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/lexical-plain-text-example-g932e"},"try it yourself"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import {$getRoot, $getSelection} from 'lexical';\nimport {useEffect} from 'react';\n\nimport {LexicalComposer} from '@lexical/react/LexicalComposer';\nimport {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';\nimport {ContentEditable} from '@lexical/react/LexicalContentEditable';\nimport {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';\nimport {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';\nimport {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';\nimport LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';\n\nconst theme = {\n  // Theme styling goes here\n  // ...\n}\n\n// When the editor changes, you can get notified via the\n// LexicalOnChangePlugin!\nfunction onChange(editorState) {\n  editorState.read(() => {\n    // Read the contents of the EditorState here.\n    const root = $getRoot();\n    const selection = $getSelection();\n\n    console.log(root, selection);\n  });\n}\n\n// Lexical React plugins are React components, which makes them\n// highly composable. Furthermore, you can lazy load plugins if\n// desired, so you don't pay the cost for plugins until you\n// actually use them.\nfunction MyCustomAutoFocusPlugin() {\n  const [editor] = useLexicalComposerContext();\n\n  useEffect(() => {\n    // Focus the editor when the effect fires!\n    editor.focus();\n  }, [editor]);\n\n  return null;\n}\n\n// Catch any errors that occur during Lexical updates and log them\n// or throw them as needed. If you don't throw them, Lexical will\n// try to recover gracefully without losing user data.\nfunction onError(error) {\n  console.error(error);\n}\n\nfunction Editor() {\n  const initialConfig = {\n    namespace: 'MyEditor',\n    theme,\n    onError,\n  };\n\n  return (\n    <LexicalComposer initialConfig={initialConfig}>\n      <PlainTextPlugin\n        contentEditable={<ContentEditable />}\n        placeholder={<div>Enter some text...</div>}\n        ErrorBoundary={LexicalErrorBoundary}\n      />\n      <OnChangePlugin onChange={onChange} />\n      <HistoryPlugin />\n      <MyCustomAutoFocusPlugin />\n    </LexicalComposer>\n  );\n}\n")),(0,i.kt)("h2",{id:"lexical-is-a-framework"},"Lexical is a framework"),(0,i.kt)("p",null,"The core of Lexical is a dependency-free text editor framework that allows developers to build powerful, simple and complex,\neditor surfaces. Lexical has a few concepts that are worth exploring:"),(0,i.kt)("h3",{id:"editor-instances"},"Editor instances"),(0,i.kt)("p",null,"Editor instances are the core thing that wires everything together. You can attach a contenteditable DOM element to editor instances, and also\nregister listeners and commands. Most importantly, the editor allows for updates to its ",(0,i.kt)("inlineCode",{parentName:"p"},"EditorState"),". You can create an editor instance\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"createEditor()")," API, however you normally don't have to worry when using framework bindings such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/react")," as this\nis handled for you."),(0,i.kt)("h3",{id:"editor-states"},"Editor States"),(0,i.kt)("p",null,"An Editor State is the underlying data model that represents what you want to show on the DOM. Editor States contain two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a Lexical node tree"),(0,i.kt)("li",{parentName:"ul"},"a Lexical selection object")),(0,i.kt)("p",null,"Editor States are immutable once created, and in order to create one, you must do so via ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.update(() => {...})"),'. However, you\ncan also "hook" into an existing update using node transforms or command handlers \u2013 which are invoked as part of an existing update\nworkflow to prevent cascading/waterfalling of updates. You can retrieve the current editor state using ',(0,i.kt)("inlineCode",{parentName:"p"},"editor.getEditorState()"),"."),(0,i.kt)("p",null,"Editor States are also fully serializable to JSON and can easily be serialized back into the editor using ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.parseEditorState()"),"."),(0,i.kt)("h3",{id:"editor-updates"},"Editor Updates"),(0,i.kt)("p",null,"When you want to change something in an Editor State, you must do it via an update, ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.update(() => {...})"),". The closure passed\nto the update call is important. It's a place where you have full \"lexical\" context of the active editor state, and it exposes\naccess to the underlying Editor State's node tree. We promote using ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," prefixed functions in this context, as it signifies a place\nwhere they can be used exclusively. Attempting to use them outside of an update will trigger a runtime error with an appropriate error.\nFor those familiar with React Hooks, you can think of these as having a similar functionality (except ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," functions can be used in any order)."),(0,i.kt)("h3",{id:"dom-reconciler"},"DOM Reconciler"),(0,i.kt)("p",null,'Lexical has its own DOM reconciler that takes a set of Editor States (always the "current" and the "pending") and applies a "diff"\non them. It then uses this diff to update only the parts of the DOM that need changing. You can think of this as a kind-of virtual DOM,\nexcept Lexical is able to skip doing much of the diffing work, as it knows what was mutated in a given update. The DOM reconciler\nadopts performance optimizations that benefit the typical heuristics of a content editable \u2013 and is able to ensure consistency for\nLTR and RTL languages automatically.'),(0,i.kt)("h3",{id:"listeners-node-transforms-and-commands"},"Listeners, Node Transforms and Commands"),(0,i.kt)("p",null,"Outside of invoking updates, the bulk of work done with Lexical is via listeners, node transforms and commands. These all stem from\nthe editor and are prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),". Another important feature is that all the register methods return a function to easily unsubscribe them. For example here is how you listen to an update to a Lexical editor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const unregisterListener = editor.registerUpdateListener(({editorState}) => {\n  // An update has occurred!\n  console.log(editorState);\n});\n\n// Ensure we remove the listener later!\nunregisterListener();\n")),(0,i.kt)("p",null,"Commands are the communication system used to wire everything together in Lexical. Custom commands can be created using ",(0,i.kt)("inlineCode",{parentName:"p"},"createCommand()")," and\ndispatched to an editor using ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.dispatchCommand(command, payload)"),". Lexical dispatches commands internally when key presses are triggered\nand when other important signals occur. Commands can also be handled using ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.registerCommand(handler, priority)"),", and incoming commands are\npropagated through all handlers by priority until a handler stops the propagation (in a similar way to event propagation in the browser)."),(0,i.kt)("h2",{id:"working-with-lexical"},"Working with Lexical"),(0,i.kt)("p",null,"This section covers how to use Lexical, independently of any framework or library. For those intending to use Lexical in their React applications,\nit's advisable to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/tree/main/packages/lexical-react/src"},"check out the source-code for the hooks that are shipped in ",(0,i.kt)("inlineCode",{parentName:"a"},"@lexical/react")),"."),(0,i.kt)("h3",{id:"creating-an-editor-and-using-it"},"Creating an editor and using it"),(0,i.kt)("p",null,"When you work with Lexical, you normally work with a single editor instance. An editor instance can be thought of as the one responsible\nfor wiring up an EditorState with the DOM. The editor is also the place where you can register custom nodes, add listeners, and transforms."),(0,i.kt)("p",null,"An editor instance can be created from the ",(0,i.kt)("inlineCode",{parentName:"p"},"lexical")," package and accepts an optional configuration object that allows for theming and other options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {createEditor} from 'lexical';\n\nconst config = {\n  namespace: 'MyEditor',\n  theme: {\n    ...\n  },\n};\n\nconst editor = createEditor(config);\n")),(0,i.kt)("p",null,"Once you have an editor instance, when ready, you can associate the editor instance with a content editable ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," element in your document:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const contentEditableElement = document.getElementById('editor');\n\neditor.setRootElement(contentEditableElement);\n")),(0,i.kt)("p",null,"If you want to clear the editor instance from the element, you can pass ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),". Alternatively, you can switch to another element if need be,\njust pass an alternative element reference to ",(0,i.kt)("inlineCode",{parentName:"p"},"setRootElement()"),"."),(0,i.kt)("h3",{id:"working-with-editor-states"},"Working with Editor States"),(0,i.kt)("p",null,"With Lexical, the source of truth is not the DOM, but rather an underlying state model\nthat Lexical maintains and associates with an editor instance. You can get the latest\neditor state from an editor by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.getEditorState()"),"."),(0,i.kt)("p",null,"Editor states are serializable to JSON, and the editor instance provides a useful method\nto deserialize stringified editor states."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const stringifiedEditorState = JSON.stringify(editor.getEditorState().toJSON());\n\nconst newEditorState = editor.parseEditorState(stringifiedEditorState);\n")),(0,i.kt)("h3",{id:"updating-an-editor"},"Updating an editor"),(0,i.kt)("p",null,"There are a few ways to update an editor instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Trigger an update with ",(0,i.kt)("inlineCode",{parentName:"li"},"editor.update()")),(0,i.kt)("li",{parentName:"ul"},"Setting the editor state via ",(0,i.kt)("inlineCode",{parentName:"li"},"editor.setEditorState()")),(0,i.kt)("li",{parentName:"ul"},"Applying a change as part of an existing update via ",(0,i.kt)("inlineCode",{parentName:"li"},"editor.registerNodeTransform()")),(0,i.kt)("li",{parentName:"ul"},"Using a command listener with ",(0,i.kt)("inlineCode",{parentName:"li"},"editor.registerCommand(EXAMPLE_COMMAND, () => {...}, priority)"))),(0,i.kt)("p",null,"The most common way to update the editor is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.update()"),". Calling this function\nrequires a function to be passed in that will provide access to mutate the underlying\neditor state. When starting a fresh update, the current editor state is cloned and\nused as the starting point. From a technical perspective, this means that Lexical leverages a technique\ncalled double-buffering during updates. There's an editor state to represent what is current on\nthe screen, and another work-in-progress editor state that represents future changes."),(0,i.kt)("p",null,"Creating an update is typically an async process that allows Lexical to batch multiple updates together in\na single update \u2013 improving performance. When Lexical is ready to commit the update to\nthe DOM, the underlying mutations and changes in the update will form a new immutable\neditor state. Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"editor.getEditorState()")," will then return the latest editor state\nbased on the changes from the update."),(0,i.kt)("p",null,"Here's an example of how you can update an editor instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {$getRoot, $getSelection, $createParagraphNode} from 'lexical';\n\n// Inside the `editor.update` you can use special $ prefixed helper functions.\n// These functions cannot be used outside the closure, and will error if you try.\n// (If you're familiar with React, you can imagine these to be a bit like using a hook\n// outside of a React function component).\neditor.update(() => {\n  // Get the RootNode from the EditorState\n  const root = $getRoot();\n\n  // Get the selection from the EditorState\n  const selection = $getSelection();\n\n  // Create a new ParagraphNode\n  const paragraphNode = $createParagraphNode();\n\n  // Create a new TextNode\n  const textNode = $createTextNode('Hello world');\n\n  // Append the text node to the paragraph\n  paragraphNode.append(textNode);\n\n  // Finally, append the paragraph to the root\n  root.append(paragraphNode);\n});\n")),(0,i.kt)("p",null,"If you want to know when the editor updates so you can react to the changes, you can add an update\nlistener to the editor, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"editor.registerUpdateListener(({editorState}) => {\n  // The latest EditorState can be found as `editorState`.\n  // To read the contents of the EditorState, use the following API:\n\n  editorState.read(() => {\n    // Just like editor.update(), .read() expects a closure where you can use\n    // the $ prefixed helper functions.\n  });\n});\n")),(0,i.kt)("h2",{id:"contributing-to-lexical"},"Contributing to Lexical"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone this repository")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install dependencies"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm install")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Start local server and run tests"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run start")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test-e2e-chromium")," to run only chromium e2e tests",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The server needs to be running for the e2e tests")))))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run start")," will start both the dev server and collab server. If you don't need collab, use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," to start just the dev server."),(0,i.kt)("h3",{id:"optional-but-recommended-use-vscode-for-development"},"Optional but recommended, use VSCode for development"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download and install VSCode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Download from ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"here")," (it\u2019s recommended to use the unmodified version)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install extensions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode"},"Flow Language Support"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Make sure to follow the setup steps in the README"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set prettier as the default formatter in ",(0,i.kt)("inlineCode",{parentName:"li"},"editor.defaultFormatter")),(0,i.kt)("li",{parentName:"ul"},"Optional: set format on save ",(0,i.kt)("inlineCode",{parentName:"li"},"editor.formatOnSave")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESlint"))))),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lexical/docs/design"},"How Lexical was designed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lexical/docs/testing"},"Testing"))),(0,i.kt)("h2",{id:"browser-support"},"Browser Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firefox 52+"),(0,i.kt)("li",{parentName:"ul"},"Chrome 49+"),(0,i.kt)("li",{parentName:"ul"},"Edge 79+ (when Edge switched to Chromium)"),(0,i.kt)("li",{parentName:"ul"},"Safari 11+"),(0,i.kt)("li",{parentName:"ul"},"iOS 11+ (Safari)"),(0,i.kt)("li",{parentName:"ul"},"iPad OS 13+ (Safari)"),(0,i.kt)("li",{parentName:"ul"},"Android Chrome 72+")),(0,i.kt)("p",null,"Note: Lexical does not support Internet Explorer or legacy versions of Edge."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new branch",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git checkout -b my-new-branch")))),(0,i.kt)("li",{parentName:"ol"},"Commit your changes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git commit -a -m 'Description of the changes'"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There are many ways of doing this and this is just a suggestion"))))),(0,i.kt)("li",{parentName:"ol"},"Push your branch to GitHub",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git push origin my-new-branch")))),(0,i.kt)("li",{parentName:"ol"},'Go to the repository page in GitHub and click on "Compare & pull request"',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://cli.github.com/manual/gh_pr_create"},"GitHub CLI")," allows you to skip the web interface for this step (and much more)")))),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"If you have any questions about Lexical, would like to discuss a bug report, or have questions about new integrations, feel free to join us at ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/KmG4wQnnD9"},"our Discord server"),"."),(0,i.kt)("p",null,"Lexical engineers are checking this regularly."),(0,i.kt)("h2",{id:"running-tests"},"Running tests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test-unit")," runs only unit tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test-e2e-chromium")," runs only chromium e2e tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run debug-test-e2e-chromium")," runs only chromium e2e tests in head mode for debugging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test-e2e-firefox")," runs only firefox e2e tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run debug-test-e2e-firefox")," runs only firefox e2e tests in head mode for debugging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run test-e2e-webkit")," runs only webkit e2e tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run debug-test-e2e-webkit")," runs only webkit e2e tests in head mode for debugging.")),(0,i.kt)("h3",{id:"license"},"License"),(0,i.kt)("p",null,"Lexical is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/blob/main/LICENSE"},"MIT licensed"),"."))}u.isMDXComponent=!0}}]);