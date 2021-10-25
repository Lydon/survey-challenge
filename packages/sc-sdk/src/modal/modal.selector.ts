import { SCStore } from "../model";

export const getModalActiveSection = (state: SCStore) => state?.modal?.active;

export const getIsSubmitted = (state: SCStore) => state?.modal?.submitted;
