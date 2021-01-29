import PopupWithForm from "./PopupWithForm";
import React from "react";
function EditAvatarPopup(props) {
  const inputRef = React.createRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(inputRef.current.value);
  }

  return (
    <>
      <PopupWithForm
        onClose={props.onClose}
        title="Обновить аватар"
        name="updateAvatar"
        button={props.isLoading ? "Сохранение..." : "Обновить аватар"}
        isOpen={props.isOpen ? true : false}
        onSubmit={handleSubmit}
      >
        <input
          type="url"
          placeholder="Ссылка на аватар"
          className="popup__text popup__text-avatar"
          required
          id="link-input"
          ref={inputRef}
        />
        <span className="popup__text_error" id="link-input-error"></span>
      </PopupWithForm>
    </>
  );
}

export default EditAvatarPopup;
