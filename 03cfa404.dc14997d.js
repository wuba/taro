(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1804:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),f=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=f(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=f(r),u=n,d=p["".concat(c,".").concat(u)]||p[u]||s[u]||a;return r?i.a.createElement(d,o(o({ref:t},b),{},{components:r})):i.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<a;b++)c[b]=r[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(1804)),c=["components"],o={title:"Taro.offGetWifiList(callback)",sidebar_label:"offGetWifiList"},l={unversionedId:"apis/device/wifi/offGetWifiList",id:"version-2.x/apis/device/wifi/offGetWifiList",isDocsHomePage:!1,title:"Taro.offGetWifiList(callback)",description:"\u53d6\u6d88\u76d1\u542c\u83b7\u53d6\u5230 Wi-Fi \u5217\u8868\u6570\u636e\u4e8b\u4ef6\u3002",source:"@site/versioned_docs/version-2.x/apis/device/wifi/offGetWifiList.md",slug:"/apis/device/wifi/offGetWifiList",permalink:"/taro/docs/2.x/apis/device/wifi/offGetWifiList",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/wifi/offGetWifiList.md",version:"2.x",sidebar_label:"offGetWifiList",sidebar:"version-2.x/API",previous:{title:"Taro.offWifiConnected(callback)",permalink:"/taro/docs/2.x/apis/device/wifi/offWifiConnected"},next:{title:"Taro.getWifiList(option)",permalink:"/taro/docs/2.x/apis/device/wifi/getWifiList"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],f={rightToc:b};function p(e){var t=e.components,r=Object(i.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u53d6\u6d88\u76d1\u542c\u83b7\u53d6\u5230 Wi-Fi \u5217\u8868\u6570\u636e\u4e8b\u4ef6\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.offGetWifiList.html"},"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: (...args: any[]) => any) => void\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"callback"),Object(a.b)("td",null,Object(a.b)("code",null,"(...args: any[]) => any")),Object(a.b)("td",null,"\u83b7\u53d6\u5230 Wi-Fi \u5217\u8868\u6570\u636e\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"API"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"Taro.offGetWifiList"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);