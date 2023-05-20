let str1 = "a,b,c,d,e,f,g,h,i";
let str2 = "a,b,c,d, e,f,g,h,i";
let str3 = "Lorem ipsum dolor sit amet, consectetur adip";

let arr1 = str1.split(",");
let arr2 = str2.split(", ");
let arr3 = str3.split(" ").map((item) => item.replace(",", ""));

console.log(arr1);
console.log(arr2);
console.log(arr3);


let str4 = arr1.join(" ")
let str5 = arr3.join("_")

console.log(str4)
console.log(str5)