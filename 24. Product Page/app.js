let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");
let order = document.getElementById("order");

btn[0].onclick = function () {
  productImg.src = "images/image1.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  productImg.src = "images/image2.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  productImg.src = "images/image3.png";
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};

function placeOrder() {
  order.innerHTML = "Thank you! Your order has been placed!";
  order.classList.add("visible");

  setTimeout(function () {
    order.classList.remove("visible");
  }, 6000);
}

function addToCart() {
  order.innerHTML = "The product is added to your cart!";
  order.classList.add("visible");

  setTimeout(function () {
    order.classList.remove("visible");
  }, 6000);
}
