"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[9458],{876:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var l=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),p=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||n;return a?l.createElement(u,i(i({ref:t},s),{},{components:a})):l.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=a(7896),r=(a(2784),a(876));const n={id:"lexical_overflow.OverflowNode",title:"Class: OverflowNode",sidebar_label:"OverflowNode",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/lexical_overflow.OverflowNode",id:"api/classes/lexical_overflow.OverflowNode",title:"Class: OverflowNode",description:"@lexical/overflow.OverflowNode",source:"@site/docs/api/classes/lexical_overflow.OverflowNode.md",sourceDirName:"api/classes",slug:"/api/classes/lexical_overflow.OverflowNode",permalink:"/lexical/docs/api/classes/lexical_overflow.OverflowNode",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lexical_overflow.OverflowNode",title:"Class: OverflowNode",sidebar_label:"OverflowNode",custom_edit_url:null},sidebar:"api",previous:{title:"OffsetView",permalink:"/lexical/docs/api/classes/lexical_offset.OffsetView"},next:{title:"TableCellNode",permalink:"/lexical/docs/api/classes/lexical_table.TableCellNode"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"createDOM",id:"createdom",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"excludeFromCopy",id:"excludefromcopy",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"exportJSON",id:"exportjson",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"insertNewAfter",id:"insertnewafter",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"updateDOM",id:"updatedom",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"clone",id:"clone",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"getType",id:"gettype",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"importDOM",id:"importdom",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"importJSON",id:"importjson",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-9",level:4}],s={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_overflow"},"@lexical/overflow"),".OverflowNode"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementNode"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"OverflowNode"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new OverflowNode"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"key?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode"},"ElementNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L47"},"lexical-overflow/src/index.ts:47")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"createdom"},"createDOM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createDOM"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical#editorconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"EditorConfig")))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,"ElementNode.createDOM"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L59"},"lexical-overflow/src/index.ts:59")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"excludefromcopy"},"excludeFromCopy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"excludeFromCopy"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode"},"ElementNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode#excludefromcopy"},"excludeFromCopy")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L80"},"lexical-overflow/src/index.ts:80")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"exportjson"},"exportJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"exportJSON"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#serializedelementnode"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedElementNode")),"<",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#serializedlexicalnode"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedLexicalNode")),">"),(0,r.kt)("p",null,"Controls how the this node is serialized to JSON. This is important for\ncopy and paste between Lexical editors sharing the same namespace. It's also important\nif you're serializing to JSON for persistent storage somewhere.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/serialization#lexical---html"},"Serialization & Deserialization"),"."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#serializedelementnode"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedElementNode")),"<",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#serializedlexicalnode"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedLexicalNode")),">"),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode"},"ElementNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode#exportjson"},"exportJSON")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L52"},"lexical-overflow/src/index.ts:52")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"insertnewafter"},"insertNewAfter"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"insertNewAfter"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"selection"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"restoreSelection?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,r.kt)("inlineCode",{parentName:"a"},"LexicalNode"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,r.kt)("inlineCode",{parentName:"a"},"RangeSelection"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"restoreSelection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,r.kt)("inlineCode",{parentName:"a"},"LexicalNode"))),(0,r.kt)("h4",{id:"overrides-4"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode"},"ElementNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.ElementNode#insertnewafter"},"insertNewAfter")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L72"},"lexical-overflow/src/index.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatedom"},"updateDOM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"updateDOM"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"prevNode"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dom"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"prevNode")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_overflow.OverflowNode"},(0,r.kt)("inlineCode",{parentName:"a"},"OverflowNode")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dom")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"HTMLElement"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"overrides-5"},"Overrides"),(0,r.kt)("p",null,"ElementNode.updateDOM"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L68"},"lexical-overflow/src/index.ts:68")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clone"},"clone"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"clone"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_overflow.OverflowNode"},(0,r.kt)("inlineCode",{parentName:"a"},"OverflowNode"))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_overflow.OverflowNode"},(0,r.kt)("inlineCode",{parentName:"a"},"OverflowNode")))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_overflow.OverflowNode"},(0,r.kt)("inlineCode",{parentName:"a"},"OverflowNode"))),(0,r.kt)("h4",{id:"overrides-6"},"Overrides"),(0,r.kt)("p",null,"ElementNode.clone"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L35"},"lexical-overflow/src/index.ts:35")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettype"},"getType"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"getType"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-7"},"Overrides"),(0,r.kt)("p",null,"ElementNode.getType"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L31"},"lexical-overflow/src/index.ts:31")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"importdom"},"importDOM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"importDOM"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L43"},"lexical-overflow/src/index.ts:43")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"importjson"},"importJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"importJSON"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"serializedNode"),"): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_overflow.OverflowNode"},(0,r.kt)("inlineCode",{parentName:"a"},"OverflowNode"))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serializedNode")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_overflow#serializedoverflownode"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedOverflowNode")))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_overflow.OverflowNode"},(0,r.kt)("inlineCode",{parentName:"a"},"OverflowNode"))),(0,r.kt)("h4",{id:"overrides-8"},"Overrides"),(0,r.kt)("p",null,"ElementNode.importJSON"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/d2ae82d0/packages/lexical-overflow/src/index.ts#L39"},"lexical-overflow/src/index.ts:39")))}m.isMDXComponent=!0}}]);