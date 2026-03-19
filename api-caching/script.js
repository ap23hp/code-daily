const btn = document.querySelector("#loadBtn");
const listContainer = document.querySelector("#list");

let cachedPosts = null;
let isLoading = false;

const url = "https://jsonplaceholder.typicode.com/posts";

btn.addEventListener("click", async function(){

  // 🔒 Prevent multiple parallel requests
  if(isLoading) return;

  // ✅ Use cache if available
  if(cachedPosts){
    console.log("Serving from cache");
    renderPosts(cachedPosts);
    return;
  }

  try{
    isLoading = true;

    console.log("Fetching from API...");

    const response = await fetch(url);

    if(!response.ok){
      throw new Error("API failed");
    }

    const data = await response.json();

    // 💾 Store in cache
    cachedPosts = data;

    renderPosts(data);

  } catch(err){
    console.error(err);
  } finally{
    isLoading = false;
  }

});

function renderPosts(posts){

  listContainer.innerHTML = "";

  posts.slice(0,10).forEach(post => {

    const li = document.createElement("li");
    li.textContent = post.title;

    listContainer.appendChild(li);

  });

}