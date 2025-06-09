<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 7 DOM Assignment</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    .task {
      margin-bottom: 30px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin: 5px 0;
    }
    .delete-btn {
      margin-left: 10px;
      color: red;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <!-- Task 1: DOM Selection -->
  <div class="task">
    <h1 id="main-heading">Welcome!!</h1>
    <p id="main-para">Click the button to change this text.</p>
    <button onclick="changeText()">Click Me</button>
  </div>

  <!-- Task 2: Input and Output -->
  <div class="task">
    <input type="text" id="name-input" placeholder="Enter your name" />
    <button id="submit-btn">Submit</button>
    <p id="welcome-msg"></p>
  </div>

  <!-- Task 3: Style Manipulation -->
  <div class="task">
    <button onclick="changeBackground()">Change Background</button>
  </div>

  <!-- Task 4: To-Do List App -->
  <div class="task">
    <h2>To-Do List</h2>
    <input type="text" id="task-input" placeholder="Enter a task" />
    <button onclick="addTask()">Add</button>
    <ul id="task-list"></ul>
  </div>

  <!-- JavaScript -->
  <script>
    // Task 1: Change text on button click
    function changeText() {
      document.getElementById("main-heading").textContent = "Heading Changed!";
      document.querySelector("#main-para").textContent = "The paragraph text is also changed.";
    }

    // Task 2: Display welcome message
    document.getElementById("submit-btn").addEventListener("click", () => {
      const name = document.getElementById("name-input").value;
      const message = name ? `Welcome, ${name}!` : "Please enter your name.";
      document.getElementById("welcome-msg").textContent = message;
    });

    // Task 3: Change background color
    function changeBackground() {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    }

    // Task 4: To-Do List App
    function addTask() {
      const taskInput = document.getElementById("task-input");
      const taskText = taskInput.value.trim();

      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteBtn = document.createElement("span");
      deleteBtn.textContent = "❌";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => li.remove();

      li.appendChild(deleteBtn);
      document.getElementById("task-list").appendChild(li);

      taskInput.value = "";
    }
  </script>
</body>
</html>
