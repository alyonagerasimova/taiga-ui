(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"RG/b":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiStepperModule",(function(){return F}));var o=n("An66"),a=n("1VvW"),i=n("SVIu"),r=n("Qq0t"),p=n("dvRg"),c=n("kZht"),u=n("OZlg"),l=n("e0eB"),m=n("iyc4"),d=n("NfYv"),s=n("VCp3");let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-stepper-example-1"]],decls:11,vars:1,consts:[[3,"activeItemIndex"],["tuiStep","","state","pass"],["tuiStep",""],["tuiStep","","state","error"],["tuiStep","","disabled",""],["tuiStep","","icon","tuiIconTimeLarge"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-stepper",0),c["\u0275\u0275elementStart"](1,"button",1),c["\u0275\u0275text"](2,"Finished step"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"button",2),c["\u0275\u0275text"](4,"Simple step"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"button",3),c["\u0275\u0275text"](6,"Error step"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"button",4),c["\u0275\u0275text"](8,"Disabled step"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"button",5),c["\u0275\u0275text"](10,"Step with an icon"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("activeItemIndex",1)},directives:[d.a,s.a],encapsulation:2,changeDetection:0}),e})();function f(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"button",2),c["\u0275\u0275text"](1),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate"](e)}}let x=(()=>{class e{constructor(){this.steps=["Start Up","Cash In","Sell Out","Bro Down"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-stepper-example-2"]],decls:2,vars:2,consts:[["orientation","vertical",3,"activeItemIndex"],["tuiStep","",4,"ngFor","ngForOf"],["tuiStep",""]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-stepper",0),c["\u0275\u0275template"](1,f,2,1,"button",1),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("activeItemIndex",1),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",t.steps))},directives:[d.a,o.s,s.a],encapsulation:2,changeDetection:0}),e})();var b=n("EPR0"),y=n("yHor"),h=n("zGJC"),g=n("u8jZ");const v=["header",$localize`:␟d3380eafd2964129c0f2494ac124f7ee3ec18773␟4182533721007312825:Stepper`];var I;I=$localize`:␟490cac10bf1b9dbae7bb9b4d439cb5de3a31b887␟7773050250158572107:Stepper makes visual step navigation`;const V=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function C(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275i18n"](1,I),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-example",2),c["\u0275\u0275i18nAttributes"](3,V),c["\u0275\u0275element"](4,"tui-stepper-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"tui-doc-example",3),c["\u0275\u0275element"](6,"tui-stepper-example-2"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("content",e.example2)}}var E,P,T,w,M,D;function k(e,t){1&e&&c["\u0275\u0275i18n"](0,E)}function L(e,t){1&e&&c["\u0275\u0275i18n"](0,P)}function $(e,t){1&e&&c["\u0275\u0275i18n"](0,T)}function z(e,t){1&e&&c["\u0275\u0275i18n"](0,w)}function A(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"tui-stepper",4),c["\u0275\u0275listener"]("activeItemIndexChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().activeItemIndex=t})),c["\u0275\u0275elementStart"](2,"button",5),c["\u0275\u0275text"](3,"Simple step"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"button",5),c["\u0275\u0275text"](5,"Simple step"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"button",6),c["\u0275\u0275text"](7," Simple step "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"tui-doc-documentation",7),c["\u0275\u0275template"](9,k,1,0,"ng-template",8),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().orientation=t})),c["\u0275\u0275template"](10,L,1,0,"ng-template",9),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().activeItemIndex=t})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"tui-doc-documentation",10),c["\u0275\u0275template"](12,$,1,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().state=t})),c["\u0275\u0275template"](13,z,1,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().icon=t})),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("orientation",e.orientation)("activeItemIndex",e.activeItemIndex),c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("state",e.state)("icon",e.icon),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("documentationPropertyValues",e.orientationVariants)("documentationPropertyValue",e.orientation),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.activeItemIndex),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("documentationPropertyValues",e.stateVariants)("documentationPropertyValue",e.state),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.icon)}}function O(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",13),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,M),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,D),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",15),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleHtml)}}E=$localize`:␟2478a860994d0761c58bbd3f7dd3f03d465a8d19␟2107304068844688435: Steps direction `,P=$localize`:␟ee3142d9eaaea0b924d9d01805d271f4069fa81d␟1062293258822311131: Active step index `,T=$localize`:␟4c20ec0c2e6451c09e8f66381ebb03153f9a2138␟3689121194833681634: Step state `,w=$localize`:␟9c9a93b5087be17cbebeca00ceb9e84e3b09fd02␟5578787756132554741: Step custom icon `,M=$localize`:␟1a30b934dd4f85022d1df7b9bd54d8266dae8965␟1361292692274604913: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiStepperModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,D=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let N=(()=>{class e{constructor(){this.exampleModule="import {TuiStepperModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiStepperModule,\n    ],\n...\n",this.exampleHtml='<tui-stepper>\n    <a routerLink="/step-1" routerLinkActive tuiStep>\n        One 1\n    </a>\n    <a routerLink="/step-2" routerLinkActive tuiStep>\n        Two 2\n    </a>\n    <a routerLink="/step-3" routerLinkActive tuiStep>\n        Three 3\n    </a>\n</tui-stepper>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-stepper-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiStepperExample1 {}\n",HTML:'<tui-stepper [activeItemIndex]="1">\n    <button tuiStep state="pass">Finished step</button>\n    <button tuiStep>Simple step</button>\n    <button tuiStep state="error">Error step</button>\n    <button tuiStep disabled>Disabled step</button>\n    <button tuiStep icon="tuiIconTimeLarge">Step with an icon</button>\n</tui-stepper>\n'},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-stepper-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiStepperExample2 {\n    readonly steps = ['Start Up', 'Cash In', 'Sell Out', 'Bro Down'];\n}\n",HTML:'<tui-stepper orientation="vertical" [activeItemIndex]="1">\n    <button *ngFor="let step of steps" tuiStep>{{step}}</button>\n</tui-stepper>\n'},this.activeItemIndex=0,this.orientationVariants=["horizontal","vertical"],this.orientation=this.orientationVariants[0],this.iconVariants=["","tuiIconTimeLarge","tuiIconHeart"],this.icon=this.iconVariants[0],this.stateVariants=["normal","pass","error"],this.state=this.stateVariants[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-stepper"]],decls:5,vars:0,consts:[["package","KIT","type","components",6,"header"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","vertical","heading","Vertical",3,"content"],[3,"orientation","activeItemIndex","activeItemIndexChange"],["tuiStep",""],["tuiStep","",3,"state","icon"],["heading","Stepper"],["documentationPropertyName","orientation","documentationPropertyMode","input","documentationPropertyType","TuiOrientationT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","Step"],["documentationPropertyName","state","documentationPropertyMode","input","documentationPropertyType","'normal' | 'pass' | 'error'",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,v),c["\u0275\u0275template"](2,C,7,2,"ng-template",1),c["\u0275\u0275template"](3,A,14,11,"ng-template",1),c["\u0275\u0275template"](4,O,10,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[u.a,l.a,m.a,S,x,b.a,d.a,s.a,y.a,h.a,g.a],encapsulation:2,changeDetection:0}),e})(),F=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.f,p.Eb,r.ub,i.i,a.f.forChild(Object(i.p)(N))]]}),e})()}}]);