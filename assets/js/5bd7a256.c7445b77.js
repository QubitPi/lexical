"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[2927],{876:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var l=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=l.createContext({}),p=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,m=c["".concat(o,".").concat(u)]||c[u]||k[u]||n;return a?l.createElement(m,r(r({ref:t},s),{},{components:a})):l.createElement(m,r({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[c]="string"==typeof e?e:i,r[1]=d;for(var p=2;p<n;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var l=a(7896),i=(a(2784),a(876));const n={id:"lexical_table.TableRowNode",title:"Class: TableRowNode",sidebar_label:"TableRowNode",custom_edit_url:null},r=void 0,d={unversionedId:"api/classes/lexical_table.TableRowNode",id:"api/classes/lexical_table.TableRowNode",title:"Class: TableRowNode",description:"@lexical/table.TableRowNode",source:"@site/docs/api/classes/lexical_table.TableRowNode.md",sourceDirName:"api/classes",slug:"/api/classes/lexical_table.TableRowNode",permalink:"/lexical/docs/api/classes/lexical_table.TableRowNode",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lexical_table.TableRowNode",title:"Class: TableRowNode",sidebar_label:"TableRowNode",custom_edit_url:null},sidebar:"api",previous:{title:"TableNode",permalink:"/lexical/docs/api/classes/lexical_table.TableNode"},next:{title:"TableSelection",permalink:"/lexical/docs/api/classes/lexical_table.TableSelection"}},o={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"canBeEmpty",id:"canbeempty",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"canIndent",id:"canindent",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"createDOM",id:"createdom",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"exportJSON",id:"exportjson",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getHeight",id:"getheight",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"isShadowRoot",id:"isshadowroot",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"setHeight",id:"setheight",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"updateDOM",id:"updatedom",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"clone",id:"clone",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"getType",id:"gettype",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"importDOM",id:"importdom",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Overrides",id:"overrides-9",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"importJSON",id:"importjson",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Overrides",id:"overrides-10",level:4},{value:"Defined in",id:"defined-in-12",level:4}],s={toc:p},c="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_table"},"@lexical/table"),".TableRowNode"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode"},(0,i.kt)("inlineCode",{parentName:"a"},"DEPRECATED_GridRowNode"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"TableRowNode"))))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new TableRowNode"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"height?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key?"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"key?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode"},"DEPRECATED_GridRowNode"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode#constructor"},"constructor")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L58"},"lexical-table/src/LexicalTableRowNode.ts:58")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"canbeempty"},"canBeEmpty"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"canBeEmpty"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode"},"DEPRECATED_GridRowNode"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode#canbeempty"},"canBeEmpty")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L101"},"lexical-table/src/LexicalTableRowNode.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"canindent"},"canIndent"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"canIndent"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode"},"DEPRECATED_GridRowNode"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode#canindent"},"canIndent")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L105"},"lexical-table/src/LexicalTableRowNode.ts:105")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createdom"},"createDOM"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createDOM"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical#editorconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"EditorConfig")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,"DEPRECATED","_","GridRowNode.createDOM"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L71"},"lexical-table/src/LexicalTableRowNode.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"exportjson"},"exportJSON"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"exportJSON"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#serializedelementnode"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedElementNode"))),(0,i.kt)("p",null,"Controls how the this node is serialized to JSON. This is important for\ncopy and paste between Lexical editors sharing the same namespace. It's also important\nif you're serializing to JSON for persistent storage somewhere.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://lexical.dev/docs/concepts/serialization#lexical---html"},"Serialization & Deserialization"),"."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#serializedelementnode"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedElementNode"))),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode"},"DEPRECATED_GridRowNode"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode#exportjson"},"exportJSON")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L63"},"lexical-table/src/LexicalTableRowNode.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getheight"},"getHeight"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getHeight"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L93"},"lexical-table/src/LexicalTableRowNode.ts:93")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isshadowroot"},"isShadowRoot"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isShadowRoot"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode"},"DEPRECATED_GridRowNode"),".",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical.DEPRECATED_GridRowNode#isshadowroot"},"isShadowRoot")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L83"},"lexical-table/src/LexicalTableRowNode.ts:83")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setheight"},"setHeight"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setHeight"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"height"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"height")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L87"},"lexical-table/src/LexicalTableRowNode.ts:87")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"updatedom"},"updateDOM"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"updateDOM"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"prevNode"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prevNode")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_table.TableRowNode"},(0,i.kt)("inlineCode",{parentName:"a"},"TableRowNode")))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"overrides-6"},"Overrides"),(0,i.kt)("p",null,"DEPRECATED","_","GridRowNode.updateDOM"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L97"},"lexical-table/src/LexicalTableRowNode.ts:97")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"clone"},"clone"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"clone"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"node"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableRowNode"},(0,i.kt)("inlineCode",{parentName:"a"},"TableRowNode"))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"node")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical_table.TableRowNode"},(0,i.kt)("inlineCode",{parentName:"a"},"TableRowNode")))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableRowNode"},(0,i.kt)("inlineCode",{parentName:"a"},"TableRowNode"))),(0,i.kt)("h4",{id:"overrides-7"},"Overrides"),(0,i.kt)("p",null,"DEPRECATED","_","GridRowNode.clone"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L41"},"lexical-table/src/LexicalTableRowNode.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gettype"},"getType"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getType"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"overrides-8"},"Overrides"),(0,i.kt)("p",null,"DEPRECATED","_","GridRowNode.getType"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L37"},"lexical-table/src/LexicalTableRowNode.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"importdom"},"importDOM"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"importDOM"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#domconversionmap"},(0,i.kt)("inlineCode",{parentName:"a"},"DOMConversionMap"))),(0,i.kt)("h4",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#domconversionmap"},(0,i.kt)("inlineCode",{parentName:"a"},"DOMConversionMap"))),(0,i.kt)("h4",{id:"overrides-9"},"Overrides"),(0,i.kt)("p",null,"DEPRECATED","_","GridRowNode.importDOM"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L45"},"lexical-table/src/LexicalTableRowNode.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"importjson"},"importJSON"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"importJSON"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"serializedNode"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableRowNode"},(0,i.kt)("inlineCode",{parentName:"a"},"TableRowNode"))),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"serializedNode")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_table#serializedtablerownode"},(0,i.kt)("inlineCode",{parentName:"a"},"SerializedTableRowNode")))))),(0,i.kt)("h4",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/classes/lexical_table.TableRowNode"},(0,i.kt)("inlineCode",{parentName:"a"},"TableRowNode"))),(0,i.kt)("h4",{id:"overrides-10"},"Overrides"),(0,i.kt)("p",null,"DEPRECATED","_","GridRowNode.importJSON"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/eb83ce9/packages/lexical-table/src/LexicalTableRowNode.ts#L54"},"lexical-table/src/LexicalTableRowNode.ts:54")))}k.isMDXComponent=!0}}]);