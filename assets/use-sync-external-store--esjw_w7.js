import{r as O}from"./react-CmWrSNz4.js";var d={exports:{}},m={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function U(){if(y)return m;y=1;var f=O();function h(r,u){return r===u&&(r!==0||1/r===1/u)||r!==r&&u!==u}var E=typeof Object.is=="function"?Object.is:h,j=f.useSyncExternalStore,z=f.useRef,M=f.useEffect,_=f.useMemo,D=f.useDebugValue;return m.useSyncExternalStoreWithSelector=function(r,u,v,s,n){var t=z(null);if(t.current===null){var o={hasValue:!1,value:null};t.current=o}else o=t.current;t=_(function(){function R(e){if(!S){if(S=!0,l=e,e=s(e),n!==void 0&&o.hasValue){var i=o.value;if(n(i,e))return a=i}return a=e}if(i=a,E(l,e))return i;var W=s(e);return n!==void 0&&n(i,W)?(l=e,i):(l=e,a=W)}var S=!1,l,a,b=v===void 0?null:v;return[function(){return R(u())},b===null?void 0:function(){return R(b())}]},[u,v,s,n]);var c=j(r,t[0],t[1]);return M(function(){o.hasValue=!0,o.value=c},[c]),D(c),c},m}var V;function q(){return V||(V=1,d.exports=U()),d.exports}q();
