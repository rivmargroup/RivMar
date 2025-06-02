document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const createBtn = document.getElementById("createAccountBtn");
  const backBtn = document.getElementById("backBtn");
  const nameFields = document.getElementById("nameFields");

  let creatingAccount = false;

  createBtn.addEventListener("click", () => {
    nameFields.style.display = "block";
    loginBtn.style.display = "none";
    backBtn.style.display = "block";
    creatingAccount = true;
  });

  backBtn.addEventListener("click", () => {
    nameFields.style.display = "none";
    loginBtn.style.display = "block";
    backBtn.style.display = "none";
    creatingAccount = false;
  });

  loginBtn.addEventListener("click", () => {
    alert("Logging in...");
  });

  // 👉 Código del ícono del menú
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
  });
});
