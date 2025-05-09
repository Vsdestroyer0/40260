import { y } from "./yM.js";

function x(param) {
    y("x");
    console.log("x: " + param);
    return "fin x";
}

function xx(param) {
    console.log("xx: " + param);
    return "fin xx";
}

export { x, xx };