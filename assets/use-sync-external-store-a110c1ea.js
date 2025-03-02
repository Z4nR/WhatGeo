import{r as R}from"./react-8aefe96b.js";var j={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=R;function y(u,r){return u===r&&(u!==0||1/u===1/r)||u!==u&&r!==r}var z=typeof Object.is=="function"?Object.is:y,E=i.useSyncExternalStore,M=i.useRef,D=i.useEffect,O=i.useMemo,W=i.useDebugValue;j.useSyncExternalStoreWithSelector=function(u,r,t,m,a){var f=M(null);if(f.current===null){var l={hasValue:!1,value:null};f.current=l}else l=f.current;f=O(function(){function d(e){if(!b){if(b=!0,v=e,e=m(e),a!==void 0&&l.hasValue){var o=l.value;if(a(o,e))return n=o}return n=e}if(o=n,z(v,e))return o;var s=m(e);return a!==void 0&&a(o,s)?(v=e,o):(v=e,n=s)}var b=!1,v,n,V=t===void 0?null:t;return[function(){return d(r())},V===null?void 0:function(){return d(V())}]},[r,t,m,a]);var c=E(u,f[0],f[1]);return D(function(){l.hasValue=!0,l.value=c},[c]),W(c),c};
