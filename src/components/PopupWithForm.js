import Popup from "./Popup.js";

// Класс PopupWithForm

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._inputSelector = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._defaultButtonText = this._submitButton.textContent;
  }

// Метод получения значения инпутов

  _getInputValueMethod() {
    this._inputValues = {};
    this._inputSelector.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return  this._inputValues;
  }

// Метод добавления значений в инпуты

  setInputValuesMethod(userData) {
    this._inputSelector.forEach((input) => {
      input.value = userData[input.name];
    })
  }

// Метод навешивания слушателей перезаписанный

  setEventListenerMethod() {
    super.setEventListenerMethod();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `Сохранение...`
      this._submitFunction(this._getInputValueMethod());
    });
  }

// Метод изменения текста кнопки во время сабмита

  defaultButtonTextMethod() {
    this._submitButton.textContent = this._defaultButtonText;
  }

// Метод закрытия попапа перезаписанный

  closePopupMethod() {
    super.closePopupMethod();
    this._form.reset();
  }
}
