function sayHello(name1 = "Name 1", name2 = "Name 2") {
  console.log("hello");
  console.log("world");
  console.log("hello " + name1);
  console.log("hi " + name2);
}

// sayHello("Thaycacac", "HoaPN");
// sayHello("Techmely", "Kungfutech");

function sum(a, b) {
  if (a === null || a === undefined) {
    return console.log("tham số không hợp lệ");
  }
  if (b === null || b === undefined) {
    return console.log("tham số không hợp lệ");
  }
  return console.log(a + b);
}

sum(1, 10);
sum();
sum();
