(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=i(n),s=r,f=u["".concat(c,".").concat(s)]||u[s]||d[s]||p;return n?a.a.createElement(f,o(o({ref:t},l),{},{components:n})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,c=new Array(p);c[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<p;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},367:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),p=(n(0),n(1804)),c=["components"],o={title:"Taro.offAppHide(callback)",sidebar_label:"offAppHide"},b={unversionedId:"apis/base/weapp/app-event/offAppHide",id:"apis/base/weapp/app-event/offAppHide",isDocsHomePage:!1,title:"Taro.offAppHide(callback)",description:"\u53d6\u6d88\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6",source:"@site/docs/apis/base/weapp/app-event/offAppHide.md",slug:"/apis/base/weapp/app-event/offAppHide",permalink:"/taro/docs/next/apis/base/weapp/app-event/offAppHide",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/base/weapp/app-event/offAppHide.md",version:"current",sidebar_label:"offAppHide",sidebar:"API",previous:{title:"Taro.offAppShow(callback)",permalink:"/taro/docs/next/apis/base/weapp/app-event/offAppShow"},next:{title:"Taro.setEnableDebug(res)",permalink:"/taro/docs/next/apis/base/debug/setEnableDebug"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,c);return Object(p.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"\u53d6\u6d88\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6"),Object(p.b)("blockquote",null,Object(p.b)("p",{parentName:"blockquote"},Object(p.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppHide.html"},"\u53c2\u8003\u6587\u6863"))),Object(p.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),Object(p.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(p.b)("table",null,Object(p.b)("thead",null,Object(p.b)("tr",null,Object(p.b)("th",null,"\u53c2\u6570"),Object(p.b)("th",null,"\u7c7b\u578b"),Object(p.b)("th",null,"\u8bf4\u660e"))),Object(p.b)("tbody",null,Object(p.b)("tr",null,Object(p.b)("td",null,"callback"),Object(p.b)("td",null,Object(p.b)("code",null,"(res: CallbackResult) => void")),Object(p.b)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(p.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",{parentName:"tr",align:"center"},"API"),Object(p.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(p.b)("th",{parentName:"tr",align:"center"},"H5"),Object(p.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",{parentName:"tr",align:"center"},"Taro.offAppHide"),Object(p.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(p.b)("td",{parentName:"tr",align:"center"}),Object(p.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);