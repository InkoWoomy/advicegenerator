import { IAdviceInterface } from "../interfaces/AdviceInterface";

export default async function AdviceGenerator(){
    const promise = await fetch(`https://api.adviceslip.com/advice`);
    const data: IAdviceInterface = await promise.json();
    return data;
}