// Defs for items that will be used
const base_ApiUrl = "https://jsonplaceholder.typicode.com/";
const headerData = {
  "Content-Type": "application/json",
};

// Returns array with different properties and returns parameters
const getData = async (page) => {
  let jsonData = {};
  await fetch(base_ApiUrl + page)
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
    });
  if (jsonData) {
    return jsonData;
  }
};

// postData = 'respons from getData'
// postEl = 'container for all the posts'
let postsData = {};
let postsEl = document.querySelector(".posts");

// Function runs onload, creates HTML containing fetchdata
window.onload = async () => {
  postsData = await getData("posts");
  if (postsData) {
    let parsedData = postsData
      .map((index) => {
        return `<div class="post" data-postid="${index.id}">
      <h3 class="post-title">${index.title}</h3>
      <div class="post-body">${index.body}</div>
      <button class="comment-button" data-postid="${index.id}">Read comments</button>
      <button class="author-button" data-userid="${index.userId}">Author info</button>
      <ul class="comments">
      </ul>
    </div>`;
      })
      .join("");
    postsEl.innerHTML = parsedData;
  }
};

// When clicking Author button, fetched authordata displayes
let authorEl = document.querySelector(".user-container");
document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("author-button")) {
    let authorId = e.target.dataset.userid;
    let authorData = await getData(`users/${authorId}`);
    authorEl.innerHTML = `
    <div class="user" style="color:white;">
    <div>${authorData.name}</div>
    <div>${authorData.email}</div>
    <div>Phone: ${authorData.phone}</div>
    <br />
    <div>Company: ${authorData.company.name}</div>
    </div>
  `;
  }

  // When clicking Comments button, fetched commentdata displayes
  if (e.target.classList.contains("comment-button")) {
    let postId = e.target.dataset.postid;
    postsData = await getData("comments");
    if (postsData) {
      let parsedData = postsData
        .map((index) => {
          if (index.postId == postId) {
            return `<li class="comment">
            <div>${index.email}</div>
            <div>${index.body}</div>
              </li>`;
          }
        })
        .join("");

      
      //Goes through post-ID's and makes sure comments doesn't duplicate
      let allPostsArray = document.querySelectorAll(".post");
      allPostsArray.forEach((index) => {
        if (index.dataset.postid == postId) {
          let commentsContainerEl = index.querySelector(".comments");
          if (!commentsContainerEl.querySelector(".comment")) // If comment is empty, we add our fetched data
            commentsContainerEl.insertAdjacentHTML("beforeend", parsedData);
        }
      });
    }
  }
});
