var kt=Object.defineProperty,Lt=Object.defineProperties;var xt=Object.getOwnPropertyDescriptors;var We=Object.getOwnPropertySymbols;var Tt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var Ae=(e,o,l)=>o in e?kt(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,N=(e,o)=>{for(var l in o||(o={}))Tt.call(o,l)&&Ae(e,l,o[l]);if(We)for(var l of We(o))St.call(o,l)&&Ae(e,l,o[l]);return e},te=(e,o)=>Lt(e,xt(o));import{u as Bt,a as Et,v as $t,c as Fe,g as zt,Q as Pt,b as K}from"./QBtn.4f56a75e.js";import{c as $,h as I,a as nt,b as Ot,d as Ne,e as Vt}from"./render.b481f9d4.js";import{i as m,h as L,j as S,k as at,l as J,n as Z,m as X,p as $e,q as R,s as M,t as ze,w as k,u as fe,v as Mt,x as Pe,H as Ie,y as V,z as Dt,P as Qt,A as Ht,B as ie,C as we,D as je,E as qe,F as Be,G as _e,I as Rt,J as it,K as Wt,L as re,M as At,d as Ft,r as Nt,o as It,c as jt,N as g,O as h,R as O,S as Xe,T as Xt}from"./vendor.9544d055.js";import{u as Oe,a as Ve}from"./use-dark.375792a0.js";import{_ as Yt}from"./index.5c3148c2.js";var Ut=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const l=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>L("div",{class:l.value},I(o.default))}}),Kt=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const l=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>L("div",{class:l.value},I(o.default))}});function Gt(){const e=S(!at.value);return e.value===!1&&J(()=>{e.value=!0}),e}const rt=typeof ResizeObserver!="undefined",Ye=rt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ee=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let l=null,i,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(clearTimeout(l),l=null,i){const{offsetWidth:c,offsetHeight:n}=i;(c!==t.width||n!==t.height)&&(t={width:c,height:n},o("resize",t))}}const v=R();if(Object.assign(v.proxy,{trigger:a}),rt===!0){let c;return J(()=>{Z(()=>{i=v.proxy.$el.parentNode,i&&(c=new ResizeObserver(a),c.observe(i),s())})}),X(()=>{clearTimeout(l),c!==void 0&&(c.disconnect!==void 0?c.disconnect():i&&c.unobserve(i))}),$e}else{let _=function(){clearTimeout(l),n!==void 0&&(n.removeEventListener!==void 0&&n.removeEventListener("resize",a,M.passive),n=void 0)},y=function(){_(),i&&i.contentDocument&&(n=i.contentDocument.defaultView,n.addEventListener("resize",a,M.passive),s())};const c=Gt();let n;return J(()=>{Z(()=>{i=v.proxy.$el,i&&y()})}),X(_),()=>{if(c.value===!0)return L("object",{style:Ye.style,tabindex:-1,type:"text/html",data:Ye.url,"aria-hidden":"true",onLoad:y})}}}}),Jt=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=R(),t=ze(fe,()=>{console.error("QHeader needs to be child of QLayout")}),a=S(parseInt(e.heightHint,10)),s=S(!0),v=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),c=m(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return s.value===!0?a.value:0;const u=a.value-t.scroll.value.position;return u>0?u:0}),n=m(()=>e.modelValue!==!0||v.value===!0&&s.value!==!0),_=m(()=>e.modelValue===!0&&n.value===!0&&e.reveal===!0),y=m(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(n.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=m(()=>{const u=t.rows.value.top,x={};return u[0]==="l"&&t.left.space===!0&&(x[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(x[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),x});function d(u,x){t.update("header",u,x)}function p(u,x){u.value!==x&&(u.value=x)}function T({height:u}){p(a,u),d("size",u)}function q(u){_.value===!0&&p(s,!0),l("focusin",u)}k(()=>e.modelValue,u=>{d("space",u),p(s,!0),t.animate()}),k(c,u=>{d("offset",u)}),k(()=>e.reveal,u=>{u===!1&&p(s,e.modelValue)}),k(s,u=>{t.animate(),l("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&p(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const E={};return t.instances.header=E,e.modelValue===!0&&d("size",a.value),d("space",e.modelValue),d("offset",c.value),X(()=>{t.instances.header===E&&(t.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const u=nt(o.default,[]);return e.elevated===!0&&u.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(L(Ee,{debounce:0,onResize:T})),L("header",{class:y.value,style:w.value,onFocusin:q},u)}}}),Q=$({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const l=m(()=>parseInt(e.lines,10)),i=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),t=m(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>L("div",{style:t.value,class:i.value},I(o.default))}}),H=$({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const l=m(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:l.value},I(o.default))}});const Zt=["top","middle","bottom"];var Ue=$({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Zt.includes(e)}},setup(e,{slots:o}){const l=m(()=>e.align!==void 0?{verticalAlign:e.align}:null),i=m(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>L("div",{class:i.value,style:l.value,role:"alert","aria-label":e.label},e.label!==void 0?e.label:I(o.default))}}),ue=$({name:"QItem",props:te(N(N({},Oe),Bt),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=R(),t=Ve(e,i),{hasRouterLink:a,hasLink:s,linkProps:v,linkClass:c,linkTag:n,navigateToRouterLink:_}=Et(),y=S(null),w=S(null),d=m(()=>e.clickable===!0||s.value===!0||e.tag==="label"),p=m(()=>e.disable!==!0&&d.value===!0),T=m(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(s.value===!0?c.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=m(()=>{if(e.insetLevel===void 0)return null;const f=i.lang.rtl===!0?"Right":"Left";return{["padding"+f]:16+e.insetLevel*56+"px"}});function E(f){p.value===!0&&(w.value!==null&&(f.qKeyEvent!==!0&&document.activeElement===y.value?w.value.focus():document.activeElement===w.value&&y.value.focus()),a.value===!0&&_(f),l("click",f))}function u(f){if(p.value===!0&&Mt(f,13)===!0){Pe(f),f.qKeyEvent=!0;const C=new MouseEvent("click",f);C.qKeyEvent=!0,y.value.dispatchEvent(C)}l("keyup",f)}function x(){const f=nt(o.default,[]);return p.value===!0&&f.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:w})),f}return()=>{const f={ref:y,class:T.value,style:q.value,onClick:E,onKeyup:u};return p.value===!0?(f.tabindex=e.tabindex||"0",Object.assign(f,v.value)):d.value===!0&&(f["aria-disabled"]="true"),L(n.value,f,x())}}}),eo=$({name:"QList",props:te(N({},Oe),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:o}){const l=R(),i=Ve(e,l.proxy.$q),t=m(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L("div",{class:t.value},I(o.default))}});function to(e,o,l){let i;function t(){i!==void 0&&(Ie.remove(i),i=void 0)}return X(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){i={condition:()=>l.value===!0,handler:o},Ie.add(i)}}}const oo={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},lo=["before-show","show","before-hide","hide"];function no({showing:e,canShow:o,hideOnRouteChange:l,handleShow:i,handleHide:t,processOnMount:a}){const s=R(),{props:v,emit:c,proxy:n}=s;let _;function y(u){e.value===!0?p(u):w(u)}function w(u){if(v.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const x=v["onUpdate:modelValue"]!==void 0;x===!0&&(c("update:modelValue",!0),_=u,Z(()=>{_===u&&(_=void 0)})),(v.modelValue===null||x===!1)&&d(u)}function d(u){e.value!==!0&&(e.value=!0,c("before-show",u),i!==void 0?i(u):c("show",u))}function p(u){if(v.disable===!0)return;const x=v["onUpdate:modelValue"]!==void 0;x===!0&&(c("update:modelValue",!1),_=u,Z(()=>{_===u&&(_=void 0)})),(v.modelValue===null||x===!1)&&T(u)}function T(u){e.value!==!1&&(e.value=!1,c("before-hide",u),t!==void 0?t(u):c("hide",u))}function q(u){v.disable===!0&&u===!0?v["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?d:T)(_)}k(()=>v.modelValue,q),l!==void 0&&$t(s)===!0&&k(()=>n.$route.fullPath,()=>{l.value===!0&&e.value===!0&&p()}),a===!0&&J(()=>{q(v.modelValue)});const E={show:w,hide:p,toggle:y};return Object.assign(n,E),E}const ao=[null,document,document.body,document.scrollingElement,document.documentElement];function io(e,o){let l=zt(o);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return ao.includes(l)?window:l}function ut(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function st(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let se;function Ce(){if(se!==void 0)return se;const e=document.createElement("p"),o=document.createElement("div");Fe(e,{width:"100%",height:"200px"}),Fe(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const l=e.offsetWidth;o.style.overflow="scroll";let i=e.offsetWidth;return l===i&&(i=o.clientWidth),o.remove(),se=l-i,se}function ro(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let oe=0,ke,Le,le,xe=!1,Ke,Ge,G;function uo(e){so(e)&&Pe(e)}function so(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Dt(e),l=e.shiftKey&&!e.deltaX,i=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||i?e.deltaY:e.deltaX;for(let a=0;a<o.length;a++){const s=o[a];if(ro(s,i))return i?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Je(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ce(e){xe!==!0&&(xe=!0,requestAnimationFrame(()=>{xe=!1;const{height:o}=e.target,{clientHeight:l,scrollTop:i}=document.scrollingElement;(le===void 0||o!==window.innerHeight)&&(le=l-o,document.scrollingElement.scrollTop=i),i>le&&(document.scrollingElement.scrollTop-=Math.ceil((i-le)/8))}))}function Ze(e){const o=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:i,overflowX:t}=window.getComputedStyle(o);ke=st(window),Le=ut(window),Ke=o.style.left,Ge=o.style.top,o.style.left=`-${ke}px`,o.style.top=`-${Le}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),i!=="hidden"&&(i==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,V.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ce,M.passiveCapture),window.visualViewport.addEventListener("scroll",ce,M.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Je,M.passiveCapture))}V.is.desktop===!0&&V.is.mac===!0&&window[`${e}EventListener`]("wheel",uo,M.notPassive),e==="remove"&&(V.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",ce,M.passiveCapture),window.visualViewport.removeEventListener("scroll",ce,M.passiveCapture)):window.removeEventListener("scroll",Je,M.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=Ke,o.style.top=Ge,window.scrollTo(ke,Le),le=void 0)}function co(e){let o="add";if(e===!0){if(oe++,G!==void 0){clearTimeout(G),G=void 0;return}if(oe>1)return}else{if(oe===0||(oe--,oe>0))return;if(o="remove",V.is.ios===!0&&V.is.nativeMobile===!0){clearTimeout(G),G=setTimeout(()=>{Ze(o),G=void 0},100);return}}Ze(o)}function fo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,co(o))}}}function vo(){let e;return X(()=>{clearTimeout(e)}),{registerTimeout(o,l){clearTimeout(e),e=setTimeout(o,l)},removeTimeout(){clearTimeout(e)}}}const Me={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},mo=Object.keys(Me);Me.all=!0;function et(e){const o={};for(const l of mo)e[l]===!0&&(o[l]=!0);return Object.keys(o).length===0?Me:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function tt(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function ho(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Qt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Te(e,o,l){const i=Be(e);let t,a=i.left-o.event.x,s=i.top-o.event.y,v=Math.abs(a),c=Math.abs(s);const n=o.direction;n.horizontal===!0&&n.vertical!==!0?t=a<0?"left":"right":n.horizontal!==!0&&n.vertical===!0?t=s<0?"up":"down":n.up===!0&&s<0?(t="up",v>c&&(n.left===!0&&a<0?t="left":n.right===!0&&a>0&&(t="right"))):n.down===!0&&s>0?(t="down",v>c&&(n.left===!0&&a<0?t="left":n.right===!0&&a>0&&(t="right"))):n.left===!0&&a<0?(t="left",v<c&&(n.up===!0&&s<0?t="up":n.down===!0&&s>0&&(t="down"))):n.right===!0&&a>0&&(t="right",v<c&&(n.up===!0&&s<0?t="up":n.down===!0&&s>0&&(t="down")));let _=!1;if(t===void 0&&l===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,_=!0,t==="left"||t==="right"?(i.left-=a,v=0,a=0):(i.top-=s,c=0,s=0)}return{synthetic:_,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:i,direction:t,isFirst:o.event.isFirst,isFinal:l===!0,duration:Date.now()-o.event.time,distance:{x:v,y:c},offset:{x:a,y:s},delta:{x:i.left-o.event.lastX,y:i.top-o.event.lastY}}}}let bo=0;var Se=Ot({name:"touch-pan",beforeMount(e,{value:o,modifiers:l}){if(l.mouse!==!0&&V.has.touch!==!0)return;function i(a,s){l.mouse===!0&&s===!0?Pe(a):(l.stop===!0&&qe(a),l.prevent===!0&&je(a))}const t={uid:"qvtp_"+bo++,handler:o,modifiers:l,direction:et(l),noop:$e,mouseStart(a){tt(a,t)&&Ht(a)&&(ie(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(tt(a,t)){const s=a.target;ie(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,s){if(V.is.firefox===!0&&we(e,!0),t.lastEvt=a,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const n=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&je(n),a.cancelBubble===!0&&qe(n),Object.assign(n,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:n}}qe(a)}const{left:v,top:c}=Be(a);t.event={x:v,y:c,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const s=Be(a),v=s.left-t.event.x,c=s.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const n=t.event.mouse===!0,_=()=>{i(a,n),l.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),n===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ho(),t.styleCleanup=d=>{if(t.styleCleanup=void 0,l.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),n===!0){const p=()=>{document.body.classList.remove("no-pointer-events--children")};d!==void 0?setTimeout(()=>{p(),d()},50):p()}else d!==void 0&&d()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(a,t.event.mouse);const{payload:d,synthetic:p}=Te(a,t,!1);d!==void 0&&(t.handler(d)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&_(),t.event.lastX=d.position.left,t.event.lastY=d.position.top,t.event.lastDir=p===!0?void 0:d.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||n===!0&&t.modifiers.mouseAllDir===!0){_(),t.event.detected=!0,t.move(a);return}const y=Math.abs(v),w=Math.abs(c);y!==w&&(t.direction.horizontal===!0&&y>w||t.direction.vertical===!0&&y<w||t.direction.up===!0&&y<w&&c<0||t.direction.down===!0&&y<w&&c>0||t.direction.left===!0&&y>w&&v<0||t.direction.right===!0&&y>w&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,s){if(t.event!==void 0){if(_e(t,"temp"),V.is.firefox===!0&&we(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Te(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=Te(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,l.mouse===!0&&ie(t,"main",[[e,"mousedown","mouseStart",`passive${l.mouseCapture===!0?"Capture":""}`]]),V.has.touch===!0&&ie(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const l=e.__qtouchpan;l!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&l.end(),l.handler=o.value),l.direction=et(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),_e(o,"main"),_e(o,"temp"),V.is.firefox===!0&&we(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function de(e,o,l){return l<=o?o:Math.min(l,Math.max(o,e))}const ot=150;var po=$({name:"QDrawer",inheritAttrs:!1,props:te(N(N({},oo),Oe),{side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean}),emits:[...lo,"on-layout","mini-state"],setup(e,{slots:o,emit:l,attrs:i}){const t=R(),{proxy:{$q:a}}=t,s=Ve(e,a),{preventBodyScroll:v}=fo(),{registerTimeout:c}=vo(),n=ze(fe,()=>{console.error("QDrawer needs to be child of QLayout")});let _,y,w;const d=S(e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint),p=m(()=>e.mini===!0&&d.value!==!0),T=m(()=>p.value===!0?e.miniWidth:e.width),q=S(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),E=m(()=>e.persistent!==!0&&(d.value===!0||ct.value===!0));function u(r,b){if(D(),r!==!1&&n.animate(),P(0),d.value===!0){const B=n.instances[ne.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),A(1),n.isContainer.value!==!0&&v(!0)}else A(0),r!==!1&&pe(!1);c(()=>{r!==!1&&pe(!0),b!==!0&&l("show",r)},ot)}function x(r,b){j(),r!==!1&&n.animate(),A(0),P(Y.value*T.value),ge(),b!==!0&&c(()=>{l("hide",r)},ot)}const{show:f,hide:C}=no({showing:q,hideOnRouteChange:E,handleShow:u,handleHide:x}),{addToHistory:D,removeFromHistory:j}=to(q,C,E),W={belowBreakpoint:d,hide:C},z=m(()=>e.side==="right"),Y=m(()=>(a.lang.rtl===!0?-1:1)*(z.value===!0?1:-1)),De=S(0),U=S(!1),ve=S(!1),Qe=S(T.value*Y.value),ne=m(()=>z.value===!0?"left":"right"),me=m(()=>q.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),he=m(()=>e.overlay===!0||e.miniToOverlay===!0||n.view.value.indexOf(z.value?"R":"L")>-1||a.platform.is.ios===!0&&n.isContainer.value===!0),ee=m(()=>e.overlay===!1&&q.value===!0&&d.value===!1),ct=m(()=>e.overlay===!0&&q.value===!0&&d.value===!1),dt=m(()=>"fullscreen q-drawer__backdrop"+(q.value===!1&&U.value===!1?" hidden":"")),ft=m(()=>({backgroundColor:`rgba(0,0,0,${De.value*.4})`})),He=m(()=>z.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),vt=m(()=>z.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),mt=m(()=>{const r={};return n.header.space===!0&&He.value===!1&&(he.value===!0?r.top=`${n.header.offset}px`:n.header.space===!0&&(r.top=`${n.header.size}px`)),n.footer.space===!0&&vt.value===!1&&(he.value===!0?r.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(r.bottom=`${n.footer.size}px`)),r}),ht=m(()=>{const r={width:`${T.value}px`,transform:`translateX(${Qe.value}px)`};return d.value===!0?r:Object.assign(r,mt.value)}),bt=m(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),pt=m(()=>`q-drawer q-drawer--${e.side}`+(ve.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(U.value===!0?" no-transition":q.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${p.value===!0?"mini":"standard"}`+(he.value===!0||ee.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(He.value===!0?" q-drawer--top-padding":""))),gt=m(()=>{const r=a.lang.rtl===!0?e.side:ne.value;return[[Se,_t,void 0,{[r]:!0,mouse:!0}]]}),yt=m(()=>{const r=a.lang.rtl===!0?ne.value:e.side;return[[Se,Re,void 0,{[r]:!0,mouse:!0}]]}),wt=m(()=>{const r=a.lang.rtl===!0?ne.value:e.side;return[[Se,Re,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function be(){Ct(d,e.behavior==="mobile"||e.behavior!=="desktop"&&n.totalWidth.value<=e.breakpoint)}k(d,r=>{r===!0?(_=q.value,q.value===!0&&C(!1)):e.overlay===!1&&e.behavior!=="mobile"&&_!==!1&&(q.value===!0?(P(0),A(0),ge()):f(!1))}),k(()=>e.side,(r,b)=>{n.instances[b]===W&&(n.instances[b]=void 0,n[b].space=!1,n[b].offset=0),n.instances[r]=W,n[r].size=T.value,n[r].space=ee.value,n[r].offset=me.value}),k(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&be()}),k(()=>e.behavior+e.breakpoint,be),k(n.isContainer,r=>{q.value===!0&&v(r!==!0),r===!0&&be()}),k(n.scrollbarWidth,()=>{P(q.value===!0?0:void 0)}),k(me,r=>{F("offset",r)}),k(ee,r=>{l("on-layout",r),F("space",r)}),k(z,()=>{P()}),k(T,r=>{P(),ye(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{ye(r,T.value)}),k(()=>a.lang.rtl,()=>{P()}),k(()=>e.mini,()=>{e.modelValue===!0&&(qt(),n.animate())}),k(p,r=>{l("mini-state",r)});function P(r){r===void 0?Z(()=>{r=q.value===!0?0:T.value,P(Y.value*r)}):(n.isContainer.value===!0&&z.value===!0&&(d.value===!0||Math.abs(r)===T.value)&&(r+=Y.value*n.scrollbarWidth.value),Qe.value=r)}function A(r){De.value=r}function pe(r){const b=r===!0?"remove":n.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function qt(){clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ve.value=!0,y=setTimeout(()=>{ve.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function _t(r){if(q.value!==!1)return;const b=T.value,B=de(r.distance.x,0,b);if(r.isFinal===!0){B>=Math.min(75,b)===!0?f():(n.animate(),A(0),P(Y.value*b)),U.value=!1;return}P((a.lang.rtl===!0?z.value!==!0:z.value)?Math.max(b-B,0):Math.min(0,B-b)),A(de(B/b,0,1)),r.isFirst===!0&&(U.value=!0)}function Re(r){if(q.value!==!0)return;const b=T.value,B=r.direction===e.side,ae=(a.lang.rtl===!0?B!==!0:B)?de(r.distance.x,0,b):0;if(r.isFinal===!0){Math.abs(ae)<Math.min(75,b)===!0?(n.animate(),A(1),P(0)):C(),U.value=!1;return}P(Y.value*ae),A(de(1-ae/b,0,1)),r.isFirst===!0&&(U.value=!0)}function ge(){v(!1),pe(!0)}function F(r,b){n.update(e.side,r,b)}function Ct(r,b){r.value!==b&&(r.value=b)}function ye(r,b){F("size",r===!0?e.miniWidth:b)}return n.instances[e.side]=W,ye(e.miniToOverlay,T.value),F("space",ee.value),F("offset",me.value),e.showIfAbove===!0&&e.modelValue!==!0&&q.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),J(()=>{l("on-layout",ee.value),l("mini-state",p.value),_=e.showIfAbove===!0;const r=()=>{(q.value===!0?u:x)(!1,!0)};if(n.totalWidth.value!==0){Z(r);return}w=k(n.totalWidth,()=>{w(),w=void 0,q.value===!1&&e.showIfAbove===!0&&d.value===!1?f(!1):r()})}),X(()=>{w!==void 0&&w(),clearTimeout(y),q.value===!0&&ge(),n.instances[e.side]===W&&(n.instances[e.side]=void 0,F("size",0),F("offset",0),F("space",!1))}),()=>{const r=[];d.value===!0&&(e.noSwipeOpen===!1&&r.push(Rt(L("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),gt.value)),r.push(Ne("div",{ref:"backdrop",class:dt.value,style:ft.value,"aria-hidden":"true",onClick:C},void 0,"backdrop",e.noSwipeBackdrop!==!0&&q.value===!0,()=>wt.value)));const b=p.value===!0&&o.mini!==void 0,B=[L("div",te(N({},i),{key:""+b,class:[bt.value,i.class]}),b===!0?o.mini():I(o.default))];return e.elevated===!0&&q.value===!0&&B.push(L("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ne("aside",{ref:"content",class:pt.value,style:ht.value},B,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>yt.value)),L("div",{class:"q-drawer-container"},r)}}}),go=$({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:l}}=R(),i=ze(fe,()=>{console.error("QPageContainer needs to be child of QLayout")});it(Wt,!0);const t=m(()=>{const a={};return i.header.space===!0&&(a.paddingTop=`${i.header.size}px`),i.right.space===!0&&(a[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(a.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(a[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),a});return()=>L("div",{class:"q-page-container",style:t.value},I(o.default))}});const{passive:lt}=M,yo=["both","horizontal","vertical"];var wo=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>yo.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,a;k(()=>e.scrollTarget,()=>{c(),v()});function s(){i!==null&&i();const y=Math.max(0,ut(t)),w=st(t),d={top:y-l.position.top,left:w-l.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const p=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";l.position={top:y,left:w},l.directionChanged=l.direction!==p,l.delta=d,l.directionChanged===!0&&(l.direction=p,l.inflectionPoint=l.position),o("scroll",N({},l))}function v(){t=io(a,e.scrollTarget),t.addEventListener("scroll",n,lt),n(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",n,lt),t=void 0)}function n(y){if(y===!0||e.debounce===0||e.debounce==="0")s();else if(i===null){const[w,d]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];i=()=>{d(w),i=null}}}const _=R();return J(()=>{a=_.proxy.$el.parentNode,v()}),X(()=>{i!==null&&i(),c()}),Object.assign(_.proxy,{trigger:n,getPosition:()=>l}),$e}}),qo=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:l}){const{proxy:{$q:i}}=R(),t=S(null),a=S(i.screen.height),s=S(e.container===!0?0:i.screen.width),v=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),n=S(at.value===!0?0:Ce()),_=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=m(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),w=m(()=>n.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${n.value}px`}:null),d=m(()=>n.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${n.value}px`,width:`calc(100% + ${n.value}px)`}:null);function p(f){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};v.value=C,e.onScroll!==void 0&&l("scroll",C)}}function T(f){const{height:C,width:D}=f;let j=!1;a.value!==C&&(j=!0,a.value=C,e.onScrollHeight!==void 0&&l("scroll-height",C),E()),s.value!==D&&(j=!0,s.value=D),j===!0&&e.onResize!==void 0&&l("resize",f)}function q({height:f}){c.value!==f&&(c.value=f,E())}function E(){if(e.container===!0){const f=a.value>c.value?Ce():0;n.value!==f&&(n.value=f)}}let u;const x={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:n,totalWidth:m(()=>s.value+n.value),rows:m(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:re({size:0,offset:0,space:!1}),right:re({size:300,offset:0,space:!1}),footer:re({size:0,offset:0,space:!1}),left:re({size:300,offset:0,space:!1}),scroll:v,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(f,C,D){x[f][C]=D}};if(it(fe,x),Ce()>0){let D=function(){f=null,C.classList.remove("hide-scrollbar")},j=function(){if(f===null){if(C.scrollHeight>i.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(D,300)},W=function(z){f!==null&&z==="remove"&&(clearTimeout(f),D()),window[`${z}EventListener`]("resize",j)},f=null;const C=document.body;k(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),At(()=>{W("remove")})}return()=>{const f=Vt(o.default,[L(wo,{onScroll:p}),L(Ee,{onResize:T})]),C=L("div",{class:_.value,style:y.value,ref:e.container===!0?void 0:t},f);return e.container===!0?L("div",{class:"q-layout-container overflow-hidden",ref:t},[L(Ee,{onResize:q}),L("div",{class:"absolute-full",style:w.value},[L("div",{class:"scroll",style:d.value},[C])])]):C}}});const _o=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Co=Ft({name:"MainLayout",components:{},setup(){const e=S(!1);return{essentialLinks:_o,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),ko=O(" Essential Links "),Lo=O("Map"),xo=O("Collection Points"),To=O(" 3 "),So=O(" 69 "),Bo=O("Analytics"),Eo=O("Trends and Insights"),$o=O("Vehicles"),zo=O("Routes"),Po=O("Dumping Sites"),Oo=O("Dumping rates");function Vo(e,o,l,i,t,a){const s=Nt("router-view");return It(),jt(qo,{view:"lHh Lpr lFf"},{default:g(()=>[h(Jt,{elevated:""},{default:g(()=>[h(Kt,{class:"bg-green"},{default:g(()=>[h(Pt,{flat:"",dense:"",round:"",icon:"delete_sweep","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),h(Ut,null,{default:g(()=>[O(" Basuralytics "+Xe(e.$route.path),1)]),_:1}),Xt("div",null,"v"+Xe(e.$q.version),1)]),_:1})]),_:1}),h(po,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[1]||(o[1]=v=>e.leftDrawerOpen=v),"show-if-above":"",bordered:""},{default:g(()=>[h(eo,null,{default:g(()=>[h(Q,{header:""},{default:g(()=>[ko]),_:1}),h(ue,{clickable:"",onClick:o[0]||(o[0]=v=>e.$router.push("/")),active:e.$route.path==="/"},{default:g(()=>[h(H,{top:"",avatar:""},{default:g(()=>[h(K,{name:"map"})]),_:1}),h(H,null,{default:g(()=>[h(Q,null,{default:g(()=>[Lo]),_:1}),h(Q,{caption:"",lines:"1"},{default:g(()=>[xo]),_:1})]),_:1}),h(H,{side:"",top:"",class:"row q-gutter-xs"},{default:g(()=>[h(Ue,{color:"negative"},{default:g(()=>[To,h(K,{name:"warning",color:"white",class:"q-ml-xs"})]),_:1}),h(Ue,{color:"red"},{default:g(()=>[So,h(K,{name:"warning",color:"white",class:"q-ml-xs"})]),_:1})]),_:1})]),_:1},8,["active"]),h(ue,{clickable:"",to:"/analytics"},{default:g(()=>[h(H,{top:"",avatar:""},{default:g(()=>[h(K,{name:"addchart"})]),_:1}),h(H,null,{default:g(()=>[h(Q,null,{default:g(()=>[Bo]),_:1}),h(Q,{caption:"",lines:"1"},{default:g(()=>[Eo]),_:1})]),_:1})]),_:1}),h(ue,{clickable:""},{default:g(()=>[h(H,{top:"",avatar:""},{default:g(()=>[h(K,{name:"local_shipping"})]),_:1}),h(H,null,{default:g(()=>[h(Q,null,{default:g(()=>[$o]),_:1}),h(Q,{caption:"",lines:"1"},{default:g(()=>[zo]),_:1})]),_:1})]),_:1}),h(ue,{clickable:""},{default:g(()=>[h(H,{top:"",avatar:""},{default:g(()=>[h(K,{name:"factory"})]),_:1}),h(H,null,{default:g(()=>[h(Q,null,{default:g(()=>[Po]),_:1}),h(Q,{caption:"",lines:"1"},{default:g(()=>[Oo]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),h(go,null,{default:g(()=>[h(s)]),_:1})]),_:1})}var Fo=Yt(Co,[["render",Vo]]);export{Fo as default};
