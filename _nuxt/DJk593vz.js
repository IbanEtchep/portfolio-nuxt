import{d,c as n,i,F as u,K as m,g as e,t as l,e as f,j as p,f as c}from"./hkvVrgIR.js";const b={class:"timeline"},x={class:"timeline-content card"},B={class:"text-primary"},v={class:"text-normal"},y={class:"text-secondary"},S={key:0,class:"timeline-duration"},h=d({__name:"Timeline",props:{items:{}},setup(r){return(s,o)=>(i(),n("div",b,[(i(!0),n(u,null,m(s.items,(t,a)=>(i(),n("div",{key:a,class:"timeline-item"},[o[0]||(o[0]=e("div",{class:"timeline-marker"},null,-1)),e("div",x,[e("h3",B,l(t.title),1),e("h4",v,l(t.subtitle),1),e("div",y,[e("span",null,l(t.period),1),t.duration?(i(),n("span",S,l(t.duration),1)):f("",!0)])])]))),128))]))}}),_=p(h,[["__scopeId","data-v-0b18ee7d"]]),g=d({__name:"Experiences",setup(r){const s=[{title:"Medialeads",subtitle:"Alternance - Développement web Symfony",period:"Septembre 2023 - Septembre 2025 (2 ans)"},{title:"Medialeads",subtitle:"CDD - Développement web Symfony",period:"Juillet 2023 (1 mois)"},{title:"Medialeads",subtitle:"Stage - Développement web Symfony",period:"Avril à Juin 2023 (3 mois)"},{title:"Medialeads",subtitle:"Stage - Développement web Symfony",period:"Janvier à février 2022 (2 mois)"},{title:"BAB Radiokom",subtitle:"Stage - Conception de leur site internet",period:"Juin 2021 (1 mois)"}];return(o,t)=>{const a=_;return i(),n(u,null,[t[0]||(t[0]=e("h2",null,"Mes expériences professionnelles",-1)),c(a,{items:s})],64)}}}),k=d({__name:"EducationalBackground",setup(r){const s=[{title:"BAC+5 - Expert en ingénierie du logiciel",subtitle:"Louis de foix - Bayonne",period:"Septembre 2020 - Juin 2022 (2 ans)"},{title:"BAC+3 - Licence MIAGE",subtitle:"Université de Bordeaux",period:"2022 - 2023 (1 an)"},{title:"BAC+2 - BTS SIO",subtitle:"Louis de foix - Bayonne",period:"2020 - 2022 (2 ans)"},{title:"BAC+0 - Baccalauréat Scientifique",subtitle:"Bernat Etxepare - Bayonne",period:"2018"}];return(o,t)=>{const a=_;return i(),n(u,null,[t[0]||(t[0]=e("h2",null,"Mon parcours scolaire",-1)),c(a,{items:s})],64)}}}),A={},C={id:"about-header"},E={id:"experiences"},$={id:"education"};function D(r,s){const o=g,t=k;return i(),n("div",null,[e("section",C,[e("h1",null,[e("div",null,l(r.$t("welcome_1")),1),e("div",null,l(r.$t("welcome_2")),1)])]),e("section",E,[c(o)]),e("section",$,[c(t)])])}const w=p(A,[["render",D]]);export{w as default};
