// Выборка DOM элементов
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");
const formNameElement = document.querySelector(".form__input");
const formDescriptionElement = document.querySelector(".form__input_description");
const formSubmitButtonElement = document.querySelector(".form__save-button");


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

// Функция закрытия попапа по клику вне формы

const closePopupByClickOnOverlay = function (evt) {
  console.log(evt.target, evt.currentTarget);
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
}

// Функция сабмита

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

// Обработчик события по клику вне формы при закрытии попапа

popupElement.addEventListener("click", closePopupByClickOnOverlay);

// Обработчик события по сабмиту в форме

formSubmitButtonElement.addEventListener("submit", closePopupBySubmit);

