import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    });
    api.getCardsInfo().then((data) => {
      setCards(data);
    });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__image" alt="аватар" src={userAvatar} />
          <button
            className="profile__edit-avatar"
            type="button"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-block">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="gallery">
        {cards.map((item) => (
          <Card
            key={item._id}
            src={item.link}
            alt={item.alt}
            name={item.name}
            likes={item.likes.length}
            card={item}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
