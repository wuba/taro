(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),i=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(n),O=a,s=u["".concat(b,".").concat(O)]||u[O]||d[O]||l;return n?r.a.createElement(s,c(c({ref:t},p),{},{components:n})):r.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},429:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(1804)),b=["components"],c={title:"Taro.onPageNotFound(callback)",sidebar_label:"onPageNotFound"},o={unversionedId:"apis/base/weapp/app-event/onPageNotFound",id:"apis/base/weapp/app-event/onPageNotFound",isDocsHomePage:!1,title:"Taro.onPageNotFound(callback)",description:"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onPageNotFound \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002",source:"@site/docs/apis/base/weapp/app-event/onPageNotFound.md",slug:"/apis/base/weapp/app-event/onPageNotFound",permalink:"/taro/docs/next/apis/base/weapp/app-event/onPageNotFound",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/weapp/app-event/onPageNotFound.md",version:"current",sidebar_label:"onPageNotFound",sidebar:"API",previous:{title:"Taro.getLaunchOptionsSync()",permalink:"/taro/docs/next/apis/base/weapp/life-cycle/getLaunchOptionsSync"},next:{title:"Taro.onError(callback)",permalink:"/taro/docs/next/apis/base/weapp/app-event/onError"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Result",id:"result",children:[]},{value:"Callback",id:"callback",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:p};function u(e){var t=e.components,n=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onpagenotfoundobject-object"},Object(l.b)("inlineCode",{parentName:"a"},"App.onPageNotFound"))," \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u56de\u8c03\u4e2d\u8fdb\u884c\u9875\u9762\u91cd\u5b9a\u5411\uff0c\u4f46\u5fc5\u987b\u5728\u56de\u8c03\u4e2d",Object(l.b)("strong",{parentName:"li"},"\u540c\u6b65"),"\u5904\u7406\uff0c\u5f02\u6b65\u5904\u7406\uff08\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"setTimeout")," \u5f02\u6b65\u6267\u884c\uff09\u65e0\u6548\u3002"),Object(l.b)("li",{parentName:"ul"},"\u82e5\u5f00\u53d1\u8005\u6ca1\u6709\u8c03\u7528 ",Object(l.b)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html"},"Taro.onPageNotFound")," \u7ed1\u5b9a\u76d1\u542c\uff0c\u4e5f\u6ca1\u6709\u58f0\u660e ",Object(l.b)("inlineCode",{parentName:"li"},"App.onPageNotFound"),"\uff0c\u5f53\u8df3\u8f6c\u9875\u9762\u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u63a8\u5165\u5fae\u4fe1\u5ba2\u6237\u7aef\u539f\u751f\u7684\u9875\u9762\u4e0d\u5b58\u5728\u63d0\u793a\u9875\u9762\u3002"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u56de\u8c03\u4e2d\u53c8\u91cd\u5b9a\u5411\u5230\u53e6\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u9875\u9762\uff0c\u5c06\u63a8\u5165\u5fae\u4fe1\u5ba2\u6237\u7aef\u539f\u751f\u7684\u9875\u9762\u4e0d\u5b58\u5728\u63d0\u793a\u9875\u9762\uff0c\u5e76\u4e14\u4e0d\u518d\u7b2c\u4e8c\u6b21\u56de\u8c03\u3002")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html"},"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"result"},"Result"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"isEntryPage"),Object(l.b)("td",null,Object(l.b)("code",null,"boolean")),Object(l.b)("td",null,"\u662f\u5426\u672c\u6b21\u542f\u52a8\u7684\u9996\u4e2a\u9875\u9762\uff08\u4f8b\u5982\u4ece\u5206\u4eab\u7b49\u5165\u53e3\u8fdb\u6765\uff0c\u9996\u4e2a\u9875\u9762\u662f\u5f00\u53d1\u8005\u914d\u7f6e\u7684\u5206\u4eab\u9875\u9762\uff09")),Object(l.b)("tr",null,Object(l.b)("td",null,"path"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u4e0d\u5b58\u5728\u9875\u9762\u7684\u8def\u5f84")),Object(l.b)("tr",null,Object(l.b)("td",null,"query"),Object(l.b)("td",null,Object(l.b)("code",null,"Record<string, any>")),Object(l.b)("td",null,"\u6253\u5f00\u4e0d\u5b58\u5728\u9875\u9762\u7684 query \u53c2\u6570")))),Object(l.b)("h3",{id:"callback"},"Callback"),Object(l.b)("p",null,"\u5c0f\u7a0b\u5e8f\u8981\u6253\u5f00\u7684\u9875\u9762\u4e0d\u5b58\u5728\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"(res: Result) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"res"),Object(l.b)("td",null,Object(l.b)("code",null,"Result"))))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"API"),Object(l.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",{parentName:"tr",align:"center"},"H5"),Object(l.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},"Taro.onPageNotFound"),Object(l.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(l.b)("td",{parentName:"tr",align:"center"}),Object(l.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);