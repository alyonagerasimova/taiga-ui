(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{xag9:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTokensModule",(function(){return y}));var i,a=n("An66"),o=n("1VvW"),l=n("SVIu"),c=n("Qq0t"),r=n("kZht"),s=n("OZlg"),m=n("e0eB"),d=n("iyc4"),u=n("ZPGh");i=$localize`:␟a45b7001e37ea8248fd55ba5ae99d24dd723d6a1␟705840752082841277:Inject this token if you need access to Renderer inside a singleton service.`;let p=(()=>{class e{constructor(e){this.renderer=e,this.style=this.renderer.createElement("style")}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](u.c))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-1"]],decls:2,vars:0,template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18n"](1,i),r["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),e})();var T,S,_=n("l4xa"),E=n("yZWP");T=$localize`:␟c3d79f09b1c77f498f804685e4ac8abfc97d1263␟3318931371219148105: A multi token of Observables of modal dialogs displayed by ${"\ufffd#2\ufffd"}:START_LINK: TuiDialogHostComponent ${"\ufffd/#2\ufffd"}:CLOSE_LINK: .
`,S=$localize`:␟01fcb6df1b0ea45a686bb2d7f78e6f316704ee3f␟8403177569073028050: You can create your own service extending ${"\ufffd#5\ufffd"}:START_LINK: AbstractTuiDialogService ${"\ufffd/#5\ufffd"}:CLOSE_LINK: to easily add modal dialogs to your application.
`;let I=(()=>{class e{constructor(e){this.dialogs=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](_.K,8))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-2"]],decls:6,vars:0,consts:[["tuiLink","","routerLink","/dialog"],["tuiLink","","routerLink","/components/dialog"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18nStart"](1,T),r["\u0275\u0275element"](2,"a",0),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"p"),r["\u0275\u0275i18nStart"](4,S),r["\u0275\u0275element"](5,"a",1),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"]())},directives:[E.a,o.e],encapsulation:2,changeDetection:0}),e})();var L;L=$localize`:␟dabfe4dcd5358df2710c18d91692fca955cfe97e␟3280607424648339721: All Taiga UI components that can be focused provide this token so you can inject them into your directives that work with focus.
`;let f=(()=>{class e{constructor(e){this.tuiFocusableComponent=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](_.N,8))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-3"]],decls:2,vars:0,template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18n"](1,L),r["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),e})();var A;A=$localize`:␟f45f6ff9b077d96c96c0492ce03b8d2bb218bd4c␟7919254654716806629: A token with a factory. It takes ${"\ufffd#2\ufffd"}:START_LINK: TUI_IS_MOBILE ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: and ${"\ufffd#3\ufffd"}:START_LINK_1: TUI_IS_IOS ${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_LINK: , returnstrue if the device is mobile but not iOS (technically includes Windows Phone, Blackberry etc.)
`,A=r["\u0275\u0275i18nPostprocess"](A);let $=(()=>{class e{constructor(e){this.isAndroid=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](_.O))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-4"]],decls:4,vars:0,consts:[["tuiLink","","routerLink",".","fragment","is-mobile"],["tuiLink","","routerLink",".","fragment","is-ios"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18nStart"](1,A),r["\u0275\u0275element"](2,"a",0),r["\u0275\u0275element"](3,"a",1),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"]())},directives:[E.a,o.e],encapsulation:2,changeDetection:0}),e})();var h;h=$localize`:␟91528f04c4deee77ae0cf540a8023262f2ab6665␟7260144031031628013: A token with a factory. It takes ${"\ufffd#2\ufffd"}:START_LINK: TUI_IS_MOBILE ${"\ufffd/#2\ufffd"}:CLOSE_LINK: and if it is true detects iOS devices with a regex
`;let O=(()=>{class e{constructor(e){this.isIos=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](u.h))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-5"]],decls:3,vars:0,consts:[["tuiLink","","routerLink",".","fragment","is-mobile"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18nStart"](1,h),r["\u0275\u0275element"](2,"a",0),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"]())},directives:[E.a,o.e],encapsulation:2,changeDetection:0}),e})();var C;C=$localize`:␟abf3ac0a1bcf55a9764c7d357f716e8c46ec4c7a␟5737617888014424543: A token with a factory. It takes USER_AGENT token and parses it with a complex Regex to detect users with mobile devices
`;let b=(()=>{class e{constructor(e){this.isMobile=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](_.R))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-6"]],decls:2,vars:0,template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18n"](1,C),r["\u0275\u0275elementEnd"]())},encapsulation:2,changeDetection:0}),e})();var R;R=$localize`:␟0c2f92ed6e4c694e9e5777611745fef956fc57b2␟6639559641070555035:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_DIV: Using ${"\ufffd#3\ufffd"}:START_TAG_STRONG:TUI_NUMBER_FORMAT${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG: injection token you can customize numbers formatting. ${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_DIV:For example: 10 500,33${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#2\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_DIV:Can be customized as: 10/500.33${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_DIV:${"[\ufffd#6\ufffd|\ufffd#15\ufffd]"}:START_TAG_SECTION:${"[\ufffd#7\ufffd|\ufffd#16\ufffd]"}:START_HEADING_LEVEL3:Defaults:${"[\ufffd/#7\ufffd|\ufffd/#16\ufffd]"}:CLOSE_HEADING_LEVEL3:${"[\ufffd#8\ufffd|\ufffd#17\ufffd]"}:START_UNORDERED_LIST:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM: decimalSeparator = ${"[\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:,${"[\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM: thousandSeparator = ${"[\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:CHAR_NO_BREAK_SPACE${"[\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM: zeroPadding = ${"[\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd]"}:START_TAG_CODE:true${"[\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd/#8\ufffd|\ufffd/#17\ufffd]"}:CLOSE_UNORDERED_LIST:${"[\ufffd/#6\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_SECTION:${"[\ufffd#6\ufffd|\ufffd#15\ufffd]"}:START_TAG_SECTION:${"[\ufffd#7\ufffd|\ufffd#16\ufffd]"}:START_HEADING_LEVEL3:Components that are customizable:${"[\ufffd/#7\ufffd|\ufffd/#16\ufffd]"}:CLOSE_HEADING_LEVEL3:${"[\ufffd#8\ufffd|\ufffd#17\ufffd]"}:START_UNORDERED_LIST:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#19\ufffd"}:START_LINK: TuiMoneyComponent ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#21\ufffd"}:START_LINK_1: TuiFormatNumberPipe ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#23\ufffd"}:START_LINK_2: TuiInputNumberComponent ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#25\ufffd"}:START_LINK_3: TuiInputSliderComponent ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#13\ufffd|\ufffd#18\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd]"}:START_LIST_ITEM:${"\ufffd#27\ufffd"}:START_LINK_4: TuiInputRangeComponent ${"[\ufffd/#19\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd]"}:CLOSE_LINK:${"[\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#13\ufffd|\ufffd/#18\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#26\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd/#8\ufffd|\ufffd/#17\ufffd]"}:CLOSE_UNORDERED_LIST:${"[\ufffd/#6\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_SECTION:`,R=r["\u0275\u0275i18nPostprocess"](R);let k=(()=>{class e{constructor(e){this.TuiNumberFormatSettings=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](c.H))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-token-example-8"]],decls:28,vars:0,consts:[[1,"tui-list","tui-list_small"],[1,"tui-list__item"],["tuiLink","","routerLink","/components/money"],["tuiLink","","routerLink","/pipes/format-number"],["tuiLink","","routerLink","/components/input-number"],["tuiLink","","routerLink","/components/input-slider"],["tuiLink","","routerLink","/components/input-range"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275i18nStart"](1,R),r["\u0275\u0275elementStart"](2,"div"),r["\u0275\u0275element"](3,"strong"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](4,"div"),r["\u0275\u0275element"](5,"div"),r["\u0275\u0275elementStart"](6,"section"),r["\u0275\u0275element"](7,"h3"),r["\u0275\u0275elementStart"](8,"ul",0),r["\u0275\u0275elementStart"](9,"li",1),r["\u0275\u0275element"](10,"code"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](11,"li",1),r["\u0275\u0275element"](12,"code"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](13,"li",1),r["\u0275\u0275element"](14,"code"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"section"),r["\u0275\u0275element"](16,"h3"),r["\u0275\u0275elementStart"](17,"ul",0),r["\u0275\u0275elementStart"](18,"li",1),r["\u0275\u0275element"](19,"a",2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"li",1),r["\u0275\u0275element"](21,"a",3),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](22,"li",1),r["\u0275\u0275element"](23,"a",4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](24,"li",1),r["\u0275\u0275element"](25,"a",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](26,"li",1),r["\u0275\u0275element"](27,"a",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"]())},directives:[E.a,o.e],encapsulation:2,changeDetection:0}),e})();const v=["header",$localize`:␟831c70609f5320ba73bb112526ec9cb86c71367c␟4548722462586549001:Tokens`];function x(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-example",2),r["\u0275\u0275element"](1,"tui-token-example-1"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"tui-doc-example",3),r["\u0275\u0275element"](3,"tui-token-example-2"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"tui-doc-example",4),r["\u0275\u0275element"](5,"tui-token-example-3"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"tui-doc-example",5),r["\u0275\u0275element"](7,"tui-token-example-4"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"tui-doc-example",6),r["\u0275\u0275element"](9,"tui-token-example-5"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"tui-doc-example",7),r["\u0275\u0275element"](11,"tui-token-example-6"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"tui-doc-example",8),r["\u0275\u0275element"](13,"tui-token-example-8"),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("content",e.example1),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("content",e.example2),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("content",e.example3),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("content",e.example4),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("content",e.example5),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("content",e.example6),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("content",e.example8)}}let g=(()=>{class e{constructor(){this.example1={TypeScript:n.e(1921).then(n.bind(null,"dwVM"))},this.example2={TypeScript:n.e(1922).then(n.bind(null,"pApL"))},this.example3={TypeScript:n.e(1923).then(n.bind(null,"OVbf"))},this.example4={TypeScript:n.e(1924).then(n.bind(null,"4p0S"))},this.example5={TypeScript:n.e(1925).then(n.bind(null,"R86j"))},this.example6={TypeScript:n.e(1926).then(n.bind(null,"SvZh"))},this.example7={TypeScript:n.e(1927).then(n.bind(null,"35lE"))},this.example8={TypeScript:n.e(1928).then(n.bind(null,"hjOM"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tokens"]],features:[r["\u0275\u0275ProvidersFeature"]([{provide:l.b,useValue:null}])],decls:3,vars:0,consts:[["package","CDK","path","cdk/tokens",6,"header"],["pageTab",""],["id","default-renderer","heading","TUI_DEFAULT_RENDERER",3,"content"],["id","dialog","heading","TUI_DIALOGS",3,"content"],["id","focusable-item-accessor","heading","TUI_FOCUSABLE_ITEM_ACCESSOR",3,"content"],["id","is-android","heading","TUI_IS_ANDROID",3,"content"],["id","is-ios","heading","TUI_IS_IOS",3,"content"],["id","is-mobile","heading","TUI_IS_MOBILE",3,"content"],["id","number-format","heading","TUI_NUMBER_FORMAT",3,"content"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275i18nAttributes"](1,v),r["\u0275\u0275template"](2,x,14,7,"ng-template",1),r["\u0275\u0275elementEnd"]())},directives:[s.a,m.a,d.a,p,I,f,$,O,b,k],encapsulation:2,changeDetection:0}),e})(),y=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,c.Ab,l.m,o.f.forChild(Object(l.u)(g))]]}),e})()}}]);