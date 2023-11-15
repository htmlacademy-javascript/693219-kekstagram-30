import './form.js';
import './validate-form.js';
import './scale-image.js';
import './slider.js';

import { renderPhoto } from './render-photo.js';
import { getData } from './api.js';
import { Photo } from './mock.js';

const images = await getData() as Photo[];

renderPhoto(images);
