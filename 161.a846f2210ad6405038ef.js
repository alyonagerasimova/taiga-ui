(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{l7Ok:function(e,t,n){"use strict";n.r(t),n.d(t,"DisableAnimationModule",(function(){return p}));var o=n("An66"),i=n("1VvW"),a=n("SVIu"),l=n("Qq0t"),r=n("kZht"),s=n("OZlg"),c=n("yZWP"),d=n("u8jZ");const m=["header",$localize`:␟df2b9a3517093d8eefd3d80f4dcf9bab451cc925␟3431486840313958011:Disable animation`];let u=(()=>{class e{constructor(){this.disableAnimationExample="import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core';\n...\n@NgModule({\n    ...\n    providers: [\n        ...\n        {\n            provide: TUI_ANIMATIONS_DURATION,\n            useFactory: () => (inject(TUI_IS_CYPRESS) ? 0 : 300),\n        }\n    ],\n})\nexport class AppModule {}\n"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["disable-animation"]],decls:27,vars:1,consts:[[6,"header"],["tuiLink","","target","_blank","href","https://www.cypress.io/"],[1,"tui-list"],[1,"tui-list__item"],["filename","app.module.ts",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275i18nAttributes"](1,m),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275text"](3," During integration testing you can face with problem of flaky tests caused by animation. It is especially crucial if you are writing screenshot tests. "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"p"),r["\u0275\u0275text"](5," For example, you want to make screenshot of dialog content: you click button which opens dialog and make screenshot. Sometimes screenshots can be made too early (before dialog fully opens) and test fails. "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"p"),r["\u0275\u0275text"](7," To avoid this "),r["\u0275\u0275elementStart"](8,"strong"),r["\u0275\u0275text"](9," we recommend to toggle all animation off while integration test works. "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"p"),r["\u0275\u0275text"](11," For example, we use "),r["\u0275\u0275elementStart"](12,"a",1),r["\u0275\u0275text"](13,"Cypress"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](14," for screenshot testing of our ui-kit components. "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](15,"ol",2),r["\u0275\u0275elementStart"](16,"li",3),r["\u0275\u0275text"](17," To detect if app is running under Cypress we use token "),r["\u0275\u0275elementStart"](18,"code"),r["\u0275\u0275text"](19,"TUI_IS_CYPRESS"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](20," . "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](21,"li",3),r["\u0275\u0275text"](22," To disable animation in ALL Taiga UI components we use token "),r["\u0275\u0275elementStart"](23,"code"),r["\u0275\u0275text"](24,"TUI_ANIMATIONS_DURATION"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](25," . "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](26,"tui-doc-code",4),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](26),r["\u0275\u0275property"]("code",t.disableAnimationExample))},directives:[s.a,c.a,d.a],encapsulation:2}),e})(),p=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.i,l.ub,i.f.forChild(Object(a.p)(u))]]}),e})()}}]);