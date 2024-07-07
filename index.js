// Prompt user for base and power
let base = prompt("Enter the base number:");
let power = prompt("Enter the power:");

// Parse inputs into integers
base = parseInt(base);
power = parseInt(power);

// Calculate the result using exponentiation operator **
let result = base ** power;

// Display the result in an alert box
alert(`${base} raised to the power of ${power} is equal to ${result}`);
