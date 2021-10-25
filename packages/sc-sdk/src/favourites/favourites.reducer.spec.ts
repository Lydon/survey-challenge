import { Action } from "redux";

import { setFavourites } from "./favourites.action";
import { favourites } from "./favourites.reducer";
import { FavouritesTypes } from "./favourites.types";
import { Favourites } from "./favourites.model";

describe("Favourites Reducer", () => {

    describe("Default", () => {
        it("should return the initial state", () => {
            expect(favourites(undefined, {} as Action)).toEqual({ book: "", colours: [] });
        });
    });

    describe("setFavourites", () => {
        it(FavouritesTypes.SET, () => {
            const SET_FAVOURITES_MOCK_ACTION: Favourites = {
                book: "abc123",
                colours: ["abc456"]
            }
            const action = setFavourites(SET_FAVOURITES_MOCK_ACTION);
            expect(favourites(undefined, action)).toEqual(SET_FAVOURITES_MOCK_ACTION)
        });
    });
});
