import { Action } from "redux";

import { setDetails } from "./details.action";
import { details } from "./details.reducer";
import { DetailsTypes } from "./details.types";
import { Details } from "./details.model";

describe("Details Reducer", () => {

    describe("Default", () => {
        it("should return the initial state", () => {
            expect(details(undefined, {} as Action)).toEqual({ gender: ""});
        });
    });

    describe("setDetails", () => {
        it(DetailsTypes.SET, () => {
            const SET_DETAILS_MOCK_ACTION: Details = {
                age: 10,
                gender: ""
            }
            const action = setDetails(SET_DETAILS_MOCK_ACTION);
            expect(details(undefined, action)).toEqual(SET_DETAILS_MOCK_ACTION)
        });
    });
});
