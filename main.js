var scrollbar = new SimpleBar(document.querySelector(".simplebar"));
var scrollbar1 = new SimpleBar(document.querySelector(".simplebar1"));
var scrollbar3 = new SimpleBar(document.querySelector(".simplebar2"));
// Xử lí scrolling
let scrollToTopBtn = document.querySelector(".lentop");
window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 500) {
    scrollToTopBtn.style.bottom = "4px"; /* Display the button */
  } else {
    scrollToTopBtn.style.bottom = "-50px"; /* Hide the button */
  }
});

// Xử lí dropdown
let dropButton1 = document.querySelector(
  ".header__bottom-list li:nth-child(2)"
);
let dropButton2 = document.querySelector(
  ".header__bottom-list li:nth-child(3)"
);
let drop1Content = document.querySelector(".container-fluid .drop-1");
let drop2Content = document.querySelector(".container-fluid .drop-2");

// Button 1
dropButton1.addEventListener("mouseover", () => {
  drop1Content.classList.add("open");
});
dropButton1.addEventListener("mouseleave", (event) => {
  if (
    !event.relatedTarget ||
    !event.relatedTarget.closest(".container-fluid .drop-1")
  ) {
    drop1Content.classList.remove("open");
  }
});
drop1Content.addEventListener("mouseleave", () => {
  drop1Content.classList.remove("open");
});

// Button 2
dropButton2.addEventListener("mouseover", () => {
  drop2Content.classList.add("open");
});
dropButton2.addEventListener("mouseleave", (event) => {
  if (
    !event.relatedTarget ||
    !event.relatedTarget.closest(".container-fluid .drop-2")
  ) {
    drop2Content.classList.remove("open");
  }
});
drop2Content.addEventListener("mouseleave", () => {
  drop2Content.classList.remove("open");
});
