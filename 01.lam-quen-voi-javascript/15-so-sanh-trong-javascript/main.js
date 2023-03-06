// Toán tử so sánh là gì

let a = 1;
let b = 2;

console.log(a > b); // so sánh lớn hơn //false
console.log(a < b); // so sánh lớn hơn // true
console.log(a >= b); // so sánh lớn hơn hoặc bằng // false
console.log(a <= b); // so sánh nhỏ hơn hoặc bằng // true
console.log(a == b); // so sánh bằng không nghiêm ngặt // false
console.log(a === b); // so sánh bằng nghiêm ngặt // false
console.log(a != b); // so sánh khác không nghiêm ngặt // true
console.log(a !== b); // so sánh khác nghiêm ngặt // true

// So sánh string trong javascript

console.log("A" < "Z") //true
console.log("Small" < "Smart") //true
console.log("Big" < "BigBang") // true

// So sánh khác kiểu dữ liệu trong javascript

console.log("5" > 4); // true
console.log("01" == 1); // true
console.log("11" == 1); //false
console.log(true == 1); // true
console.log(false == 0); // true
console.log("" == 0); // true
console.log("0" == 0); // true
console.log("" == "0") // false
console.log(false == "") // true

// So sánh nghiêm ngặt

console.log("" == 0); // true
console.log("" === 0); // false
console.log("" != 0); // false
console.log("" !== 0); // true

console.log(typeof null)
console.log(typeof undefined)
console.log(null === undefined) // false
console.log(null == undefined) // true

console.log(null > undefined); // false
console.log(null < undefined); // false
console.log(null >= undefined); // false
console.log(null <= undefined); // false

// So sánh null với 0

console.log(null > 0); // false (1)
console.log(null >= 0); // true (2)
console.log(null == 0); // false (3)

// So sánh undefined với 0

console.log(undefined > 0); // false (1)
console.log(undefined >= 0); // false (2)
console.log(undefined == 0); // false (3)

// Thứ tự ưu tiên của các toán tử so sánh

console.log(3>2>1)// false