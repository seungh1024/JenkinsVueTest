"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[109],{3109:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"create"}},[t.show?r("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)},reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group",label:"제목:","label-for":"input-1"}}),r("b-form-input",{attrs:{id:"input-2",placeholder:"Enter subject",required:""},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}}),r("b-form-group",{attrs:{id:"input-group",label:"내용:","label-for":"input-3"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("게시글 생성")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("초기화")])],1):t._e()],1)},o=[],s=r(3019),u=r(4665),a={data:function(){return{form:{subject:"",content:""},show:!0}},methods:(0,s.Z)((0,s.Z)({},(0,u.nv)("noticeStore",["noticeCreate"])),{},{onSubmit:function(){this.noticeCreate(this.form),this.$router.push({name:"noticeList"})},onReset:function(t){var e=this;t.preventDefault(),this.form.subject="",this.form.content="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},i=a,c=r(1001),l=(0,c.Z)(i,n,o,!1,null,"2a580d12",null),f=l.exports}}]);
//# sourceMappingURL=109-legacy.63544ace.js.map