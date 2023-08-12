const grandParent = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener(
  "click",
  () => {
    alert("Grandparent");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    alert("Parent");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    alert("Child");
  },
  true
);
