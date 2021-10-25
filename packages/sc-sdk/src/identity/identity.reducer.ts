import { Identity, IdentityStore } from "./identity.model";
import { IdentityActions, IdentityTypes } from "./identity.types";

const INITIAL_STATE: IdentityStore = {};

export function identity (
    state: Readonly<IdentityStore> = INITIAL_STATE,
    action: IdentityActions
): IdentityStore {
    switch(action.type) {
        case IdentityTypes.SET: {
            const { name, email } = action.payload as Identity;
            return {
                ...state,
                name,
                email
            }
        }
        default: {
            return state;
        }
    }
}
