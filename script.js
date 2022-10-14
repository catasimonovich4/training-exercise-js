//Ejercicio "Mi primer Java Script" (equivalente)
var name = 'Catalina';
var age = 22;
var single = false;
var numbers = [1,2,3,4,5,6,7,8,9,10];
var colleagues = ['Andy', 'Rochius', 'Leo. C', 'Cata', 'Isa']
var values = {
    name: 'Catalina',
    age: 22,
    single: false,
    numbers: [1,2,3,4,5,6,7,8,9,10],
    colleagues: ['Andy','Rochius','Leo. C','Cata','Isa']
}
var user = {
    name: 'Leonardo',
    lastname: 'Cipollone',
    age: 25,
    favnumbers: [7,4,25],
    pets: {
        pet1: {
            name: 'Tomi',
            animal: 'dog',
            age: 4,
            color: 'black'
        },
        pet2: {
            name: 'Chiquito',
            animal: 'dog',
            age: 0.2,
            color: 'white'
        }
    }
}

console.log(name, age, single, numbers, colleagues, values, user);

//Ejercicio "Tomando decisiones"
console.log("IF-ELSE")
console.log("Marital status:")

if (single=true) {
    console.log("In a relationship");
} else {
    console.log("Single"); 
}

console.log("Age range:")

if (age<30) {
    console.log("Age is less than 30")
} else {
    console.log("Age is more than 30")
}

console.log("SWITCH")
console.log("Do you have pets?:")

var pet= "no";

switch (pet) {
    case 'no':
        console.log("User has no pets");
    break;
    case 'cat':
        console.log("User has a cat");
    break;
    case 'dog':
        console.log("User has a dog");
    break;
    default:
        console.log("None of above");
}

var pet= "cat";

switch (pet) {
    case 'no':
        console.log("User has no pets");
    break;
    case 'cat':
        console.log("User has a cat");
    break;
    case 'dog':
        console.log("User has a dog");
    break;
    default:
        console.log("None of above");
}

var pet='bird';

switch (pet) {
    case 'no':
        console.log("User has no pets");
    break;
    case 'cat':
        console.log("User has a cat");
    break;
    case 'dog':
        console.log("User has a dog");
    break;
    default:
        console.log("None of above");
}