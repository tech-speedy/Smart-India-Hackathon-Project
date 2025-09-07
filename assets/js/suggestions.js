// suggestions.js – Task suggestion logic

function generateTasks() {
  const tasks = [
    "Revise sorting algorithms",
    "Watch a tutorial on thermodynamics",
    "Complete 2 aptitude questions",
    "Summarize NEP 2020 highlights",
    "Organize planner for the week"
  ];

  const shuffled = tasks.sort(() => 0.5 - Math.random()).slice(0, 5);
  localStorage.setItem("totalSuggestedTasks", shuffled.length);
  localStorage.setItem("completedTasks", JSON.stringify([]));

  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  shuffled.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="markTaskComplete('${task}')">✔</button>
    `;
    taskList.appendChild(li);
  });
}

function markTaskComplete(task) {
  let completed = JSON.parse(localStorage.getItem("completedTasks")) || [];
  if (!completed.includes(task)) {
    completed.push(task);
    localStorage.setItem("completedTasks", JSON.stringify(completed));
  }
}
