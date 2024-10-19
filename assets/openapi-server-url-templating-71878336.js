import{i as o,u as l,A as u,P as h}from"./apg-lite-25aff416.js";function m(){this.grammarObject="grammarObject",this.rules=[],this.rules[0]={name:"server-url-template",lower:"server-url-template",index:0,isBkr:!1},this.rules[1]={name:"server-variable",lower:"server-variable",index:1,isBkr:!1},this.rules[2]={name:"server-variable-name",lower:"server-variable-name",index:2,isBkr:!1},this.rules[3]={name:"literals",lower:"literals",index:3,isBkr:!1},this.rules[4]={name:"ALPHA",lower:"alpha",index:4,isBkr:!1},this.rules[5]={name:"DIGIT",lower:"digit",index:5,isBkr:!1},this.rules[6]={name:"HEXDIG",lower:"hexdig",index:6,isBkr:!1},this.rules[7]={name:"pct-encoded",lower:"pct-encoded",index:7,isBkr:!1},this.rules[8]={name:"unreserved",lower:"unreserved",index:8,isBkr:!1},this.rules[9]={name:"sub-delims",lower:"sub-delims",index:9,isBkr:!1},this.rules[10]={name:"ucschar",lower:"ucschar",index:10,isBkr:!1},this.rules[11]={name:"iprivate",lower:"iprivate",index:11,isBkr:!1},this.udts=[],this.rules[0].opcodes=[],this.rules[0].opcodes[0]={type:3,min:1,max:1/0},this.rules[0].opcodes[1]={type:1,children:[2,3]},this.rules[0].opcodes[2]={type:4,index:3},this.rules[0].opcodes[3]={type:4,index:1},this.rules[1].opcodes=[],this.rules[1].opcodes[0]={type:2,children:[1,2,3]},this.rules[1].opcodes[1]={type:7,string:[123]},this.rules[1].opcodes[2]={type:4,index:2},this.rules[1].opcodes[3]={type:7,string:[125]},this.rules[2].opcodes=[],this.rules[2].opcodes[0]={type:3,min:1,max:1/0},this.rules[2].opcodes[1]={type:1,children:[2,3,4,5,6]},this.rules[2].opcodes[2]={type:4,index:8},this.rules[2].opcodes[3]={type:4,index:7},this.rules[2].opcodes[4]={type:4,index:9},this.rules[2].opcodes[5]={type:7,string:[58]},this.rules[2].opcodes[6]={type:7,string:[64]},this.rules[3].opcodes=[],this.rules[3].opcodes[0]={type:3,min:1,max:1/0},this.rules[3].opcodes[1]={type:1,children:[2,3,4,5,6,7,8,9,10,11,12,13,14]},this.rules[3].opcodes[2]={type:6,string:[33]},this.rules[3].opcodes[3]={type:5,min:35,max:36},this.rules[3].opcodes[4]={type:6,string:[38]},this.rules[3].opcodes[5]={type:5,min:40,max:59},this.rules[3].opcodes[6]={type:6,string:[61]},this.rules[3].opcodes[7]={type:5,min:63,max:91},this.rules[3].opcodes[8]={type:6,string:[93]},this.rules[3].opcodes[9]={type:6,string:[95]},this.rules[3].opcodes[10]={type:5,min:97,max:122},this.rules[3].opcodes[11]={type:6,string:[126]},this.rules[3].opcodes[12]={type:4,index:10},this.rules[3].opcodes[13]={type:4,index:11},this.rules[3].opcodes[14]={type:4,index:7},this.rules[4].opcodes=[],this.rules[4].opcodes[0]={type:1,children:[1,2]},this.rules[4].opcodes[1]={type:5,min:65,max:90},this.rules[4].opcodes[2]={type:5,min:97,max:122},this.rules[5].opcodes=[],this.rules[5].opcodes[0]={type:5,min:48,max:57},this.rules[6].opcodes=[],this.rules[6].opcodes[0]={type:1,children:[1,2,3,4,5,6,7]},this.rules[6].opcodes[1]={type:4,index:5},this.rules[6].opcodes[2]={type:7,string:[97]},this.rules[6].opcodes[3]={type:7,string:[98]},this.rules[6].opcodes[4]={type:7,string:[99]},this.rules[6].opcodes[5]={type:7,string:[100]},this.rules[6].opcodes[6]={type:7,string:[101]},this.rules[6].opcodes[7]={type:7,string:[102]},this.rules[7].opcodes=[],this.rules[7].opcodes[0]={type:2,children:[1,2,3]},this.rules[7].opcodes[1]={type:7,string:[37]},this.rules[7].opcodes[2]={type:4,index:6},this.rules[7].opcodes[3]={type:4,index:6},this.rules[8].opcodes=[],this.rules[8].opcodes[0]={type:1,children:[1,2,3,4,5,6]},this.rules[8].opcodes[1]={type:4,index:4},this.rules[8].opcodes[2]={type:4,index:5},this.rules[8].opcodes[3]={type:7,string:[45]},this.rules[8].opcodes[4]={type:7,string:[46]},this.rules[8].opcodes[5]={type:7,string:[95]},this.rules[8].opcodes[6]={type:7,string:[126]},this.rules[9].opcodes=[],this.rules[9].opcodes[0]={type:1,children:[1,2,3,4,5,6,7,8,9,10,11]},this.rules[9].opcodes[1]={type:7,string:[33]},this.rules[9].opcodes[2]={type:7,string:[36]},this.rules[9].opcodes[3]={type:7,string:[38]},this.rules[9].opcodes[4]={type:7,string:[39]},this.rules[9].opcodes[5]={type:7,string:[40]},this.rules[9].opcodes[6]={type:7,string:[41]},this.rules[9].opcodes[7]={type:7,string:[42]},this.rules[9].opcodes[8]={type:7,string:[43]},this.rules[9].opcodes[9]={type:7,string:[44]},this.rules[9].opcodes[10]={type:7,string:[59]},this.rules[9].opcodes[11]={type:7,string:[61]},this.rules[10].opcodes=[],this.rules[10].opcodes[0]={type:1,children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},this.rules[10].opcodes[1]={type:5,min:160,max:55295},this.rules[10].opcodes[2]={type:5,min:63744,max:64975},this.rules[10].opcodes[3]={type:5,min:65008,max:65519},this.rules[10].opcodes[4]={type:5,min:65536,max:131069},this.rules[10].opcodes[5]={type:5,min:131072,max:196605},this.rules[10].opcodes[6]={type:5,min:196608,max:262141},this.rules[10].opcodes[7]={type:5,min:262144,max:327677},this.rules[10].opcodes[8]={type:5,min:327680,max:393213},this.rules[10].opcodes[9]={type:5,min:393216,max:458749},this.rules[10].opcodes[10]={type:5,min:458752,max:524285},this.rules[10].opcodes[11]={type:5,min:524288,max:589821},this.rules[10].opcodes[12]={type:5,min:589824,max:655357},this.rules[10].opcodes[13]={type:5,min:655360,max:720893},this.rules[10].opcodes[14]={type:5,min:720896,max:786429},this.rules[10].opcodes[15]={type:5,min:786432,max:851965},this.rules[10].opcodes[16]={type:5,min:851968,max:917501},this.rules[10].opcodes[17]={type:5,min:921600,max:983037},this.rules[11].opcodes=[],this.rules[11].opcodes[0]={type:1,children:[1,2,3]},this.rules[11].opcodes[1]={type:5,min:57344,max:63743},this.rules[11].opcodes[2]={type:5,min:983040,max:1048573},this.rules[11].opcodes[3]={type:5,min:1048576,max:1114109},this.toString=function(){let e="";return e+=`; OpenAPI Server URL templating ABNF syntax
`,e+=`server-url-template    = 1*( literals / server-variable )
`,e+=`server-variable        = "{" server-variable-name "}"
`,e+=`server-variable-name   = 1*( unreserved / pct-encoded / sub-delims / ":" / "@" )
`,e+=`literals               = 1*( %x21 / %x23-24 / %x26 / %x28-3B / %x3D / %x3F-5B
`,e+=`                       / %x5D / %x5F / %x61-7A / %x7E / ucschar / iprivate
`,e+=`                       / pct-encoded)
`,e+=`                           ; any Unicode character except: CTL, SP,
`,e+=`                           ;  DQUOTE, "'", "%" (aside from pct-encoded),
`,e+='                           ;  "<", ">", "\\", "^", "`", "{", "|", "}"\n',e+=`
`,e+=`; Characters definitions (from RFC 6570)
`,e+=`ALPHA          =  %x41-5A / %x61-7A   ; A-Z / a-z
`,e+=`DIGIT          =  %x30-39             ; 0-9
`,e+=`HEXDIG         =  DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`,e+=`                 ; case-insensitive
`,e+=`
`,e+=`pct-encoded    =  "%" HEXDIG HEXDIG
`,e+=`unreserved     =  ALPHA / DIGIT / "-" / "." / "_" / "~"
`,e+=`sub-delims     =  "!" / "$" / "&" / "'" / "(" / ")"
`,e+=`               /  "*" / "+" / "," / ";" / "="
`,e+=`
`,e+=`ucschar        =  %xA0-D7FF / %xF900-FDCF / %xFDF0-FFEF
`,e+=`               /  %x10000-1FFFD / %x20000-2FFFD / %x30000-3FFFD
`,e+=`               /  %x40000-4FFFD / %x50000-5FFFD / %x60000-6FFFD
`,e+=`               /  %x70000-7FFFD / %x80000-8FFFD / %x90000-9FFFD
`,e+=`               /  %xA0000-AFFFD / %xB0000-BFFFD / %xC0000-CFFFD
`,e+=`               /  %xD0000-DFFFD / %xE1000-EFFFD
`,e+=`
`,e+=`iprivate       =  %xE000-F8FF / %xF0000-FFFFD / %x100000-10FFFD
`,e}}const y=(s,e,t,i,r)=>{if(s===o.SEM_PRE){if(Array.isArray(r)===!1)throw new Error("parser's user data must be an array");r.push(["server-url-template",l.charsToString(e,t,i)])}return o.SEM_OK},x=(s,e,t,i,r)=>{if(s===o.SEM_PRE){if(Array.isArray(r)===!1)throw new Error("parser's user data must be an array");r.push(["server-variable",l.charsToString(e,t,i)])}return o.SEM_OK},F=(s,e,t,i,r)=>{if(s===o.SEM_PRE){if(Array.isArray(r)===!1)throw new Error("parser's user data must be an array");r.push(["server-variable-name",l.charsToString(e,t,i)])}return o.SEM_OK},g=(s,e,t,i,r)=>{if(s===o.SEM_PRE){if(Array.isArray(r)===!1)throw new Error("parser's user data must be an array");r.push(["literals",l.charsToString(e,t,i)])}return o.SEM_OK},f=new m,d=s=>{const e=new h;return e.ast=new u,e.ast.callbacks["server-url-template"]=y,e.ast.callbacks["server-variable"]=x,e.ast.callbacks["server-variable-name"]=F,e.ast.callbacks.literals=g,{result:e.parse(f,"server-url-template",s),ast:e.ast}},w=(s,{strict:e=!1}={})=>{try{const t=d(s);if(!t.result.success)return!1;const i=[];t.ast.translate(i);const r=i.some(([p])=>p==="server-variable");if(!e&&!r)try{return new URL(s,"https://vladimirgorej.com"),!0}catch{return!1}return e?r:!0}catch{return!1}},v=s=>{try{return typeof s=="string"&&decodeURIComponent(s)!==s}catch{return!1}},D=s=>v(s)?s:encodeURIComponent(s).replace(/%5B/g,"[").replace(/%5D/g,"]"),b=["literals","server-variable-name"],B=(s,e,t={})=>{const r={...{encoder:D},...t},p=d(s);if(!p.result.success)return s;const c=[];return p.ast.translate(c),c.filter(([a])=>b.includes(a)).map(([a,n])=>a==="server-variable-name"?Object.hasOwn(e,n)?r.encoder(e[n],n):`{${n}}`:n).join("")};export{B as s,w as t};