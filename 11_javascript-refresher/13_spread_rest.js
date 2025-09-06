//Spread operator - Array
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log("More Numbers:", moreNumbers);

//Spread operator - Object
const user = { name: "Elissea", age: 24 };
const updatedUser = { ...user, city: "Makati" };
console.log("Updated User:", updatedUser);

//Rest operator
const sum = (...args) => {
  return args.reduce((acc, val) => acc + val, 0);
};
console.log("Sum:", sum(1, 2, 3, 4, 5));
