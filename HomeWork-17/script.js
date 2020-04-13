document.addEventListener('DOMContentLoaded', function () {
    let listContact = [];

    //View 1
    class PageStart {
        constructor() {
                this.contactFirstName = '<label>Имя:<input type="text" class="contact_firstName" autofocus></label>',
                this.contactSecondName = '<label>Фамилия:<input type="text" class="contact_secondName"></label>',
                this.contactAge = '<label>Возраст:<input type="number" class="contact_age"></label>',
                this.listButton = document.createElement('button'),
                this.listButton.id = 'showButton',
                this.listButton.innerText = 'Список',
                this.addButton = document.createElement('button'),
                this.addButton.classList.add('contact_addButton'),
                this.addButton.innerText = 'Добавить',
                this.createPage(),
                this.firstName = document.querySelector('input.contact_firstName'),
                this.secondName = document.querySelector('input.contact_secondName'),
                this.age = document.querySelector('input.contact_age');
        }
        createPage() {
            document.body.innerHTML = '<div id="wraper_contact"></div>';
            document.body.append(this.listButton);
            let wraperContact = document.getElementById('wraper_contact');
            wraperContact.innerHTML = `${this.contactFirstName}${this.contactSecondName}${this.contactAge}`;
            wraperContact.append(this.addButton);
        }
        get contactData() {
            return [this.firstName.value, this.secondName.value, this.age.value]
        }
        afterAdd() {
            this.firstName.value = '';
            this.secondName.value = '';
            this.age.value = '';
            this.firstName.focus();
        }
        bindAddContact(metod) {
            this.addButton.addEventListener('click', () => {
                metod(this.contactData);
                this.afterAdd();
            });
        }
        bindListContact(metod) {
            this.listButton.addEventListener('click', () => {
                metod();

            });
        }

    }

    //View 2

    class PageList {
        constructor() {
            this.wrapper = document.createElement('div'),
                this.wrapper.id = 'wraper_list',
                this.orderList = document.createElement('ol');
        }
        createPage() {
            document.body.innerHTML = '';
            document.body.append(this.wrapper);
            this.wrapper.append(this.orderList);
            this.makeList();
        }
        makeList() {
            let indexContact = listContact.length;
            this.orderList.innerHTML = '';
            for (let i = 0; i < indexContact; i++) {
                this.listItem = document.createElement('li');
                this.cross = document.createElement('span');
                this.cross.className = 'mark';
                this.listItem.innerText = listContact[i].secondName;
                this.orderList.append(this.listItem);
                this.listItem.append(this.cross);
            }
        }
        get deleteName() {
            return event.target.parentNode.innerText
        }
        bindDeleteContact(metod) {
            this.orderList.addEventListener('click', () => {
                if(event.target.className === 'mark') {             //задел на кнопку edit
                     metod();
                    }
            })
        }
    }

    //МОДЕЛЬ

    class Contact {
        addContactInList(contactDataValue) {
            const contactObj = {
                firstName: contactDataValue[0],
                secondName: contactDataValue[1],
                age: parseInt(contactDataValue[2])
            };
            listContact.push(contactObj);
        }
        delContactFromList(nameDelCont) {
            listContact = listContact.filter((element) => nameDelCont != element.secondName);
        }
    }

    //Контроллер

    class Controller {
        constructor(view, list, model) {
            this.view = view
            this.list = list
            this.model = model
            this.view.bindAddContact(this.handleAddContact)
            this.view.bindListContact(this.handlListContact)
            this.list.bindDeleteContact(this.handlDeleteContact)
        }
        handleAddContact = (contactDataValue) => {
            this.model.addContactInList(contactDataValue)
        }
        handlListContact = () => {
            this.list.createPage()
        }
        handlDeleteContact = () => {
            this.model.delContactFromList(this.list.deleteName);
            this.refreshListContact();
        }
        refreshListContact() {
            this.list.makeList();
        }
    }

    const view = new PageStart();
    const list = new PageList();
    const model = new Contact();
    const control = new Controller(view, list, model);
})
