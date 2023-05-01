const message = "hello world";

console.log(message[0]);
console.log(message.charAt(0));
console.log(message[1]);
console.log(message.charAt(1));
console.log(message[message.length - 1]);
console.log(message.charAt(message.length - 1));
console.log(message[message.length]);
console.log(message.charAt(message.length));

// Duyệt hết các ký tự trong string

for (let i = 0; i < message.length; i++) {
  console.log(message[i]);
}

for (let i of message) {
  console.log(i);
}
