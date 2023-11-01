import { renderPhoto } from './render-photo.js';
import { generatePhotosArray } from './mock.js';
import './form.js';

renderPhoto(generatePhotosArray(25));
