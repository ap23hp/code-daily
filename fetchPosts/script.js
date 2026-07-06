const postContainer = document.querySelector('#posts');
const statusContainer = document.querySelector('#status');

const url = `https://jsonplaceholder.typicode.com/posts`;

statusContainer.textContent = "Loading posts...";

fetch(url)
  .then(res => res.json())
  .then(data => {
    statusContainer.textContent = "";

    data.slice(0, 10).forEach((post) => {
      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;

      const postBody = document.createElement('p');
      postBody.textContent = post.body;

      postContainer.appendChild(postTitle);
      postContainer.appendChild(postBody);
    });
  })
  .catch(() => {
    statusContainer.textContent = "Failed to load posts";
  });

// fetch(url) sends a request and returns a Promise that resolves to a Response object.
// The first .then() receives this Response object and calls response.json() to convert the response body into JSON data.
// response.json() returns another Promise which resolves to the parsed JavaScript object.
// The next .then() receives that data and we can use or print it.