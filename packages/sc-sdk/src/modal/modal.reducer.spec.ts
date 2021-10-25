import { Action } from "redux";

import { setModalActiveSection, setModalSubmitted } from "./modal.action";
import { modal } from "./modal.reducer";
import { ModalTypes } from "./modal.types";
import { ModalSection, ModalState } from "./modal.model";

describe("Modal Reducer", () => {

    describe("Default", () => {
        it("should return the initial state", () => {
            expect(modal(undefined, {} as Action)).toEqual({});
        });
    });

    describe("setActiveModal", () => {
        it(ModalTypes.SET_ACTIVE, () => {
            const SET_ACTIVE_MODAL_MOCK_ACTION = ModalSection.Summary;
            const RECEIVED_ACTIVE_MODAL_MOCK_ACTION: ModalState = {
                active: SET_ACTIVE_MODAL_MOCK_ACTION
            }
            const action = setModalActiveSection(SET_ACTIVE_MODAL_MOCK_ACTION);
            expect(modal(undefined, action)).toEqual(RECEIVED_ACTIVE_MODAL_MOCK_ACTION)
        });
    });

    describe("setModalSubmitted", () => {
        it(ModalTypes.SUBMITTED, () => {
            const SET_MODAL_SUBMITTED_ACTION = true;
            const RECEIVED_MODAL_SUBMITTED_MOCK_ACTION: ModalState = {
                submitted: SET_MODAL_SUBMITTED_ACTION
            }
            const action = setModalSubmitted(SET_MODAL_SUBMITTED_ACTION);
            expect(modal(undefined, action)).toEqual(RECEIVED_MODAL_SUBMITTED_MOCK_ACTION)
        });
    });
});
