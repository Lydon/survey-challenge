import { ModalSetActiveAction, ModalSubmittedAction, ModalTypes } from "./modal.types";
import { ModalSection } from "./modal.model";

export function setModalActiveSection(payload: ModalSection): ModalSetActiveAction {
    return {
        type: ModalTypes.SET_ACTIVE,
        payload
    };
}

export function setModalSubmitted(): ModalSubmittedAction {
    return {
        type: ModalTypes.SUBMITTED
    }
}
