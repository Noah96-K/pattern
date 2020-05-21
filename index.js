let boxs = [];
for (let i = 0; i < 70; i++) {
  boxs[i] = document.getElementsByClassName("box-first")[i];
}
// const boxs = document.querySelector(".box-first");
// const boxs = document.querySelector(".box-2");
const CLICKED = "clicked";
const BASIC = "box-first";
function handleClick(event) {
  const hasClass = event.target.classList.contains(CLICKED);
  if (hasClass) {
    event.target.classList.remove(CLICKED);
    event.target.classList.add(BASIC);
  } else {
    event.target.classList.add(CLICKED);
    event.target.classList.remove(BASIC);
  }
}
// let makeItRed = function (event) {
//   event.target.style.backgroundColor = "red";
// };
function init() {
  for (let j = 0; j < 70; j++) {
    boxs[j].addEventListener("click", handleClick);
  }
}

init();
