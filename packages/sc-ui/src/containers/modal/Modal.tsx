import React, {
    Reducer,
    useEffect,
    useReducer,
    useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal as BsModal } from "bootstrap";
import {
    getIsSubmitted,
    getModalActiveSection,
    ModalSection,
    setModalActiveSection,
    setModalSubmitted
} from "@sc/sdk";

import {
    Details,
    Favourites,
    Identity,
    Summary
} from "../../components";
import {
    ModalControls,
    ModalMessages,
    ModalOptionsDefaults,
    ModalSectionDefaults
} from "./Modal.const";
import { ModalControl, ModalProps, ModalState } from "./Modal.model";
import { ModalContext } from "./Modal.context";

// TODO:: useContext to check if can proceed to next - DONE
// TODO:: add summarization and add submit - DONE
// TODO:: persist store on refresh - DONE
// TODO:: clean reducer clean state - DONE
// TODO:: add Successfully submitted the form... NO NEED
// TODO:: restrict from submitting again if already submitted - DONE

// TODO:: add unit testing
// TODO:: add README with all steps - DONE
// TODO:: clean packages dependencies - DONE to recheck

// TODO:: provide the default option for model mapper survey
// TODO:: export as proper widget
// TODO:: display form section...

export const Modal: React.FC<ModalProps> = ({ options }) => {
    const [state, setState] = useReducer<Reducer<ModalState, Partial<ModalState>>>(
        (state, newState) => ({ ...state, ...newState }),
        {
            modalOptions: Object.assign({}, ModalOptionsDefaults, options),
            activeSection: undefined
        }
    );
    const dispatch = useDispatch();
    const [canProceed, setCanProceed] = useState<boolean>(false);
    const getActiveSection = useSelector(getModalActiveSection);
    const isModalSubmitted = useSelector(getIsSubmitted);

    const MODAL_NAME = "scModal";

    useEffect(() => {
        const scModal = new BsModal(document.querySelector(`#${MODAL_NAME}`) || "");

        setTimeout(() => {
            scModal.show();
        }, state?.modalOptions?.modalPopupInterval);
    }, []);

    useEffect(() => {
        const activeSection = getActiveSection;
        if (!activeSection) {
            setState({ activeSection: Object.values(ModalSectionDefaults).find(section => section.order === 0)?.name });
            return;
        }

        setState({ activeSection });
        activeSection && dispatch(setModalActiveSection(activeSection));
    }, [getActiveSection])

    function sectionToRender(): JSX.Element {
        switch (state?.activeSection) {
            case ModalSection.Details:
                return (<Details/>);
            case ModalSection.Identity:
                return (<Identity/>);
            case ModalSection.Favourites:
                return (<Favourites/>);
            case ModalSection.Summary:
                return (<Summary/>);
            default:
                return (<Identity/>);
        }
    }

    function previousSection(): ModalSection | undefined {
        return state?.activeSection && ModalSectionDefaults[state?.activeSection]?.previousSection;
    }

    function nextSection(): ModalSection | undefined {
        return state?.activeSection && ModalSectionDefaults[state?.activeSection]?.nextSection;
    }

    function hasSubmit(): boolean {
        return !!(state?.activeSection && ModalSectionDefaults[state?.activeSection]?.hasSubmit);
    }

    function onControlClick(control: ModalControl): void {
        const section = state?.activeSection && ModalSectionDefaults?.[state?.activeSection];
        const controlType = control === ModalControl.Next ? section?.nextSection : section?.previousSection;

        if (controlType) {
            dispatch(setModalActiveSection(controlType));
            setState({ activeSection: controlType });
        }
    }

    function onSubmit(): void {
        const scModal = BsModal.getInstance(document.querySelector(`#${MODAL_NAME}`) || "");
        scModal?.hide();
        dispatch(setModalSubmitted());
    }

    return (
        <>
            <div className="modal" id={MODAL_NAME} aria-labelledby="A survey Challenge Modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{state?.modalOptions?.title}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            {!isModalSubmitted &&
                                <h6>{state?.activeSection}</h6>
                            }
                            <form>
                                {isModalSubmitted
                                    && <h5>{ModalMessages.submitted}</h5>
                                }
                                {!isModalSubmitted &&
                                    <ModalContext.Provider value={setCanProceed}>
                                        {sectionToRender()}
                                    </ModalContext.Provider>
                                }
                            </form>
                        </div>
                        {!isModalSubmitted &&
                            <div className="modal-footer justify-content-between">
                                {
                                    previousSection() &&
                                    <button
                                        type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => onControlClick(ModalControl.Previous)}>
                                        {ModalControls.previous}
                                    </button>
                                }
                                <span
                                    className="d-inline-block float-end ms-auto"
                                    data-toggle="tooltip"
                                    title={!canProceed ? `${ModalMessages.required}` : ""}
                                >
                                    {
                                        nextSection() &&
                                        <button
                                            disabled={!canProceed}
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => onControlClick(ModalControl.Next)}>
                                            {ModalControls.next}
                                        </button>
                                    }
                                </span>
                                {
                                    hasSubmit() &&
                                    <button
                                        type="button"
                                        className="btn btn-primary float-end ms-auto"
                                        onClick={onSubmit}>
                                        {ModalControls.submit}
                                    </button>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
