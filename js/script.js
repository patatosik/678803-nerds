var feedbackButton = document.querySelector(".feedback-comment-button");
var popup = document.querySelector(".modal-contacts-form");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nameField = popup.querySelector("[name=name]");
var emailField = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}


feedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    nameField.value = storage;
    emailField.focus();
  } else {
    nameField.focus();
  }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error")
});

form.addEventListener("submit", function(evt) {
  if (!nameField.value || !emailField.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField.value);
      localStorage.setItem("email", emailField.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error")
    }
}
});
