import { renderComments } from "./render-comments";
import { photoElement } from "./elements";

const onDocumentKeydown = (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closePhoto();
  }
};

const toggleClasses = (isWillBeOpened = true) => {
  photoElement.classList.toggle("hidden", !isWillBeOpened);
  document.body.classList.toggle("modal-open");
};

const renderPhotoInformation = ({ url, likes, description }) => {
  photoElement.querySelector(".big-picture__img img").src = url;
  photoElement.querySelector(".likes-count").textContent = likes.toString();
  photoElement.querySelector(".social__caption").textContent = description;
};

const openPhoto = (photo) => {
  toggleClasses();
  renderPhotoInformation(photo);
  renderComments(photo.comments);
  document.addEventListener("keydown", onDocumentKeydown);
};

function closePhoto() {
  toggleClasses(false);
  document.removeEventListener("keydown", onDocumentKeydown);
}

export { openPhoto, closePhoto };
