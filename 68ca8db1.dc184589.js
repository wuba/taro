(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=r.a.createContext({}),p=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,a=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=o,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},a),{},{components:n})):r.a.createElement(m,l({ref:t},a))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},784:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),i=(n(0),n(1804)),c=["components"],l={title:"AuthSetting",sidebar_label:"AuthSetting"},b={unversionedId:"apis/open-api/settings/AuthSetting",id:"version-3.x/apis/open-api/settings/AuthSetting",isDocsHomePage:!1,title:"AuthSetting",description:"\u7528\u6237\u6388\u6743\u8bbe\u7f6e\u4fe1\u606f\uff0c\u8be6\u60c5\u53c2\u8003\u6743\u9650",source:"@site/versioned_docs/version-3.x/apis/open-api/settings/AuthSetting.md",slug:"/apis/open-api/settings/AuthSetting",permalink:"/taro/docs/apis/open-api/settings/AuthSetting",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/settings/AuthSetting.md",version:"3.x",sidebar_label:"AuthSetting",sidebar:"version-3.x/API",previous:{title:"Taro.getSetting(option)",permalink:"/taro/docs/apis/open-api/settings/getSetting"},next:{title:"Taro.chooseAddress(option)",permalink:"/taro/docs/apis/open-api/address/chooseAddress"}},a=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}],p={rightToc:a};function s(e){var t=e.components,n=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u7528\u6237\u6388\u6743\u8bbe\u7f6e\u4fe1\u606f\uff0c\u8be6\u60c5\u53c2\u8003",Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"},"\u6743\u9650")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"},"\u53c2\u8003\u6587\u6863"))),Object(i.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"\u53c2\u6570"),Object(i.b)("th",null,"\u7c7b\u578b"),Object(i.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(i.b)("th",null,"\u8bf4\u660e"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"scope.address"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u901a\u8baf\u5730\u5740\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html"},"wx.chooseAddress"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.camera"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u6444\u50cf\u5934\uff0c\u5bf9\u5e94[",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/component/camera.html"},"camera"),"](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) \u7ec4\u4ef6")),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.invoice"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u83b7\u53d6\u53d1\u7968\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html"},"wx.chooseInvoice"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.invoiceTitle"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u53d1\u7968\u62ac\u5934\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html"},"wx.chooseInvoiceTitle"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.record"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u5f55\u97f3\u529f\u80fd\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html"},"wx.startRecord"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.userInfo"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u7528\u6237\u4fe1\u606f\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html"},"wx.getUserInfo"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.userLocation"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u5730\u7406\u4f4d\u7f6e\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html"},"wx.getLocation"),", ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html"},"wx.chooseLocation"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.werun"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570\uff0c\u5bf9\u5e94\u63a5\u53e3 ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html"},"wx.getWeRunData"))),Object(i.b)("tr",null,Object(i.b)("td",null,"scope.writePhotosAlbum"),Object(i.b)("td",null,Object(i.b)("code",null,"boolean")),Object(i.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(i.b)("td",null,"\u662f\u5426\u6388\u6743\u4fdd\u5b58\u5230\u76f8\u518c ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html"},"wx.saveImageToPhotosAlbum"),", ",Object(i.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html"},"wx.saveVideoToPhotosAlbum"))))))}s.isMDXComponent=!0}}]);