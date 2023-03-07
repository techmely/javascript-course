// function expression trong javascript
let sayHello = function () {
  console.log("hello world");
};

const sayHi = sayHello;

sayHi();

console.log(sayHello());

// Hàm callback
function ask(question, handleYes, handleNo) {
  const answer = confirm(question);
  if (answer === true) {
    handleYes();
  } else {
    handleNo();
  }
}

function handleYes() {
  console.log("You choose yes");
}

function handleNo() {
  console.log("You choose no");
}

ask(
  "Bạn có muốn tiếp tục thực hiện chương trình không",
  function () {
    console.log("You choose yes");
  },
  function () {
    console.log("You choose no");
  }
);

sayHello(); // Hello!

function sayHello() {
  console.log("Hello!");
}

sayHello(); // Uncaught ReferenceError: sayHello is not defined

let sayHello = function () {
  console.log("Hello!");
};
