import "./form.js";
import "./validate-form.js";
import "./scale-image.js";
import "./slider.js";

import { renderPhoto } from "./render-photo.js";
import { getData } from "./api.js";

const images = await getData();

renderPhoto(images);
