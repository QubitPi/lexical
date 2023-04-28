"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[4278],{876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7896),o=(n(2784),n(876));const a={},i="Read Mode / Edit Mode",l={unversionedId:"concepts/read-only",id:"concepts/read-only",title:"Read Mode / Edit Mode",description:"Lexical supports two modes:",source:"@site/docs/concepts/read-only.md",sourceDirName:"concepts",slug:"/concepts/read-only",permalink:"/lexical/docs/concepts/read-only",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/concepts/read-only.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Selection",permalink:"/lexical/docs/concepts/selection"},next:{title:"Serialization & Deserialization",permalink:"/lexical/docs/concepts/serialization"}},c={},d=[{value:"Setting the mode",id:"setting-the-mode",level:2},{value:"Reading the mode",id:"reading-the-mode",level:2}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"read-mode--edit-mode"},"Read Mode / Edit Mode"),(0,o.kt)("p",null,"Lexical supports two modes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read mode"),(0,o.kt)("li",{parentName:"ul"},"Edit mode")),(0,o.kt)("p",null,"The default behavior for Lexical is edit mode, or more accurately not read only mode. Under-the-hood, the main\nimplementation detail is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"contentEditable")," is being set to ",(0,o.kt)("inlineCode",{parentName:"p"},'"false"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"true"')," depending on the mode.\nSpecific plugins can listen to the mode change too \u2013 allowing them to customize parts of the UI depending on the\nmode."),(0,o.kt)("h2",{id:"setting-the-mode"},"Setting the mode"),(0,o.kt)("p",null,"In order to set the mode, this can be done on creation of the editor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const editor = createEditor({\n  editable: true,\n  ...\n})\n")),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("inlineCode",{parentName:"p"},"@lexical/react")," this can be done on the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialConfig")," passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<LexicalComposer>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<LexicalComposer initialConfig={{editable: true}}>\n  ...\n</LexicalComposer>\n")),(0,o.kt)("p",null,"After an editor is created, the mode can be changed imperatively:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"editor.setEditable(true);\n")),(0,o.kt)("h2",{id:"reading-the-mode"},"Reading the mode"),(0,o.kt)("p",null,"In order to find the current mode of the editor you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const isEditable = editor.isEditable(); // Returns true or false\n")),(0,o.kt)("p",null,"You can also get notified when the editor's read only mode has changed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const removeEditableListener = editor.registerEditableListener(\n  (isEditable) => {\n    // The editor's mode is passed in!\n    console.log(isEditable);\n  },\n);\n\n// Do not forget to unregister the listener when no longer needed!\nremoveEditableListener();\n")))}p.isMDXComponent=!0}}]);