/*
  The more lines found in a method, the harder it’s to figure out what the method does. This is the main reason for this refactoring.
  Besides eliminating rough edges in your code, extracting methods is also a step in many other refactoring approaches.

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

// -------------------- //

// Example 1:
class HistoricModal {
  constructor() {
    this.columns = {
      perfil: {
        classes: () => [],
        type: 'content-as-text',
        header: 'Perfil',
        width: 'minmax(max-content, auto)',
        value: (item) => ({ content: item.perfilNomeFantasia, subcontent: 'Índice aplicado' }),
        display: true,
        sortable: false,
        toggleable: true,
      }
    }
  };
}

let historicModal = new HistoricModal();
const testData = ['2016/2016', '2016/2017', '2016/2017', '2018/2018', '2019/2019', '2019/2019', '2020/2021', '2020/2021'];

// Problem
function createHistoricModal(testData) {
  // Creating a list with years to be used as columns
  let columns = [];
  ratecardValidityHistory.forEach((year) => {
    columns.push(year);
  });

  // Get the unique columns from list creating a set from list
  let columnsSorted = columns.sort();
  let columnsUniq = new Set(columnsSorted);

  // Insert column properties in the class
  for (let column of columnsUniq.values()) {
    historicModal.columns[column] = {
      classes: () => [],
      type: 'content-as-text',
      header: column,
      width: 'minmax(max-content, auto)',
      value: (item) => ({ content: item.historico.filter(item => item.period === column).map((item) => `R$ ${item.valorHora}`).join(', '), subcontent: item.historico.filter(item => item.period === column).map((item) => `${item.percentage}`).join(', ') }),
      display: true,
      sortable: false,
      toggleable: true,
    };
  }
}

// Solution
function createColumns(testData) {
  let columns = [];
  ratecardValidityHistory.forEach((validity) => {
    columns.push(validity);
  });

  let columnsSorted = columns.sort();
  let columnsUniq = new Set(columnsSorted);
  return columnsUniq;
}

function insertPropertiesInTheHistoricModal(ratecardValidityHistory) {
  for (let validity of ratecardValidityHistory.values()) {
    historicModal.columns[validity] = {
      classes: () => [],
      type: 'content-as-text',
      header: column,
      width: 'minmax(max-content, auto)',
      value: (item) => ({ content: item.historico.filter(item => item.period === validity).map((item) => `R$ ${item.valorHora}`).join(', '), subcontent: item.historico.filter(item => item.period === validity).map((item) => `${item.percentage}`).join(', ') }),
      display: true,
      sortable: false,
      toggleable: true,
    };
  }
}

function createHistoricModal(testData) {
  const ratecardValidityHistory = createColumns(testData);
  insertPropertiesInTheHistoricModal(ratecardValidityHistory);
}