"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[87929],{87929:(ge,A,n)=>{n.r(A),n.d(A,{ExampleTuiMultiSelectModule:()=>Ee});var O=n(63737),f=n(12057),u=n(23738),K=n(33982),b=n(29851),p=n(36692),m=n(72002),h=n(753),q=n(89570),k=n(75695),t=n(74788),tt=n(82880),et=n(98204),it=n(88331),nt=n(37159),at=n(57068),ot=n(64762),c=n(93251),T=n(68874),d=n(52219),_=n(50020),M=n(20501);function lt(i,a){if(1&i&&t._UZ(0,"tui-data-list-wrapper",2),2&i){const e=t.oxw();t.Q6J("items",e.filter(e.search))}}const I=["Luke Skywalker","Leia Organa Solo","Darth Vader","Han Solo","Obi-Wan Kenobi","Yoda"];class g{constructor(){this.search="",this.control=new u.NI([I[0]])}filter(a){return I.filter(e=>(0,p.TUI_DEFAULT_MATCHER)(e,a||""))}}g.\u0275fac=function(a){return new(a||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["tui-multi-select-example-1"]],decls:3,vars:4,consts:[["placeholder","Ignored text",1,"b-form",3,"formControl","tuiTextfieldLabelOutside","editable","search","searchChange"],["tuiMultiSelectGroup","",3,"items",4,"tuiDataList"],["tuiMultiSelectGroup","",3,"items"]],template:function(a,e){1&a&&(t.TgZ(0,"tui-multi-select",0),t.NdJ("searchChange",function(l){return e.search=l}),t._uU(1," Star Wars persons "),t.YNc(2,lt,1,1,"tui-data-list-wrapper",1),t.qZA()),2&a&&t.Q6J("formControl",e.control)("tuiTextfieldLabelOutside",!0)("editable",!1)("search",e.search)},directives:[c.V,u.JJ,u.oH,T.x,d.g,_.e,M.Q],encapsulation:2,changeDetection:0}),(0,ot.gn)([p.tuiPure],g.prototype,"filter",null);var ut=n(27075),U=n(79765),st=n(25917),rt=n(45435),$=n(43190),F=n(39761),ct=n(71289),Z=n(40939),dt=n(44124),R=n(73139);function mt(i,a){if(1&i&&(t._UZ(0,"tui-data-list-wrapper",4),t.ALo(1,"tuiHideSelected")),2&i){const e=t.oxw().tuiLet;t.oxw();const o=t.MAs(3);t.Q6J("items",t.lcZ(1,2,e))("itemContent",o)}}function Tt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tui-multi-select",2),t.NdJ("searchChange",function(l){return t.CHM(e),t.oxw().onSearchChange(l)}),t._uU(1," Rock Star Frontend Developers "),t.YNc(2,mt,2,4,"tui-data-list-wrapper",3),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("formControl",e.testValue)("tuiTextfieldLabelOutside",!0)("expandable",!1)}}function pt(i,a){if(1&i&&(t.TgZ(0,"div",5),t._UZ(1,"tui-avatar",6),t._uU(2),t.qZA()),2&i){const e=a.$implicit;t.xp6(1),t.Q6J("avatarUrl",e.avatarUrl)("text",e.toString()),t.xp6(1),t.hij(" ",e," ")}}class E{constructor(a,e,o=null){this.firstName=a,this.lastName=e,this.avatarUrl=o}toString(){return`${this.firstName} ${this.lastName}`}}const D=[new E("Roman","Sedov","http://marsibarsi.me/images/1x1small.jpg"),new E("Alex","Inkin",ut.L`/images/avatar.jpg`),new E("Dmitriy","Demenskiy"),new E("Evgeniy","Mamaev"),new E("Ivan","Ishmametiev"),new E("Igor","Katsuba"),new E("Yulia","Tsareva")];let _t=(()=>{class i{constructor(){this.search$=new U.xQ,this.items$=this.search$.pipe((0,rt.h)(e=>null!==e),(0,$.w)(e=>this.serverRequest(e).pipe((0,F.O)(null))),(0,F.O)(D)),this.testValue=new u.NI([D[0]])}onSearchChange(e){this.search$.next(e)}serverRequest(e){const o=D.filter(l=>(0,p.TUI_DEFAULT_MATCHER)(l,e||""));return(0,st.of)(o).pipe((0,ct.g)(1e3*Math.random()+500))}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-multi-select-example-2"]],decls:4,vars:3,consts:[["placeholder","Find by ...","class","b-form",3,"formControl","tuiTextfieldLabelOutside","expandable","searchChange",4,"tuiLet"],["itemContent",""],["placeholder","Find by ...",1,"b-form",3,"formControl","tuiTextfieldLabelOutside","expandable","searchChange"],[3,"items","itemContent",4,"tuiDataList"],[3,"items","itemContent"],[1,"template"],["size","xs",1,"avatar",3,"avatarUrl","text"]],template:function(e,o){1&e&&(t.YNc(0,Tt,3,3,"tui-multi-select",0),t.ALo(1,"async"),t.YNc(2,pt,3,3,"ng-template",null,1,t.W1O)),2&e&&t.Q6J("tuiLet",t.lcZ(1,1,o.items$))},directives:[Z.L,c.V,u.JJ,u.oH,T.x,d.g,_.e,dt.J],pipes:[f.Ov,R.E],styles:[".template[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 -.25rem}"],changeDetection:0}),i})();var L=n(10200),x=n(64374),y=n(20933),P=n(35065);function Mt(i,a){if(1&i&&(t.TgZ(0,"button",8),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.name," ")}}function St(i,a){if(1&i&&(t.TgZ(0,"tui-data-list",6),t.YNc(1,Mt,2,2,"button",7),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.items)}}function Et(i,a){if(1&i&&(t.TgZ(0,"button",8),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.name," ")}}function gt(i,a){if(1&i&&(t.TgZ(0,"tui-data-list",6),t.YNc(1,Et,2,2,"button",7),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.items)}}function Ct(i,a){if(1&i&&t._UZ(0,"tui-data-list-wrapper",9),2&i){const e=t.oxw();t.Q6J("items",e.items)("itemContent",e.stringify)}}let ft=(()=>{class i{constructor(){this.items=[{id:1,name:"Luke Skywalker"},{id:2,name:"Leia Organa Solo"},{id:3,name:"Darth Vader"},{id:4,name:"Han Solo"},{id:5,name:"Obi-Wan Kenobi"},{id:6,name:"Yoda"}],this.control=new u.NI([this.items[3],this.items[4]]),this.stringify=e=>"name"in e?e.name:e.$implicit.name,this.identityMatcher=(e,o)=>e.id===o.id}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-multi-select-example-3"]],decls:10,vars:15,consts:[[1,"b-form"],["tuiTextfieldSize","s",3,"formControl","stringify","identityMatcher","tuiTextfieldCleaner"],["tuiMultiSelectGroup","",4,"tuiDataList"],["tuiTextfieldSize","m",1,"tui-space_top-2",3,"editable","formControl","stringify","identityMatcher","tuiTextfieldLabelOutside","tuiTextfieldCleaner"],[1,"tui-space_top-2",3,"editable","formControl","stringify","identityMatcher","tuiTextfieldCleaner"],["tuiMultiSelectGroup","",3,"items","itemContent",4,"tuiDataList"],["tuiMultiSelectGroup",""],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["tuiMultiSelectGroup","",3,"items","itemContent"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-multi-select",1),t._uU(2," Choose your heroes "),t.YNc(3,St,2,1,"tui-data-list",2),t.qZA(),t.TgZ(4,"tui-multi-select",3),t._uU(5," Choose your heroes "),t.YNc(6,gt,2,1,"tui-data-list",2),t.qZA(),t.TgZ(7,"tui-multi-select",4),t._uU(8," Choose your heroes "),t.YNc(9,Ct,1,2,"tui-data-list-wrapper",5),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("formControl",o.control)("stringify",o.stringify)("identityMatcher",o.identityMatcher)("tuiTextfieldCleaner",!0),t.xp6(3),t.Q6J("editable",!1)("formControl",o.control)("stringify",o.stringify)("identityMatcher",o.identityMatcher)("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),t.xp6(3),t.Q6J("editable",!1)("formControl",o.control)("stringify",o.stringify)("identityMatcher",o.identityMatcher)("tuiTextfieldCleaner",!0))},directives:[u._Y,u.JL,u.F,c.V,L.s,u.JJ,u.oH,x.b,d.g,T.x,y.q,M.Q,f.sg,P.v,_.e],encapsulation:2,changeDetection:0}),i})();var ht=n(46797),Ft=n(96736),xt=n(47349),v=n(88002);function Ot(i,a){if(1&i&&(t._UZ(0,"tui-data-list-wrapper",3),t.ALo(1,"async")),2&i){const e=t.oxw().tuiLet,o=t.oxw();t.Q6J("items",e)("itemContent",t.lcZ(1,2,o.stringify$))}}function Lt(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tui-multi-select",1),t.NdJ("searchChange",function(l){return t.CHM(e),t.oxw().onSearch(l)}),t.ALo(1,"async"),t.YNc(2,Ot,2,4,"tui-data-list-wrapper",2),t.qZA()}if(2&i){const e=t.oxw();t.Q6J("formControl",e.control)("tuiTextfieldLabelOutside",!0)("stringify",t.lcZ(1,3,e.stringify$))}}const Nt=[{id:1,name:"Luke Skywalker"},{id:2,name:"Princess Leia"},{id:3,name:"Darth Vader"},{id:4,name:"Han Solo"},{id:5,name:"Obi-Wan Kenobi"},{id:6,name:"Yoda"}];let Dt=(()=>{class i{constructor(){this.server$=(0,ht.H)(5e3).pipe((0,Ft.h)(Nt),(0,xt.d)({bufferSize:1,refCount:!0})),this.search$=new U.xQ,this.items$=this.search$.pipe((0,F.O)(""),(0,$.w)(e=>this.server$.pipe((0,v.U)(o=>o.filter(({name:l})=>(0,p.TUI_DEFAULT_MATCHER)(l,e)).map(({id:l})=>l)))),(0,F.O)(null)),this.stringify$=this.server$.pipe((0,v.U)(e=>new Map(e.map(({id:o,name:l})=>[o,l]))),(0,F.O)(new Map),(0,v.U)(e=>o=>((0,p.tuiIsNumber)(o)?e.get(o):e.get(o.$implicit))||"Loading...")),this.control=new u.NI([2,3])}onSearch(e){this.search$.next(e||"")}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-multi-select-example-4"]],decls:2,vars:3,consts:[["class","b-form",3,"formControl","tuiTextfieldLabelOutside","stringify","searchChange",4,"tuiLet"],[1,"b-form",3,"formControl","tuiTextfieldLabelOutside","stringify","searchChange"],["tuiMultiSelectGroup","",3,"items","itemContent",4,"tuiDataList"],["tuiMultiSelectGroup","",3,"items","itemContent"]],template:function(e,o){1&e&&(t.YNc(0,Lt,3,5,"tui-multi-select",0),t.ALo(1,"async")),2&e&&t.Q6J("tuiLet",t.lcZ(1,1,o.items$))},directives:[Z.L,c.V,u.JJ,u.oH,T.x,d.g,_.e,M.Q],pipes:[f.Ov],encapsulation:2,changeDetection:0}),i})();var yt=n(89786),Pt=n(31363);function vt(i,a){if(1&i&&(t.TgZ(0,"button",6),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function At(i,a){if(1&i&&(t.TgZ(0,"button",6),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function bt(i,a){if(1&i&&(t.TgZ(0,"tui-data-list"),t.TgZ(1,"tui-opt-group",3),t.YNc(2,vt,2,2,"button",4),t.qZA(),t.TgZ(3,"tui-opt-group",5),t.YNc(4,At,2,2,"button",4),t.ALo(5,"tuiHideSelected"),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.jedi),t.xp6(2),t.Q6J("ngForOf",t.lcZ(5,2,e.sith))}}let It=(()=>{class i{constructor(){this.jedi=["Luke Skywalker","Princess Leia","Han Solo","Obi-Wan Kenobi","Yoda"],this.sith=["Emperor","Darth Vader","Darth Maul"],this.value=[this.jedi[0]]}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-multi-select-example-5"]],decls:3,vars:4,consts:[[1,"b-form",3,"editable","expandable","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["component",""],[4,"tuiDataList"],["tuiMultiSelectGroup","","label","Jedi, may the force be with them blah blah blah"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["label","Sith"],["tuiOption","",3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"tui-multi-select",0,1),t.NdJ("ngModelChange",function(s){return o.value=s}),t.YNc(2,bt,6,4,"tui-data-list",2),t.qZA()),2&e&&t.Q6J("editable",!1)("expandable",!1)("tuiTextfieldLabelOutside",!0)("ngModel",o.value)},directives:[c.V,T.x,u.JJ,u.On,d.g,y.q,yt.R,Pt.g,M.Q,f.sg,P.v],pipes:[R.E],encapsulation:2,changeDetection:0}),i})();function Ut(i,a){if(1&i&&t._UZ(0,"tui-data-list-wrapper",2),2&i){const e=t.oxw();t.Q6J("items",e.items)}}let $t=(()=>{class i{constructor(){this.items=["\u06af\u0631\u0627\u0647\u0627\u0645 \u0686\u067e\u0645\u0646","\u062c\u0627\u0646 \u06a9\u0644\u06cc\u0632","\u062a\u0631\u06cc \u06af\u06cc\u0644\u06cc\u0627\u0645","\u0627\u0631\u06cc\u06a9 \u0622\u06cc\u062f\u0644","\u062a\u0631\u06cc \u062c\u0648\u0646\u0632","\u0645\u0627\u06cc\u06a9\u0644 \u067e\u06cc\u0644\u06cc\u0646"],this.value=[this.items[0]]}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-multi-select-example-6"]],decls:2,vars:3,consts:[[1,"input",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,o){1&e&&(t.TgZ(0,"tui-multi-select",0),t.NdJ("ngModelChange",function(s){return o.value=s}),t.YNc(1,Ut,1,1,"tui-data-list-wrapper",1),t.qZA()),2&e&&t.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0)("ngModel",o.value)},directives:[c.V,T.x,x.b,u.JJ,u.On,d.g,_.e],styles:[".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),i})();var Zt=n(62500);function Rt(i,a){if(1&i&&(t.TgZ(0,"button",5),t._uU(1),t.qZA()),2&i){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function Jt(i,a){if(1&i&&(t.TgZ(0,"cdk-virtual-scroll-viewport",2),t.TgZ(1,"tui-data-list",3),t.YNc(2,Rt,2,2,"button",4),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.Q6J("itemSize",44),t.xp6(2),t.Q6J("cdkVirtualForOf",e.countries)}}let Gt=(()=>{class i{constructor(){this.value=[],this.countries=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cura\xe7ao","Cyprus","Czechia","C\xf4te d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation","Rwanda","R\xe9union","Saint Barth\xe9lemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","\xc5land Islands"]}get content(){return`Selected ${this.value.length} of ${this.countries.length}`}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-multi-select-example-7"]],decls:3,vars:3,consts:[[1,"b-form",3,"editable","valueContent","ngModel","ngModelChange"],["tuiScrollable","","class","scroll",3,"itemSize",4,"tuiDataList"],["tuiScrollable","",1,"scroll",3,"itemSize"],["tuiMultiSelectGroup",""],["tuiOption","",3,"value",4,"cdkVirtualFor","cdkVirtualForOf"],["tuiOption","",3,"value"]],template:function(e,o){1&e&&(t.TgZ(0,"tui-multi-select",0),t.NdJ("ngModelChange",function(s){return o.value=s}),t._uU(1," Applicable countries "),t.YNc(2,Jt,3,2,"cdk-virtual-scroll-viewport",1),t.qZA()),2&e&&t.Q6J("editable",!1)("valueContent",o.content)("ngModel",o.value)},directives:[c.V,u.JJ,u.On,d.g,O.N7,O.xd,Zt.R,y.q,M.Q,O.x0,P.v],styles:[".scroll[_ngcontent-%COMP%]{scrollbar-width:none;-ms-overflow-style:none;height:200px;--tui-duration: 0}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar, .scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}"],changeDetection:0}),i})();function Vt(i,a){if(1&i&&t._UZ(0,"tui-data-list-wrapper",4),2&i){const e=t.oxw();t.Q6J("items",e.items)}}function Ht(i,a){if(1&i&&t._UZ(0,"tui-data-list-wrapper",4),2&i){const e=t.oxw();t.Q6J("items",e.items)}}const Qt=i=>"name"in i?`${i.name} (${i.dept.title})`:`${i.$implicit.name} (${i.$implicit.dept.title})`,wt=(i,a)=>i.id===a.id;let zt=(()=>{class i{constructor(){this.testValue=new u.NI([]),this.items=[{id:42,name:"John Cleese",dept:{id:566,title:"Financial"}},{id:237,name:"Eric Idle",dept:{id:560,title:"Staffing"}},{id:666,name:"Michael Palin",dept:{id:566,title:"Financial"}},{id:123,name:"Terry Gilliam",dept:{id:500,title:"Administrative"}},{id:777,name:"Terry Jones",dept:{id:566,title:"Financial"}},{id:999,name:"Graham Chapman",dept:{id:560,title:"Staffing"}}]}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-multi-select-example-8"]],features:[t._Bn([(0,h.tuiItemsHandlersProvider)({stringify:Qt,identityMatcher:wt})])],decls:7,vars:7,consts:[[1,"b-form"],["tuiTextfieldSize","m",3,"editable","formControl","tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["tuiMultiSelectGroup","",3,"items",4,"tuiDataList"],[1,"tui-space_top-2",3,"editable","formControl","tuiTextfieldCleaner"],["tuiMultiSelectGroup","",3,"items"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-multi-select",1),t._uU(2," Employees "),t.YNc(3,Vt,1,1,"tui-data-list-wrapper",2),t.qZA(),t.TgZ(4,"tui-multi-select",3),t._uU(5," Employees "),t.YNc(6,Ht,1,1,"tui-data-list-wrapper",2),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("editable",!1)("formControl",o.testValue)("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),t.xp6(3),t.Q6J("editable",!1)("formControl",o.testValue)("tuiTextfieldCleaner",!0))},directives:[u._Y,u.JL,u.F,c.V,L.s,u.JJ,u.oH,T.x,x.b,d.g,_.e,M.Q],encapsulation:2,changeDetection:0}),i})();var J=n(76189),Yt=n(88135);function Xt(i,a){if(1&i&&t._UZ(0,"tui-data-list-wrapper",8),2&i){const e=t.oxw(2);t.Q6J("items",e.items)}}function Bt(i,a){if(1&i&&(t.TgZ(0,"div",3),t.TgZ(1,"div",4),t.TgZ(2,"label",5),t.TgZ(3,"tui-multi-select",6),t.YNc(4,Xt,1,1,"tui-data-list-wrapper",7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i){const e=a.data,o=t.oxw();t.xp6(3),t.Q6J("tuiTextfieldCleaner",!0)("expandable",!1)("tuiTextfieldSize",e.textFieldSize)("formControl",o.testValue)("tuiTextfieldLabelOutside",!0)}}let Wt=(()=>{class i{constructor(e){this.dialogService=e,this.testValue=new u.NI([]),this.items=["Luke Skywalker","Leia Organa Solo","Darth Vader","Han Solo","Obi-Wan Kenobi","Yoda"]}showDialog(e,o){this.dialogService.open(e,{data:{textFieldSize:o}}).subscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.TuiDialogService))},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-multi-select-example-9"]],decls:8,vars:0,consts:[["tuiButton","","type","button","size","m",1,"tui-space_right-3",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["template",""],[1,"tui-container_fullwidth"],[1,"tui-row","tui-form__row_multi-fields","tui-row_adaptive"],["tuiLabel","Star Wars persons",1,"tui-col_md-12"],[1,"b-form",3,"tuiTextfieldCleaner","expandable","tuiTextfieldSize","formControl","tuiTextfieldLabelOutside"],["tuiMultiSelectGroup","",3,"items",4,"tuiDataList"],["tuiMultiSelectGroup","",3,"items"]],template:function(e,o){if(1&e){const l=t.EpF();t.TgZ(0,"button",0),t.NdJ("click",function(){t.CHM(l);const S=t.MAs(7);return o.showDialog(S,"s")}),t._uU(1," Show 's' size\n"),t.qZA(),t.TgZ(2,"button",0),t.NdJ("click",function(){t.CHM(l);const S=t.MAs(7);return o.showDialog(S,"m")}),t._uU(3," Show 'm' size\n"),t.qZA(),t.TgZ(4,"button",1),t.NdJ("click",function(){t.CHM(l);const S=t.MAs(7);return o.showDialog(S,"l")}),t._uU(5," Show 'l' size\n"),t.qZA(),t.YNc(6,Bt,5,5,"ng-template",null,2,t.W1O)}},directives:[J.v,Yt.A,c.V,x.b,L.s,u.JJ,u.oH,T.x,d.g,_.e,M.Q],encapsulation:2,changeDetection:0}),i})();var jt=n(31823),Kt=n(20546),qt=n(17023),kt=n(54218),te=n(33250),ee=n(3729),ie=n(84848),ne=n(76349);function ae(i,a){if(1&i&&(t.TgZ(0,"div",2),t.tHW(1,3),t._UZ(2,"code"),t.N_p(),t.qZA(),t.TgZ(3,"tui-doc-example",4),t._UZ(4,"tui-multi-select-example-1"),t.qZA(),t.TgZ(5,"tui-doc-example",5),t._UZ(6,"tui-multi-select-example-2"),t.qZA(),t.TgZ(7,"tui-doc-example",6),t._UZ(8,"tui-multi-select-example-3"),t.qZA(),t.TgZ(9,"tui-doc-example",7),t._UZ(10,"tui-multi-select-example-4"),t.qZA(),t.TgZ(11,"tui-doc-example",8),t._UZ(12,"tui-multi-select-example-5"),t.qZA(),t.TgZ(13,"tui-doc-example",9),t._UZ(14,"tui-multi-select-example-6"),t.qZA(),t.TgZ(15,"tui-doc-example",10),t._UZ(16,"tui-multi-select-example-7"),t.qZA(),t.TgZ(17,"tui-doc-example",11),t._UZ(18,"tui-multi-select-example-8"),t.qZA(),t.TgZ(19,"tui-doc-example",12),t._UZ(20,"tui-multi-select-example-9"),t.qZA()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("content",e.example1),t.xp6(2),t.Q6J("content",e.example2),t.xp6(2),t.Q6J("content",e.example3),t.xp6(2),t.Q6J("content",e.example4),t.xp6(2),t.Q6J("content",e.example5),t.xp6(2),t.Q6J("content",e.example6),t.xp6(2),t.Q6J("content",e.example7),t.xp6(2),t.Q6J("content",e.example8),t.xp6(2),t.Q6J("content",e.example9)}}function oe(i,a){if(1&i&&t._UZ(0,"tui-data-list-wrapper",27),2&i){const e=t.oxw(3);t.Q6J("disabledItemHandler",e.disabledItemHandler)("items",e.items)}}function le(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tui-multi-select",25),t.NdJ("searchChange",function(l){return t.CHM(e),t.oxw(2).search=l}),t._uU(1," Choose an account "),t.YNc(2,oe,1,2,"tui-data-list-wrapper",26),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("formControl",e.control)("tuiDropdownAlign",e.dropdownAlign)("tuiTextfieldIconLeft",e.iconLeft)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintAppearance",e.hintAppearance)("focusable",e.focusable)("disabledItemHandler",e.disabledItemHandler)("editable",e.editable)("expandable",e.expandable)("identityMatcher",e.identityMatcher)("readOnly",e.readOnly)("stringify",e.stringify)("pseudoInvalid",e.pseudoInvalid)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoActive",e.pseudoPressed)("valueContent",e.valueContent)("search",e.search)}}function ue(i,a){1&i&&(t.tHW(0,28),t._UZ(1,"code"),t.N_p())}function se(i,a){1&i&&(t.tHW(0,29),t._UZ(1,"code"),t.N_p())}function re(i,a){1&i&&t.SDv(0,30)}function ce(i,a){1&i&&t.SDv(0,31)}function de(i,a){1&i&&t.SDv(0,32)}function me(i,a){1&i&&(t.tHW(0,33),t._UZ(1,"strong"),t.N_p())}function Te(i,a){1&i&&(t.tHW(0,34),t._UZ(1,"code"),t._UZ(2,"strong"),t.N_p())}function pe(i,a){1&i&&t.SDv(0,35)}function _e(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tui-doc-demo",13),t.YNc(1,le,3,26,"ng-template"),t.qZA(),t.TgZ(2,"div"),t.tHW(3,14),t.TgZ(4,"p"),t._UZ(5,"code"),t.qZA(),t.TgZ(6,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().setValue()}),t.qZA(),t.N_p(),t.qZA(),t.TgZ(7,"tui-doc-documentation"),t.YNc(8,ue,2,0,"ng-template",16),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().disabled=l}),t.YNc(9,se,2,0,"ng-template",17),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().search=l}),t.YNc(10,re,1,0,"ng-template",18),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().disabledItemHandler=l}),t.YNc(11,ce,1,0,"ng-template",19),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().editable=l}),t.YNc(12,de,1,0,"ng-template",20),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().expandable=l}),t.YNc(13,me,2,0,"ng-template",21),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().identityMatcher=l}),t.YNc(14,Te,3,0,"ng-template",22),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().stringify=l}),t.YNc(15,pe,1,0,"ng-template",23),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().valueContent=l}),t.qZA(),t._UZ(16,"inherited-documentation",24)}if(2&i){const e=t.oxw();t.Q6J("control",e.control),t.xp6(8),t.Q6J("documentationPropertyValue",e.disabled),t.xp6(1),t.Q6J("documentationPropertyValue",e.search),t.xp6(1),t.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),t.xp6(1),t.Q6J("documentationPropertyValue",e.editable),t.xp6(1),t.Q6J("documentationPropertyValue",e.expandable),t.xp6(1),t.Q6J("documentationPropertyValues",e.identityMatcherVariants)("documentationPropertyValue",e.identityMatcher),t.xp6(1),t.Q6J("documentationPropertyValues",e.stringifyVariants)("documentationPropertyValue",e.stringify),t.xp6(1),t.Q6J("documentationPropertyValues",e.valueContentVariants)("documentationPropertyValue",e.valueContent),t.xp6(1),t.Q6J("dropdown",!0)}}function Me(i,a){if(1&i&&(t.TgZ(0,"ol",36),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,37),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",38),t.TgZ(6,"p"),t.tHW(7,39),t._UZ(8,"code"),t.N_p(),t.qZA(),t.qZA(),t.TgZ(9,"li"),t.TgZ(10,"p"),t.tHW(11,40),t._UZ(12,"code"),t._UZ(13,"code"),t.N_p(),t.qZA(),t._UZ(14,"tui-doc-code",41),t.qZA(),t.TgZ(15,"li"),t.TgZ(16,"p"),t.SDv(17,42),t.qZA(),t._UZ(18,"tui-doc-code",43),t.qZA(),t.qZA()),2&i){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(9),t.Q6J("code",e.exampleForm),t.xp6(4),t.Q6J("code",e.exampleHtml)}}class C{constructor(a,e){this.name=a,this.balance=e}toString(){return`${this.name} (${this.balance})`}}let Se=(()=>{class i extends tt.b{constructor(){super(...arguments),this.exampleModule=n.e(64068).then(n.t.bind(n,64068,17)),this.exampleHtml=n.e(41064).then(n.t.bind(n,41064,17)),this.exampleForm=n.e(94054).then(n.t.bind(n,94054,17)),this.example1={TypeScript:n.e(58395).then(n.t.bind(n,58395,17)),HTML:n.e(96898).then(n.t.bind(n,96898,17))},this.example2={TypeScript:n.e(72230).then(n.t.bind(n,72230,17)),HTML:n.e(7019).then(n.t.bind(n,7019,17)),LESS:n.e(98542).then(n.t.bind(n,98542,17))},this.example3={TypeScript:n.e(45107).then(n.t.bind(n,45107,17)),HTML:n.e(13760).then(n.t.bind(n,13760,17))},this.example4={TypeScript:n.e(12989).then(n.t.bind(n,12989,17)),HTML:n.e(51968).then(n.t.bind(n,51968,17))},this.example5={TypeScript:n.e(26117).then(n.t.bind(n,26117,17)),HTML:n.e(26706).then(n.t.bind(n,26706,17))},this.example6={TypeScript:n.e(77900).then(n.t.bind(n,77900,17)),HTML:n.e(72084).then(n.t.bind(n,72084,17)),LESS:n.e(4755).then(n.t.bind(n,4755,17))},this.example7={TypeScript:n.e(16405).then(n.t.bind(n,16405,17)),HTML:n.e(55174).then(n.t.bind(n,55174,17)),LESS:n.e(64992).then(n.t.bind(n,64992,17))},this.example8={TypeScript:n.e(38840).then(n.t.bind(n,38840,17)),HTML:n.e(29304).then(n.t.bind(n,29304,17))},this.example9={TypeScript:n.e(89367).then(n.t.bind(n,89367,17)),HTML:n.e(91760).then(n.t.bind(n,91760,17))},this.labelOutside=!0,this.items=[new C("Ruble",500),new C("Dollar",500),new C("Euro",500),new C("Pounds",500),new C("Yuan",237)],this.expandable=!0,this.editable=!0,this.search="",this.sizeVariants=["s","m","l"],this.iconVariants=["","tuiIconSearchLarge","tuiIconPiechartLarge","tuiIconCardsLarge"],this.iconLeft="",this.size=this.sizeVariants[this.sizeVariants.length-1],this.stringifyVariants=[p.TUI_DEFAULT_STRINGIFY,e=>String(String(e).match(/\d+/))],this.stringify=this.stringifyVariants[0],this.identityMatcherVariants=[(e,o)=>e===o,(e,o)=>e.balance===o.balance],this.identityMatcher=this.identityMatcherVariants[0],this.maxLengthVariants=[10],this.maxLength=null,this.valueContentVariants=["",({$implicit:{length:e}})=>`Selected: ${e}`],this.valueContent=this.valueContentVariants[0],this.control=new u.NI,this.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,e=>e.balance<300],this.disabledItemHandler=this.disabledItemHandlerVariants[0]}setValue(){this.control.setValue([new C("Dollar",237)])}}return i.\u0275fac=function(){let a;return function(o){return(a||(a=t.n5z(i)))(o||i)}}(),i.\u0275cmp=t.Xpm({type:i,selectors:[["example-tui-multi-select"]],features:[t._Bn([{provide:et.x,useExisting:(0,t.Gpc)(()=>i)}]),t.qOj],decls:4,vars:0,consts:function(){let a,e,o,l,s,S,G,V,H,Q,w,z,Y,X,B,W,N,j;return a=$localize`:␟1370bfd9a3bd5dbdb104246929abb8ef16f30c79␟322443088620685867:${"\ufffd#2\ufffd"}:START_TAG_CODE:MultiSelect${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: is a textfield with a dropdown for choosing several items `,e=$localize`:␟18246b83094cc9589126b64e6d01e462adcdaed4␟6800762720774839936:String array`,o=$localize`:␟ddf3afb4b682a69d70584655c15b5ba47251ef19␟6922213476796739115:Custom template, async items loading`,l=$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`,s=$localize`:␟5df8fff1ea32976050fbdbb2e4bdae97a7d96eeb␟5247767264061245555:With IDs`,S=$localize`:␟895ced0c4c71fbd17c0ae69a1bd58424a04d949e␟6504226182753238526:${"\ufffd#4\ufffd"}:START_PARAGRAPH: Set a value with copied object from items to check ${"\ufffd#5\ufffd"}:START_TAG_CODE:identityMatcher${"\ufffd/#5\ufffd"}:CLOSE_TAG_CODE: : ${"\ufffd/#4\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd#6\ufffd"}:START_TAG_BUTTON: Set ${"\ufffd/#6\ufffd"}:CLOSE_TAG_BUTTON:`,G=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,V=$localize`:␟b45da9f2bafc300277a162143be5640a2c5aaf67␟1886174402380484199: Textfield value to subscribe on input or setting it from the outside (emits ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: when item from list selected) `,H=$localize`:␟79e3dba0f52df39ff1faa20304144f2fb6f25831␟8047919531216999837: Handler for deactivation some items `,Q=$localize`:␟a50496a997fc25853e0606139234a3c23c74b872␟3526829989231983253: Textfield can be use for typing `,w=$localize`:␟a4cdbbb3982f88a63813e7e82e991b6a6eddc494␟4902838123072095655: Control height can be expanded to show all tags `,z=$localize`:␟543ca5b39fc7e55317cb8527b1a5a8dd1e6802b6␟4796409722932472766: A function that compares search and value to define a match between them. ${"\ufffd#1\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG:`,Y=$localize`:␟8b0f2fdf3aa3aaa19b87f4d255d00253c742cf23␟4616897131727147893: A function that transforms object into a string. ${"\ufffd#1\ufffd"}:START_TAG_CODE:String(value)${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd#2\ufffd"}:START_TAG_STRONG:Should be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,X=$localize`:␟bd1797fbae774d643fe66cd7ddbd2dc9b405a294␟5590474436936398231: A template for custom view of selected value `,B=$localize`:␟0c365cd8b95d975d574504d047bacc24fc44c09c␟9060611228690957196: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiMultiSelectModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,W=$localize`:␟dd8213acbcab882d451555cd44ef970b468c7572␟8602164619926939169: See samples to learn more about working with ${"\ufffd#8\ufffd"}:START_TAG_CODE:tui-data-list-wrapper${"\ufffd/#8\ufffd"}:CLOSE_TAG_CODE: or without them `,N=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,N=t.Zx4(N),j=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","MultiSelect","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],a,["id","string-array","heading",e,3,"content"],["id","object-array","heading",o,3,"content"],["id","sizes","heading",l,3,"content"],["id","ids","heading",s,3,"content"],["id","datalist","heading","DataList",3,"content"],["id","rtl","heading","Direction: RTL",3,"content"],["id","virtual","heading","Virtual scroll",3,"content"],["id","options-stringify","heading","Options (stringify)",3,"content"],["id","multiselect-inside-dialog-with-different-size","heading","Multiselect inside dialog with different textfield sizes",3,"content"],[3,"control"],S,["tuiButton","","type","button","size","m",3,"click"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<T>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","expandable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","identityMatcher","documentationPropertyMode","input","documentationPropertyType","TuiIdentityMatcher",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stringify","documentationPropertyMode","input","documentationPropertyType","TuiStringHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","valueContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],[3,"formControl","tuiDropdownAlign","tuiTextfieldIconLeft","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiHintContent","tuiHintDirection","tuiHintAppearance","focusable","disabledItemHandler","editable","expandable","identityMatcher","readOnly","stringify","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","valueContent","search","searchChange"],["tuiMultiSelectGroup","",3,"disabledItemHandler","items",4,"tuiDataList"],["tuiMultiSelectGroup","",3,"disabledItemHandler","items"],G,V,H,Q,w,z,Y,X,[1,"b-demo-steps"],B,["filename","myComponent.module.ts",3,"code"],W,N,["filename","myComponent.component.ts",3,"code"],j,["filename","myComponent.template.html",3,"code"]]},template:function(e,o){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,ae,21,9,"ng-template",1),t.YNc(2,_e,17,14,"ng-template",1),t.YNc(3,Me,19,3,"ng-template",1),t.qZA())},directives:[it.q,nt.n,at.f,g,_t,ft,Dt,It,$t,Gt,zt,Wt,jt.F,J.v,Kt.z,qt.B,kt.w,c.V,u.JJ,u.oH,te.Ek,ee.aR,x.b,T.x,L.s,ie.bZ,d.g,_.e,M.Q,ne.c],styles:[".content[_ngcontent-%COMP%]{display:flex;align-items:center}.avatar[_ngcontent-%COMP%]{margin-right:.75rem}"],changeDetection:0}),i})(),Ee=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[f.ez,u.u5,u.UX,O.Cl,m.TuiScrollbarModule,h.TuiMultiSelectModule,h.TuiRadioListModule,m.TuiButtonModule,m.TuiLinkModule,h.TuiAvatarModule,m.TuiDataListModule,h.TuiDataListWrapperModule,p.TuiLetModule,m.TuiDropdownModule,m.TuiHintModule,m.TuiTextfieldControllerModule,k.f,b.fV,m.TuiLabelModule,K.Bz.forChild((0,b.Ve)(Se)),q.wq]]}),i})()}}]);