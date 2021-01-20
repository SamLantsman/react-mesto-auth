function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  } 

  return(
    <div className="card">
      <button className="card__delete"/>
      <img className="card__image" src={props.src} alt={props.alt} onClick={handleClick}/>
      <div className="card__info">
        <h2 className="card__heading">{props.name}</h2>
        <div className="card__like-container">
          <button className="card__like"/>
          <p className="card__like-counter">{props.likes}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;