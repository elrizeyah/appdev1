let favoriteFoods = ["Mozarella Pizza", "Shawarma", "Sushi"];
favoriteFoods.push("Mushroom Soup");
favoriteFoods.shift();

for (let food of favoriteFoods) {
    console.log(food);
}

let likedFoods = favoriteFoods.map(food => "I like " + food);
console.log(likedFoods);
