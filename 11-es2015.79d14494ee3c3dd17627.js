(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5VnZ":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var b=u("pMnS"),c=u("SVse"),s=u("s7LF"),o=u("mrSG"),a=u("CoC1"),i=u("8nyR"),r=u("e1JD");const p=[{path:"count.countSub.val",existingEngine:sessionStorage}];let g=(()=>{let l=class extends i.c{setDebounceSubValue(l){this.ctx.setState({val:l})}};return Object(o.a)([Object(a.c)(),Object(a.b)(),Object(o.c)(0,Object(a.e)("value")),Object(o.c)(0,Object(a.d)("val")),Object(o.b)("design:type",Function),Object(o.b)("design:paramtypes",[Number]),Object(o.b)("design:returntype",void 0)],l.prototype,"setDebounceSubValue",null),l=Object(o.a)([Object(a.f)(p),Object(a.g)(),Object(r.e)({name:"countSub",defaults:{val:100}})],l),l})();var d=u("HDdC"),m=u("lJxs");const j=new r.g("count");let O=(()=>{let l=class extends i.c{get values$(){return this.state$.pipe(Object(m.a)(l=>l.countSub))}increment(){this.ctx.setState(l=>Object.assign(Object.assign({},l),{val:l.val+1}))}countSubIncrement(){this.ctx.setState(l=>Object.assign(Object.assign({},l),{countSub:{val:l.countSub.val+1}}))}decrement(){this.setState(l=>Object.assign(Object.assign({},l),{val:l.val-1}))}setDebounceValue(l){this.ctx.setState(n=>Object.assign(Object.assign({},n),{val:parseFloat(l)||0}))}};return Object(o.a)([Object(a.a)(),Object(o.b)("design:type",d.a),Object(o.b)("design:paramtypes",[])],l.prototype,"values$",null),Object(o.a)([Object(a.b)(),Object(o.b)("design:type",Function),Object(o.b)("design:paramtypes",[]),Object(o.b)("design:returntype",void 0)],l.prototype,"increment",null),Object(o.a)([Object(a.b)(),Object(o.b)("design:type",Function),Object(o.b)("design:paramtypes",[]),Object(o.b)("design:returntype",void 0)],l.prototype,"countSubIncrement",null),Object(o.a)([Object(a.b)(),Object(o.b)("design:type",Function),Object(o.b)("design:paramtypes",[]),Object(o.b)("design:returntype",void 0)],l.prototype,"decrement",null),Object(o.a)([Object(a.c)(),Object(a.b)(),Object(o.c)(0,Object(a.e)("val")),Object(o.b)("design:type",Function),Object(o.b)("design:paramtypes",[Object]),Object(o.b)("design:returntype",void 0)],l.prototype,"setDebounceValue",null),l=Object(o.a)([Object(a.g)(),Object(r.e)({name:j,defaults:{val:0},children:[g]})],l),l})();class v{constructor(l,n){this.counter=l,this.subCount=n}}var h=t.sb({encapsulation:2,styles:[],data:{}});function F(l){return t.Nb(2,[(l()(),t.ub(0,0,null,null,3,"a",[["href","https://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Fcount%2Fcount.state.ts"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n    "])),(l()(),t.ub(2,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n"])),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["CountState"])),(l()(),t.Lb(-1,null,["\n\nPS: CountSubState will be persistence in sessionStorage "])),(l()(),t.ub(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ub(11,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Selection:"])),(l()(),t.Lb(-1,null,["\n"])),(l()(),t.ub(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Lb(15,null,["\n\ncounter.state$ = ","\n"])),t.Hb(131072,c.b,[t.i]),t.Hb(0,c.f,[]),(l()(),t.ub(18,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(20,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),t.Lb(21,null,[" counter.values$ = "," "])),t.Hb(131072,c.b,[t.i]),t.Hb(0,c.f,[]),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ub(26,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ub(29,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Actions:"])),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(32,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.counter.increment()&&t),t}),null,null)),(l()(),t.Lb(-1,null,["\n    increment\n"])),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(35,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.counter.countSubIncrement()&&t),t}),null,null)),(l()(),t.Lb(-1,null,["\n    countSubIncrement\n"])),(l()(),t.Lb(-1,null,["\n"])),(l()(),t.ub(38,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.counter.decrement()&&t),t}),null,null)),(l()(),t.Lb(-1,null,["decrement"])),(l()(),t.Lb(-1,null,["\n"])),(l()(),t.ub(41,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.counter.reset()&&t),t}),null,null)),(l()(),t.Lb(-1,null,["reset"])),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(44,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n"])),(l()(),t.ub(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(48,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["counter model:"])),(l()(),t.Lb(-1,null,["\n"])),(l()(),t.ub(51,0,null,null,6,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,b=l.component;return"input"===n&&(e=!1!==t.Fb(l,52)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,52).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,52)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,52)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==b.counter.setDebounceValue(u)&&e),e}),null,null)),t.tb(52,16384,null,0,s.c,[t.E,t.l,[2,s.a]],null,null),t.Ib(1024,null,s.h,(function(l){return[l]}),[s.c]),t.tb(54,671744,null,0,s.m,[[8,null],[8,null],[8,null],[6,s.h]],{model:[0,"model"]},{update:"ngModelChange"}),t.Hb(131072,c.b,[t.i]),t.Ib(2048,null,s.i,null,[s.m]),t.tb(57,16384,null,0,s.j,[[4,s.i]],null,null),(l()(),t.Lb(-1,null,["\n\n(delay 300ms)\n\n"])),(l()(),t.ub(59,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n"])),(l()(),t.ub(61,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["\n\n"])),(l()(),t.ub(63,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["subCount model:"])),(l()(),t.Lb(-1,null,["\n"])),(l()(),t.ub(66,0,null,null,6,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,b=l.component;return"input"===n&&(e=!1!==t.Fb(l,67)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,67).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,67)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,67)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==b.subCount.setDebounceSubValue(u)&&e),e}),null,null)),t.tb(67,16384,null,0,s.c,[t.E,t.l,[2,s.a]],null,null),t.Ib(1024,null,s.h,(function(l){return[l]}),[s.c]),t.tb(69,671744,null,0,s.m,[[8,null],[8,null],[8,null],[6,s.h]],{model:[0,"model"]},{update:"ngModelChange"}),t.Hb(131072,c.b,[t.i]),t.Ib(2048,null,s.i,null,[s.m]),t.tb(72,16384,null,0,s.j,[[4,s.i]],null,null),(l()(),t.Lb(-1,null,["\n\n(delay 300ms)\n"]))],(function(l,n){var u,e,b=n.component;l(n,54,0,null==(u=t.Mb(n,54,0,t.Fb(n,55).transform(b.counter.state$)))?null:u.val),l(n,69,0,null==(e=t.Mb(n,69,0,t.Fb(n,70).transform(b.subCount.state$)))?null:e.val)}),(function(l,n){var u=n.component;l(n,15,0,t.Mb(n,15,0,t.Fb(n,17).transform(t.Mb(n,15,0,t.Fb(n,16).transform(u.counter.state$))))),l(n,21,0,t.Mb(n,21,0,t.Fb(n,23).transform(t.Mb(n,21,0,t.Fb(n,22).transform(u.counter.values$))))),l(n,51,0,t.Fb(n,57).ngClassUntouched,t.Fb(n,57).ngClassTouched,t.Fb(n,57).ngClassPristine,t.Fb(n,57).ngClassDirty,t.Fb(n,57).ngClassValid,t.Fb(n,57).ngClassInvalid,t.Fb(n,57).ngClassPending),l(n,66,0,t.Fb(n,72).ngClassUntouched,t.Fb(n,72).ngClassTouched,t.Fb(n,72).ngClassPristine,t.Fb(n,72).ngClassDirty,t.Fb(n,72).ngClassValid,t.Fb(n,72).ngClassInvalid,t.Fb(n,72).ngClassPending)}))}function y(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,1,"count",[],null,null,null,F,h)),t.tb(1,49152,null,0,v,[O,g],null,null)],null,null)}var L=t.qb("count",v,y,{},{},[]),f=u("Mrqg"),C=u("lLvT"),D=u("iInd");u.d(n,"CountModuleNgFactory",(function(){return S}));var S=t.rb(e,[],(function(l){return t.Cb([t.Db(512,t.k,t.cb,[[8,[b.a,L]],[3,t.k],t.x]),t.Db(4608,c.m,c.l,[t.u,[2,c.v]]),t.Db(4608,s.q,s.q,[]),t.Db(4608,r.D,r.D,[[3,r.D],[2,r.c]]),t.Db(4608,O,O,[]),t.Db(4608,g,g,[]),t.Db(1073742336,c.c,c.c,[]),t.Db(1073742336,s.p,s.p,[]),t.Db(1073742336,s.g,s.g,[]),t.Db(512,r.y,r.y,[t.r,r.v,[3,r.y],r.n,r.z,r.B,[2,f.a]]),t.Db(1024,r.s,(function(){return[[O,g]]}),[]),t.Db(1073742336,r.p,r.p,[r.h,r.C,r.y,[2,r.s],r.o]),t.Db(1073742336,C.a,C.a,[]),t.Db(1073742336,D.m,D.m,[[2,D.r],[2,D.k]]),t.Db(1073742336,e,e,[]),t.Db(1024,D.i,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);