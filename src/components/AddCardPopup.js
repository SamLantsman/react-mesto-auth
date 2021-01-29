import React from "react";
import PopupWithForm from "./PopupWithForm";
function AddPlacePopup(props) {
  const nameRef = React.createRef();
  const cardLinkRef = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddCard({
      name: nameRef.current.value,
      link: cardLinkRef.current.value,
    });
    nameRef.current.value = "";
    cardLinkRef.current.value = "";
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
        ref={nameRef}
        defaultValue=""
      />
      <span className="popup__text_error" id="name-input-error"></span>
      <input
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__text popup__text-image"
        required
        id="link-input"
        ref={cardLinkRef}
        defaultValue=""
      />
      <span className="popup__text_error" id="link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
