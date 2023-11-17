import { renderPhoto } from "./render-photo.js";
import { debounce } from "./util.js";

const RERENDER_DELAY = 500;

const filterElement = document.querySelector(".img-filters");
const filterButtons = document.querySelectorAll(".img-filters__button");
let filters;

const getFilters = (images) => {
  return {
    default: images,
    random: images.slice(0, 10),
    discussed: [...images].sort(
      (a, b) => b.comments.length - a.comments.length
    ),
  };
};

const reRender = (evt, filterName) => {
  renderPhoto(filters[filterName]);
};

export const showFilters = (images) => {
  filterElement.style.opacity = "1";
  filters = getFilters(images);

  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("click", (evt) => {
      if (!evt.target.classList.contains("img-filters__button--active")) {
        const filterName = evt.target.id.replace("filter-", "");
        document
          .querySelector(".img-filters__button--active")
          .classList.remove("img-filters__button--active");
        evt.target.classList.add("img-filters__button--active");

        debounce(reRender, RERENDER_DELAY)(evt, filterName);
      }
    });
  });
};
