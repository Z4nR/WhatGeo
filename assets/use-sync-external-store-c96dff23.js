import{r as x}from"./react-0d88fcd1.js";var E={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=x;function $(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var V=typeof Object.is=="function"?Object.is:$,j=f.useState,O=f.useEffect,_=f.useLayoutEffect,g=f.useDebugValue;function k(e,t){var r=t(),i=j({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return _(function(){n.value=r,n.getSnapshot=t,p(n)&&u({inst:n})},[e,r,t]),O(function(){return p(n)&&u({inst:n}),e(function(){p(n)&&u({inst:n})})},[e]),g(r),r}function p(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!V(e,r)}catch{return!0}}function q(e,t){return t()}var D=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?q:k;w.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:D;E.exports=w;var L=E.exports,M={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=x,R=L;function W(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var z=typeof Object.is=="function"?Object.is:W,A=R.useSyncExternalStore,B=v.useRef,C=v.useEffect,F=v.useMemo,G=v.useDebugValue;M.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var u=B(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=F(function(){function S(o){if(!h){if(h=!0,d=o,o=i(o),n!==void 0&&c.hasValue){var s=c.value;if(n(s,o))return l=s}return l=o}if(s=l,z(d,o))return s;var y=i(o);return n!==void 0&&n(s,y)?s:(d=o,l=y)}var h=!1,d,l,m=r===void 0?null:r;return[function(){return S(t())},m===null?void 0:function(){return S(m())}]},[t,r,i,n]);var a=A(e,u[0],u[1]);return C(function(){c.hasValue=!0,c.value=a},[a]),G(a),a};export{L as s};
