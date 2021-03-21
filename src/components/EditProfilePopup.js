import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [job, setJob] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setJob(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: job,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleJobChange(e) {
    setJob(e.target.value);
  }

  React.useEffect(() => {
    if (name !== undefined && job !== undefined) {
      const isNameFilled = name.length >= 2 && name.length <= 40;
      const nameFieldValid = isNameFilled;

      const isJobFilled = job.length >= 2 && job.length <= 200;
      const jobFieldValid = isJobFilled;
    }
  });

  return (
    <PopupWithForm
      onClose={props.onClose}
      title="Редактировать профиль"
      name="editProfile"
      button={props.isLoading ? "Редактирую..." : "Сохранить"}
      isOpen={props.isOpen ? true : false}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Имя"
        className="popup__text popup__text-name"
        maxLength="40"
        minLength="2"
        required
        id="profile-input"
        defaultValue={name}
        onChange={handleNameChange}
      />
      <span className="popup__text_error" id="profile-input-error"></span>
      <input
        type="text"
        name="job"
        placeholder="Вид деятельности"
        className="popup__text popup__text-job"
        maxLength="200"
        minLength="2"
        required
        id="job-input"
        defaultValue={job}
        onChange={handleJobChange}
      />
      <span className="popup__text_error" id="job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
