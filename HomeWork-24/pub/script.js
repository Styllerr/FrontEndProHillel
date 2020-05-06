document.addEventListener('DOMContentLoaded', function () {
    let getButton = document.querySelector('.getButton'),
        blockData = document.querySelector('.blockData');

    getButton.addEventListener('click', getData);

    function getData() {
        xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
        xhttp.send();
        xhttp.onload = () => {
            if (xhttp.status >= 400) {
                console.error('Данные не доступны');
            } else {
                blockDataText = JSON.parse(xhttp.responseText);
                blockData.textContent = blockDataText;
                console.log(blockDataText);
            }
        }
    }
})