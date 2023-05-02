// Chuyển đổi một chuỗi thành chuỗi dạng capitalize
// hellO worLD -> Hello World

const str = "a b c d e f";
const arrayStr = str.split(" ");
console.log(arrayStr.join(" "));

const toCapitalize = (str) => {
  str = str.toLowerCase();
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};

console.log(toCapitalize("hellO worLD"));
console.log(toCapitalize("I am the JS developer"));

// Chuyển đổi một số giây thành chuỗi định dạng giờ:phút:giây

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const remainingSeconds = seconds - hours * 3600 - minutes * 60;

  const formattedTime =
    (hours < 10 ? `0${hours}` : hours) +
    ":" +
    (minutes < 10 ? `0${minutes}` : minutes) +
    ":" +
    (remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds);
  return formattedTime;
};

console.log(formatTime(65));
console.log(formatTime(3665));
// Cần kiểm tra xem một chuỗi có phải là email hợp lệ hay không

const validateEmail = (email) => {
  const regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
};

console.log(validateEmail("thaycacac.official@gmail.com"));
console.log(validateEmail("techmely.creation@gmail.com"));
console.log(validateEmail("hoapnse05740@fpt.edu.vn"));
console.log(validateEmail("hoapn3@fpt.com"));
console.log(validateEmail("hoapn3@fpt.com"));
console.log(validateEmail("ho apn3@fpt.com"));
console.log(validateEmail("hoapn3fpt.com"));
