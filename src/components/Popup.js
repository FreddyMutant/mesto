export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button')
  }

// Метод закрытия на Esc

  _closePopupByEscapeMethod = (evt) => {
    if (evt.key === 'Escape') {
      this.closePopupMethod();
    }
  }

// Метод открытия попапа на крестик

  _popupCloseButtonMethod = (evt) => {
    this.closePopupMethod();
  }

// Метод закрытия попапа по клику вне формы

  _popupCloseByOverlayMethod = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.closePopupMethod();
    }
  }

// Метод навешивания слушателей

  setEventListenerMethod() {
    this._popupCloseButton.addEventListener('click', this._popupCloseButtonMethod);
    this._popup.addEventListener('click', this._popupCloseByOverlayMethod);
  }
// Метод открытия попапа

  openPopupMethod() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupByEscapeMethod);
  }

// Метод закрытия попапа

  closePopupMethod() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupByEscapeMethod);
  }
}
