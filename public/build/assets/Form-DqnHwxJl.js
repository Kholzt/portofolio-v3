import{r as j,j as e,m as f,L as b}from"./app-BlOU_vYq.js";import{I as c,T as h}from"./TextInput-fCZ6bbtm.js";import{I as u}from"./InputLabel-kQTprjMN.js";import{P as v}from"./PrimaryButton-yCyLVFTO.js";import{A as N}from"./AuthenticatedLayout-Cz8KZ_gd.js";import{J as w}from"./textarea-rYncY1zT.js";import"./ApplicationLogo-D5EDXr8i.js";import"./transition-DvKTDmjI.js";import"./description-B3ye1Vx4.js";const y=({accept:a="*/*",maxFiles:i=5,onFilesChange:s,className:r=""})=>{const[o,x]=j.useState([]),g=t=>{if(!t.target.files)return;const d=Array.from(t.target.files).map(l=>({file:l,preview:URL.createObjectURL(l),name:l.name})),n=[...o,...d].slice(0,i);x(n),s&&s(n.map(({file:l,name:m})=>({file:l,name:m})))},p=t=>{x(d=>{URL.revokeObjectURL(d[t].preview);const n=d.filter((l,m)=>m!==t);return s&&s(n.map(({file:l,name:m})=>({file:l,name:m}))),n})};return e.jsxs("div",{className:`flex flex-col items-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 ${r}`,children:[e.jsxs("label",{htmlFor:"file-upload",className:"cursor-pointer flex flex-col items-center justify-center w-full h-32 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none",children:[e.jsx("svg",{className:"w-10 h-10 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 16V12M7 12V8M7 12H11M5 20H19C20.105 20 21 19.105 21 18V6C21 4.895 20.105 4 19 4H5C3.895 4 3 4.895 3 6V18C3 19.105 3.895 20 5 20Z"})}),e.jsx("span",{className:"text-gray-500 text-sm mt-2",children:"Drag & drop files here, or click to select"})]}),e.jsx("input",{id:"file-upload",type:"file",multiple:!0,accept:a,className:"hidden",onChange:g}),e.jsx("div",{className:"mt-4 w-full",children:o.length>0&&e.jsx("ul",{className:"space-y-2",children:o.map((t,d)=>e.jsxs("li",{className:"flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-sm",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("img",{src:t.preview,alt:t.name,className:"w-12 h-12 object-cover rounded-lg"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-gray-700",children:t.name}),e.jsxs("p",{className:"text-xs text-gray-500",children:[(t.file.size/1024).toFixed(2)," ","KB"]})]})]}),e.jsx("button",{onClick:()=>p(d),className:"text-red-500 hover:text-red-700 focus:outline-none",children:"Remove"})]},d))})})]})},I=({data:a})=>{const{data:i,setData:s,errors:r,post:o,patch:x,put:g}=f({title:a.data.title,description:a.data.description,thumbnail:"",start_date:a.data.start_date,end_date:a.data.end_date}),p=t=>{t.preventDefault(),o(a.action_form)};return e.jsxs(N,{header:e.jsxs("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:["Projek / ",a.title]}),children:[e.jsx(b,{title:a.title}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsxs("form",{onSubmit:p,method:"post",encType:"multipart/form-data",className:"p-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"",children:[e.jsx(u,{htmlFor:"thumbnail",value:"Thumbnail"}),e.jsx(y,{accept:"image/*",maxFiles:1,className:"mt-1",onFilesChange:t=>s("thumbnail",t[0].file)}),e.jsx(c,{message:r.thumbnail,className:"mt-2"})]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(u,{htmlFor:"title",value:"Judul"}),e.jsx(h,{id:"title",type:"text",name:"title",placeholder:"Judul Projek",value:i.title,className:"mt-1 block w-full",autoComplete:"current-title",onChange:t=>s("title",t.target.value)}),e.jsx(c,{message:r.title,className:"mt-2"})]}),e.jsxs("div",{className:"",children:[e.jsx(u,{htmlFor:"description",value:"Keterangan"}),e.jsx(w,{rows:4,value:i.description,onChange:t=>s("description",t.target.value),name:"description",placeholder:"Judul Projek",id:"description",className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full mt-1"}),e.jsx(c,{message:r.description,className:"mt-2"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(u,{htmlFor:"start_date",value:"Tanggal Awal"}),e.jsx(h,{id:"start_date",type:"date",name:"start_date",placeholder:"Judul Projek",value:i.start_date,className:"mt-1 block w-full",autoComplete:"current-start_date",onChange:t=>s("start_date",t.target.value)}),e.jsx(c,{message:r.start_date,className:"mt-2"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(u,{htmlFor:"end_date",value:"Tanggal Akhir"}),e.jsx(h,{id:"end_date",type:"date",name:"end_date",placeholder:"Judul Projek",value:i.end_date,className:"mt-1 block w-full",autoComplete:"current-end_date",onChange:t=>s("end_date",t.target.value)}),e.jsx(c,{message:r.end_date,className:"mt-2"})]})]})]}),e.jsx("div",{className:"flex justify-end p-4",children:e.jsx(v,{type:"submit",children:"Simpan"})})]})})})})]})};export{I as default};