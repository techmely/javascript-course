let arr1 = [1, 0, 1, false];

console.log(arr1.indexOf(0));
console.log(arr1.indexOf(false));
console.log(arr1.indexOf(1));
console.log(arr1.indexOf(1, 2));
console.log(arr1.indexOf(null));

console.log(arr1.lastIndexOf(0));
console.log(arr1.lastIndexOf(false));
console.log(arr1.lastIndexOf(1));
console.log(arr1.lastIndexOf(1, 2));

console.log(arr1.includes(0));
console.log(arr1.includes(false));
console.log(arr1.includes(1));
console.log(arr1.includes(null));
console.log(arr1.includes("hello"));

let arr2 = [NaN];

console.log(arr2.indexOf(NaN));
console.log(arr2.lastIndexOf(NaN));
console.log(arr2.includes(NaN));
