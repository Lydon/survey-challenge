import { Action } from "../model";
import { Identity } from "./identity.model";

export enum IdentityTypes {
    SET = "[IDENTITY] SET"
}

export type IdentitySetAction = Action<IdentityTypes.SET, Identity>;

export type IdentityActions = IdentitySetAction;
