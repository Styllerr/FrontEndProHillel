document.addEventListener('DOMContentLoaded', function () {

    class View {
        constructor() {
            this.wrapper = document.querySelector('.wrapper')
            this.header = document.createElement('h1')
            this.header.innerText = `Курс валют на ${this.dateNow}`
            this.text = document.createElement('span')
            this.text.innerText = 'Выбери валюту:'
            this.selectCurrency = document.createElement('select')
            this.selectCurrency.id = 'currency'
            this.optionDefauft = '<option disabled selected>---Валюта---</option>'
            this.optionUSD = '<option value="usd">USD</option>'
            this.optionEUR = '<option value="eur">EUR</option>'
            this.optionRUR = '<option value="rur">RUR</option>'
        }
        renderView() {
            this.wrapper.append(this.header);
            this.wrapper.append(this.text);
            this.wrapper.append(this.selectCurrency);
            this.selectCurrency.innerHTML = `${this.optionDefauft}${this.optionUSD}${this.optionEUR}${this.optionRUR}`;
        }
        get dateNow() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            return `${day}/${month}/${year}`
        }
        bindSelectCurrency(metod) {
            this.selectCurrency.addEventListener('change', () => {
                let val = this.selectCurrency.value;
                metod(val);
            });

        }
    }

    class Model {
        constructor() {
            this.currencyList = []
            this.xhttp = new XMLHttpRequest()
        }
        getCurrentCurrency() {
            this.xhttp.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", true);
            this.xhttp.send();
            this.xhttp.onload = (e) => {
                console.log(this.xhttp.readyState)
                this.currencyList = JSON.parse(e.currentTarget.responseText);
            }
        }
        selectCurrency(val) {
            let data = this.currencyList.find((element) => {
                return element.ccy === val
            }); 
            console.log(data);
        }

    }

    class Controller {
        constructor() {
            this.view = view
            this.model = model
            this.view.bindSelectCurrency(this.handlSelectCurrency)
            this.initView()
            
        }
        initView() {
            this.view.renderView();
            this.model.getCurrentCurrency();
        }
        handlSelectCurrency = (val) => {
            this.model.selectCurrency(val);
        }
    }
    const view = new View();
    const model = new Model();
    const app = new Controller(view, model);
})