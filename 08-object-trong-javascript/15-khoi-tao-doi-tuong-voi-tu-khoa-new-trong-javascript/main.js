function Point(x, y) {
  if (!new.target) {
    return new Point(x, y);
  }
  // this = {}
  this.x = x;
  this.y = y;

  // return this
}

let root = new Point(0, 0);
let root3 = new Point(1, 2);
let root4 = new Point(3, 4);

let root2 = {
  x: 0,
  y: 0,
};

console.log(root, root.x, root.y);
console.log(root2, root2.x, root2.y);
console.log(root3, root3.x, root3.y);
console.log(root4, root4.x, root4.y);

let root5 = new (function () {
  this.x = 1;
  this.y = 2;
})();

console.log(root5, root5.x, root5.y);

let root6 = Point(5, 6);
console.log(root6);

function Point2(x, y) {
  // this = {}
  this.x = x;
  this.y = y;

  this.sum = function() {
    return this.x + this.y
  }
  // return this
  return 1
}

let root7 = new Point2(3, 4);
console.log(root7.sum());
