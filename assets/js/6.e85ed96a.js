(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{301:function(e,t,a){},311:function(e,t,a){"use strict";a(301)},316:function(e,t,a){"use strict";a.r(t);var o={name:"CodeGroup",data:()=>({codeTabs:[],activeCodeTabIndex:-1}),watch:{activeCodeTabIndex(e){this.activateCodeTab(e)}},mounted(){this.loadTabs()},methods:{changeCodeTab(e){this.activeCodeTabIndex=e},loadTabs(){this.codeTabs=(this.$slots.default||[]).filter(e=>Boolean(e.componentOptions)).map((e,t)=>(""===e.componentOptions.propsData.active&&(this.activeCodeTabIndex=t),{title:e.componentOptions.propsData.title,elm:e.elm})),-1===this.activeCodeTabIndex&&this.codeTabs.length>0&&(this.activeCodeTabIndex=0),this.activateCodeTab(0)},activateCodeTab(e){this.codeTabs.forEach(e=>{e.elm&&e.elm.classList.remove("theme-code-block__active")}),this.codeTabs[e].elm&&this.codeTabs[e].elm.classList.add("theme-code-block__active")}}},s=(a(311),a(14)),c=Object(s.a)(o,(function(){var e=this,t=e._self._c;return t("ClientOnly",[t("div",{staticClass:"theme-code-group"},[t("div",{staticClass:"theme-code-group__nav"},[t("ul",{staticClass:"theme-code-group__ul"},e._l(e.codeTabs,(function(a,o){return t("li",{key:a.title,staticClass:"theme-code-group__li"},[t("button",{staticClass:"theme-code-group__nav-tab",class:{"theme-code-group__nav-tab-active":o===e.activeCodeTabIndex},on:{click:function(t){return e.changeCodeTab(o)}}},[e._v("\n            "+e._s(a.title)+"\n          ")])])})),0)]),e._v(" "),e._t("default"),e._v(" "),e.codeTabs.length<1?t("pre",{staticClass:"pre-blank"},[e._v("// Make sure to add code blocks to your code group")]):e._e()],2)])}),[],!1,null,"deefee04",null);t.default=c.exports}}]);