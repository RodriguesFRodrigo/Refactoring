
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
