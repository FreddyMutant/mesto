// Класс Card

export default class Card {
  constructor (item, templateSelector, openImagePopup) {
   this._item = item;
   this._name = item.name;
   this._link = item.link;
   this._templateSelector = templateSelector;
   this._openImagePopup = openImagePopup;
   this._cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
   this._cardImageElement = this._cardElement.querySelector('.card__image');
   this._likeButtonCardElement = this._cardElement.querySelector('.card__like-button');
   this._trashButtonCardElement = this._cardElement.querySelector('.card__trash-button');
   this._cardCaptionElement = this._cardElement.querySelector('.card__text');
  }

 //Метод удаления карточки по корзине

 _deleteCardMethod = () => {
   this._cardElement.remove();
 }

 //Метод изменения состояния лайка

 _likeButtonStateMethod = () => {
   this._likeButtonCardElement.classList.toggle('card__like-button_active');
 }

 //Метод увеличения картинки карточки

 _openImagePopupMethod = () => {
   this._openImagePopup(this._item);
 }

 // Метод навешивания слушателей

 _setEventListenerMethod(){
   this._likeButtonCardElement.addEventListener('click', this._likeButtonStateMethod);
   this._trashButtonCardElement.addEventListener('click', this._deleteCardMethod);
   this._cardImageElement.addEventListener('click', this._openImagePopupMethod)
 }

 // Функция-метод наполненния контентом карточки

 createCardMethod() {
   this._cardImageElement.src = this._link;
   this._cardImageElement.alt = this._name;
   this._cardCaptionElement.textContent = this._name;
   this._setEventListenerMethod();
   return this._cardElement
 }
 }

