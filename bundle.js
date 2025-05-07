var kt=Object.defineProperty;var Et=Object.getOwnPropertyDescriptor;var a=(s,t,e,r)=>{for(var i=r>1?void 0:r?Et(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(r?n(t,e,i):n(i))||i);return r&&i&&kt(t,e,i),i};var W=globalThis,Y=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),ht=new WeakMap,I=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Y&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ht.set(e,t))}return t}toString(){return this.cssText}},dt=s=>new I(typeof s=="string"?s:s+"",void 0,Q),b=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new I(e,s,Q)},pt=(s,t)=>{if(Y)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),i=W.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}},G=Y?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return dt(e)})(s):s;var{is:Ct,defineProperty:Ut,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Ot,getOwnPropertySymbols:Ft,getPrototypeOf:Rt}=Object,K=globalThis,mt=K.trustedTypes,Tt=mt?mt.emptyScript:"",Lt=K.reactiveElementPolyfillSupport,j=(s,t)=>s,D={toAttribute(s,t){switch(t){case Boolean:s=s?Tt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},J=(s,t)=>!Ct(s,t),ut={attribute:!0,type:String,converter:D,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:o}=Pt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let d=i?.call(this);o?.call(this,n),this.requestUpdate(t,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ut}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let t=Rt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let e=this.properties,r=[...Ot(e),...Ft(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:D).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=r.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:D;this._$Em=i,this[i]=n.fromAttribute(e,o.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){let i=this.constructor,o=this[t];if(r??=i.getPropertyOptions(t),!((r.hasChanged??J)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:o},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r){let{wrapped:n}=o,d=this[i];n!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,o,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[j("elementProperties")]=new Map,A[j("finalized")]=new Map,Lt?.({ReactiveElement:A}),(K.reactiveElementVersions??=[]).push("2.1.0");var nt=globalThis,Z=nt.trustedTypes,gt=Z?Z.createPolicy("lit-html",{createHTML:s=>s}):void 0,_t="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,xt="?"+k,It=`<${xt}>`,O=document,z=()=>O.createComment(""),M=s=>s===null||typeof s!="object"&&typeof s!="function",at=Array.isArray,jt=s=>at(s)||typeof s?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,bt=/>/g,U=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,yt=/"/g,wt=/^(?:script|style|textarea|title)$/i,lt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),c=lt(1),Kt=lt(2),Jt=lt(3),F=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),$t=new WeakMap,P=O.createTreeWalker(O,129);function At(s,t){if(!at(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return gt!==void 0?gt.createHTML(t):t}var Dt=(s,t)=>{let e=s.length-1,r=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=N;for(let d=0;d<e;d++){let l=s[d],u,f,p=-1,w=0;for(;w<l.length&&(n.lastIndex=w,f=n.exec(l),f!==null);)w=n.lastIndex,n===N?f[1]==="!--"?n=ft:f[1]!==void 0?n=bt:f[2]!==void 0?(wt.test(f[2])&&(i=RegExp("</"+f[2],"g")),n=U):f[3]!==void 0&&(n=U):n===U?f[0]===">"?(n=i??N,p=-1):f[1]===void 0?p=-2:(p=n.lastIndex-f[2].length,u=f[1],n=f[3]===void 0?U:f[3]==='"'?yt:vt):n===yt||n===vt?n=U:n===ft||n===bt?n=N:(n=U,i=void 0);let S=n===U&&s[d+1].startsWith("/>")?" ":"";o+=n===N?l+It:p>=0?(r.push(u),l.slice(0,p)+_t+l.slice(p)+k+S):l+k+(p===-2?d:S)}return[At(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},H=class s{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0,d=t.length-1,l=this.parts,[u,f]=Dt(t,e);if(this.el=s.createElement(u,r),P.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=P.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(_t)){let w=f[n++],S=i.getAttribute(p).split(k),B=/([.?@])?(.*)/.exec(w);l.push({type:1,index:o,name:B[2],strings:S,ctor:B[1]==="."?rt:B[1]==="?"?it:B[1]==="@"?st:L}),i.removeAttribute(p)}else p.startsWith(k)&&(l.push({type:6,index:o}),i.removeAttribute(p));if(wt.test(i.tagName)){let p=i.textContent.split(k),w=p.length-1;if(w>0){i.textContent=Z?Z.emptyScript:"";for(let S=0;S<w;S++)i.append(p[S],z()),P.nextNode(),l.push({type:2,index:++o});i.append(p[w],z())}}}else if(i.nodeType===8)if(i.data===xt)l.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(k,p+1))!==-1;)l.push({type:7,index:o}),p+=k.length-1}o++}}static createElement(t,e){let r=O.createElement("template");return r.innerHTML=t,r}};function T(s,t,e=s,r){if(t===F)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl,o=M(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=T(s,i._$AS(s,t.values),i,r)),t}var et=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);P.currentNode=i;let o=P.nextNode(),n=0,d=0,l=r[0];for(;l!==void 0;){if(n===l.index){let u;l.type===2?u=new q(o,o.nextSibling,this,t):l.type===1?u=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(u=new ot(o,this,t)),this._$AV.push(u),l=r[++d]}n!==l?.index&&(o=P.nextNode(),n++)}return P.currentNode=O,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},q=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),M(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==F&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):jt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=H.createElement(At(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new et(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new H(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let o of t)i===e.length?e.push(r=new s(this.O(z()),this.O(z()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},L=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,e=this,r,i){let o=this.strings,n=!1;if(o===void 0)t=T(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{let d=t,l,u;for(t=o[0],l=0;l<o.length-1;l++)u=T(this,d[r+l],e,l),u===F&&(u=this._$AH[l]),n||=!M(u)||u!==this._$AH[l],u===g?t=g:t!==g&&(t+=(u??"")+o[l+1]),this._$AH[l]=u}n&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},rt=class extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},it=class extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},st=class extends L{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??g)===F)return;let r=this._$AH,i=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==g&&(r===g||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}};var Nt=nt.litHtmlPolyfillSupport;Nt?.(H,q),(nt.litHtmlVersions??=[]).push("3.3.0");var St=(s,t,e)=>{let r=e?.renderBefore??t,i=r._$litPart$;if(i===void 0){let o=e?.renderBefore??null;r._$litPart$=i=new q(t.insertBefore(z(),o),o,void 0,e??{})}return i._$AI(s),i};var ct=globalThis,m=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=St(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};m._$litElement$=!0,m.finalized=!0,ct.litElementHydrateSupport?.({LitElement:m});var zt=ct.litElementPolyfillSupport;zt?.({LitElement:m});(ct.litElementVersions??=[]).push("4.2.0");var v=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};var Mt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:J},Ht=(s=Mt,t,e)=>{let{kind:r,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(e.name,s),r==="accessor"){let{name:n}=e;return{set(d){let l=t.get.call(this);t.set.call(this,d),this.requestUpdate(n,l,s)},init(d){return d!==void 0&&this.C(n,void 0,s,d),d}}}if(r==="setter"){let{name:n}=e;return function(d){let l=this[n];t.call(this,d),this.requestUpdate(n,l,s)}}throw Error("Unsupported decorator location: "+r)};function h(s){return(t,e)=>typeof e=="object"?Ht(s,t,e):((r,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(s,t,e)}function E(s){return h({...s,state:!0,attribute:!1})}var C=class extends m{constructor(){super(...arguments);this.endValue=0;this.duration=2e3;this._currentValue=0;this._observer=null;this._animationFrameId=null}connectedCallback(){super.connectedCallback(),this._observer=new IntersectionObserver(this._handleIntersection.bind(this),{threshold:.5}),this._observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._observer&&(this._observer.disconnect(),this._observer=null),this._animationFrameId&&cancelAnimationFrame(this._animationFrameId)}_handleIntersection(e){e.forEach(r=>{r.isIntersecting&&(this._startAnimation(),this._observer&&this._observer.unobserve(this))})}_startAnimation(){let e=null,r=i=>{e||(e=i);let o=i-e,n=Math.min(o/this.duration,1);this._currentValue=Math.floor(n*this.endValue),n<1?this._animationFrameId=requestAnimationFrame(r):this._currentValue=this.endValue};this._animationFrameId=requestAnimationFrame(r)}render(){return c`${this._currentValue}`}};C.styles=b`
    :host {
      display: inline-block; /* Or span if preferred, but inline-block is safer for layout */
      font-weight: bold;
      color: var(--accent-color, #2563EB);
    }
  `,a([h({type:Number})],C.prototype,"endValue",2),a([h({type:Number})],C.prototype,"duration",2),a([E()],C.prototype,"_currentValue",2),C=a([v("metrics-counter")],C);var y=class extends m{constructor(){super(...arguments);this.headline="Building Products, Faster.";this.subhead="A showcase of meticulously crafted projects and a commitment to rapid, high-quality development.";this.ctaText="Explore Projects";this.ctaLink="#projects";this.productsShipped=12;this.months=18;this._heroVisible=!1;this._observer=null}connectedCallback(){super.connectedCallback(),this._observer=new IntersectionObserver(([e])=>{this._heroVisible=e.isIntersecting,e.isIntersecting?this.shadowRoot?.querySelectorAll(".metrics-label-part").forEach(r=>{r.style.animationPlayState="running"}):this.shadowRoot?.querySelectorAll(".metrics-label-part").forEach(r=>{r.style.animationName="none"})},{threshold:.4}),this._observer.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect()}render(){let e=this._heroVisible?"animation-play-state: running;":"animation-play-state: paused;";return c`
      <h1>${this.headline}</h1>
      <p class="subhead">${this.subhead}</p>
      <a href="${this.ctaLink}" class="cta-button" aria-label="Explore Projects">${this.ctaText}</a>
      <div class="metrics">
        <p>
          <span class="metrics-label-part part1" style="${e}">Products shipped: </span>
          <span class="metrics-label-part part2" style="${e}"><metrics-counter .endValue=\${this.productsShipped} .duration=\${1500}></metrics-counter></span>
          <span class="metrics-label-part part2" style="${e}"> in ${this.months} months</span>
        </p>
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
    }

    p.subhead {
      font-size: clamp(1rem, 4vw, 1.25rem);
      margin-bottom: 2rem; /* Increased margin */
      max-width: 40rem; /* Increased max-width for subhead */
      opacity: 0.85;
      line-height: 1.6;
    }

    .cta-button {
      padding: 0.875rem 1.75rem; /* Slightly larger padding */
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
      margin-top: 3rem; /* Increased margin */
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
  `,a([h({type:String})],y.prototype,"headline",2),a([h({type:String})],y.prototype,"subhead",2),a([h({type:String})],y.prototype,"ctaText",2),a([h({type:String})],y.prototype,"ctaLink",2),a([h({type:Number})],y.prototype,"productsShipped",2),a([h({type:Number})],y.prototype,"months",2),a([E()],y.prototype,"_heroVisible",2),y=a([v("hero-section")],y);var $=class extends m{constructor(){super(...arguments);this.title="Project Title";this.role="Role / Technologies";this.imageUrl="";this.techStack=[];this.liveDemoLink="";this.githubRepoLink=""}render(){return c`
      <div class="card-image-container">
        ${this.imageUrl?c`<img src="${this.imageUrl}" alt="${this.title}" class="card-image">`:c`<div class="card-image"></div>`}
      </div>
      <div class="card-content">
        <h3>${this.title}</h3>
        <p class="role">${this.role}</p>
        ${this.techStack.length>0?c`
              <div class="tech-stack">
                ${this.techStack.map(e=>c`<span class="tech-tag">${e}</span>`)}
              </div>
            `:""}
        <div class="links">
          ${this.liveDemoLink?c`<a href="${this.liveDemoLink}" target="_blank" rel="noopener noreferrer">Live Demo</a>`:""}
          ${this.githubRepoLink?c`<a href="${this.githubRepoLink}" target="_blank" rel="noopener noreferrer">GitHub Repo</a>`:""}
        </div>
      </div>
    `}};$.styles=b`
    :host {
      display: block;
      border: 1px solid var(--card-bg, #E5E7EB); /* Use card-bg to potentially lighten border in dark mode */
      border-radius: 0.75rem; /* 12px, matches --card-content-radius */
      overflow: hidden;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
      background-color: var(--card-bg, #FFFFFF);
      box-shadow: 0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.03); /* Subtler initial shadow */
    }

    :host(:hover) {
      transform: translateY(-2px); /* Slight lift on card hover */
      box-shadow: 0 4px 8px rgba(0,0,0,0.05), 0 2px 6px rgba(0,0,0,0.04); 
    }

    .card-image-container {
        overflow: hidden; /* Important for image zoom */
        background-color: #F3F4F6; /* Placeholder bg */
    }

    .card-image {
        width: 100%;
        height: 200px; 
        object-fit: cover;
        transition: transform 0.3s ease-out;
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
  `,a([h({type:String})],$.prototype,"title",2),a([h({type:String})],$.prototype,"role",2),a([h({type:String})],$.prototype,"imageUrl",2),a([h({type:Array})],$.prototype,"techStack",2),a([h({type:String})],$.prototype,"liveDemoLink",2),a([h({type:String})],$.prototype,"githubRepoLink",2),$=a([v("project-card")],$);var R=class extends m{constructor(){super(...arguments);this.projects=[{title:"E-commerce Platform",role:"Lead Frontend Developer",imageUrl:"https://via.placeholder.com/400x300.png?text=Project+Catalyst",liveDemoLink:"#",githubRepoLink:"#",techStack:["Lit","TypeScript","GraphQL","Storybook"]},{title:"Data Analytics Dashboard",role:"Full-Stack Developer",imageUrl:"https://via.placeholder.com/400x300.png?text=Project+Insight",liveDemoLink:"#",techStack:["Python","Flask","React","D3.js"]},{title:"Mobile Task Manager",role:"UX/UI Designer & Developer",imageUrl:"https://via.placeholder.com/400x300.png?text=Project+Flow",githubRepoLink:"#",techStack:["Flutter","Firebase","Figma"]}];this.gridTitle="Featured Projects"}render(){return c`
      <section class="projects-section-card" id="projects">
        ${this.gridTitle?c`<h2>${this.gridTitle}</h2>`:""}
        <div class="grid-container">
          ${this.projects.map(e=>c`
              <project-card
                .title=\${project.title}
                .role=\${project.role}
                .imageUrl=\${project.imageUrl}
                .liveDemoLink=\${project.liveDemoLink}
                .githubRepoLink=\${project.githubRepoLink}
                .techStack=\${project.techStack || []}
              ></project-card>
            `)}
        </div>
      </section>
    `}};R.styles=b`
    :host {
      display: block;
      /* Removed padding from :host, will be on the card section */
      margin-bottom: 2rem; /* Space after this content block */
    }
    .projects-section-card {
      background-color: var(--card-bg, #FFFFFF);
      box-shadow: var(--card-content-shadow, 0px 4px 12px rgba(0, 0, 0, 0.08));
      border-radius: var(--card-content-radius, 12px);
      padding: 2rem; /* Padding inside the card */
      margin: 0 auto; /* Centering the card if :host is full-width or wider than max-width */
      max-width: var(--max-width); /* Ensuring card itself adheres to max-width if not already handled by parent */
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      /* max-width is now on .projects-section-card */
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
  `,a([h({type:Array})],R.prototype,"projects",2),a([h({type:String})],R.prototype,"gridTitle",2),R=a([v("project-grid")],R);var _=class extends m{constructor(){super(...arguments);this.dataSrc="data/releases.json";this.timelineTitle="Shipping Journey";this._items=[];this._isLoading=!0;this._error=null;this._observer=null;this._itemObservers=new Map}connectedCallback(){super.connectedCallback(),this._fetchData()}disconnectedCallback(){super.disconnectedCallback(),this._itemObservers.forEach(e=>e.disconnect()),this._itemObservers.clear()}async _fetchData(){this._isLoading=!0,this._error=null;try{let e=await fetch(this.dataSrc);if(!e.ok)throw new Error(`HTTP error! status: ${e.status} - ${e.statusText}`);this._items=await e.json()}catch(e){console.error("Error fetching timeline data:",e),this._error="Failed to load timeline data. Please check the console for more details."}this._isLoading=!1,this.requestUpdate()}updated(e){super.updated(e),(e.has("_items")||e.has("_isLoading"))&&!this._isLoading&&this._items.length>0&&this._observeItems()}_observeItems(){this.shadowRoot?.querySelectorAll(".timeline-item")?.forEach(r=>{if(this._itemObservers.has(r))return;let i=new IntersectionObserver(([o])=>{o.isIntersecting&&(o.target.classList.add("visible"),i.unobserve(o.target),this._itemObservers.delete(o.target))},{threshold:.4});i.observe(r),this._itemObservers.set(r,i)})}render(){return this._isLoading?c`<div class="loading-message">Loading timeline...</div>`:this._error?c`<div class="error-message">${this._error}</div>`:this._items.length===0?c`<div class="no-items-message">No releases yet. Stay tuned!</div>`:c`
      <section class="timeline-section-card" id="timeline">
        ${this.timelineTitle?c`<h2>${this.timelineTitle}</h2>`:""}
        <div class="timeline">
          ${this._items.map(e=>c`
            <div class="timeline-item" id="timeline-item-${e.id}">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-date">${e.date}</div>
                <div class="timeline-title">${e.title}</div>
                <div class="timeline-description">${e.description}</div>
                ${e.link?c`<div class="timeline-link"><a href="${e.link}" target="_blank" rel="noopener noreferrer">View Details</a></div>`:""}
              </div>
            </div>
          `)}
        </div>
      </section>
    `}};_.styles=b`
    :host {
      display: block;
      margin-bottom: 2rem;
    }
    .timeline-section-card {
      background-color: var(--card-bg, #FFFFFF);
      box-shadow: var(--card-content-shadow, 0px 4px 12px rgba(0, 0, 0, 0.08));
      border-radius: var(--card-content-radius, 12px);
      padding: 2rem;
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
      max-width: 700px; /* Wider for alternating content */
      margin: 0 auto;
      padding: 1rem 0;
    }
    .timeline::before { /* Dashed connector line */
      content: '';
      position: absolute;
      left: 10px; 
      top: 0;
      bottom: 0;
      width: 2px;
      background-image: linear-gradient(to bottom, var(--accent-color) 0%, var(--accent-color) 50%, transparent 50%);
      background-size: 2px 8px; /* Adjust dash length and gap */
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
  `,a([h({type:String})],_.prototype,"dataSrc",2),a([h({type:String})],_.prototype,"timelineTitle",2),a([E()],_.prototype,"_items",2),a([E()],_.prototype,"_isLoading",2),a([E()],_.prototype,"_error",2),_=a([v("timeline-list")],_);var x=class extends m{constructor(){super(...arguments);this.aboutTitle="Get In Touch";this.bio="I build responsive, performant, and accessible digital experiences. Currently seeking new opportunities where I can contribute to meaningful products. Let's create something amazing together!";this.email="your.email@example.com";this.linkedinUrl="https://linkedin.com/in/yourprofile";this.githubUrl="https://github.com/yourusername"}render(){return c`
      <section class="about-section-card" id="about">
        <h2>${this.aboutTitle}</h2>
        <p class="bio">${this.bio}</p>
        <div class="contact-links">
          ${this.email?c`<a href="mailto:${this.email}" class="accent-button">Email Me</a>`:""}
          ${this.linkedinUrl?c`<a href="${this.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="text-link">LinkedIn</a>`:""}
          ${this.githubUrl?c`<a href="${this.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-link">GitHub</a>`:""}
        </div>
      </section>
    `}};x.styles=b`
    :host {
      display: block;
      margin-bottom: 2rem; /* Space after this content block */
    }
    .about-section-card {
      background-color: var(--card-bg, #FFFFFF);
      box-shadow: var(--card-content-shadow, 0px 4px 12px rgba(0, 0, 0, 0.08));
      border-radius: var(--card-content-radius, 12px);
      padding: 2rem;
      text-align: center;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    h2 {
      font-size: clamp(1.5rem, 5vw, 2rem);
      margin-top: 0;
      margin-bottom: 1rem;
      color: var(--text-color);
    }
    p.bio {
      font-size: 1.05rem; /* Slightly increased */
      line-height: 1.7; /* Increased for readability */
      max-width: 600px;
      margin: 0 auto 2rem auto; /* More bottom margin */
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
    }
    .contact-links .text-link:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  `,a([h({type:String})],x.prototype,"aboutTitle",2),a([h({type:String})],x.prototype,"bio",2),a([h({type:String})],x.prototype,"email",2),a([h({type:String})],x.prototype,"linkedinUrl",2),a([h({type:String})],x.prototype,"githubUrl",2),x=a([v("about-me")],x);var V=class extends m{render(){return c`
      <div class="footer-content">
        <div class="legal-text">
          &copy; ${new Date().getFullYear()} Your Name. All rights reserved. 
        </div>
      </div>
    `}};V.styles=b`
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
  `,V=a([v("footer-bar")],V);console.log("Portfolio components loaded.");
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
