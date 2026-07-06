const listCont = document.querySelector("#post-list-container")
const searchInput=document.querySelector("#sea")
let allPosts=[]
let timer;
async function fetchPosts(){
const response= await fetch("https://jsonplaceholder.typicode.com/posts")
const data= await response.json()
allPosts=data
renderList(allPosts)
return allPosts
}

searchInput.addEventListener("input",function(){
      clearTimeout(timer)

  timer = setTimeout(()=>{

    const searchText = searchInput.value.toLowerCase()

    const filteredPosts = allPosts.filter((post)=>{
      return post.title.toLowerCase().includes(searchText)
    })

    renderList(filteredPosts)

  },500)

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
//debounce, on every search filter is running, not good for performance so we cand elay search by using timers when user search

// Search runs only after 500ms delay
// 2️⃣ If user keeps typing → previous timer is cancelled
// 3️⃣ Filtering happens inside the timer