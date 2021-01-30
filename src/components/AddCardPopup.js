import React from "react";
import PopupWithForm from "./PopupWithForm";
function AddPlacePopup(props) {
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  function handleNameChange(e) {
    setCardName(e.target.value)
  }

  function handleLinkChange(e) {
    setCardLink(e.target.value)
  }

  function handleSubmit(e) {

    e.preventDefault();
    props.onAddCard({
      name: cardName,
      link: cardLink,
    });
    setCardName('');
    setCardLink('');
  }
  return (
    <PopupWithForm
      onClose={props.onClose}
      title="Название"
      name="addCard"
      button={props.isLoading ? "Cохранение..." : "Создать"}
      isOpen={props.isOpen ? true : false}
      onSubmit={handleSubmit}
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
        defaultValue=""
        onChange={handleNameChange}
      />
      <span className="popup__text_error" id="name-input-error"></span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__text popup__text-image"
        required
        id="link-input"
        defaultValue=""
        onChange={handleLinkChange}
      />
      <span className="popup__text_error" id="link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
