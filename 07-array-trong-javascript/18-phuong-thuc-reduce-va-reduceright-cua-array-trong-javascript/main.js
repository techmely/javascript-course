let arr1 = [1, 2, 3, 4, 5];
let result = arr1.reduce((sum, current) => sum + current, 5);
console.log(result);
const list = [...new Array(100000).keys()];

// for
console.time("for");
let sum1 = 0;
for (let i = 0; i < list.length; i++) {
  sum1 += list[i];
}

console.log(sum1);
console.timeEnd("for");

// map
console.time("map");
let sum2 = 0;
list.map((item) => (sum2 += item));
console.log(sum2);
console.timeEnd("map");

// reduce
console.time("reduce");
let sum3 = list.reduce((sum, current) => sum + current, 0);
console.log(sum3);
console.timeEnd("reduce");
