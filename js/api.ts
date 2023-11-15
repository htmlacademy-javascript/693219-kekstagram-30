import { getElement } from './util';

const BASE_URL: string = 'https://30.javascript.pages.academy/kekstagram';

enum Route {
  GET_DATA = '/data',
  SEND_DATA = '/',
}

enum Method {
  GET = 'GET',
  POST = 'POST',
}

const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const showAlert = (errorText: string) => {
  const errorFragment =
  getElement<HTMLTemplateElement>('#data-error').content.firstElementChild!;

  const errorElement = errorFragment.cloneNode(true) as HTMLElement;
  const errorTitle = getElement('.data-error__title', errorElement);

  errorTitle.textContent = errorText;
  document.body.appendChild(errorElement);

  setInterval(() => {
    errorElement.remove();
  }, 5000);
};

const load = (
  route: Route,
  errorText: string,
  method: Method = Method.GET,
  body: Record<string, unknown> | null = null
): Promise<unknown> =>
  fetch(`${BASE_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      showAlert(errorText);
      throw new Error(errorText);
    });

const getData = (): Promise<unknown> => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body: Record<string, unknown>): Promise<unknown> =>
  load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);


export { getData, sendData , showAlert};
