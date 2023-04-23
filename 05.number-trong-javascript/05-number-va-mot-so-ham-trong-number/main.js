const a = 1234;

const b = new Number(1234);

console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);

const c = Number(1234);

console.log(c);

console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("thaycacac"));
console.log(Number("1000"));

console.log("parseInt")
console.log(parseInt(true))
console.log(parseInt("10thaycacac"))
console.log(parseInt("1000"))

console.log("parseFloat")

console.log(parseFloat(true))
console.log(parseFloat("10.1234thaycacac"))
console.log(parseFloat("1000"))

console.log("toString");

let number = 1234.56789;

console.log(number.toString());
console.log(number.toFixed(4));
console.log(number.toPrecision(6));
console.log((2 + 4).valueOf());
