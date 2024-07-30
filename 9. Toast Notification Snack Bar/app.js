let toastBox = document.getElementById("toast-box");
let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submited!`;
let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> There was an error while submitting!`;
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input!`;

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  } else if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
