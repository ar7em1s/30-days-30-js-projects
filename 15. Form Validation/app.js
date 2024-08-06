let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required!";
    return false;
  }

  if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
    nameError.innerHTML = "Full name is required!";
    return false;
  }

  nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required!";
    return false;
  }

  if (!phone.match(/^[0-9]*$/)) {
    phoneError.innerHTML = "Phone should be only numbers!";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone should be 10 digits!";
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  }

  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Invalid email format!";
    return false;
  }

  emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  return true;
}
