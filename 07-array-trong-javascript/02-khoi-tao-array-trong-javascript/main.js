// array literal

let arr1 = []
let arr2 = ["a", "b", "c", "d", "e", "f"]
let arr3 = [true, "hello", 12]

console.log(arr1)
console.log(arr2)
console.log(arr3)

// array constructor

let arr4 = new Array(1,2,3)
let arr5 = new Array(3)
let arr6 = new Array("3")

console.log(arr4)
console.log(arr5)
console.log(arr6)

// spread operator

let arr7 = [...new Array(1, 2, 3), ...[4, 5, 6]];

console.log(arr7);

// Array.prototype.fill

let arr8 = Array(5).fill(22);

console.log(arr8);

// Array.of

let arr9 = Array.of(5)
let arr10 = Array(5)

console.log(arr9)
console.log(arr10)