import React, {
    ChangeEvent,
    useContext,
    useEffect,
    useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getIdentity,
    Identity as IdentityType,
    setIdentity as sdkSetIdentity
} from "@sc/sdk";

import { ModalContext} from "../../containers/modal/Modal.context";

export const Identity: React.FC = () => {
    const [identity, setIdentity] = useState<IdentityType>({
        name: "",
        email: ""
    });
    const selector = useSelector(getIdentity);
    const dispatch = useDispatch();
    const setCanProceed = useContext(ModalContext);

    useEffect(() => {
        setCanProceed(true);
        if (Object.keys(selector)?.length) {
            setIdentity(selector);
        }
    }, []);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIdentity({ ...identity, [e.target.id]: e.target.value });
    };

    const onBlur = () => {
        dispatch(sdkSetIdentity(identity));
    };

    return (
        <>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="name"
                    className="form-control"
                    id="name"
                    value={identity?.name || ""}
                    aria-describedby="Name"
                    placeholder="Enter name"
                    onBlur={onBlur}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={identity?.email}
                    aria-describedby="Email"
                    placeholder="Enter Email"
                    onBlur={onBlur}
                    onChange={onChange}
                />
            </div>
        </>
    )
}
