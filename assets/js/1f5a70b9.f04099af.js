"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[6728],{876:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var l=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=l.createContext({}),p=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=i,u=s["".concat(d,".").concat(m)]||s[m]||k[m]||n;return a?l.createElement(u,r(r({ref:t},o),{},{components:a})):l.createElement(u,r({ref:t},o))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[s]="string"==typeof e?e:i,r[1]=c;for(var p=2;p<n;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>c,toc:()=>p});var l=a(7896),i=(a(2784),a(876));const n={id:"lexical.GridSelection",title:"Class: GridSelection",sidebar_label:"GridSelection",custom_edit_url:null},r=void 0,c={unversionedId:"api/classes/lexical.GridSelection",id:"api/classes/lexical.GridSelection",title:"Class: GridSelection",description:"lexical.GridSelection",source:"@site/docs/api/classes/lexical.GridSelection.md",sourceDirName:"api/classes",slug:"/api/classes/lexical.GridSelection",permalink:"/lexical/docs/api/classes/lexical.GridSelection",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lexical.GridSelection",title:"Class: GridSelection",sidebar_label:"GridSelection",custom_edit_url:null},sidebar:"api",previous:{title:"ElementNode",permalink:"/lexical/docs/api/classes/lexical.ElementNode"},next:{title:"LexicalEditor",permalink:"/lexical/docs/api/classes/lexical.LexicalEditor"}},d={},p=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"_cachedNodes",id:"_cachednodes",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"anchor",id:"anchor",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"dirty",id:"dirty",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"focus",id:"focus",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"gridKey",id:"gridkey",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods",level:2},{value:"clone",id:"clone",level:3},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"extract",id:"extract",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getCharacterOffsets",id:"getcharacteroffsets",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getNodes",id:"getnodes",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getShape",id:"getshape",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getTextContent",id:"gettextcontent",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"insertNodes",id:"insertnodes",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"insertRawText",id:"insertrawtext",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"insertText",id:"inserttext",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"is",id:"is",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Implementation of",id:"implementation-of-6",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"isBackward",id:"isbackward",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"isCollapsed",id:"iscollapsed",level:3},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-18",level:4}],o={toc:p},s="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(s,(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical"},"lexical"),".GridSelection"),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseSelection")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new GridSelection"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"gridKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"anchor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"focus"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"gridKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"anchor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PointType"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"focus")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PointType"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L400"},"lexical/src/LexicalSelection.ts:400")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"_cachednodes"},"_","cachedNodes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"_","cachedNodes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L398"},"lexical/src/LexicalSelection.ts:398")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"anchor"},"anchor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"anchor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PointType")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L395"},"lexical/src/LexicalSelection.ts:395")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dirty"},"dirty"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dirty"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},"BaseSelection"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection#dirty"},"dirty")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L397"},"lexical/src/LexicalSelection.ts:397")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"focus"},"focus"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"focus"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PointType")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L396"},"lexical/src/LexicalSelection.ts:396")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gridkey"},"gridKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"gridKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L394"},"lexical/src/LexicalSelection.ts:394")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"clone"},"clone"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"clone"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.GridSelection"},(0,i.kt)("inlineCode",{parentName:"a"},"GridSelection"))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.GridSelection"},(0,i.kt)("inlineCode",{parentName:"a"},"GridSelection"))),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},"BaseSelection"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection#clone"},"clone")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L431"},"lexical/src/LexicalSelection.ts:431")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"extract"},"extract"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"extract"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},"BaseSelection"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection#extract"},"extract")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L447"},"lexical/src/LexicalSelection.ts:447")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getcharacteroffsets"},"getCharacterOffsets"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getCharacterOffsets"),"(): ","[",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"]"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L443"},"lexical/src/LexicalSelection.ts:443")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getnodes"},"getNodes"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getNodes"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]"),(0,i.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},"BaseSelection"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection#getnodes"},"getNodes")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L497"},"lexical/src/LexicalSelection.ts:497")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getshape"},"getShape"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getShape"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#gridselectionshape"},(0,i.kt)("inlineCode",{parentName:"a"},"GridSelectionShape"))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#gridselectionshape"},(0,i.kt)("inlineCode",{parentName:"a"},"GridSelectionShape"))),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L468"},"lexical/src/LexicalSelection.ts:468")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettextcontent"},"getTextContent"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getTextContent"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},"BaseSelection"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection#gettextcontent"},"getTextContent")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L634"},"lexical/src/LexicalSelection.ts:634")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"insertnodes"},"insertNodes"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"insertNodes"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"nodes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"selectStart?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nodes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalNode"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalNode")),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"selectStart?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L459"},"lexical/src/LexicalSelection.ts:459")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"insertrawtext"},"insertRawText"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"insertRawText"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"text"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"text")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},"BaseSelection"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection#insertrawtext"},"insertRawText")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L451"},"lexical/src/LexicalSelection.ts:451")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inserttext"},"insertText"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"insertText"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L455"},"lexical/src/LexicalSelection.ts:455")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"is"},"is"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"is"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"selection"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"selection")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.RangeSelection"},(0,i.kt)("inlineCode",{parentName:"a"},"RangeSelection"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.NodeSelection"},(0,i.kt)("inlineCode",{parentName:"a"},"NodeSelection"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.GridSelection"},(0,i.kt)("inlineCode",{parentName:"a"},"GridSelection")))))),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection"},"BaseSelection"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/interfaces/lexical.BaseSelection#is"},"is")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L410"},"lexical/src/LexicalSelection.ts:410")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isbackward"},"isBackward"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isBackward"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L439"},"lexical/src/LexicalSelection.ts:439")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"iscollapsed"},"isCollapsed"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isCollapsed"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L435"},"lexical/src/LexicalSelection.ts:435")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"set"},"set"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"set"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"gridKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"anchorCellKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"focusCellKey"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"gridKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"anchorCellKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"focusCellKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical/src/LexicalSelection.ts#L423"},"lexical/src/LexicalSelection.ts:423")))}k.isMDXComponent=!0}}]);