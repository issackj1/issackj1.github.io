var wt=Object.defineProperty;var Ct=Object.getOwnPropertyDescriptor;var a=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ct(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&wt(t,e,s),s};var Y=globalThis,K=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),pt=new WeakMap,j=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&pt.set(e,t))}return t}toString(){return this.cssText}},dt=r=>new j(typeof r=="string"?r:r+"",void 0,G),v=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new j(e,r,G)},mt=(r,t)=>{if(K)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=Y.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},tt=K?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return dt(e)})(r):r;var{is:Ut,defineProperty:Dt,getOwnPropertyDescriptor:Lt,getOwnPropertyNames:Pt,getOwnPropertySymbols:Rt,getPrototypeOf:Ot}=Object,Z=globalThis,ut=Z.trustedTypes,Tt=ut?ut.emptyScript:"",Nt=Z.reactiveElementPolyfillSupport,I=(r,t)=>r,M={toAttribute(r,t){switch(t){case Boolean:r=r?Tt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},J=(r,t)=>!Ut(r,t),ft={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ft){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Dt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:o}=Lt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let p=s?.call(this);o?.call(this,n),this.requestUpdate(t,p,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ft}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;let t=Ot(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){let e=this.properties,i=[...Pt(e),...Rt(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(tt(s))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:M).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:M;this._$Em=s,this[s]=n.fromAttribute(e,o.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){let s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??J)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,o]of i){let{wrapped:n}=o,p=this[s];n!==!0||this._$AL.has(s)||p===void 0||this.C(s,void 0,o,p)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[I("elementProperties")]=new Map,E[I("finalized")]=new Map,Nt?.({ReactiveElement:E}),(Z.reactiveElementVersions??=[]).push("2.1.0");var at=globalThis,Q=at.trustedTypes,gt=Q?Q.createPolicy("lit-html",{createHTML:r=>r}):void 0,At="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+C,zt=`<${St}>`,P=document,q=()=>P.createComment(""),V=r=>r===null||typeof r!="object"&&typeof r!="function",lt=Array.isArray,jt=r=>lt(r)||typeof r?.[Symbol.iterator]=="function",et=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,yt=/>/g,D=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,$t=/"/g,xt=/^(?:script|style|textarea|title)$/i,ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=ct(1),Zt=ct(2),Jt=ct(3),R=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),bt=new WeakMap,L=P.createTreeWalker(P,129);function Et(r,t){if(!lt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}var It=(r,t)=>{let e=r.length-1,i=[],s,o=t===2?"<svg>":t===3?"<math>":"",n=H;for(let p=0;p<e;p++){let l=r[p],f,y,d=-1,x=0;for(;x<l.length&&(n.lastIndex=x,y=n.exec(l),y!==null);)x=n.lastIndex,n===H?y[1]==="!--"?n=vt:y[1]!==void 0?n=yt:y[2]!==void 0?(xt.test(y[2])&&(s=RegExp("</"+y[2],"g")),n=D):y[3]!==void 0&&(n=D):n===D?y[0]===">"?(n=s??H,d=-1):y[1]===void 0?d=-2:(d=n.lastIndex-y[2].length,f=y[1],n=y[3]===void 0?D:y[3]==='"'?$t:_t):n===$t||n===_t?n=D:n===vt||n===yt?n=H:(n=D,s=void 0);let w=n===D&&r[p+1].startsWith("/>")?" ":"";o+=n===H?l+zt:d>=0?(i.push(f),l.slice(0,d)+At+l.slice(d)+C+w):l+C+(d===-2?p:w)}return[Et(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},F=class r{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0,p=t.length-1,l=this.parts,[f,y]=It(t,e);if(this.el=r.createElement(f,i),L.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=L.nextNode())!==null&&l.length<p;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(At)){let x=y[n++],w=s.getAttribute(d).split(C),W=/([.?@])?(.*)/.exec(x);l.push({type:1,index:o,name:W[2],strings:w,ctor:W[1]==="."?st:W[1]==="?"?rt:W[1]==="@"?ot:T}),s.removeAttribute(d)}else d.startsWith(C)&&(l.push({type:6,index:o}),s.removeAttribute(d));if(xt.test(s.tagName)){let d=s.textContent.split(C),x=d.length-1;if(x>0){s.textContent=Q?Q.emptyScript:"";for(let w=0;w<x;w++)s.append(d[w],q()),L.nextNode(),l.push({type:2,index:++o});s.append(d[x],q())}}}else if(s.nodeType===8)if(s.data===St)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(C,d+1))!==-1;)l.push({type:7,index:o}),d+=C.length-1}o++}}static createElement(t,e){let i=P.createElement("template");return i.innerHTML=t,i}};function O(r,t,e=r,i){if(t===R)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,o=V(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=O(r,s._$AS(r,t.values),s,i)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);L.currentNode=s;let o=L.nextNode(),n=0,p=0,l=i[0];for(;l!==void 0;){if(n===l.index){let f;l.type===2?f=new B(o,o.nextSibling,this,t):l.type===1?f=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(f=new nt(o,this,t)),this._$AV.push(f),l=i[++p]}n!==l?.index&&(o=L.nextNode(),n++)}return L.currentNode=P,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},B=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),V(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):jt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=F.createElement(Et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let o=new it(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new F(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let o of t)s===e.length?e.push(i=new r(this.O(q()),this.O(q()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},T=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,e=this,i,s){let o=this.strings,n=!1;if(o===void 0)t=O(this,t,e,0),n=!V(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{let p=t,l,f;for(t=o[0],l=0;l<o.length-1;l++)f=O(this,p[i+l],e,l),f===R&&(f=this._$AH[l]),n||=!V(f)||f!==this._$AH[l],f===g?t=g:t!==g&&(t+=(f??"")+o[l+1]),this._$AH[l]=f}n&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},rt=class extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},ot=class extends T{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??g)===R)return;let i=this._$AH,s=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}};var Mt=at.litHtmlPolyfillSupport;Mt?.(F,B),(at.litHtmlVersions??=[]).push("3.3.0");var kt=(r,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let o=e?.renderBefore??null;i._$litPart$=s=new B(t.insertBefore(q(),o),o,void 0,e??{})}return s._$AI(r),s};var ht=globalThis,m=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};m._$litElement$=!0,m.finalized=!0,ht.litElementHydrateSupport?.({LitElement:m});var Ht=ht.litElementPolyfillSupport;Ht?.({LitElement:m});(ht.litElementVersions??=[]).push("4.2.0");var _=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var qt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:J},Vt=(r=qt,t,e)=>{let{kind:i,metadata:s}=e,o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){let{name:n}=e;return{set(p){let l=t.get.call(this);t.set.call(this,p),this.requestUpdate(n,l,r)},init(p){return p!==void 0&&this.C(n,void 0,r,p),p}}}if(i==="setter"){let{name:n}=e;return function(p){let l=this[n];t.call(this,p),this.requestUpdate(n,l,r)}}throw Error("Unsupported decorator location: "+i)};function h(r){return(t,e)=>typeof e=="object"?Vt(r,t,e):((i,s,o)=>{let n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}function u(r){return h({...r,state:!0,attribute:!1})}var U=class extends m{constructor(){super(...arguments);this.endValue=0;this.duration=2e3;this._currentValue=0;this._observer=null;this._animationFrameId=null}connectedCallback(){super.connectedCallback(),this._observer=new IntersectionObserver(this._handleIntersection.bind(this),{threshold:.5}),this._observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._observer&&(this._observer.disconnect(),this._observer=null),this._animationFrameId&&cancelAnimationFrame(this._animationFrameId)}_handleIntersection(e){e.forEach(i=>{i.isIntersecting&&(this._startAnimation(),this._observer&&this._observer.unobserve(this))})}_startAnimation(){let e=null,i=s=>{e||(e=s);let o=s-e,n=Math.min(o/this.duration,1);this._currentValue=Math.floor(n*this.endValue),n<1?this._animationFrameId=requestAnimationFrame(i):this._currentValue=this.endValue};this._animationFrameId=requestAnimationFrame(i)}render(){return c`${this._currentValue}`}};U.styles=v`
    :host {
      display: inline-block; /* Or span if preferred, but inline-block is safer for layout */
      font-weight: bold;
      color: var(--accent-color, #2563EB);
    }
  `,a([h({type:Number})],U.prototype,"endValue",2),a([h({type:Number})],U.prototype,"duration",2),a([u()],U.prototype,"_currentValue",2),U=a([_("metrics-counter")],U);var b=class extends m{constructor(){super(...arguments);this.headline="I build products that ship.";this.subhead="Full-stack developer. From concept to deployment, I create software people actually use.";this.ctaText="See the work \u2193";this.ctaLink="#projects";this._totalProductsShipped=null;this._monthsActive=null;this._isLoadingStats=!0;this._statsError=null}connectedCallback(){super.connectedCallback(),this._fetchStats()}_calculateMonthsBetween(e,i){let s=new Date(e),o=new Date(i);if(isNaN(s.getTime())||isNaN(o.getTime()))return 0;let n=(o.getFullYear()-s.getFullYear())*12;return n-=s.getMonth(),n+=o.getMonth(),n<=0?0:n}async _fetchStats(){this._isLoadingStats=!0,this._statsError=null;try{let e=await fetch("/data/stats.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let i=await e.json();this._totalProductsShipped=i.totalProductsShipped;let s="2025-12-17";i.firstReleaseDate?this._monthsActive=this._calculateMonthsBetween(i.firstReleaseDate,s):this._monthsActive=0}catch(e){console.error("Error fetching stats data:",e),this._statsError="Could not load stats.",this._totalProductsShipped=4,this._monthsActive=16}finally{this._isLoadingStats=!1}}render(){return c`
      <h1 class="statement">${this.headline}</h1>
      
      <p class="bio">${this.subhead}</p>
      
      <div class="evidence">
        <div class="evidence-item">
          <span class="evidence-value">
            ${this._isLoadingStats?"\u2014":this._totalProductsShipped}
          </span>
          <span class="evidence-label">Products Shipped</span>
        </div>
        <div class="evidence-item">
          <span class="evidence-value">
            ${this._isLoadingStats?"\u2014":this._monthsActive}
          </span>
          <span class="evidence-label">Months Active</span>
        </div>
      </div>
      
      <a href="${this.ctaLink}" class="cta">${this.ctaText}</a>
    `}};b.styles=v`
    :host {
      display: block;
      padding: 16vh 0 8vh 0;
      border-bottom: 1px solid var(--border);
    }

    .statement {
      font-family: var(--font-display);
      font-size: var(--type-display);
      font-weight: 400;
      font-style: italic;
      line-height: 1.1;
      letter-spacing: -0.02em;
      margin: 0 0 2rem 0;
      color: var(--ink);
    }

    .bio {
      font-size: var(--type-body);
      line-height: 1.7;
      color: var(--gray);
      max-width: 540px;
      margin: 0 0 2rem 0;
    }

    .evidence {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-bottom: 2rem;
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
    }

    .evidence-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .evidence-value {
      font-size: 1.5rem;
      font-weight: 500;
      color: var(--ink);
      font-family: var(--font-body);
    }

    .evidence-label {
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .cta {
      display: inline-block;
      font-size: var(--type-body);
      font-weight: 500;
      color: var(--ink);
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 1px;
      transition: text-decoration-thickness var(--transition);
    }

    .cta:hover {
      text-decoration-thickness: 2px;
    }

    .loading-text, .error-message {
      color: var(--gray);
      font-size: var(--type-small);
    }
  `,a([h({type:String})],b.prototype,"headline",2),a([h({type:String})],b.prototype,"subhead",2),a([h({type:String})],b.prototype,"ctaText",2),a([h({type:String})],b.prototype,"ctaLink",2),a([u()],b.prototype,"_totalProductsShipped",2),a([u()],b.prototype,"_monthsActive",2),a([u()],b.prototype,"_isLoadingStats",2),a([u()],b.prototype,"_statsError",2),b=a([_("hero-section")],b);var $=class extends m{constructor(){super(...arguments);this.title="Project Title";this.role="Role";this.description="";this.imageUrl="";this.techStack=[];this.liveDemoLink="";this.githubRepoLink="";this._imageLoaded=!1;this._imageError=!1}_handleImageLoad(){this._imageLoaded=!0}_handleImageError(){this._imageError=!0}render(){let e=this.imageUrl&&!this._imageError;return c`
      <article class="card">
        <div class="card-header">
          <h3>${this.title}</h3>
          <span class="role">${this.role}</span>
        </div>
        
        ${this.description?c`<p class="description">${this.description}</p>`:""}
        
        ${this.techStack.length>0?c`
          <div class="tech-stack">
            ${this.techStack.map(i=>c`<span class="tech-tag">${i}</span>`)}
          </div>
        `:""}
        
        <div class="links">
          ${this.liveDemoLink?c`<a href="${this.liveDemoLink}" target="_blank" rel="noopener noreferrer">Live →</a>`:""}
          ${this.githubRepoLink?c`<a href="${this.githubRepoLink}" target="_blank" rel="noopener noreferrer">Source →</a>`:""}
        </div>

        ${e?c`
          <img 
            src="${this.imageUrl}" 
            alt="${this.title}" 
            class="card-image ${this._imageLoaded?"":"loading"}"
            @load=${this._handleImageLoad}
            @error=${this._handleImageError}
            loading="lazy"
          >
        `:""}
      </article>
    `}};$.styles=v`
    :host {
      display: block;
    }

    .card {
      border-bottom: 1px solid var(--border);
      padding: 1.5rem 0;
      margin: 0 -1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      transition: background var(--transition);
    }

    .card:hover {
      background: var(--faint);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 0.75rem;
    }

    h3 {
      font-family: var(--font-display);
      font-size: var(--type-headline);
      font-weight: 400;
      font-style: italic;
      margin: 0;
      color: var(--ink);
      line-height: 1.2;
    }

    .role {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .description {
      color: var(--gray);
      margin: 0 0 0.75rem 0;
      max-width: 540px;
      line-height: 1.6;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 0.75rem;
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
    }

    .tech-tag::before {
      content: '·';
      margin-right: 0.75rem;
    }

    .tech-tag:first-child::before {
      content: '';
      margin-right: 0;
    }

    .links {
      display: flex;
      gap: 1.5rem;
    }

    .links a {
      font-size: var(--type-small);
      font-weight: 500;
      color: var(--ink);
    }

    /* Image as evidence */
    .card-image {
      display: block;
      width: 100%;
      max-width: 100%;
      margin-top: 1rem;
      border: 1px solid var(--border);
      opacity: 1;
      transition: opacity 0.2s ease;
    }

    .card-image.loading {
      opacity: 0;
      height: 200px; /* Reserve space while loading */
    }
  `,a([h({type:String})],$.prototype,"title",2),a([h({type:String})],$.prototype,"role",2),a([h({type:String})],$.prototype,"description",2),a([h({type:String})],$.prototype,"imageUrl",2),a([h({type:Array})],$.prototype,"techStack",2),a([h({type:String})],$.prototype,"liveDemoLink",2),a([h({type:String})],$.prototype,"githubRepoLink",2),a([u()],$.prototype,"_imageLoaded",2),a([u()],$.prototype,"_imageError",2),$=a([_("project-card")],$);var A=class extends m{constructor(){super(...arguments);this.projectsDataSrc="/data/projects.json";this.gridTitle="Work";this.gridSubtitle="Selected projects";this._projects=[];this._isLoadingProjects=!0;this._projectsError=null}connectedCallback(){super.connectedCallback(),this._fetchProjects()}async _fetchProjects(){this._isLoadingProjects=!0,this._projectsError=null;try{let e=await fetch(this.projectsDataSrc);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);this._projects=await e.json()}catch(e){console.error("Error fetching project data:",e),this._projectsError="Failed to load projects."}finally{this._isLoadingProjects=!1}}render(){return this._isLoadingProjects?c`<div class="loading-message">Loading...</div>`:this._projectsError?c`<div class="error-message">${this._projectsError}</div>`:this._projects.length===0?c`<div class="no-items-message">No projects yet.</div>`:c`
      <section id="projects">
        <div class="section-header">
          ${this.gridTitle?c`<h2>${this.gridTitle}</h2>`:""}
          ${this.gridSubtitle?c`<p class="section-subtitle">${this.gridSubtitle}</p>`:""}
        </div>
        <div class="project-list">
          ${this._projects.map(e=>c`
            <project-card
              .title=${e.title}
              .role=${e.role}
              .description=${e.description||""}
              .imageUrl=${e.imageUrl}
              .liveDemoLink=${e.liveDemoLink}
              .githubRepoLink=${e.githubRepoLink}
              .techStack=${e.techStack||[]}
            ></project-card>
          `)}
        </div>
      </section>
    `}};A.styles=v`
    :host {
      display: block;
      padding: 4rem 0;
    }

    .section-header {
      margin-bottom: 3rem;
    }

    h2 {
      font-family: var(--font-display);
      font-size: var(--type-headline);
      font-weight: 400;
      font-style: italic;
      margin: 0 0 0.5rem 0;
      color: var(--ink);
    }

    .section-subtitle {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .project-list {
      display: flex;
      flex-direction: column;
    }

    .loading-message, .error-message, .no-items-message {
      padding: 2rem 0;
      color: var(--gray);
      font-family: var(--font-mono);
      font-size: var(--type-mono);
    }
  `,a([h({type:String})],A.prototype,"projectsDataSrc",2),a([h({type:String})],A.prototype,"gridTitle",2),a([h({type:String})],A.prototype,"gridSubtitle",2),a([u()],A.prototype,"_projects",2),a([u()],A.prototype,"_isLoadingProjects",2),a([u()],A.prototype,"_projectsError",2),A=a([_("project-grid")],A);var S=class extends m{constructor(){super(...arguments);this.dataSrc="/data/releases.json";this.timelineTitle="Timeline";this.timelineSubtitle="Recent releases";this._items=[];this._isLoading=!0;this._error=null}connectedCallback(){super.connectedCallback(),this._fetchData()}async _fetchData(){this._isLoading=!0,this._error=null;try{let e=await fetch(this.dataSrc);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);this._items=await e.json()}catch(e){console.error("Error fetching timeline data:",e),this._error="Failed to load timeline."}this._isLoading=!1}_formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"short",year:"numeric"})}render(){return this._isLoading?c`<div class="loading-message">Loading...</div>`:this._error?c`<div class="error-message">${this._error}</div>`:this._items.length===0?c`<div class="no-items-message">No releases yet.</div>`:c`
      <section id="timeline">
        <div class="section-header">
          ${this.timelineTitle?c`<h2>${this.timelineTitle}</h2>`:""}
          ${this.timelineSubtitle?c`<p class="section-subtitle">${this.timelineSubtitle}</p>`:""}
        </div>
        <div class="timeline">
          ${this._items.map(e=>c`
            <div class="timeline-item">
              <div class="timeline-date">${this._formatDate(e.date)}</div>
              <div class="timeline-content">
                <div class="timeline-title">${e.title}</div>
                <div class="timeline-description">${e.description}</div>
                ${e.link?c`<a href="${e.link}" target="_blank" rel="noopener noreferrer" class="timeline-link">View →</a>`:""}
              </div>
            </div>
          `)}
        </div>
      </section>
    `}};S.styles=v`
    :host {
      display: block;
      padding: 3rem 0;
      border-bottom: 1px solid var(--border);
    }

    .section-header {
      margin-bottom: 2rem;
    }

    h2 {
      font-family: var(--font-display);
      font-size: var(--type-headline);
      font-weight: 400;
      font-style: italic;
      margin: 0 0 0.5rem 0;
      color: var(--ink);
    }

    .section-subtitle {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .timeline {
      display: flex;
      flex-direction: column;
    }

    .timeline-item {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 1.5rem;
      padding: 1rem 0;
      margin: 0 -1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      border-top: 1px solid var(--border);
      transition: background var(--transition);
    }

    .timeline-item:hover {
      background: var(--faint);
    }

    @media (max-width: 600px) {
      .timeline-item {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
    }

    .timeline-date {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
    }

    .timeline-content {
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
    }

    .timeline-title {
      font-weight: 500;
      color: var(--ink);
      line-height: 1.4;
    }

    .timeline-description {
      color: var(--gray);
      line-height: 1.6;
    }

    .timeline-link {
      font-size: var(--type-small);
      font-weight: 500;
      color: var(--ink);
      margin-top: 0.25rem;
    }

    .loading-message, .error-message, .no-items-message {
      padding: 2rem 0;
      color: var(--gray);
      font-family: var(--font-mono);
      font-size: var(--type-mono);
    }
  `,a([h({type:String})],S.prototype,"dataSrc",2),a([h({type:String})],S.prototype,"timelineTitle",2),a([h({type:String})],S.prototype,"timelineSubtitle",2),a([u()],S.prototype,"_items",2),a([u()],S.prototype,"_isLoading",2),a([u()],S.prototype,"_error",2),S=a([_("timeline-list")],S);var k=class extends m{constructor(){super(...arguments);this.aboutTitle="Contact";this.bio="Available for new opportunities. Let's build something.";this.linkedinUrl="https://www.linkedin.com/in/issack-john/";this.githubUrl="https://github.com/issackj1"}render(){return c`
      <section id="about">
        <div class="section-header">
          <h2>${this.aboutTitle}</h2>
          <p class="section-subtitle">Get in touch</p>
        </div>
        <p class="bio">${this.bio}</p>
        <div class="contact-links">
          ${this.linkedinUrl?c`<a href="${this.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="social-link">LinkedIn →</a>`:""}
          ${this.githubUrl?c`<a href="${this.githubUrl}" target="_blank" rel="noopener noreferrer" class="social-link">GitHub →</a>`:""}
        </div>
      </section>
    `}};k.styles=v`
    :host {
      display: block;
      padding: 4rem 0;
    }

    .section-header {
      margin-bottom: 2rem;
    }

    h2 {
      font-family: var(--font-display);
      font-size: var(--type-headline);
      font-weight: 400;
      font-style: italic;
      margin: 0 0 0.5rem 0;
      color: var(--ink);
    }

    .section-subtitle {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    p.bio {
      font-size: var(--type-body);
      line-height: 1.8;
      max-width: 540px;
      margin: 0 0 2rem 0;
      color: var(--gray);
    }

    .contact-links {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .social-link {
      font-weight: 500;
      color: var(--ink);
    }
  `,a([h({type:String})],k.prototype,"aboutTitle",2),a([h({type:String})],k.prototype,"bio",2),a([h({type:String})],k.prototype,"linkedinUrl",2),a([h({type:String})],k.prototype,"githubUrl",2),k=a([_("about-me")],k);var N=class extends m{constructor(){super(...arguments);this.copyrightYear=new Date().getFullYear().toString()}render(){return c`
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="#projects">Work</a>
            <a href="#timeline">Timeline</a>
            <a href="#about">Contact</a>
          </div>
          <p>© ${this.copyrightYear}</p>
        </div>
      </footer>
    `}};N.styles=v`
    :host {
      display: block;
    }

    footer {
      padding: 3rem 2rem;
      border-top: 1px solid var(--border);
      max-width: var(--max-width);
      margin: 0 auto;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-links {
      display: flex;
      gap: 1.5rem;
    }

    .footer-links a {
      font-size: var(--type-small);
      color: var(--gray);
    }

    p {
      margin: 0;
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--gray);
    }
  `,a([h({type:String})],N.prototype,"copyrightYear",2),N=a([_("footer-bar")],N);var z=class extends m{constructor(){super(...arguments);this._isDark=!1}connectedCallback(){super.connectedCallback();let e=localStorage.getItem("theme");e?this._isDark=e==="dark":this._isDark=window.matchMedia("(prefers-color-scheme: dark)").matches,this._applyTheme()}_applyTheme(){document.documentElement.setAttribute("data-theme",this._isDark?"dark":"light"),this.setAttribute("data-theme",this._isDark?"dark":"light"),localStorage.setItem("theme",this._isDark?"dark":"light")}_toggleTheme(){this._isDark=!this._isDark,this._applyTheme()}render(){return c`
      <button 
        @click=${this._toggleTheme} 
        aria-label="Toggle theme"
        title="${this._isDark?"Switch to light mode":"Switch to dark mode"}"
      >
        ${this._isDark?"Light":"Dark"}
      </button>
    `}};z.styles=v`
    :host {
      position: fixed;
      top: 1.5rem;
      right: 2rem;
      z-index: 1000;
    }

    button {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      padding: 0.5rem 0.75rem;
      background: var(--paper);
      border: 1px solid var(--border);
      color: var(--ink);
      cursor: pointer;
      transition: opacity var(--transition);
    }

    button:hover {
      opacity: 0.6;
    }
  `,a([u()],z.prototype,"_isDark",2),z=a([_("theme-toggle")],z);console.log("Portfolio components loaded.");
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
