export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

// Метод проверки ответа сервера

  _checkResponseMethod(res) {return res.ok ? res.json() : Promise.reject}

// Метод получения данных пользователя

  getInfoMethod() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResponseMethod)
  }

// Метод получения данных карточки

  getCardMethod() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResponseMethod)
  }

// Метод добавления данных пользователя

  setUserinfoMethod(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.job
      })
    })
      .then(this._checkResponseMethod)
  }

// Метод добавления данных аватарки

  setNewAvatarMethod(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(this._checkResponseMethod)
  }

// Метод добавления новой карточки

  addNewCardMethod(data) {
    return fetch(`${this._url}/cards`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      name: data.title,
      link: data.link,
    })
  })
      .then(this._checkResponseMethod)

  }

// Метод добавления лайка

  addLikeMethod(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: {
      authorization: this._authorization
      }
    })
      .then(this._checkResponseMethod)
  }


// Метод снятия лайка

  removeLikeMethod(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResponseMethod)
  }

// Метод удаления карточки

  deleteCardMethod(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkResponseMethod)
  }

}
