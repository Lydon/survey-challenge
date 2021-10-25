export interface Details {
    age?: number;
    gender: string;
}

export interface DetailsStore extends Details {}

export enum Gender {
    Male,
    Female,
    X,
    NotSpecified
}
