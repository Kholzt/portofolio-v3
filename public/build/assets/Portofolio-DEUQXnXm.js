import{r,j as e}from"./app-BhkkmScm.js";import i from"./Portofolio-DR1cZHoF.js";import n from"./Portofolio-ByReKeer.js";import"./helpers-C_h0qzc2.js";import"./all-D3bZNxv5.js";import"./PortofolioItem-CJRBUc43.js";import"./ExperienceItem-Sb0GbAUy.js";import"./Achievment-BnN1v3iL.js";import"./PortofolioItem-Dc3hMpU-.js";import"./ExperienceItem-BNOceAPr.js";import"./Achievment-DrkCl7XI.js";const N=({data:o})=>{const[m,a]=r.useState("theme1"),[c,s]=r.useState(!1);r.useEffect(()=>{const t=localStorage.getItem("selectedTheme");t==="theme1"||t==="theme2"?a(t):s(!1)},[]);const l=t=>{a(t),localStorage.setItem("selectedTheme",t),s(!1)},h=()=>{switch(m){case"theme2":return e.jsx(n,{data:o});case"theme1":default:return e.jsx(i,{data:o})}};return e.jsxs("div",{children:[c&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Choose Your Theme"}),e.jsxs("div",{className:"flex gap-4 justify-center",children:[e.jsx("button",{onClick:()=>l("theme1"),className:"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded",children:"Theme 1"}),e.jsx("button",{onClick:()=>l("theme2"),className:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded",children:"Theme 2"})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"You can change theme later anytime."})]})}),e.jsx("button",{onClick:()=>s(!0),className:"fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-50",title:"Change Theme",children:e.jsx("i",{className:"fa fa-paint-brush"})}),h()]})};export{N as default};
