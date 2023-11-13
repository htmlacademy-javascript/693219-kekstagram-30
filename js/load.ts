import { getElement } from './util';

const errorFragment =
  getElement<HTMLTemplateElement>('#data-error').content.firstElementChild!;


const loadImages =
    async () => {
      let response;

      try {
        response = await fetch('https://30.javascript.pages.academy/kekstagram/data', {
          method: 'GET',
          credentials: 'same-origin',
        });

        if (!response.ok) {
          throw new Error(`${response.status} — ${response.statusText}`);
        }

      } catch (err) {
        const errorElement = errorFragment.cloneNode(true);
        document.body.appendChild(errorElement);

        setInterval(() => {
          errorElement.remove();
        }, 5000);
        return [];
      }

      const photo = response.json();

      return photo;
    };

export { loadImages };
