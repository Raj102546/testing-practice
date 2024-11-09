function calculator(a, b, operator) {
    if (operator === "+") {
        return a + b; //Adding a and b
    } else if (operator === "-") {
        return a - b; //Subtracting a and b
    } else if (operator === "*") {
        return a * b; //Multiplying a and b
    } else if (operator === "/") {
        return a / b; //Dividing a and b
    } else {
        throw new Error("Invalid operator"); //Throwing error if the operator is not correct
    }
}

module.exports = calculator;