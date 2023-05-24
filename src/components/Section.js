// Класс Section

export default class Section {
  constructor(renderer, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  // Метод добавления карточки из массива

  addCardFromArrayMethod(dataCard) {
    dataCard.forEach((element) => {
      this._renderer(element);
    });
  }

  // Метод добавления карточки в контейнер в конце

  addItemPrependMethod(domElement) {
    this._container.prepend(domElement);
  }

    // Метод добавления карточки в контейнер в начале

  addItemAppendMethod(domElement) {
    this._container.append(domElement);
  }

}

