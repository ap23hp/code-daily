let allPosts = [];
let visiblePosts = 10;

const postContainer = document.querySelector('#posts');
const statusContainer = document.querySelector('#status');
const loadMorebtn = document.querySelector('#loadMore');

const url = `https://jsonplaceholder.typicode.com/posts`;

statusContainer.textContent = "Loading posts...";

async function fetchPosts(url) {
  const response = await fetch(url);
  const data = await response.json();
  allPosts = data;
}

function renderPosts() {
  postContainer.innerHTML = ""; // clear previous posts

  allPosts.slice(0, visiblePosts).forEach((post) => {
    const postWrapper = document.createElement('div');

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postBody = document.createElement('p');
    postBody.textContent = post.body;

    postWrapper.appendChild(postTitle);
    postWrapper.appendChild(postBody);

    postContainer.appendChild(postWrapper);
  });
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

loadMorebtn.addEventListener("click", function () {
  visiblePosts += 10;
  renderPosts();

  if (visiblePosts >= allPosts.length) {
    loadMorebtn.style.display = "none";
  }
});

//fetchPosts() returns a Promise that resolves to the posts data, and we use await when calling it so we get the resolved data and can pass it to renderPosts().
