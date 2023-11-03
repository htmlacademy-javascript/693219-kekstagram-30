import { renderPhoto } from './render-photo.js';
import { generatePhotosArray } from './mock.js';
import './form.js';
import './validate-form.js';
import './scale-image.js';

renderPhoto(generatePhotosArray(25));
