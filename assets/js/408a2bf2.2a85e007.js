"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[1316],{876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var l=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),s=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||i;return a?l.createElement(m,r(r({ref:t},p),{},{components:a})):l.createElement(m,r({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<i;s++)r[s]=a[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var l=a(7896),n=(a(2784),a(876));const i={id:"lexical.BaseSelection",title:"Interface: BaseSelection",sidebar_label:"BaseSelection",custom_edit_url:null},r=void 0,c={unversionedId:"api/interfaces/lexical.BaseSelection",id:"api/interfaces/lexical.BaseSelection",title:"Interface: BaseSelection",description:"lexical.BaseSelection",source:"@site/docs/api/interfaces/lexical.BaseSelection.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/lexical.BaseSelection",permalink:"/lexical/docs/api/interfaces/lexical.BaseSelection",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lexical.BaseSelection",title:"Interface: BaseSelection",sidebar_label:"BaseSelection",custom_edit_url:null},sidebar:"api",previous:{title:"TableSelection",permalink:"/lexical/docs/api/classes/lexical_table.TableSelection"},next:{title:"SerializedEditorState",permalink:"/lexical/docs/api/interfaces/lexical.SerializedEditorState"}},o={},s=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"dirty",id:"dirty",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"extract",id:"extract",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getNodes",id:"getnodes",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getTextContent",id:"gettextcontent",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"insertRawText",id:"insertrawtext",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"is",id:"is",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical"},"lexical"),".BaseSelection"),(0,n.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lexical/docs/api/classes/lexical.GridSelection"},(0,n.kt)("inlineCode",{parentName:"a"},"GridSelection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lexical/docs/api/classes/lexical.NodeSelection"},(0,n.kt)("inlineCode",{parentName:"a"},"NodeSelection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,n.kt)("inlineCode",{parentName:"a"},"RangeSelection")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"dirty"},"dirty"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"dirty"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical/src/LexicalSelection.ts#L266"},"lexical/src/LexicalSelection.ts:266")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"clone"},"clone"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseSelection"))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseSelection"))),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical/src/LexicalSelection.ts#L265"},"lexical/src/LexicalSelection.ts:265")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"extract"},"extract"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"extract"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,n.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,n.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical/src/LexicalSelection.ts#L267"},"lexical/src/LexicalSelection.ts:267")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getnodes"},"getNodes"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getNodes"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,n.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,n.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical/src/LexicalSelection.ts#L268"},"lexical/src/LexicalSelection.ts:268")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gettextcontent"},"getTextContent"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getTextContent"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical/src/LexicalSelection.ts#L269"},"lexical/src/LexicalSelection.ts:269")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"insertrawtext"},"insertRawText"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"insertRawText"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"text"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"text")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical/src/LexicalSelection.ts#L270"},"lexical/src/LexicalSelection.ts:270")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"is"},"is"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"is"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"selection"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"selection")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,n.kt)("inlineCode",{parentName:"a"},"RangeSelection"))," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.NodeSelection"},(0,n.kt)("inlineCode",{parentName:"a"},"NodeSelection"))," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.GridSelection"},(0,n.kt)("inlineCode",{parentName:"a"},"GridSelection")))))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical/src/LexicalSelection.ts#L271"},"lexical/src/LexicalSelection.ts:271")))}d.isMDXComponent=!0}}]);