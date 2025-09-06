// Base class
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi, I am " + this.name);
  }
}

// Subclass
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Usage
const student = new Student("NAME");
student.sayHello(); // Hi, I am Elmer
student.study();    // Elmer is studying
