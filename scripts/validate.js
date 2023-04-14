// Объект для валидации
const validationSet = {
  inputForms: document.forms,
  inputSelector: '.popup__input',
  errorSelectorTemplate: '.popup__error_type_',
  submitButtonSelector: '.popup__submit-button',
  disableButtonClass: 'popup__submit-button_disable',
  inputErrorClass: 'popup__input_invalid',
  textErrorClass: 'popup__error_visible'
};

// Функция включения валидации

function enableValidation(set) {
  const forms = Array.from(set.inputForms);
  forms.forEach((item) => {
    const inputElements = item.querySelectorAll(set.inputSelector);
    const submitButton = item.querySelector(set.submitButtonSelector);
    setEventListener(inputElements, submitButton, set.errorSelectorTemplate, set.disableButtonClass, set.inputErrorClass, set.textErrorClass);
  })
}

// Функция навешивания слушателей на инпуты

function setEventListener(inputElements, submitButton, errorSelectorTemplate, disableButtonClass, inputErrorClass, textErrorClass) {
  inputElements.forEach((input) => {
    input.addEventListener ('input', () => {
      checkInputValidity(input, errorSelectorTemplate, inputErrorClass, textErrorClass);
      toggleButtonState(inputElements, submitButton, disableButtonClass);
    })
  })
}

// Функция проверки валидации инпутов

function checkInputValidity(input, errorSelectorTemplate, inputErrorClass, textErrorClass) {
  const errorTextElement = document.querySelector(`${errorSelectorTemplate}${input.name}`)
  input.validity.valid ? hideInputError(input, errorTextElement, inputErrorClass, textErrorClass) : showInputError(input, errorTextElement, inputErrorClass, textErrorClass);
}

// Функция отображения текста ошибки

function showInputError(input, errorTextElement, inputErrorClass, textErrorClass) {
  input.classList.add(inputErrorClass);
  errorTextElement.textContent = input.validationMessage;
  errorTextElement.classList.add(textErrorClass);
}

// Функция скрытия текста ошибки

function hideInputError(input, errorTextElement, inputErrorClass, textErrorClass) {
  input.classList.remove(inputErrorClass);
  errorTextElement.textContent = '';
  errorTextElement.classList.remove(textErrorClass);
}

// Функция изменения состояния кнопки при проверке валидации

function toggleButtonState(inputElements, submitButton, disableButtonClass) {
  validInput(inputElements) ? enableButton(submitButton, disableButtonClass) : disableButton(submitButton, disableButtonClass);
}

// Функция возвращения валидности инпутов

function validInput(inputElements) {
  return Array.from(inputElements).every((input) => input.validity.valid)
}

// Функция включения кнопки

function enableButton(submitButton, disableButtonClass) {
  submitButton.classList.remove(disableButtonClass);
  submitButton.disabled = false;
}

// Функция выключения кнопки

function disableButton(submitButton, disableButtonClass) {
  submitButton.classList.add(disableButtonClass);
  submitButton.disabled = true;
}

// Функция сброса проверки валидации формы

function resetErrorInOpenForm(form) {
  form.querySelectorAll(validationSet.inputSelector).forEach((input) => {
    const errorTextElement = form.querySelector(`${validationSet.errorSelectorTemplate}${input.name}`)
    if (!input.validity.valid) {
      hideInputError(input, errorTextElement, validationSet.inputErrorClass, validationSet.textErrorClass);
    }
  });
}

