// Toán tử OR

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(true || true || true); // true
console.log(true || false || true); // true
console.log(false || true || false); // true
console.log(false || false || false); // false

console.log(1 || 0); // 1
console.log(null || 2); // 2
console.log("" || undefined || 0 || 10); // 10
console.log(null || 100 || 5 || undefined); // 100
console.log("" || 0 || null); // null

// Ví dụ bài toán hiển thị tên người dùng trên trang web, biết thông tin người dùng có hai trường liên quan đến tên là fullName và nickName. Ưu tiên hiển thị tên fullName trước. Nếu fullName rỗng thì hiển thị nickName. Nếu nickName cũng rỗng thì hiển thị "Người dùng ẩn danh".

const fullName = "HoaPN";
const nickName = "Thaycacac";
const displayName = fullName || nickName || "Người dùng ẩn danh";
console.log(displayName);

true || console.log("Thực hiện câu lệnh 1");
false || console.log("Thực hiện câu lệnh 2");

// Toán tử AND

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true && true && true); // true
console.log(true && false && true); // false
console.log(false && true && false); // false
console.log(false && false && false); // false

console.log(1 && 0); // 0
console.log(null && 2); // null
console.log(10 && "" && undefined && 0); // ""
console.log("n" && undefined && 10); // undefined
console.log(10 && "a"); // "a"

true && console.log("thực hiện câu lệnh 1");
false && console.log("thực hiện câu lệnh 2");

// Toán tử NOT

console.log(!true); // false
console.log(!false); // true

console.log(!"hello"); // false
console.log(!100); // false
console.log(!""); // true
console.log(!0); // true
console.log(!null); // true
console.log(!undefined); // true

console.log(!!"hello"); // true
console.log(!!100); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!null); // false
console.log(!!undefined); // false

// Thứ tự ưu tiên của toán tử logic
// Toán tử số học > Toán tử so sánh > Toán tử logic
// ! > && > ||

console.log(1 + 2 || (!"javascript" && 4 > 5));
// 3 || (!"javascript" && 4 > 5)
// 3 || (!"javascript" && false)
// 3 || false && false
// 3 || false
// 3
