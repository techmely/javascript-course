function maxOf() {
  let max = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }

  return max;
}

console.log(maxOf(1, 2));
console.log(maxOf(1, 2, 5, 6, 8, 2, 45, 76, 2));
console.log(maxOf(1, 2, 544, 65, 78, 21, -9));

console.log(Math.max(1, 2, 544, 65, 78, 21, -9));

var message = "hello";

var showMessage = () => console.log("hello");
