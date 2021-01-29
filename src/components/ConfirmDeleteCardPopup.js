import PopupWithForm from "./PopupWithForm";
import React from "react";
function ConfirmDeleteCardPopup(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirmDeleteCard();
  }

  return (
      <PopupWithForm
        onClose={props.onClose}
        title="Вы уверены?"
        name="deleteCard"
        button={props.isLoading ? "Секундочку, удаляю..." : "Да"}
        isOpen={props.isOpen ? true : false}
        onSubmit={handleSubmit}
      ></PopupWithForm>
  );
}

export default ConfirmDeleteCardPopup;
