document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      // Add form submission logic here
      alert("Message sent successfully.");
      form.reset();
    }
  });

  function validateForm() {
    let isValid = true;
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    if (name.value.trim() === "") {
      isValid = false;
      showError(name, "Please enter your name.");
    }

    if (email.value.trim() === "") {
      isValid = false;
      showError(email, "Please enter your email address.");
    } else if (!isValidEmail(email.value)) {
      isValid = false;
      showError(email, "Please enter a valid email address.");
    }

    if (subject.value.trim() === "") {
      isValid = false;
      showError(subject, "Please enter a subject.");
    }

    if (message.value.trim() === "") {
      isValid = false;
      showError(message, "Please enter your message.");
    }

    return isValid;
  }

  function showError(input, message) {
    const formGroup = input.parentElement;
    const error =
      formGroup.querySelector(".error-message") ||
      document.createElement("div");
    error.className = "error-message";
    error.textContent = message;
    formGroup.appendChild(error);
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
