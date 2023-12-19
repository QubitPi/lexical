"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[5900],{876:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var l=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),o=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=o(a),m=r,N=c["".concat(p,".").concat(m)]||c[m]||k[m]||n;return a?l.createElement(N,i(i({ref:t},s),{},{components:a})):l.createElement(N,i({ref:t},s))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[c]="string"==typeof e?e:r,i[1]=d;for(var o=2;o<n;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var l=a(7896),r=(a(2784),a(876));const n={id:"lexical_table.TableNode",title:"Class: TableNode",sidebar_label:"TableNode",custom_edit_url:null},i=void 0,d={unversionedId:"api/classes/lexical_table.TableNode",id:"api/classes/lexical_table.TableNode",title:"Class: TableNode",description:"@lexical/table.TableNode",source:"@site/docs/api/classes/lexical_table.TableNode.md",sourceDirName:"api/classes",slug:"/api/classes/lexical_table.TableNode",permalink:"/lexical/docs/api/classes/lexical_table.TableNode",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lexical_table.TableNode",title:"Class: TableNode",sidebar_label:"TableNode",custom_edit_url:null},sidebar:"api",previous:{title:"TableCellNode",permalink:"/lexical/docs/api/classes/lexical_table.TableCellNode"},next:{title:"TableRowNode",permalink:"/lexical/docs/api/classes/lexical_table.TableRowNode"}},p={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"canBeEmpty",id:"canbeempty",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"canExtractContents",id:"canextractcontents",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"canIndent",id:"canindent",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"canSelectBefore",id:"canselectbefore",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"createDOM",id:"createdom",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"exportDOM",id:"exportdom",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"exportJSON",id:"exportjson",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getCellFromCords",id:"getcellfromcords",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getCellFromCordsOrThrow",id:"getcellfromcordsorthrow",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getCellNodeFromCords",id:"getcellnodefromcords",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getCellNodeFromCordsOrThrow",id:"getcellnodefromcordsorthrow",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"getCordsFromCellNode",id:"getcordsfromcellnode",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"isShadowRoot",id:"isshadowroot",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"updateDOM",id:"updatedom",level:3},{value:"Returns",id:"returns-13",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"clone",id:"clone",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"getType",id:"gettype",level:3},{value:"Returns",id:"returns-15",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"importDOM",id:"importdom",level:3},{value:"Returns",id:"returns-16",level:4},{value:"Overrides",id:"overrides-11",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"importJSON",id:"importjson",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-17",level:4},{value:"Overrides",id:"overrides-12",level:4},{value:"Defined in",id:"defined-in-18",level:4}],s={toc:o},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_table"},"@lexical/table"),".TableNode"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode"},(0,r.kt)("inlineCode",{parentName:"a"},"DEPRECATED_GridNode"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"TableNode"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new TableNode"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"key?"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"key?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode"},"DEPRECATED_GridNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode#constructor"},"constructor")),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L61"},"lexical-table/src/LexicalTableNode.ts:61")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"canbeempty"},"canBeEmpty"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"canBeEmpty"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode"},"DEPRECATED_GridNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode#canbeempty"},"canBeEmpty")),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L122"},"lexical-table/src/LexicalTableNode.ts:122")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canextractcontents"},"canExtractContents"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"canExtractContents"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"overrides-2"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode"},"DEPRECATED_GridNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode#canextractcontents"},"canExtractContents")),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L118"},"lexical-table/src/LexicalTableNode.ts:118")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canindent"},"canIndent"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"canIndent"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("h4",{id:"overrides-3"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode"},"DEPRECATED_GridNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode#canindent"},"canIndent")),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L216"},"lexical-table/src/LexicalTableNode.ts:216")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canselectbefore"},"canSelectBefore"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"canSelectBefore"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L212"},"lexical-table/src/LexicalTableNode.ts:212")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createdom"},"createDOM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createDOM"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"editor?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical#editorconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"EditorConfig")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"editor?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalEditor"},(0,r.kt)("inlineCode",{parentName:"a"},"LexicalEditor")))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,r.kt)("h4",{id:"overrides-4"},"Overrides"),(0,r.kt)("p",null,"DEPRECATED","_","GridNode.createDOM"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L73"},"lexical-table/src/LexicalTableNode.ts:73")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"exportdom"},"exportDOM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"exportDOM"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"editor"),"): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#domexportoutput"},(0,r.kt)("inlineCode",{parentName:"a"},"DOMExportOutput"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"editor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalEditor"},(0,r.kt)("inlineCode",{parentName:"a"},"LexicalEditor")))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#domexportoutput"},(0,r.kt)("inlineCode",{parentName:"a"},"DOMExportOutput"))),(0,r.kt)("h4",{id:"overrides-5"},"Overrides"),(0,r.kt)("p",null,"DEPRECATED","_","GridNode.exportDOM"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L85"},"lexical-table/src/LexicalTableNode.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"exportjson"},"exportJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"exportJSON"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#serializedelementnode"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedElementNode"))),(0,r.kt)("p",null,"Controls how the this node is serialized to JSON. This is important for\ncopy and paste between Lexical editors sharing the same namespace. It's also important\nif you're serializing to JSON for persistent storage somewhere.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/serialization#lexical---html"},"Serialization & Deserialization"),"."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#serializedelementnode"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedElementNode"))),(0,r.kt)("h4",{id:"overrides-6"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode"},"DEPRECATED_GridNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode#exportjson"},"exportJSON")),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L65"},"lexical-table/src/LexicalTableNode.ts:65")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcellfromcords"},"getCellFromCords"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCellFromCords"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grid"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_table#cell"},(0,r.kt)("inlineCode",{parentName:"a"},"Cell"))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"grid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Grid"))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_table#cell"},(0,r.kt)("inlineCode",{parentName:"a"},"Cell"))),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L158"},"lexical-table/src/LexicalTableNode.ts:158")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcellfromcordsorthrow"},"getCellFromCordsOrThrow"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCellFromCordsOrThrow"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grid"),"): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_table#cell"},(0,r.kt)("inlineCode",{parentName:"a"},"Cell"))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"grid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Grid"))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_table#cell"},(0,r.kt)("inlineCode",{parentName:"a"},"Cell"))),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L176"},"lexical-table/src/LexicalTableNode.ts:176")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcellnodefromcords"},"getCellNodeFromCords"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCellNodeFromCords"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grid"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableCellNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCellNode"))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"grid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Grid"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableCellNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCellNode"))),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L186"},"lexical-table/src/LexicalTableNode.ts:186")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcellnodefromcordsorthrow"},"getCellNodeFromCordsOrThrow"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCellNodeFromCordsOrThrow"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grid"),"): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableCellNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCellNode"))),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"grid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Grid"))))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableCellNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCellNode"))),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L202"},"lexical-table/src/LexicalTableNode.ts:202")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcordsfromcellnode"},"getCordsFromCellNode"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCordsFromCellNode"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"tableCellNode"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"grid"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"tableCellNode")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_table.TableCellNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableCellNode")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"grid")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Grid"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L130"},"lexical-table/src/LexicalTableNode.ts:130")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isshadowroot"},"isShadowRoot"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isShadowRoot"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"overrides-7"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode"},"DEPRECATED_GridNode"),".",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridNode#isshadowroot"},"isShadowRoot")),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L126"},"lexical-table/src/LexicalTableNode.ts:126")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"updatedom"},"updateDOM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"updateDOM"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"overrides-8"},"Overrides"),(0,r.kt)("p",null,"DEPRECATED","_","GridNode.updateDOM"),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L81"},"lexical-table/src/LexicalTableNode.ts:81")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clone"},"clone"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"clone"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"node"),"): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableNode"))),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_table.TableNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableNode")))))),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableNode"))),(0,r.kt)("h4",{id:"overrides-9"},"Overrides"),(0,r.kt)("p",null,"DEPRECATED","_","GridNode.clone"),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L44"},"lexical-table/src/LexicalTableNode.ts:44")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettype"},"getType"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"getType"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"overrides-10"},"Overrides"),(0,r.kt)("p",null,"DEPRECATED","_","GridNode.getType"),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L40"},"lexical-table/src/LexicalTableNode.ts:40")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"importdom"},"importDOM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"importDOM"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#domconversionmap"},(0,r.kt)("inlineCode",{parentName:"a"},"DOMConversionMap"))),(0,r.kt)("h4",{id:"returns-16"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#domconversionmap"},(0,r.kt)("inlineCode",{parentName:"a"},"DOMConversionMap"))),(0,r.kt)("h4",{id:"overrides-11"},"Overrides"),(0,r.kt)("p",null,"DEPRECATED","_","GridNode.importDOM"),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L48"},"lexical-table/src/LexicalTableNode.ts:48")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"importjson"},"importJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"importJSON"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"_serializedNode"),"): ",(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableNode"))),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"_serializedNode")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_table#serializedtablenode"},(0,r.kt)("inlineCode",{parentName:"a"},"SerializedTableNode")))))),(0,r.kt)("h4",{id:"returns-17"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableNode"},(0,r.kt)("inlineCode",{parentName:"a"},"TableNode"))),(0,r.kt)("h4",{id:"overrides-12"},"Overrides"),(0,r.kt)("p",null,"DEPRECATED","_","GridNode.importJSON"),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableNode.ts#L57"},"lexical-table/src/LexicalTableNode.ts:57")))}k.isMDXComponent=!0}}]);