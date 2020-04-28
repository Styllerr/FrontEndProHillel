document.addEventListener('DOMContentLoaded', function () {

    class View {
        constructor() {
            this.selectCurrency = document.createElement('select')
            this.selectCurrency.id = 'currency'
            this.optionDefauft = '<option disabled selected>---Валюта---</option>'
            this.optionUSD = '<option value="usd">USD</option>'
            this.optionEUR = '<option value="eur">EUR</option>'
            this.optionRUR = '<option value="rur">RUR</option>'
            this.initView()
        }
        initView() {
            document.body.append(this.selectCurrency);
            this.selectCurrency.innerHTML = `${this.optionDefauft}${this.optionUSD}${this.optionEUR}${this.optionRUR}`;
        }
        bindSelectCurrency(metod) {
            this.selectCurrency.addEventListener('change', () => {
                metod();
            });

        }
    }

    class Model {
        constructor() {

        }
        sender = () => {
            let xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", true);
            xhttp.send();
            xhttp.addEventListener('readystatechange', () => {
                if (xhttp.readyState === 4 && xhttp.status >= 200) {
                    console.log(xhttp.responseText);
                    
                }
                
            })
        }
        
    }

    class Controller {
        constructor() {
            this.view = view
            this.model = model
            this.view.bindSelectCurrency(this.handlSelectCurrency)
        }
        handlSelectCurrency = () => {
            this.model.sender();
        }
    }
    const view = new View();
    const model = new Model();
    const app = new Controller(view, model);
})