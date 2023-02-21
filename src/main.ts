import { generateGreetingMsg } from "./layer0";

export function greet(msg:string){
    console.error(msg);
    return true;
}

greet(generateGreetingMsg());