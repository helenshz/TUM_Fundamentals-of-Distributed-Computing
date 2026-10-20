/**
 * calculates the circumference of a circle given its radius
 * @param {number} radius 
 * @returns {number} circumference of the circle
 */

function circumference(radius) {
    let result = 2 * Math.PI * radius;
    return result;
}

const radius = 10;

console.log(circumference(radius));