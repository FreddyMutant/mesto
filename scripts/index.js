// Выборка DOM элементов
const popupElements = document.querySelectorAll('.popup');

const popupCloseButtonElements = document.querySelectorAll('.popup__close-button');

const editProfilePopupElement = document.querySelector('.edit-profile-popup');
const editProfileNameElement = editProfilePopupElement.querySelector('.popup__input_type_name');
const editProfileDescriptionElement = editProfilePopupElement.querySelector('.popup__input_type_description');

const addCardPopupOpenButtonElement = document.querySelector('.profile__add-button');

const addCardPopupElement = document.querySelector('.add-card-popup');
const addCardTitleElement = addCardPopupElement.querySelector('.popup__input_type_image-title');
const addCardUrlElement = addCardPopupElement.querySelector('.popup__input_type_image-url');
const addCardFormElement = addCardPopupElement.querySelector('.popup__form');

const profileInfoElement = document.querySelector('.profile__info');
const editProfilePopupButtonElement = profileInfoElement.querySelector('.profile__edit-button');
const profileFormElement = editProfilePopupElement.querySelector('.popup__form');
const profileNameElement = profileInfoElement.querySelector('.profile__name');
const profileDescriptionElement = profileInfoElement.querySelector('.profile__description');

const imagePopupElement = document.querySelector('.image-popup');
const imagePopupImageElement = document.querySelector('.image-popup__image');
const imagePopupImageCaptionElement = document.querySelector('.image-popup__caption');

const cardsElement = document.querySelector('.cards');
const cardItem = document.querySelector('#cardElement').content;

// Константы для сброса ошибки при открытии попапов

const profileFormElementInputElements = profileFormElement.querySelector('.profile__input');
const profileFormElementSubmitButton = profileFormElement.querySelector('.profile__submit-button');
const addCardFormElementInputElements = addCardFormElement.querySelector('.profile__input');
const addCardFormElementSubmitButton = addCardFormElement.querySelector('.profile__submit-button');

// Общая функция открытия попапов

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
}

// Функция закрытия попапов

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
}

// Функция открытия попапа редактирования профиля

editProfilePopupButtonElement.addEventListener('click', () => {
  resetErrorInOpenForm(profileFormElement);
  toggleButtonState(profileFormElementInputElements, profileFormElementSubmitButton, validationSet.disableButtonClass);
  editProfileNameElement.value = profileNameElement.textContent;
  editProfileDescriptionElement.value = profileDescriptionElement.textContent;
  openPopup(editProfilePopupElement);
})

// Функция открытия попапа добавления карточки

addCardPopupOpenButtonElement.addEventListener('click', () => {
  resetErrorInOpenForm(addCardFormElement);
  toggleButtonState(addCardFormElementInputElements, addCardFormElementSubmitButton, validationSet.disableButtonClass);
  openPopup(addCardPopupElement);
})

// Функция закрытия попапов на крестик

popupCloseButtonElements.forEach((element) => {
  const popup = element.closest('.popup');
  element.addEventListener('click', () => {
    closePopup(popup);
  })
})

// Функция сабмита формы редактирования профиля и ее закрытие

profileFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameElement.value;
  profileDescriptionElement.textContent = editProfileDescriptionElement.value;
  closePopup(editProfilePopupElement);
})

// Функция сабмита формы добавления карточки и ее закрытие

addCardFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardNameUrl = {name: addCardTitleElement.value, link: addCardUrlElement.value};
  cardsElement.prepend(addCard(cardNameUrl));
  closePopup(addCardPopupElement);
  evt.target.reset();
})

// Функция закрытия попапа по клику вне формы

popupElements.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(popup);
  }
})
});

// Функция закрытия попапа на Escape

function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}

// Функция создания карточек

function addCard (item) {
  const cardElement = cardItem.querySelector('.card').cloneNode(true);
  const cardImageElement = cardElement.querySelector('.card__image');
  const likeButtonCardElement = cardElement.querySelector('.card__like-button');
  const trashButtonCardElement = cardElement.querySelector('.card__trash-button');

  cardImageElement.src = item.link
  cardImageElement.alt = item.name
  cardElement.querySelector('.card__text').textContent = item.name;

  // Функция активации лайка

  likeButtonCardElement.addEventListener('click', (evt) => evt.target.classList.toggle('card__like-button_active'));

  // Функция удаления карточки

  trashButtonCardElement.addEventListener('click', (evt) => evt.target.closest('.card').remove());

  // Функция увеличения изображения карточки

  cardImageElement.addEventListener('click', () => {
    imagePopupImageElement.src = item.link;
    imagePopupImageElement.alt = item.name;
    imagePopupImageCaptionElement.textContent = item.name;
    openPopup(imagePopupElement);
  })

  return cardElement
}

// Добавление в разметку карточек из массива

initialCards.forEach((element) => {
  const card = addCard(element);
  cardsElement.append(card);
})

// Функция валидации

enableValidation(validationSet);
