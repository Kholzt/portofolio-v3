import{j as e}from"./app-nG5zF7Gv.js";import{L as a}from"./all-D3bZNxv5.js";const n=({porto:s,resultFormatDate:m,layout:l})=>{var i;return e.jsx("div",{children:e.jsxs("article",{className:`rounded-md overflow-hidden h-full ${l==a.GRID&&"md:flex"}`,children:[e.jsxs("div",{className:` ${l==a.GRID&&"min-w-[300px] md:max-w-[300px]"}`,children:[e.jsxs("div",{className:"flex text-base text-slate-200   py-4",children:[e.jsx("i",{className:"fa fa-calendar me-2"}),e.jsx("small",{children:m})]}),e.jsx("img",{src:s.thumbnail.includes("https")?s.thumbnail:`storage/${s.thumbnail}`,className:" aspect-video object-cover object-top w-full rounded mx-auto",alt:s.title})]}),e.jsxs("div",{className:`${l==a.GRID?"md:px-4 py-4":"py-4"} `,children:[e.jsx("h6",{className:"text-lg font-medium mb-2",children:s.title}),e.jsx("p",{className:"text-sm text-slate-400 prose",dangerouslySetInnerHTML:{__html:s.details}}),e.jsx("div",{children:e.jsx("ul",{className:"flex gap-2 unstyled",children:(i=s==null?void 0:s.technologies)==null?void 0:i.map((d,t)=>e.jsx("li",{children:e.jsx("span",{className:"badge text-bg-dark fw-medium",children:d})},t))})})]})]})})};export{n as PortofolioItem};
