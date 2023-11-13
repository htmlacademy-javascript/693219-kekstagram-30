import './form.js';
import './validate-form.js';
import './scale-image.js';
import './slider.js';

import { renderPhoto } from './render-photo.js';
import { loadImages } from './load.js';

const images = await loadImages();


renderPhoto(images);
