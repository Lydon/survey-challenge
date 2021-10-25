import { ModalSection, ModalStore } from "./modal.model";
import { ModalActions, ModalTypes } from "./modal.types";

const INITIAL_STATE: ModalStore = {};

export function modal (
    state: Readonly<ModalStore> = INITIAL_STATE,
    action: ModalActions
): ModalStore {
    switch(action.type) {
        case ModalTypes.SET_ACTIVE: {
            const active = action.payload as ModalSection;

            return {
                ...state,
                active
            }
        }
        case ModalTypes.SUBMITTED: {
            return {
                ...state,
                submitted: true
            }
        }
        default: {
            return state;
        }
    }
}
