function change(parameter){ // let parameter = primitive;
    parameter = 'changed'; // parameter is a local variable, so changing it does not affect the original variable
}

let primitive = 'original';

change(primitive);

console.log(primitive); // Output: 'original' - the original variable is not changed