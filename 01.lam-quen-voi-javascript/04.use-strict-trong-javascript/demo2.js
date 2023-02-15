"use strict";
function myFunction() {
  var x = 10;
  return x + arguments[0];
}
myFunction(20); // Lỗi xảy ra, arguments không được sử dụng trong "use strict" mode
