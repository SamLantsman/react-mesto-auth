import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsUpdateAvaterPopupOpen] = React.useState(
    false
  );

  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    link: "",
    name: "",
  });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsUpdateAvaterPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      link: card.link,
      name: card.name,
    });

  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsUpdateAvaterPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ isOpen: false, link: "", name: "" });
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup 
          isOpen={selectedCard.isOpen}
          src={selectedCard.link}
          name={selectedCard.name}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          onClose={closeAllPopups}
          title="Редактировать профиль"
          name="editProfile"
          button="Сохранить"
          isOpen={isEditProfilePopupOpen ? true : false}
        >
          <input
            type="text"
            name="name"
            placeholder="Имя"
            className="popup__text popup__text-name"
            maxLength="40"
            minLength="2"
            required
            id="profile-input"
          />
          <span className="popup__text_error" id="profile-input-error"></span>
          <input
            type="text"
            name="job"
            placeholder="Вид деятельности"
            className="popup__text popup__text-job"
            maxLength="200"
            minLength="2"
            required
            id="job-input"
          />
          <span className="popup__text_error" id="job-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          onClose={closeAllPopups}
          title="Название"
          name="addCard"
          button="Создать"
          isOpen={isAddPlacePopupOpen ? true : false}
        >
          <input
            type="text"
            name="name"
            placeholder="Новое место"
            className="popup__text popup__text-name"
            maxLength="40"
            minLength="2"
            required
            id="profile-input"
          />
          <span className="popup__text_error" id="name-input-error"></span>
          <input
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__text popup__text-image"
            required
            id="link-input"
          />
          <span className="popup__text_error" id="link-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          onClose={closeAllPopups}
          title="Обновить аватар"
          name="updateAvatar"
          button="Обновить аватар"
          isOpen={isEditAvatarPopupOpen ? true : false}
        >
          <input
            type="url"
            placeholder="Ссылка на аватар"
            className="popup__text popup__text-avatar"
            required
            id="link-input"
          />
          <span className="popup__text_error" id="link-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          onClose={closeAllPopups}
          title="Вы уверены?"
          name="deleteCard"
          button="Да"
        ></PopupWithForm>
      </div>
    </div>
  );
}

export default App;
