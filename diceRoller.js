console.log("Start of the Dice Roller!!")

// Simple dice roller function
function rollDice(diceSize = 6) {
    console.log(`Rolling a ${diceSize} sided die...`);
    let diceSide = Math.ceil(Math.random() * diceSize);
    // console.log(diceSide);
    return diceSide;
}



// Simple call, default parameter value used
rollDice();

// Overwriting the default parameter value
rollDice(diceSize = 10);
// or
rollDice(20);


// Specific dice roller function that calls the simple function
// Using function expression
const rollDice25 = function () {
    rollDice(25);
}

rollDice25();

// Using arrow function / Unanonymous function
const rollDice15 = () => {
    return rollDice(15);
    // or 
    // result = rollDice(15);
    // return result;
}

let diceSide15 = rollDice15();
console.log("The side that was rolled was: " + diceSide15);

// If we want more functionality, then we use the {}, otherwise we can use the shortened version
const rollDice8 = () => rollDice(8);
console.log("The side that was rolled was: " + rollDice8());
