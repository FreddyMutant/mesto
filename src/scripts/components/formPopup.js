import Popup from "./popup.js";

// Класс formPopup

export default class formPopup extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._inputSelector = this._form.querySelectorAll('.popup__input');
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
      this._submitFunction(this._getInputValueMethod());
      this.closePopupMethod();
    });
  }

// Метод закрытия попапа перезаписанный

  closePopupMethod() {
    super.closePopupMethod();
    this._form.reset();
  }
}
