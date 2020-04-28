document.addEventListener('DOMContentLoaded', function () {
let xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', true);
xhttp.send()
})