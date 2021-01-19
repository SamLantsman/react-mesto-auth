import { popupDelete, popupAddCard } from "./constants.js"
export default function renderLoading(isLoading, popup) {
    const submitButton = popup.querySelector(".popup__save-button");
    if (popup === popupDelete) {
        if (isLoading) {
            submitButton.textContent = "Удяляю...";
        } else {
            submitButton.textContent = "Да";
        }
    } else {
        if (isLoading) {
            submitButton.textContent = "Cохранениe...";
        } else {
            if (popup === popupAddCard) {
                submitButton.textContent = "Создать";
            } else {
                submitButton.textContent = "Сохранить";
            }
        }
    }
}