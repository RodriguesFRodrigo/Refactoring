/*
  The more lines found in a method, the harder it’s to figure out what the method does. This is the main reason for this refactoring.
  Besides eliminating rough edges in your code, extracting methods is also a step in many other refactoring approaches.

  When use?
   - To reduce the length of a method body, use
    
  Problem
   - You have a code fragment that can be grouped together

  Benefits:
    - Radable code
    - Give the new method a name that describe the method
    - Less code duplication. Often the code that’s found in a method can be reused in other places in your program.
    - Isolates independent parts of code
*/

// Problem 
function printOwing() {
  printBanner();

  // Print details
  console.log("name " + name);
  console.log("amount " + getOutstanding());
}

// Solution
function printDetailds(outstanding) {
  // logic here...
};

function printOwing() {
  printBanner();
  printDetailds(outstanding);
  // Just repeat printDetails
}