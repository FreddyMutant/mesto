import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithDeleteCardForm from '../components/PopupWithDeleteCardForm.js';
import Api from '../components/Api.js';
import {
  addCardPopupOpenButtonElement, editProfilePopupButtonElement, templateSelector, imagePopupSelector, profilePopupSelector, addCardPopupSelector, editAvatarPopupSelector, popupDeleteCardSelector, editAvatarElementSelector, cardsElementSelector, formsValidator, profileInfo, validationSet
} from '../utils/constants.js';
import './index.css';

// Экземпляр для Api

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
    headers: {
      authorization: 'df9c63fb-264b-40f7-b222-01ba224014cd',
      'Content-Type': 'application/json'
    }
  }
);

// Экземпляр для данных в попапе профиля

const userInfo = new UserInfo(profileInfo);

// Экземпляр контейнера c карточкой

const section = new Section ((element) => {
  section.addItemAppendMethod(createNewCard(element))
  }, cardsElementSelector)

// Экземпляр для попапа изображения

const popupImage = new PopupWithImage(imagePopupSelector);

// Экземпляр для попапа редактирования данных профиля

const popupDeleteCard = new PopupWithDeleteCardForm(popupDeleteCardSelector, ({ card, cardId}) => {
  api.deleteCardMethod(cardId)
    .then(() => {
      card.removeCardMethod()
      popupDeleteCard.closePopupMethod()
    })
    .catch((error) => console.error(`Ошибка удаления карточки ${error}`))
    .finally(() => popupDeleteCard.deleteButtonTextMethod())
});

// Функция создания экземпляра карточки

function createNewCard (element) {
  const card = new Card (element, templateSelector,  popupImage.openImagePopup, popupDeleteCard.openPopupMethod, (likeButtonCardElement, cardId) => {
    if (likeButtonCardElement.classList.contains('card__like-button_active')) {
      api.removeLikeMethod(cardId)
        .then(res => {
          card.counterStateMethod(res.likes);
        })
        .catch((error) => console.error(`Ошибка снятия лайка ${error}`))
    } else {
      api.addLikeMethod(cardId)
        .then(res => {
          card.counterStateMethod(res.likes);
        })
        .catch((error) => console.error(`Ошибка добвления лайка ${error}`))
    }
  });
  return card.createCardMethod();
}

// Экземпляр для попапа редактирования аватара профиля

const editAvatarPopup = new PopupWithForm(editAvatarPopupSelector, (data) => {
  api.setNewAvatarMethod(data)
    .then(res => {
      userInfo.setUserInfoMethod({ username: res.name, job: res.about, avatar: res.avatar })
      editAvatarPopup.closePopupMethod()
    })
    .catch((error) => console.error(`Ошибка обновления аватарки ${error}`))
    .finally(() => editAvatarPopup.defaultButtonTextMethod())
});

// Экземпляр для попапа редактирования данных профиля

const profilePopup = new PopupWithForm(profilePopupSelector, (data) => {
  api.setUserinfoMethod(data)
    .then(res => {
      userInfo.setUserInfoMethod({ username: res.name, job: res.about, avatar: res.avatar })
      profilePopup.closePopupMethod()
    })
    .catch((error) => console.error(`Ошибка редактирования данных профиля ${error}`))
    .finally(() => profilePopup.defaultButtonTextMethod())
});

// Экземпляр для попапа добавления карточки

const addCardPopup = new PopupWithForm(addCardPopupSelector, (data) => {
  api.addNewCardMethod(data)
    .then(dataCard => {
      dataCard.myId = userInfo.getIdMethod();
      section.addItemPrependMethod(createNewCard(dataCard))
      addCardPopup.closePopupMethod()
    })
    .catch((error) => console.error(`Ошибка создания новой карточки ${error}`))
    .finally(() => addCardPopup.defaultButtonTextMethod())
});

// Экземпляр валидатора форм и его активация

Array.from(document.forms).forEach((item) => {
  const form = new FormValidator(validationSet, item);
  const formName = item.getAttribute('name');
  formsValidator[formName] = form;
  form.enableValidationMethod();
})

// Слушатели

profilePopup.setEventListenerMethod();
addCardPopup.setEventListenerMethod();
popupImage.setEventListenerMethod();
editAvatarPopup.setEventListenerMethod();
popupDeleteCard.setEventListenerMethod();

// Функция открытия попапа редактирования профиля

editProfilePopupButtonElement.addEventListener('click', () => {
  formsValidator.profileformedit.resetErrorInOpenFormMethod();
  profilePopup.setInputValuesMethod(userInfo.getUserInfoMethod());
  profilePopup.openPopupMethod();
})

// Функция открытия попапа добавления карточки

addCardPopupOpenButtonElement.addEventListener('click', () => {
  formsValidator.addform.resetErrorInOpenFormMethod();
  addCardPopup.openPopupMethod();
})

// Кнопка редактирования аватара

editAvatarElementSelector.addEventListener('click', () => {
  formsValidator.editavatar.resetErrorInOpenFormMethod();
  editAvatarPopup.openPopupMethod();
})

// Асинхронный метод получения массива данных

Promise.all([api.getInfoMethod(), api.getCardMethod()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => element.myId = dataUser._id)
    userInfo.setUserInfoMethod({ username: dataUser.name, job: dataUser.about, avatar: dataUser.avatar });
    userInfo.setIdMethod(dataUser._id);
    section.addCardFromArrayMethod(dataCard)
  })
  .catch((error) => console.error(`Ошибка создания начальных данных ${error}`))

