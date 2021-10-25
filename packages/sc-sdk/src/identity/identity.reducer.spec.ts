import { Action } from "redux";

import { setIdentity } from "./identity.action";
import { identity } from "./identity.reducer";
import { IdentityTypes } from "./identity.types";
import { Identity } from "./identity.model";

describe("Identity Reducer", () => {

    describe("Default", () => {
        it("should return the initial state", () => {
            expect(identity(undefined, {} as Action)).toEqual({ name: "", email: "" });
        });
    });

    describe("setIdentity", () => {
        it(IdentityTypes.SET, () => {
            const SET_IDENTITY_MOCK_ACTION: Identity = {
                name: "abc123",
                email: "abc123@xyz.com"
            }
            const action = setIdentity(SET_IDENTITY_MOCK_ACTION);
            expect(identity(undefined, action)).toEqual(SET_IDENTITY_MOCK_ACTION)
        });
    });
});
