//Object destructuring
const person = {
  name: "Ellissea",
  age: 24
};

const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

//Array destructuring
const hobbies = ["traveling", "eating"];
const [hobby1, hobby2] = hobbies;
console.log("Hobby 1:", hobby1);
console.log("Hobby 2:", hobby2);

//Destructuring in function parameters
function printName({ name }) {
  console.log("Person's name is:", name);
}

printName(person);
