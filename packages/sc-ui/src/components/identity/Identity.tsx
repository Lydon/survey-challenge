import React, {
    ChangeEvent,
    useContext,
    useEffect, useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getIdentity,
    setIdentity as sdkSetIdentity
} from "@sc/sdk";

import { ModalContext} from "../../containers/modal/Modal.context";
import { isEmailValid } from "./Identity.utils";
import { InvalidEmailMessage } from "./Identity.const";

export const Identity: React.FC = () => {
    const identity = useSelector(getIdentity);
    const dispatch = useDispatch();
    const setCanProceed = useContext(ModalContext);
    const [emailValid, setEmailValid] = useState<boolean>(true);

    useEffect(() => {
        setCanProceed(true);
    }, []);

    const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const canSet = (e.target.id === "email" && e.target.value) ? isEmailValid(e.target.value): true;
        setEmailValid(canSet);
        setCanProceed(canSet);

        if (canSet) {
            dispatch(sdkSetIdentity({ ...identity, [e.target.id]: e.target.value }));
        }
    };

    return (
        <>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    defaultValue={identity?.name || ""}
                    aria-describedby="Name"
                    placeholder="Enter name"
                    onBlur={onBlur}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    defaultValue={identity?.email}
                    aria-describedby="Email"
                    placeholder="Enter Email"
                    onBlur={onBlur}
                />
                {
                    !emailValid &&
                    <div className="text-sm-start text-danger">
                        {InvalidEmailMessage}
                    </div>
                }
            </div>
        </>
    )
}
