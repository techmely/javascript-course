// slice

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arr12 = arr1.slice();
console.log(arr12);

let arr13 = arr1.map((item) => item);
console.log(arr13);

let arr14 = arr1.concat();
console.log(arr14);

// for

let arr15 = [];
for (let i = 0; i < arr1.length; i++) {
  arr15.push(arr1[i]);
}
console.log(arr15);

let arr16 = [];
arr1.forEach((item) => arr16.push(item));
console.log(arr16);

// push

let arr17 = [];
arr17.push(...arr1);
console.log(arr17);

// spread operator

let arr18 = [...arr1, ...[10, 11]];
console.log(arr18);

let arr19 = Array.of(...arr1);
console.log(arr19);
