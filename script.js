// Task 1: Change heading and paragraph text
function changeText() {
  document.getElementById("main-heading").textContent = "Heading Changed!";
  document.getElementById("main-para").textContent = "Paragraph text updated!";
}

// Task 2: Show welcome message
document.getElementById("submit-btn").addEventListener("click", () => {
  const name = document.getElementById("name-input").value;
  document.getElementById("welcome-msg").textContent = name
    ? `Welcome, ${name}!`
    : "Please enter your name.";
});

// Task 3: Change background color
function changeBackground() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// Task 4: Add and delete tasks
function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = " ❌";
  deleteBtn.style.color = "red";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById("task-list").appendChild(li);

  taskInput.value = "";
}
