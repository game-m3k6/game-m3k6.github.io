(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{OksS:function(t,e,n){"use strict";n.r(e);var o=n("tyNb"),i=n("Xm50"),c=n("5ztx"),d=n("sZJz"),s=n("3tlG"),a=n("hSxO"),r=n("fXoL"),u=n("cfqw"),g=n("uEYC"),m=n("r7Ig");let l=(()=>{class t{constructor(t,e,n,o){this._componentPageTitle=e,this.router=n,this.guideItems=o,t.params.subscribe(t=>{const e=o.getItemById(t.id);e&&(this.guide=e),this.guide||this.router.navigate(["/guides"])})}ngOnInit(){void 0!==this.guide&&(this._componentPageTitle.title=this.guide.name)}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(o.a),r.Zb(c.a),r.Zb(o.c),r.Zb(i.a))},t.\u0275cmp=r.Tb({type:t,selectors:[["guide-viewer"]],decls:9,vars:2,consts:[[1,"docs-primary-header"],[1,"docs-guide-wrapper"],[1,"docs-guide-toc-and-content"],[1,"docs-guide-content",3,"documentUrl","contentRendered"],["container","guide-viewer"],["toc",""]],template:function(t,e){if(1&t){const t=r.gc();r.fc(0,"div",0),r.fc(1,"h1"),r.Rc(2),r.ec(),r.ec(),r.fc(3,"div",1),r.fc(4,"div",2),r.fc(5,"doc-viewer",3),r.nc("contentRendered",(function(e){r.Ic(t);const n=r.Fc(7);return n.addHeaders("Guide Content",e),n.updateScrollPosition()})),r.ec(),r.ac(6,"table-of-contents",4,5),r.ec(),r.ec(),r.ac(8,"app-footer")}2&t&&(r.Lb(2),r.Sc(null==e.guide?null:e.guide.name),r.Lb(3),r.xc("documentUrl",null==e.guide?null:e.guide.document))},directives:[u.a,g.a,m.a],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;flex-direction:column}.docs-guide-wrapper[_ngcontent-%COMP%]{display:block;padding:20px 70px 0;text-align:center}@media (max-width:599px){.docs-guide-wrapper[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}}.docs-guide-toc-and-content[_ngcontent-%COMP%]{align-items:flex-start;display:flex;margin:0 auto;max-width:940px;text-align:left}@media (max-width:720px){.docs-guide-toc-and-content[_ngcontent-%COMP%]{flex-direction:column}}.docs-guide-content[_ngcontent-%COMP%]{flex-grow:1;width:80%}@media (max-width:720px){.docs-guide-content[_ngcontent-%COMP%]{width:100%}}table-of-contents[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:35px}@media (max-width:720px){table-of-contents[_ngcontent-%COMP%]{order:-1;padding-left:0;position:inherit;width:auto}}"]}),t})();const p=[{path:"",component:l}];let h=(()=>{class t{}return t.\u0275mod=r.Xb({type:t}),t.\u0275inj=r.Wb({factory:function(e){return new(e||t)},providers:[i.a],imports:[[d.a,a.a,o.f.forChild(p),s.a]]}),t})();n.d(e,"GuideViewer",(function(){return l})),n.d(e,"GuideViewerModule",(function(){return h}))},Xm50:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("fXoL");const i=[{id:"crowdfunding",name:"\u6e38\u620f\u4f17\u7b79",document:"/content/typography.html"},{id:"getting-started",name:"Getting started",document:"/docs-content/guides/getting-started.html"},{id:"schematics",name:"Schematics",document:"/docs-content/guides/schematics.html"},{id:"theming",name:"Theming Angular Material",document:"/docs-content/guides/theming.html"},{id:"theming-your-components",name:"Theming your own components",document:"/docs-content/guides/theming-your-components.html"},{id:"typography",name:"Using Angular Material's Typography",document:"/docs-content/guides/typography.html"},{id:"customizing-component-styles",name:"Customizing component styles",document:"/docs-content/guides/customizing-component-styles.html"},{id:"creating-a-custom-form-field-control",name:"Creating a custom form field control",document:"/docs-content/guides/creating-a-custom-form-field-control.html"},{id:"elevation",name:"Using elevation helpers",document:"/docs-content/guides/elevation.html"},{id:"creating-a-custom-stepper-using-the-cdk-stepper",name:"Creating a custom stepper using the CdkStepper",document:"/docs-content/guides/creating-a-custom-stepper-using-the-cdk-stepper.html"},{id:"using-component-harnesses",name:"Using Angular Material's component harnesses in your tests",document:"/docs-content/guides/using-component-harnesses.html"}];let c=(()=>{class t{getAllItems(){return i}getItemById(t){return i.find(e=>e.id===t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Vb({token:t,factory:t.\u0275fac}),t})()}}]);