/**
 * @jest-environment jsdom
 */
import React from "react";
import { Provider } from "react-redux";
import { Gender, scReducers } from "@sc/sdk";

import { mount, ReactWrapper } from "enzyme";

import { Favourites } from "./Favourites";
import { createStore } from "redux";

describe("<Favourites />", () => {
    let wrapper: ReactWrapper;
    const store = createStore(scReducers);
    const primaryColours = ["Red", "Yellow", "Blue"];

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <Favourites />
            </Provider>
        )
    });

    it("should have a book field", () => {
        expect(wrapper.find('input[name="book"]').props()).toEqual({
            type: "text",
            className: "form-control",
            id: "book",
            name: "book",
            defaultValue: "",
            ["aria-describedby"]: "Favourite Book",
            "placeholder": "Favourite Book",
            onBlur: expect.any(Function),
            onChange: expect.any(Function),
        });
    });

    it("should have a multi checkbox with Colours", () => {
        const colourCheckbox = wrapper.find('input[type="checkbox"]');

        colourCheckbox?.forEach((value, index) => {
            expect(value.props()).toEqual({
                className: "form-check-input",
                type: "checkbox",
                name: "colours",
                onChange: expect.any(Function),
                checked: false,
                id: primaryColours[index]
            })
        });
    });

    describe("when book field looses focus", () => {
        it("should update the state", () => {
            const MOCK_BOOK = "book123";
            const event = { target: { id: "book", name: "book", value: MOCK_BOOK }};
            const bookInput = wrapper.find('input[name="book"]');
            bookInput.simulate("blur", event);
            expect(store.getState().favourites?.book).toBe(MOCK_BOOK);
        });
    });

    describe("when colour field changes", () => {
        it("should update the state", () => {
            const MOCK_COLOUR = primaryColours[0];
            const event = { target: { id: primaryColours[0], name: "colour", value: MOCK_COLOUR }};
            const checkBox = wrapper.find('input[type="checkbox"]').at(0);
            checkBox.simulate("change", event);
            expect(store.getState().favourites?.colours).toStrictEqual([MOCK_COLOUR]);
        });
    });
});
