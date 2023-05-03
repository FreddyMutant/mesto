import cardsContent from './array.js';
import Card from './card.js';
import FormValidator from './formValidator.js';

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

const avatarElement = document.querySelector('.profile__avatar');

const cardsElement = document.querySelector('.cards');
const templateSelector = '#cardsElement';

// Объект для валидации
const validationSet = {
  inputSelector: '.popup__input',
  errorSelectorTemplate: '.popup__error_type_',
  submitButtonSelector: '.popup__submit-button',
  disableButtonClass: 'popup__submit-button_disable',
  inputErrorClass: 'popup__input_invalid',
  textErrorClass: 'popup__error_visible'
};

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

function createNewCard (element) {
  const card = new Card (element, templateSelector, openImagePopup);
  return card.createCard();
}

// Функция увеличения картинки

function openImagePopup(item) {
  imagePopupImageElement.src = item.link;
  imagePopupImageElement.alt = item.name;
  imagePopupImageCaptionElement.textContent = item.name;
  openPopup(imagePopupElement);
}

// Увеличение картинки на аватарке

avatarElement.addEventListener('click', () => {
  const avatarItem = {name: avatarElement.alt, link: avatarElement.src}
  openImagePopup(avatarItem);
  openPopup(imagePopupElement);
})

// Функция создания контейнера карточки в нужном месте

function addCard(cardContainer, card) {
  cardContainer.prepend(card);
}

// Добавление в разметку карточек из массива

cardsContent.forEach((element) => {
  addCard(cardsElement, createNewCard(element));
})

// Экземпляр валидатора форм и его активация

const forms = {};

Array.from(document.forms).forEach((item) => {
  const form = new FormValidator(validationSet, item);
  const formName = item.name;
  forms[formName] = form;
  form.enableValidationMethod();
})

// Функция открытия попапа редактирования профиля

editProfilePopupButtonElement.addEventListener('click', () => {
  profileFormElement.reset();
  forms.profileformedit.resetErrorInOpenFormMethod();
  editProfileNameElement.value = profileNameElement.textContent;
  editProfileDescriptionElement.value = profileDescriptionElement.textContent;
  openPopup(editProfilePopupElement);
})

// Функция открытия попапа добавления карточки

addCardPopupOpenButtonElement.addEventListener('click', () => {
  addCardFormElement.reset();
  forms.addform.resetErrorInOpenFormMethod();
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

// Cабмит формы добавления карточки и ее закрытие

addCardFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardNameUrl = {name: addCardTitleElement.value, link: addCardUrlElement.value};
  addCard(cardsElement, createNewCard(cardNameUrl));
  closePopup(addCardPopupElement);
  evt.target.reset();
})
