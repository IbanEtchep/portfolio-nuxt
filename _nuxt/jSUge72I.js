const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CmWvbGA3.js","./hkvVrgIR.js","./entry.nychuUAL.css"])))=>i.map(i=>d[i]);
import{_ as w}from"./hkvVrgIR.js";import{c as d,a as p,t as f}from"./tpHTJKfK.js";async function g(t,r){return await $fetch(`/api/content/${r}/database.sql`,{context:{},responseType:"text",headers:{"content-type":"text/plain"},query:{v:d[String(r)],t:void 0}})}async function S(t,r="gzip"){var s;const e=Uint8Array.from(atob(t),u=>u.charCodeAt(0)),o=(s=new Response(new Blob([e])).body)==null?void 0:s.pipeThrough(new DecompressionStream(r));return(await new Response(o).text()).split(`
`)}function l(t,r){const e=b(t),n={...r};for(const o in n)e[o]==="json"&&n[o]&&n[o]!=="undefined"&&(n[o]=JSON.parse(n[o])),e[o]==="boolean"&&n[o]!=="undefined"&&(n[o]=!!n[o]);for(const o in n)n[o]==="NULL"&&(n[o]=void 0);return n}function b(t){const r=t.match(/FROM\s+(\w+)/);if(!r)return{};const e=p[h(r[1])];return(e==null?void 0:e.fields)||{}}function h(t){return t.replace(/^_content_/,"")}let a;const m={},i={};function $(t){async function r(e){return a||(i._=i._||_(),a=await i._,i._=void 0),m[String(e)]||(i[String(e)]=i[String(e)]||y(e),await i[String(e)],m[String(e)]="loaded",i[String(e)]=void 0),a}return{all:async(e,n)=>(await r(t),a.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).map(o=>l(e,o))),first:async(e,n)=>(await r(t),l(e,a.exec({sql:e,bind:n,rowMode:"object",returnValue:"resultRows"}).shift())),exec:async(e,n)=>{await r(t),await a.exec({sql:e,bind:n})}}}async function _(){if(!a){const t=await w(()=>import("./CmWvbGA3.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(e=>e.default);globalThis.sqlite3ApiConfig={silent:!0,debug:(...e)=>console.debug(...e),warn:(...e)=>{String(e[0]).includes("OPFS sqlite3_vfs")||console.warn(...e)},error:(...e)=>console.error(...e),log:(...e)=>console.log(...e)};const r=await t();a=new r.oo1.DB}return a}async function y(t){if(window.sessionStorage.getItem("previewToken"))return a;let r=null;const e=`checksum_${t}`,n=`collection_${t}`;let o="matched";try{const c=a.exec({sql:`SELECT * FROM ${f.info} where id = '${e}'`,rowMode:"object",returnValue:"resultRows"}).shift();(c==null?void 0:c.version)!==d[String(t)]&&(o="mismatch")}catch{o="missing"}if(o!=="matched"){if(window.localStorage.getItem(`content_${e}`)===d[String(t)]&&(r=window.localStorage.getItem(`content_${n}`)),!r){r=await g(void 0,String(t));try{window.localStorage.setItem(`content_${e}`,d[String(t)]),window.localStorage.setItem(`content_${n}`,r)}catch(s){console.error("Database integrity check failed, rebuilding database",s)}}const c=await S(r);await a.exec({sql:`DROP TABLE IF EXISTS ${f[String(t)]}`}),o==="mismatch"&&await a.exec({sql:`DELETE FROM ${f.info} WHERE id = '${e}'`});for(const s of c)try{await a.exec(s)}catch(u){console.error("Error executing command",u)}}return a}export{$ as loadDatabaseAdapter};
