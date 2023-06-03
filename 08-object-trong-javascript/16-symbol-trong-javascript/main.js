let myId = Symbol("id");
console.log(myId);

let myId1 = Symbol("id");
let myId2 = Symbol("id");
console.log(myId1 == myId2);
console.log(myId1 === myId2);

let id1 = Symbol("id");

let id2 = Symbol.for("id");

let id3 = Symbol.for("id");

let key1 = Symbol.keyFor(id1);
let key2 = Symbol.keyFor(id2);
let key3 = Symbol.keyFor(id3);

console.log(id1 === id2);
console.log(id3 === id2);

console.log({
  key1,
  key2,
  key3,
});

const obj = {
  [id1]: "abcde",
  [id2]: "fhgik",
  x: 1,
  y: 2,
};

console.log(Object.getOwnPropertySymbols(obj))

for (let i in obj) {
  console.log(i);
}
console.log(obj);
