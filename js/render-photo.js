import { openPhoto, closePhoto } from "./big-picture.js";
import {
  picturesElement,
  pictureFragment,
  photoCloseElement,
} from "./elements.js";

const renderPhoto = (photos) => {
  document.querySelectorAll(".picture").forEach((element) => {
    element.remove();
  });

  photos.forEach((photo) => {
    const { comments, description, likes, url } = photo;
    const pictureElement = pictureFragment.cloneNode(true);
    const image = pictureElement.querySelector(".picture__img");
    image.src = url;
    image.alt = description;
    pictureElement.querySelector(".picture__likes").textContent =
      likes.toString();
    pictureElement.querySelector(".picture__comments").textContent =
      comments.length.toString();
    picturesElement.appendChild(pictureElement);
    pictureElement.addEventListener("click", () => openPhoto(photo));
  });
  photoCloseElement.addEventListener("click", closePhoto);
};

export { renderPhoto };
