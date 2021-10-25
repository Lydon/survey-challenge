import { Details, DetailsStore } from "./details.model";
import { DetailsActions, DetailsTypes } from "./details.types";

const INITIAL_STATE: DetailsStore = {
    gender: ""
}

export function details (
    state: Readonly<DetailsStore> = INITIAL_STATE,
    action: DetailsActions
): DetailsStore {
    switch(action.type) {
        case DetailsTypes.SET: {
            const { age, gender } = action.payload as Details;
            return {
                ...state,
                age,
                gender
            }
        }
        default: {
           return state;
        }
    }
}
