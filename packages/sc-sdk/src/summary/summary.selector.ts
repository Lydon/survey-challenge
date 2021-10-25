import { SCStore } from "@sc/sdk";

export const getSummary = (state: SCStore) => {
    return {
        name: state?.identity?.name || "",
        email: state?.identity?.email || "",
        age: state?.details?.age,
        gender: state?.details?.gender,
        book: state?.favourites?.book,
        colours: state?.favourites?.colours?.toString()
    }
}
