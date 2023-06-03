const makeComputer = (type, brand, os, graphicCard) => {
  return {
    type,
    brand,
    os,
    graphicCard,
  };
};

let myComputer = makeComputer("laptop", "Sony", "Windows 7", "NVIDIA");

console.log(myComputer);
console.log(myComputer.type);

let obj = {
  var: 1,
  let: "a",
  for: null,
  while: {},
  0: "Zero" // "0"
};

console.log(obj)
console.log(obj.var);
console.log(obj.let);
console.log(obj.for);
console.log(obj.while);
console.log(obj.__proto__)

obj.__proto__ = {}
console.log(obj)