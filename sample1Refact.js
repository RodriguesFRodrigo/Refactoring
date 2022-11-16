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


// Solution
// extract method and replace temp with query
function getUniqColumns(columns) {
    let columnsUniq = new Set(columns.sort());
    return columnsUniq;
}

// extract method
function createColumnsToHistoricModal(ratecardValidityHistory) {
    let columns = [];
    ratecardValidityHistory.forEach((validity) => {
        columns.push(validity);
    });
    return getUniqColumns(columns);
}

// extract method
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

// extract method
function createHistoricModal(testData) {
    const ratecardValidityHistory = createColumnsToHistoricModal(testData);
    insertPropertiesInTheHistoricModal(ratecardValidityHistory);
}