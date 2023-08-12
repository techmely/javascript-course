const actionButton = document.getElementById("action-button");

actionButton.addEventListener("click", () => {
  alert("call action");
});

actionButton.addEventListener("mousemove", () => {
  actionButton.style.backgroundColor = "red";
});

actionButton.addEventListener("mouseout", () => {
  actionButton.style.backgroundColor = "white";
});

const nameInput = document.getElementById("name");

nameInput.addEventListener("change", (event) => {
  nameInput.value = event.target.value.toUpperCase();
});
