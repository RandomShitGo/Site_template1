window.onload = function () {
  const state = {};
  const carouselList = document.querySelector(".carousel__list");
  const carouselItems = document.querySelectorAll(".carousel__item");
  const elems = Array.from(carouselItems);

  let autoSlideInterval;

  const update = function (newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove("carousel__item_active");

    [current, prev, next, first, last].forEach((item) => {
      var itemPos = item.dataset.pos;
      item.dataset.pos = getPos(itemPos, newActivePos);
    });

    resetAutoSlide();
  };

  const getPos = function (current, active) {
    const diff = current - active;
    if (Math.abs(current - active) > 2) {
      return -current;
    }
    return diff;
  };

  function autoSlide() {
    const current = elems.find((elem) => elem.dataset.pos == 0);
    const next = elems.find((elem) => elem.dataset.pos == 1) || elems[0]; 
    update(next);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 10000);
  }


  resetAutoSlide();

  carouselList.addEventListener("click", function (event) {
    var newActive = event.target;
    var isItem = newActive.closest(".carousel__item");

    if (!isItem || newActive.classList.contains("carousel__item_active")) {
      return;
    }
    update(newActive);
  });
};
