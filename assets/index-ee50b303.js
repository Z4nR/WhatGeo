import{j as e,r as p}from"./react-0d88fcd1.js";import{c as _}from"./react-dom-80f0a8bc.js";import{L as l,B as P}from"./react-router-dom-08208eae.js";import{b as k,d as N,e as x}from"./react-router-dc3279d9.js";import{a as d}from"./axios-47b9d439.js";import{u,a as v,Q as S,b as T}from"./@tanstack-bd7f71cf.js";import{M as g,T as y,G as h}from"./react-leaflet-0fcb81c9.js";import{u as K}from"./react-hook-form-9c653943.js";import{H as j}from"./highlight.js-830e8955.js";import{S as I}from"./swagger-ui-react-a04ad033.js";import"./@babel-fbd3a02c.js";import"./core-js-pure-f063907b.js";import"./scheduler-765c72db.js";import"./@remix-run-671dfa1a.js";import"./leaflet-8f729d4c.js";import"./@react-leaflet-19ebad07.js";import"./base64-js-39f91b64.js";import"./ieee754-164d49be.js";import"./redux-054676bd.js";import"./immutable-647e1563.js";import"./redux-immutable-ee5d1228.js";import"./serialize-error-3d248a18.js";import"./lodash-bd15013d.js";import"./@braintree-f19cff0e.js";import"./css.escape-42a349a8.js";import"./url-parse-f63f05f5.js";import"./requires-port-e72b6d28.js";import"./querystringify-32e314c6.js";import"./reselect-86c7af64.js";import"./prop-types-399a1ad1.js";import"./js-yaml-80719af7.js";import"./zenscroll-053f0ee8.js";import"./react-immutable-proptypes-24bcfeec.js";import"./react-copy-to-clipboard-73f8ea4f.js";import"./copy-to-clipboard-113365a7.js";import"./toggle-selection-93f4ad84.js";import"./react-syntax-highlighter-46afee29.js";import"./lowlight-fc2dd9cf.js";import"./fault-53556e1f.js";import"./format-7101f815.js";import"./randexp-8269b205.js";import"./ret-c6148803.js";import"./drange-086dd526.js";import"./swagger-client-cf6e01f0.js";import"./@swagger-api-b7621a02.js";import"./stampit-bd81e56b.js";import"./minim-10246615.js";import"./ramda-adjunct-af7fd328.js";import"./ramda-42b7cf95.js";import"./process-4003ca13.js";import"./cookie-910bb9f2.js";import"./is-plain-object-24dec1b5.js";import"./qs-3ffc47d4.js";import"./side-channel-5e7609cc.js";import"./get-intrinsic-4a38020a.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-61637ca6.js";import"./hasown-bc561cf0.js";import"./call-bind-6482c9b0.js";import"./set-function-length-9c361e89.js";import"./define-data-property-bf6c9733.js";import"./has-property-descriptors-58650a95.js";import"./gopd-e1d311d9.js";import"./object-inspect-b08343b5.js";import"./fast-json-patch-6f36fdbd.js";import"./deepmerge-43fec275.js";import"./traverse-8a8386a3.js";import"./react-redux-80749a6b.js";import"./hoist-non-react-statics-f9a72535.js";import"./react-is-e8e5dbb3.js";import"./use-sync-external-store-c96dff23.js";import"./classnames-1a6c32ab.js";import"./js-file-download-cee36a2c.js";import"./xml-but-prettier-b96d3f92.js";import"./repeat-string-d22006ec.js";import"./react-immutable-pure-component-abefae6f.js";import"./remarkable-d5a71766.js";import"./autolinker-4f269645.js";import"./tslib-176c9671.js";import"./dompurify-8e338605.js";import"./react-debounce-input-8b0ee100.js";import"./lodash.debounce-ba7fe8ed.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=i(n);fetch(n.href,c)}})();function q(){const a=k().pathname;return e.jsx("header",{className:"w-full flex justify-center top-0 right-0 sticky z-20 shadow-sm bg-white",children:e.jsxs("div",{className:"navbar px-6 py-2 max-w-7xl",children:[e.jsx("div",{className:"flex-1",children:e.jsx(l,{className:"text-primary hover:text-accent aria-[current=page]:text-secondary","aria-label":"Home Button","aria-current":a==="/"?"page":void 0,to:"/",children:e.jsx("h3",{className:"text-lg font-medium",children:"WhatGeo: Indonesian Map"})})}),e.jsx("div",{className:"hidden font-medium items-center sm:flex",children:e.jsx("nav",{children:e.jsxs("ul",{className:"hidden items-center gap-x-8 sm:flex",children:[e.jsx("li",{children:e.jsx(l,{className:"text-primary hover:text-accent aria-[current=page]:text-secondary","aria-label":"Document Button","aria-current":a==="/doc"?"page":void 0,to:"/doc",children:"Dok"})}),e.jsx("li",{children:e.jsx(l,{className:"text-primary hover:text-accent aria-[current=page]:text-secondary","aria-label":"Guide Button","aria-current":a==="/guide"?"page":void 0,to:"/guide",children:"Petunjuk"})}),e.jsx("li",{children:e.jsx(l,{className:"text-primary hover:text-accent aria-[current=page]:text-secondary","aria-label":"Example Button","aria-current":a==="/example"?"page":void 0,to:"/example",children:"Contoh"})}),e.jsx("li",{children:e.jsx(l,{to:"https://github.com/Z4nR/GeoAPI-Doc",target:"_blank",rel:"noreferrer",className:"text-primary hover:text-accent aria-[current=page]:text-secondary",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})})]})})}),e.jsxs("div",{className:"dropdown dropdown-end font-medium sm:hidden",children:[e.jsx("label",{tabIndex:0,className:"btn btn-ghost btn-square",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"#11648e",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})}),e.jsxs("ul",{tabIndex:0,className:"dropdown-content z-[1] p-2 menu bg-white shadow rounded-box px-1",children:[e.jsx("li",{children:e.jsx(l,{className:"hover:bg-primary hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Document Button","aria-current":a==="/doc"?"page":void 0,to:"/doc",children:"Dokumentasi"})}),e.jsx("li",{children:e.jsx(l,{className:"hover:bg-primary hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Guide Button","aria-current":a==="/guide"?"page":void 0,to:"/guide",children:"Petunjuk"})}),e.jsx("li",{children:e.jsx(l,{className:"hover:bg-primary hover:text-white aria-[current=page]:text-secondary aria-[current=page]:hover:bg-secondary aria-[current=page]:hover:text-white","aria-label":"Example Button","aria-current":a==="/example"?"page":void 0,to:"/example",children:"Contoh"})}),e.jsx("li",{children:e.jsxs(l,{to:"https://github.com/Z4nR/GeoAPI-Doc",target:"_blank",rel:"noreferrer",className:"hover:bg-primary hover:text-white",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 md:h-5 md:w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),e.jsx("p",{children:"Github"})]})})]})]})]})})}function B(){return e.jsx("footer",{className:"w-full py-10 text-center bg-primary text-white",children:"Created by Zulham 👋"})}const b=t=>{let a=[];return t&&t.find(i=>{const r=i==null?void 0:i.provFeature;a.push(r)}),a},f=t=>{let a=[];return t&&t.find(i=>{const r=i==null?void 0:i.cityFeature;a.push(r)}),a},m="https://zulham.ahlitani.com/geo/v1",D=async()=>d.get(`${m}/prov/page`).then(t=>t.data.page),C=async t=>d.get(`${m}/prov?page=${t}`).then(a=>a.data),M=async t=>d.get(`${m}/prov/isle/page?island=${t}`).then(a=>a.data.page),F=async(t,a)=>d.get(`${m}/prov/isle?island=${t}&page=${a}`).then(i=>i.data),W=async t=>d.get(`${m}/prov/${t}/map`).then(a=>a.data),$=async()=>d.get(`${m}/city/page`).then(t=>t.data.page),G=async t=>d.get(`${m}/city?page=${t}`).then(a=>a.data),J=async t=>d.get(`${m}/city/isle/page?island=${t}`).then(a=>a.data.page),A=async(t,a)=>d.get(`${m}/city/isle?island=${t}&page=${a}`).then(i=>i.data);function O(){const{data:t}=u({queryKey:["city-page"],queryFn:async()=>await $(),staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1}),a=v({queries:Array(t).fill(null).map((r,n)=>({queryKey:["page-city",n+1],queryFn:()=>G(n+1),enabled:t>0,staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1})),combine:r=>({data:r.map(n=>n.data),pending:r.some(n=>n.isPending)})}),i=p.useMemo(()=>a.pending?null:f(a.data.flat()),[a]);return e.jsxs("div",{className:"pt-4",children:[e.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Kota Seluruh Indonesia"}),e.jsxs(g,{center:[-1.2480891,118],zoom:5,scrollWheelZoom:!0,children:[e.jsx(y,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i==null?void 0:i.map((r,n)=>e.jsx(h,{data:r},n))]}),e.jsx("div",{className:"divider"})]})}function L(){const[t,a]=p.useState(""),{data:i}=u({queryKey:["city-isle-page",t],queryFn:async()=>await J(t),staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1}),r=v({queries:Array(i).fill(null).map((s,o)=>({queryKey:["prov-isle",t,o+1],queryFn:()=>A(t,o+1),staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1})),combine:s=>({data:s.map(o=>o.data),pending:s.some(o=>o.isPending)})}),n=p.useMemo(()=>r.pending?null:f(r.data.flat()),[r]),c=[{btnTitle:"Prov. di Wilayah Sulawesi",island:"Sulawesi"},{btnTitle:"Prov. di Wilayah Papua",island:"Papua"},{btnTitle:"Prov. di Wilayah Kep. BalNusRa",island:"BalNusra"},{btnTitle:"Prov. di Wilayah Kep. Maluku",island:"Maluku"},{btnTitle:"Prov. di Wilayah Jawa",island:"Jawa"},{btnTitle:"Prov. di Wilayah Sumatera",island:"Sumatera"},{btnTitle:"Prov. di Wilayah Kalimantan",island:"Kalimantan"}];return e.jsxs("div",{className:"pt-4",children:[e.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi berdasarkan Pulau dan Kepulauannya"}),e.jsxs(g,{center:[-1.2480891,118],zoom:5,scrollWheelZoom:!0,children:[e.jsx(y,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n==null?void 0:n.map((s,o)=>e.jsx(h,{data:s},`${t}-${o}`))]}),e.jsxs("div",{className:"pt-4 px-4 flex flex-wrap justify-center gap-2",children:[c.map((s,o)=>e.jsx("button",{onClick:()=>{a(s.island)},className:"btn btn-sm btn-secondary text-xs text-white px-0.5 w-full xs:max-w-xs ",children:s.btnTitle},`btn-${o}`)),e.jsx("button",{onClick:()=>{a("")},className:"btn btn-sm btn-outline btn-error text-xs text-white px-0.5 w-full xs:max-w-xs ",children:"Bersihkan Data Peta"})]}),e.jsx("div",{className:"divider"})]})}function z(){const{data:t}=u({queryKey:["prov-page"],queryFn:async()=>await D(),staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1}),a=v({queries:Array(t).fill(null).map((r,n)=>({queryKey:["page-prov",n+1],queryFn:()=>C(n+1),enabled:t>0,staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1})),combine:r=>({data:r.map(n=>n.data),pending:r.some(n=>n.isPending)})}),i=p.useMemo(()=>a.pending?null:b(a.data.flat()),[a]);return e.jsxs("div",{className:"pt-4",children:[e.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi Seluruh Indonesia"}),e.jsxs(g,{center:[-1.2480891,118],zoom:5,scrollWheelZoom:!0,children:[e.jsx(y,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i==null?void 0:i.map((r,n)=>e.jsx(h,{data:r},n))]}),e.jsx("div",{className:"divider"})]})}function E(){const[t,a]=p.useState(null),{handleSubmit:i,register:r,formState:{errors:n}}=K(),{data:c}=u({queryKey:["prov",t],queryFn:async()=>await W(t),enabled:t!==null,staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1}),s=p.useMemo(()=>c==null?void 0:c.provFeature,[c]),o=w=>{a(w.id)};return e.jsxs("div",{className:"py-4",children:[e.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi berdasarkan Id Provinsi"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("form",{onSubmit:i(o),className:"form-control w-full max-w-sm my-4",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text",children:"Masukkan ID Provinsi"})}),e.jsxs("div",{className:"flex flex-row gap-4",children:[e.jsx("input",{type:"number",placeholder:"Ketik ID disini",className:"input input-bordered w-full max-w-xs",...r("id",{required:!0})}),e.jsx("button",{type:"submit",className:"btn btn-primary w-fit max-w-xs",children:"Cari"})]}),n.id&&n.id.type==="required"&&e.jsx("label",{className:"label",children:e.jsx("span",{className:"label-text-alt text-error",children:"Harap masukkan ID yang sesuai"})})]})}),e.jsxs(g,{center:[-1.2480891,118],zoom:5,scrollWheelZoom:!0,children:[e.jsx(y,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.jsx(h,{data:s},`prov-${t}`)]}),e.jsx("div",{className:"divider"})]})}function R(){const[t,a]=p.useState(""),{data:i}=u({queryKey:["prov-isle-page",t],queryFn:async()=>await M(t),staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1}),r=v({queries:Array(i).fill(null).map((s,o)=>({queryKey:["prov-isle",t,o+1],queryFn:()=>F(t,o+1),staleTime:1/0,gcTime:1/0,refetchOnWindowFocus:!1})),combine:s=>({data:s.map(o=>o.data),pending:s.some(o=>o.isPending)})}),n=p.useMemo(()=>r.pending?null:b(r.data.flat()),[r]),c=[{btnTitle:"Prov. di Wilayah Sulawesi",island:"Sulawesi"},{btnTitle:"Prov. di Wilayah Papua",island:"Papua"},{btnTitle:"Prov. di Wilayah Kep. BalNusRa",island:"BalNusra"},{btnTitle:"Prov. di Wilayah Kep. Maluku",island:"Maluku"},{btnTitle:"Prov. di Wilayah Jawa",island:"Jawa"},{btnTitle:"Prov. di Wilayah Sumatera",island:"Sumatera"},{btnTitle:"Prov. di Wilayah Kalimantan",island:"Kalimantan"}];return e.jsxs("div",{className:"pt-4",children:[e.jsx("h2",{className:"text-xl text-center text-black font-bold pb-2",children:"Peta Provinsi berdasarkan Pulau dan Kepulauannya"}),e.jsxs(g,{center:[-1.2480891,118],zoom:5,scrollWheelZoom:!0,children:[e.jsx(y,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n==null?void 0:n.map((s,o)=>e.jsx(h,{data:s},`${t}-${o}`))]}),e.jsxs("div",{className:"pt-4 px-4 flex flex-wrap justify-center gap-2",children:[c.map((s,o)=>e.jsx("button",{onClick:()=>{a(s.island)},className:"btn btn-sm btn-secondary text-xs text-white px-0.5 w-full xs:max-w-xs ",children:s.btnTitle},`btn-${o}`)),e.jsx("button",{onClick:()=>{a("")},className:"btn btn-sm btn-outline btn-error text-xs text-white px-0.5 w-full xs:max-w-xs ",children:"Bersihkan Data Peta"})]}),e.jsx("div",{className:"divider"})]})}function Z(){return e.jsxs("div",{className:"px-6",children:[e.jsx("h1",{className:"text-4xl text-center text-black font-bold",children:"WhatGeo: Indonesia"}),e.jsx("h2",{className:"pt-4 text-3xl text-center text-black font-bold",children:"API Data GeoJSON Indonesia"}),e.jsx("p",{className:"text-justify py-6",children:"Kalian tidak perlu lagi memasukan file peta ke dalam projek kalian. Cukup panggil API ini, kalian sudah mendapatkan akses ke peta provinsi dan kota/kabupaten di Indonesia."}),e.jsx(z,{}),e.jsx(R,{}),e.jsx(E,{}),e.jsx(O,{}),e.jsx(L,{})]})}const H=`// Bisa menggunakan for loop ataupun while
async () => {
  for (let i = 1; i <= totalPage; i++) {
    await getProvByPage(i);
  }
}`,U=`// Simpan data kedalam sebuah array

