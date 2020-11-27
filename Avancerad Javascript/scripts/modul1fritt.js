const selectThemeEl = document.querySelector(".selectTheme");
const themeEl = document.querySelectorAll(".theme");
const footerEl = document.querySelector("#footer");
const productPriceEl = document.querySelectorAll(".productPrice");
const btnEl = document.querySelector(".btn");
const sumOutputEl = document.querySelector("#sumOutput");
const discounts = ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9"]

//-----------------------------------oldschool function version--------------------------------
// selectThemeEl.addEventListener("click", selectThemeColor);

// function selectThemeColor(element) {
//   console.log(element.target.value);
//   for (let i = 0; i < themeEl.length; i++) {
//     themeEl[i].style.backgroundColor = element.target.value;
//   }
//   if (element.target.value === "darkgrey") {
//     document.body.style.backgroundColor = "#545050";
//   }
//   if (element.target.value === "white") {
//     document.body.style.backgroundColor = "white";
//   }
// }
//------------------------------------------------------------------------------------------------------


//div section----------------------
btnEl.addEventListener("click", () => {
  let sumArray = [];
  productPriceEl.forEach((element) => sumArray.push(element.value));
  let discountArr = sumArray.map((x) => x * discounts[Math.floor(Math.random()*discounts.length)]);
  let totalSum = 0;
  discountArr.forEach((element) => (totalSum += element));

  sumOutputEl.innerHTML = totalSum + " kr";
});
//div section-----------------------


