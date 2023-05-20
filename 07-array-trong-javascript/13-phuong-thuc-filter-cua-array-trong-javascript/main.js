let users = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Anna",
  },
];

let results = users.filter((item) => {
  return item.id <= 2;
});

let results2 = users.filter((item) => {
  return item.name === "John" || item.id === 3;
});

console.log(results);
console.log(results2);
