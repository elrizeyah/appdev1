// Regular Function
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Aliah"));

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log("Addition (5+3):", add(5, 3));

// Arrow Function
const multiply = (a, b) => a * b;
console.log("Multiplication (2*4):", multiply(2, 4));

// Custom calculator (sum and product)
function calculator(a, b) {
    return { sum: a + b, product: a * b };
}
console.log("Calculator:", calculator(3, 5));

