let aboutMe = {
    name: "Ellissea",
    age: 24,
    course: "BSIS",
    
    introduce: function() {
        console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};

aboutMe.introduce();
aboutMe.hobby = "Singing, Drawing, and Dancing.";
console.log("Hobby:", aboutMe.hobby);
