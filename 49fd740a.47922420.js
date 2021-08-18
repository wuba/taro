(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),u=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,O=d["".concat(l,".").concat(s)]||d[s]||p[s]||o;return n?c.a.createElement(O,i(i({ref:t},b),{},{components:n})):c.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},569:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),c=n(7),o=(n(0),n(1804)),l=["components"],i={title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},a={unversionedId:"apis/device/ibeacon/IBeaconInfo",id:"apis/device/ibeacon/IBeaconInfo",isDocsHomePage:!1,title:"IBeaconInfo",description:"\u65b9\u6cd5",source:"@site/docs/apis/device/ibeacon/IBeaconInfo.md",slug:"/apis/device/ibeacon/IBeaconInfo",permalink:"/taro/docs/next/apis/device/ibeacon/IBeaconInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/ibeacon/IBeaconInfo.md",version:"current",sidebar_label:"IBeaconInfo",sidebar:"API",previous:{title:"Taro.getBeacons(option)",permalink:"/taro/docs/next/apis/device/ibeacon/getBeacons"},next:{title:"Taro.stopWifi(option)",permalink:"/taro/docs/next/apis/device/wifi/stopWifi"}},b=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}],u={rightToc:b};function d(e){var t=e.components,n=Object(c.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"accuracy"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",null,"iBeacon \u8bbe\u5907\u7684\u8ddd\u79bb")),Object(o.b)("tr",null,Object(o.b)("td",null,"major"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"iBeacon \u8bbe\u5907\u7684\u4e3b id")),Object(o.b)("tr",null,Object(o.b)("td",null,"minor"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"iBeacon \u8bbe\u5907\u7684\u6b21 id")),Object(o.b)("tr",null,Object(o.b)("td",null,"proximity"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",null,"\u8868\u793a\u8bbe\u5907\u8ddd\u79bb\u7684\u679a\u4e3e\u503c")),Object(o.b)("tr",null,Object(o.b)("td",null,"rssi"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",null,"\u8868\u793a\u8bbe\u5907\u7684\u4fe1\u53f7\u5f3a\u5ea6")),Object(o.b)("tr",null,Object(o.b)("td",null,"uuid"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"iBeacon \u8bbe\u5907\u5e7f\u64ad\u7684 uuid")))))}d.isMDXComponent=!0}}]);