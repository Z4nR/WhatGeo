import{c,g as f}from"./@babel-5d92e188.js";var i={exports:{}};/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */(function(o,C){(function(r,a){o.exports=a(r)})(typeof c<"u"?c:c,function(r){if(r.CSS&&r.CSS.escape)return r.CSS.escape;var a=function(p){if(arguments.length==0)throw new TypeError("`CSS.escape` requires an argument.");for(var n=String(p),x=n.length,t=-1,e,s="",u=n.charCodeAt(0);++t<x;){if(e=n.charCodeAt(t),e==0){s+="�";continue}if(e>=1&&e<=31||e==127||t==0&&e>=48&&e<=57||t==1&&e>=48&&e<=57&&u==45){s+="\\"+e.toString(16)+" ";continue}if(t==0&&x==1&&e==45){s+="\\"+n.charAt(t);continue}if(e>=128||e==45||e==95||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122){s+=n.charAt(t);continue}s+="\\"+n.charAt(t)}return s};return r.CSS||(r.CSS={}),r.CSS.escape=a,a})})(i);var S=i.exports;const h=f(S);export{h as c};