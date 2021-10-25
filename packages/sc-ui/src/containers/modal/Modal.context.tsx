import { createContext, Dispatch, SetStateAction } from "react";

export const ModalContext = createContext<Dispatch<SetStateAction<boolean>>>(() => false);
