// indexOf

const str = "I am a js dev";

console.log(str.indexOf("js"))
console.log(str.indexOf("JS"))
console.log(str.indexOf("a"))
console.log(str.indexOf("a", 3))

let pos = 0

while(true) {
  let foundPosition = str.indexOf("a", pos)
  if(foundPosition === -1) break

  console.log(foundPosition)
  pos = foundPosition + 1
}

// lastIndexOf

console.log(str.lastIndexOf("js"))
console.log(str.lastIndexOf("JS"))
console.log(str.lastIndexOf("a"))
console.log(str.lastIndexOf("a", 3))

// includes

console.log(str.includes("js"))
console.log(str.includes("JS"))

// startsWith và endsWith

console.log(str.startsWith("I am"))
console.log(str.startsWith("js"))
console.log(str.endsWith("js dev"))
console.log(str.endsWith("js"))

// slice

console.log(str.slice(2,4))
console.log(str.slice(2))
console.log(str.slice(-3, -1))

// substring

console.log(str.substring(2, 4));
console.log(str.substring(2));
console.log(str.substring(4, 2));

// substr 

console.log(str.substr)