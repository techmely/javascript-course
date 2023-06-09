// Viết hàm sumInput thực hiện các yêu cầu sau:

// Sử dụng hàm prompt để yêu cầu người dùng nhập vào các số và lưu vào một mảng.
// Dừng hỏi người dùng khi giá trị nhập vào không phải là số bình thường.
// Tính và in ra tổng các số người dùng nhập.

const sumInput = () => {
  const arr = [];

  while (true) {
    let n = prompt("Nhập vào một số:", 0);

    if (n === "" || n === null || n === undefined || !isFinite(n)) {
      break;
    }

    arr.push(+n);
  }

  let sum = 0;

  arr.forEach((item) => (sum += item));

  return sum;
};

console.log(sumInput());
