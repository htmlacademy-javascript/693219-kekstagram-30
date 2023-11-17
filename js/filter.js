import { renderPhoto } from "./render-photo.js";

const filterElement = document.querySelector(".img-filters");
const filterForm = document.querySelector(".img-filters__form");

export const getFilters = (images) => {
  return {
    default: images,
    random: images.slice(0, 10),
    discussed: [...images].sort(
      (a, b) => b.comments.length - a.comments.length
    ),
  };
};

export const loadFilters = (images) => {
  filterElement.style.opacity = "1";

  const a = getFilters(images);

  filterForm.addEventListener("click", (evt) => {
    document
      .querySelector(".img-filters__button--active")
      .classList.remove("img-filters__button--active");
    evt.target.classList.add("img-filters__button--active");

    document.querySelectorAll(".picture").forEach((element) => {
      element.remove();
    });
    console.log(evt.target.id.replace("filter-", ""));
    renderPhoto(a[evt.target.id.replace("filter-", "")]);
  });
};
