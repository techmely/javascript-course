const arr1 = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e", "f"];

const result = arr1.forEach((item, index, arr) => {
  console.log({ item, index, arr });
});

console.log(result)