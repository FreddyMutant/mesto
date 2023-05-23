// Класс Card

export default class Card {
  constructor (item, templateSelector, openImagePopup, openPopupDeleteCard, changeLike) {
    this._name = item.name;
    this._link = item.link;
    this._myId = item.myId;
    this._likes = item.likes;
    this._likesLength = item.likes.length;
    this._ownerId = item.owner._id;
    this._cardId = item._id;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
    this._openPopupDeleteCard = openPopupDeleteCard;
    this._changeLike = changeLike;
  }

 //Метод открытия попапа удаления карточки

 _popupDeleteCardMethod = () => {
    this._openPopupDeleteCard({ card: this, cardId: this._cardId });
 }

 //Метод изменения состояния лайка

 _likeButtonStateMethod = () => {
    this._changeLike(this._likeButtonCardElement, this._cardId);
 }

 //Метод увеличения картинки карточки

 _openImagePopupMethod = () => {
    this._openImagePopup({ title: this._name, link: this._link });
 }

 // Метод навешивания слушателей

 _setEventListenerMethod(){
    this._likeButtonCardElement.addEventListener('click', this._likeButtonStateMethod);
    this._trashButtonCardElement.addEventListener('click', this._popupDeleteCardMethod);
    this._cardImageElement.addEventListener('click', this._openImagePopupMethod);
 }

// Метод отображения кнопки удаления карточки

 _trashButtonCardElementVisibilityMethod() {
    this._myId === this._ownerId ? this._trashButtonCardElement.style.display = 'block' : this._trashButtonCardElement.style.display = 'none';
 }

// Метод отображения лайков

 _checkLikeStatusMethod() {
    this._likes.forEach((element) => {
      if (element._id === this._myId) {
        this._likeButtonCardElement.classList.add('card__like-button_active')
        return
      }
    });
    this._likeCounterElement.textContent = this._likesLength;
 }

// Метод изменения состояния счетчика

 counterStateMethod(likes) {
    this._likeButtonCardElement.classList.add('card__like-button_active');
    this._likeCounterElement.textContent = likes.length;
 }

// Метод удаления карточки

  removeCardMethod() {
    this._cardElement.remove();
    this._cardElement = null;
  }

 // Метод создания карточки и наполнения ее контентом

 createCardMethod() {
    this._cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    this._cardImageElement = this._cardElement.querySelector('.card__image');
    this._likeButtonCardElement = this._cardElement.querySelector('.card__like-button');
    this._trashButtonCardElement = this._cardElement.querySelector('.card__trash-button');
    this._cardCaptionElement = this._cardElement.querySelector('.card__text');
    this._likeCounterElement = this._cardElement.querySelector('.card__like-counter');
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = `Изображение ${this._name}`;
    this._cardCaptionElement.textContent = this._name;
    this._checkLikeStatusMethod();
    this._trashButtonCardElementVisibilityMethod();
    this._setEventListenerMethod();
    return this._cardElement
 }
}

