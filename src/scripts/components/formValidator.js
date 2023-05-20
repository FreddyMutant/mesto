// Класс валидации

export default class FormValidator {
  constructor(set, form) {
    this._inputSelector = set.inputSelector;
    this._errorSelectorTemplate = set.errorSelectorTemplate;
    this._submitButtonSelector = set.submitButtonSelector;
    this._disableButtonClass = set.disableButtonClass;
    this._inputErrorClass = set.inputErrorClass;
    this._textErrorClass = set.textErrorClass;
    this._form = form;
    this._inputElements = form.querySelectorAll(this._inputSelector);
    this._submitButton = form.querySelector(this._submitButtonSelector);
  }

// Метод показывающий ошибку

  _showInputErrorMethod() {
  this._input.classList.add(this._inputErrorClass);
  this._errorTextElement.textContent = this._input.validationMessage;
  this._errorTextElement.classList.add(this._textErrorClass);
}

// Метод скрывающий ошибку

  _hideInputErrorMethod() {
  this._input.classList.remove(this._inputErrorClass);
  this._errorTextElement.textContent = '';
  this._errorTextElement.classList.remove(this._textErrorClass);
}

// Метод включения кнопки

  _enableButtonMethod() {
    this._submitButton.classList.remove(this._disableButtonClass)
    this._submitButton.disabled = false;
  }

// Метод выключения кнопки

  _disableButtonMethod() {
    this._submitButton.classList.add(this._disableButtonClass)
    this._submitButton.disabled = true;
  }

// Метод проверки инпутов

_validInputMethod() {
  return Array.from(this._inputElements).some((input) => !input.validity.valid)
}

// Метод изменения состояния кнопки

  _toggleButtonStateMethod() {
    !this._validInputMethod() ? this._enableButtonMethod() : this._disableButtonMethod(this._submitButton);
  }

// Метод проверки валидации

  _checkInputValidityMethod() {
  this._errorTextElement = this._form.querySelector(`${this._errorSelectorTemplate}${this._input.name}`);
  this._input.validity.valid ? this._hideInputErrorMethod() : this._showInputErrorMethod();
}

 // Метод навешивания слушателей

  _setEventListenerMethod() {
    this._inputElements.forEach((input) => {
      input.addEventListener('input', () => {
        this._input = input;
        this._checkInputValidityMethod();
        this._toggleButtonStateMethod();
      })
    })
  }

// Метод включения валидации

  enableValidationMethod() {
    this._setEventListenerMethod();
  }

// Метод сброса проверки валидации формы

  resetErrorInOpenFormMethod() {
    this._inputElements.forEach((input) => {
      this._input = input;
      this._errorTextElement = this._form.querySelector(`${this._errorSelectorTemplate}${this._input.name}`)
      if (!input.validity.valid) {
        this._hideInputErrorMethod();
      }
    });
    this._disableButtonMethod();
  }
}
