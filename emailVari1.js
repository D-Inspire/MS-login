const span = document.querySelectorAll("body #sp span");
const userEmail = localStorage.getItem("email");

span.forEach((m) => m.textContent = userEmail);
