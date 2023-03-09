"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[1133],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(r),u=i,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return r?a.createElement(f,n(n({ref:t},c),{},{components:r})):a.createElement(f,n({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,n=new Array(l);n[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,n[1]=o;for(var d=2;d<l;d++)n[d]=r[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(7896),i=(r(2784),r(876));const l={id:"lexical_file",title:"Module: @lexical/file",sidebar_label:"@lexical/file",sidebar_position:0,custom_edit_url:null},n=void 0,o={unversionedId:"api/modules/lexical_file",id:"api/modules/lexical_file",title:"Module: @lexical/file",description:"Functions",source:"@site/docs/api/modules/lexical_file.md",sourceDirName:"api/modules",slug:"/api/modules/lexical_file",permalink:"/lexical/docs/api/modules/lexical_file",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"lexical_file",title:"Module: @lexical/file",sidebar_label:"@lexical/file",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"@lexical/dragon",permalink:"/lexical/docs/api/modules/lexical_dragon"},next:{title:"@lexical/hashtag",permalink:"/lexical/docs/api/modules/lexical_hashtag"}},p={},d=[{value:"Functions",id:"functions",level:2},{value:"exportFile",id:"exportfile",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"importFile",id:"importfile",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:d},s="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"exportfile"},"exportFile"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"exportFile"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"editor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalEditor")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Readonly"),"<{ ",(0,i.kt)("inlineCode",{parentName:"td"},"fileName?"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"source?"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }",">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-file/src/fileImportExport.ts#L56"},"lexical-file/src/fileImportExport.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"importfile"},"importFile"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"importFile"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"editor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalEditor")))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-file/src/fileImportExport.ts#L15"},"lexical-file/src/fileImportExport.ts:15")))}m.isMDXComponent=!0}}]);