const loginModal = document.getElementById("loginModal");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const profileCards = document.querySelectorAll(".profile-card");

function openLoginModal() {
  loginModal.hidden = false;
  loginForm.reset();
  loginError.hidden = true;
  document.getElementById("username").focus();
}

function closeLoginModal() {
  loginModal.hidden = true;
}

profileCards.forEach((card) => {
  card.addEventListener("click", openLoginModal);
});

loginModal.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeLoginModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !loginModal.hidden) {
    closeLoginModal();
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "capynesh" && password === "capynesh") {
    window.location.href = "homepage.html";
    return;
  }

  loginError.hidden = false;
});
