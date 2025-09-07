// main.js – Global utilities and dashboard interactions

document.addEventListener("DOMContentLoaded", () => {
  console.log("EduPulse loaded");

  // Example: Highlight active nav link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});