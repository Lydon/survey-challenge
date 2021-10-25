import { ModalSection } from "@sc/sdk";

export type ModalProps = {
    options: ModalOptions;
    controls?: ModalControls;
};

export interface ModalOptions {
    title: string;
    modalPopupInterval?: number;
}

export interface ModalState {
    modalOptions: ModalOptions;
    activeSection?: ModalSection;
}

export interface ModalSectionConfig {
    name: ModalSection;
    order: number;
    nextSection?: ModalSection;
    previousSection?: ModalSection;
    hasSubmit?: boolean;
}

interface ModalControls {
    showPrevious?: boolean;
    showNext?: boolean;
    save?: boolean;
}

export enum ModalControl {
    Next = "Next",
    Previous = "Previous"
}
