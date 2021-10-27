import React, {
    ChangeEvent,
    useContext,
    useEffect
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getFavourites,
    Favourites as FavouritesType,
    setFavourites as sdkSetFavourites,
} from "@sc/sdk";

import { ModalContext } from "../../containers/modal/Modal.context";

export const Favourites: React.FC = () => {
    const favourite = useSelector(getFavourites);
    const dispatch = useDispatch();

    const setCanProceed = useContext(ModalContext);
    const primaryColours = ["Red", "Yellow", "Blue"];

    useEffect(() => {
        getCanProceed(favourite);
    }, []);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        getCanProceed({ ...favourite,  [e.target.name]: e.target.value });
    }

    const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const formDetails = { ...favourite,  [e.target.name]: e.target.value };
        getCanProceed(formDetails);
        dispatch(sdkSetFavourites(formDetails));
    }

    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const hasColour = favourite?.colours?.includes(e.target.id);
        const colours = (hasColour && favourite?.colours?.filter(colour => colour !== e.target.id))
            || [...favourite?.colours || "", e.target.id];
        const formDetails = { ...favourite, colours };
        getCanProceed(formDetails);
        dispatch(sdkSetFavourites(formDetails));
    }

    function getCanProceed(favourite: FavouritesType): void {
        setCanProceed(!!(favourite?.book?.trim()?.length && favourite?.colours?.length));
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="name">Book*</label>
                <input
                    type="text"
                    className="form-control"
                    name="book"
                    id="book"
                    defaultValue={favourite?.book}
                    aria-describedby="Favourite Book"
                    placeholder="Favourite Book"
                    onBlur={onBlur}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="favouriteColour">Colour*</label>
                {primaryColours.map(
                (value: string, index: number) => (
                    <div className="form-check" key={index}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="colours"
                            id={value}
                            checked={favourite?.colours?.includes(value)}
                            onChange={onCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor={value}>
                            {value}
                        </label>
                    </div>
                )
            )}
            </div>
        </>
    )
}
