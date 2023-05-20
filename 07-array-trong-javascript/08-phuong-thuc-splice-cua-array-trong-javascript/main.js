let arr1 = ["a", "b", "c"];
console.log(arr1)
arr1.splice(1, 1)
console.log(arr1)
console.log(arr1.splice(1, 1, "d", "e"))
console.log(arr1)
arr1.splice(1, 0, "b", "c")
console.log(arr1)
arr1.splice(-1, 1, "f", "g")
console.log(arr1)

let arr2 = ["a", "b", "c"]
delete arr2[1]
console.log(arr2)
