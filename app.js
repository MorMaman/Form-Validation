const span = document.getElementById("error-msg");

function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      if (input.type === "text" && valideteUser(input)) {
        span.innerText = "";
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && valideteEmail(input)) {
        span.innerText = "";
        nextSlide(parent, nextForm);
      } else if (input.type === "password" && validetePassword(input)) {
        span.innerText = "";
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function valideteUser(user) {
  if (user.value.length < 6) {
    error("rgb(189,87,87");
    errorMsg("Username must to contain minimum 6 characters");
  } else {
    error("rgb(87,189,130)");
    return true;
  }
}

function valideteEmail(email) {
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (validation.test(email.value)) {
    error("rgb(87,189,130)");
    return true;
  } else {
    errorMsg("Email address is not valid");
    error("rgb(189,87,87");
  }
}

function validetePassword(pass) {
  if (pass.value.length < 8) {
    error("rgb(189,87,87");
    errorMsg("Password must to contain minimum 8 characters");
  } else {
    error("rgb(87,189,130)");
    return true;
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}

function error(color) {
  document.body.style.backgroundColor = color;
}

function errorMsg(msg) {
  span.innerText = msg;
}
animatedForm();
