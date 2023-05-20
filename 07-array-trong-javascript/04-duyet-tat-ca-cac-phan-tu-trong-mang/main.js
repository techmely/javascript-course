// for

const arr1 = [1, 2, "a", "b", true, false];

for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}

console.log(arr1[7])

// for of
for(let value of arr1) {
  console.log(value)
}

// for in

for(let key in arr1) {
  console.log(key)
  console.log(arr1[key])
}