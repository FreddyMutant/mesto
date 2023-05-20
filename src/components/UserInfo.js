// Класс UserInfo

export default class UserInfo {
  constructor(profileInfo, ) {
    this._profileName = document.querySelector(profileInfo.profileNameSelector);
    this._profileDescription = document.querySelector(profileInfo.profileDescriptionSelector);
  }

// Метод возвращения данных профиля

  getUserInfo() {
    return {username: this._profileName.textContent, userdescription: this._profileDescription.textContent}
  }

// Метод заполнения данных профиля

  setUserInfo (userData) {
    this._profileName.textContent = userData.username;
    this._profileDescription.textContent = userData.userdescription;
  }
}
