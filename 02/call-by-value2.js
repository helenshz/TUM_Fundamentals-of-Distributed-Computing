function change(parameter){
    parameter.x = 0;
    parameter.y = 1;
}

let myObject = {x: 5, y: 3};

change(myObject);

console.log(myObject); // Output: { x: 0, y: 1 }