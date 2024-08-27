let selectField = document.getElementById("selectorField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");

selectField.onclick = function () {
  list.classList.toggle("hide");
};

for (option of options) {
  option.onclick = function () {
    let selectedIcon = this.querySelector("img").src;
    let selectedText = this.querySelector("p").textContent;

    selectText.innerHTML = `<img src="${selectedIcon}" alt="${selectedText}" /> ${selectedText}`;

    list.classList.toggle("hide");
  };
}
