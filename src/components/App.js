import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddCardPopup from "./AddCardPopup";
import ConfirmDeleteCardPopup from "./ConfirmDeleteCardPopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getCardsInfo()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsUpdateAvaterPopupOpen] = React.useState(
    false
  );

  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(
    false
  );

  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    link: "",
    name: "",
  });

  const [cards, setCards] = React.useState([]);

  const [cardToDelete, setCardToDelete] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  function handleCardDelete() {
    setIsLoading(true);
    api
      .deleteCard(cardToDelete)
      .then(() => {
        const newCards = cards.filter((element) => {
          return element._id !== cardToDelete;
        });

        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsUpdateAvaterPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleDeleteCardClick(card) {
    setCardToDelete(card._id);
    setIsDeleteCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      link: card.link,
      name: card.name,
    });
  }

  function handleAddCardSubmit(newCard) {
    setIsLoading(true);
    api
      .addNewCard(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsUpdateAvaterPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard({ isOpen: false, link: "", name: "" });
    setIsLoading(false);
  }

  function handleUpdateUser(data) {
    setIsLoading(true);
    api
      .updateUserInfo(data)
      .then((newUser) => {
        setCurrentUser(newUser);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateAvatar(link) {
    setIsLoading(true);
    api
      .updateAvatar(link)
      .then((userWithNewAvatar) => {
        setCurrentUser(userWithNewAvatar);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteCardClick}
          />
          <Footer />
          <ImagePopup
            isOpen={selectedCard.isOpen}
            src={selectedCard.link}
            name={selectedCard.name}
            onClose={closeAllPopups}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />
          <EditAvatarPopup
            onClose={closeAllPopups}
            isOpen={isEditAvatarPopupOpen}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          ></EditAvatarPopup>
          <AddCardPopup
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}
            onAddCard={handleAddCardSubmit}
            isLoading={isLoading}
          ></AddCardPopup>
          <ConfirmDeleteCardPopup
            onClose={closeAllPopups}
            isOpen={isDeleteCardPopupOpen}
            onConfirmDeleteCard={handleCardDelete}
            isLoading={isLoading}
          ></ConfirmDeleteCardPopup>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
