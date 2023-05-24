import Popup from "./Popup.js";

// Класс PopupDeleteForm

export default class PopupWithDeleteCardForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._defaultButtonText = this._submitButton.textContent;
  }

// Метод навешивания слушателей перезаписанный

  setEventListenerMethod() {
    super.setEventListenerMethod();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `Удаление...`
      this._submitFunction({ card: this._element, cardId: this._cardId });
    });
  }

// Метод изменения текста кнопки во время сабмита

  deleteButtonTextMethod() {
    this._submitButton.textContent = this._defaultButtonText;
  }

// Метод обработчика клика по мусорке

  openPopupMethod = ({ card, cardId }) => {
    super.openPopupMethod();
    this._element = card;
    this._cardId = cardId;
    console.log(this._element)
  }
}
