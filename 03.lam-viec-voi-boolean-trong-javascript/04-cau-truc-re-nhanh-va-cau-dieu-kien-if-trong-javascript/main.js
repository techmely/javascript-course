// Câu lệnh điều kiện if

// if(điều kiện) {
//   thực thi câu lệnh
// }

const x = 3;

if (x % 2 === 0) {
  console.log(`số x là ${x}`);
  console.log("x là số chẵn");
}

if (0) {
  console.log("thực hiện câu lệnh");
}

const isEven = x % 2 === 0;
if (isEven) {
  console.log("x là số chẵn");
}

// Mệnh đề else

if (x % 2 === 0) {
  console.log("x là số chẵn");
} else {
  console.log("x là số lẻ");
}

// Nhiều mệnh đề else if nối tiếp

const age = 20;

if (age < 18) {
  console.log("Too young");
} else if (age > 60) {
  console.log("Too old");
} else {
  console.log("OK");
}

// Toán tử 3 ngôi

const enoughAge = age < 18 ? "Too young" : "OK";

console.log(enoughAge);

const message = age < 18 ? "Too young" : age > 60 ? "To old" : "OK";

console.log(message);

// Cho người dùng nhập 2 số in ra số lớn hơn

const getMax = (a, b) => {
  if (a > b) return a;
  else return b;
};

const value1 = prompt();
const value2 = prompt();

console.log("Giá trị lớn hơn là", getMax(value1, value2));

// Cho người dùng nhập vào 3 số và kiểm tra xem 3 số đó có thoả mãn là một tam giác hay không

const isTriangle = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Không thoả mãn");
    return;
  } else {
    if (a + b > c && a + c > b && c + b > a) {
      console.log("Thoả mãn");
    } else {
      console.log("Không thoả mãn");
    }
  }
};

const value3 = prompt();
const value4 = prompt();
const value5 = prompt();

isTriangle(+value3, +value4, +value5);
