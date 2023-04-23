// Viết một hàm readNumber thực hiện yêu cầu
// - Dùng hàm prompt hỏi người dùng nhập vào số
// - Nếu số mà người nhập và là một số bình thường trả về số đó
// - Nếu không thì bắt người dùng nhập lại

const readNumber = () => {
  while (true) {
    let n = prompt("Nhập vào số");
    if (n === "" || n === null || n === undefined || !isFinite(n)) {
      continue;
    }
    return +n;
  }
};

const number = readNumber();

console.log(number);

// Viết chương trình tính tổng tất cả các số nguyên tố
// nhỏ hơn một số cho trước
// Số nguyên tố chia hết cho 1 và chính nó && bắt đầu từ số 2

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const sumPrimes = (n) => {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumPrimes(10));

// Viết chương trình tìm số đảo ngược của một số nguyên
// 12345 => 54321

const reverseNumber = (n) => {
  let reversed = 0;
  while (n !== 0) {
    const digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.trunc(n / 10);
  }
  return reversed;
};

console.log(reverseNumber(12345));
