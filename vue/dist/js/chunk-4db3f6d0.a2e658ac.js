(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db3f6d0"],{a0ca:function(t,e,a){},eb21:function(t,e,a){"use strict";a("a0ca")},ec5a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticStyle:{margin:"10px 0"}},[a("el-carousel",{attrs:{height:"450px",interval:1e4}},t._l(t.lun,(function(t){return a("el-carousel-item",{key:t.id},[a("a",{attrs:{href:t.link,target:"_blank"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:t.img,alt:""}})])])})),1)],1),a("div",{staticStyle:{margin:"10px 0"}},[a("div",{staticStyle:{margin:"20px 0","font-size":"20px",color:"#07480c","border-bottom":"1px solid #07480c","padding-bottom":"10px"}},[t._v("热销推荐")]),a("el-row",{attrs:{gutter:10}},t._l(t.goods,(function(e){return a("el-col",{key:e.id,staticStyle:{"margin-bottom":"10px"},attrs:{span:6}},[a("div",{staticStyle:{"background-color":"white",padding:"10px",cursor:"pointer"},on:{click:function(a){return t.$router.push("/front/detail?id="+e.id)}}},[a("img",{staticStyle:{width:"100%",height:"200px",overflow:"hidden","border-radius":"10px"},attrs:{src:e.img,alt:""}}),a("div",{staticClass:"line1",staticStyle:{color:"#666",margin:"10px 0"}},[t._v(t._s(e.name))]),a("div",{staticStyle:{margin:"10px 0",color:"red","font-weight":"bold","font-size":"14px"}},[t._v("￥"+t._s(e.price)+" / "+t._s(e.unit))])])])})),1),a("div",{staticStyle:{padding:"10px 0","background-color":"white"}},[a("el-pagination",{attrs:{background:"","current-page":t.pageNum,"page-sizes":[4,8,12],"page-size":t.pageSize,layout:"total, prev, pager, next",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._m(0),a("div",[a("div",{staticStyle:{float:"left",width:"100%"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"notice",width:"900"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"buttonText",attrs:{href:"scope.row.notice",target:"_blank"}},[t._v(t._s(e.row.notice))])]}}])}),a("el-table-column",{attrs:{prop:"date1",width:"100"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("a",{attrs:{href:"",target:"_blank"}},[t._v("More<<")])]}}])})],1)],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"10px 0"}},[a("div",{staticStyle:{margin:"20px 0","font-size":"20px",color:"#07480c","border-bottom":"1px solid #07480c","padding-bottom":"10px"}},[t._v("助农资讯")])])}],o=(a("b0c0"),{name:"FrontHome",data:function(){return{lun:[],files:[],goods:[],pageNum:1,pageSize:8,total:0,tableData:[{notice:"最后十天，千万冰糖橙急盼销路，再卖不出去，真的要烂在地里了……",date1:"2023-3-28"},{notice:"正宗陕西洛川红富士苹果，脆甜多汁，香甜可口，一代老农对生态种植的坚守，只需一口，就能吃出儿时的味道！",date1:"2023-3-19"},{notice:"不知火丑橘新鲜上市，目前口感正佳，无籽好剥皮，七旬老农精心种植，酸甜爽口，好吃还不上火！",date1:"2023-3-9"},{notice:"助力云南300万斤紫皮鲜蒜走出大山，蒜香浓郁，良心农人一整年的艰辛劳作，期待您的支持！",date1:"2023-2-28"},{notice:"超600万斤武鸣沃柑成熟待销！六旬果农精心种植，香甜多汁，细腻无渣，邀您一同品尝",date1:"2023-2-21"},{notice:"5斤仅29.9元包邮，超600万斤核桃面临滞销，请您帮忙支持转发助力，帮助山区老农度过难关！",date1:"2020-3-14"}]}},created:function(){this.load()},methods:{load:function(){var t=this;this.request.get("/lun").then((function(e){t.lun=e.data})),this.request.get("/goods/page",{params:{pageNum:this.pageNum,pageSize:this.pageSize,name:this.name}}).then((function(e){t.goods=e.data.records,t.total=e.data.total}))},handleSizeChange:function(t){this.pageSize=t,this.load()},handleCurrentChange:function(t){this.pageNum=t,this.load()}}}),r=o,l=(a("eb21"),a("2877")),s=Object(l["a"])(r,i,n,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-4db3f6d0.a2e658ac.js.map