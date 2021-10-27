import { ModalOptions, ModalSectionConfig } from "./Modal.model";
import { ModalSection } from "@sc/sdk";

export const ModalOptionsDefaults: ModalOptions = {
    title: "A survey challenge",
    modalPopupInterval: 2000
}

export const ModalControls = {
    previous: "<< PREVIOUS",
    next: "NEXT >>",
    submit: "SUBMIT"
}

export const ModalMessages = {
    required: "The fields marked with * are required!",
    submitted: "Form has already been submitted!"
}

export const ModalSectionDefaults: Record<ModalSection, ModalSectionConfig> = {
    [ModalSection.Identity]: {
        name: ModalSection.Identity,
        order: 0,
        nextSection: ModalSection.Details
    },
    [ModalSection.Details]: {
        name: ModalSection.Details,
        order: 1,
        nextSection: ModalSection.Favourites,
        previousSection: ModalSection.Identity
    },
    [ModalSection.Favourites]: {
        name: ModalSection.Favourites,
        order: 2,
        nextSection: ModalSection.Summary,
        previousSection: ModalSection.Details
    },
    [ModalSection.Summary]: {
        name: ModalSection.Summary,
        order: 3,
        previousSection: ModalSection.Favourites,
        hasSubmit: true
    }
}
