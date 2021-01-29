import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from 'react';
function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `card__delete ${isOwn ? 'card__delete_visible' : ''}`
  ); 

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_clicked' : ''}`);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteCardClick() {
    props.onCardDelete(props.card)
  }
  
  

  return(
    <div className="card">
      <button className={cardDeleteButtonClassName} onClick={handleDeleteCardClick} type="button"/>
      <img className="card__image" src={props.src} alt={props.alt} onClick={handleClick}/>
      <div className="card__info">
        <h2 className="card__heading">{props.name}</h2>
        <div className="card__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"/>
          <p className="card__like-counter">{props.likes}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;