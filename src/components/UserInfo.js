// Класс UserInfo

export default class UserInfo {
  constructor(profileInfo) {
    this._profileName = document.querySelector(profileInfo.profileNameSelector);
    this._profileDescription = document.querySelector(profileInfo.profileDescriptionSelector);
    this._profileAvatar = document.querySelector(profileInfo.profileAvatarSelector);
  }

// Метод возвращения данных профиля

  getUserInfoMethod() {
    return {username: this._profileName.textContent, job: this._profileDescription.textContent}
  }

// Метод заполнения данных профиля

  setUserInfoMethod({avatar, username, job}) {
    this._profileAvatar.src = avatar;
    this._profileName.textContent = username;
    this._profileDescription.textContent = job;
  }

// Метод получения Id

  setIdMethod (id) {
    this._id = id;
  }

// Метод возвращения Id

  getIdMethod () {
    return this._id;
  }

}
