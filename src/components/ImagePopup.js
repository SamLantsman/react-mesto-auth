function ImagePopup (props) {
  return (
    <div className={`popup popup__image ${props.isOpen ? "popup_is-opened" : ""}`}>
    <div className="popup__image-content">
        <button className="popup__close-image popup__image-close-image" type="button" onClick={props.onClose}/>
        <img className="popup__image-picture" alt={props.src} src={props.src}/>
        <p className="popup__caption">{props.name}</p>
    </div>
</div>
  )
}

export default ImagePopup;