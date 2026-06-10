const textInput = document.querySelector("#inp");
const addBtn = document.querySelector("#inp-btn");
const taskContainer = document.querySelector(".tasks");
const span = document.querySelector(".details span");

let totalTask = 0;
addBtn.addEventListener("click", () => {
  const taskText = textInput.value.trim();
  if (taskText == "") {
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    label.classList.toggle("completed", checkbox.checked);
  });
  label.appendChild(checkbox);
  label.append(taskText);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "×";
  deleteBtn.classList.add("btn");
  deleteBtn.addEventListener("click", () => {
    task.remove();
    totalTask--;
    span.textContent = totalTask;
  });
  task.append(label, deleteBtn);
  taskContainer.append(task);
  totalTask++;
  span.textContent = totalTask;
  textInput.value = "";
});
