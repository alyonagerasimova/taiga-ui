(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35300],{35300:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var r=t(4594),o=t(35548),l=t(48266),i=t(42855),a=t(84439),c=t(51160),s=t(37770),d=t(52659),u=t(69624);function p(e,n){1&e&&o._UZ(0,"tui-loader",4)}function h(e,n){if(1&e&&o._uU(0),2&e){const e=o.oxw().$implicit;o.Oqu(e.text)}}function m(e,n){if(1&e&&(o.YNc(0,p,1,0,"tui-loader",2),o.YNc(1,h,1,1,"ng-template",null,3,o.W1O)),2&e){const e=n.$implicit,t=o.MAs(2),r=o.oxw();o.Q6J("ngIf",e===r.loading)("ngIfElse",t)}}let f=(()=>{var e;class n{loadChildren({text:e}){return(0,a.H)(3e3).pipe((0,c.U)((()=>[{text:`${e} 1`,children:Math.random()>.5},{text:`${e} 2`,children:Math.random()>.5},{text:`${e} 3`,children:Math.random()>.5}])))}hasChildren({children:e}){return!!e}}return(e=n).ɵfac=function(n){return new(n||e)},e.ɵprov=o.Yz7({token:e,factory:e.ɵfac}),n})();const g=(()=>{var e;class n{constructor(){this.loading=(0,o.f3M)(i.TUI_TREE_LOADING),this.service=(0,o.f3M)(i.TuiTreeService),this.map=new Map,this.childrenHandler=e=>this.service.getChildren(e)}onToggled(e){this.service.loadChildren(e)}}return(e=n).ɵfac=function(n){return new(n||e)},e.ɵcmp=o.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent7",features:[o._Bn([i.TuiTreeService,{provide:i.TUI_TREE_START,useValue:{text:"Topmost"}},{provide:i.TUI_TREE_LOADER,useClass:f}]),o.jDz],decls:4,vars:7,consts:[[3,"childrenHandler","content","map","tuiTreeController","value","toggled"],["content",""],["class","loader",4,"ngIf","ngIfElse"],["text",""],[1,"loader"]],template:function(e,n){if(1&e&&(o.TgZ(0,"tui-tree",0),o.NdJ("toggled",(function(e){return n.onToggled(e)})),o.ALo(1,"async"),o.qZA(),o.YNc(2,m,3,2,"ng-template",null,1,o.W1O)),2&e){const e=o.MAs(3);o.Q6J("childrenHandler",n.childrenHandler)("content",e)("map",n.map)("tuiTreeController",!1)("value",o.lcZ(1,5,n.service.data$))}},dependencies:[i.TuiTree,s.Y,d.n,u.m,l.TuiLoaderComponent,r.O5,r.Ov],styles:[".loader[_ngcontent-%COMP%]{width:2rem;margin:1rem 0}"],changeDetection:0}),n})()}}]);