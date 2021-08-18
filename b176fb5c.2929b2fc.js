(window.webpackJsonp=window.webpackJsonp||[]).push([[1225],{1293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return j}));var b=n(3),l=n(7),c=(n(0),n(1804)),r=n(1808),a=n(1809),o=["components"],i={title:"MovableView",sidebar_label:"MovableView"},d={unversionedId:"components/viewContainer/movable-view",id:"version-3.x/components/viewContainer/movable-view",isDocsHomePage:!1,title:"MovableView",description:"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8\u3002movable-view \u5fc5\u987b\u5728 movable-area \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u76f4\u63a5\u5b50\u8282\u70b9\uff0c\u5426\u5219\u4e0d\u80fd\u79fb\u52a8\u3002",source:"@site/versioned_docs/version-3.x/components/viewContainer/movable-view.md",slug:"/components/viewContainer/movable-view",permalink:"/taro/docs/components/viewContainer/movable-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/movable-view.md",version:"3.x",sidebar_label:"MovableView",sidebar:"version-3.x/components",previous:{title:"MovableArea",permalink:"/taro/docs/components/viewContainer/movable-area"},next:{title:"CoverView",permalink:"/taro/docs/components/viewContainer/cover-view"}},O=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"MovableViewProps",id:"movableviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TChangeSource",id:"tchangesource",children:[]},{value:"onChangeEventDeatil",id:"onchangeeventdeatil",children:[]},{value:"onScaleEventDeatil",id:"onscaleeventdeatil",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],u={rightToc:O};function j(e){var t=e.components,n=Object(l.a)(e,o);return Object(c.b)("wrapper",Object(b.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u53ef\u79fb\u52a8\u7684\u89c6\u56fe\u5bb9\u5668\uff0c\u5728\u9875\u9762\u4e2d\u53ef\u4ee5\u62d6\u62fd\u6ed1\u52a8\u3002movable-view \u5fc5\u987b\u5728 movable-area \u7ec4\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u76f4\u63a5\u5b50\u8282\u70b9\uff0c\u5426\u5219\u4e0d\u80fd\u79fb\u52a8\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<MovableViewProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(r.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(a.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>\u5e26\u8d70\u6211</MovableView>\n      </MovableArea>\n    )\n  }\n}\n"))),Object(c.b)(a.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},"  <movable-area style='height: 200px; width: 200px; background: red;'>\n    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>\u5e26\u6211\u8d70</movable-view>\n  </movable-area>\n")))),Object(c.b)("h2",{id:"movableviewprops"},"MovableViewProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"direction"),Object(c.b)("td",null,Object(c.b)("code",null,'"all" | "vertical" | "horizontal" | "none"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"none")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"movable-view \u7684\u79fb\u52a8\u65b9\u5411\uff0c\u5c5e\u6027\u503c\u6709",Object(c.b)("code",null,"all"),"\u3001",Object(c.b)("code",null,"vertical"),"\u3001",Object(c.b)("code",null,"horizontal"),"\u3001",Object(c.b)("code",null,"none"))),Object(c.b)("tr",null,Object(c.b)("td",null,"inertia"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"movable-view \u662f\u5426\u5e26\u6709\u60ef\u6027")),Object(c.b)("tr",null,Object(c.b)("td",null,"outOfBounds"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8d85\u8fc7\u53ef\u79fb\u52a8\u533a\u57df\u540e\uff0cmovable-view \u662f\u5426\u8fd8\u53ef\u4ee5\u79fb\u52a8")),Object(c.b)("tr",null,Object(c.b)("td",null,"x"),Object(c.b)("td",null,Object(c.b)("code",null,"string | number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5b9a\u4e49 x \u8f74\u65b9\u5411\u7684\u504f\u79fb\uff0c\u5982\u679c x \u7684\u503c\u4e0d\u5728\u53ef\u79fb\u52a8\u8303\u56f4\u5185\uff0c\u4f1a\u81ea\u52a8\u79fb\u52a8\u5230\u53ef\u79fb\u52a8\u8303\u56f4\uff1b\u6539\u53d8 x \u7684\u503c\u4f1a\u89e6\u53d1\u52a8\u753b")),Object(c.b)("tr",null,Object(c.b)("td",null,"y"),Object(c.b)("td",null,Object(c.b)("code",null,"string | number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5b9a\u4e49 y \u8f74\u65b9\u5411\u7684\u504f\u79fb\uff0c\u5982\u679c y \u7684\u503c\u4e0d\u5728\u53ef\u79fb\u52a8\u8303\u56f4\u5185\uff0c\u4f1a\u81ea\u52a8\u79fb\u52a8\u5230\u53ef\u79fb\u52a8\u8303\u56f4\uff1b\u6539\u53d8 y \u7684\u503c\u4f1a\u89e6\u53d1\u52a8\u753b")),Object(c.b)("tr",null,Object(c.b)("td",null,"damping"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"20")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u963b\u5c3c\u7cfb\u6570\uff0c\u7528\u4e8e\u63a7\u5236x\u6216y\u6539\u53d8\u65f6\u7684\u52a8\u753b\u548c\u8fc7\u754c\u56de\u5f39\u7684\u52a8\u753b\uff0c\u503c\u8d8a\u5927\u79fb\u52a8\u8d8a\u5feb")),Object(c.b)("tr",null,Object(c.b)("td",null,"friction"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"2")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6469\u64e6\u7cfb\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u60ef\u6027\u6ed1\u52a8\u7684\u52a8\u753b\uff0c\u503c\u8d8a\u5927\u6469\u64e6\u529b\u8d8a\u5927\uff0c\u6ed1\u52a8\u8d8a\u5feb\u505c\u6b62\uff1b\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5426\u5219\u4f1a\u88ab\u8bbe\u7f6e\u6210\u9ed8\u8ba4\u503c")),Object(c.b)("tr",null,Object(c.b)("td",null,"disabled"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u7981\u7528")),Object(c.b)("tr",null,Object(c.b)("td",null,"scale"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u652f\u6301\u53cc\u6307\u7f29\u653e\uff0c\u9ed8\u8ba4\u7f29\u653e\u624b\u52bf\u751f\u6548\u533a\u57df\u662f\u5728 movable-view \u5185")),Object(c.b)("tr",null,Object(c.b)("td",null,"scaleMin"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"0.5")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\u6700\u5c0f\u503c")),Object(c.b)("tr",null,Object(c.b)("td",null,"scaleMax"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"10")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\u6700\u5927\u503c")),Object(c.b)("tr",null,Object(c.b)("td",null,"scaleValue"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"1")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5b9a\u4e49\u7f29\u653e\u500d\u6570\uff0c\u53d6\u503c\u8303\u56f4\u4e3a 0.5 - 10")),Object(c.b)("tr",null,Object(c.b)("td",null,"animation"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"true")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u4f7f\u7528\u52a8\u753b")),Object(c.b)("tr",null,Object(c.b)("td",null,"onChange"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onChangeEventDeatil>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"onScale"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onScaleEventDeatil>")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u7f29\u653e\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"onHTouchMove"),Object(c.b)("td",null,Object(c.b)("code",null,"TouchEventFunction")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u521d\u6b21\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8\u4e3a\u6a2a\u5411\u7684\u79fb\u52a8\uff0c\u5982\u679c catch \u6b64\u4e8b\u4ef6\uff0c\u5219\u610f\u5473\u7740 touchmove \u4e8b\u4ef6\u4e5f\u88ab catch")),Object(c.b)("tr",null,Object(c.b)("td",null,"onVTouchMove"),Object(c.b)("td",null,Object(c.b)("code",null,"TouchEventFunction")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u521d\u6b21\u624b\u6307\u89e6\u6478\u540e\u79fb\u52a8\u4e3a\u7eb5\u5411\u7684\u79fb\u52a8\uff0c\u5982\u679c catch \u6b64\u4e8b\u4ef6\uff0c\u5219\u610f\u5473\u7740 touchmove \u4e8b\u4ef6\u4e5f\u88ab catch")),Object(c.b)("tr",null,Object(c.b)("td",null,"onDragStart"),Object(c.b)("td",null," "),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f00\u59cb\u62d6\u52a8\u65f6\u89e6\u53d1")),Object(c.b)("tr",null,Object(c.b)("td",null,"onDragEnd"),Object(c.b)("td",null," "),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u62d6\u52a8\u7ed3\u675f\u65f6\u89e6\u53d1")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.direction"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.inertia"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.outOfBounds"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.x"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.y"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.damping"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.friction"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.disabled"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.scale"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleMin"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleMax"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleValue"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.animation"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.onChange"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.onScale"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.onHTouchMove"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.onVTouchMove"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.onDragStart"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableViewProps.onDragEnd"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(c.b)("h3",{id:"tchangesource"},"TChangeSource"),Object(c.b)("p",null,"\u62d6\u52a8\u8fc7\u7a0b\u4e2d\u89e6\u53d1\u7684\u4e8b\u4ef6"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"touch"),Object(c.b)("td",null,"\u62d6\u52a8")),Object(c.b)("tr",null,Object(c.b)("td",null,"touch-out-of-bounds"),Object(c.b)("td",null,"\u8d85\u51fa\u79fb\u52a8\u8303\u56f4")),Object(c.b)("tr",null,Object(c.b)("td",null,"out-of-bounds"),Object(c.b)("td",null,"\u8d85\u51fa\u79fb\u52a8\u8303\u56f4\u540e\u7684\u56de\u5f39")),Object(c.b)("tr",null,Object(c.b)("td",null,"friction"),Object(c.b)("td",null,"\u60ef\u6027")),Object(c.b)("tr",null,Object(c.b)("td",null),Object(c.b)("td",null,"setData")))),Object(c.b)("h3",{id:"onchangeeventdeatil"},"onChangeEventDeatil"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"x"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"X \u5750\u6807")),Object(c.b)("tr",null,Object(c.b)("td",null,"y"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"Y \u5750\u6807")),Object(c.b)("tr",null,Object(c.b)("td",null,"source"),Object(c.b)("td",null,Object(c.b)("code",null,'"" | "touch" | "touch-out-of-bounds" | "out-of-bounds" | "friction"')),Object(c.b)("td",null,"\u89e6\u53d1\u4e8b\u4ef6")))),Object(c.b)("h3",{id:"onscaleeventdeatil"},"onScaleEventDeatil"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"x"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"X \u5750\u6807")),Object(c.b)("tr",null,Object(c.b)("td",null,"y"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"Y \u5750\u6807")),Object(c.b)("tr",null,Object(c.b)("td",null,"scale"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u7f29\u653e\u6bd4\u4f8b")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"MovableView"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))))}j.isMDXComponent=!0},1804:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return p}));var b=n(0),l=n.n(b);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,b,l=function(e,t){if(null==e)return{};var n,b,l={},c=Object.keys(e);for(b=0;b<c.length;b++)n=c[b],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)n=c[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),d=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},O=function(e){var t=d(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,c=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=d(n),j=b,p=O["".concat(r,".").concat(j)]||O[j]||u[j]||c;return n?l.a.createElement(p,a(a({ref:t},i),{},{components:n})):l.a.createElement(p,a({ref:t},i))}));function p(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=n.length,r=new Array(c);r[0]=j;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:b,r[1]=a;for(var i=2;i<c;i++)r[i]=n[i];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},1805:function(e,t,n){"use strict";function b(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=b(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=b(e))&&(l&&(l+=" "),l+=t);return l}},1806:function(e,t,n){"use strict";var b=n(0),l=n(1807);t.a=function(){var e=Object(b.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1807:function(e,t,n){"use strict";var b=n(0),l=Object(b.createContext)(void 0);t.a=l},1808:function(e,t,n){"use strict";var b=n(0),l=n.n(b),c=n(1806),r=n(1805),a=n(53),o=n.n(a),i=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,a=e.children,O=e.defaultValue,u=e.values,j=e.groupId,p=e.className,m=Object(c.a)(),s=m.tabGroupChoices,g=m.setTabGroupChoices,v=Object(b.useState)(O),N=v[0],y=v[1];if(null!=j){var h=s[j];null!=h&&h!==N&&u.some((function(e){return e.value===h}))&&y(h)}var f=function(e){y(e),null!=j&&g(j,e)},x=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return f(t)},onClick:function(){f(t)}},n)}))),t?Object(b.cloneElement)(a.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(b.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},1809:function(e,t,n){"use strict";var b=n(0),l=n.n(b);t.a=function(e){var t=e.children,n=e.hidden,b=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:n,className:b},t)}}}]);