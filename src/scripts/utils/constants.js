// Массив карточек

const initialCards = [
  {
    title: 'Архыз',
    link: 'https://images.unsplash.com/photo-1631563066841-e388591c418d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    title: 'Челябинская область',
    link: 'https://images.unsplash.com/photo-1643268394372-8ffa62adec5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1634745186518-db2e653372c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
  }
];

const addCardPopupOpenButtonElement = document.querySelector('.profile__add-button');
const editProfilePopupButtonElement = document.querySelector('.profile__edit-button');

const templateSelector = '#cardsElement';

const imagePopupSelector = '.image-popup';
const profilePopupSelector = '.edit-profile-popup';
const addCardPopupSelector = '.add-card-popup';

const cardsElementSelector = '.cards';

const formsValidator = {};

// Объект для профиля

const profileInfo = {
  profileNameSelector: '.profile__name',
  profileDescriptionSelector: '.profile__description'
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
  initialCards, addCardPopupOpenButtonElement, editProfilePopupButtonElement, templateSelector, imagePopupSelector, profilePopupSelector, addCardPopupSelector, cardsElementSelector, formsValidator, profileInfo, validationSet
};
