// Build a page that loads posts from an API 5 at a time.

//https://jsonplaceholder.typicode.com/posts

let loadPosts = [];
let count = 5;

const loadPostsBtn = document.querySelector(".btn-load-posts");
const loadMoreBtn = document.querySelector(".btn-loadmore");
const listCont = document.querySelector("#post-list-container");

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  loadPosts = data;
  renderPosts();
}

function renderPosts() {
  listCont.innerHTML = "";

  loadPosts.slice(0, count).forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.title;
    listCont.appendChild(listItem);
  });
}

loadPostsBtn.addEventListener("click", function () {
  fetchPosts();
});

loadMoreBtn.addEventListener("click", function () {
  count += 5;
  renderPosts();
});