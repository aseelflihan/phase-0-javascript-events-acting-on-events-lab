// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#Red";

dodger.style.bottom = "0px";
dodger.style.left = "10px";

const movment = (e) => {
  if (e.key === "left") {
    moveDodgerLeft(e);
  }
  if (e.key === "right") {
    moveDodgerRight(e);
  }
};

const moveDodgerLeft = (e) => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  dodger.style.left = `${left - 1}px`;
};

const moveDodgerRight = (e) => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
};
document.addEventListener("key", movment);