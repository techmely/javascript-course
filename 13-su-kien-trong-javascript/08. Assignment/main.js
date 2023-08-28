const addButton = document.getElementById("addButton");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button>Delete</button>
    `;
    taskList.appendChild(taskItem);

    newTaskInput.value = "";
    const deleteButton = taskItem.querySelector("button");
    deleteButton.addEventListener("click", deleteTask);

    const checkbox = taskItem.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", toggleTask);
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}

function toggleTask(event) {
  const taskText = event.target.nextElementSibling;
  if (event.target.checked) {
    taskText.style.textDecoration = "line-through";
  } else {
    taskText.style.textDecoration = "none";
  }
}
