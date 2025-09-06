//One parameter, implicit return
const greet = name => "Hello, " + name;
console.log(greet("Billie Eilish"));

//One parameter, explicit return
const square = n => {
  return n * n;
};
console.log("Square:", square(5));

//No parameter
const sayHi = () => {
  console.log("Hi!");
};
sayHi();
