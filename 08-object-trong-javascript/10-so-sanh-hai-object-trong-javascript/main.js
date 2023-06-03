let a = 1;
let b = a;

console.log({
  a,
  b,
});

a = 2;

console.log({
  a,
  b,
});

let c = {
  x: 1,
  y: 2,
};
let d = c;

console.log(c, d);
c.x = 3;
console.log(c, d);

// So sánh 2 object bằng tham chiếu

let x = {};
let y = x;
console.log(y == x);
console.log(y === x);

let p = {};
let q = {};

console.log(q == p);
console.log(q === p);

console.log(Object.is(x, y));
console.log(Object.is(q, p));

// Shallow comparison

let point1 = { x: 1, y: 2 };
let point2 = { x: 1, y: 2 };
let point3 = { x: 2, y: 3 };

if (point2.x === point1.x && point2.y === point1.y) {
  console.log("point2 bằng point1");
} else {
  console.log("point2 không bằng point1");
}

if (point3.x === point1.x && point3.y === point1.y) {
  console.log("point3 bằng point1");
} else {
  console.log("point3 không bằng point1");
}

const isPointEqual = (p1, p2) => p1.x === p2.x && p1.y === p2.y;

console.log(isPointEqual(point1, point2));
console.log(isPointEqual(point1, point3));

const point4 = {
  x: 1,
  y: 2,
};

const point5 = {
  x: 1,
  y: 2,
  x: 4,
};

const point6 = {
  x: 1,
  y: 2,
  x: 4,
};

const isShallowEqual = (obj1, obj2) => {
  for (let prop in obj1) {
    if (obj1[prop] !== obj2[prop]) return false;
  }
  for (let prop in obj2) {
    if (obj2[prop] !== obj1[prop]) return false;
  }
  return true;
};

console.log(isShallowEqual(point1, point2));
console.log(isShallowEqual(point1, point3));
console.log(isShallowEqual(point4, point5));
console.log(isShallowEqual(point6, point5));

// deep comparison

let point7 = {
  x: 1,
  y: 2,
  metadata: {
    type: "point",
    children: {
      z: 3,
    },
  },
};
let point8 = {
  x: 1,
  y: 2,
  metadata: {
    type: "point",
    children: {
      z: 3,
    },
  },
};
let point9 = { x: 1, y: 2, metadata: { type: "circle" } };

console.log(isShallowEqual(point7, point8));

// Hàm kiểm tra một giá trị là object
function isObject(obj) {
  return obj != null && typeof obj === "object";
}

// Hàm so sánh sâu
function isDeepEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1); // trả về mảng các thuộc tính của obj1
  const keys2 = Object.keys(obj2); // trả về mảng các thuộc tính của obj2

  // nếu số lượng keys khác nhau thì chắc chắn khác nhau
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];

    // kiểm tra xem hai giá trị có cùng là object hay không
    const areObjects = isObject(val1) && isObject(val2);

    // nếu cùng là object thì phải gọi đệ quy để so sánh 2 object
    if (areObjects && !isDeepEqual(val1, val2)) {
      return false;
    }

    // nếu không cùng là object thì so sánh giá trị
    if (!areObjects && val1 !== val2) {
      return false;
    }
  }

  return true;
}

console.log("deep comparison", isDeepEqual(point7, point8));
console.log("deep comparison", isDeepEqual(point7, point9));
