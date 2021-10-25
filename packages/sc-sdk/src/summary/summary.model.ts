import { Identity } from "../identity";
import { Details } from "../details";
import { Favourites } from "../favourites";

export interface Summary extends Identity, Details, Favourites {
    colours: string[];
}
