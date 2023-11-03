import './form.js';
import './validate-form.js';
import './scale-image.js';
import './slider.js';
import './effect.js';

import { renderPhoto } from './render-photo.js';
import { generatePhotosArray } from './mock.js';

renderPhoto(generatePhotosArray(25));
