var div=document.querySelector("#allblogs");
let searchblog=document.querySelector("#searchblog");
const renderPost=async(term)=>{
    let url="http://localhost:3000/posts?_sort=likes&_order=desc";  //sort by id bydefault but we can customize
    if(term)
    {
      url+=`&q=${term}`;
    }
   
    const data=await fetch(url);
    const posts=await data.json();
    console.log(posts);

    let template="";
    posts.forEach((post)=>{
        template+=`
          <div>
           <h1>${post.title}</h1>
           <p>${post.body.slice(0,100)}....</p>
           <a href="/details.html?id=${post.id}">Read more...</a>
           <p>${post.likes} Likes</p>
          </div>
        `
    })
    div.innerHTML=template;

}

searchblog.onsubmit=(e)=>{
e.preventDefault();
//alert();
let term=searchblog.searchterm.value;
//console.log(term);
renderPost(term);
}
window.addEventListener("DOMContentLoaded",()=>renderPost());