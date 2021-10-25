import { Action } from "../model";
import { Details } from "./details.model";

export enum DetailsTypes {
    SET = "[DETAILS] SET"
}

export type DetailsSetAction = Action<DetailsTypes.SET, Details>;

export type DetailsActions = DetailsSetAction;
