(window.webpackJsonp=window.webpackJsonp||[]).push([[511],{1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var l=n(0),c=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,c=function(e,t){if(null==e)return{};var n,l,c={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,b=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),d=u(n),O=l,j=d["".concat(b,".").concat(O)]||d[O]||s[O]||r;return n?c.a.createElement(j,o(o({ref:t},i),{},{components:n})):c.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,b=new Array(r);b[0]=O;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:l,b[1]=o;for(var i=2;i<r;i++)b[i]=n[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},579:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var l=n(3),c=n(7),r=(n(0),n(1804)),b=["components"],o={title:"Taro.getConnectedBluetoothDevices(option)",sidebar_label:"getConnectedBluetoothDevices"},a={unversionedId:"apis/device/bluetooth/getConnectedBluetoothDevices",id:"version-3.x/apis/device/bluetooth/getConnectedBluetoothDevices",isDocsHomePage:!1,title:"Taro.getConnectedBluetoothDevices(option)",description:"\u6839\u636e uuid \u83b7\u53d6\u5904\u4e8e\u5df2\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907\u3002",source:"@site/versioned_docs/version-3.x/apis/device/bluetooth/getConnectedBluetoothDevices.md",slug:"/apis/device/bluetooth/getConnectedBluetoothDevices",permalink:"/taro/docs/apis/device/bluetooth/getConnectedBluetoothDevices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/getConnectedBluetoothDevices.md",version:"3.x",sidebar_label:"getConnectedBluetoothDevices",sidebar:"version-3.x/API",previous:{title:"Taro.onBluetoothAdapterStateChange(callback)",permalink:"/taro/docs/apis/device/bluetooth/onBluetoothAdapterStateChange"},next:{title:"Taro.getBluetoothDevices(option)",permalink:"/taro/docs/apis/device/bluetooth/getBluetoothDevices"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"BluetoothDeviceInfo",id:"bluetoothdeviceinfo",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:i};function d(e){var t=e.components,n=Object(c.a)(e,b);return Object(r.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u6839\u636e uuid \u83b7\u53d6\u5904\u4e8e\u5df2\u8fde\u63a5\u72b6\u6001\u7684\u8bbe\u5907\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html"},"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => void\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"services"),Object(r.b)("td",null,Object(r.b)("code",null,"string[]")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u84dd\u7259\u8bbe\u5907\u4e3b service \u7684 uuid \u5217\u8868")),Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: BluetoothError) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: BluetoothError) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"devices"),Object(r.b)("td",null,Object(r.b)("code",null,"BluetoothDeviceInfo[]")),Object(r.b)("td",null,"\u641c\u7d22\u5230\u7684\u8bbe\u5907\u5217\u8868")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(r.b)("h3",{id:"bluetoothdeviceinfo"},"BluetoothDeviceInfo"),Object(r.b)("p",null,"\u641c\u7d22\u5230\u7684\u8bbe\u5907"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"deviceId"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u7528\u4e8e\u533a\u5206\u8bbe\u5907\u7684 id")),Object(r.b)("tr",null,Object(r.b)("td",null,"name"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u84dd\u7259\u8bbe\u5907\u540d\u79f0\uff0c\u67d0\u4e9b\u8bbe\u5907\u53ef\u80fd\u6ca1\u6709")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"Taro.getConnectedBluetoothDevices({\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"API"),Object(r.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",{parentName:"tr",align:"center"},"H5"),Object(r.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"Taro.getConnectedBluetoothDevices"),Object(r.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);