import './form.js';

import { showFilters } from './filter.js';
import { renderPhoto } from './render-photo.js';
import { getData } from './api.js';

const images = await getData();

renderPhoto(images);

showFilters(images);
