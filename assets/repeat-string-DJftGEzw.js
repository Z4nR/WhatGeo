/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */var a,f;function g(){if(f)return a;f=1;var r="",n;a=p;function p(e,i){if(typeof e!="string")throw new TypeError("expected a string");if(i===1)return e;if(i===2)return e+e;var t=e.length*i;if(n!==e||typeof n>"u")n=e,r="";else if(r.length>=t)return r.substr(0,t);for(;t>r.length&&i>1;)i&1&&(r+=e),i>>=1,e+=e;return r+=e,r=r.substr(0,t),r}return a}export{g as r};
