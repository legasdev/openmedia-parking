var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function i(){return Object.create(null)}function s(e){e.forEach(n)}function r(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t,...n){if(null==t)return e;const i=t.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}function c(e){let t;return a(e,(e=>t=e))(),t}function l(e,t,n){e.$$.on_destroy.push(a(t,n))}function h(e,t,n,i){if(e){const s=u(e,t,n,i);return e[0](s)}}function u(e,n,i,s){return e[1]&&s?t(i.ctx.slice(),e[1](s(n))):i.ctx}function d(e,t,n,i){if(e[2]&&i){const s=e[2](i(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|s[i];return e}return t.dirty|s}return t.dirty}function p(e,t,n,i,s,r){if(s){const o=u(t,n,i,r);e.p(o,s)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function m(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function _(e,t){const n={};t=new Set(t);for(const i in e)t.has(i)||"$"===i[0]||(n[i]=e[i]);return n}function g(e){const t={};for(const n in e)t[n]=!0;return t}function v(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function b(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function T(){return I(" ")}function k(){return I("")}function E(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function $(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)null==t[i]?e.removeAttribute(i):"style"===i?e.style.cssText=t[i]:"__value"===i?e.value=e[i]=t[i]:n[i]&&n[i].set?e[i]=t[i]:S(e,i,t[i])}function N(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}function P(e,t,n,i){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function x(e,t,n){e.classList[n?"add":"remove"](t)}let O;function D(e){O=e}function A(){if(!O)throw new Error("Function called outside component initialization");return O}function L(e){A().$$.before_update.push(e)}function M(e){A().$$.on_mount.push(e)}function F(){const e=A();return(t,n,{cancelable:i=!1}={})=>{const s=e.$$.callbacks[t];if(s){const r=function(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,i,t),s}(t,n,{cancelable:i});return s.slice().forEach((t=>{t.call(e,r)})),!r.defaultPrevented}return!0}}function U(e,t){return A().$$.context.set(e,t),t}function q(e){return A().$$.context.get(e)}function H(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const V=[],j=[],W=[],z=[],B=Promise.resolve();let K=!1;function G(){K||(K=!0,B.then(Q))}function Y(e){W.push(e)}const Z=new Set;let J=0;function Q(){const e=O;do{for(;J<V.length;){const e=V[J];J++,D(e),X(e.$$)}for(D(null),V.length=0,J=0;j.length;)j.pop()();for(let e=0;e<W.length;e+=1){const t=W[e];Z.has(t)||(Z.add(t),t())}W.length=0}while(V.length);for(;z.length;)z.pop()();K=!1,Z.clear(),D(e)}function X(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}const ee=new Set;let te;function ne(){te={r:0,c:[],p:te}}function ie(){te.r||s(te.c),te=te.p}function se(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function re(e,t,n,i){if(e&&e.o){if(ee.has(e))return;ee.add(e),te.c.push((()=>{ee.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}else i&&i()}function oe(e,t){re(e,1,1,(()=>{t.delete(e.key)}))}function ae(e,t){const n={},i={},s={$$scope:1};let r=e.length;for(;r--;){const o=e[r],a=t[r];if(a){for(const e in o)e in a||(i[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[r]=a}else for(const e in o)s[e]=1}for(const e in i)e in n||(n[e]=void 0);return n}function ce(e){return"object"==typeof e&&null!==e?e:{}}function le(e){e&&e.c()}function he(e,t,i,o){const{fragment:a,on_mount:c,on_destroy:l,after_update:h}=e.$$;a&&a.m(t,i),o||Y((()=>{const t=c.map(n).filter(r);l?l.push(...t):s(t),e.$$.on_mount=[]})),h.forEach(Y)}function ue(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(t,n,r,o,a,c,l,h=[-1]){const u=O;D(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:i(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};l&&l(d.root);let p=!1;if(d.ctx=r?r(t,n.props||{},((e,n,...i)=>{const s=i.length?i[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(V.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(C)}else d.fragment&&d.fragment.c();n.intro&&se(t.$$.fragment),he(t,n.target,n.anchor,n.customElement),Q()}D(u)}class pe{$destroy(){ue(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fe=e=>void 0===e,me=e=>"function"==typeof e,_e=e=>"number"==typeof e;function ge(){let e=0;return()=>e++}const ve="undefined"==typeof window;function ye(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}const Ce=[];function we(t,n=e){let i;const s=new Set;function r(e){if(o(t,e)&&(t=e,i)){const e=!Ce.length;for(const e of s)e[1](),Ce.push(e,t);if(e){for(let e=0;e<Ce.length;e+=2)Ce[e][0](Ce[e+1]);Ce.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(o,a=e){const c=[o,a];return s.add(c),1===s.size&&(i=n(r)||e),o(t),()=>{s.delete(c),0===s.size&&(i(),i=null)}}}}function be(t,n,i){const o=!Array.isArray(t),c=o?[t]:t,l=n.length<2;return h=t=>{let i=!1;const h=[];let u=0,d=e;const p=()=>{if(u)return;d();const i=n(o?h[0]:h,t);l?t(i):d=r(i)?i:e},f=c.map(((e,t)=>a(e,(e=>{h[t]=e,u&=~(1<<t),i&&p()}),(()=>{u|=1<<t}))));return i=!0,p(),function(){s(f),d()}},{subscribe:we(i,h).subscribe};var h}const Ie=e=>`@@svnav-ctx__${e}`,Te=Ie("LOCATION"),ke=Ie("ROUTER"),Ee=Ie("ROUTE"),Se=Ie("ROUTE_PARAMS"),$e=Ie("FOCUS_ELEM"),Ne=/^:(.+)/,Re=(e,t)=>e.substr(0,t.length)===t,Pe=e=>"*"===e[0],xe=e=>e.replace(/(^\/+|\/+$)/g,"");function Oe(e,t=!1){const n=xe(e).split("/");return t?n.filter(Boolean):n}const De=(e,t)=>e+(t?`?${t}`:""),Ae=e=>`/${xe(e)}`;function Le(...e){const t=e.map((e=>Oe(e,!0).join("/"))).join("/");return Ae(t)}const Me={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},Fe=e=>Me[e];function Ue(e,t,n,i){const s=n&&function(e,t){let n;return 2===e?n=t.path?`path="${t.path}"`:"default":1===e?n=`to="${t.to}"`:3===e&&(n=`basepath="${t.basepath||""}"`),`<${Fe(e)} ${n||""} />`}(i||e,n),r=s?`\n\nOccurred in: ${s}`:"",o=Fe(e);return`<${o}> ${me(t)?t(o):t}${r}`}const qe=e=>(...t)=>e(Ue(...t)),He=qe((e=>{throw new Error(e)})),Ve=qe(console.warn);function je(e,t){return{route:e,score:e.default?0:Oe(e.fullPath).reduce(((e,t)=>{let n=e;return n+=4,(e=>""===e)(t)?n+=1:(e=>Ne.test(e))(t)?n+=2:Pe(t)?n-=5:n+=3,n}),0),index:t}}function We(e,t){let n,i;const[s]=t.split("?"),r=Oe(s),o=""===r[0],a=function(e){return e.map(je).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index))}(e);for(let e=0,s=a.length;e<s;e++){const{route:s}=a[e];let c=!1;const l={},h=e=>({...s,params:l,uri:e});if(s.default){i=h(t);continue}const u=Oe(s.fullPath),d=Math.max(r.length,u.length);let p=0;for(;p<d;p++){const e=u[p],t=r[p];if(!fe(e)&&Pe(e)){const t="*"===e?"*":e.slice(1);l[t]=r.slice(p).map(decodeURIComponent).join("/");break}if(fe(t)){c=!0;break}const n=Ne.exec(e);if(n&&!o){const e=decodeURIComponent(t);l[n[1]]=e}else if(e!==t){c=!0;break}}if(!c){n=h(Le(...r.slice(0,p)));break}}return n||i||null}function ze(e,t){return We([e],t)}function Be(e,t){const{pathname:n,hash:i="",search:s="",state:r}=e,o=Oe(t,!0),a=Oe(n,!0);for(;o.length;)o[0]!==a[0]&&He(3,`Invalid state: All locations must begin with the basepath "${t}", found "${n}"`),o.shift(),a.shift();return{pathname:Le(...a),hash:i,search:s,state:r}}const Ke=e=>1===e.length?"":e;function Ge(e){const t=e.indexOf("?"),n=e.indexOf("#"),i=-1!==t,s=-1!==n,r=s?Ke(e.substr(n)):"",o=s?e.substr(0,n):e,a=i?Ke(o.substr(t)):"";return{pathname:i?o.substr(0,t):o,search:a,hash:r}}function Ye(e,t,n){return Le(n,function(e,t){if(Re(e,"/"))return e;const[n,i]=e.split("?"),[s]=t.split("?"),r=Oe(n),o=Oe(s);if(""===r[0])return De(s,i);if(!Re(r[0],".")){const e=o.concat(r).join("/");return De(("/"===s?"":"/")+e,i)}const a=o.concat(r),c=[];return a.forEach((e=>{".."===e?c.pop():"."!==e&&c.push(e)})),De(`/${c.join("/")}`,i)}(e,t))}function Ze(e,t){const n=Ae(e.replace(/\*.*$/,""));const i=Oe(n,!0),s=ze({fullPath:n},Le(...Oe(t,!0).slice(0,i.length)));return s&&s.uri}const Je="POP";function Qe(e){return{...e.location,pathname:encodeURI(decodeURI(e.location.pathname)),state:e.history.state,_key:e.history.state&&e.history.state._key||"initial"}}function Xe(e,t){return{...Ge(t),state:e}}const et=!(ve||!window.document||!window.document.createElement),tt=!ve&&"null"===window.location.origin,nt=function(e){let t=[],n=Qe(e),i=Je;const s=(e=t)=>e.forEach((e=>e({location:n,action:i})));return{get location(){return n},listen(r){t.push(r);s([r]);const o=ye(e,"popstate",(()=>{n=Qe(e),i=Je,s([r])}));return()=>{o(),t=t.filter((e=>e!==r))}},navigate(t,r){const{state:o={},replace:a=!1}=r||{};if(i=a?"REPLACE":"PUSH",_e(t))r&&Ve(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),i=Je,e.history.go(t);else{const n={...o,_key:Math.random().toString(36).substring(2)};try{e.history[a?"replaceState":"pushState"](n,"",t)}catch(n){e.location[a?"replace":"assign"](t)}}n=Qe(e),s()}}}(et&&!tt?window:function(e="/"){let t=0,n=[Xe(null,e)];return{get entries(){return n},get location(){return n[t]},addEventListener(){},removeEventListener(){},history:{get state(){return n[t].state},pushState(e,i,s){t++,n=n.slice(0,t),n.push(Xe(e,s))},replaceState(e,i,s){n[t]=Xe(e,s)},go(e){const i=t+e;i<0||i>n.length-1||(t=i)}}}}()),{navigate:it}=nt;let st=null,rt=!0;function ot(e){(!st||e.level>st.level||e.level===st.level&&function(e,t){const n=document.querySelectorAll("[data-svnav-router]");for(let i=0;i<n.length;i++){const s=n[i],r=Number(s.dataset.svnavRouter);if(r===e)return!0;if(r===t)return!1}return!1}(e.routerId,st.routerId))&&(st=e)}function at(e){if(!e)return!1;const t="tabindex";try{if(!e.hasAttribute(t)){let n;e.setAttribute(t,"-1");const i=()=>{e.removeAttribute(t),n()};n=ye(e,"blur",i)}return e.focus(),document.activeElement===e}catch(e){return!1}}function ct(e,t){return Number(e.dataset.svnavRouteEnd)===t}function lt(e,t=document){return t.querySelector(e)}function ht(e){Promise.resolve(c(e.focusElement)).then((t=>{const n=t||function(e){let t=lt(`[data-svnav-route-start="${e}"]`).nextElementSibling;for(;!ct(t,e);){if(/^H[1-6]$/i.test(t.tagName))return t;const e=lt("h1,h2,h3,h4,h5,h6",t);if(e)return e;t=t.nextElementSibling}return null}(e.id);n||Ve(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',e,2);at(n)||at(document.documentElement)}))}const ut=(e,t,n)=>(i,s)=>(G(),B).then((()=>{if(st&&!rt){if(i&&ht(st.route),e.announcements&&s){const{path:i,fullPath:s,meta:r,params:o,uri:a}=st.route,l=e.createAnnouncement({path:i,fullPath:s,meta:r,params:o,uri:a},c(n));Promise.resolve(l).then((e=>{t.set(e)}))}st=null}else rt=!1}));function dt(e){let t,n,i,s,r;const o=e[20].default,a=h(o,e,e[19],null);let c=e[2]&&e[4]&&e[1].announcements&&function(e){let t,n;return{c(){t=w("div"),n=I(e[0]),S(t,"role","status"),S(t,"aria-atomic","true"),S(t,"aria-live","polite"),S(t,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(e,i){y(e,t,i),v(t,n)},p(e,t){1&t[0]&&N(n,e[0])},d(e){e&&C(t)}}}(e);return{c(){t=w("div"),n=T(),a&&a.c(),i=T(),c&&c.c(),s=k(),P(t,"display","none"),S(t,"aria-hidden","true"),S(t,"data-svnav-router",e[3])},m(e,o){y(e,t,o),y(e,n,o),a&&a.m(e,o),y(e,i,o),c&&c.m(e,o),y(e,s,o),r=!0},p(e,t){a&&a.p&&(!r||524288&t[0])&&p(a,o,e,e[19],r?d(o,e[19],t,null):f(e[19]),null),e[2]&&e[4]&&e[1].announcements&&c.p(e,t)},i(e){r||(se(a,e),r=!0)},o(e){re(a,e),r=!1},d(e){e&&C(t),e&&C(n),a&&a.d(e),e&&C(i),c&&c.d(e),e&&C(s)}}}const pt=ge(),ft="/";function mt(e,t,n){let i,s,r,o,a,{$$slots:c={},$$scope:h}=t,{basepath:u=ft}=t,{url:d=null}=t,{history:p=nt}=t,{primary:f=!0}=t,{a11y:m={}}=t;const _={createAnnouncement:e=>`Navigated to ${e.uri}`,announcements:!0,...m},g=u,v=Ae(u),y=q(Te),C=q(ke),w=!y,b=pt(),I=f&&!(C&&!C.manageFocus),T=we("");l(e,T,(e=>n(0,a=e)));const k=we([]);l(e,k,(e=>n(18,o=e)));const E=we(null);l(e,E,(e=>n(16,s=e)));let S=!1;const $=w?0:C.level+1,N=w?we(Be(ve?Ge(d):p.location,v)):y;l(e,N,(e=>n(15,i=e)));const R=we(i);l(e,R,(e=>n(17,r=e)));const P=ut(_,T,N),x=e=>t=>t.filter((t=>t.id!==e));return w||u===ft||Ve(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:u}),w&&(M((()=>p.listen((e=>{const t=Be(e.location,v);R.set(i),N.set(t)})))),U(Te,N)),U(ke,{activeRoute:E,registerRoute:function(e){if(ve){if(S)return;const t=ze(e,i.pathname);if(t)return S=!0,t}else k.update((t=>{const n=x(e.id)(t);return n.push(e),n}))},unregisterRoute:function(e){k.update(x(e))},manageFocus:I,level:$,id:b,history:w?p:C.history,basepath:w?v:C.basepath}),e.$$set=e=>{"basepath"in e&&n(10,u=e.basepath),"url"in e&&n(11,d=e.url),"history"in e&&n(12,p=e.history),"primary"in e&&n(13,f=e.primary),"a11y"in e&&n(14,m=e.a11y),"$$scope"in e&&n(19,h=e.$$scope)},e.$$.update=()=>{if(1024&e.$$.dirty[0]&&u!==g&&Ve(3,'You cannot change the "basepath" prop. It is ignored.'),294912&e.$$.dirty[0]){const e=We(o,i.pathname);E.set(e)}if(163840&e.$$.dirty[0]&&w){const e=!!i.hash,t=!e&&I,n=!e||i.pathname!==r.pathname;P(t,n)}65536&e.$$.dirty[0]&&I&&s&&s.primary&&ot({level:$,routerId:b,route:s})},[a,_,w,b,I,T,k,E,N,R,u,d,p,f,m,i,s,r,o,h,c]}var _t=class extends pe{constructor(e){super(),de(this,e,mt,dt,o,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function gt(e,t,n=ke,i=3){q(n)||He(e,(e=>`You cannot use ${e} outside of a ${Fe(i)}.`),t)}function vt(){return gt(5),(e=>{const{subscribe:t}=q(e);return{subscribe:t}})(Te)}function yt(){const{history:e}=q(ke);return e}function Ct(){const e=q(Ee);return e?be(e,(e=>e.base)):we("/")}function wt(){gt(10);const e=Ct(),{basepath:t}=q(ke);return n=>Ye(n,c(e),t)}const bt=e=>({params:16&e,location:8&e}),It=e=>({params:ve?c(e[9]):e[4],location:e[3],navigate:e[10]});function Tt(e){let t,n;return t=new _t({props:{primary:e[1],$$slots:{default:[St]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.primary=e[1]),264217&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function kt(e){let t;const n=e[17].default,i=h(n,e,e[18],It);return{c(){i&&i.c()},m(e,n){i&&i.m(e,n),t=!0},p(e,s){i&&i.p&&(!t||262168&s)&&p(i,n,e,e[18],t?d(n,e[18],s,bt):f(e[18]),It)},i(e){t||(se(i,e),t=!0)},o(e){re(i,e),t=!1},d(e){i&&i.d(e)}}}function Et(e){let n,i,s;const r=[{location:e[3]},{navigate:e[10]},ve?c(e[9]):e[4],e[11]];var o=e[0];function a(e){let n={};for(let e=0;e<r.length;e+=1)n=t(n,r[e]);return{props:n}}return o&&(n=new o(a())),{c(){n&&le(n.$$.fragment),i=k()},m(e,t){n&&he(n,e,t),y(e,i,t),s=!0},p(e,t){const s=3608&t?ae(r,[8&t&&{location:e[3]},1024&t&&{navigate:e[10]},528&t&&ce(ve?c(e[9]):e[4]),2048&t&&ce(e[11])]):{};if(o!==(o=e[0])){if(n){ne();const e=n;re(e.$$.fragment,1,0,(()=>{ue(e,1)})),ie()}o?(n=new o(a()),le(n.$$.fragment),se(n.$$.fragment,1),he(n,i.parentNode,i)):n=null}else o&&n.$set(s)},i(e){s||(n&&se(n.$$.fragment,e),s=!0)},o(e){n&&re(n.$$.fragment,e),s=!1},d(e){e&&C(i),n&&ue(n,e)}}}function St(e){let t,n,i,s;const r=[Et,kt],o=[];function a(e,t){return null!==e[0]?0:1}return t=a(e),n=o[t]=r[t](e),{c(){n.c(),i=k()},m(e,n){o[t].m(e,n),y(e,i,n),s=!0},p(e,s){let c=t;t=a(e),t===c?o[t].p(e,s):(ne(),re(o[c],1,1,(()=>{o[c]=null})),ie(),n=o[t],n?n.p(e,s):(n=o[t]=r[t](e),n.c()),se(n,1),n.m(i.parentNode,i))},i(e){s||(se(n),s=!0)},o(e){re(n),s=!1},d(e){o[t].d(e),e&&C(i)}}}function $t(e){let t,n,i,s,r,o=e[2]&&Tt(e);return{c(){t=w("div"),n=T(),o&&o.c(),i=T(),s=w("div"),P(t,"display","none"),S(t,"aria-hidden","true"),S(t,"data-svnav-route-start",e[5]),P(s,"display","none"),S(s,"aria-hidden","true"),S(s,"data-svnav-route-end",e[5])},m(e,a){y(e,t,a),y(e,n,a),o&&o.m(e,a),y(e,i,a),y(e,s,a),r=!0},p(e,[t]){e[2]?o?(o.p(e,t),4&t&&se(o,1)):(o=Tt(e),o.c(),se(o,1),o.m(i.parentNode,i)):o&&(ne(),re(o,1,1,(()=>{o=null})),ie())},i(e){r||(se(o),r=!0)},o(e){re(o),r=!1},d(e){e&&C(t),e&&C(n),o&&o.d(e),e&&C(i),e&&C(s)}}}const Nt=ge();function Rt(e,n,i){let s;const r=["path","component","meta","primary"];let o,a,c,h,u=_(n,r),{$$slots:d={},$$scope:p}=n,{path:f=""}=n,{component:g=null}=n,{meta:v={}}=n,{primary:y=!0}=n;gt(2,n);const C=Nt(),{registerRoute:w,unregisterRoute:b,activeRoute:I}=q(ke);l(e,I,(e=>i(15,o=e)));const T=Ct();l(e,T,(e=>i(16,c=e)));const k=vt();l(e,k,(e=>i(3,a=e)));const E=we(null);let S;const $=we(),N=we({});l(e,N,(e=>i(4,h=e))),U(Ee,$),U(Se,N),U($e,E);const R=function(){gt(7);const e=wt(),{navigate:t}=yt();return(n,i)=>{const s=_e(n)?n:e(n);return t(s,i)}}();var P;return ve||(P=()=>b(C),A().$$.on_destroy.push(P)),e.$$set=e=>{i(23,n=t(t({},n),m(e))),i(11,u=_(n,r)),"path"in e&&i(12,f=e.path),"component"in e&&i(0,g=e.component),"meta"in e&&i(13,v=e.meta),"primary"in e&&i(1,y=e.primary),"$$scope"in e&&i(18,p=e.$$scope)},e.$$.update=()=>{if(77834&e.$$.dirty){const e=""===f,t=Le(c,f),n={id:C,path:f,meta:v,default:e,fullPath:e?"":t,base:e?c:Ze(t,a.pathname),primary:y,focusElement:E};$.set(n),i(14,S=w(n))}if(49152&e.$$.dirty&&i(2,s=!!(S||o&&o.id===C)),49156&e.$$.dirty&&s){const{params:e}=S||o;N.set(e)}},n=m(n),[g,y,s,a,h,C,I,T,k,N,R,u,f,v,S,o,c,d,p]}var Pt=class extends pe{constructor(e){super(),de(this,e,Rt,$t,o,{path:12,component:0,meta:13,primary:1})}};function xt(e){let n,i,s,r;const o=e[13].default,a=h(o,e,e[12],null);let c=[{href:e[0]},e[2],e[1]],l={};for(let e=0;e<c.length;e+=1)l=t(l,c[e]);return{c(){n=w("a"),a&&a.c(),$(n,l)},m(t,o){y(t,n,o),a&&a.m(n,null),i=!0,s||(r=E(n,"click",e[4]),s=!0)},p(e,[t]){a&&a.p&&(!i||4096&t)&&p(a,o,e,e[12],i?d(o,e[12],t,null):f(e[12]),null),$(n,l=ae(c,[(!i||1&t)&&{href:e[0]},4&t&&e[2],2&t&&e[1]]))},i(e){i||(se(a,e),i=!0)},o(e){re(a,e),i=!1},d(e){e&&C(n),a&&a.d(e),s=!1,r()}}}function Ot(e,n,i){let s,r,o,a,c;const h=["to","replace","state","getProps"];let u,d=_(n,h),{$$slots:p={},$$scope:f}=n,{to:g}=n,{replace:v=!1}=n,{state:y={}}=n,{getProps:C=null}=n;gt(1,n);const w=vt();l(e,w,(e=>i(11,u=e)));const b=F(),I=wt(),{navigate:T}=yt();return e.$$set=e=>{i(18,n=t(t({},n),m(e))),i(17,d=_(n,h)),"to"in e&&i(5,g=e.to),"replace"in e&&i(6,v=e.replace),"state"in e&&i(7,y=e.state),"getProps"in e&&i(8,C=e.getProps),"$$scope"in e&&i(12,f=e.$$scope)},e.$$.update=()=>{2080&e.$$.dirty&&i(0,s=I(g,u)),2049&e.$$.dirty&&i(10,r=Re(u.pathname,s)),2049&e.$$.dirty&&i(9,o=s===u.pathname),512&e.$$.dirty&&i(2,a=o?{"aria-current":"page"}:{}),i(1,c=(()=>{if(me(C)){const e=C({location:u,href:s,isPartiallyCurrent:r,isCurrent:o});return{...d,...e}}return d})())},n=m(n),[s,c,a,w,function(e){if(b("click",e),function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)){e.preventDefault();T(s,{state:y,replace:o||v})}},g,v,y,C,o,r,u,f,p]}var Dt=class extends pe{constructor(e){super(),de(this,e,Ot,xt,o,{to:5,replace:6,state:7,getProps:8})}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const At=!1,Lt="${JSCORE_VERSION}",Mt=function(e,t){if(!e)throw Ft(t)},Ft=function(e){return new Error("Firebase Database ("+Lt+") INTERNAL ASSERT FAILED: "+e)},Ut=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},qt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=s>>2,h=(3&s)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[l],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ut(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ht=function(e){const t=Ut(e);return qt.encodeByteArray(t,!0)},Vt=function(e){return Ht(e).replace(/\./g,"")},jt=function(e){try{return qt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Wt(e){return zt(void 0,e)}function zt(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=zt(e[n],t[n]));return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Kt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Gt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kt())}function Yt(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Zt(){return!0===At}class Jt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}}class Qt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(Xt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new Jt(i,o,n)}}const Xt=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function en(e){return JSON.parse(e)}function tn(e){return JSON.stringify(e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const nn=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=en(jt(r[0])||""),n=en(jt(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function sn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function rn(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function on(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function an(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function cn(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(ln(n)&&ln(r)){if(!cn(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function ln(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hn(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function un(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function dn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pn{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),s=1518500249):(i=o^a^c,s=1859775393):e<60?(i=o&a|c&(o|a),s=2400959708):(i=o^a^c,s=3395469782);const t=(r<<5|r>>>27)+i+l+s+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}class fn{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=mn),void 0===i.error&&(i.error=mn),void 0===i.complete&&(i.complete=mn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function mn(){}function _n(e,t){return`${e} failed: ${t} argument `}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const gn=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function vn(e){return e&&e._delegate?e._delegate:e}class yn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Cn="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Bt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Cn?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class bn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var In;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(In||(In={}));const Tn={debug:In.DEBUG,verbose:In.VERBOSE,info:In.INFO,warn:In.WARN,error:In.ERROR,silent:In.SILENT},kn=In.INFO,En={[In.DEBUG]:"log",[In.VERBOSE]:"log",[In.INFO]:"info",[In.WARN]:"warn",[In.ERROR]:"error"},Sn=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=En[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class $n{constructor(e){this.name=e,this._logLevel=kn,this._logHandler=Sn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in In))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Tn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,In.DEBUG,...e),this._logHandler(this,In.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,In.VERBOSE,...e),this._logHandler(this,In.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,In.INFO,...e),this._logHandler(this,In.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,In.WARN,...e),this._logHandler(this,In.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,In.ERROR,...e),this._logHandler(this,In.ERROR,...e)}}let Nn,Rn;const Pn=new WeakMap,xn=new WeakMap,On=new WeakMap,Dn=new WeakMap,An=new WeakMap;let Ln={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return xn.get(e);if("objectStoreNames"===t)return e.objectStoreNames||On.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Mn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Rn||(Rn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(qn(this),t),Un(Pn.get(this))}:function(...t){return Un(e.apply(qn(this),t))}:function(t,...n){const i=e.call(qn(this),t,...n);return On.set(i,t.sort?t.sort():[t]),Un(i)}}function Fn(e){return"function"==typeof e?Mn(e):(e instanceof IDBTransaction&&function(e){if(xn.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));xn.set(e,t)}(e),t=e,(Nn||(Nn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ln):e);var t}function Un(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(Un(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Pn.set(t,e)})).catch((()=>{})),An.set(t,e),t}(e);if(Dn.has(e))return Dn.get(e);const t=Fn(e);return t!==e&&(Dn.set(e,t),An.set(t,e)),t}const qn=e=>An.get(e);const Hn=["get","getKey","getAll","getAllKeys","count"],Vn=["put","add","delete","clear"],jn=new Map;function Wn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(jn.get(t))return jn.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=Vn.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Hn.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return jn.set(t,r),r}Ln=(e=>({...e,get:(t,n,i)=>Wn(t,n)||e.get(t,n,i),has:(t,n)=>!!Wn(t,n)||e.has(t,n)}))(Ln);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class zn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Bn="@firebase/app",Kn="0.7.31",Gn=new $n("@firebase/app"),Yn="[DEFAULT]",Zn={[Bn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Jn=new Map,Qn=new Map;function Xn(e,t){try{e.container.addComponent(t)}catch(n){Gn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ei(e){const t=e.name;if(Qn.has(t))return Gn.debug(`There were multiple attempts to register component ${t}.`),!1;Qn.set(t,e);for(const t of Jn.values())Xn(t,e);return!0}function ti(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ni=new Qt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ii{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new yn("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ni.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const si="9.9.3";function ri(e="[DEFAULT]"){const t=Jn.get(e);if(!t)throw ni.create("no-app",{appName:e});return t}function oi(e,t,n){var i;let s=null!==(i=Zn[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Gn.warn(e.join(" "))}ei(new yn(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ai="firebase-heartbeat-store";let ci=null;function li(){return ci||(ci=function(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=Un(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Un(o.result),e.oldVersion,e.newVersion,Un(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ai)}}).catch((e=>{throw ni.create("idb-open",{originalErrorMessage:e.message})}))),ci}async function hi(e,t){var n;try{const n=(await li()).transaction(ai,"readwrite"),i=n.objectStore(ai);return await i.put(t,ui(e)),n.done}catch(e){if(e instanceof Jt)Gn.warn(e.message);else{const t=ni.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Gn.warn(t.message)}}}function ui(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class di{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fi(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=pi();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=pi(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),mi(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mi(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=Vt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function pi(){return(new Date).toISOString().substring(0,10)}class fi{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await li()).transaction(ai).objectStore(ai).get(ui(e))}catch(e){if(e instanceof Jt)Gn.warn(e.message);else{const n=ni.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Gn.warn(n.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return hi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return hi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function mi(e){return Vt(JSON.stringify({version:2,heartbeats:e})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var _i;function gi(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}function vi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}_i="",ei(new yn("platform-logger",(e=>new zn(e)),"PRIVATE")),ei(new yn("heartbeat",(e=>new di(e)),"PRIVATE")),oi(Bn,Kn,_i),oi(Bn,Kn,"esm2017"),oi("fire-js","");const yi=vi,Ci=new Qt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),wi=new $n("@firebase/auth");function bi(e,...t){wi.logLevel<=In.ERROR&&wi.error(`Auth (9.9.3): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ii(e,...t){throw ki(e,...t)}function Ti(e,...t){return ki(e,...t)}function ki(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Ci.create(e,...t)}function Ei(e,t,...n){if(!e)throw ki(t,...n)}function Si(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bi(t),new Error(t)}function $i(e,t){e||Si(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ni=new Map;function Ri(e){$i(e instanceof Function,"Expected a class definition");let t=Ni.get(e);return t?($i(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ni.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Pi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function xi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Oi(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==xi()&&"https:"!==xi()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Di{constructor(e,t){this.shortDelay=e,this.longDelay=t,$i(t>e,"Short delay should be less than long delay!"),this.isMobile=Gt()||Yt()}get(){return Oi()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ai(e,t){$i(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Li{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Si("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Si("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Si("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Mi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Fi=new Di(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ui(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function qi(e,t,n,i,s={}){return Hi(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=hn(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Li.fetch()(ji(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function Hi(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Mi),t);try{const t=new Wi(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw zi(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw zi(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw zi(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw zi(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const i=Object.assign(Object.assign({},yi()),{[t]:n});return new Qt("auth","Firebase",i).create(t,{appName:e.name})}(e,a,o);Ii(e,a)}}catch(t){if(t instanceof Jt)throw t;Ii(e,"network-request-failed")}}async function Vi(e,t,n,i,s={}){const r=await qi(e,t,n,i,s);return"mfaPendingCredential"in r&&Ii(e,"multi-factor-auth-required",{_serverResponse:r}),r}function ji(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?Ai(e.config,s):`${e.config.apiScheme}://${s}`}class Wi{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ti(this.auth,"network-request-failed"))),Fi.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=Ti(e,t,i);return s.customData._tokenResponse=n,s}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Bi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Ki(e){return 1e3*Number(e)}function Gi(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return bi("JWT malformed, contained fewer than 3 sections"),null;try{const e=jt(i);return e?JSON.parse(e):(bi("Failed to decode base64 JWT payload"),null)}catch(e){return bi("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Yi(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Jt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Zi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ji{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Qi(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Yi(e,async function(e,t){return qi(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Ei(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=gi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const h=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ji(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ei(e.idToken,"internal-error"),Ei(void 0!==e.idToken,"internal-error"),Ei(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Gi(e);return Ei(t,"internal-error"),Ei(void 0!==t.exp,"internal-error"),Ei(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ei(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await Hi(e,{},(async()=>{const n=hn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=ji(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Li.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new Xi;return n&&(Ei("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(Ei("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(Ei("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xi,this.toJSON())}_performRefresh(){return Si("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function es(e,t){Ei("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ts{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=gi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ji(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return Ei(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=vn(e),i=await n.getIdToken(t),s=Gi(i);Ei(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Bi(Ki(s.auth_time)),issuedAtTime:Bi(Ki(s.iat)),expirationTime:Bi(Ki(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=vn(e);await Qi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ei(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ts(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ei(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Qi(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yi(this,async function(e,t){return qi(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,c,l;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(c=t.createdAt)&&void 0!==c?c:void 0,g=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:y,isAnonymous:C,providerData:w,stsTokenManager:b}=t;Ei(v&&b,e,"internal-error");const I=Xi.fromJSON(this.name,b);Ei("string"==typeof v,e,"internal-error"),es(h,e.name),es(u,e.name),Ei("boolean"==typeof y,e,"internal-error"),Ei("boolean"==typeof C,e,"internal-error"),es(d,e.name),es(p,e.name),es(f,e.name),es(m,e.name),es(_,e.name),es(g,e.name);const T=new ts({uid:v,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:C,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:_,lastLoginAt:g});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new Xi;i.updateFromServerResponse(t);const s=new ts({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Qi(s),s}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ns{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ns.type="NONE";const is=ns;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ss(e,t,n){return`firebase:${e}:${t}:${n}`}class rs{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=ss("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ts._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new rs(Ri(is),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||Ri(is);const r=ss(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=ts._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new rs(s,e,n)):new rs(s,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function os(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(as(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ds(t))return"Blackberry";if(ps(t))return"Webos";if(cs(t))return"Safari";if((t.includes("chrome/")||ls(t))&&!t.includes("edge/"))return"Chrome";if(us(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function as(e=Kt()){return/firefox\//i.test(e)}function cs(e=Kt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ls(e=Kt()){return/crios\//i.test(e)}function hs(e=Kt()){return/iemobile/i.test(e)}function us(e=Kt()){return/android/i.test(e)}function ds(e=Kt()){return/blackberry/i.test(e)}function ps(e=Kt()){return/webos/i.test(e)}function fs(e=Kt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ms(){return function(){const e=Kt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function _s(e=Kt()){return fs(e)||us(e)||ps(e)||ds(e)||/windows phone/i.test(e)||hs(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function gs(e,t=[]){let n;switch(e){case"Browser":n=os(Kt());break;case"Worker":n=`${os(Kt())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.3/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ys{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ws(this),this.idTokenSubscription=new ws(this),this.beforeStateQueue=new vs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ci,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ri(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ei(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Qi(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?vn(e):null;return t&&Ei(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ei(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ri(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ri(e)||this._popupRedirectResolver;Ei(t,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[Ri(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return Ei(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ei(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Cs(e){return vn(e)}class ws{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new fn(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ei(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Si("not implemented")}_getIdTokenResponse(e){return Si("not implemented")}_linkToIdToken(e,t){return Si("not implemented")}_getReauthenticationResolver(e){return Si("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Is extends bs{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Is(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Is(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t){return Vi(e,"POST","/v1/accounts:signInWithPassword",Ui(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Vi(e,"POST","/v1/accounts:signInWithEmailLink",Ui(e,t))}(e,{email:this._email,oobCode:this._password});default:Ii(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return qi(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Vi(e,"POST","/v1/accounts:signInWithEmailLink",Ui(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ii(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Ts(e,t){return Vi(e,"POST","/v1/accounts:signInWithIdp",Ui(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ks extends bs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ii("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=gi(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new ks(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return Ts(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ts(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ts(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hn(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Es{constructor(e){var t,n,i,s,r,o;const a=un(dn(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Ei(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=un(dn(e)).link,n=t?un(dn(t)).deep_link_id:null,i=un(dn(e)).deep_link_id;return(i?un(dn(i)).link:null)||i||n||t||e}(e);try{return new Es(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,t){return Is._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Es.parseLink(t);return Ei(n,"argument-error"),Is._fromEmailAndCode(e,n.code,n.tenantId)}}Ss.PROVIDER_ID="password",Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class $s{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ns extends $s{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rs extends Ns{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Rs.credential(e.oauthAccessToken)}catch(e){return null}}}Rs.FACEBOOK_SIGN_IN_METHOD="facebook.com",Rs.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ps extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ks._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ps.credential(t,n)}catch(e){return null}}}Ps.GOOGLE_SIGN_IN_METHOD="google.com",Ps.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class xs extends Ns{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xs.credential(e.oauthAccessToken)}catch(e){return null}}}xs.GITHUB_SIGN_IN_METHOD="github.com",xs.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Os extends Ns{constructor(){super("twitter.com")}static credential(e,t){return ks._fromParams({providerId:Os.PROVIDER_ID,signInMethod:Os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Os.credentialFromTaggedObject(e)}static credentialFromError(e){return Os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Os.credential(t,n)}catch(e){return null}}}Os.TWITTER_SIGN_IN_METHOD="twitter.com",Os.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await ts._fromIdTokenResponse(e,n,i),r=As(n);return new Ds({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=As(n);return new Ds({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function As(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ls extends Jt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ls.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ls(e,t,n,i)}}function Ms(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ls._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Fs(e,t,n=!1){const i="signIn",s=await Ms(e,i,t),r=await Ds._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}function Us(e,t,n){return async function(e,t){return Fs(Cs(e),t)}(vn(e),Ss.credential(t,n))}const qs="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qs,"1"),this.storage.removeItem(qs),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vs extends Hs{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Kt();return cs(e)||fs(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=_s(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);ms()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vs.type="LOCAL";const js=Vs;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ws extends Hs{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ws.type="SESSION";const zs=Ws;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Bs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ks(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Bs.receivers=[];class Gs{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=Ks("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ys(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Zs(){return void 0!==Ys().WorkerGlobalScope&&"function"==typeof Ys().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Js="firebaseLocalStorageDb",Qs="firebaseLocalStorage",Xs="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function tr(e,t){return e.transaction([Qs],t?"readwrite":"readonly").objectStore(Qs)}function nr(){const e=indexedDB.open(Js,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Qs,{keyPath:Xs})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Qs)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Js);return new er(e).toPromise()}(),t(await nr()))}))}))}async function ir(e,t,n){const i=tr(e,!0).put({[Xs]:t,value:n});return new er(i).toPromise()}function sr(e,t){const n=tr(e,!0).delete(t);return new er(n).toPromise()}class rr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await nr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(Zs()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Gs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nr();return await ir(e,qs,"1"),await sr(e,qs),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ir(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=tr(e,!1).get(t),i=await new er(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>sr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=tr(e,!1).getAll();return new er(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}rr.type="LOCAL";const or=rr;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ar(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Ti("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}new Di(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class cr extends bs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ts(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lr(e){return Fs(e.auth,new cr(e),e.bypassAuthState)}function hr(e){const{auth:t,user:n}=e;return Ei(n,t,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t,n=!1){var i;const{auth:s}=e,r="reauthenticate";try{const i=await Yi(e,Ms(s,r,t,e),n);Ei(i.idToken,s,"internal-error");const o=Gi(i.idToken);Ei(o,s,"internal-error");const{sub:a}=o;return Ei(e.uid===a,s,"user-mismatch"),Ds._forOperation(e,r,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&Ii(s,"user-mismatch"),e}}(n,new cr(e),e.bypassAuthState)}async function ur(e){const{auth:t,user:n}=e;return Ei(n,t,"internal-error"),async function(e,t,n=!1){const i=await Yi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ds._forOperation(e,"link",i)}(n,new cr(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dr{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lr;case"linkViaPopup":case"linkViaRedirect":return ur;case"reauthViaPopup":case"reauthViaRedirect":return hr;default:Ii(this.auth,"internal-error")}}resolve(e){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$i(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const pr=new Di(2e3,1e4);class fr extends dr{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ei(e,this.auth,"internal-error"),e}async onExecution(){$i(1===this.filter.length,"Popup operations only handle one event");const e=Ks();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ti(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ti(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ti(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,pr.get())};e()}}fr.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const mr="pendingRedirect",_r=new Map;class gr extends dr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=_r.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return ss(mr,e.config.apiKey,e.name)}(t),i=function(e){return Ri(e._redirectPersistence)}(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}_r.set(this.auth._key(),e)}return this.bypassAuthState||_r.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function vr(e,t){_r.set(e._key(),t)}async function yr(e,t,n=!1){const i=Cs(e),s=
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e,t){return t?Ri(t):(Ei(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(i,t),r=new gr(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return br(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!br(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ti(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(wr(e))}saveEventToCache(e){this.cachedEventUids.add(wr(e)),this.lastProcessedEventTime=Date.now()}}function wr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function br({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ir=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tr=/^https?/;async function kr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return qi(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Er(e))return}catch(e){}Ii(e,"unauthorized-domain")}function Er(e){const t=Pi(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Tr.test(n))return!1;if(Ir.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Sr=new Di(3e4,6e4);function $r(){const e=Ys().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Nr(e){return new Promise(((t,n)=>{var i,s,r;function o(){$r(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{$r(),n(Ti(e,"network-request-failed"))},timeout:Sr.get()})}if(null===(s=null===(i=Ys().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=Ys().gapi)||void 0===r?void 0:r.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Ys()[t]=()=>{gapi.load?o():n(Ti(e,"network-request-failed"))},ar(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Rr=null,e}))}let Rr=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Pr=new Di(5e3,15e3),xr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Or=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dr(e){const t=e.config;Ei(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ai(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:si},s=Or.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${hn(i).slice(1)}`}async function Ar(e){const t=await function(e){return Rr=Rr||Nr(e),Rr}(e),n=Ys().gapi;return Ei(n,e,"internal-error"),t.open({where:document.body,url:Dr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xr,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=Ti(e,"network-request-failed"),r=Ys().setTimeout((()=>{i(s)}),Pr.get());function o(){Ys().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Lr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Mr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Fr(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lr),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Kt().toLowerCase();n&&(a=ls(l)?"_blank":n),as(l)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Kt()){var t;return fs(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t||"",a),new Mr(null);const u=window.open(t||"",a,h);Ei(u,e,"popup-blocked");try{u.focus()}catch(e){}return new Mr(u)}const Ur="__/auth/handler",qr="emulator/auth/handler";function Hr(e,t,n,i,s,r){Ei(e.config.authDomain,e,"auth-domain-config-required"),Ei(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:si,eventId:s};if(t instanceof $s){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",on(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof Ns){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ur}`;return Ai(e,qr)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${hn(a).slice(1)}`}const Vr="webStorageSupport";const jr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zs,this._completeRedirectFn=yr,this._overrideRedirectResult=vr}async _openPopup(e,t,n,i){var s;$i(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Fr(e,Hr(e,t,n,Pi(),i),Ks())}async _openRedirect(e,t,n,i){var s;return await this._originValidation(e),s=Hr(e,t,n,Pi(),i),Ys().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):($i(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ar(e),n=new Cr(e);return t.register("authEvent",(t=>{Ei(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vr,{type:Vr},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==s&&t(!!s),Ii(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _s()||cs()||fs()}};var Wr,zr="@firebase/auth",Br="0.20.5";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Kr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ei(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Gr(e=ri()){const t=ti(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ti(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(cn(n.getOptions(),null!=t?t:{}))return e;Ii(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:jr,persistence:[or,js,zs]})}Wr="Browser",ei(new yn("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((e,n)=>{Ei(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),Ei(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:s,authDomain:r,clientPlatform:Wr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gs(Wr)},o=new ys(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ri);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ei(new yn("auth-internal",(e=>(e=>new Kr(e))(Cs(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),oi(zr,Br,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wr)),oi(zr,Br,"esm2017");const Yr="/",Zr={home:"/",singIn:"/signin/"},Jr="parking",Qr="parkingPlaces",Xr=we();const eo=be(Xr,(function(e){return!!e}),!1);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
oi("firebase","9.9.3","app");const to=we(function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Yn,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw ni.create("bad-app-name",{appName:String(i)});const s=Jn.get(i);if(s){if(cn(e,s.options)&&cn(n,s.config))return s;throw ni.create("duplicate-app",{appName:i})}const r=new bn(i);for(const e of Qn.values())r.addComponent(e);const o=new ii(e,n,r);return Jn.set(i,o),o}({apiKey:"AIzaSyCWz0FIugCN0THXx1FYvhtR0qnLkONKELI",authDomain:"openmedia-app.firebaseapp.com",databaseURL:"https://openmedia-parking-default-rtdb.europe-west1.firebasedatabase.app",projectId:"openmedia-app",storageBucket:"openmedia-app.appspot.com",messagingSenderId:"36566002866",appId:"1:36566002866:web:681fa8fd77c066dd1c6dab"}));const no=function(){const{subscribe:e}=we(Gr());return{subscribe:e}}(),io="@firebase/database",so="0.13.5";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let ro="";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class oo{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),tn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:en(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ao{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const co=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new oo(t)}}catch(e){}return new ao},lo=co("localStorage"),ho=co("sessionStorage"),uo=new $n("@firebase/database"),po=function(){let e=1;return function(){return e++}}(),fo=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,Mt(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new pn;n.update(t);const i=n.digest();return qt.encodeByteArray(i)},mo=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=mo.apply(null,i):t+="object"==typeof i?tn(i):i,t+=" "}return t};let _o=null,go=!0;const vo=function(...e){var t,n;if(!0===go&&(go=!1,null===_o&&!0===ho.get("logging_enabled")&&(t=!0,Mt(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(uo.logLevel=In.VERBOSE,_o=uo.log.bind(uo),n&&ho.set("logging_enabled",!0)):"function"==typeof t?_o=t:(_o=null,ho.remove("logging_enabled")))),_o){const t=mo.apply(null,e);_o(t)}},yo=function(e){return function(...t){vo(e,...t)}},Co=function(...e){const t="FIREBASE INTERNAL ERROR: "+mo(...e);uo.error(t)},wo=function(...e){const t=`FIREBASE FATAL ERROR: ${mo(...e)}`;throw uo.error(t),new Error(t)},bo=function(...e){const t="FIREBASE WARNING: "+mo(...e);uo.warn(t)},Io=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},To="[MIN_NAME]",ko="[MAX_NAME]",Eo=function(e,t){if(e===t)return 0;if(e===To||t===ko)return-1;if(t===To||e===ko)return 1;{const n=Do(e),i=Do(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},So=function(e,t){return e===t?0:e<t?-1:1},$o=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+tn(t))},No=function(e){if("object"!=typeof e||null===e)return tn(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=tn(t[i]),n+=":",n+=No(e[t[i]]);return n+="}",n},Ro=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function Po(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const xo=function(e){Mt(!Io(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Oo=new RegExp("^-?(0*)\\d{1,10}$"),Do=function(e){if(Oo.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Ao=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw bo("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Lo=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Mo{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){bo(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fo{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(vo("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bo(e)}}class Uo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Uo.OWNER="owner";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const qo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ho="websocket",Vo="long_polling";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class jo{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lo.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Wo(e,t,n){let i;if(Mt("string"==typeof t,"typeof type must == string"),Mt("object"==typeof n,"typeof params must == object"),t===Ho)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Vo)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return Po(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zo{constructor(){this.counters_={}}incrementCounter(e,t=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Wt(this.counters_)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Bo={},Ko={};function Go(e){const t=e.toString();return Bo[t]||(Bo[t]=new zo),Bo[t]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Yo{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Ao((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Zo="start";class Jo{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yo(e),this.stats_=Go(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Wo(t,Vo,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Yo(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qo(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Zo)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&qo.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jo.forceAllow_=!0}static forceDisallow(){Jo.forceDisallow_=!0}static isAvailable(){return!!Jo.forceAllow_||!(Jo.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ht(t),i=Ro(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=tn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Qo{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=po(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Qo.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){vo("frame writing exception"),e.stack&&vo(e.stack),vo(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||vo("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{vo("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Xo=null;"undefined"!=typeof MozWebSocket?Xo=MozWebSocket:"undefined"!=typeof WebSocket&&(Xo=WebSocket);class ea{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yo(this.connId),this.stats_=Go(t),this.connURL=ea.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&qo.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),Wo(e,Ho,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lo.set("previous_websocket_failure",!0);try{let e;Zt(),this.mySock=new Xo(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ea.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Xo&&!ea.forceDisallow_}static previouslyFailed(){return lo.isInMemoryStorage||!0===lo.get("previous_websocket_failure")}markConnectionHealthy(){lo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=en(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Mt(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=tn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ro(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ea.responsesRequiredToBeHealthy=2,ea.healthyTimeout=3e4;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ta{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jo,ea]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ea&&ea.isAvailable();let n=t&&!ea.previouslyFailed();if(e.webSocketOnly&&(t||bo("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ea];else{const e=this.transports_=[];for(const t of ta.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ta.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ta.globalTransportInitialized_=!1;class na{constructor(e,t,n,i,s,r,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yo("c:"+this.id+":"),this.transportManager_=new ta(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Lo((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$o("t",e),n=$o("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$o("t",e),n=$o("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$o("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Co("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Co("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&bo("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Lo((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lo((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ia{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sa{constructor(e){this.allowedEvents_=e,this.listeners_={},Mt(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Mt(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ra extends sa{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Gt()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ra}getInitialEvent(e){return Mt("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oa{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function aa(){return new oa("")}function ca(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function la(e){return e.pieces_.length-e.pieceNum_}function ha(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new oa(e.pieces_,t)}function ua(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function da(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function pa(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new oa(t,0)}function fa(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof oa)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new oa(n,0)}function ma(e){return e.pieceNum_>=e.pieces_.length}function _a(e,t){const n=ca(e),i=ca(t);if(null===n)return t;if(n===i)return _a(ha(e),ha(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ga(e,t){if(la(e)!==la(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function va(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(la(e)>la(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class ya{constructor(e,t){this.errorPrefix_=t,this.parts_=da(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=gn(this.parts_[e]);Ca(this)}}function Ca(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+wa(e))}function wa(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ba extends sa{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new ba}getInitialEvent(e){return Mt("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ia=1e3;class Ta extends ia{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ta.nextPersistentConnectionId_++,this.log_=yo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ia,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Zt())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ba.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ra.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(tn(s)),Mt(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new Bt,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),Mt(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Mt(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Ta.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&sn(e,"w")){const n=rn(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();bo(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=nn(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=nn(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Mt(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+tn(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Co("Unrecognized action received from server: "+tn(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Mt(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Ia),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ta.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},c=function(e){Mt(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);r?vo("getToken() completed but was canceled"):(vo("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new na(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{bo(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&bo(e),a())}}}interrupt(e){vo("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vo("Resuming connection for reason: "+e),delete this.interruptReasons_[e],on(this.interruptReasons_)&&(this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>No(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new oa(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){vo("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){vo("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+ro.replace(/\./g,"-")]=1,Gt()?e["framework.cordova"]=1:Yt()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ra.getInstance().currentlyOnline();return on(this.interruptReasons_)&&e}}Ta.nextPersistentConnectionId_=0,Ta.nextConnectionId_=0;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ka{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ka(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ea{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new ka(To,e),i=new ka(To,t);return 0!==this.compare(n,i)}minPost(){return ka.MIN}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Sa;class $a extends Ea{static get __EMPTY_NODE(){return Sa}static set __EMPTY_NODE(e){Sa=e}compare(e,t){return Eo(e.name,t.name)}isDefinedOn(e){throw Ft("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ka.MIN}maxPost(){return new ka(ko,Sa)}makePost(e,t){return Mt("string"==typeof e,"KeyIndex indexValue must always be a string."),new ka(e,Sa)}toString(){return".key"}}const Na=new $a;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ra{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pa{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Pa.RED,this.left=null!=i?i:xa.EMPTY_NODE,this.right=null!=s?s:xa.EMPTY_NODE}copy(e,t,n,i,s){return new Pa(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xa.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return xa.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pa.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pa.RED=!0,Pa.BLACK=!1;class xa{constructor(e,t=xa.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new xa(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pa.BLACK,null,null))}remove(e){return new xa(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pa.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ra(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ra(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ra(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ra(this.root_,null,this.comparator_,!0,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Oa(e,t){return Eo(e.name,t.name)}function Da(e,t){return Eo(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Aa;xa.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Pa(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const La=function(e){return"number"==typeof e?"number:"+xo(e):"string:"+e},Ma=function(e){if(e.isLeafNode()){const t=e.val();Mt("string"==typeof t||"number"==typeof t||"object"==typeof t&&sn(t,".sv"),"Priority must be a string or number.")}else Mt(e===Aa||e.isEmpty(),"priority of unexpected type.");Mt(e===Aa||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let Fa,Ua,qa;class Ha{constructor(e,t=Ha.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Mt(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ma(this.priorityNode_)}static set __childrenNodeConstructor(e){Fa=e}static get __childrenNodeConstructor(){return Fa}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ha(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ha.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ma(e)?this:".priority"===ca(e)?this.priorityNode_:Ha.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ha.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ca(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Mt(".priority"!==n||1===la(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ha.__childrenNodeConstructor.EMPTY_NODE.updateChild(ha(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+La(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?xo(this.value_):this.value_,this.lazyHash_=fo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ha.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ha.__childrenNodeConstructor?-1:(Mt(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Ha.VALUE_TYPE_ORDER.indexOf(t),s=Ha.VALUE_TYPE_ORDER.indexOf(n);return Mt(i>=0,"Unknown leaf type: "+t),Mt(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Ha.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Va=new class extends Ea{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Eo(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ka.MIN}maxPost(){return new ka(ko,new Ha("[PRIORITY-POST]",qa))}makePost(e,t){const n=Ua(e);return new ka(t,new Ha("[PRIORITY-POST]",n))}toString(){return".priority"}},ja=Math.log(2);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wa{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ja,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const za=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Pa(a,o.node,Pa.BLACK,null,null);{const c=parseInt(r/2,10)+t,l=s(t,c),h=s(c+1,i);return o=e[c],a=n?n(o):o,new Pa(a,o.node,Pa.BLACK,l,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),h=e[r],u=n?n(h):h;c(new Pa(u,h.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Pa.BLACK):(a(i,Pa.BLACK),a(i,Pa.RED))}return r}(new Wa(e.length));return new xa(i||t,r)};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Ba;const Ka={};class Ga{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Mt(Ka&&Va,"ChildrenNode.ts has not been loaded"),Ba=Ba||new Ga({".priority":Ka},{".priority":Va}),Ba}get(e){const t=rn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof xa?t:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,t){Mt(e!==Na,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(ka.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?za(n,e.getCompare()):Ka;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=r,new Ga(l,c)}addToIndexes(e,t){const n=an(this.indexes_,((n,i)=>{const s=rn(this.indexSet_,i);if(Mt(s,"Missing index implementation for "+i),n===Ka){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(ka.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),za(n,s.getCompare())}return Ka}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new ka(e.name,i))),s.insert(e,e.node)}}));return new Ga(n,this.indexSet_)}removeFromIndexes(e,t){const n=an(this.indexes_,(n=>{if(n===Ka)return n;{const i=t.get(e.name);return i?n.remove(new ka(e.name,i)):n}}));return new Ga(n,this.indexSet_)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Ya;class Za{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ma(this.priorityNode_),this.children_.isEmpty()&&Mt(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ya||(Ya=new Za(new xa(Da),null,Ga.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ya}updatePriority(e){return this.children_.isEmpty()?this:new Za(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ya:t}}getChild(e){const t=ca(e);return null===t?this:this.getImmediateChild(t).getChild(ha(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Mt(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new ka(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Ya:this.priorityNode_;return new Za(i,r,s)}}updateChild(e,t){const n=ca(e);if(null===n)return t;{Mt(".priority"!==ca(e)||1===la(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ha(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Va,((r,o)=>{t[r]=o.val(e),n++,s&&Za.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+La(this.getPriority().val())+":"),this.forEachChild(Va,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":fo(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new ka(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ka(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ka(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,ka.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,ka.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ja?-1:0}withIndex(e){if(e===Na||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Za(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Na||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Va),n=t.getIterator(Va);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Na?null:this.indexMap_.get(e.toString())}}Za.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Ja=new class extends Za{constructor(){super(new xa(Da),Za.EMPTY_NODE,Ga.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Za.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(ka,{MIN:{value:new ka(To,Za.EMPTY_NODE)},MAX:{value:new ka(ko,Ja)}}),$a.__EMPTY_NODE=Za.EMPTY_NODE,Ha.__childrenNodeConstructor=Za,Aa=Ja,function(e){qa=e}(Ja);function Qa(e,t=null){if(null===e)return Za.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Mt(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ha(e,Qa(t))}if(e instanceof Array){let n=Za.EMPTY_NODE;return Po(e,((t,i)=>{if(sn(e,t)&&"."!==t.substring(0,1)){const e=Qa(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Qa(t))}{const n=[];let i=!1;if(Po(e,((e,t)=>{if("."!==e.substring(0,1)){const s=Qa(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new ka(e,s)))}})),0===n.length)return Za.EMPTY_NODE;const s=za(n,Oa,(e=>e.name),Da);if(i){const e=za(n,Va.getCompare());return new Za(s,Qa(t),new Ga({".priority":e},{".priority":Va}))}return new Za(s,Qa(t),Ga.Default)}}!function(e){Ua=e}(Qa);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Xa extends Ea{constructor(e){super(),this.indexPath_=e,Mt(!ma(e)&&".priority"!==ca(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Eo(e.name,t.name):s}makePost(e,t){const n=Qa(e),i=Za.EMPTY_NODE.updateChild(this.indexPath_,n);return new ka(t,i)}maxPost(){const e=Za.EMPTY_NODE.updateChild(this.indexPath_,Ja);return new ka(ko,e)}toString(){return da(this.indexPath_,0).join("/")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ec=new class extends Ea{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Eo(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ka.MIN}maxPost(){return ka.MAX}makePost(e,t){const n=Qa(e);return new ka(t,n)}toString(){return".value"}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function tc(e){return{type:"value",snapshotNode:e}}function nc(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ic(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function sc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class rc{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){Mt(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(ic(t,o)):Mt(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(nc(t,n)):r.trackChildChange(sc(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Va,((e,i)=>{t.hasChild(e)||n.trackChildChange(ic(e,i))})),t.isLeafNode()||t.forEachChild(Va,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(sc(t,i,s))}else n.trackChildChange(nc(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Za.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class oc{constructor(e){this.indexedFilter_=new rc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=oc.getStartPost_(e),this.endPost_=oc.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new ka(t,n))||(n=Za.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Za.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Za.EMPTY_NODE);const s=this;return t.forEachChild(Va,((e,t)=>{s.matches(new ka(e,t))||(i=i.updateImmediateChild(e,Za.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ac{constructor(e){this.rangedFilter_=new oc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new ka(t,n))||(n=Za.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Za.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Za.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(Za.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;for(;r.hasNext();){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);a&&o<this.limit_&&s(t,n)<=0?o++:i=i.updateImmediateChild(t.name,Za.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;Mt(o.numChildren()===this.limit_,"");const a=new ka(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:r(h,a);if(l&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(sc(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(ic(t,e));const n=o.updateImmediateChild(t,Za.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=s&&s.trackChildChange(nc(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:l&&r(c,a)>=0?(null!=s&&(s.trackChildChange(ic(c.name,c.node)),s.trackChildChange(nc(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,Za.EMPTY_NODE)):e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Va}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Mt(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Mt(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:To}hasEnd(){return this.endSet_}getIndexEndValue(){return Mt(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Mt(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ko}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Mt(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Va}copy(){const e=new cc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lc(e){const t={};if(e.isDefault())return t;let n;return e.index_===Va?n="$priority":e.index_===ec?n="$value":e.index_===Na?n="$key":(Mt(e.index_ instanceof Xa,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=tn(n),e.startSet_&&(t.startAt=tn(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+tn(e.indexStartName_))),e.endSet_&&(t.endAt=tn(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+tn(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function hc(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Va&&(t.i=e.index_.toString()),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class uc extends ia{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=yo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Mt(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=uc.getListenId_(e,n),o={};this.listens_[r]=o;const a=lc(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),rn(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=uc.getListenId_(e,t);delete this.listens_[n]}get(e){const t=lc(e._queryParams),n=e._path.toString(),i=new Bt;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hn(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=en(o.responseText)}catch(e){bo("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&bo("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dc{constructor(){this.rootNode_=Za.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function pc(){return{value:null,children:new Map}}function fc(e,t,n){if(ma(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ca(t);e.children.has(i)||e.children.set(i,pc());fc(e.children.get(i),t=ha(t),n)}}function mc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,((e,i)=>{mc(i,new oa(t.toString()+"/"+e),n)}))}class _c{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Po(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new _c(e);const n=1e4+2e4*Math.random();Lo(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Po(e,((e,i)=>{i>0&&sn(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Lo(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var vc;function yc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(vc||(vc={}));class Cc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=vc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ma(this.path)){if(null!=this.affectedTree.value)return Mt(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new oa(e));return new Cc(aa(),t,this.revert)}}return Mt(ca(this.path)===e,"operationForChild called for unrelated child."),new Cc(ha(this.path),this.affectedTree,this.revert)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wc{constructor(e,t){this.source=e,this.path=t,this.type=vc.LISTEN_COMPLETE}operationForChild(e){return ma(this.path)?new wc(this.source,aa()):new wc(this.source,ha(this.path))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bc{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=vc.OVERWRITE}operationForChild(e){return ma(this.path)?new bc(this.source,aa(),this.snap.getImmediateChild(e)):new bc(this.source,ha(this.path),this.snap)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ic{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=vc.MERGE}operationForChild(e){if(ma(this.path)){const t=this.children.subtree(new oa(e));return t.isEmpty()?null:t.value?new bc(this.source,aa(),t.value):new Ic(this.source,aa(),t)}return Mt(ca(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ic(this.source,ha(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tc{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ma(e))return this.isFullyInitialized()&&!this.filtered_;const t=ca(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ec(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ft("Should only compare child_ events.");const i=new ka(t.childName,t.snapshotNode),s=new ka(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Sc(e,t){return{eventCache:e,serverCache:t}}function $c(e,t,n,i){return Sc(new Tc(t,n,i),e.serverCache)}function Nc(e,t,n,i){return Sc(e.eventCache,new Tc(t,n,i))}function Rc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Pc(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let xc;class Oc{constructor(e,t=(()=>(xc||(xc=new xa(So)),xc))()){this.value=e,this.children=t}static fromObject(e){let t=new Oc(null);return Po(e,((e,n)=>{t=t.set(new oa(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:aa(),value:this.value};if(ma(e))return null;{const n=ca(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(ha(e),t);if(null!=s){return{path:fa(new oa(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ma(e))return this;{const t=ca(e),n=this.children.get(t);return null!==n?n.subtree(ha(e)):new Oc(null)}}set(e,t){if(ma(e))return new Oc(t,this.children);{const n=ca(e),i=(this.children.get(n)||new Oc(null)).set(ha(e),t),s=this.children.insert(n,i);return new Oc(this.value,s)}}remove(e){if(ma(e))return this.children.isEmpty()?new Oc(null):new Oc(null,this.children);{const t=ca(e),n=this.children.get(t);if(n){const i=n.remove(ha(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Oc(null):new Oc(this.value,s)}return this}}get(e){if(ma(e))return this.value;{const t=ca(e),n=this.children.get(t);return n?n.get(ha(e)):null}}setTree(e,t){if(ma(e))return t;{const n=ca(e),i=(this.children.get(n)||new Oc(null)).setTree(ha(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Oc(this.value,s)}}fold(e){return this.fold_(aa(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(fa(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,aa(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ma(e))return null;{const i=ca(e),s=this.children.get(i);return s?s.findOnPath_(ha(e),fa(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,aa(),t)}foreachOnPath_(e,t,n){if(ma(e))return this;{this.value&&n(t,this.value);const i=ca(e),s=this.children.get(i);return s?s.foreachOnPath_(ha(e),fa(t,i),n):new Oc(null)}}foreach(e){this.foreach_(aa(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(fa(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dc{constructor(e){this.writeTree_=e}static empty(){return new Dc(new Oc(null))}}function Ac(e,t,n){if(ma(t))return new Dc(new Oc(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=_a(s,t);return r=r.updateChild(o,n),new Dc(e.writeTree_.set(s,r))}{const i=new Oc(n),s=e.writeTree_.setTree(t,i);return new Dc(s)}}}function Lc(e,t,n){let i=e;return Po(n,((e,n)=>{i=Ac(i,fa(t,e),n)})),i}function Mc(e,t){if(ma(t))return Dc.empty();{const n=e.writeTree_.setTree(t,new Oc(null));return new Dc(n)}}function Fc(e,t){return null!=Uc(e,t)}function Uc(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(_a(n.path,t)):null}function qc(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Va,((e,n)=>{t.push(new ka(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new ka(e,n.value))})),t}function Hc(e,t){if(ma(t))return e;{const n=Uc(e,t);return new Dc(null!=n?new Oc(n):e.writeTree_.subtree(t))}}function Vc(e){return e.writeTree_.isEmpty()}function jc(e,t){return Wc(aa(),e.writeTree_,t)}function Wc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(Mt(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Wc(fa(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(fa(e,".priority"),i)),n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function zc(e,t){return sl(t,e)}function Bc(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Mt(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Kc(t,i.path)?s=!1:va(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=Yc(e.allWrites,Gc,aa()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Mc(e.visibleWrites,i.path);else{Po(i.children,(t=>{e.visibleWrites=Mc(e.visibleWrites,fa(i.path,t))}))}return!0}return!1}function Kc(e,t){if(e.snap)return va(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&va(fa(e.path,n),t))return!0;return!1}function Gc(e){return e.visible}function Yc(e,t,n){let i=Dc.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)va(n,e)?(t=_a(n,e),i=Ac(i,t,r.snap)):va(e,n)&&(t=_a(e,n),i=Ac(i,aa(),r.snap.getChild(t)));else{if(!r.children)throw Ft("WriteRecord should have .snap or .children");if(va(n,e))t=_a(n,e),i=Lc(i,t,r.children);else if(va(e,n))if(t=_a(e,n),ma(t))i=Lc(i,aa(),r.children);else{const e=rn(r.children,ca(t));if(e){const n=e.getChild(ha(t));i=Ac(i,aa(),n)}}}}}return i}function Zc(e,t,n,i,s){if(i||s){const r=Hc(e.visibleWrites,t);if(!s&&Vc(r))return n;if(s||null!=n||Fc(r,aa())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(va(e.path,t)||va(t,e.path))};return jc(Yc(e.allWrites,r,t),n||Za.EMPTY_NODE)}return null}{const i=Uc(e.visibleWrites,t);if(null!=i)return i;{const i=Hc(e.visibleWrites,t);if(Vc(i))return n;if(null!=n||Fc(i,aa())){return jc(i,n||Za.EMPTY_NODE)}return null}}}function Jc(e,t,n,i){return Zc(e.writeTree,e.treePath,t,n,i)}function Qc(e,t){return function(e,t,n){let i=Za.EMPTY_NODE;const s=Uc(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Va,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=Hc(e.visibleWrites,t);return n.forEachChild(Va,((e,t)=>{const n=jc(Hc(s,new oa(e)),t);i=i.updateImmediateChild(e,n)})),qc(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return qc(Hc(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Xc(e,t,n,i){return function(e,t,n,i,s){Mt(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=fa(t,n);if(Fc(e.visibleWrites,r))return null;{const t=Hc(e.visibleWrites,r);return Vc(t)?s.getChild(n):jc(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function el(e,t){return function(e,t){return Uc(e.visibleWrites,t)}(e.writeTree,fa(e.treePath,t))}function tl(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const c=Hc(e.visibleWrites,t),l=Uc(c,aa());if(null!=l)a=l;else{if(null==n)return[];a=jc(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<s;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function nl(e,t,n){return function(e,t,n,i){const s=fa(t,n),r=Uc(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return jc(Hc(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function il(e,t){return sl(fa(e.treePath,t),e.writeTree)}function sl(e,t){return{treePath:e,writeTree:t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rl{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Mt("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Mt(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,sc(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,ic(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,nc(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw Ft("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,sc(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ol=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class al{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Tc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nl(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Pc(this.viewCache_),s=tl(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cl(e,t,n,i,s){const r=new rl;let o,a;if(n.type===vc.OVERWRITE){const c=n;c.source.fromUser?o=ul(e,t,c.path,c.snap,i,s,r):(Mt(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!ma(c.path),o=hl(e,t,c.path,c.snap,i,s,a,r))}else if(n.type===vc.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,c)=>{const l=fa(n,i);dl(t,ca(l))&&(a=ul(e,a,l,c,s,r,o))})),i.foreach(((i,c)=>{const l=fa(n,i);dl(t,ca(l))||(a=ul(e,a,l,c,s,r,o))})),a}(e,t,c.path,c.children,i,s,r):(Mt(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=fl(e,t,c.path,c.children,i,s,a,r))}else if(n.type===vc.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=el(i,n))return t;{const a=new al(i,t,s),c=t.eventCache.getNode();let l;if(ma(n)||".priority"===ca(n)){let n;if(t.serverCache.isFullyInitialized())n=Jc(i,Pc(t));else{const e=t.serverCache.getNode();Mt(e instanceof Za,"serverChildren would be complete if leaf node"),n=Qc(i,e)}l=e.filter.updateFullNode(c,n,r)}else{const s=ca(n);let h=nl(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=c.getImmediateChild(s)),l=null!=h?e.filter.updateChild(c,s,h,ha(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(c,s,Za.EMPTY_NODE,ha(n),a,r):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Jc(i,Pc(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=el(i,aa()),$c(t,l,o,e.filter.filtersNodes())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=el(s,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(ma(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return hl(e,t,n,c.getNode().getChild(n),s,r,a,o);if(ma(n)){let i=new Oc(null);return c.getNode().forEachChild(Na,((e,t)=>{i=i.set(new oa(e),t)})),fl(e,t,n,i,s,r,a,o)}return t}{let l=new Oc(null);return i.foreach(((e,t)=>{const i=fa(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),fl(e,t,n,l,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==vc.LISTEN_COMPLETE)throw Ft("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=Nc(t,r.getNode(),r.isFullyInitialized()||ma(n),r.isFiltered());return ll(e,o,n,i,ol,s)}(e,t,n.path,i,r)}const c=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Rc(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(tc(Rc(t)))}}(t,o,c),{viewCache:o,changes:c}}function ll(e,t,n,i,s,r){const o=t.eventCache;if(null!=el(i,n))return t;{let a,c;if(ma(n))if(Mt(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Pc(t),s=Qc(i,n instanceof Za?n:Za.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=Jc(i,Pc(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const l=ca(n);if(".priority"===l){Mt(1===la(n),"Can't have a priority with additional path components");const s=o.getNode();c=t.serverCache.getNode();const r=Xc(i,n,s,c);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=ha(n);let u;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Xc(i,n,o.getNode(),c);u=null!=e?o.getNode().getImmediateChild(l).updateChild(h,e):o.getNode().getImmediateChild(l)}else u=nl(i,l,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),l,u,h,s,r):o.getNode()}}return $c(t,a,o.isFullyInitialized()||ma(n),e.filter.filtersNodes())}}function hl(e,t,n,i,s,r,o,a){const c=t.serverCache;let l;const h=o?e.filter:e.filter.getIndexedFilter();if(ma(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),e,null)}else{const e=ca(n);if(!c.isCompleteForPath(n)&&la(n)>1)return t;const s=ha(n),r=c.getNode().getImmediateChild(e).updateChild(s,i);l=".priority"===e?h.updatePriority(c.getNode(),r):h.updateChild(c.getNode(),e,r,s,ol,null)}const u=Nc(t,l,c.isFullyInitialized()||ma(n),h.filtersNodes());return ll(e,u,n,s,new al(s,u,r),a)}function ul(e,t,n,i,s,r,o){const a=t.eventCache;let c,l;const h=new al(s,t,r);if(ma(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=$c(t,l,!0,e.filter.filtersNodes());else{const s=ca(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=$c(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=ha(n),l=a.getNode().getImmediateChild(s);let u;if(ma(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===ua(r)&&e.getChild(pa(r)).isEmpty()?e:e.updateChild(r,i):Za.EMPTY_NODE}if(l.equals(u))c=t;else{c=$c(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function dl(e,t){return e.eventCache.isCompleteForChild(t)}function pl(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function fl(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=ma(n)?i:new Oc(null).setTree(n,i);const h=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const c=pl(0,t.serverCache.getNode().getImmediateChild(n),i);l=hl(e,l,new oa(n),c,s,r,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!c){const c=pl(0,t.serverCache.getNode().getImmediateChild(n),i);l=hl(e,l,new oa(n),c,s,r,o,a)}})),l}class ml{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new rc(n.getIndex()),s=(r=n).loadsAllData()?new rc(r.getIndex()):r.hasLimit()?new ac(r):new oc(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(Za.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(Za.EMPTY_NODE,a.getNode(),null),h=new Tc(c,o.isFullyInitialized(),i.filtersNodes()),u=new Tc(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Sc(u,h),this.eventGenerator_=new kc(this.query_)}get query(){return this.query_}}function _l(e,t){const n=Pc(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ma(t)&&!n.getImmediateChild(ca(t)).isEmpty())?n.getChild(t):null}function gl(e){return 0===e.eventRegistrations_.length}function vl(e,t,n){const i=[];if(n){Mt(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function yl(e,t,n,i){t.type===vc.MERGE&&null!==t.source.queryId&&(Mt(Pc(e.viewCache_),"We should always have a full cache before handling merges"),Mt(Rc(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=cl(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,Mt(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Mt(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Mt(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Cl(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Cl(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ec(e,s,"child_removed",t,i,n),Ec(e,s,"child_added",t,i,n),Ec(e,s,"child_moved",r,i,n),Ec(e,s,"child_changed",t,i,n),Ec(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let wl,bl;class Il{constructor(){this.views=new Map}}function Tl(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return Mt(null!=r,"SyncTree gave us an op for an invalid query."),yl(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(yl(r,t,n,i));return s}}function kl(e,t,n,i,s,r){const o=function(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=Jc(n,s?i:null),r=!1;e?r=!0:i instanceof Za?(e=Qc(n,i),r=!1):(e=Za.EMPTY_NODE,r=!1);const o=Sc(new Tc(e,r,!1),new Tc(i,s,!1));return new ml(t,o)}return o}(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Va,((e,t)=>{i.push(nc(e,t))}));return n.isFullyInitialized()&&i.push(tc(n.getNode())),Cl(e,i,n.getNode(),t)}(o,n)}function El(e,t,n,i){const s=t._queryIdentifier,r=[];let o=[];const a=Pl(e);if("default"===s)for(const[t,s]of e.views.entries())o=o.concat(vl(s,n,i)),gl(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||r.push(s.query));else{const t=e.views.get(s);t&&(o=o.concat(vl(t,n,i)),gl(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!Pl(e)&&r.push(new(Mt(wl,"Reference.ts has not been loaded"),wl)(t._repo,t._path)),{removed:r,events:o}}function Sl(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function $l(e,t){let n=null;for(const i of e.views.values())n=n||_l(i,t);return n}function Nl(e,t){if(t._queryParams.loadsAllData())return xl(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Rl(e,t){return null!=Nl(e,t)}function Pl(e){return null!=xl(e)}function xl(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Ol=1;class Dl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oc(null),this.pendingWriteTree_={visibleWrites:Dc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Al(e,t,n,i,s){return function(e,t,n,i,s){Mt(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Ac(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?Hl(e,new bc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ll(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Bc(e.pendingWriteTree_,t)){let t=new Oc(null);return null!=i.snap?t=t.set(aa(),!0):Po(i.children,(e=>{t=t.set(new oa(e),!0)})),Hl(e,new Cc(i.path,t,n))}return[]}function Ml(e,t,n){return Hl(e,new bc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Fl(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||Rl(o,t))){const c=El(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>Pl(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Pl(t)){return[xl(t)]}{let e=[];return t&&(e=Sl(t)),Po(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=Wl(e,i);e.listenProvider_.startListening(Zl(s),zl(e,s),r.hashFn,r.onComplete)}}}if(!s&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Zl(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Bl(t));e.listenProvider_.stopListening(Zl(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Bl(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return a}function Ul(e,t,n,i=!1){const s=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=_a(e,s);r=r||$l(t,n),o=o||Pl(t)}));let a,c=e.syncPointTree_.get(s);if(c?(o=o||Pl(c),r=r||$l(c,aa())):(c=new Il,e.syncPointTree_=e.syncPointTree_.set(s,c)),null!=r)a=!0;else{a=!1,r=Za.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=$l(t,aa());n&&(r=r.updateImmediateChild(e,n))}))}const l=Rl(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=Bl(t);Mt(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ol++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=kl(c,t,n,zc(e.pendingWriteTree_,s),r,a);if(!l&&!o&&!i){const n=Nl(c,t);h=h.concat(function(e,t,n){const i=t._path,s=zl(e,t),r=Wl(e,n),o=e.listenProvider_.startListening(Zl(t),s,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(s)Mt(!Pl(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!ma(e)&&t&&Pl(t))return[xl(t).query];{let e=[];return t&&(e=e.concat(Sl(t).map((e=>e.query)))),Po(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Zl(i),zl(e,i))}}return o}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,n))}return h}function ql(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=$l(n,_a(e,t));if(i)return i}));return Zc(i,t,s,n,!0)}function Hl(e,t){return Vl(t,e.syncPointTree_,null,zc(e.pendingWriteTree_,aa()))}function Vl(e,t,n,i){if(ma(e.path))return jl(e,t,n,i);{const s=t.get(aa());null==n&&null!=s&&(n=$l(s,aa()));let r=[];const o=ca(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=il(i,o);r=r.concat(Vl(a,c,e,t))}return s&&(r=r.concat(Tl(s,e,i,n))),r}}function jl(e,t,n,i){const s=t.get(aa());null==n&&null!=s&&(n=$l(s,aa()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=il(i,t),c=e.operationForChild(t);c&&(r=r.concat(jl(c,s,o,a)))})),s&&(r=r.concat(Tl(s,e,i,n))),r}function Wl(e,t){const n=t.query,i=zl(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Za.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Kl(e,n);if(i){const n=Gl(i),s=n.path,r=n.queryId,o=_a(s,t);return Yl(e,s,new wc(yc(r),o))}return[]}(e,n._path,i):function(e,t){return Hl(e,new wc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Fl(e,n,null,i)}}}}function zl(e,t){const n=Bl(t);return e.queryToTagMap.get(n)}function Bl(e){return e._path.toString()+"$"+e._queryIdentifier}function Kl(e,t){return e.tagToQueryMap.get(t)}function Gl(e){const t=e.indexOf("$");return Mt(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new oa(e.substr(0,t))}}function Yl(e,t,n){const i=e.syncPointTree_.get(t);Mt(i,"Missing sync point for query tag that we're tracking");return Tl(i,n,zc(e.pendingWriteTree_,t),null)}function Zl(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Mt(bl,"Reference.ts has not been loaded"),bl)(e._repo,e._path):e}class Jl{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Jl(t)}node(){return this.node_}}class Ql{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=fa(this.path_,e);return new Ql(this.syncTree_,t)}node(){return ql(this.syncTree_,this.path_)}}const Xl=function(e,t,n){return e&&"object"==typeof e?(Mt(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?eh(e[".sv"],t,n):"object"==typeof e[".sv"]?th(e[".sv"],t):void Mt(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},eh=function(e,t,n){if("timestamp"===e)return n.timestamp;Mt(!1,"Unexpected server value: "+e)},th=function(e,t,n){e.hasOwnProperty("increment")||Mt(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Mt(!1,"Unexpected increment value: "+i);const s=t.node();if(Mt(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},nh=function(e,t,n){return ih(e,new Jl(t),n)};function ih(e,t,n){const i=e.getPriority().val(),s=Xl(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Xl(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Ha(r,Qa(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Ha(s))),i.forEachChild(Va,((e,i)=>{const s=ih(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function rh(e,t){let n=t instanceof oa?t:new oa(t),i=e,s=ca(n);for(;null!==s;){const e=rn(i.node.children,s)||{children:{},childCount:0};i=new sh(s,i,e),n=ha(n),s=ca(n)}return i}function oh(e){return e.node.value}function ah(e,t){e.node.value=t,dh(e)}function ch(e){return e.node.childCount>0}function lh(e,t){Po(e.node.children,((n,i)=>{t(new sh(n,e,i))}))}function hh(e,t,n,i){n&&!i&&t(e),lh(e,(e=>{hh(e,t,!0,i)})),n&&i&&t(e)}function uh(e){return new oa(null===e.parent?e.name:uh(e.parent)+"/"+e.name)}function dh(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===oh(e)&&!ch(e)}(n),s=sn(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,dh(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,dh(e))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.parent,e.name,e)}const ph=/[\[\].#$\/\u0000-\u001F\u007F]/,fh=/[\[\].#$\u0000-\u001F\u007F]/,mh=10485760,_h=function(e){return"string"==typeof e&&0!==e.length&&!ph.test(e)},gh=function(e){return"string"==typeof e&&0!==e.length&&!fh.test(e)},vh=function(e,t,n){const i=n instanceof oa?new ya(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+wa(i));if("function"==typeof t)throw new Error(e+"contains a function "+wa(i)+" with contents = "+t.toString());if(Io(t))throw new Error(e+"contains "+t.toString()+" "+wa(i));if("string"==typeof t&&t.length>mh/3&&gn(t)>mh)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+wa(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(Po(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!_h(t)))throw new Error(e+" contains an invalid key ("+t+") "+wa(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=gn(t),Ca(e)}(i,t),vh(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=gn(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+wa(i)+" in addition to actual children.")}},yh=function(e,t,n,i){if(!(i&&void 0===n||gh(n)))throw new Error(_n(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ch=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!_h(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),gh(e)}(n))throw new Error(_n(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class wh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bh(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||ga(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Ih(e,t,n){bh(e,n),kh(e,(e=>ga(e,t)))}function Th(e,t,n){bh(e,n),kh(e,(e=>va(e,t)||va(t,e)))}function kh(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(Eh(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Eh(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();_o&&vo("event: "+n.toString()),Ao(i)}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sh{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pc(),this.transactionQueueTree_=new sh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $h(e,t,n){if(e.stats_=Go(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new uc(e.repoInfo_,((t,n,i,s)=>{Ph(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>xh(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{tn(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ta(e.repoInfo_,t,((t,n,i,s)=>{Ph(e,t,n,i,s)}),(t=>{xh(e,t)}),(t=>{!function(e,t){Po(t,((t,n)=>{Oh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ko[n]||(Ko[n]=t()),Ko[n]}(e.repoInfo_,(()=>new gc(e.stats_,e.server_))),e.infoData_=new dc,e.infoSyncTree_=new Dl({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Ml(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Oh(e,"connected",!1),e.serverSyncTree_=new Dl({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Th(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Nh(e){const t=e.infoData_.getNode(new oa(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Rh(e){return(t=(t={timestamp:Nh(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Ph(e,t,n,i,s){e.dataUpdateCount++;const r=new oa(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=an(n,(e=>Qa(e)));o=function(e,t,n,i){const s=Kl(e,i);if(s){const i=Gl(s),r=i.path,o=i.queryId,a=_a(r,t),c=Oc.fromObject(n);return Yl(e,r,new Ic(yc(o),a,c))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=Qa(n);o=function(e,t,n,i){const s=Kl(e,i);if(null!=s){const i=Gl(s),r=i.path,o=i.queryId,a=_a(r,t);return Yl(e,r,new bc(yc(o),a,n))}return[]}(e.serverSyncTree_,r,t,s)}else if(i){const t=an(n,(e=>Qa(e)));o=function(e,t,n){const i=Oc.fromObject(n);return Hl(e,new Ic({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=Qa(n);o=Ml(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=qh(e,r)),Th(e.eventQueue_,a,o)}function xh(e,t){Oh(e,"connected",t),!1===t&&function(e){Mh(e,"onDisconnectEvents");const t=Rh(e),n=pc();mc(e.onDisconnect_,aa(),((i,s)=>{const r=function(e,t,n,i){return ih(t,new Ql(n,e),i)}(i,s,e.serverSyncTree_,t);fc(n,i,r)}));let i=[];mc(n,aa(),((t,n)=>{i=i.concat(Ml(e.serverSyncTree_,t,n));const s=zh(e,t);qh(e,s)})),e.onDisconnect_=pc(),Th(e.eventQueue_,aa(),i)}(e)}function Oh(e,t,n){const i=new oa("/.info/"+t),s=Qa(n);e.infoData_.updateSnapshot(i,s);const r=Ml(e.infoSyncTree_,i,s);Th(e.eventQueue_,i,r)}function Dh(e){return e.nextWriteId_++}function Ah(e,t,n,i,s){Mh(e,"set",{path:t.toString(),value:n,priority:i});const r=Rh(e),o=Qa(n,i),a=ql(e.serverSyncTree_,t),c=nh(o,a,r),l=Dh(e),h=Al(e.serverSyncTree_,t,c,l,!0);bh(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||bo("set at "+t+" failed: "+n);const o=Ll(e.serverSyncTree_,l,!r);Th(e.eventQueue_,t,o),function(e,t,n,i){t&&Ao((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}(0,s,n,i)}));const u=zh(e,t);qh(e,u),Th(e.eventQueue_,u,[])}function Lh(e,t,n){let i;i=".info"===ca(t._path)?Fl(e.infoSyncTree_,t,n):Fl(e.serverSyncTree_,t,n),Ih(e.eventQueue_,t._path,i)}function Mh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),vo(n,...t)}function Fh(e,t,n){return ql(e.serverSyncTree_,t,n)||Za.EMPTY_NODE}function Uh(e,t=e.transactionQueueTree_){if(t||Wh(e,t),oh(t)){const n=Vh(e,t);Mt(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Fh(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];Mt(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=_a(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{Mh(e,"transaction put response",{path:c.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ll(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Wh(e,rh(e.transactionQueueTree_,t)),Uh(e,e.transactionQueueTree_),Th(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Ao(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{bo("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}qh(e,t)}}),o)}(e,uh(t),n)}else ch(t)&&lh(t,(t=>{Uh(e,t)}))}function qh(e,t){const n=Hh(e,t),i=uh(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=_a(n,c.path);let h,u=!1;if(Mt(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)u=!0,h=c.abortReason,s=s.concat(Ll(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)u=!0,h="maxretry",s=s.concat(Ll(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Fh(e,c.path,r);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){vh("transaction failed: Data returned ",i,c.path);let t=Qa(i);"object"==typeof i&&null!=i&&sn(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=Rh(e),l=nh(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Dh(e),r.splice(r.indexOf(o),1),s=s.concat(Al(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),s=s.concat(Ll(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",s=s.concat(Ll(e.serverSyncTree_,c.currentWriteId,!0))}Th(e.eventQueue_,n,s),s=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;Wh(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Ao(i[e]);Uh(e,e.transactionQueueTree_)}(e,Vh(e,n),i),i}function Hh(e,t){let n,i=e.transactionQueueTree_;for(n=ca(t);null!==n&&void 0===oh(i);)i=rh(i,n),n=ca(t=ha(t));return i}function Vh(e,t){const n=[];return jh(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function jh(e,t,n){const i=oh(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);lh(t,(t=>{jh(e,t,n)}))}function Wh(e,t){const n=oh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ah(t,n.length>0?n:void 0)}lh(t,(t=>{Wh(e,t)}))}function zh(e,t){const n=uh(Hh(e,t)),i=rh(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Bh(e,t)})),Bh(e,i),hh(i,(t=>{Bh(e,t)})),n}function Bh(e,t){const n=oh(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Mt(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(Mt(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ll(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?ah(t,void 0):n.length=r+1,Th(e.eventQueue_,uh(t),s);for(let e=0;e<i.length;e++)Ao(i[e])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Kh=function(e,t){const n=Gh(e),i=n.namespace;"firebase.com"===n.domain&&wo(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||wo("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&bo("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new jo(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new oa(n.pathString)}},Gh=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):bo(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Yh{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+tn(this.snapshot.exportVal())}}class Zh{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Jh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Mt(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qh{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ma(this._path)?null:ua(this._path)}get ref(){return new Xh(this._repo,this._path)}get _queryIdentifier(){const e=hc(this._queryParams),t=No(e);return"{}"===t?"default":t}get _queryObject(){return hc(this._queryParams)}isEqual(e){if(!((e=vn(e))instanceof Qh))return!1;const t=this._repo===e._repo,n=ga(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Xh extends Qh{constructor(e,t){super(e,t,new cc,!1)}get parent(){const e=pa(this._path);return null===e?null:new Xh(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class eu{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new oa(e),n=nu(this.ref,e);return new eu(this._node.getChild(t),n,Va)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new eu(n,nu(this.ref,t),Va))))}hasChild(e){const t=new oa(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tu(e,t){return(e=vn(e))._checkNotDeleted("ref"),void 0!==t?nu(e._root,t):e._root}function nu(e,t){var n,i,s,r;return null===ca((e=vn(e))._path)?(n="child",i="path",r=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),yh(n,i,s,r)):yh("child","path",t,!1),new Xh(e._repo,fa(e._path,t))}function iu(e,t){(function(e,t){if(".info"===ca(t))throw new Error(e+" failed = Can't modify data under /.info/")})("set",(e=vn(e))._path),function(e,t,n,i){i&&void 0===t||vh(_n(e,"value"),t,n)}("set",t,e._path,!1);const n=new Bt;return Ah(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class su{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Yh("value",this,new eu(e.snapshotNode,new Xh(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zh(this,e,t):null}matches(e){return e instanceof su&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ru{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Zh(this,e,t):null}createEvent(e,t){Mt(null!=e.childName,"Child events should have a childName.");const n=nu(new Xh(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Yh(e.type,this,new eu(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ru&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ou(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{Lh(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Jh(n,r||void 0),a="value"===t?new su(o):new ru(t,o);return function(e,t,n){let i;i=".info"===ca(t._path)?Ul(e.infoSyncTree_,t,n):Ul(e.serverSyncTree_,t,n),Ih(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>Lh(e._repo,e,a)}function au(e,t,n,i){return ou(e,"value",t,n,i)}!function(e){Mt(!wl,"__referenceConstructor has already been defined"),wl=e}(Xh),function(e){Mt(!bl,"__referenceConstructor has already been defined"),bl=e}(Xh);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const cu={};function lu(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||wo("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vo("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Kh(r,s),l=c.repoInfo;"undefined"!=typeof process&&process.env&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,c=Kh(r,s),l=c.repoInfo):o=!c.repoInfo.secure;const h=s&&o?new Uo(Uo.OWNER):new Fo(e.name,e.options,t);Ch("Invalid Firebase Database URL",c),ma(c.path)||wo("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=cu[t.name];s||(s={},cu[t.name]=s);let r=s[e.toURLString()];r&&wo("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Sh(e,false,n,i),s[e.toURLString()]=r,r}(l,e,h,new Mo(e.name,n));return new hu(u,e)}class hu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($h(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xh(this._repo,aa())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=cu[t];n&&n[e.key]===e||wo(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&wo("Cannot call "+e+" on a deleted database.")}}function uu(e=ri(),t){return ti(e,"database").getImmediate({identifier:t})}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Ta.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ta.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){!function(e){ro=e}(si),ei(new yn("database",((e,{instanceIdentifier:t})=>lu(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),oi(io,so,e),oi(io,so,"esm2017")}();const du=be(to,(function(e){return uu(e)}));function pu(e=!1){it(e?Zr.home:Zr.singIn)}function fu(e){if("string"==typeof e)return e;const t=new Date(e),n=t.getFullYear(),i=t.getMonth()+1,s=t.getDate();return`${n}-${i<10?`0${i}`:i}-${s<10?`0${s}`:s}`}const mu=e=>({}),_u=e=>({});function gu(e){let t,n,i,s,r,o,a;const c=e[2].default,l=h(c,e,e[1],null),u=e[2].footer,m=h(u,e,e[1],_u);return{c(){t=w("form"),n=w("div"),l&&l.c(),i=T(),s=w("footer"),m&&m.c(),S(n,"class","wrapper svelte-180yna0"),S(s,"class","footer svelte-180yna0"),S(t,"class","form svelte-180yna0")},m(c,h){var u;y(c,t,h),v(t,n),l&&l.m(n,null),v(t,i),v(t,s),m&&m.m(s,null),r=!0,o||(a=E(t,"submit",(u=e[0],function(e){return e.preventDefault(),u.call(this,e)})),o=!0)},p(e,[t]){l&&l.p&&(!r||2&t)&&p(l,c,e,e[1],r?d(c,e[1],t,null):f(e[1]),null),m&&m.p&&(!r||2&t)&&p(m,u,e,e[1],r?d(u,e[1],t,mu):f(e[1]),_u)},i(e){r||(se(l,e),se(m,e),r=!0)},o(e){re(l,e),re(m,e),r=!1},d(e){e&&C(t),l&&l.d(e),m&&m.d(e),o=!1,a()}}}function vu(e,t,n){let{$$slots:i={},$$scope:s}=t;const r=F();return e.$$set=e=>{"$$scope"in e&&n(1,s=e.$$scope)},[function(e){const t=Array.from(e.target.elements).filter((e=>"INPUT"===e.nodeName));r("submit",t.map((({name:e,value:t})=>({name:e,value:t}))))},s,i]}class yu extends pe{constructor(e){super(),de(this,e,vu,gu,o,{})}}function Cu(t){let n;return{c(){n=w("hr"),S(n,"class","svelte-suz1f8")},m(e,t){y(e,n,t)},p:e,i:e,o:e,d(e){e&&C(n)}}}class wu extends pe{constructor(e){super(),de(this,e,null,Cu,o,{})}}function bu(t){let n;return{c(){n=w("input"),S(n,"class","input svelte-13lntdt"),S(n,"name",t[0]),S(n,"type",t[1]),S(n,"placeholder",t[2]),n.disabled=t[3],x(n,"input--without-outline",t[4])},m(e,t){y(e,n,t)},p(e,[t]){1&t&&S(n,"name",e[0]),2&t&&S(n,"type",e[1]),4&t&&S(n,"placeholder",e[2]),8&t&&(n.disabled=e[3]),16&t&&x(n,"input--without-outline",e[4])},i:e,o:e,d(e){e&&C(n)}}}function Iu(e,t,n){let{name:i}=t,{type:s="text"}=t,{placeholder:r=""}=t,{disabled:o=!1}=t,{notShowOutline:a=!1}=t;return e.$$set=e=>{"name"in e&&n(0,i=e.name),"type"in e&&n(1,s=e.type),"placeholder"in e&&n(2,r=e.placeholder),"disabled"in e&&n(3,o=e.disabled),"notShowOutline"in e&&n(4,a=e.notShowOutline)},[i,s,r,o,a]}class Tu extends pe{constructor(e){super(),de(this,e,Iu,bu,o,{name:0,type:1,placeholder:2,disabled:3,notShowOutline:4})}}function ku(e){let t,n,i,s,r,o;i=new Tu({props:{name:e[0],type:e[1],placeholder:e[2],disabled:e[3],notShowOutline:!0}});const a=e[5].default,c=h(a,e,e[4],null);return{c(){t=w("div"),n=w("div"),le(i.$$.fragment),s=T(),r=w("div"),c&&c.c(),S(n,"class","input svelte-18xr4d0"),S(r,"class","icon svelte-18xr4d0"),S(t,"class","wrapper svelte-18xr4d0")},m(e,a){y(e,t,a),v(t,n),he(i,n,null),v(t,s),v(t,r),c&&c.m(r,null),o=!0},p(e,[t]){const n={};1&t&&(n.name=e[0]),2&t&&(n.type=e[1]),4&t&&(n.placeholder=e[2]),8&t&&(n.disabled=e[3]),i.$set(n),c&&c.p&&(!o||16&t)&&p(c,a,e,e[4],o?d(a,e[4],t,null):f(e[4]),null)},i(e){o||(se(i.$$.fragment,e),se(c,e),o=!0)},o(e){re(i.$$.fragment,e),re(c,e),o=!1},d(e){e&&C(t),ue(i),c&&c.d(e)}}}function Eu(e,t,n){let{$$slots:i={},$$scope:s}=t,{name:r}=t,{type:o="text"}=t,{placeholder:a=""}=t,{disabled:c=!1}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"type"in e&&n(1,o=e.type),"placeholder"in e&&n(2,a=e.placeholder),"disabled"in e&&n(3,c=e.disabled),"$$scope"in e&&n(4,s=e.$$scope)},[r,o,a,c,s,i]}class Su extends pe{constructor(e){super(),de(this,e,Eu,ku,o,{name:0,type:1,placeholder:2,disabled:3})}}function $u(e){let t,n;return{c(){t=b("svg"),n=b("path"),S(n,"d","M1 11.5L0.338235 11.1471C0.236859 11.3371 0.222112 11.5616 0.297753 11.7633L1 11.5ZM23 11.5L23.7022 11.7633C23.7779 11.5616 23.7631 11.3371 23.6618 11.1471L23 11.5ZM1.66176 11.8529C2.2872 10.6802 3.57765 8.88409 5.37888 7.38971C7.17808 5.89701 9.43083 4.75 12 4.75V3.25C8.96916 3.25 6.38858 4.60299 4.42112 6.23529C2.45568 7.86591 1.04613 9.81975 0.338235 11.1471L1.66176 11.8529ZM12 4.75C14.5692 4.75 16.8219 5.89701 18.6211 7.38971C20.4223 8.88409 21.7128 10.6802 22.3382 11.8529L23.6618 11.1471C22.9539 9.81975 21.5443 7.86591 19.5789 6.23529C17.6114 4.60299 15.0308 3.25 12 3.25V4.75ZM22.2978 11.2367C21.8354 12.4697 20.7486 14.3668 19.0192 15.9462C17.3009 17.5154 14.9741 18.75 12 18.75V20.25C15.4259 20.25 18.0991 18.8179 20.0308 17.0538C21.9514 15.2998 23.1646 13.197 23.7022 11.7633L22.2978 11.2367ZM12 18.75C9.02587 18.75 6.69909 17.5154 4.98076 15.9462C3.25136 14.3668 2.16464 12.4697 1.70225 11.2367L0.297753 11.7633C0.835359 13.197 2.04864 15.2998 3.96924 17.0538C5.90091 18.8179 8.57413 20.25 12 20.25V18.75ZM8.75 12C8.75 10.3514 9.97431 8.75 12 8.75V7.25C9.02569 7.25 7.25 9.64855 7.25 12H8.75ZM12 8.75C14.0257 8.75 15.25 10.3514 15.25 12H16.75C16.75 9.64855 14.9743 7.25 12 7.25V8.75ZM15.25 12C15.25 13.6486 14.0257 15.25 12 15.25V16.75C14.9743 16.75 16.75 14.3514 16.75 12H15.25ZM12 15.25C9.97431 15.25 8.75 13.6486 8.75 12H7.25C7.25 14.3514 9.02569 16.75 12 16.75V15.25Z"),S(n,"fill","#8D8D8D"),S(t,"width","24"),S(t,"height","24"),S(t,"viewBox","0 0 24 24"),S(t,"fill","none"),S(t,"xmlns","http://www.w3.org/2000/svg")},m(e,i){y(e,t,i),v(t,n)},d(e){e&&C(t)}}}function Nu(e){let t,n;return{c(){t=b("svg"),n=b("path"),S(n,"d","M1 11.5L0.338235 11.1471C0.236859 11.3371 0.222112 11.5616 0.297753 11.7633L1 11.5ZM23 11.5L23.7022 11.7633C23.7779 11.5616 23.7631 11.3371 23.6618 11.1471L23 11.5ZM1.66176 11.8529C2.2872 10.6802 3.57765 8.88409 5.37888 7.38971C7.17808 5.89701 9.43083 4.75 12 4.75V3.25C8.96916 3.25 6.38858 4.60299 4.42112 6.23529C2.45568 7.86591 1.04613 9.81975 0.338235 11.1471L1.66176 11.8529ZM12 4.75C14.5692 4.75 16.8219 5.89701 18.6211 7.38971C20.4223 8.88409 21.7128 10.6802 22.3382 11.8529L23.6618 11.1471C22.9539 9.81975 21.5443 7.86591 19.5789 6.23529C17.6114 4.60299 15.0308 3.25 12 3.25V4.75ZM22.2978 11.2367C21.8354 12.4697 20.7486 14.3668 19.0192 15.9462C17.3009 17.5154 14.9741 18.75 12 18.75V20.25C15.4259 20.25 18.0991 18.8179 20.0308 17.0538C21.9514 15.2998 23.1646 13.197 23.7022 11.7633L22.2978 11.2367ZM12 18.75C9.02587 18.75 6.69909 17.5154 4.98076 15.9462C3.25136 14.3668 2.16464 12.4697 1.70225 11.2367L0.297753 11.7633C0.835359 13.197 2.04864 15.2998 3.96924 17.0538C5.90091 18.8179 8.57413 20.25 12 20.25V18.75ZM8.75 12C8.75 10.3514 9.97431 8.75 12 8.75V7.25C9.02569 7.25 7.25 9.64855 7.25 12H8.75ZM12 8.75C14.0257 8.75 15.25 10.3514 15.25 12H16.75C16.75 9.64855 14.9743 7.25 12 7.25V8.75ZM15.25 12C15.25 13.6486 14.0257 15.25 12 15.25V16.75C14.9743 16.75 16.75 14.3514 16.75 12H15.25ZM12 15.25C9.97431 15.25 8.75 13.6486 8.75 12H7.25C7.25 14.3514 9.02569 16.75 12 16.75V15.25Z"),S(n,"fill","#8D8D8D"),S(t,"width","24"),S(t,"height","24"),S(t,"viewBox","0 0 24 24"),S(t,"fill","none"),S(t,"xmlns","http://www.w3.org/2000/svg")},m(e,i){y(e,t,i),v(t,n)},d(e){e&&C(t)}}}function Ru(e){let t,n,i;function s(e,t){return e[3]?Nu:$u}let r=s(e),o=r(e);return{c(){t=w("button"),o.c(),S(t,"class","button svelte-1g8t39u"),S(t,"type","button")},m(s,r){y(s,t,r),o.m(t,null),n||(i=E(t,"click",e[4]),n=!0)},p(e,n){r!==(r=s(e))&&(o.d(1),o=r(e),o&&(o.c(),o.m(t,null)))},d(e){e&&C(t),o.d(),n=!1,i()}}}function Pu(e){let t,n;return t=new Su({props:{type:e[3]?"text":"password",name:e[0],placeholder:e[1],disabled:e[2],$$slots:{default:[Ru]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,[n]){const i={};8&n&&(i.type=e[3]?"text":"password"),1&n&&(i.name=e[0]),2&n&&(i.placeholder=e[1]),4&n&&(i.disabled=e[2]),40&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function xu(e,t,n){let{name:i}=t,{placeholder:s=""}=t,{disabled:r=!1}=t,o=!1;return e.$$set=e=>{"name"in e&&n(0,i=e.name),"placeholder"in e&&n(1,s=e.placeholder),"disabled"in e&&n(2,r=e.disabled)},[i,s,r,o,()=>n(3,o=!o)]}class Ou extends pe{constructor(e){super(),de(this,e,xu,Pu,o,{name:0,placeholder:1,disabled:2})}}const Du={primary:"primary",secondary:"secondary",tertiary:"tertiary",flat:"flat",ghostLink:"ghost-link",ghost:"ghost"},Au={mini:"mini",middle:"middle"};function Lu(e){let t,n,i,s,r;const o=e[4].default,a=h(o,e,e[3],null);return{c(){t=w("button"),n=w("span"),a&&a.c(),S(n,"class","wrapper svelte-ec5f15"),S(t,"class","button svelte-ec5f15"),t.disabled=e[0],x(t,"secondary",e[1]===Du.secondary),x(t,"tertiary",e[1]===Du.tertiary),x(t,"flat",e[1]===Du.flat),x(t,"ghost-link",e[1]===Du.ghostLink),x(t,"ghost",e[1]===Du.ghost),x(t,"mini",e[2]===Au.mini)},m(o,c){y(o,t,c),v(t,n),a&&a.m(n,null),i=!0,s||(r=E(t,"click",e[5]),s=!0)},p(e,[n]){a&&a.p&&(!i||8&n)&&p(a,o,e,e[3],i?d(o,e[3],n,null):f(e[3]),null),(!i||1&n)&&(t.disabled=e[0]),2&n&&x(t,"secondary",e[1]===Du.secondary),2&n&&x(t,"tertiary",e[1]===Du.tertiary),2&n&&x(t,"flat",e[1]===Du.flat),2&n&&x(t,"ghost-link",e[1]===Du.ghostLink),2&n&&x(t,"ghost",e[1]===Du.ghost),4&n&&x(t,"mini",e[2]===Au.mini)},i(e){i||(se(a,e),i=!0)},o(e){re(a,e),i=!1},d(e){e&&C(t),a&&a.d(e),s=!1,r()}}}function Mu(e,t,n){let{$$slots:i={},$$scope:s}=t,{disabled:r=!1}=t,{theme:o=Du.secondary}=t,{size:a=Au.middle}=t;return e.$$set=e=>{"disabled"in e&&n(0,r=e.disabled),"theme"in e&&n(1,o=e.theme),"size"in e&&n(2,a=e.size),"$$scope"in e&&n(3,s=e.$$scope)},[r,o,a,s,i,function(t){H.call(this,e,t)}]}class Fu extends pe{constructor(e){super(),de(this,e,Mu,Lu,o,{disabled:0,theme:1,size:2})}}function Uu(e){let t,n;return{c(){t=w("span"),n=I(e[0]),S(t,"class","text svelte-dn21wj")},m(e,i){y(e,t,i),v(t,n)},p(e,t){1&t&&N(n,e[0])},d(e){e&&C(t)}}}function qu(e){let t,n,i,s=e[3]&&function(e){let t,n;const i=e[4].default,s=h(i,e,e[5],null);return{c(){t=w("span"),s&&s.c(),S(t,"class","icon svelte-dn21wj")},m(e,i){y(e,t,i),s&&s.m(t,null),n=!0},p(e,t){s&&s.p&&(!n||32&t)&&p(s,i,e,e[5],n?d(i,e[5],t,null):f(e[5]),null)},i(e){n||(se(s,e),n=!0)},o(e){re(s,e),n=!1},d(e){e&&C(t),s&&s.d(e)}}}(e),r=e[0]&&Uu(e);return{c(){s&&s.c(),t=T(),r&&r.c(),n=k()},m(e,o){s&&s.m(e,o),y(e,t,o),r&&r.m(e,o),y(e,n,o),i=!0},p(e,t){e[3]&&s.p(e,t),e[0]?r?r.p(e,t):(r=Uu(e),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i(e){i||(se(s),i=!0)},o(e){re(s),i=!1},d(e){s&&s.d(e),e&&C(t),r&&r.d(e),e&&C(n)}}}function Hu(e){let t,n;return t=new Fu({props:{disabled:e[1],theme:e[2],$$slots:{default:[qu]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,[n]){const i={};2&n&&(i.disabled=e[1]),4&n&&(i.theme=e[2]),33&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function Vu(e,t,n){let{$$slots:i={},$$scope:s}=t;const r=g(i);let{value:o=null}=t,{disabled:a=!1}=t,{theme:c=Du.secondary}=t;const l=r.default||!1;return e.$$set=e=>{"value"in e&&n(0,o=e.value),"disabled"in e&&n(1,a=e.disabled),"theme"in e&&n(2,c=e.theme),"$$scope"in e&&n(5,s=e.$$scope)},[o,a,c,l,i,s]}class ju extends pe{constructor(e){super(),de(this,e,Vu,Hu,o,{value:0,disabled:1,theme:2})}}const Wu=e=>({}),zu=e=>({});function Bu(e){let n,i,s;const r=e[2].header,o=h(r,e,e[1],zu),a=e[2].default,c=h(a,e,e[1],null);let l=[{class:"main svelte-1fv2vq9"}],u={};for(let e=0;e<l.length;e+=1)u=t(u,l[e]);return{c(){n=w(e[0].header?"section":"div"),o&&o.c(),i=T(),c&&c.c(),$(n,u)},m(e,t){y(e,n,t),o&&o.m(n,null),v(n,i),c&&c.m(n,null),s=!0},p(e,t){o&&o.p&&(!s||2&t)&&p(o,r,e,e[1],s?d(r,e[1],t,Wu):f(e[1]),zu),c&&c.p&&(!s||2&t)&&p(c,a,e,e[1],s?d(a,e[1],t,null):f(e[1]),null),$(n,u=ae(l,[{class:"main svelte-1fv2vq9"}]))},i(e){s||(se(o,e),se(c,e),s=!0)},o(e){re(o,e),re(c,e),s=!1},d(e){e&&C(n),o&&o.d(e),c&&c.d(e)}}}function Ku(e){let t,n,i=e[0].header?"section":"div",s=(e[0].header?"section":"div")&&Bu(e);return{c(){s&&s.c(),t=k()},m(e,i){s&&s.m(e,i),y(e,t,i),n=!0},p(e,[n]){e[0].header||"div"?i?o(i,e[0].header?"section":"div")?(s.d(1),s=Bu(e),s.c(),s.m(t.parentNode,t)):s.p(e,n):(s=Bu(e),s.c(),s.m(t.parentNode,t)):i&&(s.d(1),s=null),i=e[0].header?"section":"div"},i(e){n||(se(s),n=!0)},o(e){re(s),n=!1},d(e){e&&C(t),s&&s.d(e)}}}function Gu(e,t,n){let{$$slots:i={},$$scope:s}=t;const r=g(i);return e.$$set=e=>{"$$scope"in e&&n(1,s=e.$$scope)},[r,s,i]}class Yu extends pe{constructor(e){super(),de(this,e,Gu,Ku,o,{})}}function Zu(e){let t,n,i;return{c(){t=w("span"),n=I("#"),i=I(e[0]),S(t,"class","text text--gray svelte-hia9oh")},m(e,s){y(e,t,s),v(t,n),v(t,i)},p(e,t){1&t&&N(i,e[0])},d(e){e&&C(t)}}}function Ju(t){let n,i,s,r=t[0]&&Zu(t);return{c(){n=w("header"),i=w("span"),i.textContent="Парковочное место",s=T(),r&&r.c(),S(i,"class","text svelte-hia9oh"),S(n,"class","header svelte-hia9oh")},m(e,t){y(e,n,t),v(n,i),v(n,s),r&&r.m(n,null)},p(e,[t]){e[0]?r?r.p(e,t):(r=Zu(e),r.c(),r.m(n,null)):r&&(r.d(1),r=null)},i:e,o:e,d(e){e&&C(n),r&&r.d()}}}function Qu(e,t,n){let{number:i}=t;return e.$$set=e=>{"number"in e&&n(0,i=e.number)},[i]}class Xu extends pe{constructor(e){super(),de(this,e,Qu,Ju,o,{number:0})}}function ed(e){let t,n;const i=e[1].default,s=h(i,e,e[0],null);return{c(){t=w("div"),s&&s.c(),S(t,"class","wrapper svelte-fdg3vp")},m(e,i){y(e,t,i),s&&s.m(t,null),n=!0},p(e,[t]){s&&s.p&&(!n||1&t)&&p(s,i,e,e[0],n?d(i,e[0],t,null):f(e[0]),null)},i(e){n||(se(s,e),n=!0)},o(e){re(s,e),n=!1},d(e){e&&C(t),s&&s.d(e)}}}function td(e,t,n){let{$$slots:i={},$$scope:s}=t;return e.$$set=e=>{"$$scope"in e&&n(0,s=e.$$scope)},[s,i]}class nd extends pe{constructor(e){super(),de(this,e,td,ed,o,{})}}const id={low:"low",upper:"upper"},sd={free:"free",busy:"busy"},rd="firstHalf",od="afternoon",ad="Свободно";function cd(t){let n,i,s;return{c(){n=w("footer"),i=w("span"),s=I(t[0]),S(i,"class","text svelte-1q4b3jz"),S(n,"class","wrapper svelte-1q4b3jz")},m(e,t){y(e,n,t),v(n,i),v(i,s)},p(e,[t]){1&t&&N(s,e[0])},i:e,o:e,d(e){e&&C(n)}}}function ld(e,t,n){let i,{level:s=id.low}=t;return e.$$set=e=>{"level"in e&&n(1,s=e.level)},e.$$.update=()=>{2&e.$$.dirty&&n(0,i=s===id.low?"Нижний уровень":"Верхний уровень")},[i,s]}class hd extends pe{constructor(e){super(),de(this,e,ld,cd,o,{level:1})}}function ud(e){let t,n,i,s,r,o;return t=new Tu({props:{type:"email",name:"email",placeholder:"Email",disabled:e[0]}}),i=new wu({}),r=new Ou({props:{name:"password",placeholder:"Пароль",disabled:e[0]}}),{c(){le(t.$$.fragment),n=T(),le(i.$$.fragment),s=T(),le(r.$$.fragment)},m(e,a){he(t,e,a),y(e,n,a),he(i,e,a),y(e,s,a),he(r,e,a),o=!0},p(e,n){const i={};1&n&&(i.disabled=e[0]),t.$set(i);const s={};1&n&&(s.disabled=e[0]),r.$set(s)},i(e){o||(se(t.$$.fragment,e),se(i.$$.fragment,e),se(r.$$.fragment,e),o=!0)},o(e){re(t.$$.fragment,e),re(i.$$.fragment,e),re(r.$$.fragment,e),o=!1},d(e){ue(t,e),e&&C(n),ue(i,e),e&&C(s),ue(r,e)}}}function dd(e){let t,n;return t=new ju({props:{slot:"footer",value:"Войти",disabled:e[0]}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.disabled=e[0]),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function pd(e){let t,n;return{c(){t=w("span"),n=I(e[1]),S(t,"class","error-message svelte-aqnet")},m(e,i){y(e,t,i),v(t,n)},p(e,t){2&t&&N(n,e[1])},d(e){e&&C(t)}}}function fd(e){let t,n,i,s;t=new yu({props:{$$slots:{footer:[dd],default:[ud]},$$scope:{ctx:e}}}),t.$on("submit",e[2]);let r=e[1]&&pd(e);return{c(){le(t.$$.fragment),n=T(),r&&r.c(),i=k()},m(e,o){he(t,e,o),y(e,n,o),r&&r.m(e,o),y(e,i,o),s=!0},p(e,n){const s={};33&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s),e[1]?r?r.p(e,n):(r=pd(e),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null)},i(e){s||(se(t.$$.fragment,e),s=!0)},o(e){re(t.$$.fragment,e),s=!1},d(e){ue(t,e),e&&C(n),r&&r.d(e),e&&C(i)}}}function md(e){let t,n,i;return n=new Yu({props:{$$slots:{default:[fd]},$$scope:{ctx:e}}}),{c(){t=T(),le(n.$$.fragment),document.title="SignIn / OpenMedia Parking"},m(e,s){y(e,t,s),he(n,e,s),i=!0},p(e,[t]){const i={};35&t&&(i.$$scope={dirty:t,ctx:e}),n.$set(i)},i(e){i||(se(n.$$.fragment,e),i=!0)},o(e){re(n.$$.fragment,e),i=!1},d(e){e&&C(t),ue(n,e)}}}function _d(e,t,n){let i,s;l(e,eo,(e=>n(3,i=e))),l(e,no,(e=>n(4,s=e)));let r,o=!1;return L((()=>{pu(i)})),[o,r,async function(e){n(0,o=!0),n(1,r=void 0);try{const t=e.detail,[n,i]=t;await Us(s,n.value,i.value),it(Zr.home)}catch(e){n(1,r=e.message)}n(0,o=!1)}]}class gd extends pe{constructor(e){super(),de(this,e,_d,md,o,{})}}const vd=we({date:fu(Date.now())});const yd=function(){const{set:e,update:t,subscribe:n}=we({}),i=tu(uu(),Qr);return au(i,(t=>{e(t.val())}),(()=>{e({})})),{set:e,update:t,updateData:function(){au(i,(t=>{e(t.val())}),(()=>{e({})}),{onlyOnce:!0})},subscribe:n}}();let Cd=()=>{};const wd=be(vd,(function(e,t){const n=fu(e.date).split("-"),i=n[0],s=n[1],r=n[2],o=tu(uu(),`${Jr}/${i}/${s}/${r}/`);Cd(),Cd=au(o,(e=>{const n=e.ref._path.pieces_,[,o,a,c]=n;+o==+i&&+a==+s&&+c==+r&&t(e.val())}),(()=>{t([])}))}),[]),bd={uid:"",displayName:""};const Id=be([yd,wd],(function([e,t]){return Object.values(e).map((({level:e,number:n})=>{const i=t?.find((({parkingId:e})=>+e==+n));return i?{level:e,...i}:{level:e,firstHalf:bd,afternoon:bd,parkingId:+n}}))}),[]);function Td(e){let t,n;const i=e[1].default,s=h(i,e,e[0],null);return{c(){t=w("div"),s&&s.c(),S(t,"class","wrapper svelte-o3pb33")},m(e,i){y(e,t,i),s&&s.m(t,null),n=!0},p(e,[t]){s&&s.p&&(!n||1&t)&&p(s,i,e,e[0],n?d(i,e[0],t,null):f(e[0]),null)},i(e){n||(se(s,e),n=!0)},o(e){re(s,e),n=!1},d(e){e&&C(t),s&&s.d(e)}}}function kd(e,t,n){let{$$slots:i={},$$scope:s}=t;return e.$$set=e=>{"$$scope"in e&&n(0,s=e.$$scope)},[s,i]}class Ed extends pe{constructor(e){super(),de(this,e,kd,Td,o,{})}}function Sd(e){let t,n,i;return{c(){t=w("input"),S(t,"class","input svelte-1jqwg4x"),S(t,"type","date"),S(t,"name",e[1]),t.disabled=e[2]},m(s,r){y(s,t,r),R(t,e[0]),n||(i=E(t,"input",e[3]),n=!0)},p(e,n){2&n&&S(t,"name",e[1]),4&n&&(t.disabled=e[2]),1&n&&R(t,e[0])},d(e){e&&C(t),n=!1,i()}}}function $d(e){let t,n;return t=new Ed({props:{$$slots:{default:[Sd]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,[n]){const i={};23&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function Nd(e,t,n){let{name:i}=t,{value:s=fu(Date.now())}=t,{disabled:r=!1}=t;return e.$$set=e=>{"name"in e&&n(1,i=e.name),"value"in e&&n(0,s=e.value),"disabled"in e&&n(2,r=e.disabled)},[s,i,r,function(){s=this.value,n(0,s)}]}class Rd extends pe{constructor(e){super(),de(this,e,Nd,$d,o,{name:1,value:0,disabled:2})}}const Pd=e=>({}),xd=e=>({}),Od=e=>({}),Dd=e=>({});function Ad(e){let t,n,i,s,o;const a=e[4].left,c=h(a,e,e[3],Dd),l=e[4].right,u=h(l,e,e[3],xd);return{c(){t=w("div"),c&&c.c(),n=T(),u&&u.c(),S(t,"class","item svelte-t7xy70"),x(t,"item--only-left",!e[2].right),x(t,"item--transparent-background",e[0]),x(t,"item--with-hover",e[1])},m(a,l){y(a,t,l),c&&c.m(t,null),v(t,n),u&&u.m(t,null),i=!0,s||(o=E(t,"click",(function(){r(e[1])&&e[1].apply(this,arguments)})),s=!0)},p(n,[s]){e=n,c&&c.p&&(!i||8&s)&&p(c,a,e,e[3],i?d(a,e[3],s,Od):f(e[3]),Dd),u&&u.p&&(!i||8&s)&&p(u,l,e,e[3],i?d(l,e[3],s,Pd):f(e[3]),xd),4&s&&x(t,"item--only-left",!e[2].right),1&s&&x(t,"item--transparent-background",e[0]),2&s&&x(t,"item--with-hover",e[1])},i(e){i||(se(c,e),se(u,e),i=!0)},o(e){re(c,e),re(u,e),i=!1},d(e){e&&C(t),c&&c.d(e),u&&u.d(e),s=!1,o()}}}function Ld(e,t,n){let{$$slots:i={},$$scope:s}=t;const r=g(i);let{transparent:o=!1}=t,{onClick:a}=t;return e.$$set=e=>{"transparent"in e&&n(0,o=e.transparent),"onClick"in e&&n(1,a=e.onClick),"$$scope"in e&&n(3,s=e.$$scope)},[o,a,r,s,i]}class Md extends pe{constructor(e){super(),de(this,e,Ld,Ad,o,{transparent:0,onClick:1})}}function Fd(t){let n;return{c(){n=w("hr"),S(n,"class","hr svelte-yw0wgw")},m(e,t){y(e,n,t)},p:e,i:e,o:e,d(e){e&&C(n)}}}class Ud extends pe{constructor(e){super(),de(this,e,null,Fd,o,{})}}function qd(t){let n,i;return{c(){n=w("div"),i=I(t[0]),S(n,"class","wrapper svelte-1futd29"),x(n,"wrapper--red",t[1]===sd.busy)},m(e,t){y(e,n,t),v(n,i)},p(e,[t]){1&t&&N(i,e[0]),2&t&&x(n,"wrapper--red",e[1]===sd.busy)},i:e,o:e,d(e){e&&C(n)}}}function Hd(e,t,n){let{value:i=""}=t,{status:s=sd.free}=t;return e.$$set=e=>{"value"in e&&n(0,i=e.value),"status"in e&&n(1,s=e.status)},[i,s]}class Vd extends pe{constructor(e){super(),de(this,e,Hd,qd,o,{value:0,status:1})}}function jd(t){let n;return{c(){n=w("div"),n.textContent="8:00 - 14:00",S(n,"class","time-text svelte-1tk7n0w"),S(n,"slot","left")},m(e,t){y(e,n,t)},p:e,d(e){e&&C(n)}}}function Wd(e){let t,n;return t=new Vd({props:{slot:"right",value:e[3],status:e[2]}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,n){const i={};8&n&&(i.value=e[3]),4&n&&(i.status=e[2]),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function zd(t){let n;return{c(){n=w("div"),n.textContent="14:00 - 20:00",S(n,"class","time-text svelte-1tk7n0w"),S(n,"slot","left")},m(e,t){y(e,n,t)},p:e,d(e){e&&C(n)}}}function Bd(e){let t,n;return t=new Vd({props:{slot:"right",value:e[5],status:e[4]}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,n){const i={};32&n&&(i.value=e[5]),16&n&&(i.status=e[4]),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function Kd(e){let t,n,i,s,r,o;return t=new Md({props:{onClick:e[9],$$slots:{right:[Wd],left:[jd]},$$scope:{ctx:e}}}),i=new Ud({}),r=new Md({props:{onClick:e[10],$$slots:{right:[Bd],left:[zd]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment),n=T(),le(i.$$.fragment),s=T(),le(r.$$.fragment)},m(e,a){he(t,e,a),y(e,n,a),he(i,e,a),y(e,s,a),he(r,e,a),o=!0},p(e,[n]){const i={};1&n&&(i.onClick=e[9]),16396&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i);const s={};2&n&&(s.onClick=e[10]),16432&n&&(s.$$scope={dirty:n,ctx:e}),r.$set(s)},i(e){o||(se(t.$$.fragment,e),se(i.$$.fragment,e),se(r.$$.fragment,e),o=!0)},o(e){re(t.$$.fragment,e),re(i.$$.fragment,e),re(r.$$.fragment,e),o=!1},d(e){ue(t,e),e&&C(n),ue(i,e),e&&C(s),ue(r,e)}}}function Gd(e,t,n){let i,s,r;l(e,du,(e=>n(11,i=e))),l(e,vd,(e=>n(12,s=e))),l(e,Xr,(e=>n(13,r=e)));let o,a,c,h,{firstHalf:u={uid:"",displayName:""}}=t,{afternoon:d={uid:"",displayName:""}}=t,{places:p=[]}=t,{parkingId:f=""}=t;function m(e,t){const{uid:n,displayName:o}=r;if(!f||!e||t!==n&&""!==t)return;const{date:a}=s,[c,l,h]=a.split("-");iu(tu(i,`${Jr}/${c}/${l}/${h}/`),p.map((i=>i.parkingId!==f?i:{...i,[e]:t===n?{uid:"",displayName:""}:{uid:n,displayName:o}})))}return e.$$set=e=>{"firstHalf"in e&&n(0,u=e.firstHalf),"afternoon"in e&&n(1,d=e.afternoon),"places"in e&&n(7,p=e.places),"parkingId"in e&&n(8,f=e.parkingId)},e.$$.update=()=>{1&e.$$.dirty&&n(2,o=u.uid?sd.busy:sd.free),1&e.$$.dirty&&n(3,a=u.uid?u.displayName:ad),2&e.$$.dirty&&n(4,c=d.uid?sd.busy:sd.free),2&e.$$.dirty&&n(5,h=d.uid?d.displayName:ad)},[u,d,o,a,c,h,m,p,f,()=>m(rd,u.uid),()=>m(od,d.uid)]}class Yd extends pe{constructor(e){super(),de(this,e,Gd,Kd,o,{firstHalf:0,afternoon:1,places:7,parkingId:8})}}function Zd(e,t,n){const i=e.slice();return i[1]=t[n].level,i[2]=t[n].firstHalf,i[3]=t[n].afternoon,i[4]=t[n].parkingId,i}function Jd(e){let t,n;return t=new Yd({props:{firstHalf:e[2],afternoon:e[3],parkingId:e[4],places:e[0]}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.firstHalf=e[2]),1&n&&(i.afternoon=e[3]),1&n&&(i.parkingId=e[4]),1&n&&(i.places=e[0]),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function Qd(e){let t,n,i,s,r,o;return t=new Xu({props:{number:e[4]}}),i=new nd({props:{$$slots:{default:[Jd]},$$scope:{ctx:e}}}),r=new hd({props:{level:e[1]}}),{c(){le(t.$$.fragment),n=T(),le(i.$$.fragment),s=T(),le(r.$$.fragment)},m(e,a){he(t,e,a),y(e,n,a),he(i,e,a),y(e,s,a),he(r,e,a),o=!0},p(e,n){const s={};1&n&&(s.number=e[4]),t.$set(s);const o={};129&n&&(o.$$scope={dirty:n,ctx:e}),i.$set(o);const a={};1&n&&(a.level=e[1]),r.$set(a)},i(e){o||(se(t.$$.fragment,e),se(i.$$.fragment,e),se(r.$$.fragment,e),o=!0)},o(e){re(t.$$.fragment,e),re(i.$$.fragment,e),re(r.$$.fragment,e),o=!1},d(e){ue(t,e),e&&C(n),ue(i,e),e&&C(s),ue(r,e)}}}function Xd(e,t){let n,i,s,r;return i=new Yu({props:{$$slots:{default:[Qd]},$$scope:{ctx:t}}}),{key:e,first:null,c(){n=w("div"),le(i.$$.fragment),s=T(),P(n,"width","100%"),P(n,"margin-top","1rem"),this.first=n},m(e,t){y(e,n,t),he(i,n,null),v(n,s),r=!0},p(e,n){t=e;const s={};129&n&&(s.$$scope={dirty:n,ctx:t}),i.$set(s)},i(e){r||(se(i.$$.fragment,e),r=!0)},o(e){re(i.$$.fragment,e),r=!1},d(e){e&&C(n),ue(i)}}}function ep(e){let t,n,i=[],s=new Map,r=e[0];const o=e=>e[4];for(let t=0;t<r.length;t+=1){let n=Zd(e,r,t),a=o(n);s.set(a,i[t]=Xd(a,n))}return{c(){t=w("div");for(let e=0;e<i.length;e+=1)i[e].c();S(t,"class","wrapper svelte-9gmiip")},m(e,s){y(e,t,s);for(let e=0;e<i.length;e+=1)i[e].m(t,null);n=!0},p(e,[n]){1&n&&(r=e[0],ne(),i=function(e,t,n,i,s,r,o,a,c,l,h,u){let d=e.length,p=r.length,f=d;const m={};for(;f--;)m[e[f].key]=f;const _=[],g=new Map,v=new Map;for(f=p;f--;){const e=u(s,r,f),a=n(e);let c=o.get(a);c?i&&c.p(e,t):(c=l(a,e),c.c()),g.set(a,_[f]=c),a in m&&v.set(a,Math.abs(f-m[a]))}const y=new Set,C=new Set;function w(e){se(e,1),e.m(a,h),o.set(e.key,e),h=e.first,p--}for(;d&&p;){const t=_[p-1],n=e[d-1],i=t.key,s=n.key;t===n?(h=t.first,d--,p--):g.has(s)?!o.has(i)||y.has(i)?w(t):C.has(s)?d--:v.get(i)>v.get(s)?(C.add(i),w(t)):(y.add(s),d--):(c(n,o),d--)}for(;d--;){const t=e[d];g.has(t.key)||c(t,o)}for(;p;)w(_[p-1]);return _}(i,n,o,1,e,r,s,t,oe,Xd,null,Zd),ie())},i(e){if(!n){for(let e=0;e<r.length;e+=1)se(i[e]);n=!0}},o(e){for(let e=0;e<i.length;e+=1)re(i[e]);n=!1},d(e){e&&C(t);for(let e=0;e<i.length;e+=1)i[e].d()}}}function tp(e,t,n){let i;return l(e,Id,(e=>n(0,i=e))),[i]}class np extends pe{constructor(e){super(),de(this,e,tp,ep,o,{})}}function ip(e){let t,n,i;function s(t){e[1](t)}let r={name:"date"};return void 0!==e[0].date&&(r.value=e[0].date),t=new Rd({props:r}),j.push((()=>function(e,t,n){const i=e.$$.props[t];void 0!==i&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}(t,"value",s))),{c(){le(t.$$.fragment)},m(e,n){he(t,e,n),i=!0},p(e,i){const s={};var r;!n&&1&i&&(n=!0,s.value=e[0].date,r=()=>n=!1,z.push(r)),t.$set(s)},i(e){i||(se(t.$$.fragment,e),i=!0)},o(e){re(t.$$.fragment,e),i=!1},d(e){ue(t,e)}}}function sp(e){let t,n,i,s,r;return n=new Yu({props:{$$slots:{default:[ip]},$$scope:{ctx:e}}}),s=new np({}),{c(){t=T(),le(n.$$.fragment),i=T(),le(s.$$.fragment),document.title="Parking / OpenMedia Parking"},m(e,o){y(e,t,o),he(n,e,o),y(e,i,o),he(s,e,o),r=!0},p(e,[t]){const i={};9&t&&(i.$$scope={dirty:t,ctx:e}),n.$set(i)},i(e){r||(se(n.$$.fragment,e),se(s.$$.fragment,e),r=!0)},o(e){re(n.$$.fragment,e),re(s.$$.fragment,e),r=!1},d(e){e&&C(t),ue(n,e),e&&C(i),ue(s,e)}}}function rp(e,t,n){let i,s;return l(e,eo,(e=>n(2,i=e))),l(e,vd,(e=>n(0,s=e))),L((()=>{pu(i)})),M((()=>{yd.updateData()})),[s,function(t){e.$$.not_equal(s.date,t)&&(s.date=t,vd.set(s))}]}class op extends pe{constructor(e){super(),de(this,e,rp,sp,o,{})}}function ap(t){let n,i,s,r=t[0][0]+"";return{c(){n=w("div"),i=w("span"),s=I(r),S(i,"class","letter svelte-1qivrup"),S(n,"class","avatar svelte-1qivrup")},m(e,t){y(e,n,t),v(n,i),v(i,s)},p(e,[t]){1&t&&r!==(r=e[0][0]+"")&&N(s,r)},i:e,o:e,d(e){e&&C(n)}}}function cp(e,t,n){let{name:i=" "}=t;return e.$$set=e=>{"name"in e&&n(0,i=e.name)},[i]}class lp extends pe{constructor(e){super(),de(this,e,cp,ap,o,{name:0})}}function hp(e){let t,n,i,s,r,o;return n=new lp({props:{name:e[0]}}),{c(){t=w("div"),le(n.$$.fragment),i=T(),s=w("span"),r=I(e[0]),S(s,"class","username svelte-zxmzrp"),S(t,"class","section svelte-zxmzrp")},m(e,a){y(e,t,a),he(n,t,null),v(t,i),v(t,s),v(s,r),o=!0},p(e,t){const i={};1&t&&(i.name=e[0]),n.$set(i),(!o||1&t)&&N(r,e[0])},i(e){o||(se(n.$$.fragment,e),o=!0)},o(e){re(n.$$.fragment,e),o=!1},d(e){e&&C(t),ue(n)}}}function up(t){let n,i;return{c(){n=b("svg"),i=b("path"),S(i,"fill-rule","evenodd"),S(i,"clip-rule","evenodd"),S(i,"d","M9.75 8C9.75 7.86193 9.86193 7.75 10 7.75H22C22.1381 7.75 22.25 7.86193 22.25 8V25C22.25 25.4142 22.5858 25.75 23 25.75C23.4142 25.75 23.75 25.4142 23.75 25V8C23.75 7.0335 22.9665 6.25 22 6.25H10C9.0335 6.25 8.25 7.0335 8.25 8V25C8.25 25.4142 8.58579 25.75 9 25.75C9.41421 25.75 9.75 25.4142 9.75 25V8ZM17.1515 9.96213C17.0625 9.98439 17 10.0644 17 10.1562V22.8764C17 22.9521 17.0428 23.0214 17.1106 23.0553L20.7106 24.8553C20.8435 24.9218 21 24.8251 21 24.6764V9.25616C21 9.12604 20.8777 9.03057 20.7515 9.06213L17.1515 9.96213Z"),S(i,"fill","#8D8D8D"),S(n,"width","32"),S(n,"height","32"),S(n,"viewBox","0 0 32 32"),S(n,"fill","none"),S(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){y(e,n,t),v(n,i)},p:e,d(e){e&&C(n)}}}function dp(e){let t,n,i;return n=new Fu({props:{size:Au.mini,theme:Du.ghost,$$slots:{default:[up]},$$scope:{ctx:e}}}),n.$on("click",e[1]),{c(){t=w("div"),le(n.$$.fragment),S(t,"class","section svelte-zxmzrp")},m(e,s){y(e,t,s),he(n,t,null),i=!0},p(e,t){const i={};16&t&&(i.$$scope={dirty:t,ctx:e}),n.$set(i)},i(e){i||(se(n.$$.fragment,e),i=!0)},o(e){re(n.$$.fragment,e),i=!1},d(e){e&&C(t),ue(n)}}}function pp(e){let t,n;return t=new Md({props:{transparent:!0,$$slots:{right:[dp],left:[hp]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,[n]){const i={};17&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function fp(e,t,n){let i,s,r;return l(e,Xr,(e=>n(2,s=e))),l(e,no,(e=>n(3,r=e))),e.$$.update=()=>{4&e.$$.dirty&&n(0,i=s?.displayName||"")},[i,async function(){try{await(e=r,vn(e).signOut())}catch(e){console.error(e)}var e},s]}class mp extends pe{constructor(e){super(),de(this,e,fp,pp,o,{})}}function _p(t){let n,i,s,r,o,a,c,l,h;return{c(){n=b("svg"),i=b("g"),s=b("path"),r=b("line"),o=b("line"),a=b("path"),c=b("defs"),l=b("clipPath"),h=b("rect"),S(s,"d","M30 20C28.2476 20 27 21.2353 27 23V40H10.0139C8.26147 40 7 41.2353 7 43C7 44.7647 8.24757 46 10 46H30L33 43V23C33 21.2353 31.7524 20 30 20ZM23 20C24.7524 20 26 18.7647 26 17C26 15.2353 24.7524 14 23 14H3L0 17V37C0 38.7647 1.24757 40 3 40C4.75243 40 6 38.7647 6 37V20H23ZM308.93 14C307.178 14 306 15.2353 306 17C306 18.7647 307.248 20 309 20H312V43C312 44.7647 313.248 46 315 46C316.752 46 318 44.7647 318 43V17L315 14H308.93ZM296 0C294.248 0 293 1.23529 293 3V14H269L266 17V37C266 38.7647 267.248 40 269 40C270.752 40 272 38.7647 272 37V20H292.936L293 40H275C273.248 40 272 41.2353 272 43C272 44.7647 273.248 46 275 46H296L299 43V3C299.25 1.23529 298.003 0 296 0ZM107 40H89C87.2476 40 86 41.2353 86 43C86 44.7647 87.2476 46 89 46H107C108.752 46 110 44.7647 110 43C110 41.2353 108.752 40 107 40ZM109 20C107.248 20 106 21.2353 106 23V24V27H86V20H87H103C104.752 20 106 18.7647 106 17C106 15.2353 104.752 14 103 14H83L80 17V37C80 38.7647 81.2476 40 83 40C84.7524 40 86 38.7647 86 37V33H109L112 30V24V23C112 20.9832 110.752 20 109 20ZM143 14H122L119 17V43C119 44.7647 120.248 46 122 46C123.752 46 125 44.7647 125 43V20H143C144.752 20 146 18.7647 146 17C146 15.2353 144.752 14 143 14ZM70 20C68.2476 20 67 22.2353 67 24V40H46V20H63C64.7524 20 67 18.7647 67 17C67 15.2353 64.7524 14 63 14H43.5L40 17V56.5C40 58.2647 41.2476 60 43 60C44.7524 60 46 58.4874 46 56.7227V46H70L73 43.3614V24C73 22.2353 72.0028 20 70 20ZM149 20C147.248 20 146 21.2353 146 23V43C146 44.7647 147.248 46 149 46C150.752 46 152 44.7647 152 43V23C152 21.2353 150.752 20 149 20ZM209 14H176L173 17V43C173 44.7647 174.248 46 176 46C177.752 46 179 44.7647 179 43V20H193V43C193 44.7647 194.248 46 196 46C197.752 46 199 44.7647 199 43V20H209C210.752 20 212 18.7647 212 17C212 15.3793 210.752 14 209 14ZM216 20C214.248 20 213 21.2353 213 23V43C213 44.7647 214.248 46 216 46C217.752 46 219 44.7647 219 43V23C219 21.3067 218.003 20 216 20ZM255 40H235C233.248 40 232 41.2353 232 43C232 44.7647 233 46 234 46H255C256.752 46 258 44.7647 258 43C258 41.2353 256.752 40 255 40ZM256 20C254.248 20 253 21.2353 253 23V24V27H232V20H233.901H250C251.752 20 253 18.7647 253 17C253 15.2353 251.752 14 250 14H229L226 17V37C226 38.7647 227.248 40 229 40C230.752 40 232 38.7647 232 37V33.0252L256 33L259 30V24.0033V23C259 21 258 20 256 20ZM330 20H348C349.752 20 351 18.7647 351 17C351 15.2353 349.739 14 347.986 14H330C328.248 14 327 15.2353 327 17C327 18.7647 328.248 20 330 20ZM357 23C357 21.2353 355.752 20 354 20C352.248 20 351 21.2353 351 23V27H328L325 30V36V37C325 38.7647 326.248 40 328 40C329.752 40 331 38.7647 331 37V36V33H351V40H334C332.248 40 331 41.2353 331 43C331 44.7647 332.248 46 334 46H354L357 43V23Z"),S(s,"fill","#1C63EC"),S(r,"x1","381.503"),S(r,"y1","52.7893"),S(r,"x2","427.789"),S(r,"y2","6.50328"),S(r,"stroke","#7B7B7B"),S(o,"y1","-0.5"),S(o,"x2","65.4583"),S(o,"y2","-0.5"),S(o,"transform","matrix(-0.707107 -0.707107 -0.707107 0.707107 428.143 53.1428)"),S(o,"stroke","#7B7B7B"),S(a,"d","M457.415 45.5V14.9545H466.826C468.765 14.9545 470.425 15.3523 471.808 16.1477C473.2 16.9432 474.268 18.032 475.014 19.4141C475.76 20.7962 476.133 22.3722 476.133 24.142C476.133 25.892 475.76 27.4581 475.014 28.8402C474.268 30.2223 473.2 31.3161 471.808 32.1214C470.425 32.9169 468.77 33.3146 466.841 33.3146H458.727V31.5845H466.796C468.367 31.5845 469.71 31.2663 470.823 30.63C471.937 29.9837 472.792 29.1037 473.388 27.9901C473.985 26.8665 474.283 25.5838 474.283 24.142C474.283 22.6903 473.985 21.4027 473.388 20.2791C472.792 19.1555 471.932 18.2756 470.808 17.6392C469.695 17.0028 468.352 16.6847 466.781 16.6847H459.279V45.5H457.415ZM488.725 45.9922C487.402 45.9922 486.189 45.7287 485.085 45.2017C483.992 44.6747 483.112 43.9041 482.445 42.8899C481.789 41.8757 481.461 40.6428 481.461 39.1911C481.461 38.2365 481.63 37.3963 481.968 36.6705C482.306 35.9446 482.828 35.3182 483.534 34.7912C484.24 34.2642 485.145 33.8317 486.249 33.4936C487.352 33.1456 488.67 32.8771 490.201 32.6882C491.365 32.549 492.404 32.4148 493.318 32.2855C494.233 32.1463 494.949 31.9325 495.466 31.6442C495.993 31.3558 496.257 30.9183 496.257 30.3317V29.3771C496.257 27.7067 495.73 26.3793 494.676 25.3949C493.622 24.4105 492.17 23.9183 490.32 23.9183C488.68 23.9183 487.298 24.2812 486.174 25.0071C485.061 25.723 484.28 26.6477 483.833 27.7812L482.117 27.1399C482.555 26.0462 483.186 25.1364 484.012 24.4105C484.847 23.6847 485.801 23.1428 486.875 22.7848C487.959 22.4268 489.093 22.2479 490.276 22.2479C491.3 22.2479 492.274 22.392 493.199 22.6804C494.134 22.9688 494.964 23.4062 495.69 23.9929C496.426 24.5795 497.007 25.3303 497.435 26.245C497.862 27.1499 498.076 28.2337 498.076 29.4964V45.5H496.257V41.3686H496.122C495.725 42.2237 495.178 43.0043 494.482 43.7102C493.796 44.4062 492.965 44.9631 491.991 45.3807C491.026 45.7884 489.938 45.9922 488.725 45.9922ZM488.904 44.3068C490.335 44.3068 491.603 43.9588 492.707 43.2628C493.82 42.5568 494.691 41.5923 495.317 40.3693C495.943 39.1463 496.257 37.7592 496.257 36.2081V32.8374C496.028 33.0362 495.695 33.2152 495.257 33.3743C494.83 33.5234 494.343 33.6577 493.796 33.777C493.259 33.8864 492.692 33.9858 492.095 34.0753C491.509 34.1548 490.937 34.2294 490.38 34.299C488.71 34.4979 487.347 34.8061 486.294 35.2237C485.249 35.6314 484.484 36.1683 483.997 36.8345C483.519 37.5007 483.281 38.3061 483.281 39.2507C483.281 40.8118 483.818 42.0447 484.892 42.9496C485.965 43.8544 487.303 44.3068 488.904 44.3068ZM505.705 45.5V22.5909H507.48V26.1705H507.644C508.141 24.9972 508.981 24.0575 510.165 23.3516C511.348 22.6357 512.695 22.2777 514.206 22.2777C514.366 22.2777 514.525 22.2777 514.684 22.2777C514.843 22.2777 514.992 22.2827 515.131 22.2926V24.1271C515.012 24.1172 514.868 24.1023 514.699 24.0824C514.54 24.0526 514.341 24.0376 514.102 24.0376C512.829 24.0376 511.696 24.3111 510.702 24.858C509.717 25.4048 508.942 26.1605 508.375 27.125C507.808 28.0795 507.525 29.1733 507.525 30.4062V45.5H505.705ZM521.6 36.5511L521.571 33.9411H522.048L533.502 22.5909H535.874L525.359 33.0312L525.18 33.1058L521.6 36.5511ZM520.02 45.5V14.9545H521.839V45.5H520.02ZM534.025 45.5L524.36 33.2848L525.672 32.0767L536.351 45.5H534.025ZM541.355 45.5V22.5909H543.16V45.5H541.355ZM542.265 18.5341C541.867 18.5341 541.519 18.3949 541.221 18.1165C540.933 17.8381 540.788 17.5 540.788 17.1023C540.788 16.7045 540.933 16.3665 541.221 16.0881C541.509 15.8097 541.857 15.6705 542.265 15.6705C542.663 15.6705 543.006 15.8097 543.294 16.0881C543.592 16.3665 543.741 16.7045 543.741 17.1023C543.741 17.5 543.597 17.8381 543.309 18.1165C543.021 18.3949 542.673 18.5341 542.265 18.5341ZM552.601 30.6449V45.5H550.781V22.5909H552.556V26.2152H552.735C553.272 25.032 554.132 24.0824 555.315 23.3665C556.499 22.6506 557.906 22.2926 559.536 22.2926C561.077 22.2926 562.43 22.6207 563.593 23.277C564.766 23.9332 565.681 24.8679 566.337 26.081C567.004 27.2841 567.337 28.7209 567.337 30.3913V45.5H565.517V30.4659C565.517 28.517 564.935 26.951 563.772 25.7678C562.619 24.5746 561.092 23.978 559.193 23.978C557.92 23.978 556.787 24.2564 555.793 24.8132C554.798 25.37 554.018 26.1506 553.451 27.1548C552.884 28.1491 552.601 29.3125 552.601 30.6449ZM583.161 54.5682C581.739 54.5682 580.462 54.3793 579.328 54.0014C578.195 53.6335 577.23 53.1065 576.435 52.4205C575.649 51.7344 575.048 50.919 574.63 49.9744L576.151 49.0795C576.489 49.8153 576.972 50.4716 577.598 51.0483C578.224 51.625 579 52.0774 579.925 52.4055C580.859 52.7337 581.938 52.8977 583.161 52.8977C585.369 52.8977 587.114 52.326 588.396 51.1825C589.689 50.049 590.335 48.3089 590.335 45.9624V40.2649H590.156C589.808 41.2592 589.291 42.1442 588.605 42.9197C587.929 43.6854 587.099 44.2869 586.114 44.7244C585.13 45.1619 584.011 45.3807 582.759 45.3807C580.949 45.3807 579.358 44.9134 577.986 43.9787C576.614 43.044 575.545 41.7315 574.779 40.0412C574.013 38.3409 573.631 36.3423 573.631 34.0455C573.631 31.7486 574.004 29.7152 574.749 27.9453C575.505 26.1655 576.569 24.7734 577.941 23.7692C579.313 22.755 580.924 22.2479 582.773 22.2479C584.096 22.2479 585.239 22.5014 586.204 23.0085C587.178 23.5057 587.994 24.1669 588.65 24.9922C589.306 25.8175 589.813 26.7223 590.171 27.7067H590.38V22.5909H592.14V46.0369C592.14 47.946 591.762 49.532 591.006 50.7947C590.261 52.0575 589.212 53.0021 587.859 53.6286C586.517 54.255 584.951 54.5682 583.161 54.5682ZM582.923 43.6953C584.454 43.6953 585.771 43.3075 586.875 42.532C587.989 41.7464 588.844 40.6328 589.44 39.1911C590.047 37.7393 590.35 36.0192 590.35 34.0305C590.35 32.1016 590.057 30.3764 589.47 28.8551C588.884 27.3338 588.033 26.1357 586.92 25.2607C585.806 24.3857 584.474 23.9482 582.923 23.9482C581.342 23.9482 579.994 24.3956 578.881 25.2905C577.767 26.1754 576.912 27.3786 576.315 28.8999C575.729 30.4212 575.435 32.1314 575.435 34.0305C575.435 35.9396 575.734 37.62 576.33 39.0717C576.927 40.5135 577.782 41.647 578.896 42.4723C580.009 43.2876 581.352 43.6953 582.923 43.6953Z"),S(a,"fill","#7B7B7B"),S(i,"clip-path","url(#clip0_505_7)"),S(h,"width","597"),S(h,"height","60"),S(h,"fill","white"),S(l,"id","clip0_505_7"),S(n,"class","logo svelte-1517jcm"),S(n,"width","597"),S(n,"height","60"),S(n,"viewBox","0 0 597 60"),S(n,"fill","none"),S(n,"xmlns","http://www.w3.org/2000/svg")},m(e,t){y(e,n,t),v(n,i),v(i,s),v(i,r),v(i,o),v(i,a),v(n,c),v(c,l),v(l,h)},p:e,d(e){e&&C(n)}}}function gp(e){let t,n,i;return n=new mp({}),{c(){t=w("div"),le(n.$$.fragment),S(t,"class","profile svelte-1517jcm")},m(e,s){y(e,t,s),he(n,t,null),i=!0},i(e){i||(se(n.$$.fragment,e),i=!0)},o(e){re(n.$$.fragment,e),i=!1},d(e){e&&C(t),ue(n)}}}function vp(e){let t,n,i,s;n=new Dt({props:{to:Yr,$$slots:{default:[_p]},$$scope:{ctx:e}}});let r=e[0]&&gp();return{c(){t=w("header"),le(n.$$.fragment),i=T(),r&&r.c(),S(t,"class","svelte-1517jcm")},m(e,o){y(e,t,o),he(n,t,null),v(t,i),r&&r.m(t,null),s=!0},p(e,[i]){const s={};2&i&&(s.$$scope={dirty:i,ctx:e}),n.$set(s),e[0]?r?1&i&&se(r,1):(r=gp(),r.c(),se(r,1),r.m(t,null)):r&&(ne(),re(r,1,1,(()=>{r=null})),ie())},i(e){s||(se(n.$$.fragment,e),se(r),s=!0)},o(e){re(n.$$.fragment,e),re(r),s=!1},d(e){e&&C(t),ue(n),r&&r.d()}}}function yp(e,t,n){let i;return l(e,eo,(e=>n(0,i=e))),[i]}class Cp extends pe{constructor(e){super(),de(this,e,yp,vp,o,{})}}function wp(t){let n;return{c(){n=w("p"),n.textContent="Loading..."},m(e,t){y(e,n,t)},p:e,i:e,o:e,d(e){e&&C(n)}}}function bp(e){let t,n,i,s;return t=new Pt({props:{path:Zr.home,$$slots:{default:[Ip]},$$scope:{ctx:e}}}),i=new Pt({props:{path:Zr.signIn,$$slots:{default:[Tp]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment),n=T(),le(i.$$.fragment)},m(e,r){he(t,e,r),y(e,n,r),he(i,e,r),s=!0},p(e,n){const s={};8&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const r={};8&n&&(r.$$scope={dirty:n,ctx:e}),i.$set(r)},i(e){s||(se(t.$$.fragment,e),se(i.$$.fragment,e),s=!0)},o(e){re(t.$$.fragment,e),re(i.$$.fragment,e),s=!1},d(e){ue(t,e),e&&C(n),ue(i,e)}}}function Ip(e){let t,n;return t=new op({}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function Tp(e){let t,n;return t=new gd({}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function kp(e){let t,n,i,s,r,o;n=new Cp({});const a=[bp,wp],c=[];function l(e,t){return e[0]?0:1}return s=l(e),r=c[s]=a[s](e),{c(){t=w("main"),le(n.$$.fragment),i=T(),r.c(),S(t,"class","main svelte-k3jh0v")},m(e,r){y(e,t,r),he(n,t,null),v(t,i),c[s].m(t,null),o=!0},p(e,n){let i=s;s=l(e),s===i?c[s].p(e,n):(ne(),re(c[i],1,1,(()=>{c[i]=null})),ie(),r=c[s],r?r.p(e,n):(r=c[s]=a[s](e),r.c()),se(r,1),r.m(t,null))},i(e){o||(se(n.$$.fragment,e),se(r),o=!0)},o(e){re(n.$$.fragment,e),re(r),o=!1},d(e){e&&C(t),ue(n),c[s].d()}}}function Ep(e){let t,n;return t=new _t({props:{primary:!1,basepath:Yr,$$slots:{default:[kp]},$$scope:{ctx:e}}}),{c(){le(t.$$.fragment)},m(e,i){he(t,e,i),n=!0},p(e,[n]){const i={};9&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(se(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){ue(t,e)}}}function Sp(e,t,n){let i,s;l(e,Xr,(e=>n(1,i=e))),l(e,no,(e=>n(2,s=e)));let r=!1;return M((()=>{!function(e,t,n,i){vn(e).onAuthStateChanged(t,n,i)}(s,(e=>{var t;i=e,t=i,Xr.set(t),n(0,r=!0)}))})),[r]}return new class extends pe{constructor(e){super(),de(this,e,Sp,Ep,o,{})}}({target:document.body})}();
