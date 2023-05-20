let arr1 = [1, 2, 3, 4, 5, 6, 7]; // 1,4,9,16,25,36,49

let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
  arr2.push(Math.pow(arr1[i], 2));
}

console.log(arr2);

let arr3 = arr1.map((item) => {
  return Math.pow(item, 3);
});

console.log(arr3);
