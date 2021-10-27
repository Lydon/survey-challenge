import { Action } from "../model";
import { Favourites } from "./favourites.model";

export enum FavouritesTypes {
    SET = "[FAVOURITES] SET"
}

export type FavouritesSetAction = Action<FavouritesTypes.SET, Favourites>;

export type FavouritesActions = FavouritesSetAction;
