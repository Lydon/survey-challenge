import {FavouritesSetAction, FavouritesTypes } from "./favourites.types";
import { Favourites } from "./favourites.model";

export function setFavourites(payload: Favourites): FavouritesSetAction {
    return {
        type: FavouritesTypes.SET,
        payload
    };
}
