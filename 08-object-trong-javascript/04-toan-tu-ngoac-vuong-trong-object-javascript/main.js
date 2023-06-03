let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

let os = "operating system"
console.log(myComputer[os]);

console.log(myComputer["graphic" + " " + "card"]);

console.log(myComputer.os);