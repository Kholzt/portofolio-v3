import{j as e,L as d,$ as r}from"./app-BsGrDTxw.js";import{P as i}from"./PrimaryButton-5pBeGfKr.js";import{f as c}from"./helpers-CULxtgsy.js";import{A as o}from"./AuthenticatedLayout-FQUBQVM1.js";import"./ApplicationLogo-B5E5yrHX.js";import"./transition-CFTqxYHk.js";const b=({data:a})=>(console.log(a.portofolio),e.jsxs(o,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Projek"}),children:[e.jsx(d,{title:"Projek"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsxs("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:[e.jsx("div",{className:"flex justify-end p-4",children:e.jsx(i,{href:route("projek.create"),children:"Tambah Projek"})}),e.jsxs("table",{className:"w-full",children:[e.jsxs("thead",{className:"bg-slate-50",children:[e.jsx("th",{className:"border-b px-4 py-4 w-20",children:"No"}),e.jsx("th",{className:"border-b px-4 py-4",align:"left",children:"Thumbnail"}),e.jsx("th",{className:"border-b px-4 py-4",align:"left",children:"Nama Projek"}),e.jsx("th",{className:"border-b px-4 py-4",align:"left",children:"Tanggal Dibuat"}),e.jsx("th",{className:"border-b px-4 py-4",align:"left",children:"Aksi"})]}),e.jsx("tbody",{children:a.portofolio.data.map((s,t)=>{const l=c(s.created_at);return t++,e.jsxs("tr",{className:"odd:bg-white even:bg-slate-50",children:[e.jsx("td",{className:"px-4 py-2 text-center ",children:t++}),e.jsx("td",{className:"px-4 py-2 text-start ",children:e.jsx("img",{src:s.thumbnail,className:" aspect-video object-cover w-20 object-top rounded-sm",alt:s.title})}),e.jsx("td",{className:"px-4 py-2 text-start ",children:s.title}),e.jsx("td",{className:"px-4 py-2 text-start ",children:l}),e.jsx("td",{className:"px-4 py-2 text-start ",children:e.jsx(r,{href:route("projek.edit",s.id),children:"Edit"})})]},t)})})]}),e.jsx("div",{className:"flex gap-2 p-4 justify-end",children:a.portofolio.links.map((s,t)=>e.jsx(r,{className:`px-4 py-2 border rounded-md ${s.active&&"bg-slate-100"}`,href:s.url,dangerouslySetInnerHTML:{__html:s.label}},t))})]})})})]}));export{b as default};