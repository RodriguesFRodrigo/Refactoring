/*
  Identical groups of parameters are often encountered in multiple methods. This causes code duplication of both the parameters themselves and of related operations. By consolidating parameters in a single class, you can also move the methods for handling this data there as well, freeing the other methods from this code.

  When use?
   - To reduce the length of a method body, use
    
  Problem
   - Your methods contain a repeated group of params

  Benefits:
    - More readable code. Instead of a hodgepodge of parameters, you see a single object with a comprehensible name.
    - 
*/

// Prolem
function createAppDatePicker(startDate, endDate) {
    // Logic here...
}

// Solution
const dateRange = {
    start: '15/11/2022',
    end: '15/12/2022',
},

function createAppDatePicker(dateRange) {
    // Logic here...
    console.log(dateRange.start);
    console.log(dateRange.end);
}

