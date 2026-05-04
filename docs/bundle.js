var Et=Object.defineProperty;var wt=Object.getOwnPropertyDescriptor;var a=(r,t,e,s)=>{for(var i=s>1?void 0:s?wt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Et(t,e,i),i};var Y=globalThis,K=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),ht=new WeakMap,N=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(K&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ht.set(e,t))}return t}toString(){return this.cssText}},pt=r=>new N(typeof r=="string"?r:r+"",void 0,Q),y=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new N(e,r,Q)},dt=(r,t)=>{if(K)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=Y.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},G=K?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return pt(e)})(r):r;var{is:Ct,defineProperty:Ut,getOwnPropertyDescriptor:Dt,getOwnPropertyNames:Lt,getOwnPropertySymbols:Pt,getPrototypeOf:Rt}=Object,F=globalThis,mt=F.trustedTypes,Ot=mt?mt.emptyScript:"",Tt=F.reactiveElementPolyfillSupport,j=(r,t)=>r,M={toAttribute(r,t){switch(t){case Boolean:r=r?Ot:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},J=(r,t)=>!Ct(r,t),ut={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??=Symbol("metadata"),F.litPropertyMetadata??=new WeakMap;var k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ut){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=Dt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let p=i?.call(this);o?.call(this,n),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ut}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let t=Rt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let e=this.properties,s=[...Lt(e),...Pt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:M).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:M;this._$Em=i,this[i]=n.fromAttribute(e,o.type)??this._$Ej?.get(i)??null,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let i=this.constructor,o=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??J)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:n}=o,p=this[i];n!==!0||this._$AL.has(i)||p===void 0||this.C(i,void 0,o,p)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[j("elementProperties")]=new Map,k[j("finalized")]=new Map,Tt?.({ReactiveElement:k}),(F.reactiveElementVersions??=[]).push("2.1.0");var nt=globalThis,Z=nt.trustedTypes,ft=Z?Z.createPolicy("lit-html",{createHTML:r=>r}):void 0,bt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+C,zt=`<${St}>`,L=document,H=()=>L.createComment(""),q=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,Nt=r=>at(r)||typeof r?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,vt=/>/g,U=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yt=/'/g,_t=/"/g,xt=/^(?:script|style|textarea|title)$/i,lt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=lt(1),Ft=lt(2),Jt=lt(3),P=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),$t=new WeakMap,D=L.createTreeWalker(L,129);function At(r,t){if(!at(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ft!==void 0?ft.createHTML(t):t}var jt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=I;for(let p=0;p<e;p++){let l=r[p],f,v,d=-1,A=0;for(;A<l.length&&(n.lastIndex=A,v=n.exec(l),v!==null);)A=n.lastIndex,n===I?v[1]==="!--"?n=gt:v[1]!==void 0?n=vt:v[2]!==void 0?(xt.test(v[2])&&(i=RegExp("</"+v[2],"g")),n=U):v[3]!==void 0&&(n=U):n===U?v[0]===">"?(n=i??I,d=-1):v[1]===void 0?d=-2:(d=n.lastIndex-v[2].length,f=v[1],n=v[3]===void 0?U:v[3]==='"'?_t:yt):n===_t||n===yt?n=U:n===gt||n===vt?n=I:(n=U,i=void 0);let w=n===U&&r[p+1].startsWith("/>")?" ":"";o+=n===I?l+zt:d>=0?(s.push(f),l.slice(0,d)+bt+l.slice(d)+C+w):l+C+(d===-2?p:w)}return[At(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},B=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,p=t.length-1,l=this.parts,[f,v]=jt(t,e);if(this.el=r.createElement(f,s),D.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=D.nextNode())!==null&&l.length<p;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(bt)){let A=v[n++],w=i.getAttribute(d).split(C),W=/([.?@])?(.*)/.exec(A);l.push({type:1,index:o,name:W[2],strings:w,ctor:W[1]==="."?st:W[1]==="?"?it:W[1]==="@"?rt:O}),i.removeAttribute(d)}else d.startsWith(C)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(xt.test(i.tagName)){let d=i.textContent.split(C),A=d.length-1;if(A>0){i.textContent=Z?Z.emptyScript:"";for(let w=0;w<A;w++)i.append(d[w],H()),D.nextNode(),l.push({type:2,index:++o});i.append(d[A],H())}}}else if(i.nodeType===8)if(i.data===St)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(C,d+1))!==-1;)l.push({type:7,index:o}),d+=C.length-1}o++}}static createElement(t,e){let s=L.createElement("template");return s.innerHTML=t,s}};function R(r,t,e=r,s){if(t===P)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=q(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=R(r,i._$AS(r,t.values),i,s)),t}var et=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??L).importNode(e,!0);D.currentNode=i;let o=D.nextNode(),n=0,p=0,l=s[0];for(;l!==void 0;){if(n===l.index){let f;l.type===2?f=new V(o,o.nextSibling,this,t):l.type===1?f=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(f=new ot(o,this,t)),this._$AV.push(f),l=s[++p]}n!==l?.index&&(o=D.nextNode(),n++)}return D.currentNode=L,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},V=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),q(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=B.createElement(At(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new et(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new B(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=R(this,t,e,0),n=!q(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{let p=t,l,f;for(t=o[0],l=0;l<o.length-1;l++)f=R(this,p[s+l],e,l),f===P&&(f=this._$AH[l]),n||=!q(f)||f!==this._$AH[l],f===g?t=g:t!==g&&(t+=(f??"")+o[l+1]),this._$AH[l]=f}n&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},it=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},rt=class extends O{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??g)===P)return;let s=this._$AH,i=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};var Mt=nt.litHtmlPolyfillSupport;Mt?.(B,V),(nt.litHtmlVersions??=[]).push("3.3.0");var kt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new V(t.insertBefore(H(),o),o,void 0,e??{})}return i._$AI(r),i};var ct=globalThis,m=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};m._$litElement$=!0,m.finalized=!0,ct.litElementHydrateSupport?.({LitElement:m});var It=ct.litElementPolyfillSupport;It?.({LitElement:m});(ct.litElementVersions??=[]).push("4.2.0");var _=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Ht={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:J},qt=(r=Ht,t,e)=>{let{kind:s,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(p){let l=t.get.call(this);t.set.call(this,p),this.requestUpdate(n,l,r)},init(p){return p!==void 0&&this.C(n,void 0,r,p),p}}}if(s==="setter"){let{name:n}=e;return function(p){let l=this[n];t.call(this,p),this.requestUpdate(n,l,r)}}throw Error("Unsupported decorator location: "+s)};function h(r){return(t,e)=>typeof e=="object"?qt(r,t,e):((s,i,o)=>{let n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}function u(r){return h({...r,state:!0,attribute:!1})}var $=class extends m{constructor(){super(...arguments);this.headline="Software with receipts.";this.subhead="Product engineer shipping AI tutors, clinical simulators, stream tools, private CRMs, and public software \u2014 measured by deployed systems, not mockups.";this.ctaText="Read the ledger \u2193";this.ctaLink="#projects";this._totalProductsShipped=null;this._monthsActive=null;this._liveSystems=null;this._isLoadingStats=!0;this._statsError=null}connectedCallback(){super.connectedCallback(),this._fetchStats()}_calculateMonthsBetween(e,s){let i=new Date(e),o=new Date(s);if(isNaN(i.getTime())||isNaN(o.getTime()))return 0;let n=(o.getFullYear()-i.getFullYear())*12;return n-=i.getMonth(),n+=o.getMonth(),n<=0?0:n}async _fetchStats(){this._isLoadingStats=!0,this._statsError=null;try{let e=await fetch("/data/stats.json");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);let s=await e.json();this._totalProductsShipped=s.totalProductsShipped,this._liveSystems=s.liveSystems;let i=s.latestReleaseDate||new Date().toISOString().slice(0,10);s.firstReleaseDate?this._monthsActive=this._calculateMonthsBetween(s.firstReleaseDate,i):this._monthsActive=0}catch(e){console.error("Error fetching stats data:",e),this._statsError="Could not load stats."}finally{this._isLoadingStats=!1}}render(){return c`
      <div class="kicker">Issack John / shipping ledger</div>
      <h1 class="statement">${this.headline}</h1>
      
      <p class="bio">${this.subhead}</p>
      
      ${this._statsError?c`
        <div class="error-message">${this._statsError}</div>
      `:c`
        <div class="evidence">
          <div class="evidence-item">
            <span class="evidence-value">
              ${this._isLoadingStats?"\u2014":this._totalProductsShipped}
            </span>
            <span class="evidence-label">Products Shipped</span>
          </div>
          <div class="evidence-item">
            <span class="evidence-value">
              ${this._isLoadingStats?"\u2014":this._liveSystems}
            </span>
            <span class="evidence-label">Live Systems</span>
          </div>
          <div class="evidence-item">
            <span class="evidence-value">
              ${this._isLoadingStats?"\u2014":this._monthsActive}
            </span>
            <span class="evidence-label">Months Active</span>
          </div>
        </div>
      `}
      
      <a href="${this.ctaLink}" class="cta">${this.ctaText}</a>
    `}};$.styles=y`
    :host {
      display: block;
      padding: 14vh 0 8vh 0;
      border-bottom: 1px solid var(--border);
      position: relative;
    }

    .statement {
      font-family: var(--font-display);
      font-size: var(--type-display);
      font-weight: 500;
      font-style: italic;
      line-height: 0.92;
      letter-spacing: -0.055em;
      max-width: 12ch;
      margin: 0 0 2rem 0;
      color: var(--ink);
    }

    .bio {
      font-size: var(--type-body);
      line-height: 1.7;
      color: var(--gray);
      max-width: 650px;
      margin: 0 0 2rem 0;
    }

    .evidence {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      margin-bottom: 2.25rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border);
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
      font-family: var(--font-display);
      font-style: italic;
    }

    .evidence-label {
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .cta {
      display: inline-block;
      font-size: var(--type-body);
      font-weight: 500;
      color: var(--paper);
      background: var(--ink);
      text-decoration: none;
      padding: 0.8rem 1rem;
      border: 1px solid var(--ink);
      transition: transform var(--transition), background var(--transition), color var(--transition);
    }

    .cta:hover {
      transform: translateY(-2px);
      background: var(--accent);
      border-color: var(--accent);
      color: var(--paper);
    }

    .kicker {
      font-family: var(--font-mono);
      font-size: var(--type-mono);
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.14em;
      margin-bottom: 1.25rem;
    }

    .loading-text, .error-message {
      color: var(--gray);
      font-size: var(--type-small);
    }
  `,a([h({type:String})],$.prototype,"headline",2),a([h({type:String})],$.prototype,"subhead",2),a([h({type:String})],$.prototype,"ctaText",2),a([h({type:String})],$.prototype,"ctaLink",2),a([u()],$.prototype,"_totalProductsShipped",2),a([u()],$.prototype,"_monthsActive",2),a([u()],$.prototype,"_liveSystems",2),a([u()],$.prototype,"_isLoadingStats",2),a([u()],$.prototype,"_statsError",2),$=a([_("hero-section")],$);var b=class extends m{constructor(){super(...arguments);this.title="Project Title";this.role="Role";this.description="";this.imageUrl="";this.techStack=[];this.liveDemoLink="";this.githubRepoLink="";this._imageLoaded=!1;this._imageError=!1}_handleImageLoad(){this._imageLoaded=!0}_handleImageError(){this._imageError=!0}render(){let e=this.imageUrl&&!this._imageError;return c`
      <article class="card">
        <div class="copy">
          <div class="card-header">
            <h3>${this.title}</h3>
            <span class="role">${this.role}</span>
          </div>
          
          ${this.description?c`<p class="description">${this.description}</p>`:""}
          
          ${this.techStack.length>0?c`
            <div class="tech-stack">
              ${this.techStack.map(s=>c`<span class="tech-tag">${s}</span>`)}
            </div>
          `:""}
          
          <div class="links">
            ${this.liveDemoLink?c`<a href="${this.liveDemoLink}" target="_blank" rel="noopener noreferrer">Live →</a>`:""}
            ${this.githubRepoLink?c`<a href="${this.githubRepoLink}" target="_blank" rel="noopener noreferrer">Source →</a>`:""}
          </div>
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
    `}};b.styles=y`
    :host {
      display: block;
    }

    .card {
      border-bottom: 1px solid var(--border);
      padding: 1.75rem 0;
      margin: 0 -1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      transition: background var(--transition), transform var(--transition);
      display: grid;
      grid-template-columns: minmax(0, 1fr) 220px;
      gap: 1.25rem;
      align-items: start;
    }

    .card:hover {
      background: var(--faint);
      transform: translateX(4px);
    }

    @media (max-width: 760px) {
      .card {
        grid-template-columns: 1fr;
        transform: none;
      }

      .card:hover {
        transform: none;
      }
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
      font-weight: 500;
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
      max-width: 620px;
      line-height: 1.6;
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      margin-bottom: 0.9rem;
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
      aspect-ratio: 5 / 3;
      object-fit: cover;
      border: 1px solid var(--border);
      opacity: 1;
      filter: saturate(0.9) contrast(1.04);
      transition: opacity 0.2s ease, filter var(--transition);
    }

    .card:hover .card-image {
      filter: saturate(1.08) contrast(1.08);
    }

    .card-image.loading {
      opacity: 0;
      min-height: 132px;
    }

    .copy {
      min-width: 0;
    }
  `,a([h({type:String})],b.prototype,"title",2),a([h({type:String})],b.prototype,"role",2),a([h({type:String})],b.prototype,"description",2),a([h({type:String})],b.prototype,"imageUrl",2),a([h({type:Array})],b.prototype,"techStack",2),a([h({type:String})],b.prototype,"liveDemoLink",2),a([h({type:String})],b.prototype,"githubRepoLink",2),a([u()],b.prototype,"_imageLoaded",2),a([u()],b.prototype,"_imageError",2),b=a([_("project-card")],b);var S=class extends m{constructor(){super(...arguments);this.projectsDataSrc="/data/projects.json";this.gridTitle="Shipped work";this.gridSubtitle="Public proof + private systems";this._projects=[];this._isLoadingProjects=!0;this._projectsError=null}connectedCallback(){super.connectedCallback(),this._fetchProjects()}async _fetchProjects(){this._isLoadingProjects=!0,this._projectsError=null;try{let e=await fetch(this.projectsDataSrc);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);this._projects=await e.json()}catch(e){console.error("Error fetching project data:",e),this._projectsError="Failed to load projects."}finally{this._isLoadingProjects=!1}}render(){return this._isLoadingProjects?c`<div class="loading-message">Loading...</div>`:this._projectsError?c`<div class="error-message">${this._projectsError}</div>`:this._projects.length===0?c`<div class="no-items-message">No projects yet.</div>`:c`
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
    `}};S.styles=y`
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
      border-top: 1px solid var(--border);
    }

    .loading-message, .error-message, .no-items-message {
      padding: 2rem 0;
      color: var(--gray);
      font-family: var(--font-mono);
      font-size: var(--type-mono);
    }
  `,a([h({type:String})],S.prototype,"projectsDataSrc",2),a([h({type:String})],S.prototype,"gridTitle",2),a([h({type:String})],S.prototype,"gridSubtitle",2),a([u()],S.prototype,"_projects",2),a([u()],S.prototype,"_isLoadingProjects",2),a([u()],S.prototype,"_projectsError",2),S=a([_("project-grid")],S);var x=class extends m{constructor(){super(...arguments);this.dataSrc="/data/releases.json";this.timelineTitle="Ship log";this.timelineSubtitle="Recent releases and milestones";this._items=[];this._isLoading=!0;this._error=null}connectedCallback(){super.connectedCallback(),this._fetchData()}async _fetchData(){this._isLoading=!0,this._error=null;try{let e=await fetch(this.dataSrc);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);this._items=await e.json()}catch(e){console.error("Error fetching timeline data:",e),this._error="Failed to load timeline."}this._isLoading=!1}_formatDate(e){return new Date(e).toLocaleDateString("en-US",{month:"short",year:"numeric"})}render(){return this._isLoading?c`<div class="loading-message">Loading...</div>`:this._error?c`<div class="error-message">${this._error}</div>`:this._items.length===0?c`<div class="no-items-message">No releases yet.</div>`:c`
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
    `}};x.styles=y`
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
  `,a([h({type:String})],x.prototype,"dataSrc",2),a([h({type:String})],x.prototype,"timelineTitle",2),a([h({type:String})],x.prototype,"timelineSubtitle",2),a([u()],x.prototype,"_items",2),a([u()],x.prototype,"_isLoading",2),a([u()],x.prototype,"_error",2),x=a([_("timeline-list")],x);var E=class extends m{constructor(){super(...arguments);this.aboutTitle="Contact";this.bio="I like work that ends in a live URL, a cleaner workflow, or a measurable business result. If that is the kind of software you need, reach out.";this.linkedinUrl="https://www.linkedin.com/in/issack-john/";this.githubUrl="https://github.com/issackj1"}render(){return c`
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
    `}};E.styles=y`
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
  `,a([h({type:String})],E.prototype,"aboutTitle",2),a([h({type:String})],E.prototype,"bio",2),a([h({type:String})],E.prototype,"linkedinUrl",2),a([h({type:String})],E.prototype,"githubUrl",2),E=a([_("about-me")],E);var T=class extends m{constructor(){super(...arguments);this.copyrightYear=new Date().getFullYear().toString()}render(){return c`
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
    `}};T.styles=y`
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
  `,a([h({type:String})],T.prototype,"copyrightYear",2),T=a([_("footer-bar")],T);var z=class extends m{constructor(){super(...arguments);this._isDark=!1}connectedCallback(){super.connectedCallback();let e=localStorage.getItem("theme");e?this._isDark=e==="dark":this._isDark=window.matchMedia("(prefers-color-scheme: dark)").matches,this._applyTheme()}_applyTheme(){document.documentElement.setAttribute("data-theme",this._isDark?"dark":"light"),this.setAttribute("data-theme",this._isDark?"dark":"light"),localStorage.setItem("theme",this._isDark?"dark":"light")}_toggleTheme(){this._isDark=!this._isDark,this._applyTheme()}render(){return c`
      <button 
        @click=${this._toggleTheme} 
        aria-label="Toggle theme"
        title="${this._isDark?"Switch to light mode":"Switch to dark mode"}"
      >
        ${this._isDark?"Light":"Dark"}
      </button>
    `}};z.styles=y`
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
