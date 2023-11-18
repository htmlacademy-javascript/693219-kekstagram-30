import './form.js';
import './avatar.js';

import { showFilters } from './filter.js';
import { renderPhoto } from './render-photo.js';
import { getData } from './api.js';

getData().then((images) => {
  renderPhoto(images);
  showFilters(images);
});
