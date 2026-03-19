let allPosts = [];
let currentIndex = 0;
let limit = 10;
let loading = false;

const postContainer = document.querySelector('#posts');
const statusContainer = document.querySelector('#status');

const url = `https://jsonplaceholder.typicode.com/posts`;

statusContainer.textContent = "Loading posts...";

async function fetchPosts(url) {
  const response = await fetch(url);
  const data = await response.json();
  allPosts = data;
}

function renderPosts() {

  loading = true;
  statusContainer.textContent = "Loading more posts...";

  allPosts.slice(currentIndex, currentIndex + limit).forEach((post) => {

    const postWrapper = document.createElement('div');

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postBody = document.createElement('p');
    postBody.textContent = post.body;

    postWrapper.appendChild(postTitle);
    postWrapper.appendChild(postBody);

    postContainer.appendChild(postWrapper);
  });

  currentIndex += limit;

  loading = false;
  statusContainer.textContent = "";
}


async function main() {
  try {
    await fetchPosts(url);
    statusContainer.textContent = "";
    renderPosts();
  } catch (error) {
    statusContainer.textContent = "Failed to load posts";
  }
}

main();

window.addEventListener("scroll", function(){

  if (loading) return;

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    renderPosts();
  }

});