document.addEventListener('DOMContentLoaded', function () {
    let getButton = document.querySelector('.getButton'),
        blockData = document.querySelector('.blockData');

    getButton.addEventListener('click', getData);

    function getData() {
        xhttp = new XMLHttpRequest();
        xhttp.open("GET", "http://127.0.0.1:3000/users", true);
        xhttp.send();
        xhttp.onload = () => {
            if (xhttp.status >= 400) {
                console.error('Данные не доступны');
            } else {
                blockData.textContent = xhttp.response;
            }
        }
    }
})