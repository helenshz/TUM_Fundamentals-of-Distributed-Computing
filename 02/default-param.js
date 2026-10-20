function perimeter(length=2, width=1){
    return 2 * (length + width);
}

perimeter(5, 3);

perimeter(5); // length=5, Default parameter for width
perimeter(); // Default parameter for length and width
perimeter(undefined, 3); // Default parameter for length