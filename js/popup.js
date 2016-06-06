var link = document.querySelector(".feedback-form");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var overlay = document.querySelector(".modal-overlay");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var storage1 = localStorage.getItem("username");
var storage2 = localStorage.getItem("email");
var storage3 = localStorage.getItem("message");

link.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay-show");
  popup.classList.add("modal-content-show");

  if (storage1) {
    username.value = storage1;
    email.focus();
  } else {
    username.focus();
  }

  if (storage2) {
    email.value = storage2;
    message.focus();
  } else {
    email.focus();
  }

  if (storage3) {
    message.value = storage3;
    message.focus();
  }

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if(!username.value || !email.value || !message.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("message", message.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-error");
    }
  }
});
