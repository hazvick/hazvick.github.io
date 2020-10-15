// the balloon container class that is used.
const balloon_container = document.querySelector(".balloon-container");

// number of balloons to generate
const balloon_count = 24;

// displayed text when balloon pop
const balloonpop_text = "pop";

// 
window.onload = function () {
  for (i = 0; i < balloon_count; i++) {
    balloon_container.insertAdjacentHTML(
      "beforeend",
      `<div class="balloon">${balloonpop_text}</div>`
    );
  }
};

let isBalloonValidChecker = (element) => {
  if (
    element.classList.contains("balloon") &&
    !element.classList.contains("popped")
  ) {
    return true;
  }
};

// returns the amount of popped balloons
let getAllPoppedBalloons = () => {
  return document.querySelectorAll(".popped").length;
};

// pops balloons then checks if all is popped
// if all is popped, it displays image
document.addEventListener("mouseover", (e) => {
  const element = e.target;
  if (isBalloonValidChecker(element)) {
    element.classList.add("popped");
    if (getAllPoppedBalloons() == balloon_count) {
      balloon_container.innerHTML = "<img src='images/youwin.jpg'>";
    }
  }
});