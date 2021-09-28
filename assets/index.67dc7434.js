import{A as V}from"./AppType.916ff28a.js";import{e as O,r as P}from"./elements.0f1b5e0a.js";import{t as A,p as R}from"./shared.5973ad73.js";import{_ as B}from"./IconSfc.394079fb.js";import{q,r as i,y as L,o as D,c as E,O as W,W as X,X as Y,l,t as n,d as k,a as s,h as a,w as r,F as G,S as J,U as K}from"./vendor.cfbfc887.js";import{S as Q}from"./index.3d4e77b0.js";import{B as N}from"./index.d5fc061c.js";import{u as Z,a as U,_ as tt,b as et,c as ot,w as at}from"./en-US.0c801490.js";import"./index.f4c3e8cd.js";import"./index.8c54a66a.js";import"./zIndex.a6f89f9c.js";import"./index.20a388b7.js";import"./components.092cc01a.js";import"./lock.301c02b4.js";const nt={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const x=1e3,F=60*x,b=60*F,M=24*b,st=q({name:"VarCountdown",props:nt,setup(t){const o=i(0),c=i(!1),e=i(""),C=i(0),S=i(0),u=i({}),d=p=>{var j;const v=Math.floor(p/M),y=Math.floor(p%M/b),w=Math.floor(p%b/F),_=Math.floor(p%F/x),z=Math.floor(p%x),T={days:v,hours:y,minutes:w,seconds:_,milliseconds:z};u.value=T,(j=t.onChange)==null||j.call(t,u.value),e.value=R(t.format,T)},f=()=>{const{time:p,onEnd:v,autoStart:y}=t,w=Date.now();o.value||(o.value=w+A(p));let _=o.value-w;if(_<0&&(_=0),S.value=_,d(_),_===0){v==null||v();return}(y||c.value)&&(C.value=P(f))},m=()=>{c.value||(c.value=!0,o.value=Date.now()+(S.value||A(t.time)),f())},I=()=>{c.value=!1},g=()=>{o.value=0,c.value=!1,O(C.value),f()};return L(()=>t.time,()=>g(),{immediate:!0}),{showTime:e,timeData:u,start:m,pause:I,reset:g}}}),ct={class:"var-countdown"};function ut(t,o,c,e,C,S){return D(),E("div",ct,[W(t.$slots,"default",X(Y(t.timeData)),()=>[l(n(t.showTime),1)])])}var h=B(st,[["render",ut]]);h.install=function(t){t.component(h.name,h)};var lt={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},rt={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:H,use:mt,pack:it,packs:Mt,merge:Ht}=Z(),dt=t=>{ot(t),mt(t)};U("zh-CN",tt);U("en-US",et);H("zh-CN",lt);H("en-US",rt);const ft={name:"CountdownExample",components:{[h.name]:h,[N.name]:N,AppType:V},setup(){const t=i(null),o=i(3e3),c=()=>{Q.info("end!")},e=()=>{};return at(dt),{time:o,pack:it,end:c,countdown:t,change:e}}},$=t=>(J("data-v-caa2d80e"),t=t(),K(),t),pt={class:"block"},_t=$(()=>s("span",{class:"colon"},":",-1)),vt={class:"block"},ht=$(()=>s("span",{class:"colon"},":",-1)),Ct={class:"block"},St={class:"btn-container"};function wt(t,o,c,e,C,S){const u=k("app-type"),d=k("var-countdown"),f=k("var-button");return D(),E(G,null,[s("div",null,[a(u,null,{default:r(()=>[l(n(e.pack.basicUsage),1)]),_:1}),a(d,{time:"108000000"})]),s("div",null,[a(u,null,{default:r(()=>[l(n(e.pack.customFormat),1)]),_:1}),a(d,{time:"108000000",format:e.pack.format},null,8,["format"])]),s("div",null,[a(u,null,{default:r(()=>[l(n(e.pack.showMillisecond),1)]),_:1}),a(d,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(u,null,{default:r(()=>[l(n(e.pack.customStyle),1)]),_:1}),a(d,{time:"108000000"},{default:r(m=>[s("span",pt,n(m.hours),1),_t,s("span",vt,n(m.minutes),1),ht,s("span",Ct,n(m.seconds),1)]),_:1})]),s("div",null,[a(u,null,{default:r(()=>[l(n(e.pack.manualControl),1)]),_:1}),a(d,{time:e.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:e.end,onChange:e.change},null,8,["time","onEnd","onChange"]),s("div",St,[a(f,{type:"primary",onClick:o[0]||(o[0]=m=>t.$refs.countdown.start())},{default:r(()=>[l(n(e.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=m=>t.$refs.countdown.pause())},{default:r(()=>[l(n(e.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=m=>t.$refs.countdown.reset())},{default:r(()=>[l(n(e.pack.resetText),1)]),_:1})])])],64)}var $t=B(ft,[["render",wt],["__scopeId","data-v-caa2d80e"]]);export{$t as default};
