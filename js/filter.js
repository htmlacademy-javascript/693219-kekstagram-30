import { renderPhoto } from './render-photo.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

const filterElement = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');

const getFilters = (images) => ({
  default: images,
  random: images.slice(0, 10),
  discussed: [...images].sort((a, b) => b.comments.length - a.comments.length),
});

const isButtonNotActive = (target) =>
  !target.classList.contains('img-filters__button--active');

const toggleActiveButton = (target) => {
  document
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');
  target.classList.add('img-filters__button--active');
};

const debounceRenderPhoto = (filters, filterName) =>
  debounce(() => renderPhoto(filters[filterName]), RERENDER_DELAY)(filterName);

export const showFilters = (images) => {
  filterElement.style.opacity = '1';
  const filters = getFilters(images);

  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', (evt) => {
      const filterName = evt.target.id.replace('filter-', '');

      if (isButtonNotActive(evt.target)) {
        toggleActiveButton(evt.target);
        debounceRenderPhoto(filters, filterName);
      }
    });
  });
};
