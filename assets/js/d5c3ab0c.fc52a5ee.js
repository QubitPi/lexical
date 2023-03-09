"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[648],{876:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(2784);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),g=i,h=u["".concat(c,".").concat(g)]||u[g]||d[g]||l;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7896),i=(t(2784),t(876));const l={sidebar_position:1},r="Lexical Plugins",o={unversionedId:"react/plugins",id:"react/plugins",title:"Lexical Plugins",description:"React-based plugins are using Lexical editor instance from `` context:",source:"@site/docs/react/plugins.md",sourceDirName:"react",slug:"/react/plugins",permalink:"/lexical/docs/react/plugins",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/react/plugins.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/lexical/docs/react/"},next:{title:"Creating a React Plugin",permalink:"/lexical/docs/react/create_plugin"}},c={},s=[{value:"<code>LexicalPlainTextPlugin</code>",id:"lexicalplaintextplugin",level:3},{value:"<code>LexicalRichTextPlugin</code>",id:"lexicalrichtextplugin",level:3},{value:"<code>LexicalOnChangePlugin</code>",id:"lexicalonchangeplugin",level:3},{value:"<code>LexicalHistoryPlugin</code>",id:"lexicalhistoryplugin",level:3},{value:"<code>LexicalLinkPlugin</code>",id:"lexicallinkplugin",level:3},{value:"<code>LexicalListPlugin</code>",id:"lexicallistplugin",level:3},{value:"<code>LexicalCheckListPlugin</code>",id:"lexicalchecklistplugin",level:3},{value:"<code>LexicalTablePlugin</code>",id:"lexicaltableplugin",level:3},{value:"<code>LexicalAutoLinkPlugin</code>",id:"lexicalautolinkplugin",level:3},{value:"<code>LexicalClearEditorPlugin</code>",id:"lexicalcleareditorplugin",level:3},{value:"<code>LexicalMarkdownShortcutPlugin</code>",id:"lexicalmarkdownshortcutplugin",level:3},{value:"<code>TableOfContentsPlugin</code>",id:"tableofcontentsplugin",level:3}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lexical-plugins"},"Lexical Plugins"),(0,i.kt)("p",null,"React-based plugins are using Lexical editor instance from ",(0,i.kt)("inlineCode",{parentName:"p"},"<LexicalComposer>")," context:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {LexicalComposer} from '@lexical/react/LexicalComposer';\nimport {PlainTextPlugin} from '@lexical/react/LexicalPlainTextPlugin';\nimport {ContentEditable} from '@lexical/react/LexicalContentEditable';\nimport {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';\nimport {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const initialConfig = {\n  namespace: 'MyEditor',\n  theme,\n  onError,\n};\n\n<LexicalComposer initialConfig={initialConfig}>\n  <PlainTextPlugin\n    contentEditable={<ContentEditable />}\n    placeholder={<div>Enter some text...</div>}\n  />\n  <HistoryPlugin />\n  <OnChangePlugin onChange={onChange} />\n  ...\n</LexicalComposer>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Many plugins might require you to register the one or many Lexical nodes in order for the plugin to work. You can do this by passing a reference to the node to the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," array in your initial editor configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const initialConfig = {\n  namespace: 'MyEditor',\n  theme,\n  nodes: [ListNode, ListItemNode], // Pass the references to the nodes here\n  onError,\n};\n")),(0,i.kt)("h3",{id:"lexicalplaintextplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalPlainTextPlugin")),(0,i.kt)("p",null,"React wrapper for ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/plain-text")," that adds major features for plain text editing, including typing, deletion and copy/pasting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<PlainTextPlugin\n  contentEditable={<ContentEditable />}\n  placeholder={<div>Enter some text...</div>}\n  ErrorBoundary={LexicalErrorBoundary}\n/>\n")),(0,i.kt)("h3",{id:"lexicalrichtextplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalRichTextPlugin")),(0,i.kt)("p",null,"React wrapper for ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/rich-text")," that adds major features for rich text editing, including typing, deletion, copy/pasting, indent/outdent and bold/italic/underline/strikethrough text formatting"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<RichTextPlugin\n  contentEditable={<ContentEditable />}\n  placeholder={<div>Enter some text...</div>}\n  ErrorBoundary={LexicalErrorBoundary}\n/>\n")),(0,i.kt)("h3",{id:"lexicalonchangeplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalOnChangePlugin")),(0,i.kt)("p",null,"Plugin that calls ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange")," whenever Lexical state is updated. Using ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreHistoryMergeTagChange")," (",(0,i.kt)("inlineCode",{parentName:"p"},"true")," by default) and ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreSelectionChange")," (",(0,i.kt)("inlineCode",{parentName:"p"},"false")," by default) can give more granular control over changes that are causing ",(0,i.kt)("inlineCode",{parentName:"p"},"onChange")," call"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<OnChangePlugin onChange={onChange} />\n")),(0,i.kt)("h3",{id:"lexicalhistoryplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalHistoryPlugin")),(0,i.kt)("p",null,"React wrapper for ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/history")," that adds support for history stack management and ",(0,i.kt)("inlineCode",{parentName:"p"},"undo")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"redo")," commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<HistoryPlugin />\n")),(0,i.kt)("h3",{id:"lexicallinkplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalLinkPlugin")),(0,i.kt)("p",null,"React wrapper for ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/link")," that adds support for links, including ",(0,i.kt)("inlineCode",{parentName:"p"},"toggleLink")," command support that toggles link for selected text"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<LinkPlugin />\n")),(0,i.kt)("h3",{id:"lexicallistplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalListPlugin")),(0,i.kt)("p",null,"React wrapper for ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/list")," that adds support for lists (ordered and unordered)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<ListPlugin />\n")),(0,i.kt)("h3",{id:"lexicalchecklistplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalCheckListPlugin")),(0,i.kt)("p",null,"React wrapper for ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/list")," that adds support for check lists. Note that it requires some css to render check/uncheck marks. See PlaygroundEditorTheme.css for details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<CheckListPlugin />\n")),(0,i.kt)("h3",{id:"lexicaltableplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalTablePlugin")),(0,i.kt)("p",null,"React wrapper for ",(0,i.kt)("inlineCode",{parentName:"p"},"@lexical/table")," that adds support for tables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<TablePlugin />\n")),(0,i.kt)("h3",{id:"lexicalautolinkplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalAutoLinkPlugin")),(0,i.kt)("p",null,"Plugin will convert text into links based on passed matchers list. In example below whenever user types url-like string it will automaticaly convert it into a link node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const URL_MATCHER =\n  /((https?:\\/\\/(www\\.)?)|(www\\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;\n\nconst MATCHERS = [\n  (text) => {\n    const match = URL_MATCHER.exec(text);\n    if (match === null) {\n      return null;\n    }\n    const fullMatch = match[0];\n    return {\n      index: match.index,\n      length: fullMatch.length,\n      text: fullMatch,\n      url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,\n      // attributes: { rel: 'noopener', target: '_blank' }, // Optional link attributes\n    };\n  },\n];\n\n...\n\n<AutoLinkPlugin matchers={MATCHERS} />\n")),(0,i.kt)("h3",{id:"lexicalcleareditorplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalClearEditorPlugin")),(0,i.kt)("p",null,"Adds ",(0,i.kt)("inlineCode",{parentName:"p"},"clearEditor")," command support to clear editor's content"),(0,i.kt)("h3",{id:"lexicalmarkdownshortcutplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"LexicalMarkdownShortcutPlugin")),(0,i.kt)("p",null,"Adds markdown shortcut support: headings, lists, code blocks, quotes, links and inline styles (bold, italic, strikethrough)"),(0,i.kt)("h3",{id:"tableofcontentsplugin"},(0,i.kt)("inlineCode",{parentName:"h3"},"TableOfContentsPlugin")),(0,i.kt)("p",null,"This plugin allows you to navigate to certain sections of the page by clicking on headings that exist inside these sections. Once you load the plugin, it automatically collects and injects the headings of the page inside the table of contents, then it listens to any deletions or modifications to those headings and updates the table of contents. Additionally, it's able to track any newly added headings and inserts them in the table of contents once they are created. This plugin also supports lazy loading - so you can defer adding the plugin until when the user needs it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<TableOfContentsPlugin />\n")),(0,i.kt)("p",null,"You can alternatively leverage the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"LexicalTableOfContents")," API, which provides you with all the functioanlity that ",(0,i.kt)("inlineCode",{parentName:"p"},"TableOfContentsPlugin")," provides, but without any styling.\nIn order to use ",(0,i.kt)("inlineCode",{parentName:"p"},"LexicalTableOfContents"),", you need to pass a callback function in its children. This callback function gives you access to the up-to-date data of the table of contents. You can access this data through a single parameter for the callback which comes in the form of an array of arrays ",(0,i.kt)("inlineCode",{parentName:"p"},"[[headingKey, headingTextContent, headingTag], [], [], ...]"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"headingKey"),": Unique key that identifies the heading.",(0,i.kt)("inlineCode",{parentName:"p"},"headingTextContent"),": A string of the exact text of the heading.",(0,i.kt)("inlineCode",{parentName:"p"},"headingTag"),": A string that reads either 'h1', 'h2', or 'h3'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<LexicalTableOfContents>\n  {(tableOfContentsArray) => {\n    return <MyCustomTableOfContetsPlugin tableOfContents={tableOfContentsArray} />;\n  }}\n</LexicalTableOfContents>\n")))}d.isMDXComponent=!0}}]);