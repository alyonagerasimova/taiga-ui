"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[96032],{96032:(K,p,n)=>{n.r(p),n.d(p,{ExampleTuiInputPhoneInternationalModule:()=>j});var C=n(12057),i=n(23738),P=n(33982),m=n(29851),s=n(72002),g=n(753),h=n(75695),t=n(74788),l=n(72773),M=n(82880),F=n(98204),A=n(88331),f=n(37159),S=n(57068),N=n(66015),E=n(68874),y=n(76189);let D=(()=>{class o{constructor(){this.testForm=new i.cw({testValue:new i.NI("+77777777777",i.kI.required)}),this.countries=[l.Xi.RU,l.Xi.KZ,l.Xi.UA,l.Xi.BY],this.countryIsoCode=l.Xi.RU,this.contact={phone:"+375123456789",phoneCountryCode:l.Xi.BY}}patchValue(){var e;this.countryIsoCode=this.contact.phoneCountryCode,null===(e=this.testForm.get("testValue"))||void 0===e||e.patchValue(this.contact.phone)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-input-phone-international-example-1"]],decls:4,vars:4,consts:[[3,"formGroup"],["formControlName","testValue",1,"input",3,"countries","tuiTextfieldLabelOutside","countryIsoCode","countryIsoCodeChange"],["tuiButton","",1,"tui-space_top-4",3,"click"]],template:function(e,u){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-input-phone-international",1),t.NdJ("countryIsoCodeChange",function(T){return u.countryIsoCode=T}),t.qZA(),t.qZA(),t.TgZ(2,"button",2),t.NdJ("click",function(){return u.patchValue()}),t._uU(3," Patch value\n"),t.qZA()),2&e&&(t.Q6J("formGroup",u.testForm),t.xp6(1),t.Q6J("countries",u.countries)("tuiTextfieldLabelOutside",!0)("countryIsoCode",u.countryIsoCode))},directives:[i._Y,i.JL,i.sg,N.Q,i.JJ,i.u,E.x,y.v],styles:[".input[_ngcontent-%COMP%]{max-width:24.375rem}"],changeDetection:0}),o})(),R=(()=>{class o{constructor(){this.testForm=new i.cw({testValue:new i.NI("",i.kI.minLength(12))}),this.countries=Object.values(l.Xi),this.countryIsoCode=l.Xi.US}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-input-phone-international-example-2"]],decls:3,vars:3,consts:[[3,"formGroup"],["formControlName","testValue",1,"input",3,"countries","countryIsoCode","countryIsoCodeChange"]],template:function(e,u){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-input-phone-international",1),t.NdJ("countryIsoCodeChange",function(T){return u.countryIsoCode=T}),t._uU(2," Type your number "),t.qZA(),t.qZA()),2&e&&(t.Q6J("formGroup",u.testForm),t.xp6(1),t.Q6J("countries",u.countries)("countryIsoCode",u.countryIsoCode))},directives:[i._Y,i.JL,i.sg,N.Q,i.JJ,i.u],styles:[".input[_ngcontent-%COMP%]{max-width:24.375rem}"],changeDetection:0}),o})();var x=n(31823),L=n(20546),U=n(17023),H=n(54218),$=n(64374),v=n(33250),Z=n(84848),J=n(76349);function X(o,a){if(1&o&&(t.TgZ(0,"p"),t.SDv(1,2),t.qZA(),t.TgZ(2,"tui-doc-example",3),t._UZ(3,"tui-input-phone-international-example-1"),t.qZA(),t.TgZ(4,"tui-doc-example",4),t._UZ(5,"tui-input-phone-international-example-2"),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("content",e.example1),t.xp6(2),t.Q6J("content",e.example2)}}function V(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tui-input-phone-international",9),t.NdJ("countryIsoCodeChange",function(r){return t.CHM(e),t.oxw(2).countryIsoCode=r}),t._uU(1," Type a phone number "),t.qZA()}if(2&o){const e=t.oxw(2);t.Q6J("formControl",e.control)("focusable",e.focusable)("countries",e.countries)("readOnly",e.readOnly)("tuiTextfieldCleaner",e.cleaner)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintAppearance",e.hintAppearance)("pseudoHover",e.pseudoHovered)("pseudoFocus",e.pseudoFocused)("pseudoInvalid",e.pseudoInvalid)("tuiTextfieldLabelOutside",e.labelOutside)("countryIsoCode",e.countryIsoCode)}}function G(o,a){1&o&&(t.tHW(0,10),t._UZ(1,"code"),t.N_p())}function Q(o,a){1&o&&t.SDv(0,11)}function z(o,a){1&o&&t.SDv(0,12)}function B(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tui-doc-demo",5),t.YNc(1,V,2,16,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,G,2,0,"ng-template",6),t.NdJ("documentationPropertyValueChange",function(r){return t.CHM(e),t.oxw().disabled=r}),t.YNc(4,Q,1,0,"ng-template",7),t.NdJ("documentationPropertyValueChange",function(r){return t.CHM(e),t.oxw().countries=r}),t.YNc(5,z,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(r){return t.CHM(e),t.oxw().countryIsoCode=r}),t.qZA(),t._UZ(6,"inherited-documentation")}if(2&o){const e=t.oxw();t.Q6J("control",e.control),t.xp6(3),t.Q6J("documentationPropertyValue",e.disabled),t.xp6(1),t.Q6J("documentationPropertyValues",e.countriesVariants)("documentationPropertyValue",e.countries),t.xp6(1),t.Q6J("documentationPropertyValues",e.countryIsoCodeVariants)("documentationPropertyValue",e.countryIsoCode)}}function Y(o,a){if(1&o&&(t.TgZ(0,"ol",13),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,14),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",15),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.tHW(8,16),t._UZ(9,"code"),t._UZ(10,"code"),t.N_p(),t.qZA(),t._UZ(11,"tui-doc-code",17),t.qZA(),t.TgZ(12,"li"),t.TgZ(13,"p"),t.SDv(14,18),t.qZA(),t._UZ(15,"tui-doc-code",19),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(6),t.Q6J("code",e.exampleForm),t.xp6(4),t.Q6J("code",e.exampleHtml)}}let b=(()=>{class o extends M.b{constructor(){super(...arguments),this.exampleForm=n.e(67698).then(n.t.bind(n,67698,17)),this.exampleModule=n.e(84308).then(n.t.bind(n,84308,17)),this.exampleHtml=n.e(18164).then(n.t.bind(n,18164,17)),this.example1={TypeScript:n.e(61363).then(n.t.bind(n,61363,17)),HTML:n.e(62125).then(n.t.bind(n,62125,17)),LESS:n.e(48065).then(n.t.bind(n,48065,17))},this.example2={TypeScript:n.e(76028).then(n.t.bind(n,76028,17)),HTML:n.e(13763).then(n.t.bind(n,13763,17)),LESS:n.e(20244).then(n.t.bind(n,20244,17))},this.cleaner=!1,this.control=new i.NI("",[i.kI.required,i.kI.minLength(9)]),this.countriesVariants=[[l.Xi.RU,l.Xi.KZ,l.Xi.UA,l.Xi.BY],Object.values(l.Xi)],this.countries=this.countriesVariants[0],this.countryIsoCodeVariants=[l.Xi.RU,l.Xi.KZ,l.Xi.UA,l.Xi.BY],this.countryIsoCode=this.countryIsoCodeVariants[0],this.labelOutside=!0}}return o.\u0275fac=function(){let a;return function(u){return(a||(a=t.n5z(o)))(u||o)}}(),o.\u0275cmp=t.Xpm({type:o,selectors:[["example-tui-input-phone-international"]],features:[t._Bn([{provide:F.x,useExisting:(0,t.Gpc)(()=>o)}]),t.qOj],decls:4,vars:0,consts:function(){let a,e,u,r,T,_,I,d,O;return a=$localize`:␟e6a9c5f8ed29fc6385948897fb5c70e1822bb9ed␟5478561261855774640:Allows to input phone number in international format`,e=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,u=$localize`:␟c150954294b192344cd8128f107d0609281e937e␟6100465147963561455:All available countries`,r=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,T=$localize`:␟2605436fc68fe6f28c38cc283c805404c1c4fe7d␟3337127772712145540: Array of ISO-codes of countries to choose `,_=$localize`:␟86063816038d414b35c237ad8c8a46b14e169a07␟1487566375988482708: ISO-code of selected country `,I=$localize`:␟2c3923c6968ec5417c5a5e45ba3645399d72f3c3␟7217508107343995741: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputPhoneInternationalModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,d=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,d=t.Zx4(d),O=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputPhoneInternational","package","KIT","type","components"],["pageTab",""],a,["id","base","heading",e,3,"content"],["id","all-countries","heading",u,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countries","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<TuiCountryIsoCode>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countryIsoCode","documentationPropertyMode","input-output","documentationPropertyType","TuiCountryIsoCode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","countries","readOnly","tuiTextfieldCleaner","tuiDropdownDirection","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintAppearance","pseudoHover","pseudoFocus","pseudoInvalid","tuiTextfieldLabelOutside","countryIsoCode","countryIsoCodeChange"],r,T,_,[1,"b-demo-steps"],I,["filename","myComponent.module.ts",3,"code"],d,["filename","myComponent.component.ts",3,"code"],O,["filename","myComponent.template.html",3,"code"]]},template:function(e,u){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,X,6,2,"ng-template",1),t.YNc(2,B,7,6,"ng-template",1),t.YNc(3,Y,16,3,"ng-template",1),t.qZA())},directives:[A.q,f.n,S.f,D,R,x.F,L.z,U.B,H.w,N.Q,i.JJ,i.oH,$.b,v.Ek,Z.bZ,E.x,J.c],encapsulation:2,changeDetection:0}),o})(),j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[C.ez,i.u5,i.UX,g.TuiInputPhoneInternationalModule,h.f,s.TuiTextfieldControllerModule,s.TuiDropdownModule,s.TuiHintModule,m.fV,s.TuiButtonModule,P.Bz.forChild((0,m.Ve)(b))]]}),o})()}}]);