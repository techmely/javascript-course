let arr1 = []

arr1[1000] = "a"

console.log(arr1)

let arr2 = ["a", "b", "c"]

arr2.length = 2

console.log(arr2)

arr2.length = 5

console.log(arr2[2])
console.log(arr2)

let arr3 = new Array("a", "b", "c")

console.log(arr3)

let arr4 = new Array(3)
console.log(arr4)

let arr5 = new Array("3")
console.log(arr5)