"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[580],{2580:function(t,e,o){o.r(e),o.d(e,{default:function(){return d}});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"detail"}},[o("div",{attrs:{id:"formBtn"}},[t.admin?o("b-button",{attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.modifyNotice.apply(null,arguments)}}},[t._v("수정하기")]):t._e(),t.admin?o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.deleteModal",modifiers:{deleteModal:!0}}],attrs:{variant:"danger"}},[t._v("삭제하기")]):t._e()],1),o("b-form",[o("b-form-group",{attrs:{id:"input-group",label:"제목:","label-for":"input-1"}}),o("b-form-input",{attrs:{id:"input-2",required:"",readonly:"",value:t.notice.subject}}),o("b-form-group",{attrs:{id:"input-group",label:"내용:","label-for":"input-3"}},[o("b-form-textarea",{attrs:{id:"textarea",rows:"3","max-rows":"6",readonly:"",value:t.notice.content}})],1)],1),o("b-modal",{attrs:{id:"deleteModal",title:"게시글 삭제"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.cancel;return[o("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:t.deleteNotice}},[t._v(" 삭제 ")]),o("b-button",{attrs:{size:"sm"},on:{click:function(t){return r()}}},[t._v(" 취소 ")])]}}])},[o("p",{staticClass:"my-4"},[t._v("정말 삭제하시겠습니까?")])])],1)},a=[],n=o(3019),i=o(4665),u={created:function(){this.getNoticeData(this.$route.params.articleno)},computed:(0,n.Z)((0,n.Z)({},(0,i.rn)("noticeStore",["notice"])),{},{admin:function(){return this.$store.state.admin}}),methods:(0,n.Z)((0,n.Z)({},(0,i.nv)("noticeStore",["getNoticeData","noticeDelete"])),{},{modifyNotice:function(){this.$router.push({name:"modifyNotice"})},deleteNotice:function(){this.noticeDelete(this.$route.params.articleno),this.$router.push({name:"noticeList"})}})},s=u,c=o(1001),l=(0,c.Z)(s,r,a,!1,null,"ec821bac",null),d=l.exports}}]);
//# sourceMappingURL=580-legacy.e8dcfea8.js.map