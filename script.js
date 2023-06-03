const wrapper = document.querySelector(".wrapper");
const box = document.querySelector(".box");
const loginLink = document.querySelector(".login__register-paragraph_link");
const registerLink = document.querySelector(".register__login-paragraph_link");
const loginButton = document.querySelector(".header__navbar-button");
const closeButton = document.querySelector(".wrapper__icon");

loginLink.addEventListener("click", () => {
  box.classList.add("active");
});

registerLink.addEventListener("click", () => {
  box.classList.remove("active");
});

loginButton.addEventListener("click", () => {
  box.classList.add("popup");
});

closeButton.addEventListener("click", () => {
  box.classList.remove("popup");
});
