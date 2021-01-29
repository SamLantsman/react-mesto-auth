import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);


  return (
    <main className="content">
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
    </main>
  );
}

export default Main;
