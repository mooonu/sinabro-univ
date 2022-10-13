const form = document.querySelector("#form");
const input = document.querySelector("#form input:first-child");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME = "username";

const savedUsername = localStorage.getItem(USERNAME);

function paintGreeting(name) {
  form.classList.add(HIDDEN);
  greeting.classList.remove(HIDDEN);
  greeting.innerText = `Enjoy, ${name}`;
}

function onLoginSubmit(e) {
  const username = input.value;
  e.preventDefault();
  paintGreeting(username);
  localStorage.setItem(USERNAME, username);
}

if (savedUsername !== null) {
  paintGreeting(savedUsername);
} else {
  form.addEventListener("submit", onLoginSubmit);
}
