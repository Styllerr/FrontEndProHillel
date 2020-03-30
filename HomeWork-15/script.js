let tableList = [['Год', 'Россия', 'Великобритания', 'США', 'Израиль'],
                [2012, 2.62, 4.5, 4.33, 3.99],
                [2013, 2.64, 4.51, 2.9, 4.15],
                [2014, 2.6, 4.66, 4.68, 4.18]];
let indexList = ['По мнению экспертов журнала «The Economist» российский рубль, на ряду с валютами таких стран, как Украина, Египет, Филиппины, Аргенитина, Гонгконг, Индонезия, Таиланд, Малайзия, недооценен примерно на 50%',
    'В 2015 году самым дешевым Биг-Маком можно "полакомиться" в Венесуэле - за 0,67 доллара (недооценка на 86%), потом идет Украина - 1,55 $ (-67,7 %), а за ними Индия, где цена за этот бутерброд 1,83 доллара (-61,7 %).',
    'Самый дорогой Биг-Мак можно было купить в Швейцарии - за 6,83 доллара (+42,4 %), затем идут Норвегия - 5,65 $ (+17,9 %), Швеция - 5,13 $ (+7 %) и Дания - 5,08 $ (+6 %).'];
let mainHeader = document.createElement('h1'),
    mainArticle = document.createElement('p'),
    tableBody = document.createElement('table'),
    tableCaption = document.createElement('caption'),
    addHeader = document.createElement('h4'),
    indexListItem = document.createElement('ol');

function getTableRow() {
    let tableRowList = [];
    for (let i = 0; i < 4; i++) {
        let tableRow = document.createElement('tr');
        tableRowList.push(tableRow);
    }
    return tableRowList;
}

function getTableHeader() {
    let tableHeaderList = [];
    for (let i = 0; i < 5; i++) {
        let tableHeader = document.createElement('th');
        tableHeader.innerText = tableList[0][i];
        tableHeaderList.push(tableHeader);
    }
    return tableHeaderList;
}

mainHeader.innerText = 'Индекс Биг Мака';
mainHeader.id = 'main_header';
document.body.append(mainHeader);
mainArticle.id = 'main_article';
mainArticle.innerText = "Индекс Биг Мака - это стоимость гамбургера в сети Мак Дональдс. Биг мак содержит, мясо, овощи, сыр, хлеб и другие продукты. В его стоимость так же входят аренда помещения и оборудования, рабочая сила и многие другие факторы. Если цена биг мака низкая то можно сказать что цены в стране низкие, если высокая то и цены относительно высокие. Исследования проводятся журналом «The Economist».";
document.body.append(mainArticle);
tableBody.id = 'table_body';
document.body.append(tableBody);
tableCaption.innerText = 'Индекс Биг Мака в разных странах';
tableCaption.id = 'table_caption'
tableBody.append(tableCaption);
tableBody.append(...getTableRow());

let tableRow = tableCaption.nextElementSibling;
tableRow.append(...getTableHeader());

for(let i=1; i < 4; i++) {
    tableRow = tableRow.nextElementSibling;
    tableRow.append(...getTableCell());
    function getTableCell() {
        let tableCellList = [];
        for (let j = 0; j < 5; j++) {
            let tableCell = document.createElement('td');
            tableCell.innerText = tableList[i][j];
            tableCellList.push(tableCell);
        }
        return tableCellList;
    }   
}
addHeader.innerText = 'Интересные факты:';
document.body.append(addHeader);

indexListItem.id = 'list';
document.body.append(indexListItem);

let li1 = document.createElement('li');
li1.innerText = indexList[0];
indexListItem.append(li1);

let li2 = document.createElement('li');
li2.innerText = indexList[1];
indexListItem.append(li2);

let li3 = document.createElement('li');
li3.innerText = indexList[2];
indexListItem.append(li3);