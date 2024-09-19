import{r as E}from"./react-f7b5d7f9.js";var x={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=E;function y(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var V=typeof Object.is=="function"?Object.is:y,g=c.useSyncExternalStore,j=c.useRef,O=c.useEffect,W=c.useMemo,_=c.useDebugValue;x.useSyncExternalStoreWithSelector=function(e,n,s,a,o){var u=j(null);if(u.current===null){var t={hasValue:!1,value:null};u.current=t}else t=u.current;u=W(function(){function S(r){if(!d){if(d=!0,f=r,r=a(r),o!==void 0&&t.hasValue){var i=t.value;if(o(i,r))return v=i}return v=r}if(i=v,V(f,r))return i;var p=a(r);return o!==void 0&&o(i,p)?i:(f=r,v=p)}var d=!1,f,v,m=s===void 0?null:s;return[function(){return S(n())},m===null?void 0:function(){return S(m())}]},[n,s,a,o]);var l=g(e,u[0],u[1]);return O(function(){t.hasValue=!0,t.value=l},[l]),_(l),l};
