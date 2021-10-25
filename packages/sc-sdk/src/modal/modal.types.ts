import { Action } from "../model";
import { ModalSection } from "./modal.model";

export enum ModalTypes {
    SET_ACTIVE = "[MODAL] SET",
    SUBMITTED = "[MODAL] SUBMITTED"
}

export type ModalSetActiveAction = Action<ModalTypes.SET_ACTIVE, ModalSection>;
export type ModalSubmittedAction = Action<ModalTypes.SUBMITTED>;

export type ModalActions =
    ModalSetActiveAction |
    ModalSubmittedAction;
