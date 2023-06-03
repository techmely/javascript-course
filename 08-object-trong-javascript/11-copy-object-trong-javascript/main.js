let point1 = { x: 1, y: 2 };
let point2 = point1;

point1.x = 3;

console.log(point1);
console.log(point2);

let point3 = {};

for (let key in point1) {
  point3[key] = point1[key];
}

point1.x = 4;

console.log(point1);
console.log(point2);
console.log(point3);

// Object.assign(dest, ...)

let point5 = {
  y: 3,
  z: 4,
};

let point4 = Object.assign({}, point1, point5);
point1.x = 5;
console.log("object.assign", point4);

let point6 = {
  ...point1,
  ...point5,
};

point1.x = 6;
console.log("spread operator", point6);

// Shallow copy

let point7 = {
  x: 1,
  y: 2,
  metadata: {
    type: "point",
  },
  displayName: () => {
    console.log("hello");
  },
};

let point8 = { ...point7 };
point7.x = 3;
point7.metadata.type = "circle";

console.log("point8", point8);

// Deep copy

let jsonPoint7 = JSON.stringify(point7);
let point9 = JSON.parse(jsonPoint7);

point7.metadata.type = "square";

console.log("point9", point9);
