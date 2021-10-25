export interface ModalState {
    active?: ModalSection;
    submitted?: boolean;
}

export enum ModalSection {
    Identity = "Identity",
    Details = "Details",
    Favourites = "Favourites",
    Summary = "Summary"
}

export interface ModalStore extends ModalState {}
