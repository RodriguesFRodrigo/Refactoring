/*
  When use?
   - To reduce the length of a method body, use

  Problem:
   - You place the result of an expression in a local variable for later use in your code. Do not change the state of the object just return the value

   Benefits:
    - Code radability
    - Avoid deduplication, if the line being replaced is used in multiple methods.

  Good to know
   - if your temp variable is used to cache the result of a truly time-consuming expression, you may want to stop this refactoring after extracting the expression to a new method.
*/

// Problem
function calculateTotal() {
    let basePrice = quantity * itemPrice;
    if (basePrice > 1000) {
        return basePrice * 0.95;
    }
    else {
        return basePrice * 0.98;
    }
}

// Solution
function basePrice(quantity, itemPrice) {
    return quantity * itemPrice;
};

function calculateTotal() {
    // Most clean read basePrice
    if (basePrice() > 1000) {
        return basePrice() * 0.95;
    }
    else {
        return basePrice() * 0.98;
    }
}
