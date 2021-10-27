/**
 * @jest-environment jsdom
 */
import React from "react";
import { Provider } from "react-redux";
import { scReducers } from "@sc/sdk";

import { mount, ReactWrapper } from "enzyme";

import { Identity } from "./Identity";
import { createStore } from "redux";
import { InvalidEmailMessage } from "./Identity.const";

describe("<Identity />", () => {
    let wrapper: ReactWrapper;
    const store = createStore(scReducers);
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Identity />
            </Provider>
        )
    });

    it("should have a name field", () => {
        expect(wrapper.find('input[id="name"]').props()).toEqual({
            type: "text",
            className: "form-control",
            id: "name",
            defaultValue: "",
            ["aria-describedby"]: "Name",
            "placeholder": "Enter name",
            onBlur: expect.any(Function)
        });
    });

    it("should have an email field", () => {
        expect(wrapper.find('input[id="email"]').props()).toEqual({
            type: "email",
            className: "form-control",
            id: "email",
            defaultValue: "",
            ["aria-describedby"]: "Email",
            "placeholder": "Enter Email",
            onBlur: expect.any(Function)
        });
    });

    describe("when name field looses focus", () => {
        it("should update the state", () => {
            const MOCK_NAME = "abc123";
            const event = { target: { id: "name", name: "name", value: MOCK_NAME }};
            const nameInput = wrapper.find('input[id="name"]');
            nameInput.simulate("blur", event);
            expect(store.getState().identity?.name).toBe(MOCK_NAME);
        });
    });

    describe("when email field looses focus", () => {
        describe("and email is invalid", () => {
            it("should NOT update the state", () => {
                const MOCK_EMAIL = "email123@";
                const event = { target: { id: "email", name: "email", value: MOCK_EMAIL } };
                const emailInput = wrapper.find('input[id="email"]');
                emailInput.simulate("blur", event);
                expect(store.getState().identity?.email).toBe("");
            });
        });

        describe("and email is valid", () => {
            it("should update the state", () => {
                const MOCK_EMAIL = "email123@mail.com";
                const event = { target: { id: "email", name: "email", value: MOCK_EMAIL } };
                const emailInput = wrapper.find('input[id="email"]');
                emailInput.simulate("blur", event);
                expect(store.getState().identity?.email).toBe(MOCK_EMAIL);
            });
        });
    });
});
