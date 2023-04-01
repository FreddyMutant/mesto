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


// Массив карточек

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://images.unsplash.com/photo-1631563066841-e388591c418d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Челябинская область',
    link: 'https://images.unsplash.com/photo-1643268394372-8ffa62adec5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1634745186518-db2e653372c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1490879112094-281fea0883dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
  }
];

// Общая функция открытия попапа

function openPopup (popupElement) {
  popupElement.classList.add('popup_opened');
}

// Функция закрытия попапов

function closePopup (popupElement) {
  popupElement.classList.remove('popup_opened');
}

// Функция открытия попапа редактирования профиля

editProfilePopupButtonElement.addEventListener('click', () => {
  editProfileNameElement.value = profileNameElement.textContent;
  editProfileDescriptionElement.value = profileDescriptionElement.textContent;
  openPopup(editProfilePopupElement);
})

// Функция открытия попапа добавления карточки

addCardPopupOpenButtonElement.addEventListener('click', () => {
  openPopup(addCardPopupElement);
})

// Функция открытия попапа изображения

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

