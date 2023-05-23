// Класс UserInfo

export default class UserInfo {
  constructor(profileInfo) {
    this._profileName = document.querySelector(profileInfo.profileNameSelector);
    this._profileDescription = document.querySelector(profileInfo.profileDescriptionSelector);
    this._profileAvatar = document.querySelector(profileInfo.profileAvatarSelector);
  }

// Метод возвращения данных профиля

  getUserInfoMethod() {
    return {username: this._profileName.textContent, userdescription: this._profileDescription.textContent}
  }

// Метод заполнения данных профиля

  setUserInfoMethod({username, userdescription, avatar}) {
    this._profileAvatarSelector.src = avatar;
    this._profileName.textContent = username;
    this._profileDescription.textContent = userdescription;
  }
}
