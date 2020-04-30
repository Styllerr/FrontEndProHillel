document.addEventListener('DOMContentLoaded', function () {

    class View {
        constructor() {
            this.wrapper = document.querySelector('.wrapper');
            this.header = document.createElement('h2');
            this.header.innerText = `Курс валют на ${this.dateNow}`;
            this.text = document.createElement('span');
            this.text.innerText = 'Выберите валюту:';
            this.selectCurrency = document.createElement('select');
            this.selectCurrency.id = 'currency';
            this.optionDefauft = '<option disabled selected>---Валюта---</option>';
            this.optionUSD = '<option value="USD">USD</option>';
            this.optionEUR = '<option value="EUR">EUR</option>';
            this.optionRUR = '<option value="RUR">RUR</option>';
            this.currencyBlock = document.createElement('div');
            this.currencyBlock.className = 'currencyBlock';
            this.currencyCaption = '<div class="currencyCaption cell">Валюта</div>';
            this.buyCaption = '<div class="buyCaption cell">Покупка</div>';
            this.saleCaption = '<div class="saleCaption cell">Продажа</div>';
            this.currencyName = document.createElement('div');
            this.currencyName.className = 'currencyName';
            this.buy = document.createElement('div');
            this.buy.className = 'buy';
            this.sale = document.createElement('div');
            this.sale.className = 'sale';
            this.currencyBlock.innerHTML = `${this.currencyCaption}${this.buyCaption}${this.saleCaption}`;
        }
        renderView() {
            this.wrapper.append(this.header, this.text, this.selectCurrency, this.currencyBlock);
            this.selectCurrency.innerHTML = `${this.optionDefauft}${this.optionUSD}${this.optionEUR}${this.optionRUR}`;
        }
        get dateNow() {
            this.date = new Date();
            this.year = this.date.getFullYear();
            if (this.date.getMonth() < 9) {
                this.month = `0${this.date.getMonth() + 1}`;
            } else {
                this.month = this.date.getMonth() + 1;
            }
            this.day = this.date.getDate();
            return `${this.day}/${this.month}/${this.year}`
        }
        bindSelectCurrency(metod) {
            this.selectCurrency.addEventListener('change', () => {
                let val = this.selectCurrency.value;
                metod(val);
            });
        }
        renderCurrency(obj) {
            this.currencyName.innerText = `${obj.ccy}`;
            this.buy.innerText = `${obj.buy}`;
            this.sale.innerText = `${obj.sale}`;
            this.currencyBlock.append(this.currencyName, this.buy, this.sale);
        }
    }

    class Model {
        constructor() {
            this.xhttp = new XMLHttpRequest()
        }
        getCurrentCurrency() {
            this.xhttp.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", true);
            this.xhttp.send();
            this.xhttp.onload = () => {
                if (this.xhttp.status >= 400) {
                    console.error('Данные ПриватБанка не доступны');
                } else {
                    this.currencyList = JSON.parse(this.xhttp.responseText);
                }
            }
        }
        selectCurrency(val) {
            let data = this.currencyList.find((element) => {
                return element.ccy === val
            });
            return data;
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
            this.currencyObj = this.model.selectCurrency(val);
            this.view.renderCurrency(this.currencyObj);
        }
    }
    const view = new View();
    const model = new Model();
    const app = new Controller(view, model);
})