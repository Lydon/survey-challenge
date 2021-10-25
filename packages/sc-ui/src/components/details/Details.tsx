import React, {
    ChangeEvent,
    useContext,
    useEffect,
    useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getDetails,
    Gender,
    Details as DetailsType,
    setDetails as sdkSetDetails
} from "@sc/sdk";

import { ModalContext} from "../../containers/modal/Modal.context";

export const Details: React.FC = () => {
    const [details, setDetails] = useState<DetailsType>({
        gender: ""
    });
    const selector = useSelector(getDetails);
    const dispatch = useDispatch();
    const setCanProceed = useContext(ModalContext);

    useEffect(() => {
        if (Object.keys(selector)?.length) {
            setDetails(selector);
        }
        getCanProceed(selector);
    }, []);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const formDetails = { ...details, [e.target.name]: e.target.value };
        setDetails(formDetails);
        getCanProceed(formDetails);
    };

    const onBlur = () => {
        dispatch(sdkSetDetails(details));
    };

    function getCanProceed(details: DetailsType): void {
        setCanProceed(!!(details?.age && details?.gender));
    }

    // Converts enum to string array
    const gender = Object.keys(Gender)?.filter(key => isNaN(+key));

    return (
        <>
            <div className="form-group">
                <label htmlFor="age">Age*</label>
                <select
                    value={details?.age}
                    className="form-select mb-3"
                    aria-label="Age"
                    name="age"
                    onChange={onChange}
                    onBlur={onBlur}
                >
                    <option value={""}>Select Age</option>
                    {[...Array(100)].map(
                        (value: undefined, index: number) => (
                            <option value={index + 1}
                                    key={index}
                            >
                                {index + 1}
                            </option>
                        )
                    )}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="Gender">Gender*</label>
                {gender.map(
                    (value: string, index: number) => (
                        <div className="form-check" key={index}>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                checked={details.gender === value}
                                id={value} />
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
