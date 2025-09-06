let hobbies = ["Dancing", "Gaming", "Traveling"];
hobbies.map(h => console.log(h));

let student = { name: "Hannah Gomez", age: 15 };
let { name, age } = student;
console.log(name, age);

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr);