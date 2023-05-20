import Popup from "./Popup.js";

// Класс PopupWithImage

export default class PopupWithImage extends Popup {
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
