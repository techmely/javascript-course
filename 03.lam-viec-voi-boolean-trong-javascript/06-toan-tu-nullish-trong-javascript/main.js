const result = a ?? b;

let name;

console.log(name ?? "Người dùng ẩn danh");

let fullName;
const nickName = "";

const displayName = fullName ?? nickName ?? "Người dùng ẩn danh";

console.log(displayName);

// Thứ tự ưu tiên của toán tử ??

let x;
let y;

const sum = (x ?? 2) * (y ?? 3);
console.log(sum);

let z = (x && 2) ?? 3;
console.log(z);
