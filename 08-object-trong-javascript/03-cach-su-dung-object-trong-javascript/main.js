let myComputer = {
  type: "laptop",
  brand: "Sony",
  os: "Windows 7",
  graphicCard: "NVIDIA",
};

console.log(myComputer.type);
console.log(myComputer.brand);
console.log(myComputer.os);
console.log(myComputer.graphicCard);

console.log(myComputer["type"]);
console.log(myComputer["brand"]);
console.log(myComputer["os"]);
console.log(myComputer["graphicCard"]);

// _ , $

let myFriendComputer = {
  type: "laptop",
  $brand: "LG",
  _os: "Windows 10",
  graphicCard: "NVIDIA",
};

console.log(myFriendComputer.$brand);
console.log(myFriendComputer._os);

let mySecondComputer = {
  type: "laptop",
  "%brand": "Dell",
  "&os": "Windows 11",
  "graphic card": "NVIDIA",
};

// console.log(mySecondComputer["%brand"]);
// console.log(mySecondComputer["&os"]);
// console.log(mySecondComputer["graphic card"]);

// Thay đổi giá trị thuộc tính

myComputer.type = "Desktop";
myComputer.os = "Ubuntu";
console.log(myComputer);

myComputer["brand"] = "Samsung";
console.log(myComputer);

// Thêm thuộc tính

myComputer.status = "sleep";
console.log(myComputer);

myComputer["it is good"] = true;
console.log(myComputer);

// Xoá thuộc tính

delete myComputer.graphicCard;
console.log(myComputer);

delete myComputer["it is good"];
console.log(myComputer);

console.log(myComputer.graphicCard);
