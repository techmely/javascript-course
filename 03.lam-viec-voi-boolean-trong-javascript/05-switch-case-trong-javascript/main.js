// Lệnh switch case

const x = 2 + 3 + 1;
const y = 1;

switch (x) {
  case y + 3:
    console.log("Nhỏ hơn");
    break;
  case y + 4:
    console.log("Bằng");
    break;
  case y + 5:
    console.log("Lớn hơn");
    break;
  default:
    console.log("Không xác định");
}

const n = 4;
switch (n) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("Đi làm");
    break;
  case 7:
  case 8:
    console.log("Được nghỉ");
    break;
  default:
    console.log("Không xác định");
}
