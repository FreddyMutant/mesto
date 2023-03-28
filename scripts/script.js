// Выборка DOM элементов
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const profileInfoElement = document.querySelector(".profile__info");
const popupOpenButtonElement = profileInfoElement.querySelector(".profile__edit-button");
const profileNameElement = profileInfoElement.querySelector(".profile__name");
const profileDescriptionElement = profileInfoElement.querySelector(".profile__description");
const formElement = popupElement.querySelector(".form");
const formNameElement = formElement.querySelector(".form__input-name");
const formDescriptionElement = formElement.querySelector(".form__input-description");


// Функция открытия попапа

const openPopup = function (){
  popupElement.classList.add("popup_opened");
  formNameElement.value = profileNameElement.textContent;
  formDescriptionElement.value = profileDescriptionElement.textContent;
}

// Функция закрытия попапа

const closePopup = function (){
  popupElement.classList.remove("popup_opened");
}

// Функция сабмита формы и ее закрытие

const closePopupBySubmit = function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = formNameElement.value;
  profileDescriptionElement.textContent = formDescriptionElement.value;
  closePopup();
}


// Обработчик события по клику при открытии попапа

popupOpenButtonElement.addEventListener("click", openPopup);

// Обработчик события по клику при закрытии попапа

popupCloseButtonElement.addEventListener("click", closePopup);

// Обработчик события по сабмиту в форме

formElement.addEventListener("submit", closePopupBySubmit);

