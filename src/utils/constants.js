// Селекторы элементов

const addCardPopupOpenButtonElement = document.querySelector('.profile__add-button');
const editProfilePopupButtonElement = document.querySelector('.profile__edit-button');
const editAvatarElementSelector = document.querySelector('.profile__avatar-edit-button');

const templateSelector = '#cardsElement';

const cardsElementSelector = '.cards';

const imagePopupSelector = '.image-popup';
const profilePopupSelector = '.edit-profile-popup';
const addCardPopupSelector = '.add-card-popup';
const editAvatarPopupSelector = '.edit-avatar-popup';
const popupDeleteCardSelector = '.delete-popup';

// Объект для хранения всех экземпляров валидации

const formsValidator = {};

// Объект для профиля

const profileInfo = {
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description',
  profileAvatarSelector: '.profile__avatar'
}

// Объект для валидации

const validationSet = {
  inputSelector: '.popup__input',
  errorSelectorTemplate: '.popup__error_type_',
  submitButtonSelector: '.popup__submit-button',
  disableButtonClass: 'popup__submit-button_disable',
  inputErrorClass: 'popup__input_invalid',
  textErrorClass: 'popup__error_visible'
};

export {
  addCardPopupOpenButtonElement, editProfilePopupButtonElement, templateSelector, imagePopupSelector, profilePopupSelector, addCardPopupSelector, editAvatarPopupSelector, popupDeleteCardSelector, editAvatarElementSelector, cardsElementSelector, formsValidator, profileInfo, validationSet
};
