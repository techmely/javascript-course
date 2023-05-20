let arr1 = [1, 2];
console.log(arr1);
let arr2 = arr1.concat([3, 4]);
console.log(arr2);
let arr3 = arr1.concat([3, 4], [5, 6]);
console.log(arr3);
let arr4 = arr1.concat([3, 4], [5, 6], 7, 8);
console.log(arr4);

// array like

let arrayLike = {
  0: "hello",
  length: 1,
  [Symbol.isConcatSpreadable]: true
}

console.log(arrayLike)

let arr5 = arr4.concat(arrayLike)
console.log(arr5)