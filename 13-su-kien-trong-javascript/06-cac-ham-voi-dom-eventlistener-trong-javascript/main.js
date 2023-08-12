const actionButton = document.getElementById("action-button");

const callAction1 = () => {
  alert("call action1");
};

const callAction2 = () => {
  alert("call action2");
};

// actionButton.onclick = callAction1;
// actionButton.onclick = callAction2;

actionButton.addEventListener("click", callAction1);
actionButton.addEventListener("click", callAction2);

const resizeWindow = () => {
  resize.innerText = Math.random();
};

const resize = document.getElementById("resize");
window.addEventListener("resize", resizeWindow);

actionButton.addEventListener("click", () => {
  window.removeEventListener("resize", resizeWindow);
});
