function equalFunc() {
  let inputNumbers = document.getElementById("display-box");

  if (inputNumbers.value) {
    let result = eval(inputNumbers.value);

    inputNumbers.value = result;
  } else {
    inputNumbers == "";
  }
}
