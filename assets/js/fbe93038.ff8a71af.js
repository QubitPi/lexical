"use strict";(self.webpackChunk_lexical_website=self.webpackChunk_lexical_website||[]).push([[8432],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7896),i=(n(2784),n(876));const a={},s="Testing",o={unversionedId:"testing",id:"testing",title:"Testing",description:"Lexical relies on tests to ensure that changes don't break anything, using a mix of unit and end-to-end tests.",source:"@site/docs/testing.md",sourceDirName:".",slug:"/testing",permalink:"/lexical/docs/testing",draft:!1,editUrl:"https://github.com/QubitPi/lexical/tree/main/packages/lexical-website/docs/testing.md",tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Unit tests",id:"unit-tests",level:2},{value:"End-to-end (E2E) tests",id:"end-to-end-e2e-tests",level:2},{value:"General guidelines",id:"general-guidelines",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Lexical relies on tests to ensure that changes don't break anything, using a mix of unit and end-to-end tests."),(0,i.kt)("h2",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"We use Jest to run unit tests in core (",(0,i.kt)("inlineCode",{parentName:"p"},"lexical")," package). The goal is to have a well tested API, enabling us to add or modify features without breaking it."),(0,i.kt)("p",null,"To run the tests use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run test-unit\n")),(0,i.kt)("p",null,"Unit tests can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/tree/main/packages/lexical/src/__tests__"},"this directory"),"."),(0,i.kt)("h2",{id:"end-to-end-e2e-tests"},"End-to-end (E2E) tests"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," for running E2E tests in Chromium, Firefox and WebKit."),(0,i.kt)("p",null,"These tests run in the ",(0,i.kt)("inlineCode",{parentName:"p"},"lexical-playground")," package and are divided into proactive and reactive tests (",(0,i.kt)("inlineCode",{parentName:"p"},"e2e")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"regression")," directories)."),(0,i.kt)("p",null,"The goal for this type of test is to validate the behavior of Lexical in a browser, without necessarily knowing how the internals work."),(0,i.kt)("p",null,"To run E2E tests use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run start &\nnpm run test-e2e-chromium # or -firefox, -webkit\n")),(0,i.kt)("p",null,"E2E tests can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/lexical/tree/main/packages/lexical-playground/__tests__"},"this directory")),(0,i.kt)("h2",{id:"general-guidelines"},"General guidelines"),(0,i.kt)("p",null,"When writing tests, please follow these practices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New features must include tests."),(0,i.kt)("li",{parentName:"ul"},"No test is too small or too big to be included. If it can break, add a test."),(0,i.kt)("li",{parentName:"ul"},"Do not merge pull requests with failing tests, this can block other people and releases."),(0,i.kt)("li",{parentName:"ul"},"Be mindful with your abstractions: sometimes it's convenient to create abstractions/utils to make test files smaller and less repetitive. Please make sure that they are simple and easy to follow.")))}d.isMDXComponent=!0}}]);