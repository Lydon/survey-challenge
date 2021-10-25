import { IdentitySetAction, IdentityTypes } from "./identity.types";
import { Identity } from "./identity.model";

export function setIdentity(payload: Identity): IdentitySetAction {
    return {
        type: IdentityTypes.SET,
        payload
    };
}
