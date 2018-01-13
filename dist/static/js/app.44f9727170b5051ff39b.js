webpackJsonp([1],{"7/0V":function(t,e){},"9jp5":function(t,e){},FMhZ:function(t,e){},IWW4:function(t,e){},J0Xb:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("VCXJ"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=a("X4nt")({name:"app"},s,!1,function(t){a("Sxuy")},null,null).exports,o=a("IHPB"),i=a.n(o),l=a("zO6J"),c={theme:"dark",accordion:!0,shrink:!0},u={name:"sidebarMenu",props:{shrink:Boolean},data:function(){return{appRouter:S,sidebarMenuConf:c}},computed:{backgroundColor:function(){return"dark"===this.sidebarMenuConf.theme?"#495060":"#fff"},iconColor:function(){return"dark"===this.sidebarMenuConf.theme?"rgba(255, 255, 255, 0.7)":"#495060"}},methods:{changePath:function(t){this.$router.push(t)}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-menu",style:{background:t.backgroundColor}},[a("transition",{attrs:{name:"fade"}},[t.shrink?a("div",[t._t("logo"),t._v(" "),t._l(t.appRouter,function(e,r){return[a("Dropdown",{key:r,staticClass:"shrink-dropdown",attrs:{transfer:"",placement:"right-start"},on:{"on-click":t.changePath}},[a("Button",{staticClass:"shrink-button",attrs:{type:"text"}},[a("Icon",{staticClass:"shrink-icon",style:{color:t.iconColor},attrs:{type:e.icon}})],1),t._v(" "),a("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(e.children,function(e,r){return a("DropdownItem",{key:r,attrs:{name:e.path}},[a("Icon",{key:r,attrs:{type:e.icon}}),t._v("\n              "+t._s(e.title)+"\n            ")],1)}))],1)]})],2):a("Menu",{staticClass:"menu",attrs:{"active-name":t.$route.path,width:"auto",theme:t.sidebarMenuConf.theme,accordion:t.sidebarMenuConf.accordion},on:{"on-select":t.changePath}},[t._t("logo"),t._v(" "),t._l(t.appRouter,function(e,r){return[e.children.length>1?a("Submenu",{key:r,staticClass:"submenu",attrs:{name:e.path}},[a("template",{slot:"title"},[a("Icon",{attrs:{type:e.icon}}),t._v("\n            "+t._s(e.title)+"\n          ")],1),t._v(" "),t._l(e.children,function(e,r){return a("MenuItem",{key:r,attrs:{name:e.path}},[a("Icon",{key:r,attrs:{type:e.icon}}),t._v("\n          "+t._s(e.title)+"\n          ")],1)})],2):a("MenuItem",{key:r,attrs:{name:e.path}},[a("Icon",{key:r,attrs:{type:e.icon}}),t._v("\n        "+t._s(e.title)+"\n        ")],1)]})],2)],1)],1)},staticRenderFns:[]};var f={name:"pageHeader",data:function(){return{sidebarMenuConf:c}},methods:{toggleMenu:function(){this.$emit("toggleMenu")}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Row",{staticClass:"row",attrs:{type:"flex",align:"middle"}},[e("Col",{attrs:{span:"1"}},[this.sidebarMenuConf.shrink?e("Button",{attrs:{type:"text"},on:{click:this.toggleMenu}},[e("Icon",{attrs:{type:"navicon-round",size:"25"}})],1):this._e()],1),this._v(" "),e("Col",{attrs:{offset:"20",span:"1"}}),this._v(" "),e("Col",{staticClass:"ml-10",attrs:{span:"1"}},[e("Avatar",{attrs:{shape:"square",icon:"person"}})],1)],1)},staticRenderFns:[]};var p={components:{SidebarMenu:a("X4nt")(u,m,!1,function(t){a("ZpEG")},"data-v-2dca8e34",null).exports,PageHeader:a("X4nt")(f,h,!1,function(t){a("IWW4")},"data-v-347aa5e2",null).exports},data:function(){return{shrink:!0}},methods:{toggleMenu:function(){this.shrink=!this.shrink,this.$store.state.shrink=this.shrink}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Row",{staticClass:"row"},[e("Col",{staticClass:"col",attrs:{span:this.shrink?1:4}},[e("sidebar-menu",{attrs:{shrink:this.shrink}},[e("div",{staticClass:"logo",attrs:{slot:"logo"},slot:"logo"})])],1),this._v(" "),e("Col",{staticClass:"col",attrs:{span:this.shrink?23:20}},[e("page-header",{on:{toggleMenu:this.toggleMenu}}),this._v(" "),e("div",{staticClass:"content"},[e("router-view")],1)],1)],1)},staticRenderFns:[]};var v=a("X4nt")(p,d,!1,function(t){a("Y8UI")},"data-v-0d8870e0",null).exports,_={props:{step:Number}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"step"},[e("Steps",{attrs:{current:this.step}},[e("Step",{attrs:{title:"基本信息",content:"店铺基本信息"}}),this._v(" "),e("Step",{attrs:{title:"销售信息",content:"店铺销售信息"}}),this._v(" "),e("Step",{attrs:{title:"其他信息",content:"店铺其他信息"}})],1)],1)},staticRenderFns:[]};var b=a("X4nt")(_,C,!1,function(t){a("FMhZ")},"data-v-23252a34",null).exports,D={props:{step:Number},data:function(){return{formData:{name:"默认店铺",area:100,costPerArea:600,personNumber:8,costPerPerson:5e3,otherCost:5e3,sales:6e5,returnValuePerQuarter:4e4,category:[]},categoryList:["DSC","ILC","Lens","PV","LCD","MDR","SPK","DMP","PS","Mobile","SB","Others"]}},methods:{changeStep:function(t){1===this.step&&this.formData.category.some(function(t){return""===t.name})?this.$Message.error("品类名称不能为空"):this.$emit("changeStep",t)},changeFormData:function(){this.$emit("changeFormData",this.formData)},addCategory:function(){this.formData.category.push({name:"",grossProfitRate:5,stableReturnRate:5,returnRatePerMonth:3,saleRate:0})},removeCategory:function(t){this.formData.category.splice(t,1)},filterMethod:function(t,e){return-1!==e.toUpperCase().indexOf(t.toUpperCase())}},mounted:function(){this.changeFormData()}},g={render:function(){var t=this,e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"information-form"},[r("div",{directives:[{name:"show",rawName:"v-show",value:0===e.step,expression:"step===0"}],staticClass:"basic-information"},[r("Form",{attrs:{"label-width":100}},[r("h1",[e._v("基本信息")]),e._v(" "),r("FormItem",{attrs:{label:"名称"}},[r("Input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("FormItem",{attrs:{label:"店铺面积"}},[r("Slider",{attrs:{"show-input":"",max:200},model:{value:e.formData.area,callback:function(t){e.$set(e.formData,"area",t)},expression:"formData.area"}})],1),e._v(" "),r("FormItem",{attrs:{label:"单位面积月租金"}},[r("InputNumber",{attrs:{step:100,min:0},model:{value:e.formData.costPerArea,callback:function(t){e.$set(e.formData,"costPerArea",t)},expression:"formData.costPerArea"}})],1),e._v(" "),r("FormItem",{attrs:{label:"店铺总月租金"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.area*e.formData.costPerArea))])]),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("FormItem",{attrs:{label:"店员数"}},[r("Slider",{attrs:{"show-input":"",max:20},model:{value:e.formData.personNumber,callback:function(t){e.$set(e.formData,"personNumber",t)},expression:"formData.personNumber"}})],1),e._v(" "),r("FormItem",{attrs:{label:"单人月成本"}},[r("InputNumber",{attrs:{step:1e3,min:0},model:{value:e.formData.costPerPerson,callback:function(t){e.$set(e.formData,"costPerPerson",t)},expression:"formData.costPerPerson"}})],1),e._v(" "),r("FormItem",{attrs:{label:"人工小计"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.personNumber*e.formData.costPerPerson))])]),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("FormItem",{attrs:{label:"杂费"}},[r("InputNumber",{attrs:{step:1e3,min:0},model:{value:e.formData.otherCost,callback:function(t){e.$set(e.formData,"otherCost",t)},expression:"formData.otherCost"}})],1),e._v(" "),r("FormItem",{attrs:{label:"杂费合计"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.otherCost))])]),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("FormItem",{attrs:{label:"支出合计"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.area*e.formData.costPerArea+e.formData.personNumber*e.formData.costPerPerson+e.formData.otherCost))])]),e._v(" "),r("Row",{attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"4"}},[r("Button",{on:{click:function(t){e.changeStep("next")}}},[e._v("下一步")])],1)],1)],1)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1===e.step,expression:"step===1"}],staticClass:"sale"},[r("Form",{attrs:{"label-width":100}},[r("h1",[e._v("销售品类")]),e._v(" "),r("FormItem",{attrs:{label:"销售额"}},[r("InputNumber",{attrs:{step:1e4,min:0},model:{value:e.formData.sales,callback:function(t){e.$set(e.formData,"sales",t)},expression:"formData.sales"}})],1),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("FormItem",{attrs:{label:"季返基数"}},[r("InputNumber",{attrs:{step:1e4,min:0},model:{value:e.formData.returnValuePerQuarter,callback:function(t){e.$set(e.formData,"returnValuePerQuarter",t)},expression:"formData.returnValuePerQuarter"}})],1),e._v(" "),r("FormItem",{attrs:{label:"月季返基数"}},[r("span",{staticClass:"total"},[e._v(e._s(Math.floor(e.formData.returnValuePerQuarter/3*.9)))])]),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),e._l(e.formData.category,function(t,a){return[r("div",{key:a},[r("FormItem",{attrs:{label:"品类名称",required:""}},[r("Row",[r("Col",{attrs:{span:"20"}},[r("AutoComplete",{attrs:{data:e.categoryList,"filter-method":e.filterMethod},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),e._v(" "),r("Col",{attrs:{span:"4"}},[r("Button",{staticClass:"remove-btn",on:{click:function(t){e.removeCategory(a)}}},[e._v("remove")])],1)],1)],1),e._v(" "),r("FormItem",{attrs:{label:"销售占比"}},[r("Slider",{attrs:{"show-input":""},model:{value:t.saleRate,callback:function(a){e.$set(t,"saleRate",a)},expression:"item.saleRate"}})],1),e._v(" "),r("FormItem",{attrs:{label:"销售额"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.sales*t.saleRate/100))])]),e._v(" "),r("FormItem",{attrs:{label:"毛利率"}},[r("Slider",{attrs:{"show-input":"",max:15},model:{value:t.grossProfitRate,callback:function(a){e.$set(t,"grossProfitRate",a)},expression:"item.grossProfitRate"}})],1),e._v(" "),r("FormItem",{attrs:{label:"毛利润"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.sales*t.saleRate*t.grossProfitRate/1e4))])]),e._v(" "),r("FormItem",{attrs:{label:"固返比例"}},[r("Slider",{attrs:{"show-input":"",max:20},model:{value:t.stableReturnRate,callback:function(a){e.$set(t,"stableReturnRate",a)},expression:"item.stableReturnRate"}})],1),e._v(" "),r("FormItem",{attrs:{label:"固返额"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.sales*t.saleRate*t.stableReturnRate/1e4))])]),e._v(" "),r("FormItem",{attrs:{label:"月返比例"}},[r("Slider",{attrs:{"show-input":"",max:20},model:{value:t.returnRatePerMonth,callback:function(a){e.$set(t,"returnRatePerMonth",a)},expression:"item.returnRatePerMonth"}})],1),e._v(" "),r("FormItem",{attrs:{label:"月返额"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.sales*t.saleRate*t.returnRatePerMonth/1e4))])]),e._v(" "),r("div",{staticClass:"divider"})],1)]}),e._v(" "),r("Row",{attrs:{type:"flex",justify:"center"}},[r("Col",{attrs:{span:"12"}},[r("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:e.addCategory}},[e._v("Add category")])],1)],1),e._v(" "),r("div",{staticClass:"divider"}),e._v(" "),r("FormItem",{attrs:{label:"销售总收入"}},[r("span",{staticClass:"total"},[e._v(e._s(e.formData.category.reduce(function(e,a){return e+t.formData.sales*a.saleRate*a.grossProfitRate/1e4+t.formData.sales*a.saleRate*a.stableReturnRate/1e4+t.formData.sales*a.saleRate*a.returnRatePerMonth/1e4*.9},this.formData.returnValuePerQuarter/3*.9)))])]),e._v(" "),r("Row",{staticClass:"mt-10",attrs:{type:"flex",justify:"center",gutter:10}},[r("Col",{attrs:{span:"4"}},[r("Button",{on:{click:function(t){e.changeStep("prev")}}},[e._v("上一步")])],1),e._v(" "),r("Col",{attrs:{span:"4"}},[r("Button",{on:{click:function(t){e.changeStep("next")}}},[e._v("下一步")])],1)],1)],2)],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:2===e.step,expression:"step===2"}],staticClass:"other-information"},[r("Form",{attrs:{"label-width":100}},[r("h1",[e._v("其他信息")]),e._v(" "),r("Row",{staticClass:"mt-10",attrs:{type:"flex",justify:"center",gutter:10}},[r("Col",{attrs:{span:"4"}},[r("Button",{on:{click:function(t){e.changeStep("prev")}}},[e._v("上一步")])],1)],1)],1)],1)])},staticRenderFns:[]};var R=a("X4nt")(D,g,!1,function(t){a("yj3X")},"data-v-14128dbe",null).exports,y={props:{formData:Object,step:Number},computed:{rent:function(){return this.formData.area*this.formData.costPerArea},laborCost:function(){return this.formData.personNumber*this.formData.costPerPerson},cost:function(){return this.rent+this.laborCost+this.formData.otherCost},income:function(){var t=this;return this.formData.category?this.formData.category.reduce(function(e,a){return e+t.formData.sales*a.saleRate*a.grossProfitRate/1e4+t.formData.sales*a.saleRate*a.stableReturnRate/1e4+t.formData.sales*a.saleRate*a.returnRatePerMonth/1e4*.9},this.formData.returnValuePerQuarter/3*.9):0}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("名称："+this._s(this.formData.name))]),this._v(" "),e("p",[this._v("总收入："+this._s(this.income))]),this._v(" "),e("p",[this._v("总成本："+this._s(this.cost))]),this._v(" "),e("p",[this._v("总盈亏："+this._s(this.income-this.cost))])])},staticRenderFns:[]};var P=a("X4nt")(y,I,!1,function(t){a("J0Xb")},null,null).exports,x=a("7VF+"),k=a.n(x),w={props:{formData:Object,step:Number},data:function(){return{costChart:null,incomeChart:null}},computed:{rent:function(){return this.formData.area*this.formData.costPerArea},laborCost:function(){return this.formData.personNumber*this.formData.costPerPerson},income:function(){var t=this;return this.formData.category?this.formData.category.reduce(function(e,a){return e+t.formData.sales*a.saleRate*a.grossProfitRate/1e4+t.formData.sales*a.saleRate*a.stableReturnRate/1e4+t.formData.sales*a.saleRate*a.returnRatePerMonth/1e4*.9},this.formData.returnValuePerQuarter/3*.9):0},names:function(){return this.formData.category?this.formData.category.reduce(function(t,e){return t+e.name},""):""}},watch:{rent:function(){this.drawCostChart()},laborCost:function(){this.drawCostChart()},"formData.otherCost":function(){this.drawCostChart()},income:function(){this.drawIncomeChart()},names:function(){this.drawIncomeChart()}},methods:{drawCostChart:function(){this.costChart.setOption({title:{text:"支出详情",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["租金支出","人力支出","杂费支出"]},series:[{name:"支出详情",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:this.laborCost,name:"人力支出"},{value:this.formData.otherCost,name:"杂费支出"},{value:this.rent,name:"租金支出"}]}]})},drawIncomeChart:function(){var t=this;this.incomeChart.setOption({title:{text:"收入详情",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:this.formData.category.map(function(t){return t.name})},series:[{name:"收入详情",type:"pie",radius:"55%",center:["50%","60%"],data:this.formData.category.map(function(e){return{name:e.name,value:t.formData.sales*e.saleRate*e.grossProfitRate/1e4+t.formData.sales*e.saleRate*e.stableReturnRate/1e4+t.formData.sales*e.saleRate*e.returnRatePerMonth/1e4*.9}})}]})}},mounted:function(){var t=this;this.costChart=k.a.init(document.getElementById("costChart")),this.incomeChart=k.a.init(document.getElementById("incomeChart")),window.addEventListener("resize",function(){t.costChart.resize(),t.incomeChart.resize()})}},F={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"chart",attrs:{id:"costChart"}}),this._v(" "),e("div",{staticClass:"chart",attrs:{id:"incomeChart"}})])}]};var M={components:{InformationFormStep:b,InformationForm:R,ComputedInformation:P,InformationChart:a("X4nt")(w,F,!1,function(t){a("PP4u")},"data-v-65d310b2",null).exports},data:function(){return{step:0,formData:{}}},methods:{changeStep:function(t){this.step="next"===t?Math.min(3,++this.step):Math.max(0,--this.step)},changeFormData:function(t){this.formData=t}}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Row",{staticClass:"mb-10",attrs:{gutter:10}},[e("Col",{attrs:{span:"16"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-paper"}}),this._v("\n        Form\n      ")],1),this._v(" "),e("Row",{attrs:{type:"flex",justify:"center"}},[e("Col",{attrs:{span:"16"}},[e("information-form-step",{attrs:{step:this.step}})],1)],1),this._v(" "),e("Row",{attrs:{type:"flex",justify:"center"}},[e("Col",{attrs:{span:"20"}},[e("information-form",{attrs:{step:this.step},on:{changeFormData:this.changeFormData,changeStep:this.changeStep}})],1)],1)],1)],1),this._v(" "),e("Col",{attrs:{span:"8"}},[e("Row",{class:this.$store.state.shrink?"fixed-shrink":"fixed"},[e("Col",{attrs:{span:"24"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"stats-bars"}}),this._v("\n          Chart\n        ")],1),this._v(" "),e("information-chart",{attrs:{step:this.step,formData:this.formData}})],1)],1),this._v(" "),e("Col",{staticClass:"mt-10",attrs:{span:"24"}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[e("Icon",{attrs:{type:"ios-paper"}}),this._v("\n          Result\n        ")],1),this._v(" "),e("computed-information",{attrs:{formData:this.formData,step:this.step}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var S=[{path:"/index/home",icon:"home",title:"主页",component:v,children:[{path:"/index/home",name:"home",icon:"home",title:"主页",component:a("X4nt")(M,$,!1,function(t){a("9jp5")},"data-v-91c31e8a",null).exports}]}];r.default.use(l.a);var N=new l.a({routes:[].concat(i()(S),[{path:"/*",redirect:"/index/home"}])}),j=a("9rMa");r.default.use(j.a);var E=new j.a.Store({state:{shrink:!0}}),A=a("S0kX"),X=a.n(A),V=(a("7/0V"),a("2sCs")),B=a.n(V),O=a("MqOw"),q=a.n(O),Q=a("rVsN"),L=a.n(Q),U=a("DEjr"),z=a.n(U),H={baseURL:{DOMAIN:"http://localhost:3000"}.DOMAIN,headers:{"Content-Type":"application/json;charset=UTF-8"},transformRequest:[]},J={request:{resolve:function(t){return t},reject:function(t){return console.log(t),L.a.reject(t)}},response:{resolve:function(t){return t},reject:function(t){return console.log(t.response),L.a.reject(t)}}};if("application/x-www-form-urlencoded;charset=utf-8"===H.headers["Content-Type"]){H.transformRequest.push(function(t){return t=z.a.stringify(t)})}var T={axiosInstanceConfigure:H,axiosInterceptorsConfigure:J},W=B.a.create(T.axiosInstanceConfigure);W.interceptors.request.use(T.axiosInterceptorsConfigure.request.resolve,T.axiosInterceptorsConfigure.request.reject),W.interceptors.response.use(T.axiosInterceptorsConfigure.response.resolve,T.axiosInterceptorsConfigure.response.reject),r.default.use(q.a,W),r.default.use(X.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:N,store:E,template:"<App/>",components:{App:n}})},PP4u:function(t,e){},Sxuy:function(t,e){},Y8UI:function(t,e){},ZpEG:function(t,e){},yj3X:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.44f9727170b5051ff39b.js.map