const array = ["a", "b", "c", "d", "e", "f"]

for (let prop in array) {
  console.log(array[prop]);
}

for(let prop in 'string') {
  console.log(prop)
}

const person = {
  age: 24,
  name: 'thaycacac',
  code: 'SE05740'
}

for (let prop in person) {
  console.log(person[prop])
}

// for (let prop in new Set(['a', 'b', 'c', 'd', 'e'])) {
//   console.log(prop)
// }

for (let value of array) {
  console.log(value);
}

for(let value of 'string') {
  console.log(value)
}

// for (let value of person) {
//   console.log(value)
// }

for (let value of new Set(['a', 'b', 'c', 'd', 'e'])) {
  console.log(value)
}