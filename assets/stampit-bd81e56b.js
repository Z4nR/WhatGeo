import{g as T}from"./@babel-fbd3a02c.js";var J={exports:{}};(function(K){(function(){var u,o,e,s,I,h="properties",P="deepProperties",v="propertyDescriptors",d="staticProperties",j="staticDeepProperties",A="staticPropertyDescriptors",S="configuration",E="deepConfiguration",R="deepProps",V="deepStatics",k="deepConf",_="initializers",x="methods",w="composers",b="compose";function q(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])}function B(t,n){return Array.prototype.slice.call(arguments,2).reduce(t,n)}var f=B.bind(0,function(n,r){if(r)for(var a=q(r),i=0;i<a.length;i+=1)Object.defineProperty(n,a[i],Object.getOwnPropertyDescriptor(r,a[i]));return n});function D(t){return typeof t=="function"}function l(t){return t&&typeof t=="object"||D(t)}function G(t){return t&&typeof t=="object"&&t.__proto__==Object.prototype}var m=B.bind(0,function t(n,r){if(r===u)return n;if(Array.isArray(r))return(Array.isArray(n)?n:[]).concat(r);if(!G(r))return r;for(var a,i,y=q(r),c=0;c<y.length;)a=y[c++],(i=Object.getOwnPropertyDescriptor(r,a)).hasOwnProperty("value")?i.value!==u&&(n[a]=t(G(n[a])||Array.isArray(r[a])?n[a]:{},r[a])):Object.defineProperty(n,a,i);return n});function z(){return(o=Array.prototype.concat.apply([],arguments).filter(function(t,n,r){return D(t)&&r.indexOf(t)===n})).length?o:u}function L(t){return o=function(){return function r(a){var i,y,c=r[b]||{},O={__proto__:c[x]},N=c[_],Q=Array.prototype.slice.apply(arguments),C=c[P];if(C&&m(O,C),(C=c[h])&&f(O,C),(C=c[v])&&Object.defineProperties(O,C),!N||!N.length)return O;for(a===u&&(a={}),c=0;c<N.length;)D(i=N[c++])&&(O=(y=i.call(O,a,{instance:O,stamp:r,args:Q}))===u?O:y);return O}}(),(e=t[j])&&m(o,e),(e=t[d])&&f(o,e),(e=t[A])&&Object.defineProperties(o,e),e=D(o[b])?o[b]:F,f(o[b]=function(){return e.apply(this,arguments)},t),o}function M(t,n){function r(i,y){l(n[i])&&(l(t[i])||(t[i]={}),(y||f)(t[i],n[i]))}function a(i){(o=z(t[i],n[i]))&&(t[i]=o)}return n&&l(n=n[b]||n)&&(r(x),r(h),r(P,m),r(v),r(d),r(j,m),r(A),r(S),r(E,m),a(_),a(w)),t}function F(){return L(Array.prototype.concat.apply([this],arguments).reduce(M,{}))}function H(t){return D(t)&&D(t[b])}var p={};function g(t,n){return function(){return(s={})[t]=n.apply(u,Array.prototype.concat.apply([{}],arguments)),((o=this)&&o[b]||e).call(o,s)}}p[x]=g(x,f),p[h]=p.props=g(h,f),p[_]=p.init=g(_,z),p[w]=g(w,z),p[P]=p[R]=g(P,m),p[d]=p.statics=g(d,f),p[j]=p[V]=g(j,m),p[S]=p.conf=g(S,f),p[E]=p[k]=g(E,m),p[v]=g(v,f),p[A]=g(A,f),e=p[b]=f(function(){for(var n,r,a=0,i=[],y=arguments,c=this;a<y.length;)l(n=y[a++])&&i.push(H(n)?n:((s={})[x]=(r=n)[x]||u,e=r.props,s[h]=l((o=r[h])||e)?f({},e,o):u,s[_]=z(r.init,r[_]),s[w]=z(r[w]),e=r[R],s[P]=l((o=r[P])||e)?m({},e,o):u,s[v]=r[v],e=r.statics,s[d]=l((o=r[d])||e)?f({},e,o):u,e=r[V],s[j]=l((o=r[j])||e)?m({},e,o):u,o=r[A],s[A]=l((e=r.name&&{name:{value:r.name}})||o)?f({},o,e):u,e=r.conf,s[S]=l((o=r[S])||e)?f({},e,o):u,e=r[k],s[E]=l((o=r[E])||e)?m({},e,o):u,s));if(n=F.apply(c||I,i),c&&i.unshift(c),Array.isArray(y=n[b][w]))for(a=0;a<y.length;)n=H(c=y[a++]({stamp:n,composables:i}))?c:n;return n},p),p.create=function(){return this.apply(u,arguments)},(s={})[d]=p,I=F(s),e[b]=e.bind(),e.version="4.3.2",K.exports=e})()})(J);var U=J.exports;const X=T(U);export{X as s};