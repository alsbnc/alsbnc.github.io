"use strict";(self.webpackChunkale_website=self.webpackChunkale_website||[]).push([[336],{3336:(v,g,r)=>{r.r(g),r.d(g,{WorksPageModule:()=>h});var i=r(8583),c=r(8217),t=r(639),p=r(7058),a=r(1514);function k(o,n){if(1&o&&(t.TgZ(0,"div",5),t._UZ(1,"img",6),t.TgZ(2,"div",7),t.TgZ(3,"h3",8),t._uU(4),t.qZA(),t.TgZ(5,"p",9),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",10),t.TgZ(8,"p",11),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.qZA(),t.qZA()),2&o){const e=n.$implicit,s=t.oxw(2);t.xp6(1),t.Q6J("src","/assets/img/works/"+e.image,t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(e.client),t.xp6(1),t.Q6J("routerLink",s.routeDirect+e._id),t.xp6(2),t.Oqu(t.lcZ(10,5,"click-to-listen"))}}function u(o,n){if(1&o&&(t.TgZ(0,"section",1),t.TgZ(1,"h2",2),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,k,11,7,"div",4),t.ALo(6,"async"),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"my-works")),t.xp6(3),t.Q6J("ngForOf",t.lcZ(6,4,e.works))}}function w(o,n){1&o&&t._UZ(0,"div")}function d(o,n){if(1&o&&t._uU(0),2&o){const e=t.oxw(2);t.Oqu(e.work.description)}}function Z(o,n){if(1&o&&t._uU(0),2&o){const e=t.oxw(2);t.Oqu(e.work.description_it)}}function f(o,n){if(1&o&&(t.TgZ(0,"section",1),t._UZ(1,"img",2),t.TgZ(2,"div",3),t.TgZ(3,"h3",4),t._uU(4),t.qZA(),t.TgZ(5,"p",5),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"h4"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.YNc(11,w,1,0,"div",7),t.TgZ(12,"p",8),t.YNc(13,d,1,1,"ng-template",null,9,t.W1O),t.YNc(15,Z,1,1,"ng-template",null,10,t.W1O),t.qZA(),t.TgZ(17,"button",11),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.MAs(14),s=t.MAs(16),l=t.oxw();t.xp6(1),t.Q6J("src","/assets/img/works/"+l.work.image,t.LSH),t.xp6(3),t.Oqu(l.work.title),t.xp6(2),t.Oqu(l.work.client),t.xp6(3),t.Oqu(t.lcZ(10,8,"about-project")),t.xp6(2),t.Q6J("ngIf","en"==l.lang)("ngIfThen",e)("ngIfElse",s),t.xp6(7),t.Oqu(t.lcZ(19,10,"go-back"))}}const x=[{path:"",component:(()=>{class o{constructor(e){this.worksService=e,this.routeDirect="/works-page/"}ngOnInit(){this.works=this.worksService.getWorks()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-works-list"]],decls:1,vars:1,consts:[["class","works-page",4,"ngIf"],[1,"works-page"],[1,"page-title","works--title"],[1,"works"],["class","works--card card",4,"ngFor","ngForOf"],[1,"works--card","card"],["alt","",3,"src"],[1,"works--card--text"],[1,"works--card--title"],[1,"works--card--client"],[1,"works--card--hover",3,"routerLink"],[1,"works--card--hover--text"]],template:function(e,s){1&e&&t.YNc(0,u,7,6,"section",0),2&e&&t.Q6J("ngIf",s.works)},directives:[i.O5,i.sg,c.rH],pipes:[a.X$,i.Ov],styles:[""]}),o})()},{path:":id",component:(()=>{class o{constructor(e,s){this.worksService=e,this.route=s}ngOnInit(){this.lang=localStorage.getItem("lang")||"en",this.route.params.subscribe(e=>{this.id=e.id}),this.worksService.getSingleWork(this.id).subscribe(e=>{this.work=e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.h),t.Y36(c.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-works-single"]],decls:1,vars:1,consts:[["class","work-single",4,"ngIf"],[1,"work-single"],["alt","",1,"work-single--img",3,"src"],[1,"work-single--text"],[1,"work-single--title"],[1,"work-single--client"],[1,"work-single--about"],[4,"ngIf","ngIfThen","ngIfElse"],[1,"work-single--description"],["thenBlock",""],["elseBlock",""],["routerLink","/works-page",1,"back-btn","btn","btn-dark"]],template:function(e,s){1&e&&t.YNc(0,f,20,12,"section",0),2&e&&t.Q6J("ngIf",s.work)},directives:[i.O5,c.rH],pipes:[a.X$],styles:[""]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(x)],c.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[i.ez,_,a.aw]]}),o})()}}]);