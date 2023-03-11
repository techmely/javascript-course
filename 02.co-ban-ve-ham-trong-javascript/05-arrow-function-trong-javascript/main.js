let sum = (a, b) => {
  console.log("Tính tổng 2 số");
  return a + b;
};

console.log(sum(1, 3));


const ask = (question, handleYes, handleNo) => {
  const answer = confirm(question);
  if (answer === true) {
    handleYes();
  } else {
    handleNo();
  }
};

ask(
  "Bạn có muốn tiếp tục thực hiện chương trình không",
  () => console.log("You choose yes"),
  () => console.log("You choose no")
);

