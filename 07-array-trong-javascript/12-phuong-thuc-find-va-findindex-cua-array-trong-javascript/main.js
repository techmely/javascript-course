let users = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Alex",
  },
  {
    id: 3,
    name: "Anna",
  },
];

const user = users.indexOf({
  id: 2,
  name: "Alex",
});

console.log(user);

const user1 = users.find((item) => {
  return item.name === "Anna";
});

const userIndex = users.findIndex((item) => {
  return item.name === "Anna";
});

console.log(user1);
console.log(userIndex);
