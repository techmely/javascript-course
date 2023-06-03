let myComputer = {
  type: "laptop",
  brand: "Sony",
  "operating system": "Windows 7",
  "graphic card": "NVIDIA",
};

for(let key in myComputer) {
  console.log({
    key,
    value: myComputer[key]
  })
}
