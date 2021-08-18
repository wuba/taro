(window.webpackJsonp=window.webpackJsonp||[]).push([[1165],{1233:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(1804)),o=["components"],c={title:"Taro.onDeviceMotionChange(callback)",sidebar_label:"onDeviceMotionChange"},l={unversionedId:"apis/device/deviceMotion/onDeviceMotionChange",id:"version-1.x/apis/device/deviceMotion/onDeviceMotionChange",isDocsHomePage:!1,title:"Taro.onDeviceMotionChange(callback)",description:"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e wx.startDeviceMotionListeningListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 wx.stopDeviceMotionListeningListening() \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-1.x/apis/device/deviceMotion/onDeviceMotionChange.md",slug:"/apis/device/deviceMotion/onDeviceMotionChange",permalink:"/taro/docs/1.x/apis/device/deviceMotion/onDeviceMotionChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/deviceMotion/onDeviceMotionChange.md",version:"1.x",sidebar_label:"onDeviceMotionChange",sidebar:"version-1.x/API",previous:{title:"Taro.stopDeviceMotionListening(callback)",permalink:"/taro/docs/1.x/apis/device/deviceMotion/stopDeviceMotionListening"},next:{title:"Taro.closeBluetoothAdapter(OBJECT)",permalink:"/taro/docs/1.x/apis/device/bluetooth/closeBluetoothAdapter"}},b=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"callback(res)",id:"callbackres",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={rightToc:b};function d(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u76d1\u542c\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\u6839\u636e wx.startDeviceMotionListeningListening() \u7684 interval \u53c2\u6570\u3002\u53ef\u4ee5\u4f7f\u7528 wx.stopDeviceMotionListeningListening() \u505c\u6b62\u76d1\u542c\u3002"),Object(i.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(i.b)("h3",{id:"callbackres"},"callback(res)"),Object(i.b)("p",null,"\u8bbe\u5907\u65b9\u5411\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(i.b)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),Object(i.b)("h5",{id:"object-res"},"object res"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"alpha"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("code",null,"number")),Object(i.b)("td",{parentName:"tr",align:null},"\u5f53\u624b\u673a\u5750\u6807 X/Y \u548c \u5730\u7403 X/Y \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Z \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a alpha\uff0c\u8303\u56f4\u503c\u4e3a [0, 2*PI)\u3002\u9006\u65f6\u9488\u8f6c\u52a8\u4e3a\u6b63\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"beta"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("code",null,"number")),Object(i.b)("td",{parentName:"tr",align:null},"\u5f53\u624b\u673a\u5750\u6807 Y/Z \u548c\u5730\u7403 Y/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 X \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a beta\u3002\u8303\u56f4\u503c\u4e3a [-1*PI, PI) \u3002\u9876\u90e8\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002\u4e5f\u6709\u53ef\u80fd\u671d\u7740\u7528\u6237\u4e3a\u6b63\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"gamma"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("code",null,"number")),Object(i.b)("td",{parentName:"tr",align:null},"\u5f53\u624b\u673a X/Z \u548c\u5730\u7403 X/Z \u91cd\u5408\u65f6\uff0c\u7ed5\u7740 Y \u8f74\u8f6c\u52a8\u7684\u5939\u89d2\u4e3a gamma\u3002\u8303\u56f4\u503c\u4e3a [-1*PI/2, PI/2)\u3002\u53f3\u8fb9\u671d\u7740\u5730\u7403\u8868\u9762\u8f6c\u52a8\u4e3a\u6b63\u3002")))),Object(i.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"API"),Object(i.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",{parentName:"tr",align:"center"},"H5"),Object(i.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Taro.onDeviceMotionChange"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(i.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0},1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,m=d["".concat(o,".").concat(s)]||d[s]||u[s]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);