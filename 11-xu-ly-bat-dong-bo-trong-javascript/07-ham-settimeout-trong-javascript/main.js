const id = setTimeout(() => {
  console.log("run function");
  clearTimeout(id);
}, 3000);
