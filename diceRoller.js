console.log("Start of the Dice Roller!!")

// Simple dice roller function
/**
 * Example JSDoc comment - simple Dice Roller Function
 * @param {number} [diceSize] 
 * @returns 
 */
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

/**
 *  Using arrow function / Unanonymous function
 * @returns 
 */
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


// Implementing the callback feature/functionality/characteristic as an argument
/**
 * 
 * @param {*} side 
 * @param {*} rollDice 
 * @returns 
 */
function customDiceRoll(side, rollDice) {
    return rollDice(side); // rollDice(30)
}

result = customDiceRoll(30, rollDice);
console.log(result);

/**
 * Function to roll multiple dice
 * @param {*} numDice 
 * @param {*} diceSize 
 * @param {*} callback 
 */
function rollMultipleDice(numDice, diceSize, callback) {
    for (let i = 0; i < numDice; i++) {
        const result = rollDice(diceSize);
        callback(result);
    }
}

// Example of hoisting 
rollMultipleDice(3, 6, (result) => console.log("Rolled: " + result));