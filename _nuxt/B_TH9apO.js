const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jSUge72I.js","./hkvVrgIR.js","./entry.nychuUAL.css","./tpHTJKfK.js"])))=>i.map(i=>d[i]);
import{Z as $,B as y,_ as f}from"./hkvVrgIR.js";import{t as m}from"./tpHTJKfK.js";const l=(o,s)=>{const t=o._conditions;return t.length>0?`(${t.join(` ${s} `)})`:""},d=o=>{const s=[],t={_conditions:s,where(n,i,e){let r;switch(i.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(e)){const u=e.map(c=>a(c)).join(", ");r=`"${String(n)}" ${i.toUpperCase()} (${u})`}else throw new TypeError(`Value for ${i} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(e)&&e.length===2)r=`"${String(n)}" ${i.toUpperCase()} ${a(e[0])} AND ${a(e[1])}`;else throw new Error(`Value for ${i} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":r=`"${String(n)}" ${i.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":r=`"${String(n)}" ${i.toUpperCase()} ${a(e)}`;break;default:r=`"${String(n)}" ${i} ${a(typeof e=="boolean"?Number(e):e)}`}return s.push(`${r}`),t},andWhere(n){const i=n(d());return s.push(l(i,"AND")),t},orWhere(n){const i=n(d());return s.push(l(i,"OR")),t}};return t},g=(o,s)=>{const t={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},n={__params:t,andWhere(e){const r=e(d());return t.conditions.push(l(r,"AND")),n},orWhere(e){const r=e(d());return t.conditions.push(l(r,"OR")),n},path(e){return n.where("path","=",$(e))},skip(e){return t.offset=e,n},where(e,r,u){return n.andWhere(c=>c.where(String(e),r,u)),n},limit(e){return t.limit=e,n},select(...e){return e.length&&t.selectedFields.push(...e),n},order(e,r){return t.orderBy.push(`"${String(e)}" ${r}`),n},async all(){return s(o,i()).then(e=>e||[])},async first(){return s(o,i({limit:1})).then(e=>e[0]||null)},async count(e="*",r=!1){return s(o,i({count:{field:String(e),distinct:r}})).then(u=>u[0].count)}};function i(e={}){let r="SELECT ";if(e!=null&&e.count)r+=`COUNT(${e.count.distinct?"DISTINCT ":""}${e.count.field}) as count`;else{const c=Array.from(new Set(t.selectedFields));r+=c.length>0?c.map(h=>`"${String(h)}"`).join(", "):"*"}r+=` FROM ${m[String(o)]}`,t.conditions.length>0&&(r+=` WHERE ${t.conditions.join(" AND ")}`),t.orderBy.length>0?r+=` ORDER BY ${t.orderBy.join(", ")}`:r+=" ORDER BY stem ASC";const u=(e==null?void 0:e.limit)||t.limit;return u>0&&(t.offset>0?r+=` LIMIT ${u} OFFSET ${t.offset}`:r+=` LIMIT ${u}`),r}return n};function a(o){return`'${String(o).replace(/'/g,"''")}'`}const w=o=>{var t,n;const s=(n=(t=y())==null?void 0:t.ssrContext)==null?void 0:n.event;return g(o,(i,e)=>p(s,i,e))};async function p(o,s,t){return S(s,t)}async function S(o,s){return await f(()=>import("./jSUge72I.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(n=>n.loadDatabaseAdapter(o)).then(n=>n.all(s))}export{w as q};
