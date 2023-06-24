const req = new XMLHttpRequest();
req.open("POST", "https://httpbin.org/post", false);
req.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

var jsonBody = {
  name: "thaycacac",
  url: "kungfutech.edu.vn",
};
req.send(jsonBody);

console.log(req.status);
console.log(req.responseText);
