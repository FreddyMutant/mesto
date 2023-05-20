// Класс Section

export default class Section {
  constructor({ array, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._cardsContent = array;
    this._renderer = renderer;
  }

  // Метод добавления карточки из массива

  addCardFromArrayMethod() {
    this._cardsContent.forEach((element) => {
      this.addItemMethod(element);
    });
  }

  // Метод добавления карточки в контейнер в нужном месте

  addItemMethod(data) {
    this._container.prepend(this._renderer(data));
  }
}
