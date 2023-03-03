// Toán tử số học

console.log(5 + 2); // 7
console.log(5 - 2); //3
console.log(5 * 2); //10
console.log(5 / 2); //2.5
console.log(5 % 2); // 1
console.log(5 ** 2); // 25

// Toán tử ghép string +
console.log("5" + 2); // 52
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5
console.log("5a" % "2"); // NaN
console.log("5b" ** "2"); // NaN

console.log("hello" + "world!");
console.log(1 + "2"); // 12
console.log("1" + true); // 1true

// Toán tử chuyển đổi kiểu dữ liệu thành number +

console.log(+1); // 1
console.log(+true); // 1
console.log(+false); // 0
console.log(+"abcde"); // NaN
console.log(+""); // 0
console.log(+undefined); // NaN
console.log(+null); // 0
console.log(+{ x: 1 }); // NaN

// Toán tử gán

let k = 1;
const message = "Hello, world!";
let result = 1 + 2 + 3 + 4;
let y, z, t;
y = z = t = 10;

console.log(k, message, result, y, z, t);

let m = 1;

m = 5; // n = n + 5
console.log(m);

// Toán tử tăng 1 đơn vị và giảm 1 đơn vị

let n = 1;
n--;

console.log(n);

let a = 2;
let x = ++a; // a++; let x=a
console.log(a); // 3
console.log(x); // 3

let a2 = 2;
let x2 = a2++; // let x=a; a++
console.log(a2); // 3
console.log(x2); // 2

// Toán tử dấu phẩy

let a3 = 1;
let x3 = ((a3 = a3 + 1), a3 + 4);
console.log(a3); // 2
console.log(x3); // 6
