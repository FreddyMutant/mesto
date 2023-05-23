import Popup from "./Popup.js";

// Класс PopupDeleteForm

export default class PopupWithDeleteCardForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
  }
// Метод навешивания слушателей перезаписанный

  setEventListenerMethod() {
    super.setEventListenerMethod();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFunction(this._element);
    });
  }

// Метод обработчика клика по мусорке

  openPopupMethod = (element) => {
    super.openPopupMethod();
    this._element = element;
  }
}
