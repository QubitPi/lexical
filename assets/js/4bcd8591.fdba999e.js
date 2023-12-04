"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[8332],{876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7896),r=(n(2784),n(876));const o={sidebar_position:2},i="Creating a React Plugin",c={unversionedId:"react/create_plugin",id:"react/create_plugin",title:"Creating a React Plugin",description:"In addition to using the Lexical React plugins offered by the core library, you can make your own plugins to extend or alter Lexical's functionality to suit your own use cases.",source:"@site/docs/react/create_plugin.md",sourceDirName:"react",slug:"/react/create_plugin",permalink:"/lexical/docs/react/create_plugin",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/react/create_plugin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Lexical Plugins",permalink:"/lexical/docs/react/plugins"},next:{title:"React",permalink:"/lexical/docs/collaboration/react"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-react-plugin"},"Creating a React Plugin"),(0,r.kt)("p",null,"In addition to using the Lexical React plugins offered by the core library, you can make your own plugins to extend or alter Lexical's functionality to suit your own use cases."),(0,r.kt)("p",null,"Lexical's React plugin interface is simple - just create a React component and add it as a child of your LexicalComposer component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"}," <LexicalComposer>\n    <MyLexicalPlugin>\n </LexicalComposer>\n")),(0,r.kt)("p",null,"If the Plugin introduces new nodes, they have to be registered in ",(0,r.kt)("inlineCode",{parentName:"p"},"initialConfig.nodes"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const initialConfig = {\n  namespace: "MyEditor",\n  nodes: [MyLexicalNode],\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"}," <LexicalComposer initialConfig={initialConfig}>\n    <MyLexicalPlugin>\n </LexicalComposer>\n")),(0,r.kt)("p",null,"LexicalComposer provides access to the underlying LexicalEditor instance via React Context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"//MyLexicalPlugin.js\n\nexport function MyLexicalPlugin(props) {\n    const [editor] = useLexicalComposerContext();\n    ...\n}\n")),(0,r.kt)("p",null,"With access to the Editor, your plugin can extend Lexical via ",(0,r.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/commands"},"Commands"),", ",(0,r.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/transforms"},"Transforms"),", or other APIs. For example, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/blob/0775ab929e65723433626fa8c25900941e7f232f/packages/lexical-playground/src/plugins/TwitterPlugin/index.ts#L18"},"TwitterPlugin")," embeds a tweet into the editor, fetching the data asynchronously from Twitter based on the provided Tweet ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"export const INSERT_TWEET_COMMAND: LexicalCommand<string> = createCommand();\n\nexport default function TwitterPlugin(): JSX.Element | null {\n  const [editor] = useLexicalComposerContext();\n\n  useEffect(() => {\n    if (!editor.hasNodes([TweetNode])) {\n      throw new Error('TwitterPlugin: TweetNode not registered on editor (initialConfig.nodes)');\n    }\n\n    return editor.registerCommand<string>(\n      INSERT_TWEET_COMMAND,\n      (payload) => {\n        const tweetNode = $createTweetNode(payload);\n        $insertNodeToNearestRoot(tweetNode);\n\n        return true;\n      },\n      COMMAND_PRIORITY_EDITOR,\n    );\n  }, [editor]);\n\n  return null;\n}\n")),(0,r.kt)("p",null,"TwitterPlugin is just a React component that accesses the Lexical editor via React Context (useLexicalComposerContext). Using the LexicalEditor instance, this plugin does two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verifies that there is a TweetNode registered on the editor (if you forget to register the node, you can't do #2)"),(0,r.kt)("li",{parentName:"ol"},'registers a "command", passing a callback that will run when that command is dispatched. The command callback creates and inserts a TweetNode in the editor.')),(0,r.kt)("p",null,"You can see how it's used in the playground ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/blob/0775ab929e65723433626fa8c25900941e7f232f/packages/lexical-playground/src/Editor.tsx#L137"},"here"),". It's added it as a child of a LexicalComposer component, which does the job of providing the Context necessary for access to the editor instance. To actually trigger this command callback and insert a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/blob/b0fa38615c03f1c4fc7c8c5ea26412b723770e55/packages/lexical-playground/src/nodes/TweetNode.tsx#L212"},"TweetNode"),", we have a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/blob/b0fa38615c03f1c4fc7c8c5ea26412b723770e55/packages/lexical-playground/src/plugins/ToolbarPlugin.tsx#L534"},"button"),' that "dispatches" the Tweet command we registered in the plugin.'),(0,r.kt)("p",null,"While the TwitterPlugin registers a command that inserts a custom node, this is only one example of what can be done with a plugin. To get a better idea of what's possible, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/tree/0775ab929e65723433626fa8c25900941e7f232f/packages/lexical-playground/src/plugins"},"plugins defined in the playground"),"."))}d.isMDXComponent=!0}}]);