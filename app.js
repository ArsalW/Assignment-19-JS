// script.js

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  let tasks = [];

  // Add Task
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const task = {
        id: Date.now(),
        text: taskText,
      };
      tasks.push(task);
      taskInput.value = "";
      displayTasks();
    }
  });

  // Display Tasks
  function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="task-title">${task.text}</span>
        <div class="buttons">
          <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
          <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    });
  }

  // Edit Task
  window.editTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    const newText = prompt("Edit Task", task.text);
    if (newText !== null) {
      task.text = newText.trim() || task.text;
      displayTasks();
    }
  };

  // Delete Task
  window.deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    displayTasks();
  };
});
