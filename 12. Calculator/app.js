function equalFunc() {
  let inputContent = document.getElementById("display-box");

  if (inputContent.value) {
    let result = eval(inputContent.value);
    inputContent.value = result;
  } else {
    inputContent == "";
  }
}
