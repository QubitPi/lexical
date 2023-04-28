"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[5824],{876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(2784);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),f=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=f(a),m=l,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var f=2;f<i;f++)r[f]=a[f];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6471:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>f});var n=a(7896),l=(a(2784),a(876));const i={id:"lexical_offset.OffsetView",title:"Class: OffsetView",sidebar_label:"OffsetView",custom_edit_url:null},r=void 0,o={unversionedId:"api/classes/lexical_offset.OffsetView",id:"api/classes/lexical_offset.OffsetView",title:"Class: OffsetView",description:"@lexical/offset.OffsetView",source:"@site/docs/api/classes/lexical_offset.OffsetView.md",sourceDirName:"api/classes",slug:"/api/classes/lexical_offset.OffsetView",permalink:"/lexical/docs/api/classes/lexical_offset.OffsetView",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lexical_offset.OffsetView",title:"Class: OffsetView",sidebar_label:"OffsetView",custom_edit_url:null},sidebar:"api",previous:{title:"MarkNode",permalink:"/lexical/docs/api/classes/lexical_mark.MarkNode"},next:{title:"OverflowNode",permalink:"/lexical/docs/api/classes/lexical_overflow.OverflowNode"}},s={},f=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_blockOffsetSize",id:"_blockoffsetsize",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"_firstNode",id:"_firstnode",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"_offsetMap",id:"_offsetmap",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"Methods",id:"methods",level:2},{value:"createSelectionFromOffsets",id:"createselectionfromoffsets",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getOffsetsFromSelection",id:"getoffsetsfromselection",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4}],p={toc:f};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_offset"},"@lexical/offset"),".OffsetView"),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new OffsetView"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"offsetMap"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"firstNode"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"blockOffsetSize?"),")"),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"offsetMap")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"OffsetMap")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"firstNode")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"OffsetNode")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"blockOffsetSize")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"1"))))),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical-offset/src/index.ts#L66"},"lexical-offset/src/index.ts:66")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"_blockoffsetsize"},"_","blockOffsetSize"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"_","blockOffsetSize"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical-offset/src/index.ts#L64"},"lexical-offset/src/index.ts:64")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"_firstnode"},"_","firstNode"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"_","firstNode"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"p"},"OffsetNode")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical-offset/src/index.ts#L63"},"lexical-offset/src/index.ts:63")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"_offsetmap"},"_","offsetMap"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"_","offsetMap"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"OffsetMap")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical-offset/src/index.ts#L62"},"lexical-offset/src/index.ts:62")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"createselectionfromoffsets"},"createSelectionFromOffsets"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"createSelectionFromOffsets"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"originalStart"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"originalEnd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"diffOffsetView?"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"RangeSelection"))),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"originalStart")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"originalEnd")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"diffOffsetView?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_offset.OffsetView"},(0,l.kt)("inlineCode",{parentName:"a"},"OffsetView")))))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"RangeSelection"))),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical-offset/src/index.ts#L76"},"lexical-offset/src/index.ts:76")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getoffsetsfromselection"},"getOffsetsFromSelection"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"getOffsetsFromSelection"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"selection"),"): ","[",(0,l.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"selection")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,l.kt)("inlineCode",{parentName:"a"},"RangeSelection")))))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"[",(0,l.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/c652250/packages/lexical-offset/src/index.ts#L190"},"lexical-offset/src/index.ts:190")))}d.isMDXComponent=!0}}]);