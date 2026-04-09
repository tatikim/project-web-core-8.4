document.addEventListener("DOMContentLoaded", () => {
  //мобильный 
  if (window.innerWidth < 768) {
    new Swiper(".swiper", {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // планшет
  const showBtn = document.getElementById("showBtn");
  const hideBtn = document.getElementById("hideBtn");
  const tableBlock = document.querySelector(".table__hide");

  if (showBtn && hideBtn && tableBlock) {
    showBtn.addEventListener("click", () => {
      tableBlock.classList.add("show");
      showBtn.classList.add("hidden");
      hideBtn.classList.remove("hidden");
    });

    hideBtn.addEventListener("click", () => {
      tableBlock.classList.remove("show");
      hideBtn.classList.add("hidden");
      showBtn.classList.remove("hidden");
    });
  }

  // ноутбук
  const showBtn2 = document.getElementById("showBtn2");
  const hideBtn2 = document.getElementById("hideBtn2");
  const laptopBlock = document.querySelector(".laptop__hide");

  if (showBtn2 && hideBtn2 && laptopBlock) {
    showBtn2.addEventListener("click", () => {
      laptopBlock.classList.add("show");
      showBtn2.classList.add("hidden2");
      hideBtn2.classList.remove("hidden2");
    });

    hideBtn2.addEventListener("click", () => {
      laptopBlock.classList.remove("show");
      hideBtn2.classList.add("hidden2");
      showBtn2.classList.remove("hidden2");
    });
  }
});
