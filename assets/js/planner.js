// planner.js – Daily planner logic

function renderPlannerGoals() {
  const plannerGoals = JSON.parse(localStorage.getItem("plannerGoals")) || [];
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  plannerGoals.forEach((goal, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${goal.task}</span>
      <button onclick="markGoalComplete(${index})">✔</button>
    `;
    taskList.appendChild(li);
  });
}

function markGoalComplete(index) {
  const plannerGoals = JSON.parse(localStorage.getItem("plannerGoals")) || [];
  plannerGoals[index].completed = true;
  localStorage.setItem("plannerGoals", JSON.stringify(plannerGoals));
  renderPlannerGoals();
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlannerGoals();
});
