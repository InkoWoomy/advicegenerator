export interface IAdviceInterface {
    slip: Slip;
}

export type Slip = {
    id:     number;
    advice: string;
}