// Variable untuk minympan data
let data = []

async () => {

  // Proses looping data berdasarkan jumlah halaman
  for (let i = 1; i <= totalPage; i++) {
    const prov = await getProvByPage(i);

    // Menyimpan data ke dalam variable yang telah disediakan
    data.push(prov)
  }
}`,Q=`// Flatting data dalam array menjadi satu array

const map = data.flat()
// map = [data1, data2, data3, ..., data-n]`,Y=`// Proses mengolah data untuk dimuat ke dalam map

// Variable untuk minympan data
let coordinate = [];

if (map) {

  // Mencari properti object dalam sebuah array
  map.find((d) => {

    // Key yang dicari dan diolah
    const feature = d.provFeature;

    // Menyimpan data ke dalam vaiable yang telah disediakan 
    coordinate.push(feature);
  });
}`;function V(){return p.useEffect(()=>{j.highlightAll()},[]),e.jsxs("div",{className:"pt-4",children:[e.jsx("h1",{className:"text-lg font-bold",children:"Memuat Data Peta"}),e.jsxs("p",{className:"py-2 text-justify",children:["Supaya dapat menampilkan semua data yang telah dijadikan satu dalam sebuah array. Selanjutnya kita hanya perlu mencari properti object dengan key"," ",e.jsx("span",{className:"badge badge-accent font-mono",children:"provFeature"})," untuk Data Provinsi dan"," ",e.jsx("span",{className:"badge badge-accent font-mono",children:"cityFeature"})," untuk Data Kota/Kabupaten menggunakan array method ",e.jsx("b",{children:"find()"}),". Lalu simpan data tersebut ke dalam variable dengan nilai ",e.jsx("b",{children:"[array]"}),"."]}),e.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript",children:Y})})}),e.jsx("div",{className:"divider"})]})}function X(){return p.useEffect(()=>{j.highlightAll()},[]),e.jsxs("div",{className:"pt-4",children:[e.jsx("h1",{className:"text-lg font-bold",children:"Menyatukan data map/page dalam 1 array"}),e.jsxs("p",{className:"py-2 text-justify",children:["Untuk dapat memuat seluruh data map berdasarkan page query. Kita perlu mengetahui jumlah page menggunakan router"," ",e.jsx("span",{className:"badge badge-accent font-mono",children:"/page"})," yang berfungsi untuk melaksanakan proses looping. Proses looping dilakukan dengan menjadikan jumlah halaman yang diperoleh menjadi batas maksimal nilai. Dalam proses looping, kita juga melakukan pengambilan data pada router dengan query yang membutuhkan nilai dari nomor page. Berikut contoh penulisan kode looping:"]}),e.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript",children:H})})}),e.jsxs("p",{className:"py-2 text-justify",children:["Dari proses looping tersebut kemudian lakukan push data ke dalam variable dengan nilai ",e.jsx("b",{children:"[array]"})," ."]}),e.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript",children:U})})}),e.jsxs("p",{className:"py-2 text-justify",children:["Maka tampilan data yang tersimpan dalam variable data akan menjadi seperti ini"," ",e.jsx("span",{className:"badge badge-accent font-mono",children:"[[data-1], [data-2], ..., [data-n]]"})," ","Kemudian lakukan proses penyatuan beberapa sub array dalam variable data menggunakan method ",e.jsx("b",{children:"flat()"})," ."]}),e.jsx("div",{className:"mockup-code md:w-fit xs:max-w-screen-sm pl-5",children:e.jsx("pre",{children:e.jsx("code",{className:"language-javascript",children:Q})})}),e.jsx("div",{className:"divider"})]})}function ee(){return e.jsxs("div",{className:"px-6",children:[e.jsx(X,{id:"load-all"}),e.jsx(V,{id:"load-map"})]})}const ae=[{prov_id:11,regency_id:"1101 - 1118",city_id:"1171 - 1175",prov_name:"Aceh",island:"Sumatera"},{prov_id:12,regency_id:"1201 - 1225",city_id:"1271 - 1278",prov_name:"Sumatera Utara",island:"Sumatera"},{prov_id:13,regency_id:"1301 - 1312",city_id:"1371 - 1377",prov_name:"Sumatera Barat",island:"Sumatera"},{prov_id:14,regency_id:"1401 - 1410",city_id:"1471 & 1473",prov_name:"Riau",island:"Sumatera"},{prov_id:15,regency_id:"1501 - 1509",city_id:"1571 & 1572",prov_name:"Jambi",island:"Sumatera"},{prov_id:16,regency_id:"1601 - 1613",city_id:"1671 - 1674",prov_name:"Sumatera Selatan",island:"Sumatera"},{prov_id:17,regency_id:"1701 - 1709",city_id:"1771",prov_name:"Bengkulu",island:"Sumatera"},{prov_id:18,regency_id:"1801 - 1813",city_id:"1871 & 1872",prov_name:"Lampung",island:"Sumatera"},{prov_id:19,regency_id:"1901 - 1906",city_id:"1971",prov_name:"Kepulauan Bangka Belitung",island:"Sumatera"},{prov_id:21,regency_id:"2101 - 2105",city_id:"2171 & 2172",prov_name:"Kepulauan Riau",island:"Sumatera"},{prov_id:31,regency_id:"3101",city_id:"3171 - 3175",prov_name:"DKI Jakarta",island:"Jawa"},{prov_id:32,regency_id:"3201 - 3218",city_id:"3271 - 3279",prov_name:"Jawa Barat",island:"Jawa"},{prov_id:33,regency_id:"3301 - 3329",city_id:"3371 - 3376",prov_name:"Jawa Tengah",island:"Jawa"},{prov_id:34,regency_id:"3401 - 3404",city_id:"3471",prov_name:"DI Yogyakarta",island:"Jawa"},{prov_id:35,regency_id:"3501 - 3529",city_id:"3571 - 3579",prov_name:"Jawa Timur",island:"Jawa"},{prov_id:36,regency_id:"3601 - 3604",city_id:"3671 - 3674",prov_name:"Banten",island:"Jawa"},{prov_id:51,regency_id:"5101 - 5108",city_id:"5171",prov_name:"Bali",island:"BalNusra"},{prov_id:52,regency_id:"5201 - 5208",city_id:"5271 & 5272",prov_name:"Nusa Tenggara Barat",island:"BalNusra"},{prov_id:53,regency_id:"5301 - 5321",city_id:"5371",prov_name:"Nusa Tenggara Timur",island:"BalNusra"},{prov_id:61,regency_id:"6101 - 6112",city_id:"6171 & 6172",prov_name:"Kalimantan Barat",island:"Kalimantan"},{prov_id:62,regency_id:"6201 - 6213",city_id:"6271",prov_name:"Kalimantan Tengah",island:"Kalimantan"},{prov_id:63,regency_id:"6301 - 6311",city_id:"6371 & 6372",prov_name:"Kalimantan Selatan",island:"Kalimantan"},{prov_id:64,regency_id:"6401 - 6405, 6409, 6411",city_id:"6471, 6472, 6474",prov_name:"Kalimantan Timur",island:"Kalimantan"},{prov_id:65,regency_id:"6501 - 6504",city_id:"6571",prov_name:"Kalimantan Utara",island:"Kalimantan"},{prov_id:71,regency_id:"7101 - 7111",city_id:"7171 - 7174",prov_name:"Sulawesi Utara",island:"Sulawesi"},{prov_id:72,regency_id:"7201 - 7212",city_id:"7271",prov_name:"Sulawesi Tengah",island:"Sulawesi"},{prov_id:75,regency_id:"7501 - 7505",city_id:"7571",prov_name:"Gorontalo",island:"Sulawesi"},{prov_id:76,regency_id:"7601 - 7606",city_id:"-",prov_name:"Sulawesi Barat",island:"Sulawesi"},{prov_id:81,regency_id:"8101 - 8109",city_id:"8171 & 8172",prov_name:"Maluku",island:"Maluku"},{prov_id:82,regency_id:"8201 - 8208",city_id:"8171 & 8172",prov_name:"Maluku Utara",island:"Maluku"},{prov_id:91,regency_id:"9101 - 9112",city_id:"-",prov_name:"Papua Barat",island:"Papua"},{prov_id:92,regency_id:"9401, 9413 - 9415",city_id:"-",prov_name:"Papua Selatan",island:"Papua"},{prov_id:93,regency_id:"9404, 9410 - 9412, 9433 - 9436",city_id:"-",prov_name:"Papua Tengah",island:"Papua"},{prov_id:94,regency_id:"9403, 9408 & 9409, 9419 & 9420, 9426 - 9428",city_id:"9471",prov_name:"Papua",island:"Papua"},{prov_id:95,regency_id:"9402, 9416 - 9418, 9429 - 9432",city_id:"-",prov_name:"Papua Pegunungan",island:"Papua"},{prov_id:96,regency_id:"9106 - 9110",city_id:"9171",prov_name:"Papua Barat Daya",island:"Papua"}];function te({data:t}){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-xl font-bold",children:"Kode Data Provinsi dan Kab/Kota"}),e.jsx("h2",{className:"text-sm",children:"*Untuk Kode Prov Id di Pulau Papua dibuat secara pribadi dan Kode City Id Kota di Pulau Papua terlihat acak dikarenakan belum adanya pemutakhiran kode terbaru"}),e.jsx("div",{className:"overflow-x-auto pt-4 pb-2",children:e.jsxs("table",{className:"table table-md text-center",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prov Id"}),e.jsx("th",{children:"City Id"}),e.jsx("th",{children:"Provinsi"}),e.jsx("th",{children:"Pulau"})]})}),e.jsx("tbody",{children:t.map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-center",children:a.prov_id}),e.jsxs("td",{children:[e.jsxs("div",{className:"pb-2",children:[e.jsx("span",{className:" font-medium",children:"Kode Kab :"})," ",e.jsx("br",{})," ",a.regency_id]}),e.jsxs("div",{children:[e.jsx("span",{className:" font-medium",children:"Kode Kota :"})," ",e.jsx("br",{})," ",a.city_id]})]}),e.jsx("td",{children:a.prov_name}),e.jsx("td",{children:a.island})]},i))})]})})]})}const ne={openapi:"3.1.0",info:{title:"WhatGeo API Documentation with Swagger",version:"1.67.0",description:"Berikut ini merupakan dokumentasi lengkap terkait API WhatGeo yang dibangun menggunakan Swagger",license:{name:"MIT",url:"https://spdx.org/licenses/MIT.html"}},servers:[{url:"https://zulham.ahlitani.com/geo/v1"}],components:{schemas:{Province:{type:"object",properties:{_id:{type:"number",example:33},provFeature:{type:"object",example:{provFeature:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405]]],[[[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405]]]]},properties:{Kind:"Province",Code:33,Name:"JAWA TENGAH",Year:2016,Source:"BPS",Parent:62,Country:"INDONESIA"}}]}}},island:{type:"string",example:"Jawa"},capital:{type:"string",example:"Semarang"},date_created:{type:"string",example:"15 Agustus 1950"},description:{type:"string",example:"Provinsi Jawa Tengah merupakan"},lat_capital:{type:"number",example:-6.966667},long_capital:{type:"number",example:110.416664},province:{type:"string",example:"Jawa Tengah"}}},City:{type:"object",properties:{_id:{type:"number",example:3318},prov_id:{type:"number",example:33},provFeature:{type:"object",example:{provFeature:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405]]],[[[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405],[97.47859707099906,5.242515898990405]]]]},properties:{Kind:"City",Code:3318,Name:"PATI",Year:2016,Source:"BPS",Parent:62,Country:"INDONESIA"}}]}}},island:{type:"string",example:"Jawa"},destinations:{type:"array",example:["1111","2222","3333"]}}},Destiny:{type:"object",properties:{_id:{type:"number",example:123654},place_name:{type:"string",example:"Taman Lorem"},latitude:{type:"number",example:-346.43278},longitude:{type:"number",example:46.43278},destiny_type:{type:"string",example:"Reservoir"}}}}},paths:{"/prov/page":{get:{tags:["Province"],summary:"Get total page for all Indonesian Province",responses:{202:{description:"Success get total page",content:{"application/json":{schema:{type:"object",example:{page:13}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/prov":{get:{tags:["Province"],summary:"Get province geojson data base on page number",parameters:[{name:"page",in:"query",description:"page number to get 3 geojson data of province",required:!0,schema:{type:"integer",example:1}}],responses:{202:{description:"Success get province data by page number",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/Province"}}}}},404:{description:"Throw message when in can't find any data",content:{"application/json":{schema:{type:"object",example:{message:"Data Provinsi Tidak Ditemukan"}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/prov/isle/page":{get:{tags:["Province"],summary:"Get total page of geojson province base on island name",parameters:[{name:"island",in:"query",description:"island name to get 3 geojson data of province",required:!0,schema:{type:"string",example:"Papua"}}],responses:{202:{description:"Success get total page base on island name",content:{"application/json":{schema:{type:"object",example:{page:2}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/prov/isle":{get:{tags:["Province"],summary:"Get province geojson data base on island name and page number",parameters:[{name:"island",in:"query",description:"island name to get 3 geojson data of province",required:!0,schema:{type:"string",example:"Jawa"}},{name:"page",in:"query",description:"page number to get 3 geojson data of province",required:!0,schema:{type:"integer",example:2}}],responses:{202:{description:"Success get province data base on island name",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/Province"}}}}},404:{description:"Throw message when in can't find any data",content:{"application/json":{schema:{type:"object",example:{message:"Data Provinsi Tidak Ditemukan"}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/prov/{id}/map":{get:{tags:["Province"],summary:"Get province geojson data base on province id",parameters:[{name:"id",in:"path",description:"get geojson base on province id",required:!0,schema:{type:"integer",example:33}}],responses:{202:{description:"Success get province data by page number",content:{"application/json":{schema:{$ref:"#/components/schemas/Province"}}}},404:{description:"Throw message when in can't find any data",content:{"application/json":{schema:{type:"object",example:{message:"Data Provinsi Tidak Ditemukan"}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/city/page":{get:{tags:["City"],summary:"Get total page for all Indonesian City",responses:{202:{description:"Success get total page",content:{"application/json":{schema:{type:"object",example:{page:103}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/city":{get:{tags:["City"],summary:"Get city geojson data base on page number",parameters:[{name:"page",in:"query",description:"page number to get 5 geojson data of city",required:!0,schema:{type:"integer",example:15}}],responses:{202:{description:"Success get province data by page number",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/City"}}}}},404:{description:"Throw message when in can't find any data",content:{"application/json":{schema:{type:"object",example:{message:"Data Provinsi Tidak Ditemukan"}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/city/prov/page":{get:{tags:["City"],summary:"Get total page of geojson city base on province id",parameters:[{name:"prov_id",in:"query",description:"province id to get 5 geojson data of city",required:!0,schema:{type:"integer",example:33}}],responses:{202:{description:"Success get total page base on island name",content:{"application/json":{schema:{type:"object",example:{page:2}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/city/prov":{get:{tags:["City"],summary:"Get city geojson data base on province id and page number",parameters:[{name:"prov_id",in:"query",description:"province id to get 5 geojson data of city",required:!0,schema:{type:"integer",example:33}},{name:"page",in:"query",description:"page number to get 5 geojson data of city",required:!0,schema:{type:"integer",example:2}}],responses:{202:{description:"Success get province data base on island name",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/City"}}}}},404:{description:"Throw message when in can't find any data",content:{"application/json":{schema:{type:"object",example:{message:"Data Kota Tidak Ditemukan"}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/city/isle/page":{get:{tags:["City"],summary:"Get total page of geojson city base on island name",parameters:[{name:"island",in:"query",description:"island name to get 5 geojson data of city",required:!0,schema:{type:"string"}}],responses:{202:{description:"Success get total page base on island name",content:{"application/json":{schema:{type:"object",example:{page:2}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/city/isle":{get:{tags:["City"],summary:"Get city geojson data base on island name and page number",parameters:[{name:"island",in:"query",description:"island name to get 5 geojson data of city",required:!0,schema:{type:"string",example:"Jawa"}},{name:"page",in:"query",description:"page number to get 5 geojson data of city",required:!0,schema:{type:"integer",example:2}}],responses:{202:{description:"Success get province data base on island name",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/City"}}}}},404:{description:"Throw message when in can't find any data",content:{"application/json":{schema:{type:"object",example:{message:"Data Kota Tidak Ditemukan"}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/city/{id}/map":{get:{tags:["City"],summary:"Get city geojson data base on city id",parameters:[{name:"id",in:"path",description:"get geojson base on city id",required:!0,schema:{type:"integer",example:3318}}],responses:{202:{description:"Success get city data by page number",content:{"application/json":{schema:{$ref:"#/components/schemas/City"}}}},404:{description:"Throw message when in can't find any data",content:{"application/json":{schema:{type:"object",example:{message:"Denah Kab/Kota Tidak Ditemuka"}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}},"/city/{id}/destiny":{get:{tags:["City"],summary:"Get city geojson data base on city id",parameters:[{name:"id",in:"path",description:"get geojson base on city id",required:!0,schema:{type:"integer",example:3318}}],responses:{202:{description:"Success get city data by page number",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/Destiny"}}}}},404:{description:"Throw message when in can't find any data",content:{"application/json":{schema:{type:"object",example:{message:"Data lokasi liburan tidak ditemukana"}}}}},500:{description:"Something wrong in server",content:{"application/json":{schema:{type:"object",example:{message:"Terjadi Kesalahan Pada Server"}}}}}}}}}};function ie(){return e.jsxs("div",{className:"py-4 px-6",children:[e.jsx(I,{spec:ne}),e.jsx("div",{className:"divider"}),e.jsx(te,{data:ae})]})}function re(){return e.jsx("p",{className:"text-md",children:"Contoh"})}const se=new S;function oe(){return e.jsxs(e.Fragment,{children:[e.jsx("a",{className:"sr-only focus:not-sr-only text-white bg-blue-500 p-2 rounded-sm",href:"#main",children:"Skip Navigation"}),e.jsx(q,{}),e.jsx("main",{id:"main",className:"w-full px-4 md:px-0 my-4 max-w-7xl min-h-screen md:min-h-[75vh] 2xl:min-h-[80vh]",children:e.jsx(T,{client:se,children:e.jsxs(N,{children:[e.jsx(x,{path:"/",element:e.jsx(Z,{})}),e.jsx(x,{path:"/guide",element:e.jsx(ee,{})}),e.jsx(x,{path:"/doc",element:e.jsx(ie,{})}),e.jsx(x,{path:"/example",element:e.jsx(re,{})})]})})}),e.jsx(B,{})]})}_.createRoot(document.getElementById("root")).render(e.jsx(P,{basename:"/WhatGeo",children:e.jsx(oe,{})}));
