import { ModalStore } from "./modal";
import { IdentityStore } from "./identity";
import { DetailsStore } from "./details";
import { FavouritesStore } from "./favourites";

export interface Action<ActionType, PayloadType = null> {
    type: ActionType;
    payload?: PayloadType;
}

export interface SCStore {
    modal: ModalStore;
    identity: IdentityStore;
    details: DetailsStore;
    favourites: FavouritesStore;
}
