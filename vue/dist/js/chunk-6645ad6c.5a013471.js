(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6645ad6c"],{"012a":function(e,t,o){},3292:function(e,t,o){"use strict";o("012a")},"7db0":function(e,t,o){"use strict";var a=o("23e7"),s=o("b727").find,r=o("44d2"),n="find",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),a({target:"Array",proto:!0,forced:i},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),r(n)},b5df:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-table",{attrs:{data:e.tableData,stripe:"",size:"medium"}},[o("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",sortable:""}}),o("el-table-column",{attrs:{prop:"orderno",label:"订单编号",width:"200"}}),o("el-table-column",{attrs:{prop:"total",label:"总金额"}}),o("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.status?o("el-tag",{attrs:{type:"info"}},[e._v("已取消")]):e._e(),1===t.row.status?o("el-tag",{attrs:{type:"warning"}},[e._v("待支付")]):e._e(),2===t.row.status?o("el-tag",{attrs:{type:"primary"}},[e._v("待发货")]):e._e(),3===t.row.status?o("el-tag",{attrs:{type:"primary"}},[e._v("待收货")]):e._e(),4===t.row.status?o("el-tag",{attrs:{type:"danger"}},[e._v("待评价")]):e._e(),5===t.row.status?o("el-tag",{attrs:{type:"success"}},[e._v("已完成")]):e._e()]}}])}),o("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),o("el-table-column",{attrs:{prop:"payTime",label:"付款时间"}}),o("el-table-column",{attrs:{prop:"payno",label:"付款编号"}}),o("el-table-column",{attrs:{label:"详情"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{on:{click:function(o){return e.detail(t.row.id)}}},[e._v("查看详情")])]}}])}),o("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?o("el-button",{attrs:{type:"success"},on:{click:function(o){return e.changeStatus(t.row,2)}}},[e._v("付款")]):e._e(),3===t.row.status?o("el-button",{attrs:{type:"warning"},on:{click:function(o){return e.changeStatus(t.row,4)}}},[e._v("收货")]):e._e(),1===t.row.status?o("el-popconfirm",{staticClass:"ml-5",attrs:{"confirm-button-text":"确定","cancel-button-text":"我再想想",icon:"el-icon-info","icon-color":"red",title:"您确定取消吗？"},on:{confirm:function(o){return e.changeStatus(t.row,0)}}},[o("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("取消")])],1):e._e()]}}])})],1),o("div",{staticStyle:{padding:"10px 0",margin:"10px 0",background:"white"}},[o("el-pagination",{attrs:{background:"","current-page":e.pageNum,"page-sizes":[5,10],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),o("el-dialog",{attrs:{title:"信息",visible:e.dialogFormVisible,width:"40%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-table",{attrs:{data:e.orderItems,stripe:"",size:"small"}},[o("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),o("el-table-column",{attrs:{prop:"price",label:"商品单价"}}),o("el-table-column",{attrs:{prop:"num",label:"商品数量"}}),o("el-table-column",{attrs:{prop:"img",label:"图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[o("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.row.img}})]}}])}),o("el-table-column",{attrs:{prop:"img",label:"评价"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.handleComment(t.row)}}},[e._v("评价")])]}}])})],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("关 闭")])],1)],1),o("el-dialog",{attrs:{title:"评价内容",visible:e.dialogFormVisible1,width:"30%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogFormVisible1=t}}},[o("el-form",[o("el-form-item",[o("el-input",{attrs:{type:"textarea"},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.saveComment}},[e._v("保 存")])],1)],1)],1)},s=[],r=(o("e9c4"),o("7db0"),o("d3b7"),o("b0c0"),o("d81d"),{name:"Orders",data:function(){return{showCommentBtn:!1,comment:"",orderItem:{},tableData:[],orderItems:[],total:0,pageNum:1,pageSize:10,name:"",form:{},dialogFormVisible:!1,dialogFormVisible1:!1,multipleSelection:[],user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},created:function(){this.load()},methods:{handleComment:function(e){this.orderItem=JSON.parse(JSON.stringify(e)),this.dialogFormVisible1=!0},saveComment:function(){var e=this;this.orderItem.comment=this.comment,this.request.post("/orderItem",this.orderItem).then((function(t){"200"===t.code?(e.$message.success("评价成功"),e.dialogFormVisible1=!1):e.$message.error(t.msg)}))},changeStatus:function(e,t){var o=this;e.status=t,this.request.post("/orders/status",e).then((function(e){"200"===e.code?(o.$message.success("操作成功"),o.load()):o.$message.error(e.msg)}))},detail:function(e){var t=this.tableData.find((function(t){return t.id===e}));this.orderItems=t.orderItems,this.dialogFormVisible=!0,this.showCommentBtn=4===t.status},load:function(){var e=this;this.request.get("/orders/page",{params:{pageNum:this.pageNum,pageSize:this.pageSize,name:this.name}}).then((function(t){e.tableData=t.data.records,e.total=t.data.total}))},save:function(){var e=this;this.$refs["ruleForm"].validate((function(t){t&&e.request.post("/orders",e.form).then((function(t){"200"===t.code?(e.$message.success("保存成功"),e.dialogFormVisible=!1,e.load()):e.$message.error(t.msg)}))}))},handleAdd:function(){var e=this;this.dialogFormVisible=!0,this.form={},this.$nextTick((function(){e.$refs.img&&e.$refs.img.clearFiles(),e.$refs.file&&e.$refs.file.clearFiles()}))},handleEdit:function(e){var t=this;this.form=JSON.parse(JSON.stringify(e)),this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs.img&&t.$refs.img.clearFiles(),t.$refs.file&&t.$refs.file.clearFiles()}))},del:function(e){var t=this;this.request.delete("/orders/"+e).then((function(e){"200"===e.code?(t.$message.success("删除成功"),t.load()):t.$message.error("删除失败")}))},handleSelectionChange:function(e){console.log(e),this.multipleSelection=e},delBatch:function(){var e=this;if(this.multipleSelection.length){var t=this.multipleSelection.map((function(e){return e.id}));this.request.post("/orders/del/batch",t).then((function(t){"200"===t.code?(e.$message.success("批量删除成功"),e.load()):e.$message.error("批量删除失败")}))}else this.$message.error("请选择需要删除的数据")},reset:function(){this.name="",this.load()},handleSizeChange:function(e){console.log(e),this.pageSize=e,this.load()},handleCurrentChange:function(e){console.log(e),this.pageNum=e,this.load()},handleFileUploadSuccess:function(e){this.form.file=e},handleImgUploadSuccess:function(e){this.form.img=e},download:function(e){window.open(e)},exp:function(){window.open("http://localhost:9090/orders/export")},handleExcelImportSuccess:function(){this.$message.success("导入成功"),this.load()}}}),n=r,i=(o("3292"),o("2877")),l=Object(i["a"])(n,a,s,!1,null,null,null);t["default"]=l.exports},e9c4:function(e,t,o){var a=o("23e7"),s=o("da84"),r=o("d066"),n=o("2ba4"),i=o("e330"),l=o("d039"),c=s.Array,u=r("JSON","stringify"),d=i(/./.exec),m=i("".charAt),f=i("".charCodeAt),g=i("".replace),p=i(1..toString),h=/[\uD800-\uDFFF]/g,b=/^[\uD800-\uDBFF]$/,v=/^[\uDC00-\uDFFF]$/,w=function(e,t,o){var a=m(o,t-1),s=m(o,t+1);return d(b,e)&&!d(v,s)||d(v,e)&&!d(b,a)?"\\u"+p(f(e,0),16):e},S=l((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&a({target:"JSON",stat:!0,forced:S},{stringify:function(e,t,o){for(var a=0,s=arguments.length,r=c(s);a<s;a++)r[a]=arguments[a];var i=n(u,null,r);return"string"==typeof i?g(i,h,w):i}})}}]);
//# sourceMappingURL=chunk-6645ad6c.5a013471.js.map