let count = 0;
const id = setInterval(() => {
  console.log("count:", count++);
  if (count === 3) {
    clearInterval(id);
  }
}, 3000);
