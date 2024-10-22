console.log("Hello World")

// x = 5;

// var x = 5;

// let x = 5;

const x = 5;

console.log(x)

let fruits = [
    "apple", 
    "banana", 
    "mango"
];

fruits.forEach(fruit => {
    console.log(fruit.toLocaleUpperCase());
});

console.log(fruits);

mapTest = fruits.map((fruit) => {
    return fruit.toLocaleUpperCase();
});

console.log(mapTest);

// varName = {
//     property: Value,
//     property: value
// }

// Objects
let person1 = {
    name: "Luke",
    age: 30,
    city: "Brisbane",
    greetingMessage: () => { //Function expression
        console.log(`Hello, I'm ${this.name}!`);
    }
};

console.log(person1.name);
console.log(person1.age);
console.log(person1.city);
console.log(person1.greetingMessage());

let person2 = {
    name: "Han",
    age: 50,
    city: "Space",
    greetingMessage: function() { //Function expression
        console.log("I shot first!");
        console.log("Call me " + this.name + "!");
    }
};

console.log(person2.name);
console.log(person2.age);
console.log(person2.city);
console.log(person2.greetingMessage());

// Functions
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(5, 3);

console.log(area);

function greet(name) {
    console.log("Hello " + name + "!");
}

let person3 = {
    name: "Jes",
    age: 30,
    city: "Brisbane",
    greetingMessage: greet
};
//          object.property
console.log(person3.name);
//          object.propertyFunction
console.log(person3.greetingMessage(person3.name));

console.log(this);

let person4 = {
    name: "Odin",
    age: 25,
    city: "Brisbane",
    greetingMessage: greet,
    contact: {
        phone: "0412345678",
        email: "Odin@example.com",
        voicemailMessage: function() {
            console.log("This message is from a nested object.");
        }
    }
};

console.log(person4["contact"]["email"]);
console.log(person4.contact.phone);

console.log(person4.contact.voicemailMessage());

console.log(Object.keys(person4));
console.log(Object.keys(person4.contact));
