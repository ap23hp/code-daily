const postContainer = document.querySelector('#posts');
const statusContainer = document.querySelector('#status');

const url = `https://jsonplaceholder.typicode.com/posts`;

statusContainer.textContent = "Loading posts...";

async function fetchPosts(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function renderPosts(data) {
  data.slice(0, 10).forEach((post) => {
    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postBody = document.createElement('p');
    postBody.textContent = post.body;

    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);
  });
}

async function main() {
  try {
    const data = await fetchPosts(url);
    statusContainer.textContent = "";
    renderPosts(data);
  } catch (error) {
    statusContainer.textContent = "Failed to load posts";
  }
}

main();

//fetchPosts() returns a Promise that resolves to the posts data, and we use await when calling it so we get the resolved data and can pass it to renderPosts().