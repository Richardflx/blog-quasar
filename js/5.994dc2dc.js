(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"container"},[e("div",{staticClass:"row q-pa-sm q-col-gutter-sm"},t._l(t.posts,(function(s,a){return e("div",{key:a,staticClass:"col-md-3 col-sm-4"},[e("q-card",{staticClass:"my-card",staticStyle:{"min-height":"23rem"}},[e("img",{staticStyle:{"max-height":"200px"},attrs:{src:s.jetpack_featured_media_url}}),e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v(t._s(s.title.rendered))])]),e("div",{staticClass:"absolute-bottom"},[e("q-btn",{staticClass:"full-width",attrs:{color:"secondary"},on:{click:function(e){return t.details(s.content.rendered)}}},[t._v("Detalhar")])],1)],1)],1)})),0)])},c=[],n=e("2f62"),i={name:"Index",mounted(){this.setPosts()},computed:{...Object(n["c"])("Posts",["posts"])},methods:{...Object(n["b"])("Posts",["setPosts"]),details(t){this.$router.push({name:"details",params:{text:t}})}}},o=i,r=e("2877"),l=e("9989"),d=e("f09f"),u=e("a370"),m=e("9c40"),p=e("eebe"),h=e.n(p),b=Object(r["a"])(o,a,c,!1,null,null,null);s["default"]=b.exports;h()(b,"components",{QPage:l["a"],QCard:d["a"],QCardSection:u["a"],QBtn:m["a"]})}}]);