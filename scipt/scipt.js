// Scrool UP
let btnScroll = document.querySelector(".btn_scrool");

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    btnScroll.classList.add("show");
  } else {
    btnScroll.classList.remove("show");
  }
};

btnScroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
