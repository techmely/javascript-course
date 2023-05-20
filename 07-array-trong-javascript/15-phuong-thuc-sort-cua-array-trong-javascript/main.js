let arr1 = ["John", "Barent", "Anna", "Charles", "Leon"];

console.log(arr1);

let arr2 = arr1.sort();

console.log(arr2);
console.log(arr1);

let arr3 = [2, 1000, 10, 3, 23, 12, 30, 21];

arr3.sort();

console.log(arr3);

arr3.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(arr3);

let arr4 = [2, 1000, 10, 3, 23, 12, 30, 21];

arr4.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

console.log(arr4);

let arr5 = [2, 1000, 10, 3, 23, 12, 30, 21];

arr5.sort((a, b) => a - b);

console.log(arr5);

let arr6 = ["communiqué", "zèbre", "adieu", "éclair"];

arr6.sort((a, b) => a.localeCompare(b));

console.log(arr6);

let users = [
  {
    name: "a",
    age: 21,
  },
  {
    name: "c",
    age: 23,
  },
  {
    name: "b",
    age: 22,
  },
];

users.sort((user1, user2) => user1.age - user2.age);

console.log(users);

let arr7 = ["Bob", "bakshi", "adam", "Maya", "carl"];

console.log(
  arr7.sort((a, b) => {
    const left = a.toLowerCase();
    const right = b.toLowerCase();
    return left === right ? 0 : left > right ? 1 : -1;
  })
);
