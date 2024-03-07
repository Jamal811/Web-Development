// Event Listners
/*

const buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I also Love javascript");
}

buttonTwo.addEventListener("click", alertBtn);

// on mouseover

const newBgColor = document.querySelector(".box-3");

function changeBg() {
  newBgColor.style.backgroundColor = "blue";
}

newBgColor.addEventListener("mouseover", changeBg);
*/

// reveal Event

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContect() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContect);
