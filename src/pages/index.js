import Card from '../scripts/components/card.js';
import FormValidator from '../scripts/components/formValidator.js';
import ImagePopup from '../scripts/components/imagePopup.js';
import Section from '../scripts/components/section.js';
import UserInfo from '../scripts/components/userInfo.js';
import formPopup from '../scripts/components/formPopup.js';
import {
  initialCards, addCardPopupOpenButtonElement, editProfilePopupButtonElement, templateSelector, imagePopupSelector, profilePopupSelector, addCardPopupSelector, cardsElementSelector, formsValidator, profileInfo, validationSet
} from '../scripts/utils/constants.js';
import './index.css';

// Экземпляр для данных в попапе профиля

const userInfo = new UserInfo(profileInfo);

// Экземпляр для попапа изображения

const popupImage = new ImagePopup(imagePopupSelector);

// Экземпляр для попапа профиля

const profilePopup = new formPopup(profilePopupSelector, (data) => {
  userInfo.setUserInfo(data);
});

// Экземпляр для попапа добавления карточки

const addCardPopup = new formPopup(addCardPopupSelector, (data) => {
  section.addItemMethod(data);
});

// Экземпляр контейнера c карточкой

const section = new Section ({
  array: initialCards,
  renderer: (element) => {
    const card = new Card (element, templateSelector, popupImage.openImagePopup);
    return card.createCardMethod();
  }
}, cardsElementSelector)

section.addCardFromArrayMethod();

// Экземпляр валидатора форм и его активация

Array.from(document.forms).forEach((item) => {
  const form = new FormValidator(validationSet, item);
  const formName = item.name;
  formsValidator[formName] = form;
  form.enableValidationMethod();
})

// Слушатели

profilePopup.setEventListenerMethod();
addCardPopup.setEventListenerMethod();
popupImage.setEventListenerMethod();

// Функция открытия попапа редактирования профиля

editProfilePopupButtonElement.addEventListener('click', () => {
  formsValidator.profileformedit.resetErrorInOpenFormMethod();
  profilePopup.setInputValuesMethod(userInfo.getUserInfo());
  profilePopup.openPopupMethod();
})

// Функция открытия попапа добавления карточки

addCardPopupOpenButtonElement.addEventListener('click', () => {
  formsValidator.addform.resetErrorInOpenFormMethod();
  addCardPopup.openPopupMethod();
})
