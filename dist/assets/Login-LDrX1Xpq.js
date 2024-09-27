import{r as m,R as e,N as g}from"./index-oEUiuk6H.js";import{a as b}from"./axios-DsPaXkF5.js";const h=()=>{const[a,c]=m.useState({name:"",designation:"",description:"",photo:null}),[d,s]=m.useState(""),n=o=>{const{name:r,value:t}=o.target;c(l=>({...l,[r]:t}))},i=o=>{c(r=>({...r,photo:o.target.files[0]}))},u=async o=>{o.preventDefault();const r=new FormData;r.append("name",a.name),r.append("designation",a.designation),r.append("description",a.description),a.photo&&r.append("photo",a.photo);try{const t=await b.post("http://localhost:5000/api/login-work",r,{headers:{"Content-Type":"multipart/form-data"}});console.log("LoginWork Response:",t.data),s("Data saved successfully!")}catch(t){t.response?(console.error("Error saving data:",t.response.data),s(`Save failed: ${t.response.data.message||"Please try again."}`)):t.request?(console.error("Error saving data:",t.request),s("No response from server. Please try again.")):(console.error("Error saving data:",t.message),s("Save failed due to an unexpected error. Please try again."))}};return e.createElement("div",{className:"flex justify-center items-center min-h-screen bg-gray-100"},e.createElement("div",{className:"w-full max-w-lg bg-white p-8 rounded-lg shadow-md"},e.createElement("h1",{className:"text-2xl font-bold mb-6 text-center"},"Submit Your Work"),e.createElement("form",{onSubmit:u,className:"space-y-4"},e.createElement("div",null,e.createElement("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700"},"Name"),e.createElement("input",{type:"text",id:"name",name:"name",value:a.name,onChange:n,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm",required:!0})),e.createElement("div",null,e.createElement("label",{htmlFor:"designation",className:"block text-sm font-medium text-gray-700"},"Designation"),e.createElement("input",{type:"text",id:"designation",name:"designation",value:a.designation,onChange:n,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm",required:!0})),e.createElement("div",null,e.createElement("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700"},"Description"),e.createElement("textarea",{id:"description",name:"description",value:a.description,onChange:n,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm",rows:"4",required:!0})),e.createElement("div",null,e.createElement("label",{htmlFor:"photo",className:"block text-sm font-medium text-gray-700"},"Upload Photo"),e.createElement("input",{type:"file",id:"photo",name:"photo",onChange:i,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm",required:!0})),e.createElement("button",{type:"submit",className:"w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"},"Submit")),d&&e.createElement("p",{className:"mt-4 text-center text-green-500"},d)))},y=()=>{const[a,c]=m.useState(""),[d,s]=m.useState(""),[n,i]=m.useState(""),[u,o]=m.useState(!1),r=async t=>{t.preventDefault();try{const l=await fetch("http://localhost:5000/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:d})}),p=await l.json();l.ok&&p.success?o(!0):i(p.message||"Invalid credentials")}catch(l){console.error("Error during login:",l),i("An error occurred")}};return u?e.createElement(h,null):e.createElement("div",{className:"flex flex-col min-h-screen"},e.createElement(g,null),e.createElement("div",{className:"container mx-auto p-4 mt-20 max-w-md"},e.createElement("h1",{className:"text-3xl font-bold text-gray-800 mb-6"},"Login"),n&&e.createElement("p",{className:"text-red-500 mb-4"},n),e.createElement("form",{onSubmit:r,className:"bg-white shadow-md rounded-lg p-6"},e.createElement("div",{className:"mb-4"},e.createElement("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"Email"),e.createElement("input",{type:"email",id:"email",value:a,onChange:t=>c(t.target.value),required:!0,className:"border rounded-lg py-2 px-3 text-gray-700 w-full"})),e.createElement("div",{className:"mb-6"},e.createElement("label",{htmlFor:"password",className:"block text-gray-700 text-sm font-bold mb-2"},"Password"),e.createElement("input",{type:"password",id:"password",value:d,onChange:t=>s(t.target.value),required:!0,className:"border rounded-lg py-2 px-3 text-gray-700 w-full"})),e.createElement("button",{type:"submit",className:"bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"},"Login"))))};export{y as default};
