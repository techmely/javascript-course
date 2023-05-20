let arr1 = [1, 3, 2, 8, 7, 10, 4];

let arr2 = arr1.filter((item) => item < 8 && item > 3);

let boundary1 = {
  min: 1,
  max: 5,
};

let boundary2 = {
  min: 3,
  max: 8,
};

let arr3 = arr1.filter(function (item) {
  return item < this.max && item > this.min;
}, boundary1);

console.log(arr3);

let arr4 = arr1.filter(function (item) {
  return item < this.max && item > this.min;
}, boundary2);

console.log(arr4);

const obj = {}

console.log(typeof arr1);
console.log(Array.isArray(arr1));
console.log(typeof obj);
console.log(Array.isArray(obj));
