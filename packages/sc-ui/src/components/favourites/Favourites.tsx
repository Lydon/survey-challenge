import React, {
    ChangeEvent,
    useContext,
    useEffect,
    useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getFavourites,
    Favourites as FavouritesType,
    setFavourites as sdkSetFavourites,
} from "@sc/sdk";

import { ModalContext } from "../../containers/modal/Modal.context";

export const Favourites: React.FC = () => {
    const selector = useSelector(getFavourites);
    const dispatch = useDispatch();
    const [favourite, setFavourites] = useState<FavouritesType>({
        book: "",
        colours: []
    });
    const setCanProceed = useContext(ModalContext);
    const primaryColours = ["Red", "Yellow", "Blue"];

    useEffect(() => {
        if (Object.keys(selector)?.length) {
            setFavourites(selector);
        }
        getCanProceed(selector);
    }, []);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formDetails = { ...favourite, [e.target.name]: e.target.value };
        setFavourites(formDetails);
        getCanProceed(formDetails);
    };

    const onBlur = () => {
        dispatch(sdkSetFavourites(favourite));
    };

    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const hasColour = favourite?.colours?.includes(e.target.id);
        const colours = (hasColour && favourite?.colours?.filter(colour => colour !== e.target.id))
            || [...favourite?.colours, e.target.id];
        const formDetails = { ...favourite, colours };
        setFavourites(formDetails);
        getCanProceed(formDetails);
    }

    function getCanProceed(favourite: FavouritesType): void {
        setCanProceed(!!(favourite?.book?.trim()?.length && favourite?.colours?.length));
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="name">Book*</label>
                <input
                    type="name"
                    className="form-control"
                    name="book"
                    id="book"
                    value={favourite.book}
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
                            onFocus={onBlur}
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
