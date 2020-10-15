// variables
let dogApi_Url = "https://dog.ceo/api/breeds/image/random"; // API
let catApi_Url = "https://aws.random.cat/meow"; // API
let foxApi_Url = "https://randomfox.ca/floof/"; // API
let dogImage_Url = ""; // IMAGE PLACEHOLDER
let catImage_Url = ""; // IMAGE PLACEHOLDER
let foxImage_Url = ""; // IMAGE PLACEHOLDER
let form_element = document.querySelector(".animalForm"); // QUERY SELECTOR
let dropdown_element = document.querySelector(".animalDropdown"); // QUERY SELECTOR
let image_element = document.querySelector(".displayedimage"); // QUERY SELECTOR
let favorites_element = document.querySelector(".favorites-list"); // QUERY SELECTOR

// executes the following functions on window load
window.onload = () => {
  fetchDog();
  fetchCat();
  fetchFox();
};

// fetch dog
async function fetchDog() {
  await fetch(dogApi_Url)
    .then((response) => response.json())
    .then((dogObject) => (dogImage_Url = dogObject.message));
}

// fetch car
async function fetchCat() {
  await fetch(catApi_Url)
    .then((response) => response.json())
    .then((catObject) => (catImage_Url = catObject.file));
}

// fetch fox
async function fetchFox() {
  await fetch(foxApi_Url)
    .then((response) => response.json())
    .then((foxObject) => (foxImage_Url = foxObject.image));
}

// displays image
let displayImage = (url) => {
  image_element.src = url;
};

// shows the correspondant image to picked-animal
form_element.addEventListener("submit", (e) => {
  e.preventDefault();
  let animal_picked =
    dropdown_element.options[dropdown_element.selectedIndex].value;

  if (animal_picked == "cat") {
    fetchCat();
    displayImage(catImage_Url);
  }
  if (animal_picked == "dog") {
    fetchDog();
    displayImage(dogImage_Url);
  }
  if (animal_picked == "fox") {
    fetchFox();
    displayImage(foxImage_Url);
  }
});

// adds the clicked image to favourites 
document.addEventListener("click", (e) => {
  let element = e.target;
  if (element.classList.contains("displayedimage")) {
    favorites_element.insertAdjacentHTML(
      "beforeend",
      `<li>
    <img
      src=${element.src}
      height="70%"
      width="70%"
    />
  </li>`
    );
  }
});