import { Action } from "../model";
import { Favourites } from "./Favourites.model";

export enum FavouritesTypes {
    SET = "[FAVOURITES] SET"
}

export type FavouritesSetAction = Action<FavouritesTypes.SET, Favourites>;

export type FavouritesActions = FavouritesSetAction;
