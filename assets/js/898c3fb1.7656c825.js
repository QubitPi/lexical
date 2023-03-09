"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[8826],{876:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var n=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},k=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),m=o(a),N=i,c=m["".concat(p,".").concat(N)]||m[N]||s[N]||l;return a?n.createElement(c,r(r({ref:t},k),{},{components:a})):n.createElement(c,r({ref:t},k))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=N;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:i,r[1]=d;for(var o=2;o<l;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(7896),i=(a(2784),a(876));const l={id:"lexical_yjs",title:"Module: @lexical/yjs",sidebar_label:"@lexical/yjs",sidebar_position:0,custom_edit_url:null},r=void 0,d={unversionedId:"api/modules/lexical_yjs",id:"api/modules/lexical_yjs",title:"Module: @lexical/yjs",description:"Interfaces",source:"@site/docs/api/modules/lexical_yjs.md",sourceDirName:"api/modules",slug:"/api/modules/lexical_yjs",permalink:"/lexical/docs/api/modules/lexical_yjs",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"lexical_yjs",title:"Module: @lexical/yjs",sidebar_label:"@lexical/yjs",sidebar_position:0,custom_edit_url:null},sidebar:"api",previous:{title:"@lexical/utils",permalink:"/lexical/docs/api/modules/lexical_utils"},next:{title:"DEPRECATED_GridCellNode",permalink:"/lexical/docs/api/classes/lexical.DEPRECATED_GridCellNode"}},p={},o=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:"Binding",id:"binding",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"ClientID",id:"clientid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Delta",id:"delta",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Operation",id:"operation",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"ProviderAwareness",id:"providerawareness",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"UserState",id:"userstate",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"YjsEvent",id:"yjsevent",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"YjsNode",id:"yjsnode",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Variables",id:"variables",level:2},{value:"CONNECTED_COMMAND",id:"connected_command",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"TOGGLE_CONNECT_COMMAND",id:"toggle_connect_command",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"Functions",id:"functions",level:2},{value:"createBinding",id:"createbinding",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"createUndoManager",id:"createundomanager",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"initLocalState",id:"initlocalstate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"setLocalStateFocus",id:"setlocalstatefocus",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"syncCursorPositions",id:"synccursorpositions",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"syncLexicalUpdateToYjs",id:"synclexicalupdatetoyjs",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"syncYjsChangesToLexical",id:"syncyjschangestolexical",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-16",level:4}],k={toc:o},m="wrapper";function s(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lexical/docs/api/interfaces/lexical_yjs.Provider"},"Provider"))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("h3",{id:"binding"},"Binding"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Binding"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"clientID")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"collabNodeMap")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical#nodekey"},(0,i.kt)("inlineCode",{parentName:"a"},"NodeKey")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"CollabElementNode")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"CollabTextNode")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"CollabDecoratorNode")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"CollabLineBreakNode"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cursors")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_yjs#clientid"},(0,i.kt)("inlineCode",{parentName:"a"},"ClientID")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Cursor"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cursorsContainer")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"HTMLElement"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"doc")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Doc"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"docMap")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Doc"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"editor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalEditor")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nodeProperties")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"root")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"CollabElementNode"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/Bindings.ts#L24"},"lexical-yjs/src/Bindings.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"clientid"},"ClientID"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ClientID"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/Bindings.ts#L23"},"lexical-yjs/src/Bindings.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"delta"},"Delta"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Delta"),": ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_yjs#operation"},(0,i.kt)("inlineCode",{parentName:"a"},"Operation")),"[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L55"},"lexical-yjs/src/index.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"operation"},"Operation"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"Operation"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"attributes")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"__type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"attributes.__type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"insert")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown"),">")))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L49"},"lexical-yjs/src/index.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"providerawareness"},"ProviderAwareness"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"ProviderAwareness"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getLocalState")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_yjs#userstate"},(0,i.kt)("inlineCode",{parentName:"a"},"UserState"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getStates")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_yjs#userstate"},(0,i.kt)("inlineCode",{parentName:"a"},"UserState")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"off")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"update"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},"cb"),": () => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"on")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"update"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},"cb"),": () => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"setLocalState")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"arg0"),": ",(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_yjs#userstate"},(0,i.kt)("inlineCode",{parentName:"a"},"UserState")),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L29"},"lexical-yjs/src/index.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"userstate"},"UserState"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"UserState"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"anchorPos")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"RelativePosition"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"color")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"focusPos")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"RelativePosition"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"focusing")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L17"},"lexical-yjs/src/index.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"yjsevent"},"YjsEvent"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"YjsEvent"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L57"},"lexical-yjs/src/index.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"yjsnode"},"YjsNode"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"YjsNode"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L56"},"lexical-yjs/src/index.ts:56")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("h3",{id:"connected_command"},"CONNECTED","_","COMMAND"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"CONNECTED","_","COMMAND"),": ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#lexicalcommand"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalCommand")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L24"},"lexical-yjs/src/index.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toggle_connect_command"},"TOGGLE","_","CONNECT","_","COMMAND"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"TOGGLE","_","CONNECT","_","COMMAND"),": ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical#lexicalcommand"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalCommand")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L26"},"lexical-yjs/src/index.ts:26")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createbinding"},"createBinding"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createBinding"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"editor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"doc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"docMap"),"): ",(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_yjs#binding"},(0,i.kt)("inlineCode",{parentName:"a"},"Binding"))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"editor")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.LexicalEditor"},(0,i.kt)("inlineCode",{parentName:"a"},"LexicalEditor")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"provider")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/interfaces/lexical_yjs.Provider"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"id")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"doc")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Doc"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"docMap")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Doc"),">")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lexical/docs/api/modules/lexical_yjs#binding"},(0,i.kt)("inlineCode",{parentName:"a"},"Binding"))),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/Bindings.ts#L43"},"lexical-yjs/src/Bindings.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createundomanager"},"createUndoManager"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"createUndoManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"binding"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"root"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"UndoManager")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"binding")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_yjs#binding"},(0,i.kt)("inlineCode",{parentName:"a"},"Binding")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"root")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"YXmlText"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UndoManager")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L62"},"lexical-yjs/src/index.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"initlocalstate"},"initLocalState"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initLocalState"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"focusing"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"provider")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/interfaces/lexical_yjs.Provider"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"color")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"focusing")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L71"},"lexical-yjs/src/index.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setlocalstatefocus"},"setLocalStateFocus"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setLocalStateFocus"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"focusing"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"provider")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/interfaces/lexical_yjs.Provider"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"color")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"focusing")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/index.ts#L86"},"lexical-yjs/src/index.ts:86")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"synccursorpositions"},"syncCursorPositions"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"syncCursorPositions"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"binding"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"binding")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_yjs#binding"},(0,i.kt)("inlineCode",{parentName:"a"},"Binding")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"provider")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/interfaces/lexical_yjs.Provider"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider")))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/SyncCursors.ts#L404"},"lexical-yjs/src/SyncCursors.ts:404")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"synclexicalupdatetoyjs"},"syncLexicalUpdateToYjs"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"syncLexicalUpdateToYjs"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"binding"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prevEditorState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"currEditorState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dirtyElements"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dirtyLeaves"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"normalizedNodes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tags"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"binding")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_yjs#binding"},(0,i.kt)("inlineCode",{parentName:"a"},"Binding")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"provider")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/interfaces/lexical_yjs.Provider"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"prevEditorState")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.EditorState"},(0,i.kt)("inlineCode",{parentName:"a"},"EditorState")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"currEditorState")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/classes/lexical.EditorState"},(0,i.kt)("inlineCode",{parentName:"a"},"EditorState")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dirtyElements")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dirtyLeaves")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Set"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"normalizedNodes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Set"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tags")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Set"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),">")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/SyncEditorStates.ts#L218"},"lexical-yjs/src/SyncEditorStates.ts:218")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"syncyjschangestolexical"},"syncYjsChangesToLexical"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"syncYjsChangesToLexical"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"binding"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"events"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isFromUndoManger"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"binding")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/modules/lexical_yjs#binding"},(0,i.kt)("inlineCode",{parentName:"a"},"Binding")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"provider")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/lexical/docs/api/interfaces/lexical_yjs.Provider"},(0,i.kt)("inlineCode",{parentName:"a"},"Provider")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"events")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"YEvent"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"YText"),">","[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isFromUndoManger")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/QubitPi/lexical/blob/17e0bc8/packages/lexical-yjs/src/SyncEditorStates.ts#L82"},"lexical-yjs/src/SyncEditorStates.ts:82")))}s.isMDXComponent=!0}}]);