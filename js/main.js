import './form.js';
import './avatar.js';

import { showFilters } from './filter.js';
import { renderPhoto } from './render-photo.js';
import { getData } from './api.js';

const showAlertGetData = () => {
  const errorFragment =
    document.querySelector('#data-error').content.firstElementChild;

  const errorElement = errorFragment.cloneNode(true);
  document.body.appendChild(errorElement);
  setInterval(() => {
    errorElement.remove();
  }, 5000);
};

try {
  const images = await getData();

  renderPhoto(images);
  showFilters(images);
} catch (err) {
  showAlertGetData();
}
