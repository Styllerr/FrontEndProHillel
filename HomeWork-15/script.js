let tableList = [['Год', 'Россия', 'Великобритания', 'США', 'Израиль'],
                [2012, 2.62, 4.5, 4.33, 3.99],
                [2013, 2.64, 4.51, 2.9, 4.15],
                [2014, 2.6, 4.66, 4.68, 4.18]];
let indexList = ['По мнению экспертов журнала «The Economist» российский рубль, на ряду с валютами таких стран, как Украина, Египет, Филиппины, Аргенитина, Гонгконг, Индонезия, Таиланд, Малайзия, недооценен примерно на 50%',
                'В 2015 году самым дешевым Биг-Маком можно "полакомиться" в Венесуэле - за 0,67 доллара (недооценка на 86%), потом идет Украина - 1,55 $ (-67,7 %), а за ними Индия, где цена за этот бутерброд 1,83 доллара (-61,7 %).',
                'Самый дорогой Биг-Мак можно было купить в Швейцарии - за 6,83 доллара (+42,4 %), затем идут Норвегия - 5,65 $ (+17,9 %), Швеция - 5,13 $ (+7 %) и Дания - 5,08 $ (+6 %).'];
let mainHeader = document.getElementById('main_header'),
    mainArticle = document.getElementById('main_article'),
    tableCaption = document.getElementById('table_caption'),
    tableRow = document.getElementById('table_header'),
    addHeader = document.getElementById('add_header'),
    indexListItem = document.querySelector('#list>li');
    
mainHeader.innerText = 'Индекс Биг Мака';
mainArticle.innerText = "Индекс Биг Мака - это стоимость гамбургера в сети Мак Дональдс. Биг мак содержит, мясо, овощи, сыр, хлеб и другие продукты. В его стоимость так же входят аренда помещения и оборудования, рабочая сила и многие другие факторы. Если цена биг мака низкая то можно сказать что цены в стране низкие, если высокая то и цены относительно высокие. Исследования проводятся журналом «The Economist».";
tableCaption.innerText = 'Индекс Биг Мака в разных странах';
addHeader.innerText = 'Интересные факты:';

for(let i = 0; i < 4; i++) {
    tableTd = tableRow.firstElementChild
    for(let j = 0; j < 5; j++) {
        tableTd.innerText = tableList[i][j];
        tableTd = tableTd.nextElementSibling;
    }
    tableRow = tableRow.nextElementSibling;
}

for(i = 0; i < 3; i++) {
    indexListItem.innerText = indexList[i];
    indexListItem = indexListItem.nextElementSibling;
}