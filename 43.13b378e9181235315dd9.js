(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{cbEa:function(e,n,t){"use strict";t.r(n),t.d(n,"ExampleTuiCalendarModule",(function(){return he}));var a,o=t("An66"),r=t("1VvW"),i=t("SVIu"),d=t("Qq0t"),l=t("l4xa"),m=t("kZht"),c=t("OZlg"),u=t("e0eB"),h=t("yZWP"),s=t("aPft"),p=t("u8jZ"),y=t("iyc4"),v=t("3a2d");function f(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275i18n"](1,a),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275i18nExp"](e.value),m["\u0275\u0275i18nApply"](1)}}a=$localize`:␟ce1319c441a00e9cf42345ba0b5c28eca61def10␟2075482486101102135:Chosen date: ${"\ufffd0\ufffd"}:INTERPOLATION:`;let C=(()=>{class e{constructor(){this.value=null}onDayClick(e){this.value=e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-example-1"]],decls:2,vars:2,consts:[[3,"value","dayClick"],[4,"ngIf"]],template:function(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"tui-calendar",0),m["\u0275\u0275listener"]("dayClick",(function(e){return n.onDayClick(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](1,f,2,1,"div",1)),2&e&&(m["\u0275\u0275property"]("value",n.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",n.value))},directives:[v.a,o.t],encapsulation:2,changeDetection:0}),e})();var M;function g(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275i18n"](1,M),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275i18nExp"](e.value),m["\u0275\u0275i18nApply"](1)}}M=$localize`:␟67bcad3903d798c20eace12d4b2b47c0473e36bf␟8967885420897050133:Chosen dates: ${"\ufffd0\ufffd"}:INTERPOLATION:`;let T=(()=>{class e{constructor(){this.value=null,this.firstMonth=l.Bb.currentLocal(),this.middleMonth=l.Bb.currentLocal().append({month:1}),this.lastMonth=l.Bb.currentLocal().append({month:2}),this.hoveredItem=null}onDayClick(e){null!==this.value&&this.value.isSingleDay||(this.value=new l.cb(e,e)),this.value=l.cb.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-example-2"]],decls:5,vars:17,consts:[[1,"wrapper"],[3,"value","showAdjacent","maxViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","month","minViewedMonth","maxViewedMonth","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","minViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[4,"ngIf"]],template:function(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"tui-calendar",1),m["\u0275\u0275listener"]("hoveredItemChange",(function(e){return n.hoveredItem=e}))("monthChange",(function(e){return n.onMonthChangeFirst(e)}))("dayClick",(function(e){return n.onDayClick(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-calendar",2),m["\u0275\u0275listener"]("hoveredItemChange",(function(e){return n.hoveredItem=e}))("monthChange",(function(e){return n.onMonthChangeMiddle(e)}))("dayClick",(function(e){return n.onDayClick(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-calendar",3),m["\u0275\u0275listener"]("hoveredItemChange",(function(e){return n.hoveredItem=e}))("monthChange",(function(e){return n.onMonthChangeLast(e)}))("dayClick",(function(e){return n.onDayClick(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,g,2,1,"div",4)),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",n.value)("showAdjacent",!1)("maxViewedMonth",n.firstMonth)("month",n.firstMonth)("hoveredItem",n.hoveredItem),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",n.value)("showAdjacent",!1)("month",n.middleMonth)("minViewedMonth",n.middleMonth)("maxViewedMonth",n.middleMonth)("hoveredItem",n.hoveredItem),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",n.value)("showAdjacent",!1)("minViewedMonth",n.lastMonth)("month",n.lastMonth)("hoveredItem",n.hoveredItem),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",n.value))},directives:[v.a,o.t],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),e})();var V;function w(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275i18n"](1,V),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275i18nExp"](e.value),m["\u0275\u0275i18nApply"](1)}}V=$localize`:␟67bcad3903d798c20eace12d4b2b47c0473e36bf␟8967885420897050133:Chosen dates: ${"\ufffd0\ufffd"}:INTERPOLATION:`;const x=["primary","secondary"],b=["success"];let I=(()=>{class e{constructor(){this.value=null,this.firstMonth=l.Bb.currentLocal(),this.middleMonth=l.Bb.currentLocal().append({month:1}),this.lastMonth=l.Bb.currentLocal().append({month:2}),this.hoveredItem=null,this.markerHandler=e=>e.day%2==0?x:b}onDayClick(e){null!==this.value&&this.value.isSingleDay||(this.value=new l.cb(e,e)),this.value=l.cb.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-calendar-example-3"]],decls:5,vars:20,consts:[[1,"wrapper"],[3,"value","showAdjacent","markerHandler","maxViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","markerHandler","month","minViewedMonth","maxViewedMonth","hoveredItem","hoveredItemChange","monthChange","dayClick"],[3,"value","showAdjacent","markerHandler","minViewedMonth","month","hoveredItem","hoveredItemChange","monthChange","dayClick"],[4,"ngIf"]],template:function(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"tui-calendar",1),m["\u0275\u0275listener"]("hoveredItemChange",(function(e){return n.hoveredItem=e}))("monthChange",(function(e){return n.onMonthChangeFirst(e)}))("dayClick",(function(e){return n.onDayClick(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-calendar",2),m["\u0275\u0275listener"]("hoveredItemChange",(function(e){return n.hoveredItem=e}))("monthChange",(function(e){return n.onMonthChangeMiddle(e)}))("dayClick",(function(e){return n.onDayClick(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-calendar",3),m["\u0275\u0275listener"]("hoveredItemChange",(function(e){return n.hoveredItem=e}))("monthChange",(function(e){return n.onMonthChangeLast(e)}))("dayClick",(function(e){return n.onDayClick(e)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,w,2,1,"div",4)),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",n.value)("showAdjacent",!1)("markerHandler",n.markerHandler)("maxViewedMonth",n.firstMonth)("month",n.firstMonth)("hoveredItem",n.hoveredItem),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",n.value)("showAdjacent",!1)("markerHandler",n.markerHandler)("month",n.middleMonth)("minViewedMonth",n.middleMonth)("maxViewedMonth",n.middleMonth)("hoveredItem",n.hoveredItem),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",n.value)("showAdjacent",!1)("markerHandler",n.markerHandler)("minViewedMonth",n.lastMonth)("month",n.lastMonth)("hoveredItem",n.hoveredItem),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",n.value))},directives:[v.a,o.t],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),e})();var k,P=t("EPR0"),D=t("yHor"),S=t("zGJC");k=$localize`:␟9517f4dd9efbef484b92ce66bfb8a09054115185␟5962002991656124618: Use ${"\ufffd#9\ufffd"}:START_TAG_CODE:${"\ufffd#10\ufffd"}:START_TAG_STRONG:TUI_FIRST_DAY_OF_WEEK${"\ufffd/#10\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: token if you need to change start day of the week (Monday by default): ${"\ufffd#11\ufffd"}:START_PARAGRAPH:${"\ufffd#12\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#12\ufffd"}:CLOSE_TAG_TUI_DOC_CODE:${"\ufffd/#11\ufffd"}:CLOSE_PARAGRAPH:`;const A=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],E=["heading",$localize`:␟0ed6cbeb3b69bb940c9e3365663a6bff540311e7␟8823844911216143942:range`],H=["heading",$localize`:␟f0ad0067675751d24dcae9afde2a56fe3ecf3c45␟5871122953070556647:With markers`],$=function(){return["/components/input-date"]},_=function(){return["/components/input-date-range"]};function O(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1," A simple calendar. If you want a textfield with date, see "),m["\u0275\u0275elementStart"](2,"a",2),m["\u0275\u0275text"](3,"InputDate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](4," and "),m["\u0275\u0275elementStart"](5,"a",2),m["\u0275\u0275text"](6," InputDateRange "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"tui-notification",3),m["\u0275\u0275i18nStart"](8,k),m["\u0275\u0275elementStart"](9,"code"),m["\u0275\u0275element"](10,"strong"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"p"),m["\u0275\u0275element"](12,"tui-doc-code",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](14,A),m["\u0275\u0275element"](15,"tui-calendar-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"tui-doc-example",6),m["\u0275\u0275i18nAttributes"](17,E),m["\u0275\u0275element"](18,"tui-calendar-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"tui-doc-example",7),m["\u0275\u0275i18nAttributes"](20,H),m["\u0275\u0275element"](21,"tui-calendar-example-3"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("routerLink",m["\u0275\u0275pureFunction0"](6,$)),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("routerLink",m["\u0275\u0275pureFunction0"](7,_)),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("code",e.firstDayOfWeekToken),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example3)}}var L,R,j,N,z,B,G,F,W,U,Z,J,K;function Y(e,n){1&e&&(m["\u0275\u0275i18nStart"](0,L),m["\u0275\u0275element"](1,"div"),m["\u0275\u0275element"](2,"strong"),m["\u0275\u0275i18nEnd"]())}function q(e,n){1&e&&m["\u0275\u0275i18n"](0,R)}function Q(e,n){1&e&&m["\u0275\u0275i18n"](0,j)}function X(e,n){1&e&&m["\u0275\u0275i18n"](0,N)}function ee(e,n){1&e&&m["\u0275\u0275i18n"](0,z)}function ne(e,n){1&e&&m["\u0275\u0275i18n"](0,B)}function te(e,n){1&e&&m["\u0275\u0275i18n"](0,G)}function ae(e,n){1&e&&m["\u0275\u0275i18n"](0,F)}function oe(e,n){1&e&&m["\u0275\u0275i18n"](0,W)}function re(e,n){1&e&&m["\u0275\u0275i18n"](0,U)}function ie(e,n){1&e&&m["\u0275\u0275i18n"](0,Z)}function de(e,n){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-calendar",8),m["\u0275\u0275listener"]("monthChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().month=n}))("hoveredItemChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().hoveredItem=n}))("dayClick",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().onDayClick(n)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,Y,3,0,"ng-template",9),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().disabledItemHandler=n})),m["\u0275\u0275template"](4,q,1,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().showAdjacent=n})),m["\u0275\u0275template"](5,Q,1,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().hoveredItem=n})),m["\u0275\u0275template"](6,X,1,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().markerHandler=n})),m["\u0275\u0275template"](7,ee,1,0,"ng-template",13),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().max=n})),m["\u0275\u0275template"](8,ne,1,0,"ng-template",14),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().max=n})),m["\u0275\u0275template"](9,te,1,0,"ng-template",15),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().min=n})),m["\u0275\u0275template"](10,ae,1,0,"ng-template",16),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().min=n})),m["\u0275\u0275template"](11,oe,1,0,"ng-template",17),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().month=n})),m["\u0275\u0275template"](12,re,1,0,"ng-template",18),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(n){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().value=n})),m["\u0275\u0275template"](13,ie,1,0,"ng-template",19),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",e.value)("disabledItemHandler",e.disabledItemHandler)("min",e.min)("max",e.max)("markerHandler",e.markerHandler)("minViewedMonth",e.minViewedMonth)("maxViewedMonth",e.maxViewedMonth)("showAdjacent",e.showAdjacent)("month",e.month)("hoveredItem",e.hoveredItem),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.showAdjacent),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.hoveredItem),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.month),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function le(e,n){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",20),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,J),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,K),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",22),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleHtml)}}L=$localize`:␟c98678197ea98e1f5d179414969ee7d8dbdcefbb␟1004572627847397831:${"\ufffd#1\ufffd"}:START_TAG_DIV: A handler that gets a date and returns true if it is disabled. ${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,R=$localize`:␟93468ee263f0453e046cd2a7d140d971a77a21d6␟427026901846333904: Show adjacent months days `,j=$localize`:␟eda1485e51ac095aaacc17acf52331ccf5582c55␟285023532423922220: Hovered date `,N=$localize`:␟f8f45d3aaac30e82d76043430e84bc125f1317f4␟7803518593552218835: A handler that gets date and returns null or a tuple with circled marker colors `,z=$localize`:␟0ec2997ebb79ee39672ca03c45b62d3720263ca6␟945025041805688144: Maximal date to choose `,B=$localize`:␟76712405dc083e287b7d84203f246883bf2195c8␟4446534518832798635: Maximal month to access `,G=$localize`:␟5e6b74ad89b862a2b83b5d77e43f763b57137112␟2791094226136211105: Minimum date to choose `,F=$localize`:␟7b0768860406832abc45b69314b993a46a099dc6␟4181665065525097983: Minimum month to access `,W=$localize`:␟cac850ce7e80ef75f9715f1603460f9575f1df49␟3915704723653985372: Current month `,U=$localize`:␟06c2894e3ec228f0e65407118a02fbd4a6947389␟2084704973569232503: Selected day or range `,Z=$localize`:␟30dc64dde7c5b72b981802ac51cffe74453e08c2␟1956037044112739727: Date click `,J=$localize`:␟a7ee2d166f9049940b6c8619f3c1e4a0e35a5c25␟9069493769412225703: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCalendarModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,K=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;const me=["primary","secondary"],ce=["success"];let ue=(()=>{class e{constructor(e){this.notifications=e,this.exampleModule="import {TuiCalendarModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiCalendarModule\n    ],\n...\n",this.exampleHtml="<tui-calendar></tui-calendar>\n",this.firstDayOfWeekToken="import {TuiDayOfWeek} from '@taiga-ui/cdk';\nimport {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';\n\n...\n\nproviders: [\n    {\n        provide: TUI_FIRST_DAY_OF_WEEK,\n        useValue: TuiDayOfWeek.Sunday,\n    }\n]\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-calendar-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCalendarExample1 {\n    value: TuiDay | null = null;\n\n    onDayClick(day: TuiDay) {\n        this.value = day;\n    }\n}\n",HTML:'<tui-calendar [value]="value" (dayClick)="onDayClick($event)"></tui-calendar>\n<div *ngIf="value" i18n>Chosen date: {{value}}</div>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-calendar-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCalendarExample2 {\n    value: TuiDayRange | null = null;\n\n    firstMonth = TuiMonth.currentLocal();\n\n    middleMonth = TuiMonth.currentLocal().append({month: 1});\n\n    lastMonth = TuiMonth.currentLocal().append({month: 2});\n\n    hoveredItem: TuiDay | null = null;\n\n    onDayClick(day: TuiDay) {\n        if (this.value === null || !this.value.isSingleDay) {\n            this.value = new TuiDayRange(day, day);\n        }\n\n        this.value = TuiDayRange.sort(this.value.from, day);\n    }\n\n    onMonthChangeFirst(month: TuiMonth) {\n        this.firstMonth = month;\n        this.middleMonth = month.append({month: 1});\n        this.lastMonth = month.append({month: 2});\n    }\n\n    onMonthChangeMiddle(month: TuiMonth) {\n        this.firstMonth = month.append({month: -1});\n        this.middleMonth = month;\n        this.lastMonth = month.append({month: 1});\n    }\n\n    onMonthChangeLast(month: TuiMonth) {\n        this.firstMonth = month.append({month: -2});\n        this.middleMonth = month.append({month: -1});\n        this.lastMonth = month;\n    }\n}\n",HTML:'<div class="wrapper">\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [maxViewedMonth]="firstMonth"\n        [month]="firstMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeFirst($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [month]="middleMonth"\n        [minViewedMonth]="middleMonth"\n        [maxViewedMonth]="middleMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeMiddle($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [minViewedMonth]="lastMonth"\n        [month]="lastMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeLast($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n</div>\n<div *ngIf="value" i18n>Chosen dates: {{value}}</div>\n'},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';\nimport {TuiBaseColor, TuiColor, TuiMarkerHandler} from '@taiga-ui/core';\n\nconst TWO_DOTS: [TuiColor, TuiColor] = [TuiBaseColor.Primary, TuiBaseColor.Secondary];\nconst ONE_DOT: [TuiColor] = [TuiBaseColor.Success];\n\n@Component({\n    selector: 'tui-calendar-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCalendarExample3 {\n    value: TuiDayRange | null = null;\n\n    firstMonth = TuiMonth.currentLocal();\n\n    middleMonth = TuiMonth.currentLocal().append({month: 1});\n\n    lastMonth = TuiMonth.currentLocal().append({month: 2});\n\n    hoveredItem: TuiDay | null = null;\n\n    readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>\n        // Attention: do not create new arrays in handler, use constants intead\n        day.day % 2 === 0 ? TWO_DOTS : ONE_DOT;\n\n    onDayClick(day: TuiDay) {\n        if (this.value === null || !this.value.isSingleDay) {\n            this.value = new TuiDayRange(day, day);\n        }\n\n        this.value = TuiDayRange.sort(this.value.from, day);\n    }\n\n    onMonthChangeFirst(month: TuiMonth) {\n        this.firstMonth = month;\n        this.middleMonth = month.append({month: 1});\n        this.lastMonth = month.append({month: 2});\n    }\n\n    onMonthChangeMiddle(month: TuiMonth) {\n        this.firstMonth = month.append({month: -1});\n        this.middleMonth = month;\n        this.lastMonth = month.append({month: 1});\n    }\n\n    onMonthChangeLast(month: TuiMonth) {\n        this.firstMonth = month.append({month: -2});\n        this.middleMonth = month.append({month: -1});\n        this.lastMonth = month;\n    }\n}\n",HTML:'<div class="wrapper">\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [markerHandler]="markerHandler"\n        [maxViewedMonth]="firstMonth"\n        [month]="firstMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeFirst($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [markerHandler]="markerHandler"\n        [month]="middleMonth"\n        [minViewedMonth]="middleMonth"\n        [maxViewedMonth]="middleMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeMiddle($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n    <tui-calendar\n        [value]="value"\n        [showAdjacent]="false"\n        [markerHandler]="markerHandler"\n        [minViewedMonth]="lastMonth"\n        [month]="lastMonth"\n        [(hoveredItem)]="hoveredItem"\n        (monthChange)="onMonthChangeLast($event)"\n        (dayClick)="onDayClick($event)"\n    ></tui-calendar>\n</div>\n<div *ngIf="value" i18n>Chosen dates: {{value}}</div>\n'},this.showAdjacent=!0,this.minVariants=[l.H,new l.bb(2017,2,5),new l.bb(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[l.N,new l.bb(2020,3,30),new l.bb(2300,0,1)],this.max=this.maxVariants[0],this.minViewedMonthVariants=[new l.Bb(0,0),new l.Bb(2017,2),new l.Bb(1900,0)],this.minViewedMonth=this.minViewedMonthVariants[0],this.maxViewedMonthVariants=[l.N,new l.Bb(2020,3),new l.Bb(2300,0)],this.maxViewedMonth=this.maxViewedMonthVariants[0],this.disabledItemHandlerVariants=[l.a,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.markerHandlerVariants=[d.q,e=>e.day%2==0?me:ce],this.markerHandler=this.markerHandlerVariants[0],this.valueVariants=[l.bb.currentLocal(),new l.cb(l.bb.currentLocal(),l.bb.currentLocal().append({day:3})),new l.bb(2020,3,21)],this.value=null,this.month=l.Bb.currentLocal(),this.hoveredItem=null}onDayClick(e){this.notifications.show(String(e)).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(m["\u0275\u0275directiveInject"](d.Eb))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-calendar"]],decls:4,vars:0,consts:[["header","Calendar","package","CORE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],[1,"tui-space_vertical-4"],[3,"code"],["id","base",3,"content",6,"heading"],["id","range",3,"content",6,"heading"],["id","markers",3,"content",6,"heading"],[3,"value","disabledItemHandler","min","max","markerHandler","minViewedMonth","maxViewedMonth","showAdjacent","month","hoveredItem","monthChange","hoveredItemChange","dayClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","showAdjacent","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hoveredItem","documentationPropertyMode","input-output","documentationPropertyType","TuiDay | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","markerHandler","documentationPropertyMode","input","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minViewedMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","month","documentationPropertyMode","input-output","documentationPropertyType","TuiMonth",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiDay | TuiDayRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","dayClick","documentationPropertyMode","output","documentationPropertyType","TuiDay"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,n){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,O,22,8,"ng-template",1),m["\u0275\u0275template"](2,de,14,27,"ng-template",1),m["\u0275\u0275template"](3,le,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[c.a,u.a,h.a,r.e,s.a,p.a,y.a,C,T,I,P.a,v.a,D.a,S.a],encapsulation:2,changeDetection:0}),e})(),he=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[o.c,r.f,d.ub,d.X,i.i,d.Cb,r.f.forChild(Object(i.p)(ue))]]}),e})()}}]);