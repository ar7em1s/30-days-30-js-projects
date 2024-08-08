const scriptURL = "https://script.google.com/macros/s/AKfycbxW6ViIrSW-sUVYlv9mN0dXpk1vKq6iGQuE_0cXYyvzU-LpvvRYUdn2EHKl-cB8XEEY/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("message");
const emailError = document.getElementById("email-error");

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "Invalid email format!";

    setTimeout(function () {
      emailError.style.display = "none";
    }, 4000);
    return false;
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Success! Thank you for subscribing!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
