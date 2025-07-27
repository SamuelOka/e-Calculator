let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");
let calculateBtn = document.getElementById("calculateBtn");
let answer = document.getElementById("answer");
let div = document.getElementById("div");

let answerValue = 0;
let operator = "add";

addition.addEventListener("click", (e) => {
  operator = "add";
  div.innerText = "+";
});
subtraction.addEventListener("click", (e) => {
  operator = "subtract";
  div.innerText = "-";
});
multiplication.addEventListener("click", (e) => {
  operator = "multiply";
  div.innerText = "x";
});
division.addEventListener("click", (e) => {
  operator = "division";
  div.innerText = "/";
});

function addNum(x, y) {
  x = Number(x);
  y = Number(y);
  answerValue = x + y;
  return answerValue;
}
function subtractNum(x, y) {
  x = Number(x);
  y = Number(y);
  answerValue = x - y;
  return answerValue;
}
function multiplyNum(x, y) {
  x = Number(x);
  y = Number(y);
  answerValue = x * y;
  return answerValue;
}
function divideNum(x, y) {
  x = Number(x);
  y = Number(y);
  answerValue = x / y;
  return answerValue;
}

calculateBtn.addEventListener(
  "click",
  () => {
    if (/[a-zA-Z]/.test(firstNum.value) || /[a-zA-Z]/.test(secondNum.value)) {
      alert("must Include numbers only");
    } else {
      if (operator === "add") {
        addNum(firstNum.value, secondNum.value);
      }
      if (operator === "subtract") {
        subtractNum(firstNum.value, secondNum.value);
      }
      if (operator === "multiply") {
        multiplyNum(firstNum.value, secondNum.value);
      }
      if (operator === "division") {
        divideNum(firstNum.value, secondNum.value);
      }
    }
    document.getElementById("h1").innerHTML = answerValue;
  },
  false
);
