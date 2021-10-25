import { ModalSection } from "@sc/sdk";

export type ModalProps = {
    options?: ModalOptions;
    sections?: ModalSectionConfig;
};

export interface ModalOptions {
    title: string;
    modalPopupInterval?: number;
}

export interface ModalState {
    modalOptions: ModalOptions;
    activeSection?: ModalSection;
    sections: ModalSectionConfig;
}

export interface ModalSectionConfig {
    name: ModalSection;
    order: number;
    nextSection?: ModalSection;
    previousSection?: ModalSection;
    hasSubmit?: boolean;
}

export enum ModalControl {
    Next = "Next",
    Previous = "Previous"
}
