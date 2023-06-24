const req = new XMLHttpRequest();
req.open("GET", "https://httpbin.org/get", false);
req.setRequestHeader("name", "thaycacac");
req.send(null);
console.log(req.status);
console.log(req.responseText);
