import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import AddCardPopup from "./AddCardPopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ConfirmDeleteCardPopup from "./ConfirmDeleteCardPopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <Header
        button="Выйти"
        onClick={props.onClick}
        email={props.email}
        faded={props.faded}
      />
      <section className="profile">
        <div className="profile__avatar">
          <img
            className="profile__image"
            alt="аватар"
            src={currentUser.avatar}
          />
          <button
            className="profile__edit-avatar"
            type="button"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-block">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace} />
      </section>
      <section className="gallery">
        {props.cards.map((item) => (
          <Card
            key={item._id}
            src={item.link}
            alt={item.alt}
            name={item.name}
            likes={item.likes.length}
            card={item}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
      <Footer />
      <ImagePopup
        isOpen={props.isOpen}
        src={props.src}
        name={props.name}
        onClose={props.onClose}
      />
      <EditProfilePopup
        isOpen={props.isOpenProfilePopup}
        onClose={props.onClose}
        onUpdateUser={props.onUpdateUser}
        isLoading={props.isLoading}
      />
      <AddCardPopup
        onClose={props.onClose}
        isOpen={props.isOpenAddPlace}
        onAddCard={props.onAddCard}
        isLoading={props.isLoading}
      />
      <EditAvatarPopup
        isOpen={props.isOpenAvatar}
        onUpdateAvatar={props.onUpdateAvatar}
        onClose={props.onClose}
        isLoading={props.isLoading}
      />
      <ConfirmDeleteCardPopup
        onClose={props.onClose}
        isOpen={props.isOpenDeleteCard}
        onConfirmDeleteCard={props.onConfirmDeleteCard}
        isLoading={props.isLoading}
      />
    </main>
  );
}

export default Main;
