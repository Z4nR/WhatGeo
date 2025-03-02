import{g as F}from"./@babel-405a847c.js";function de(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&de(t)}),e}var Ie=de,en=de;Ie.default=en;class Re{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Z(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function H(e,...n){const t=Object.create(null);for(const a in e)t[a]=e[a];return n.forEach(function(a){for(const l in a)t[l]=a[l]}),t}const nn="</span>",Se=e=>!!e.kind;class tn{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Z(n)}openNode(n){if(!Se(n))return;let t=n.kind;n.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(n){Se(n)&&(this.buffer+=nn)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}class fe{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t={kind:n,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(a=>this._walk(n,a)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{fe._collapse(t)}))}}class sn extends fe{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const a=n.root;a.kind=t,a.sublanguage=!0,this.add(a)}toHTML(){return new tn(this,this.options).value()}finalize(){return!0}}function an(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function j(e){return e?typeof e=="string"?e:e.source:null}function rn(...e){return e.map(t=>j(t)).join("")}function cn(...e){return"("+e.map(t=>j(t)).join("|")+")"}function on(e){return new RegExp(e.toString()+"|").exec("").length-1}function ln(e,n){const t=e&&e.exec(n);return t&&t.index===0}const un=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function gn(e,n="|"){let t=0;return e.map(a=>{t+=1;const l=t;let u=j(a),E="";for(;u.length>0;){const i=un.exec(u);if(!i){E+=u;break}E+=u.substring(0,i.index),u=u.substring(i.index+i[0].length),i[0][0]==="\\"&&i[1]?E+="\\"+String(Number(i[1])+l):(E+=i[0],i[0]==="("&&t++)}return E}).map(a=>`(${a})`).join(n)}const dn=/\b\B/,Ce="[a-zA-Z]\\w*",be="[a-zA-Z_]\\w*",he="\\b\\d+(\\.\\d+)?",De="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Le="\\b(0b[01]+)",fn="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",bn=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=rn(n,/.*\b/,e.binary,/\b.*/)),H({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,a)=>{t.index!==0&&a.ignoreMatch()}},e)},q={begin:"\\\\[\\s\\S]",relevance:0},hn={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[q]},En={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[q]},ke={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},se=function(e,n,t={}){const a=H({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(ke),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},pn=se("//","$"),mn=se("/\\*","\\*/"),_n=se("#","$"),Nn={className:"number",begin:he,relevance:0},Rn={className:"number",begin:De,relevance:0},Sn={className:"number",begin:Le,relevance:0},An={className:"number",begin:he+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},vn={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[q,{begin:/\[/,end:/\]/,relevance:0,contains:[q]}]}]},Mn={className:"title",begin:Ce,relevance:0},Tn={className:"title",begin:be,relevance:0},wn={begin:"\\.\\s*"+be,relevance:0},yn=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var te=Object.freeze({__proto__:null,MATCH_NOTHING_RE:dn,IDENT_RE:Ce,UNDERSCORE_IDENT_RE:be,NUMBER_RE:he,C_NUMBER_RE:De,BINARY_NUMBER_RE:Le,RE_STARTERS_RE:fn,SHEBANG:bn,BACKSLASH_ESCAPE:q,APOS_STRING_MODE:hn,QUOTE_STRING_MODE:En,PHRASAL_WORDS_MODE:ke,COMMENT:se,C_LINE_COMMENT_MODE:pn,C_BLOCK_COMMENT_MODE:mn,HASH_COMMENT_MODE:_n,NUMBER_MODE:Nn,C_NUMBER_MODE:Rn,BINARY_NUMBER_MODE:Sn,CSS_NUMBER_MODE:An,REGEXP_MODE:vn,TITLE_MODE:Mn,UNDERSCORE_TITLE_MODE:Tn,METHOD_GUARD:wn,END_SAME_AS_BEGIN:yn});function On(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function xn(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=On,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function In(e,n){Array.isArray(e.illegal)&&(e.illegal=cn(...e.illegal))}function Cn(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Dn(e,n){e.relevance===void 0&&(e.relevance=1)}const Ln=["of","and","for","in","not","or","if","then","parent","list","value"],kn="keyword";function Be(e,n,t=kn){const a={};return typeof e=="string"?l(t,e.split(" ")):Array.isArray(e)?l(t,e):Object.keys(e).forEach(function(u){Object.assign(a,Be(e[u],n,u))}),a;function l(u,E){n&&(E=E.map(i=>i.toLowerCase())),E.forEach(function(i){const r=i.split("|");a[r[0]]=[u,Bn(r[0],r[1])]})}}function Bn(e,n){return n?Number(n):Pn(e)?0:1}function Pn(e){return Ln.includes(e.toLowerCase())}function $n(e,{plugins:n}){function t(i,r){return new RegExp(j(i),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,g){g.position=this.position++,this.matchIndexes[this.matchAt]=g,this.regexes.push([g,r]),this.matchAt+=on(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(g=>g[1]);this.matcherRe=t(gn(r),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const g=this.matcherRe.exec(r);if(!g)return null;const d=g.findIndex((A,y)=>y>0&&A!==void 0),m=this.matchIndexes[d];return g.splice(0,d),Object.assign(g,m)}}class l{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const g=new a;return this.rules.slice(r).forEach(([d,m])=>g.addRule(d,m)),g.compile(),this.multiRegexes[r]=g,g}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,g){this.rules.push([r,g]),g.type==="begin"&&this.count++}exec(r){const g=this.getMatcher(this.regexIndex);g.lastIndex=this.lastIndex;let d=g.exec(r);if(this.resumingScanAtSamePosition()&&!(d&&d.index===this.lastIndex)){const m=this.getMatcher(0);m.lastIndex=this.lastIndex+1,d=m.exec(r)}return d&&(this.regexIndex+=d.position+1,this.regexIndex===this.count&&this.considerAll()),d}}function u(i){const r=new l;return i.contains.forEach(g=>r.addRule(g.begin,{rule:g,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function E(i,r){const g=i;if(i.isCompiled)return g;[Cn].forEach(m=>m(i,r)),e.compilerExtensions.forEach(m=>m(i,r)),i.__beforeBegin=null,[xn,In,Dn].forEach(m=>m(i,r)),i.isCompiled=!0;let d=null;if(typeof i.keywords=="object"&&(d=i.keywords.$pattern,delete i.keywords.$pattern),i.keywords&&(i.keywords=Be(i.keywords,e.case_insensitive)),i.lexemes&&d)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return d=d||i.lexemes||/\w+/,g.keywordPatternRe=t(d,!0),r&&(i.begin||(i.begin=/\B|\b/),g.beginRe=t(i.begin),i.endSameAsBegin&&(i.end=i.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(g.endRe=t(i.end)),g.terminatorEnd=j(i.end)||"",i.endsWithParent&&r.terminatorEnd&&(g.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(g.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(m){return Un(m==="self"?i:m)})),i.contains.forEach(function(m){E(m,g)}),i.starts&&E(i.starts,r),g.matcher=u(g),g}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=H(e.classNameAliases||{}),E(e)}function Pe(e){return e?e.endsWithParent||Pe(e.starts):!1}function Un(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return H(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:Pe(e)?H(e,{starts:e.starts?H(e.starts):null}):Object.isFrozen(e)?H(e):e}var Hn="10.7.3";function Gn(e){return!!(e||e==="")}function zn(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,Z(this.code);let a={};return this.autoDetect?(a=e.highlightAuto(this.code),this.detectedLanguage=a.language):(a=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),a.value},autoDetect(){return!this.language||Gn(this.autodetect)},ignoreIllegals(){return!0}},render(a){return a("pre",{},[a("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(a){a.component("highlightjs",n)}}}}const Kn={"after:highlightElement":({el:e,result:n,text:t})=>{const a=Ae(e);if(!a.length)return;const l=document.createElement("div");l.innerHTML=n.value,n.value=Fn(a,Ae(l),t)}};function ue(e){return e.nodeName.toLowerCase()}function Ae(e){const n=[];return function t(a,l){for(let u=a.firstChild;u;u=u.nextSibling)u.nodeType===3?l+=u.nodeValue.length:u.nodeType===1&&(n.push({event:"start",offset:l,node:u}),l=t(u,l),ue(u).match(/br|hr|img|input/)||n.push({event:"stop",offset:l,node:u}));return l}(e,0),n}function Fn(e,n,t){let a=0,l="";const u=[];function E(){return!e.length||!n.length?e.length?e:n:e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:n[0].event==="start"?e:n}function i(d){function m(A){return" "+A.nodeName+'="'+Z(A.value)+'"'}l+="<"+ue(d)+[].map.call(d.attributes,m).join("")+">"}function r(d){l+="</"+ue(d)+">"}function g(d){(d.event==="start"?i:r)(d.node)}for(;e.length||n.length;){let d=E();if(l+=Z(t.substring(a,d[0].offset)),a=d[0].offset,d===e){u.reverse().forEach(r);do g(d.splice(0,1)[0]),d=E();while(d===e&&d.length&&d[0].offset===a);u.reverse().forEach(i)}else d[0].event==="start"?u.push(d[0].node):u.pop(),g(d.splice(0,1)[0])}return l+Z(t.substr(a))}const ve={},oe=e=>{console.error(e)},Me=(e,...n)=>{console.log(`WARN: ${e}`,...n)},w=(e,n)=>{ve[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),ve[`${e}/${n}`]=!0)},le=Z,Te=H,we=Symbol("nomatch"),Wn=function(e){const n=Object.create(null),t=Object.create(null),a=[];let l=!0;const u=/(^(<[^>]+>|\t|)+|\n)/gm,E="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:sn};function g(s){return r.noHighlightRe.test(s)}function d(s){let c=s.className+" ";c+=s.parentNode?s.parentNode.className:"";const p=r.languageDetectRe.exec(c);if(p){const N=B(p[1]);return N||(Me(E.replace("{}",p[1])),Me("Falling back to no-highlight mode for this block.",s)),N?p[1]:"no-highlight"}return c.split(/\s+/).find(N=>g(N)||B(N))}function m(s,c,p,N){let S="",z="";typeof c=="object"?(S=s,p=c.ignoreIllegals,z=c.language,N=void 0):(w("10.7.0","highlight(lang, code, ...args) has been deprecated."),w("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),z=s,S=c);const I={code:S,language:z};J("before:highlight",I);const C=I.result?I.result:A(I.language,I.code,p,N);return C.code=I.code,J("after:highlight",C),C}function A(s,c,p,N){function S(o,f){const h=V.case_insensitive?f[0].toLowerCase():f[0];return Object.prototype.hasOwnProperty.call(o.keywords,h)&&o.keywords[h]}function z(){if(!b.keywords){M.addText(R);return}let o=0;b.keywordPatternRe.lastIndex=0;let f=b.keywordPatternRe.exec(R),h="";for(;f;){h+=R.substring(o,f.index);const _=S(b,f);if(_){const[T,ne]=_;if(M.addText(h),h="",ee+=ne,T.startsWith("_"))h+=f[0];else{const Qe=V.classNameAliases[T]||T;M.addKeyword(f[0],Qe)}}else h+=f[0];o=b.keywordPatternRe.lastIndex,f=b.keywordPatternRe.exec(R)}h+=R.substr(o),M.addText(h)}function I(){if(R==="")return;let o=null;if(typeof b.subLanguage=="string"){if(!n[b.subLanguage]){M.addText(R);return}o=A(b.subLanguage,R,!0,Ne[b.subLanguage]),Ne[b.subLanguage]=o.top}else o=P(R,b.subLanguage.length?b.subLanguage:null);b.relevance>0&&(ee+=o.relevance),M.addSublanguage(o.emitter,o.language)}function C(){b.subLanguage!=null?I():z(),R=""}function D(o){return o.className&&M.openNode(V.classNameAliases[o.className]||o.className),b=Object.create(o,{parent:{value:b}}),b}function U(o,f,h){let _=ln(o.endRe,h);if(_){if(o["on:end"]){const T=new Re(o);o["on:end"](f,T),T.isMatchIgnored&&(_=!1)}if(_){for(;o.endsParent&&o.parent;)o=o.parent;return o}}if(o.endsWithParent)return U(o.parent,f,h)}function Ze(o){return b.matcher.regexIndex===0?(R+=o[0],1):(ce=!0,0)}function Xe(o){const f=o[0],h=o.rule,_=new Re(h),T=[h.__beforeBegin,h["on:begin"]];for(const ne of T)if(ne&&(ne(o,_),_.isMatchIgnored))return Ze(f);return h&&h.endSameAsBegin&&(h.endRe=an(f)),h.skip?R+=f:(h.excludeBegin&&(R+=f),C(),!h.returnBegin&&!h.excludeBegin&&(R=f)),D(h),h.returnBegin?0:f.length}function je(o){const f=o[0],h=c.substr(o.index),_=U(b,o,h);if(!_)return we;const T=b;T.skip?R+=f:(T.returnEnd||T.excludeEnd||(R+=f),C(),T.excludeEnd&&(R=f));do b.className&&M.closeNode(),!b.skip&&!b.subLanguage&&(ee+=b.relevance),b=b.parent;while(b!==_.parent);return _.starts&&(_.endSameAsBegin&&(_.starts.endRe=_.endRe),D(_.starts)),T.returnEnd?0:f.length}function qe(){const o=[];for(let f=b;f!==V;f=f.parent)f.className&&o.unshift(f.className);o.forEach(f=>M.openNode(f))}let Q={};function _e(o,f){const h=f&&f[0];if(R+=o,h==null)return C(),0;if(Q.type==="begin"&&f.type==="end"&&Q.index===f.index&&h===""){if(R+=c.slice(f.index,f.index+1),!l){const _=new Error("0 width match regex");throw _.languageName=s,_.badRule=Q.rule,_}return 1}if(Q=f,f.type==="begin")return Xe(f);if(f.type==="illegal"&&!p){const _=new Error('Illegal lexeme "'+h+'" for mode "'+(b.className||"<unnamed>")+'"');throw _.mode=b,_}else if(f.type==="end"){const _=je(f);if(_!==we)return _}if(f.type==="illegal"&&h==="")return 1;if(re>1e5&&re>f.index*3)throw new Error("potential infinite loop, way more iterations than matches");return R+=h,h.length}const V=B(s);if(!V)throw oe(E.replace("{}",s)),new Error('Unknown language: "'+s+'"');const Je=$n(V,{plugins:a});let ae="",b=N||Je;const Ne={},M=new r.__emitter(r);qe();let R="",ee=0,Y=0,re=0,ce=!1;try{for(b.matcher.considerAll();;){re++,ce?ce=!1:b.matcher.considerAll(),b.matcher.lastIndex=Y;const o=b.matcher.exec(c);if(!o)break;const f=c.substring(Y,o.index),h=_e(f,o);Y=o.index+h}return _e(c.substr(Y)),M.closeAllNodes(),M.finalize(),ae=M.toHTML(),{relevance:Math.floor(ee),value:ae,language:s,illegal:!1,emitter:M,top:b}}catch(o){if(o.message&&o.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:o.message,context:c.slice(Y-100,Y+100),mode:o.mode},sofar:ae,relevance:0,value:le(c),emitter:M};if(l)return{illegal:!1,relevance:0,value:le(c),emitter:M,language:s,top:b,errorRaised:o};throw o}}function y(s){const c={relevance:0,emitter:new r.__emitter(r),value:le(s),illegal:!1,top:i};return c.emitter.addText(s),c}function P(s,c){c=c||r.languages||Object.keys(n);const p=y(s),N=c.filter(B).filter(me).map(D=>A(D,s,!1));N.unshift(p);const S=N.sort((D,U)=>{if(D.relevance!==U.relevance)return U.relevance-D.relevance;if(D.language&&U.language){if(B(D.language).supersetOf===U.language)return 1;if(B(U.language).supersetOf===D.language)return-1}return 0}),[z,I]=S,C=z;return C.second_best=I,C}function O(s){return r.tabReplace||r.useBR?s.replace(u,c=>c===`
`?r.useBR?"<br>":c:r.tabReplace?c.replace(/\t/g,r.tabReplace):c):s}function x(s,c,p){const N=c?t[c]:p;s.classList.add("hljs"),N&&s.classList.add(N)}const W={"before:highlightElement":({el:s})=>{r.useBR&&(s.innerHTML=s.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:s})=>{r.useBR&&(s.value=s.value.replace(/\n/g,"<br>"))}},G=/^(<[^>]+>|\t)+/gm,L={"after:highlightElement":({result:s})=>{r.tabReplace&&(s.value=s.value.replace(G,c=>c.replace(/\t/g,r.tabReplace)))}};function v(s){let c=null;const p=d(s);if(g(p))return;J("before:highlightElement",{el:s,language:p}),c=s;const N=c.textContent,S=p?m(N,{language:p,ignoreIllegals:!0}):P(N);J("after:highlightElement",{el:s,result:S,text:N}),s.innerHTML=S.value,x(s,p,S.language),s.result={language:S.language,re:S.relevance,relavance:S.relevance},S.second_best&&(s.second_best={language:S.second_best.language,re:S.second_best.relevance,relavance:S.second_best.relevance})}function k(s){s.useBR&&(w("10.3.0","'useBR' will be removed entirely in v11.0"),w("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),r=Te(r,s)}const $=()=>{if($.called)return;$.called=!0,w("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(v)};function X(){w("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),ie=!0}let ie=!1;function Ee(){if(document.readyState==="loading"){ie=!0;return}document.querySelectorAll("pre code").forEach(v)}function Ue(){ie&&Ee()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Ue,!1);function He(s,c){let p=null;try{p=c(e)}catch(N){if(oe("Language definition for '{}' could not be registered.".replace("{}",s)),l)oe(N);else throw N;p=i}p.name||(p.name=s),n[s]=p,p.rawDefinition=c.bind(null,e),p.aliases&&pe(p.aliases,{languageName:s})}function Ge(s){delete n[s];for(const c of Object.keys(t))t[c]===s&&delete t[c]}function ze(){return Object.keys(n)}function Ke(s){w("10.4.0","requireLanguage will be removed entirely in v11."),w("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const c=B(s);if(c)return c;throw new Error("The '{}' language is required, but not loaded.".replace("{}",s))}function B(s){return s=(s||"").toLowerCase(),n[s]||n[t[s]]}function pe(s,{languageName:c}){typeof s=="string"&&(s=[s]),s.forEach(p=>{t[p.toLowerCase()]=c})}function me(s){const c=B(s);return c&&!c.disableAutodetect}function Fe(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=c=>{s["before:highlightBlock"](Object.assign({block:c.el},c))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=c=>{s["after:highlightBlock"](Object.assign({block:c.el},c))})}function We(s){Fe(s),a.push(s)}function J(s,c){const p=s;a.forEach(function(N){N[p]&&N[p](c)})}function Ve(s){return w("10.2.0","fixMarkup will be removed entirely in v11.0"),w("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),O(s)}function Ye(s){return w("10.7.0","highlightBlock will be removed entirely in v12.0"),w("10.7.0","Please use highlightElement now."),v(s)}Object.assign(e,{highlight:m,highlightAuto:P,highlightAll:Ee,fixMarkup:Ve,highlightElement:v,highlightBlock:Ye,configure:k,initHighlighting:$,initHighlightingOnLoad:X,registerLanguage:He,unregisterLanguage:Ge,listLanguages:ze,getLanguage:B,registerAliases:pe,requireLanguage:Ke,autoDetection:me,inherit:Te,addPlugin:We,vuePlugin:zn(e).VuePlugin}),e.debugMode=function(){l=!1},e.safeMode=function(){l=!0},e.versionString=Hn;for(const s in te)typeof te[s]=="object"&&Ie(te[s]);return Object.assign(e,te),e.addPlugin(W),e.addPlugin(Kn),e.addPlugin(L),e};var Vn=Wn({}),St=Vn;const ye="[A-Za-z$_][0-9A-Za-z$_]*",Yn=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],Zn=["true","false","null","undefined","NaN","Infinity"],Xn=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],jn=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],qn=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Jn=["arguments","this","super","console","window","document","localStorage","module","global"],Qn=[].concat(qn,Jn,Xn,jn);function et(e){return e?typeof e=="string"?e:e.source:null}function Oe(e){return ge("(?=",e,")")}function ge(...e){return e.map(t=>et(t)).join("")}function nt(e){const n=(v,{after:k})=>{const $="</"+v[0].slice(1);return v.input.indexOf($,k)!==-1},t=ye,a={begin:"<>",end:"</>"},l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(v,k)=>{const $=v[0].length+v.index,X=v.input[$];if(X==="<"){k.ignoreMatch();return}X===">"&&(n(v,{after:$})||k.ignoreMatch())}},u={$pattern:ye,keyword:Yn,literal:Zn,built_in:Qn},E="[0-9](_?[0-9])*",i=`\\.(${E})`,r="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${r})((${i})|\\.)?|(${i}))[eE][+-]?(${E})\\b`},{begin:`\\b(${r})\\b((${i})\\b|\\.)?|(${i})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:u,contains:[]},m={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},A={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,d],subLanguage:"css"}},y={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,d]},O={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:t+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},x=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,A,y,g,e.REGEXP_MODE];d.contains=x.concat({begin:/\{/,end:/\}/,keywords:u,contains:["self"].concat(x)});const W=[].concat(O,d.contains),G=W.concat([{begin:/\(/,end:/\)/,keywords:u,contains:["self"].concat(W)}]),L={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:G};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:u,exports:{PARAMS_CONTAINS:G},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,A,y,O,g,{begin:ge(/[{,\n]\s*/,Oe(ge(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,t+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:t+Oe("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[O,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:G}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:a.begin,end:a.end},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:u,contains:["self",e.inherit(e.TITLE_MODE,{begin:t}),L],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[L,e.inherit(e.TITLE_MODE,{begin:t})]},{variants:[{begin:"\\."+t},{begin:"\\$"+t}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),"self",L]},{begin:"(get|set)\\s+(?="+t+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:t}),{begin:/\(\)/},L]},{begin:/\$[(.]/}]}}var tt=nt;const At=F(tt);function st(e){const n={literal:"true false null"},t=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],a=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],l={end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:n},u={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(l,{begin:/:/})].concat(t),illegal:"\\S"},E={begin:"\\[",end:"\\]",contains:[e.inherit(l)],illegal:"\\S"};return a.push(u,E),t.forEach(function(i){a.push(i)}),{name:"JSON",contains:a,keywords:n,illegal:"\\S"}}var it=st;const vt=F(it);function $e(e){return e?typeof e=="string"?e:e.source:null}function xe(e){return K("(?=",e,")")}function at(e){return K("(",e,")?")}function K(...e){return e.map(t=>$e(t)).join("")}function rt(...e){return"("+e.map(t=>$e(t)).join("|")+")"}function ct(e){const n=K(/[A-Z_]/,at(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),t=/[A-Za-z0-9._:-]+/,a={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},l={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},u=e.inherit(l,{begin:/\(/,end:/\)/}),E=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),i=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),r={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:t,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[a]},{begin:/'/,end:/'/,contains:[a]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[l,i,E,u,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[l,u,i,E]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},a,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:K(/</,xe(K(n,rt(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{className:"tag",begin:K(/<\//,xe(K(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}var ot=ct;const Mt=F(ot);function lt(e){return e?typeof e=="string"?e:e.source:null}function ut(...e){return e.map(t=>lt(t)).join("")}function gt(e){const n={},t={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:ut(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});const a={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},l={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},u={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,a]};a.contains.push(u);const E={className:"",begin:/\\"/},i={className:"string",begin:/'/,end:/'/},r={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},g=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],d=e.SHEBANG({binary:`(${g.join("|")})`,relevance:10}),m={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"},contains:[d,e.SHEBANG(),m,r,e.HASH_COMMENT_MODE,l,u,E,i,n]}}var dt=gt;const Tt=F(dt);function ft(e){var n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},l={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},u={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,l]},E=e.inherit(u,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),i="[0-9]{4}(-[0-9][0-9]){0,2}",r="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",g="(\\.[0-9]*)?",d="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",m={className:"number",begin:"\\b"+i+r+g+d+"\\b"},A={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},y={begin:/\{/,end:/\}/,contains:[A],illegal:"\\n",relevance:0},P={begin:"\\[",end:"\\]",contains:[A],illegal:"\\n",relevance:0},O=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},m,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},y,P,u],x=[...O];return x.pop(),x.push(E),A.contains=x,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:O}}var bt=ft;const wt=F(bt);function ht(e){return e?typeof e=="string"?e:e.source:null}function Et(...e){return e.map(t=>ht(t)).join("")}function pt(e){const n="HTTP/(2|1\\.[01])",a={className:"attribute",begin:Et("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},l=[a,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+n+" \\d{3})",end:/$/,contains:[{className:"meta",begin:n},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:l}},{begin:"(?=^[A-Z]+ (.*?) "+n+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:n},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:l}},e.inherit(a,{relevance:0})]}}var mt=pt;const yt=F(mt);function _t(e){const n=["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"],t="Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",a="-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",l={$pattern:/-?[A-z\.\-]+\b/,keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter",built_in:"ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write"},u=/\w[\w\d]*((-)[\w\d]+)*/,E={begin:"`[\\s\\S]",relevance:0},i={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},r={className:"literal",begin:/\$(null|true|false)\b/},g={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[E,i,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},d={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},m={className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]},A=e.inherit(e.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[m]}),y={className:"built_in",variants:[{begin:"(".concat(t,")+(-)[\\w\\d]+")}]},P={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[e.TITLE_MODE]},O={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:u,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[i]}]},x={begin:/using\s/,end:/$/,returnBegin:!0,contains:[g,d,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},W={variants:[{className:"operator",begin:"(".concat(a,")\\b")},{className:"literal",begin:/(-)[\w\d]+/,relevance:0}]},G={className:"selector-tag",begin:/@\B/,relevance:0},L={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(l.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},e.inherit(e.TITLE_MODE,{endsParent:!0})]},v=[L,A,E,e.NUMBER_MODE,g,d,y,i,r,G],k={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",v,{begin:"("+n.join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return L.contains.unshift(k),{name:"PowerShell",aliases:["ps","ps1"],case_insensitive:!0,keywords:l,contains:v.concat(P,O,x,W,k)}}var Nt=_t;const Ot=F(Nt);export{vt as a,Tt as b,St as c,yt as h,At as j,Ot as p,Mt as x,wt as y};
