// pop
let arr1 = [1, 2, "a", "b", true, false];

console.log(arr1.pop())
console.log(arr1)

// push()

console.log(arr1.push(null))
console.log(arr1.push(undefined, "hello"))
console.log(arr1)

// shift

console.log(arr1.shift())
console.log(arr1)

// unshift

console.log(arr1.unshift(79885))
console.log(arr1)
console.log(arr1.unshift(() => console.log("hello"), 9785))
console.log(arr1)
