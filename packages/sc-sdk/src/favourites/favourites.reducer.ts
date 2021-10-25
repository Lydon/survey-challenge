import { Favourites, FavouritesStore } from "./favourites.model";
import { FavouritesActions, FavouritesTypes } from "./favourites.types";

const INITIAL_STATE: FavouritesStore = {
    book: "",
    colours: []
};

export function favourites (
    state: Readonly<FavouritesStore> = INITIAL_STATE,
    action: FavouritesActions
): FavouritesStore {
    switch(action.type) {
        case FavouritesTypes.SET: {
            const { book, colours } = action.payload as Favourites;
            return {
                ...state,
                book,
                colours
            }
        }
        default: {
            return state;
        }
    }
}
