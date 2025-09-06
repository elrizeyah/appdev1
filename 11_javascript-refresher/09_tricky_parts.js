console.log(5 == "5");   // true
console.log(5 === "5");  // false

let a; 
let b = null;
console.log("a:", a, "b:", b);

let obj = {
    regFunc: function() { console.log("regular:", this); },
    arrowFunc: () => console.log("arrow:", this)
};
obj.regFunc();
obj.arrowFunc();

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1:", arr1, "arr2:", arr2);

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
arr4.push(4);
console.log("arr3:", arr3, "arr4:", arr4);