var elModalOpenButton = document.querySelector(".btn-menu");
var elModalOpenlink = document.querySelector(".header-inner");


elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("header-inner--active");
});