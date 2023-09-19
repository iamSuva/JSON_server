
const container=document.querySelector(".details");
const delbtn=document.querySelector(".delete");

const id=new URLSearchParams(window.location.search).get("id");
const renderSinglePost=async()=>{
    const url=" http://localhost:3000/posts/"+id;
    const data=await fetch(url);
    const post=await data.json();
    console.log(post);
    const template=`<div>
      <h1>${post.title}</h1>
      <p>${post.body}</p>
      <p>${post.likes} Likes</p>
    </div>`
    container.innerHTML=template;

    
}
delbtn.onclick=async ()=>{
  const res=await fetch("http://localhost:3000/posts/"+id,{
      method:"DELETE"
    })
    window.location.replace("/index.html");
}
window.addEventListener("DOMContentLoaded",()=>renderSinglePost())