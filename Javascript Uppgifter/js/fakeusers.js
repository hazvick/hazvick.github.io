
// Defs for items that will be used in the fetch
const base_ApiUrl = "https://reqres.in/";
const headerData = {
  "Content-Type": "application/json",
};
const bodyData = {
  email: "",
  password: "",
};

// Returns 'true' if login credentials are correct
const submitLogin = async () => {
  let jsonData = {};
  await fetch(base_ApiUrl + "api/login", {
    method: "POST",
    headers: headerData,
    body: JSON.stringify(bodyData),
  })
    .then((response) => response.json())
    .then((data) => {
      jsonData = data;
    });
  if (jsonData.token) {
    return true;
  }
  return false;
};

// Returns an array with properties including name, email and more
const getUsers = async () => {
  let jsonData = {};
  await fetch(base_ApiUrl + "api/users")
    .then((response) => response.json())
    .then((data) => {
      jsonData = data.data;
    });
  if (jsonData) {
    return jsonData;
  }
};

// Assigning HTML elements to variables
const loginformEl = document.querySelector("#loginForm");
const showUsersBtnEl = document.querySelector(".showUsersButton");
const loginMsgEl = document.querySelector("#loginErrorMessage");

// Activates submitLogin() function, hides previous elements and displayes 'show users' button
loginformEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  bodyData.email = document.querySelector("#loginEmailInput").value;
  bodyData.password = document.querySelector("#loginPasswordInput").value;
  if (await submitLogin()) {
    showUsersBtnEl.classList.remove("hide");
    if (!loginMsgEl.classList.contains("hide"))
      loginMsgEl.classList.add("hide");
  } else {
    const loginMsgEl = document.querySelector("#loginErrorMessage");
    loginMsgEl.classList.remove("hide");
    loginMsgEl.append("Invalid login credentials.");
  }
});

// Returns array with respective userdata. Filters by userid
const findUserById = async (id) => {
  let jsonData = {};
  await fetch(base_ApiUrl + `api/users?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
      jsonData = data.data;
    });
  if (jsonData) {
    return jsonData;
  }
};

// Creates a listitem with userdata
const usersListEl = document.querySelector(".usersList");
showUsersBtnEl.addEventListener("click", async (e) => {
  const Users = await getUsers();
  const parsedUsersArray = Users.map((index) => {
    return `<button class="userlistitem" value="${index.id}">${index.first_name}</button>`;
  }).join("");
  usersListEl.innerHTML = parsedUsersArray;
});

// Container with userdata
const userInfoContainerEl = document.querySelector(".userInfoContainer");
usersListEl.addEventListener("click", async (e) => {
  if (e.target.classList.contains("userlistitem")) {
    const listItemEl = e.target;
    let userInfoArray = await findUserById(listItemEl.value);

    let avatarElement = document.createElement("img");
    avatarElement.src = userInfoArray.avatar;
    let first_lastnameEl = document.createElement("p");
    first_lastnameEl.innerText = `First Name: ${userInfoArray.first_name}
     Last Name: ${userInfoArray.last_name}
     E-Mail: ${userInfoArray.email}`;
    userInfoContainerEl.innerHTML = "";
    userInfoContainerEl.append(avatarElement);
    userInfoContainerEl.append(first_lastnameEl);
  }
});
