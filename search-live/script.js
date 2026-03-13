const listCont = document.querySelector("#post-list-container")
const searchInput=document.querySelector("#sea")
let allPosts=[]
async function fetchPosts(){
const response= await fetch("https://jsonplaceholder.typicode.com/posts")
const data= await response.json()
allPosts=data
renderList(allPosts)
return allPosts
}

searchInput.addEventListener("input",function(){
 let filteredposts= allPosts.filter((post)=>{
return post.title.toLowerCase().includes(searchInput.value.toLowerCase())
})
renderList(filteredposts)
    })


function renderList(posts){
    listCont.innerHTML = "";

   posts.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.title;
    listCont.appendChild(listItem);
  });
}

fetchPosts()