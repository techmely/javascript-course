// Hãy viết hàm every() và some() thoả mãn:
// every(arr, func): trả về true khi tất cả các phần tử của mảng arr làm hàm func trả về true, ngược lại thì trả về false.
// some(arr, func): trả về true khi ít nhất một phần tử của mảng arr làm hàm func trả về true, ngược lại thì trả về false.

const result = [2, 4, 6, 8, 9].every((item) => item % 2 === 0);
const result2 = [1, 3, 9, 2].some((item) => item % 2 === 0);
console.log({ result });
console.log({ result2 });

const every = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) return false;
  }
  return true;
};

const result3 = every([2, 4, 6, 8, 10], (item) => item % 2 === 0);
console.log({ result3 });

const some = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) return true;
  }
  return false;
};

const result4 = every([1, 3, 9, 11], (item) => item % 2 === 0);
console.log({ result4 });
