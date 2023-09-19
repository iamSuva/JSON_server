const form=document.querySelector("form");

const createBlog=async (e)=>{
    e.preventDefault();
   const url=" http://localhost:3000/posts";

   const newblogdata={
    title:form.title.value ,
    body:form.body.value,
    likes:0
   }
  const res= await fetch(url,{
    method:"POST",
    body:JSON.stringify(newblogdata),
    headers:{"Content-type":"application/json"}
   })

   window.location.replace("/index.html");
}
form.addEventListener("submit",createBlog);