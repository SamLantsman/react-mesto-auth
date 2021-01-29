function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_is-opened" : ""
      }`}
    >
      <form
        className={`popup__content popup_type_${props.name}-content`}
        name={`${props.name}`}
        noValidate
      >
        <button
          className="popup__close-image"
          type="button"
          onClick={props.onClose}
        />
        <h3 className="popup__heading">{props.title}</h3>
        {props.children}
        <button
          className="popup__save-button"
          type="submit"
          onClick={props.onSubmit}
        >
          {props.button}
        </button>
      </form>
    </div>
  );
}
export default PopupWithForm;
