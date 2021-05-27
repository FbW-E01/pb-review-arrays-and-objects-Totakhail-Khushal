// # Review - Arrays and Objects

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create an array that contains three strings.
const array = ["Hello", "world", "Greetings"]

// 2. Create an array that contains one string, one number and one boolean.
const newArray = ["Khushal", 2, ""]

// 3. Create an array that contains three empty arrays.
const array1 = ["", "", ""]

// 4. Create an empty object.
const object = {};

// 5. Create an object with three properties: id, email, password.
const object1 = {
    id: 123,
    email: "khushal@gmial.com",
    password: 123456678,
}

// 6. Create an array that contains three objects.All objects should have a width and a height property.

const newArray2 = [
    { width: 32, height: 23 },
    { width: 32, height: 23 },
    { width: 32, height: 23 },
]


// 7. Create an object that contains three properties: a string, an array and an object.Invent your own property names and values.
const object2 = {

}
// 8. Print the`type` of a variable that has an array value.



// 9. Print the`type` of a variable that has an object value. 



// 10. Create an array with five random values. 
const fruit = ["Apple", "Melon", "Mangos", "Lemon", "Grapes"]

// 10.1.Add one value to the end of the array.
fruit.push("Bananas");
console.log(fruit);


// 10.2.Add one thing to the beginning of the array.

fruit.unshift("Watermelon");
console.log(fruit);

// 10.3.Take out one thing from the end of the array.

fruit.pop();
console.log(fruit.pop());




// 10.4.Print the length of the array.
console.log(fruit.length);

// 10.5.Take out one thing from the end of the array.

fruit.pop();
console.log(fruit);


// 10.6.Take out one the 2nd thing from the array.

console.log(fruit.splice(1, 1,));

console.log(fruit);