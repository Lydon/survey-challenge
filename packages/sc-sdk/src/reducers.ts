import { combineReducers } from "redux";

import { modal } from "./modal";
import { identity } from "./identity";
import { details } from "./details";
import { favourites } from "./favourites";

export const scReducers = combineReducers({
    modal,
    identity,
    details,
    favourites
});
