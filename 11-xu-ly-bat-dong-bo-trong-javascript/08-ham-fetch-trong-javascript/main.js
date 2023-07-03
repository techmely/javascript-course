fetch("https://httpbin.org/get")
  .then((value) => {
    console.log("value1", value);
  })
  .catch((err) => {
    console.log("error", error);
  });
