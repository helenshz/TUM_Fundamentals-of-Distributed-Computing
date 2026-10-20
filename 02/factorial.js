/**
 * calculates the factorial of a number n
 */

const n = 100; // can't change
let result = 1; // result will change

for (let i = 1; i <= n; i++) {
    result = result * i;
}

console.log(result);