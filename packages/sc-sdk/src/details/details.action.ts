import { DetailsSetAction, DetailsTypes } from "./details.types";
import { Details } from "./details.model";

export function setDetails(payload: Details): DetailsSetAction {
    return {
        type: DetailsTypes.SET,
        payload
    };
}
