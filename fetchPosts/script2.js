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
//When we use fetch(): fetch(url) sends a request to the server.
//It returns a Promise because the browser needs time to contact the server.
//So:fetch(url) -> Promise -> resolves to → Response object
//The Response object contains information about the request.
//Example things inside it:status, headers, body,ok
//But the actual data is still inside the body and 
// not directly usable yet.To extract the data, we use:response.json()
// This reads the response body and converts it into JavaScript data.
// But this also takes time, so it returns another Promise.
// Final result becomes:
// Which is a JavaScript array of objects.
// Why We Use await Twice
//Because there are two asynchronous steps:
//await fetch(url) await response.json()
