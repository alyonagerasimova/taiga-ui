(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[89071],{89071:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiCalendarModule:()=>X});var a=n(12057),o=n(33982),i=n(73961),r=n(74950),u=n(58196),d=n(74788),c=n(43560),l=n(93525),m=n(66596),h=n(33772),s=n(49746);function p(e,t){if(1&e&&(d.TgZ(0,"div"),d._uU(1),d.qZA()),2&e){const e=d.oxw();d.xp6(1),d.hij("Chosen date: ",e.value,"")}}let y=(()=>{class e{constructor(){this.value=null}onDayClick(e){this.value=e}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-1"]],decls:2,vars:2,consts:[[3,"value","dayClick"],[4,"ngIf"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-calendar",0),d.NdJ("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.YNc(1,p,2,1,"div",1)),2&e&&(d.Q6J("value",t.value),d.xp6(1),d.Q6J("ngIf",t.value))},directives:[s.a,a.O5],encapsulation:2,changeDetection:0}),e})();function g(e,t){if(1&e&&(d.TgZ(0,"div"),d._uU(1),d.qZA()),2&e){const e=d.oxw();d.xp6(1),d.hij("Chosen dates: ",e.value,"")}}let M=(()=>{class e{constructor(){this.value=null,this.firstMonth=u.TuiMonth.currentLocal(),this.middleMonth=u.TuiMonth.currentLocal().append({month:1}),this.lastMonth=u.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null}onDayClick(e){null!==this.value&&this.value.isSingleDay||(this.value=new u.TuiDayRange(e,e)),this.value=u.TuiDayRange.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-2"]],decls:5,vars:17,consts:[[1,"wrapper"],[3,"value","showAdjacent","maxViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","month","minViewedMonth","maxViewedMonth","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","minViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[4,"ngIf"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0),d.TgZ(1,"tui-calendar",1),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("monthChange",(function(e){return t.onMonthChangeFirst(e)}))("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.TgZ(2,"tui-calendar",2),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("monthChange",(function(e){return t.onMonthChangeMiddle(e)}))("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.TgZ(3,"tui-calendar",3),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("monthChange",(function(e){return t.onMonthChangeLast(e)}))("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.qZA(),d.YNc(4,g,2,1,"div",4)),2&e&&(d.xp6(1),d.Q6J("value",t.value)("showAdjacent",!1)("maxViewedMonth",t.firstMonth)("month",t.firstMonth)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("value",t.value)("showAdjacent",!1)("month",t.middleMonth)("minViewedMonth",t.middleMonth)("maxViewedMonth",t.middleMonth)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("value",t.value)("showAdjacent",!1)("minViewedMonth",t.lastMonth)("month",t.lastMonth)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("ngIf",t.value))},directives:[s.a,a.O5],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),e})();function v(e,t){if(1&e&&(d.TgZ(0,"div"),d._uU(1),d.qZA()),2&e){const e=d.oxw();d.xp6(1),d.hij("Chosen dates: ",e.value,"")}}const f=["var(--tui-primary)","var(--tui-info-fill)"],C=["var(--tui-success-fill)"];let T=(()=>{class e{constructor(){this.value=null,this.firstMonth=u.TuiMonth.currentLocal(),this.middleMonth=u.TuiMonth.currentLocal().append({month:1}),this.lastMonth=u.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null,this.markerHandler=e=>e.day%2==0?f:C}onDayClick(e){null!==this.value&&this.value.isSingleDay||(this.value=new u.TuiDayRange(e,e)),this.value=u.TuiDayRange.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-3"]],decls:5,vars:20,consts:[[1,"wrapper"],[3,"value","showAdjacent","markerHandler","maxViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","markerHandler","month","minViewedMonth","maxViewedMonth","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","markerHandler","minViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[4,"ngIf"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0),d.TgZ(1,"tui-calendar",1),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("monthChange",(function(e){return t.onMonthChangeFirst(e)}))("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.TgZ(2,"tui-calendar",2),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("monthChange",(function(e){return t.onMonthChangeMiddle(e)}))("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.TgZ(3,"tui-calendar",3),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("monthChange",(function(e){return t.onMonthChangeLast(e)}))("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.qZA(),d.YNc(4,v,2,1,"div",4)),2&e&&(d.xp6(1),d.Q6J("value",t.value)("showAdjacent",!1)("markerHandler",t.markerHandler)("maxViewedMonth",t.firstMonth)("month",t.firstMonth)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("value",t.value)("showAdjacent",!1)("markerHandler",t.markerHandler)("month",t.middleMonth)("minViewedMonth",t.middleMonth)("maxViewedMonth",t.middleMonth)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("value",t.value)("showAdjacent",!1)("markerHandler",t.markerHandler)("minViewedMonth",t.lastMonth)("month",t.lastMonth)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("ngIf",t.value))},directives:[s.a,a.O5],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),e})(),x=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-4"]],features:[d._Bn([{provide:r.TUI_FIRST_DAY_OF_WEEK,useValue:u.TuiDayOfWeek.Sunday}])],decls:1,vars:0,template:function(e,t){1&e&&d._UZ(0,"tui-calendar")},directives:[s.a],encapsulation:2,changeDetection:0}),e})();const V=e=>10===e.day?"holiday":e.isWeekend?"weekend":"weekday";let w=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-5"]],features:[d._Bn([{provide:r.TUI_DAY_TYPE_HANDLER,useValue:V}])],decls:1,vars:0,template:function(e,t){1&e&&d._UZ(0,"tui-calendar")},directives:[s.a],styles:["tui-primitive-calendar [data-type=holiday]{background-color:var(--tui-support-09)}\n"],encapsulation:2,changeDetection:0}),e})();var P=n(10977),A=n(51192),I=n(60404),Z=n(83074);function k(e,t){1&e&&(d._uU(0," Use "),d.TgZ(1,"a",10),d._uU(2," TUI_FIRST_DAY_OF_WEEK "),d.qZA(),d._uU(3," token to change start day of the week (Monday by default). "))}function _(e,t){1&e&&(d._uU(0," Use "),d.TgZ(1,"code"),d._uU(2,"TUI_DAY_TYPE_HANDLER"),d.qZA(),d._uU(3," token to change cell's data-type attribute and customize its color. (The default color for Saturday and Sunday is var(--tui-negative)) "))}const D=function(){return["/components/input-date"]},H=function(){return["/components/input-date-range"]};function N(e,t){if(1&e&&(d.TgZ(0,"p"),d._uU(1," A simple calendar. If you want a textfield with date, see "),d.TgZ(2,"a",2),d._uU(3," InputDate "),d.qZA(),d._uU(4," and "),d.TgZ(5,"a",2),d._uU(6," InputDateRange "),d.qZA(),d.qZA(),d.TgZ(7,"tui-doc-example",3),d._UZ(8,"tui-calendar-example-1"),d.qZA(),d.TgZ(9,"tui-doc-example",4),d._UZ(10,"tui-calendar-example-2"),d.qZA(),d.TgZ(11,"tui-doc-example",5),d._UZ(12,"tui-calendar-example-3"),d.qZA(),d.TgZ(13,"tui-doc-example",6),d.YNc(14,k,4,0,"ng-template",null,7,d.W1O),d._UZ(16,"tui-calendar-example-4"),d.qZA(),d.TgZ(17,"tui-doc-example",8),d.YNc(18,_,4,0,"ng-template",null,9,d.W1O),d._UZ(20,"tui-calendar-example-5"),d.qZA()),2&e){const e=d.MAs(15),t=d.MAs(19),n=d.oxw();d.xp6(2),d.Q6J("routerLink",d.DdM(9,D)),d.xp6(3),d.Q6J("routerLink",d.DdM(10,H)),d.xp6(2),d.Q6J("content",n.example1),d.xp6(2),d.Q6J("content",n.example2),d.xp6(2),d.Q6J("content",n.example3),d.xp6(2),d.Q6J("content",n.example4)("description",e),d.xp6(4),d.Q6J("content",n.example5)("description",t)}}function J(e,t){1&e&&(d.TgZ(0,"div"),d._uU(1,"A handler that gets a date and returns true if it is disabled."),d.qZA(),d.TgZ(2,"strong"),d._uU(3,"Must be a pure function"),d.qZA())}function U(e,t){1&e&&d._uU(0," Show adjacent months days ")}function L(e,t){1&e&&d._uU(0," Hovered date ")}function b(e,t){1&e&&d._uU(0," A handler that gets date and returns null or a tuple with circled marker colors ")}function q(e,t){1&e&&d._uU(0," Maximal date to choose ")}function Q(e,t){1&e&&d._uU(0," Maximal month to access ")}function Y(e,t){1&e&&d._uU(0," Minimum date to choose ")}function S(e,t){1&e&&d._uU(0," Minimum month to access ")}function j(e,t){1&e&&d._uU(0," Current month ")}function E(e,t){1&e&&d._uU(0," Selected day or range ")}function R(e,t){1&e&&d._uU(0," Date click ")}function F(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-doc-demo"),d.TgZ(1,"tui-calendar",11),d.NdJ("monthChange",(function(t){return d.CHM(e),d.oxw().month=t}))("hoveredItemChange",(function(t){return d.CHM(e),d.oxw().hoveredItem=t}))("dayClick",(function(t){return d.CHM(e),d.oxw().onDayClick(t)})),d.qZA(),d.qZA(),d.TgZ(2,"tui-doc-documentation"),d.YNc(3,J,4,0,"ng-template",12),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().disabledItemHandler=t})),d.YNc(4,U,1,0,"ng-template",13),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().showAdjacent=t})),d.YNc(5,L,1,0,"ng-template",14),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().hoveredItem=t})),d.YNc(6,b,1,0,"ng-template",15),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().markerHandler=t})),d.YNc(7,q,1,0,"ng-template",16),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().max=t})),d.YNc(8,Q,1,0,"ng-template",17),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().max=t})),d.YNc(9,Y,1,0,"ng-template",18),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().min=t})),d.YNc(10,S,1,0,"ng-template",19),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().min=t})),d.YNc(11,j,1,0,"ng-template",20),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().month=t})),d.YNc(12,E,1,0,"ng-template",21),d.NdJ("documentationPropertyValueChange",(function(t){return d.CHM(e),d.oxw().value=t})),d.YNc(13,R,1,0,"ng-template",22),d.qZA()}if(2&e){const e=d.oxw();d.xp6(1),d.Q6J("value",e.value)("disabledItemHandler",e.disabledItemHandler)("min",e.min)("max",e.max)("markerHandler",e.markerHandler)("minViewedMonth",e.minViewedMonth)("maxViewedMonth",e.maxViewedMonth)("showAdjacent",e.showAdjacent)("month",e.month)("hoveredItem",e.hoveredItem),d.xp6(2),d.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),d.xp6(1),d.Q6J("documentationPropertyValue",e.showAdjacent),d.xp6(1),d.Q6J("documentationPropertyValue",e.hoveredItem),d.xp6(1),d.Q6J("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),d.xp6(1),d.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),d.xp6(1),d.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),d.xp6(1),d.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),d.xp6(1),d.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),d.xp6(1),d.Q6J("documentationPropertyValue",e.month),d.xp6(1),d.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function O(e,t){if(1&e&&(d.TgZ(0,"ol",23),d.TgZ(1,"li"),d.TgZ(2,"p"),d._uU(3," Import "),d.TgZ(4,"code"),d._uU(5,"TuiCalendarModule"),d.qZA(),d._uU(6," into a module where you want to use our component "),d.qZA(),d._UZ(7,"tui-doc-code",24),d.qZA(),d.TgZ(8,"li"),d.TgZ(9,"p"),d._uU(10,"Add to the template:"),d.qZA(),d._UZ(11,"tui-doc-code",25),d.qZA(),d.qZA()),2&e){const e=d.oxw();d.xp6(7),d.Q6J("code",e.exampleModule),d.xp6(4),d.Q6J("code",e.exampleHtml)}}const z=["var(--tui-primary)","var(--tui-info-fill)"],B=["var(--tui-success-fill)"];let W=(()=>{class e{constructor(e){this.alerts=e,this.exampleModule=n.e(21580).then(n.t.bind(n,21580,17)),this.exampleHtml=n.e(84034).then(n.t.bind(n,84034,17)),this.example1={TypeScript:n.e(73773).then(n.t.bind(n,73773,17)),HTML:n.e(22029).then(n.t.bind(n,22029,17))},this.example2={TypeScript:n.e(80785).then(n.t.bind(n,80785,17)),HTML:n.e(97571).then(n.t.bind(n,97571,17))},this.example3={TypeScript:n.e(38596).then(n.t.bind(n,38596,17)),HTML:n.e(38918).then(n.t.bind(n,38918,17))},this.example4={TypeScript:n.e(92432).then(n.t.bind(n,92432,17)),HTML:n.e(48887).then(n.t.bind(n,48887,17))},this.example5={TypeScript:n.e(5657).then(n.t.bind(n,5657,17)),HTML:n.e(90903).then(n.t.bind(n,90903,17)),LESS:n.e(45575).then(n.t.bind(n,45575,17))},this.showAdjacent=!0,this.minVariants=[u.TUI_FIRST_DAY,new u.TuiDay(2017,2,5),new u.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[u.TUI_LAST_DAY,new u.TuiDay(2020,3,30),new u.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.minViewedMonthVariants=[new u.TuiMonth(0,0),new u.TuiMonth(2017,2),new u.TuiMonth(1900,0)],this.minViewedMonth=this.minViewedMonthVariants[0],this.maxViewedMonthVariants=[u.TUI_LAST_DAY,new u.TuiMonth(2020,3),new u.TuiMonth(2300,0)],this.maxViewedMonth=this.maxViewedMonthVariants[0],this.disabledItemHandlerVariants=[u.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.markerHandlerVariants=[r.TUI_DEFAULT_MARKER_HANDLER,e=>e.day%2==0?z:B],this.markerHandler=this.markerHandlerVariants[0],this.valueVariants=[u.TuiDay.currentLocal(),new u.TuiDayRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({day:3})),new u.TuiDay(2020,3,21)],this.value=null,this.month=u.TuiMonth.currentLocal(),this.hoveredItem=null}onDayClick(e){this.alerts.open(String(e)).subscribe()}}return e.ɵfac=function(t){return new(t||e)(d.Y36(r.TuiAlertService))},e.ɵcmp=d.Xpm({type:e,selectors:[["example-tui-calendar"]],decls:4,vars:0,consts:[["header","Calendar","package","CORE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","base","heading","Basic",3,"content"],["id","range","heading","range",3,"content"],["id","markers","heading","With markers",3,"content"],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["id","color","heading","Color customization",3,"content","description"],["colorDescription",""],["tuiLink","","routerLink","/utils/tokens","fragment","first-day-of-week"],[3,"value","disabledItemHandler","min","max","markerHandler","minViewedMonth","maxViewedMonth","showAdjacent","month","hoveredItem","monthChange","hoveredItemChange","dayClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","showAdjacent","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hoveredItem","documentationPropertyMode","input-output","documentationPropertyType","TuiDay | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","month","documentationPropertyMode","input-output","documentationPropertyType","TuiMonth",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiDay | TuiDayRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","dayClick","documentationPropertyMode","output","documentationPropertyType","TuiDay"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,N,21,11,"ng-template",1),d.YNc(2,F,14,27,"ng-template",1),d.YNc(3,O,12,2,"ng-template",1),d.qZA())},directives:[c.q,l.n,m.V,o.yS,h.f,y,M,T,x,w,P.F,s.a,A.z,I.B,Z.c],encapsulation:2,changeDetection:0}),e})(),X=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[[a.ez,o.Bz,r.TuiLinkModule,r.TuiCalendarModule,i.fV,o.Bz.forChild((0,i.Ve)(W))]]}),e})()}}]);