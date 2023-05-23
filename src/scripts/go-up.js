const goTopBtn = document.querySelector(".go-up");


window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goUp);

function trackScroll() {

  const scrolled = window.pageYOffset;

  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {

    goTopBtn.classList.add("go-up-visible");
  } else {

    goTopBtn.classList.remove("go-up-visible");
  }
}

function goUp() {

  if (window.pageYOffset > 0) {
  
    window.scrollTo(0, -1000);
  }
}
