import React from "react";
function InfoToolTip(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_is-opened" : ""}`}>
      <div className={`popup_type_${props.name}`}>
        <button
          className={`popup__close-image popup__close-image_${props.name}`}
          type="button"
          onClick={props.onClose}
        />
        <img
          className={`popup__image popup__image_${props.name}`}
          alt="галочка в кружочке"
          src={props.src}
        />
        <h3 className={`popup__heading popup__heading_${props.name}`}>
          {props.title}
        </h3>
        {props.children}
      </div>
    </div>
  );
}

export default InfoToolTip;
