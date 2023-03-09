"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[8482],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7896),o=(n(2784),n(876));const a={sidebar_position:2},i="Getting Started with React",l={unversionedId:"getting-started/react",id:"getting-started/react",title:"Getting Started with React",description:"Install lexical and @lexical/react:",source:"@site/docs/getting-started/react.md",sourceDirName:"getting-started",slug:"/getting-started/react",permalink:"/lexical/docs/getting-started/react",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/getting-started/react.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Quick Start (Vanilla JS)",permalink:"/lexical/docs/getting-started/quick-start"},next:{title:"Theming",permalink:"/lexical/docs/getting-started/theming"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-react"},"Getting Started with React"),(0,o.kt)("p",null,"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"lexical")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@lexical/react"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install --save lexical @lexical/react\n")),(0,o.kt)("p",null,"Below is an example of a basic plain text editor using ",(0,o.kt)("inlineCode",{parentName:"p"},"lexical")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@lexical/react")," (",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/lexical-plain-text-example-g932e"},"try it yourself"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {$getRoot, $getSelection} from 'lexical';\nimport {useEffect} from 'react';\n\nimport {LexicalComposer} from '@lexical/react/LexicalComposer';\nimport {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';\nimport {ContentEditable} from '@lexical/react/LexicalContentEditable';\nimport {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';\nimport {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';\nimport {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';\nimport LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';\n\nconst theme = {\n  // Theme styling goes here\n  ...\n}\n\n// When the editor changes, you can get notified via the\n// LexicalOnChangePlugin!\nfunction onChange(editorState) {\n  editorState.read(() => {\n    // Read the contents of the EditorState here.\n    const root = $getRoot();\n    const selection = $getSelection();\n\n    console.log(root, selection);\n  });\n}\n\n// Lexical React plugins are React components, which makes them\n// highly composable. Furthermore, you can lazy load plugins if\n// desired, so you don't pay the cost for plugins until you\n// actually use them.\nfunction MyCustomAutoFocusPlugin() {\n  const [editor] = useLexicalComposerContext();\n\n  useEffect(() => {\n    // Focus the editor when the effect fires!\n    editor.focus();\n  }, [editor]);\n\n  return null;\n}\n\n// Catch any errors that occur during Lexical updates and log them\n// or throw them as needed. If you don't throw them, Lexical will\n// try to recover gracefully without losing user data.\nfunction onError(error) {\n  console.error(error);\n}\n\nfunction Editor() {\n  const initialConfig = {\n    namespace: 'MyEditor', \n    theme,\n    onError,\n  };\n\n  return (\n    <LexicalComposer initialConfig={initialConfig}>\n      <PlainTextPlugin\n        contentEditable={<ContentEditable />}\n        placeholder={<div>Enter some text...</div>}\n        ErrorBoundary={LexicalErrorBoundary}\n      />\n      <OnChangePlugin onChange={onChange} />\n      <HistoryPlugin />\n      <MyCustomAutoFocusPlugin />\n    </LexicalComposer>\n  );\n}\n")))}d.isMDXComponent=!0}}]);