/**
 * @jest-environment jsdom
 */
import React from "react";
import { Provider } from "react-redux";
import { Gender, scReducers } from "@sc/sdk";

import { mount, ReactWrapper } from "enzyme";

import { Details } from "./Details";
import { createStore } from "redux";

describe("<Details />", () => {
    let wrapper: ReactWrapper;
    const store = createStore(scReducers);
    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Details />
            </Provider>
        )
    });

    it("should have an Age field", () => {
        expect(wrapper.find("select").length).toBe(1);
    });

    it("should have multiple Gender fields", () => {
        const gender = Object.values(Gender);
        const genderRadio = wrapper.find('input[type="radio"]');

        genderRadio?.forEach((value, index) => {
            expect(value.props()).toEqual({
                className: "form-check-input",
                type: "radio",
                name: "gender",
                onChange: expect.any(Function),
                value: gender[index],
                checked: false,
                id: gender[index]
            })
        });
    });

    describe("when age field changes", () => {
        it("should update the state", () => {
            const MOCK_AGE = 10;
            const event = { target: { id: "age", name: "age", value: MOCK_AGE }};
            const selectInput = wrapper.find("select");
            selectInput.simulate("change", event);
            expect(store.getState().details?.age).toBe(MOCK_AGE);
        });
    });

    describe("when gender field changes", () => {
        it("should update the state", () => {
            const MOCK_GENDER = Gender.NotSpecified;
            const event = { target: { id: "gender", name: "gender", value: MOCK_GENDER }};
            const radioInput = wrapper.find('input[type="radio"]').at(2);
            radioInput.simulate("change", event);
            expect(store.getState().details?.gender).toBe(MOCK_GENDER);
        });
    });
});
