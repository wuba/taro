(window.webpackJsonp=window.webpackJsonp||[]).push([[801],{1804:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var i=c.a.createContext({}),p=function(e){var t=c.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,O=u["".concat(o,".").concat(d)]||u[d]||s[d]||a;return r?c.a.createElement(O,l(l({ref:t},i),{},{components:r})):c.a.createElement(O,l({ref:t},i))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},869:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),c=r(7),a=(r(0),r(1804)),o=["components"],l={title:"Taro.onGyroscopeChange(callback)",sidebar_label:"onGyroscopeChange"},b={unversionedId:"apis/device/gyroscope/onGyroscopeChange",id:"version-2.x/apis/device/gyroscope/onGyroscopeChange",isDocsHomePage:!1,title:"Taro.onGyroscopeChange(callback)",description:"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startGyroscope() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopGyroscope() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-2.x/apis/device/gyroscope/onGyroscopeChange.md",slug:"/apis/device/gyroscope/onGyroscopeChange",permalink:"/taro/docs/2.x/apis/device/gyroscope/onGyroscopeChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/gyroscope/onGyroscopeChange.md",version:"2.x",sidebar_label:"onGyroscopeChange",sidebar:"version-2.x/API",previous:{title:"Taro.startGyroscope(option)",permalink:"/taro/docs/2.x/apis/device/gyroscope/startGyroscope"},next:{title:"Taro.offGyroscopeChange(callback)",permalink:"/taro/docs/2.x/apis/device/gyroscope/offGyroscopeChange"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:i};function u(e){var t=e.components,r=Object(c.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u76d1\u542c\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e Taro.startGyroscope() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 Taro.stopGyroscope() \u505c\u6b62\u76d1\u542c\u3002"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html"},"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"callback"},"Callback"),Object(a.b)("p",null,"\u9640\u87ba\u4eea\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"result"),Object(a.b)("td",null,Object(a.b)("code",null,"CallbackResult"))))),Object(a.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"x"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"x \u8f74\u7684\u89d2\u901f\u5ea6")),Object(a.b)("tr",null,Object(a.b)("td",null,"y"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"y \u8f74\u7684\u89d2\u901f\u5ea6")),Object(a.b)("tr",null,Object(a.b)("td",null,"z"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"z \u8f74\u7684\u89d2\u901f\u5ea6")))),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"center"},"API"),Object(a.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",{parentName:"tr",align:"center"},"H5"),Object(a.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"center"},"Taro.onGyroscopeChange"),Object(a.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(a.b)("td",{parentName:"tr",align:"center"}),Object(a.b)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);