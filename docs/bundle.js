var St=Object.defineProperty;var Ct=Object.getOwnPropertyDescriptor;var a=(s,t,e,r)=>{for(var i=r>1?void 0:r?Ct(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(r?n(t,e,i):n(i))||i);return r&&i&&St(t,e,i),i};var W=globalThis,K=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),dt=new WeakMap,M=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&dt.set(e,t))}return t}toString(){return this.cssText}},pt=s=>new M(typeof s=="string"?s:s+"",void 0,G),b=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new M(e,s,G)},mt=(s,t)=>{if(K)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),i=W.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}},tt=K?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return pt(e)})(s):s;var{is:Pt,defineProperty:Rt,getOwnPropertyDescriptor:Ut,getOwnPropertyNames:Ot,getOwnPropertySymbols:Tt,getPrototypeOf:Dt}=Object,J=globalThis,ut=J.trustedTypes,Lt=ut?ut.emptyScript:"",jt=J.reactiveElementPolyfillSupport,I=(s,t)=>s,N={toAttribute(s,t){switch(t){case Boolean:s=s?Lt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Z=(s,t)=>!Pt(s,t),gt={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??=Symbol("metadata"),J.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Rt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:o}=Ut(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let d=i?.call(this);o?.call(this,n),this.requestUpdate(t,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gt}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;let t=Dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){let e=this.properties,r=[...Ot(e),...Tt(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(tt(i))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:N).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=r.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:N;this._$Em=i,this[i]=n.fromAttribute(e,o.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){let i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??Z)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:o},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r){let{wrapped:n}=o,d=this[i];n!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,o,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[I("elementProperties")]=new Map,E[I("finalized")]=new Map,jt?.({ReactiveElement:E}),(J.reactiveElementVersions??=[]).push("2.1.0");var at=globalThis,X=at.trustedTypes,ft=X?X.createPolicy("lit-html",{createHTML:s=>s}):void 0,xt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+C,Mt=`<${kt}>`,O=document,q=()=>O.createComment(""),F=s=>s===null||typeof s!="object"&&typeof s!="function",lt=Array.isArray,It=s=>lt(s)||typeof s?.[Symbol.iterator]=="function",et=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,vt=/>/g,R=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,yt=/"/g,wt=/^(?:script|style|textarea|title)$/i,ct=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),l=ct(1),Jt=ct(2),Zt=ct(3),T=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),$t=new WeakMap,U=O.createTreeWalker(O,129);function At(s,t){if(!lt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(t):t}var Nt=(s,t)=>{let e=s.length-1,r=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=z;for(let d=0;d<e;d++){let c=s[d],g,v,p=-1,A=0;for(;A<c.length&&(n.lastIndex=A,v=n.exec(c),v!==null);)A=n.lastIndex,n===z?v[1]==="!--"?n=bt:v[1]!==void 0?n=vt:v[2]!==void 0?(wt.test(v[2])&&(i=RegExp("</"+v[2],"g")),n=R):v[3]!==void 0&&(n=R):n===R?v[0]===">"?(n=i??z,p=-1):v[1]===void 0?p=-2:(p=n.lastIndex-v[2].length,g=v[1],n=v[3]===void 0?R:v[3]==='"'?yt:_t):n===yt||n===_t?n=R:n===bt||n===vt?n=z:(n=R,i=void 0);let S=n===R&&s[d+1].startsWith("/>")?" ":"";o+=n===z?c+Mt:p>=0?(r.push(g),c.slice(0,p)+xt+c.slice(p)+C+S):c+C+(p===-2?d:S)}return[At(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},H=class s{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0,d=t.length-1,c=this.parts,[g,v]=Nt(t,e);if(this.el=s.createElement(g,r),U.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=U.nextNode())!==null&&c.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(xt)){let A=v[n++],S=i.getAttribute(p).split(C),Y=/([.?@])?(.*)/.exec(A);c.push({type:1,index:o,name:Y[2],strings:S,ctor:Y[1]==="."?it:Y[1]==="?"?st:Y[1]==="@"?ot:j}),i.removeAttribute(p)}else p.startsWith(C)&&(c.push({type:6,index:o}),i.removeAttribute(p));if(wt.test(i.tagName)){let p=i.textContent.split(C),A=p.length-1;if(A>0){i.textContent=X?X.emptyScript:"";for(let S=0;S<A;S++)i.append(p[S],q()),U.nextNode(),c.push({type:2,index:++o});i.append(p[A],q())}}}else if(i.nodeType===8)if(i.data===kt)c.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(C,p+1))!==-1;)c.push({type:7,index:o}),p+=C.length-1}o++}}static createElement(t,e){let r=O.createElement("template");return r.innerHTML=t,r}};function L(s,t,e=s,r){if(t===T)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl,o=F(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=L(s,i._$AS(s,t.values),i,r)),t}var rt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);U.currentNode=i;let o=U.nextNode(),n=0,d=0,c=r[0];for(;c!==void 0;){if(n===c.index){let g;c.type===2?g=new V(o,o.nextSibling,this,t):c.type===1?g=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(g=new nt(o,this,t)),this._$AV.push(g),c=r[++d]}n!==c?.index&&(o=U.nextNode(),n++)}return U.currentNode=O,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},V=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),F(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):It(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=H.createElement(At(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new rt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new H(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let o of t)i===e.length?e.push(r=new s(this.O(q()),this.O(q()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},j=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=f}_$AI(t,e=this,r,i){let o=this.strings,n=!1;if(o===void 0)t=L(this,t,e,0),n=!F(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{let d=t,c,g;for(t=o[0],c=0;c<o.length-1;c++)g=L(this,d[r+c],e,c),g===T&&(g=this._$AH[c]),n||=!F(g)||g!==this._$AH[c],g===f?t=f:t!==f&&(t+=(g??"")+o[c+1]),this._$AH[c]=g}n&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},st=class extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},ot=class extends j{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??f)===T)return;let r=this._$AH,i=t===f&&r!==f||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==f&&(r===f||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}};var zt=at.litHtmlPolyfillSupport;zt?.(H,V),(at.litHtmlVersions??=[]).push("3.3.0");var Et=(s,t,e)=>{let r=e?.renderBefore??t,i=r._$litPart$;if(i===void 0){let o=e?.renderBefore??null;r._$litPart$=i=new V(t.insertBefore(q(),o),o,void 0,e??{})}return i._$AI(s),i};var ht=globalThis,m=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};m._$litElement$=!0,m.finalized=!0,ht.litElementHydrateSupport?.({LitElement:m});var qt=ht.litElementPolyfillSupport;qt?.({LitElement:m});(ht.litElementVersions??=[]).push("4.2.0");var _=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};var Ft={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:Z},Ht=(s=Ft,t,e)=>{let{kind:r,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(e.name,s),r==="accessor"){let{name:n}=e;return{set(d){let c=t.get.call(this);t.set.call(this,d),this.requestUpdate(n,c,s)},init(d){return d!==void 0&&this.C(n,void 0,s,d),d}}}if(r==="setter"){let{name:n}=e;return function(d){let c=this[n];t.call(this,d),this.requestUpdate(n,c,s)}}throw Error("Unsupported decorator location: "+r)};function h(s){return(t,e)=>typeof e=="object"?Ht(s,t,e):((r,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(s,t,e)}function u(s){return h({...s,state:!0,attribute:!1})}var P=class extends m{constructor(){super(...arguments);this.endValue=0;this.duration=2e3;this._currentValue=0;this._observer=null;this._animationFrameId=null}connectedCallback(){super.connectedCallback(),this._observer=new IntersectionObserver(this._handleIntersection.bind(this),{threshold:.5}),this._observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._observer&&(this._observer.disconnect(),this._observer=null),this._animationFrameId&&cancelAnimationFrame(this._animationFrameId)}_handleIntersection(e){e.forEach(r=>{r.isIntersecting&&(this._startAnimation(),this._observer&&this._observer.unobserve(this))})}_startAnimation(){let e=null,r=i=>{e||(e=i);let o=i-e,n=Math.min(o/this.duration,1);this._currentValue=Math.floor(n*this.endValue),n<1?this._animationFrameId=requestAnimationFrame(r):this._currentValue=this.endValue};this._animationFrameId=requestAnimationFrame(r)}render(){return l`${this._currentValue}`}};P.styles=b`
    :host {
      display: inline-block; /* Or span if preferred, but inline-block is safer for layout */
      font-weight: bold;
      color: var(--accent-color, #2563EB);
    }
  `,a([h({type:Number})],P.prototype,"endValue",2),a([h({type:Number})],P.prototype,"duration",2),a([u()],P.prototype,"_currentValue",2),P=a([_("metrics-counter")],P);var y=class extends m{constructor(){super(...arguments);this.headline="Building Products, Faster.";this.subhead="A showcase of meticulously crafted projects and a commitment to rapid, high-quality development.";this.ctaText="Explore Projects";this.ctaLink="#projects";this._totalProductsShipped=null;this._monthsActive=null;this._isLoadingStats=!0;this._statsError=null;this._heroVisible=!1;this._observer=null}connectedCallback(){super.connectedCallback(),this._fetchStats(),this._observer=new IntersectionObserver(([e])=>{this._heroVisible=e.isIntersecting,e.isIntersecting?this.shadowRoot?.querySelectorAll(".metrics-label-part").forEach(r=>{r.style.animationPlayState="running"}):this.shadowRoot?.querySelectorAll(".metrics-label-part").forEach(r=>{r.style.animationName="none"})},{threshold:.4}),this._observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect()}_calculateMonthsBetween(e,r){let i=new Date(e),o=new Date(r);if(isNaN(i.getTime())||isNaN(o.getTime()))return console.error("Invalid date format for calculating months:",e,r),0;let n=(o.getFullYear()-i.getFullYear())*12;return n-=i.getMonth(),n+=o.getMonth(),o.getDate()<i.getDate()&&n>0,n<=0?0:n}async _fetchStats(){this._isLoadingStats=!0,this._statsError=null;try{let e=await fetch("/data/stats.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let r=await e.json();this._totalProductsShipped=r.totalProductsShipped;let i="2025-05-07";r.firstReleaseDate?this._monthsActive=this._calculateMonthsBetween(r.firstReleaseDate,i):this._monthsActive=0}catch(e){console.error("Error fetching stats data:",e),this._statsError="Could not load stats.",this._totalProductsShipped=0,this._monthsActive=0}finally{this._isLoadingStats=!1}}render(){let e=this._heroVisible?"animation-play-state: running;":"animation-play-state: paused;",r;return this._isLoadingStats?r=l`<p>Loading stats...</p>`:this._statsError?r=l`<p class=\"error-message\">${this._statsError}</p>`:r=l`
        <p>
          <span class="metrics-label-part part1" style="${e}">Products shipped: </span>
          <span class="metrics-label-part part2" style="${e}"><metrics-counter .endValue=${this._totalProductsShipped} .duration=\\${1500}></metrics-counter></span>
          <span class="metrics-label-part part2" style="${e}"> in ${this._monthsActive} months</span>
        </p>
      `,l`
      <h1>${this.headline}</h1>
      <p class="subhead">${this.subhead}</p>
      <a href="${this.ctaLink}" class="cta-button" aria-label="Explore Projects">${this.ctaText}</a>
      <div class="metrics">
        ${r}
      </div>
    `}};y.styles=b`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
      padding: 2rem 1rem; /* Added more padding */
      box-sizing: border-box;
      background-color: var(--hero-bg-color-wash, rgba(79, 70, 229, 0.1)); /* Full-bleed accent wash */
      color: var(--text-color); /* Use global text color, will be overridden by dark mode */
      width: 100vw; /* Ensure full viewport width */
      position: relative; /* For potential pseudo-elements or absolutely positioned children */
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 2rem; /* Space before next "card" section */
    }

    h1 {
      font-size: clamp(2rem, 6vw, 3rem); /* Adjusted clamp for impact */
      margin-bottom: 1rem;
      font-weight: bold;
      max-width: 30rem; /* Critique: Hero headline max-width */
      line-height: 1.2;
      letter-spacing: -0.015em; /* Critique: Hero headline kerning */
    }

    p.subhead {
      font-size: clamp(1rem, 4vw, 1.25rem);
      margin-bottom: 2rem; /* Increased margin */
      max-width: 40rem; /* Increased max-width for subhead */
      opacity: 0.85;
      line-height: 1.6;
    }

    .cta-button {
      padding: 0.875rem 1rem; /* Critique: CTA width/padding updated */
      background-color: var(--accent-color);
      color: var(--page-bg); /* Text color contrasting with accent */
      text-decoration: none;
      border-radius: 0.5rem; /* 8px */
      font-weight: 500;
      transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
      position: relative; /* For ripple */
      overflow: hidden; /* For ripple */
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }

    .cta-button:hover {
      transform: translateY(-1px);
      box-shadow: var(--button-shadow-hover, 0 4px 12px rgba(79, 70, 229, 0.3));
    }
    
    .cta-button::after { /* Ripple effect */
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, var(--text-color) 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .3s, opacity .5s;
    }

    .cta-button:active::after {
      transform: scale(0, 0);
      opacity: .2;
      transition: 0s;
    }

    .metrics {
      margin-top: 1.5rem; /* Critique: Pull metrics closer to CTA */
    }

    .metrics p {
      color: var(--text-color);
      opacity: 0.7; /* Softer label */
      font-size: 0.9rem;
    }
    
    .metrics-label-part {
        display: inline-block;
        opacity: 0;
        transform: translateY(4px);
        animation: slideInUp 0.5s ease forwards;
    }
    .metrics-label-part.part1 { animation-delay: 0.2s; }
    .metrics-label-part.part2 { animation-delay: 0.4s; }
    .metrics-label-part metrics-counter { animation-delay: 0.3s; } /* Counter is a component */

    @keyframes slideInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,a([h({type:String})],y.prototype,"headline",2),a([h({type:String})],y.prototype,"subhead",2),a([h({type:String})],y.prototype,"ctaText",2),a([h({type:String})],y.prototype,"ctaLink",2),a([u()],y.prototype,"_totalProductsShipped",2),a([u()],y.prototype,"_monthsActive",2),a([u()],y.prototype,"_isLoadingStats",2),a([u()],y.prototype,"_statsError",2),a([u()],y.prototype,"_heroVisible",2),y=a([_("hero-section")],y);var $=class extends m{constructor(){super(...arguments);this.title="Project Title";this.role="Role / Technologies";this.imageUrl="";this.techStack=[];this.liveDemoLink="";this.githubRepoLink=""}render(){return l`
      <div class="card-image-container">
        ${this.imageUrl?l`<img src="${this.imageUrl}" alt="${this.title}" class="card-image">`:l`<div class="card-image empty-placeholder"></div>`}
      </div>
      <div class="card-content">
        <h3>${this.title}</h3>
        <p class="role">${this.role}</p>
        ${this.techStack.length>0?l`
              <div class="tech-stack">
                ${this.techStack.map(e=>l`<span class="tech-tag">${e}</span>`)}
              </div>
            `:""}
        <div class="links">
          ${this.liveDemoLink?l`<a href="${this.liveDemoLink}" target="_blank" rel="noopener noreferrer">Live Demo</a>`:""}
          ${this.githubRepoLink?l`<a href="${this.githubRepoLink}" target="_blank" rel="noopener noreferrer">GitHub Repo</a>`:""}
        </div>
      </div>
    `}};$.styles=b`
    :host {
      display: block;
      /* border: 1px solid var(--card-bg, #E5E7EB); // Original border */
      border-radius: 0.75rem; 
      overflow: hidden;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
      background-color: var(--card-bg, #FFFFFF);
      box-shadow: 0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.03); 
      border: 2px solid transparent; /* Prepare for dark mode border */
    }

    :host([data-theme="dark"]) {
        border-color: rgba(255,255,255,0.05); /* Critique: subtle 2px border in dark mode */
    }

    :host(:hover) {
      transform: translateY(-2px); /* Slight lift on card hover */
      box-shadow: 0 4px 8px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.04); 
    }

    .card-image-container {
        overflow: hidden; 
        background-color: var(--card-bg); /* Match card bg for empty state */
        position: relative; /* For skeleton */
    }

    .card-image {
        width: 100%;
        height: 200px; 
        object-fit: cover;
        transition: transform 0.3s ease-out;
    }

    .card-image.empty-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        /* Basic skeleton stripes */
        background: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.08) 40%,
          rgba(255, 255, 255, 0.08) 60%,
          rgba(255, 255, 255, 0) 100%
        );
        background-size: 400% 100%;
        animation: skeletonShine 2s linear infinite;
    }

    :host([data-theme="light"]) .card-image.empty-placeholder {
        background: linear-gradient(
          100deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.03) 40%,
          rgba(0, 0, 0, 0.03) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        background-size: 400% 100%; /* Must be repeated */
    }

    @keyframes skeletonShine {
      0% { background-position: 150% 0; }
      100% { background-position: -150% 0; }
    }

    :host(:hover) .card-image {
        transform: scale(1.05); /* Thumbnail zoom */
    }

    .card-content {
      padding: 1rem;
    }

    h3 {
      font-size: 1.125rem; /* 18px */
      font-weight: 600;
      margin: 0 0 0.25rem 0;
      color: var(--text-color);
    }

    p.role {
      font-size: 0.875rem;
      color: var(--text-color);
      opacity: 0.7;
      margin: 0 0 0.5rem 0;
    }

    .tech-stack {
      margin-bottom: 0.75rem;
      padding-left: 0; /* Align with text */
    }

    .tech-tag {
      display: inline-block;
      background-color: rgba(var(--accent-color-rgb), 0.1);
      color: var(--accent-color);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 500;
      margin-right: 0.25rem;
      margin-bottom: 0.25rem;
    }

    .links a {
      text-decoration: none;
      color: var(--accent-color);
      font-size: 0.875rem;
      margin-right: 0.75rem;
      transition: color 0.2s ease;
      font-weight: 500;
    }

    .links a:hover {
      opacity: 0.8;
    }
  `,a([h({type:String})],$.prototype,"title",2),a([h({type:String})],$.prototype,"role",2),a([h({type:String})],$.prototype,"imageUrl",2),a([h({type:Array})],$.prototype,"techStack",2),a([h({type:String})],$.prototype,"liveDemoLink",2),a([h({type:String})],$.prototype,"githubRepoLink",2),$=a([_("project-card")],$);var x=class extends m{constructor(){super(...arguments);this.projectsDataSrc="/data/projects.json";this.gridTitle="Featured Projects";this._projects=[];this._isLoadingProjects=!0;this._projectsError=null}connectedCallback(){super.connectedCallback(),this._fetchProjects()}async _fetchProjects(){this._isLoadingProjects=!0,this._projectsError=null;try{let e=await fetch(this.projectsDataSrc);if(!e.ok)throw new Error(`HTTP error! status: ${e.status} - ${e.statusText}`);this._projects=await e.json()}catch(e){console.error("Error fetching project data:",e),this._projectsError="Failed to load projects. Please check the console."}finally{this._isLoadingProjects=!1}}render(){return this._isLoadingProjects?l`<div class="loading-message">Loading projects...</div>`:this._projectsError?l`<div class="error-message">${this._projectsError}</div>`:this._projects.length===0?l`<div class="no-items-message">No projects to display yet.</div>`:l`
      <section class="projects-section-container" id="projects" style="scroll-margin-top: 6rem;">
        ${this.gridTitle?l`<h2>${this.gridTitle}</h2>`:""}
        <div class="grid-container">
          ${this._projects.map(e=>l`
              <project-card
                .title=${e.title}
                .role=${e.role}
                .imageUrl=${e.imageUrl}
                .liveDemoLink=${e.liveDemoLink}
                .githubRepoLink=${e.githubRepoLink}
                .techStack=${e.techStack||[]}
              ></project-card>
            `)}
        </div>
      </section>
    `}};x.styles=b`
    :host {
      display: block;
      margin-bottom: 2rem; /* Space after this content block */
    }
    .projects-section-container { /* Renamed from -card to -container */
      padding: 0rem; /* Adjust padding if needed, or rely on main tag's padding */
      margin: 0 auto;
      max-width: var(--max-width);
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      justify-content: center; /* Centers grid tracks if their total width is less than container */
      justify-items: center; /* ADDED: Centers items within their grid cells */
      /* max-width is now on .projects-section-container */
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      margin-top: 0; /* No margin if it's the first child of the card */
      margin-bottom: 1.5rem;
      text-align: center;
      color: var(--text-color);
    }

    /* Scroll snap properties if desired for the section */
    /* This might be better on a parent container in index.html or a main app shell */
    /* For now, keeping it simple within the component */
    /* 
    :host {
        scroll-snap-align: start;
    }
    */
    .loading-message, .error-message, .no-items-message {
      text-align: center;
      padding: 1rem;
      color: var(--text-color);
      opacity: 0.7;
    }
  `,a([h({type:String})],x.prototype,"projectsDataSrc",2),a([h({type:String})],x.prototype,"gridTitle",2),a([u()],x.prototype,"_projects",2),a([u()],x.prototype,"_isLoadingProjects",2),a([u()],x.prototype,"_projectsError",2),x=a([_("project-grid")],x);var k=class extends m{constructor(){super(...arguments);this.dataSrc="/data/releases.json";this.timelineTitle="Shipping Journey";this._items=[];this._isLoading=!0;this._error=null;this._observer=null;this._itemObservers=new Map}connectedCallback(){super.connectedCallback(),this._fetchData()}disconnectedCallback(){super.disconnectedCallback(),this._itemObservers.forEach(e=>e.disconnect()),this._itemObservers.clear()}async _fetchData(){this._isLoading=!0,this._error=null;try{let e=await fetch(this.dataSrc);if(!e.ok)throw new Error(`HTTP error! status: ${e.status} - ${e.statusText}`);this._items=await e.json()}catch(e){console.error("Error fetching timeline data:",e),this._error="Failed to load timeline data. Please check the console for more details."}this._isLoading=!1,this.requestUpdate()}updated(e){super.updated(e),(e.has("_items")||e.has("_isLoading"))&&!this._isLoading&&this._items.length>0&&this._observeItems()}_observeItems(){this.shadowRoot?.querySelectorAll(".timeline-item")?.forEach(r=>{if(this._itemObservers.has(r))return;let i=new IntersectionObserver(([o])=>{o.isIntersecting&&(o.target.classList.add("visible"),i.unobserve(o.target),this._itemObservers.delete(o.target))},{threshold:.4});i.observe(r),this._itemObservers.set(r,i)})}render(){return this._isLoading?l`<div class="loading-message">Loading timeline...</div>`:this._error?l`<div class="error-message">${this._error}</div>`:this._items.length===0?l`<div class="no-items-message">No releases yet. Stay tuned!</div>`:l`
      <section class="timeline-section-container" id="timeline" style="scroll-margin-top: 6rem;">
        ${this.timelineTitle?l`<h2>${this.timelineTitle}</h2>`:""}
        <div class="timeline">
          ${this._items.map(e=>l`
            <div class="timeline-item" id="timeline-item-${e.id}">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-date">${e.date}</div>
                <div class="timeline-title">${e.title}</div>
                <div class="timeline-description">${e.description}</div>
                ${e.link?l`<div class="timeline-link"><a href="${e.link}" target="_blank" rel="noopener noreferrer">View Details</a></div>`:""}
              </div>
            </div>
          `)}
        </div>
      </section>
    `}};k.styles=b`
    :host {
      display: block;
      margin-bottom: 2rem;
    }
    .timeline-section-container {
      padding: 0rem;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      margin-top: 0;
      margin-bottom: 2rem; /* More space for title */
      text-align: center;
      color: var(--text-color);
    }
    .timeline {
      position: relative;
      max-width: 700px;
      margin: 0 auto;
      padding: 1rem 0 1rem 32px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px;
      top: 0;
      bottom: 0;
      width: 1px;
      background-image: linear-gradient(to bottom, rgba(var(--accent-color-rgb), 0.35) 0%, rgba(var(--accent-color-rgb), 0.35) 50%, transparent 50%);
      background-size: 1px 8px;
      background-repeat: repeat-y;
    }
    .timeline-item {
      position: relative;
      margin-bottom: 2rem; /* Increased spacing */
      padding-left: 40px; /* More space for dot and line */
      opacity: 0; /* For fade-in */
      transform: translateY(20px); /* For fade-in */
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
    .timeline-item.visible {
      opacity: 1;
      transform: translateY(0);
    }
    /* Basic alternating content alignment */
    /* For a more robust zig-zag, a different HTML structure might be needed */
    .timeline-item:nth-child(even) .timeline-content {
      /* text-align: right; */ /* Can be too jarring, consider subtle shift or just visual elements */
      /* margin-left: auto; */
    }
    .timeline-dot {
      position: absolute;
      left: 0;
      top: 5px;
      width: 16px; /* Larger dot */
      height: 16px;
      border-radius: 50%;
      background-color: var(--accent-color);
      border: 3px solid var(--page-bg); /* Use page-bg for better contrast */
      z-index: 1;
    }
    .timeline-date {
      font-size: 0.8rem;
      color: var(--text-color);
      opacity: 0.6;
      margin-bottom: 0.25rem;
      font-weight: 500;
    }
    .timeline-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.35rem;
      color: var(--text-color);
    }
    .timeline-description {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 0.5rem;
      color: var(--text-color);
      opacity: 0.85;
    }
    .timeline-link a {
      font-size: 0.875rem;
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 500;
    }
    .timeline-link a:hover {
      text-decoration: underline;
    }
    .loading-message, .error-message, .no-items-message {
      text-align: center;
      padding: 1rem;
      color: var(--text-color);
      opacity: 0.7;
    }
  `,a([h({type:String})],k.prototype,"dataSrc",2),a([h({type:String})],k.prototype,"timelineTitle",2),a([u()],k.prototype,"_items",2),a([u()],k.prototype,"_isLoading",2),a([u()],k.prototype,"_error",2),k=a([_("timeline-list")],k);var w=class extends m{constructor(){super(...arguments);this.aboutTitle="Get In Touch";this.bioPart1="I build responsive, performant, and accessible digital experiences.";this.email="your.email@example.com";this.linkedinUrl="https://linkedin.com/in/yourprofile";this.githubUrl="https://github.com/yourusername"}render(){return l`
      <section class="about-section-container" id="about" style="scroll-margin-top: 6rem;">
        <h2>${this.aboutTitle}</h2>
        <p class="bio-part1">${this.bioPart1}</p>
        <div class="contact-links">
          ${this.email?l`<a href="mailto:${this.email}" class="accent-button">Email Me</a>`:""}
          ${this.linkedinUrl?l`<a href="${this.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="text-link">LinkedIn</a>`:""}
          ${this.githubUrl?l`<a href="${this.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-link">GitHub</a>`:""}
        </div>
      </section>
    `}};w.styles=b`
    :host {
      display: block;
      margin-bottom: 2rem; /* Space after this content block */
    }
    .about-section-container { /* Renamed from -card to -container */
      padding: 1rem 0; /* Padding for content within the container if needed */
      text-align: center;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      margin-top: 0;
      margin-bottom: 1.5rem; /* Increased margin after title */
      color: var(--text-color);
    }
    p.bio-part1 {
      font-size: 1.05rem; 
      line-height: 1.7; 
      max-width: 600px;
      margin: 0 auto 2rem auto; /* Adjusted bottom margin to 2rem */
      color: var(--text-color);
      opacity: 0.85;
    }
    .contact-links .accent-button {
      display: inline-block;
      margin: 0.5rem 0.75rem;
      padding: 0.875rem 1.75rem; /* Match hero CTA */
      background-color: var(--accent-color);
      color: var(--page-bg); /* Text color contrasting with accent */
      text-decoration: none;
      border-radius: 0.5rem; /* 8px */
      font-weight: 500;
      transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
      position: relative; /* For ripple */
      overflow: hidden; /* For ripple */
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .contact-links .accent-button:hover {
      transform: translateY(-1px);
      box-shadow: var(--button-shadow-hover, 0 4px 12px rgba(79, 70, 229, 0.3));
    }
    .contact-links .accent-button::after { /* Ripple effect */
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, var(--text-color) 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .3s, opacity .5s;
    }
    .contact-links .accent-button:active::after {
      transform: scale(0, 0);
      opacity: .2;
      transition: 0s;
    }
    .contact-links .text-link {
      display: inline-block;
      margin: 0.5rem 0.75rem;
      color: var(--accent-color);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      opacity: 0.7; /* Critique: Lower opacity for secondary links */
    }
    .contact-links .text-link:hover {
      text-decoration: underline;
      opacity: 0.9; /* Slightly more opaque on hover */
    }
  `,a([h({type:String})],w.prototype,"aboutTitle",2),a([h({type:String})],w.prototype,"bioPart1",2),a([h({type:String})],w.prototype,"email",2),a([h({type:String})],w.prototype,"linkedinUrl",2),a([h({type:String})],w.prototype,"githubUrl",2),w=a([_("about-me")],w);var B=class extends m{render(){return l`
      <div class="footer-content">
        <div class="legal-text">
          &copy; ${new Date().getFullYear()} Your Name. All rights reserved. 
        </div>
      </div>
    `}};B.styles=b`
    :host {
      display: block;
      padding: 1.5rem 1rem; /* Increased padding slightly */
      background-color: var(--footer-bg-color, #0E1014);
      color: var(--footer-text-color, #9CA3AF);
      font-size: 0.875rem;
      border-top: 1px solid rgba(var(--text-color-rgb, 232, 234, 237), 0.1); 
    }
    .footer-content {
      max-width: var(--max-width, 72rem);
      margin: 0 auto;
      display: flex;
      justify-content: center; /* Center legal text now */
      align-items: center;
      gap: 1rem;
    }
    .legal-text {
      opacity: 0.8;
      text-align: center;
    }
    .legal-text a {
      color: var(--footer-text-color, #9CA3AF);
      text-decoration: none;
    }
    .legal-text a:hover {
      text-decoration: underline;
      opacity: 1;
    }
  `,B=a([_("footer-bar")],B);var D=class extends m{constructor(){super(...arguments);this._isDarkMode=!1;this._iconRotation=0}connectedCallback(){super.connectedCallback();let e=localStorage.getItem("theme");e==="dark"?this._isDarkMode=!0:e==="light"?this._isDarkMode=!1:this._isDarkMode=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,this._applyTheme(),this._iconRotation=this._isDarkMode?0:180,window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r=>{localStorage.getItem("theme")||(this._isDarkMode=r.matches,this._applyTheme(),this._iconRotation=this._isDarkMode?this._iconRotation-180:this._iconRotation+180)})}_toggleTheme(){this._isDarkMode=!this._isDarkMode,localStorage.setItem("theme",this._isDarkMode?"dark":"light"),this._applyTheme(),this._iconRotation+=180}_applyTheme(){document.documentElement.setAttribute("data-theme",this._isDarkMode?"dark":"light")}render(){let e=this._isDarkMode?"\u2600\uFE0F":"\u{1F319}";return l`
      <button 
        class="toggle-button"
        @click="${this._toggleTheme}" 
        title="Toggle theme"
        aria-label="Toggle theme">
        <span class="icon" style="transform: rotate(${this._iconRotation}deg);">${e}</span>
      </button>
    `}};D.styles=b`
    :host {
      display: block;
      position: fixed;
      top: 3rem; /* 48px from edge */
      right: 3rem; /* 48px from edge */
      z-index: 1000; /* Ensure it's on top */
    }
    .toggle-button {
      background: none;
      border: 1px solid transparent;
      color: var(--text-color);
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5rem; /* Icon size */
      line-height: 1;
      width: 48px; /* Button size */
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease-in-out, color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
    }
    .toggle-button:hover {
      background-color: rgba(var(--accent-color-rgb), 0.1);
      border-color: transparent;
    }
    .icon {
      display: inline-block;
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Bouncy rotation */
    }
  `,a([u()],D.prototype,"_isDarkMode",2),a([u()],D.prototype,"_iconRotation",2),D=a([_("theme-toggle")],D);console.log("Portfolio components loaded.");
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
