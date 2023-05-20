import Popup from "./popup.js";

// Класс ImagePopup

export default class ImagePopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.image-popup__image');
    this._imagePopupImageCaption = this._popup.querySelector('.image-popup__caption');
  }

// Метод открытия попапа картинки

  openImagePopup = (item) => {
    this._popupImage.src = item.link;
    this._popupImage.alt = `Изображение ${item.title}`;
    this._imagePopupImageCaption.textContent = item.title;
    super.openPopupMethod();
  }

}
