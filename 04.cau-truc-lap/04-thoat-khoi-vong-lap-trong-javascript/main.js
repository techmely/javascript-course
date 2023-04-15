console.log("for");
for (let count1 = 0; count1 <= 10; count1++) {
  console.log(count1);
  if (count1 === 5) break;
}

console.log("while do");
let count2 = 0;
while (count2 <= 10) {
  console.log(count2++);
  if (count2 === 7) break;
}

console.log("do while");
let count3 = 0;
do {
  console.log(count3++);
  if (count3 === 8) break;
} while (count3 <= 10);

// In ra bội số nhỏ nhất của số 7 bắt đầu từ số 8

for (let number = 8; ; number++) {
  if (number % 7 === 0) {
    console.log(number);
  }
}

let number2 = 8;
while (true) {
  if (number2 % 7 === 0) {
    console.log(number2);
    break;
  }
  number2++;
}

console.log("for");
for (let count4 = 0; count4 <= 10; count4++) {
  if (count4 === 5) continue;
  console.log(count4);
}

console.log("while do");
let count5 = 0;
while (count5 <= 10) {
  count5++;
  if (count5 === 7) continue;
  console.log(count5);
}

console.log("do while");
let count6 = 0;
do {
  count6++;
  if (count6 === 8) continue;
  console.log(count6);
} while (count6 <= 10);
