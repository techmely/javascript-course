let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
console.log(matrix[0][0]);

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

console.log(matrix[0].toString())

console.log([] + 3) // ""
console.log([1] + 3) // "1" + 3
console.log([1,2] + 3) // "1,2" + 3