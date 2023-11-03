import{n as y,i as G,a as S,b as T,c as U,d as H,e as Q}from"./lodash-bd15013d.js";let W=class{constructor(e){this.namespace=e||new this.Namespace}serialise(e){if(!(e instanceof this.namespace.elements.Element))throw new TypeError(`Given element \`${e}\` is not an Element instance`);const t={element:e.element};e._meta&&e._meta.length>0&&(t.meta=this.serialiseObject(e.meta)),e._attributes&&e._attributes.length>0&&(t.attributes=this.serialiseObject(e.attributes));const n=this.serialiseContent(e.content);return n!==void 0&&(t.content=n),t}deserialise(e){if(!e.element)throw new Error("Given value is not an object containing an element name");const t=this.namespace.getElementClass(e.element),n=new t;n.element!==e.element&&(n.element=e.element),e.meta&&this.deserialiseObject(e.meta,n.meta),e.attributes&&this.deserialiseObject(e.attributes,n.attributes);const s=this.deserialiseContent(e.content);return(s!==void 0||n.content===null)&&(n.content=s),n}serialiseContent(e){if(e instanceof this.namespace.elements.Element)return this.serialise(e);if(e instanceof this.namespace.KeyValuePair){const t={key:this.serialise(e.key)};return e.value&&(t.value=this.serialise(e.value)),t}return e&&e.map?e.length===0?void 0:e.map(this.serialise,this):e}deserialiseContent(e){if(e){if(e.element)return this.deserialise(e);if(e.key){const t=new this.namespace.KeyValuePair(this.deserialise(e.key));return e.value&&(t.value=this.deserialise(e.value)),t}if(e.map)return e.map(this.deserialise,this)}return e}serialiseObject(e){const t={};if(e.forEach((n,s)=>{n&&(t[s.toValue()]=this.serialise(n))}),Object.keys(t).length!==0)return t}deserialiseObject(e,t){Object.keys(e).forEach(n=>{t.set(n,this.deserialise(e[n]))})}};var X=W;let Y=class O{constructor(e,t){this.key=e,this.value=t}clone(){const e=new O;return this.key&&(e.key=this.key.clone()),this.value&&(e.value=this.value.clone()),e}};var b=Y;const Z=y;function j(r){return typeof r=="string"?e=>e.element===r:r.constructor&&r.extend?e=>e instanceof r:r}let M=class _{constructor(e){this.elements=e||[]}toValue(){return this.elements.map(e=>e.toValue())}map(e,t){return this.elements.map(e,t)}flatMap(e,t){return this.map(e,t).reduce((n,s)=>n.concat(s),[])}compactMap(e,t){const n=[];return this.forEach(s=>{const i=e.bind(t)(s);i&&n.push(i)}),n}filter(e,t){return e=j(e),new _(this.elements.filter(e,t))}reject(e,t){return e=j(e),new _(this.elements.filter(Z(e),t))}find(e,t){return e=j(e),this.elements.find(e,t)}forEach(e,t){this.elements.forEach(e,t)}reduce(e,t){return this.elements.reduce(e,t)}includes(e){return this.elements.some(t=>t.equals(e))}shift(){return this.elements.shift()}unshift(e){this.elements.unshift(this.refract(e))}push(e){return this.elements.push(this.refract(e)),this}add(e){this.push(e)}get(e){return this.elements[e]}getValue(e){const t=this.elements[e];if(t)return t.toValue()}get length(){return this.elements.length}get isEmpty(){return this.elements.length===0}get first(){return this.elements[0]}};typeof Symbol<"u"&&(M.prototype[Symbol.iterator]=function(){return this.elements[Symbol.iterator]()});var g=M;const ee=G,d=b,m=g;let te=class E{constructor(e,t,n){t&&(this.meta=t),n&&(this.attributes=n),this.content=e}freeze(){Object.isFrozen(this)||(this._meta&&(this.meta.parent=this,this.meta.freeze()),this._attributes&&(this.attributes.parent=this,this.attributes.freeze()),this.children.forEach(e=>{e.parent=this,e.freeze()},this),this.content&&Array.isArray(this.content)&&Object.freeze(this.content),Object.freeze(this))}primitive(){}clone(){const e=new this.constructor;return e.element=this.element,this.meta.length&&(e._meta=this.meta.clone()),this.attributes.length&&(e._attributes=this.attributes.clone()),this.content?this.content.clone?e.content=this.content.clone():Array.isArray(this.content)?e.content=this.content.map(t=>t.clone()):e.content=this.content:e.content=this.content,e}toValue(){return this.content instanceof E?this.content.toValue():this.content instanceof d?{key:this.content.key.toValue(),value:this.content.value?this.content.value.toValue():void 0}:this.content&&this.content.map?this.content.map(e=>e.toValue(),this):this.content}toRef(e){if(this.id.toValue()==="")throw Error("Cannot create reference to an element that does not contain an ID");const t=new this.RefElement(this.id.toValue());return e&&(t.path=e),t}findRecursive(...e){if(arguments.length>1&&!this.isFrozen)throw new Error("Cannot find recursive with multiple element names without first freezing the element. Call `element.freeze()`");const t=e.pop();let n=new m;const s=(l,a)=>(l.push(a),l),i=(l,a)=>{a.element===t&&l.push(a);const u=a.findRecursive(t);return u&&u.reduce(s,l),a.content instanceof d&&(a.content.key&&i(l,a.content.key),a.content.value&&i(l,a.content.value)),l};return this.content&&(this.content.element&&i(n,this.content),Array.isArray(this.content)&&this.content.reduce(i,n)),e.isEmpty||(n=n.filter(l=>{let a=l.parents.map(u=>u.element);for(const u in e){const J=e[u],k=a.indexOf(J);if(k!==-1)a=a.splice(0,k);else return!1}return!0})),n}set(e){return this.content=e,this}equals(e){return ee(this.toValue(),e)}getMetaProperty(e,t){if(!this.meta.hasKey(e)){if(this.isFrozen){const n=this.refract(t);return n.freeze(),n}this.meta.set(e,t)}return this.meta.get(e)}setMetaProperty(e,t){this.meta.set(e,t)}get element(){return this._storedElement||"element"}set element(e){this._storedElement=e}get content(){return this._content}set content(e){if(e instanceof E)this._content=e;else if(e instanceof m)this.content=e.elements;else if(typeof e=="string"||typeof e=="number"||typeof e=="boolean"||e==="null"||e==null)this._content=e;else if(e instanceof d)this._content=e;else if(Array.isArray(e))this._content=e.map(this.refract);else if(typeof e=="object")this._content=Object.keys(e).map(t=>new this.MemberElement(t,e[t]));else throw new Error("Cannot set content to given value")}get meta(){if(!this._meta){if(this.isFrozen){const e=new this.ObjectElement;return e.freeze(),e}this._meta=new this.ObjectElement}return this._meta}set meta(e){e instanceof this.ObjectElement?this._meta=e:this.meta.set(e||{})}get attributes(){if(!this._attributes){if(this.isFrozen){const e=new this.ObjectElement;return e.freeze(),e}this._attributes=new this.ObjectElement}return this._attributes}set attributes(e){e instanceof this.ObjectElement?this._attributes=e:this.attributes.set(e||{})}get id(){return this.getMetaProperty("id","")}set id(e){this.setMetaProperty("id",e)}get classes(){return this.getMetaProperty("classes",[])}set classes(e){this.setMetaProperty("classes",e)}get title(){return this.getMetaProperty("title","")}set title(e){this.setMetaProperty("title",e)}get description(){return this.getMetaProperty("description","")}set description(e){this.setMetaProperty("description",e)}get links(){return this.getMetaProperty("links",[])}set links(e){this.setMetaProperty("links",e)}get isFrozen(){return Object.isFrozen(this)}get parents(){let{parent:e}=this;const t=new m;for(;e;)t.push(e),e=e.parent;return t}get children(){if(Array.isArray(this.content))return new m(this.content);if(this.content instanceof d){const e=new m([this.content.key]);return this.content.value&&e.push(this.content.value),e}return this.content instanceof E?new m([this.content]):new m}get recursiveChildren(){const e=new m;return this.children.forEach(t=>{e.push(t),t.recursiveChildren.forEach(n=>{e.push(n)})}),e}};var h=te;const ne=h;let se=class extends ne{constructor(e,t,n){super(e||null,t,n),this.element="null"}primitive(){return"null"}set(){return new Error("Cannot set the value of null")}};var re=se;const ie=h;var le=class extends ie{constructor(e,t,n){super(e,t,n),this.element="string"}primitive(){return"string"}get length(){return this.content.length}};const ae=h;var oe=class extends ae{constructor(e,t,n){super(e,t,n),this.element="number"}primitive(){return"number"}};const ce=h;var he=class extends ce{constructor(e,t,n){super(e,t,n),this.element="boolean"}primitive(){return"boolean"}};const ue=y,me=h,v=g;let p=class extends me{constructor(e,t,n){super(e||[],t,n),this.element="array"}primitive(){return"array"}get(e){return this.content[e]}getValue(e){const t=this.get(e);if(t)return t.toValue()}getIndex(e){return this.content[e]}set(e,t){return this.content[e]=this.refract(t),this}remove(e){const t=this.content.splice(e,1);return t.length?t[0]:null}map(e,t){return this.content.map(e,t)}flatMap(e,t){return this.map(e,t).reduce((n,s)=>n.concat(s),[])}compactMap(e,t){const n=[];return this.forEach(s=>{const i=e.bind(t)(s);i&&n.push(i)}),n}filter(e,t){return new v(this.content.filter(e,t))}reject(e,t){return this.filter(ue(e),t)}reduce(e,t){let n,s;t!==void 0?(n=0,s=this.refract(t)):(n=1,s=this.primitive()==="object"?this.first.value:this.first);for(let i=n;i<this.length;i+=1){const l=this.content[i];this.primitive()==="object"?s=this.refract(e(s,l.value,l.key,l,this)):s=this.refract(e(s,l,i,this))}return s}forEach(e,t){this.content.forEach((n,s)=>{e.bind(t)(n,this.refract(s))})}shift(){return this.content.shift()}unshift(e){this.content.unshift(this.refract(e))}push(e){return this.content.push(this.refract(e)),this}add(e){this.push(e)}findElements(e,t){const n=t||{},s=!!n.recursive,i=n.results===void 0?[]:n.results;return this.forEach((l,a,u)=>{s&&l.findElements!==void 0&&l.findElements(e,{results:i,recursive:s}),e(l,a,u)&&i.push(l)}),i}find(e){return new v(this.findElements(e,{recursive:!0}))}findByElement(e){return this.find(t=>t.element===e)}findByClass(e){return this.find(t=>t.classes.includes(e))}getById(e){return this.find(t=>t.id.toValue()===e).first}includes(e){return this.content.some(t=>t.equals(e))}contains(e){return this.includes(e)}empty(){return new this.constructor([])}"fantasy-land/empty"(){return this.empty()}concat(e){return new this.constructor(this.content.concat(e.content))}"fantasy-land/concat"(e){return this.concat(e)}"fantasy-land/map"(e){return new this.constructor(this.map(e))}"fantasy-land/chain"(e){return this.map(t=>e(t),this).reduce((t,n)=>t.concat(n),this.empty())}"fantasy-land/filter"(e){return new this.constructor(this.content.filter(e))}"fantasy-land/reduce"(e,t){return this.content.reduce(e,t)}get length(){return this.content.length}get isEmpty(){return this.content.length===0}get first(){return this.getIndex(0)}get second(){return this.getIndex(1)}get last(){return this.getIndex(this.length-1)}};p.empty=function(){return new this};p["fantasy-land/empty"]=p.empty;typeof Symbol<"u"&&(p.prototype[Symbol.iterator]=function(){return this.content[Symbol.iterator]()});var V=p;const fe=b,pe=h;var A=class extends pe{constructor(e,t,n,s){super(new fe,n,s),this.element="member",this.key=e,this.value=t}get key(){return this.content.key}set key(e){this.content.key=this.refract(e)}get value(){return this.content.value}set value(e){this.content.value=this.refract(e)}};const de=y,Ee=g;let ye=class N extends Ee{map(e,t){return this.elements.map(n=>e.bind(t)(n.value,n.key,n))}filter(e,t){return new N(this.elements.filter(n=>e.bind(t)(n.value,n.key,n)))}reject(e,t){return this.filter(de(e.bind(t)))}forEach(e,t){return this.elements.forEach((n,s)=>{e.bind(t)(n.value,n.key,n,s)})}keys(){return this.map((e,t)=>t.toValue())}values(){return this.map(e=>e.toValue())}};var P=ye;const be=y,ge=S,we=V,je=A,_e=P;let $e=class extends we{constructor(e,t,n){super(e||[],t,n),this.element="object"}primitive(){return"object"}toValue(){return this.content.reduce((e,t)=>(e[t.key.toValue()]=t.value?t.value.toValue():void 0,e),{})}get(e){const t=this.getMember(e);if(t)return t.value}getMember(e){if(e!==void 0)return this.content.find(t=>t.key.toValue()===e)}remove(e){let t=null;return this.content=this.content.filter(n=>n.key.toValue()===e?(t=n,!1):!0),t}getKey(e){const t=this.getMember(e);if(t)return t.key}set(e,t){if(ge(e))return Object.keys(e).forEach(i=>{this.set(i,e[i])}),this;const n=e,s=this.getMember(n);return s?s.value=t:this.content.push(new je(n,t)),this}keys(){return this.content.map(e=>e.key.toValue())}values(){return this.content.map(e=>e.value.toValue())}hasKey(e){return this.content.some(t=>t.key.equals(e))}items(){return this.content.map(e=>[e.key.toValue(),e.value.toValue()])}map(e,t){return this.content.map(n=>e.bind(t)(n.value,n.key,n))}compactMap(e,t){const n=[];return this.forEach((s,i,l)=>{const a=e.bind(t)(s,i,l);a&&n.push(a)}),n}filter(e,t){return new _e(this.content).filter(e,t)}reject(e,t){return this.filter(be(e),t)}forEach(e,t){return this.content.forEach(n=>e.bind(t)(n.value,n.key,n))}};var ke=$e;const ve=h;var Se=class extends ve{constructor(e,t,n){super(e||[],t,n),this.element="link"}get relation(){return this.attributes.get("relation")}set relation(e){this.attributes.set("relation",e)}get href(){return this.attributes.get("href")}set href(e){this.attributes.set("href",e)}};const Oe=h;var Me=class extends Oe{constructor(e,t,n){super(e||[],t,n),this.element="ref",this.path||(this.path="element")}get path(){return this.attributes.get("path")}set path(e){this.attributes.set("path",e)}};const f=h,x=re,z=le,C=oe,K=he,R=V,B=A,$=ke,Ve=Se,D=Me,I=g,Ae=P,Ne=b;function w(r){return r instanceof f?r:typeof r=="string"?new z(r):typeof r=="number"?new C(r):typeof r=="boolean"?new K(r):r===null?new x:Array.isArray(r)?new R(r.map(w)):typeof r=="object"?new $(r):r}f.prototype.ObjectElement=$;f.prototype.RefElement=D;f.prototype.MemberElement=B;f.prototype.refract=w;I.prototype.refract=w;var L={Element:f,NullElement:x,StringElement:z,NumberElement:C,BooleanElement:K,ArrayElement:R,MemberElement:B,ObjectElement:$,LinkElement:Ve,RefElement:D,refract:w,ArraySlice:I,ObjectSlice:Ae,KeyValuePair:Ne};const Pe=T,xe=U,ze=H,Ce=Q,Ke=S,F=X,o=L;let q=class{constructor(e){this.elementMap={},this.elementDetection=[],this.Element=o.Element,this.KeyValuePair=o.KeyValuePair,(!e||!e.noDefault)&&this.useDefault(),this._attributeElementKeys=[],this._attributeElementArrayKeys=[]}use(e){return e.namespace&&e.namespace({base:this}),e.load&&e.load({base:this}),this}useDefault(){return this.register("null",o.NullElement).register("string",o.StringElement).register("number",o.NumberElement).register("boolean",o.BooleanElement).register("array",o.ArrayElement).register("object",o.ObjectElement).register("member",o.MemberElement).register("ref",o.RefElement).register("link",o.LinkElement),this.detect(Pe,o.NullElement,!1).detect(xe,o.StringElement,!1).detect(ze,o.NumberElement,!1).detect(Ce,o.BooleanElement,!1).detect(Array.isArray,o.ArrayElement,!1).detect(Ke,o.ObjectElement,!1),this}register(e,t){return this._elements=void 0,this.elementMap[e]=t,this}unregister(e){return this._elements=void 0,delete this.elementMap[e],this}detect(e,t,n){return(n===void 0?!0:n)?this.elementDetection.unshift([e,t]):this.elementDetection.push([e,t]),this}toElement(e){if(e instanceof this.Element)return e;let t;for(let n=0;n<this.elementDetection.length;n+=1){const s=this.elementDetection[n][0],i=this.elementDetection[n][1];if(s(e)){t=new i(e);break}}return t}getElementClass(e){const t=this.elementMap[e];return t===void 0?this.Element:t}fromRefract(e){return this.serialiser.deserialise(e)}toRefract(e){return this.serialiser.serialise(e)}get elements(){return this._elements===void 0&&(this._elements={Element:this.Element},Object.keys(this.elementMap).forEach(e=>{const t=e[0].toUpperCase()+e.substr(1);this._elements[t]=this.elementMap[e]})),this._elements}get serialiser(){return new F(this)}};F.prototype.Namespace=q;var Re=q;const Be=Re,c=L;var Xe=Be,Ye=b,Ze=c.ArraySlice,et=c.ObjectSlice,tt=c.Element,nt=c.StringElement,st=c.NumberElement,rt=c.BooleanElement,it=c.NullElement,lt=c.ArrayElement,at=c.ObjectElement,ot=c.MemberElement,ct=c.RefElement,ht=c.LinkElement,ut=c.refract;export{lt as A,rt as B,tt as E,Ye as K,ht as L,ot as M,st as N,at as O,ct as R,nt as S,it as a,Xe as b,et as c,Ze as d,ut as r};
