document.addEventListener('DOMContentLoaded', function () {
    let listContact = [];
    //Представление 1
    class PageStart {
        constructor() {
            this.contactFirstName = '<label>Имя:<input type="text" class="contact_firstName" autofocus></label>',
                this.contactSecondName = '<label>Фамилия:<input type="text" class="contact_secondName"></label>',
                this.contactAge = '<label>Возраст:<input type="number" class="contact_age"></label>',
                this.contactAddButton = '<button class="contact_addButton">Добавить</button>',
                this.showButton = '<button id="showButton">Список</button>';
        }
        createPage() {
            document.body.innerHTML = '<div id="wraper_contact"></div>' + this.showButton;
            let wraperContact = document.getElementById('wraper_contact');
            wraperContact.innerHTML = `${this.contactFirstName}${this.contactSecondName}${this.contactAge}${this.contactAddButton}`;
        }
    }

    //Представление 2
    class PageList {
        constructor() {
            this.contactAddButton = '<button class="return_add">Вернуться на страницу Добавить</button>';
        }
        createPage() {
            document.body.innerHTML = '<div id="wraper_list"><ol></ol></div>' + this.contactAddButton;
            let placeList = document.querySelector('#wraper_list>ol');
            let indexContact = listContact.length;

            for (let i = 0; i < indexContact; i++) {
                let listItem = document.createElement('li');
                let cross = document.createElement('span');
                cross.className = 'mark';
                listItem.innerText = listContact[i].secondName;

                placeList.append(listItem);
                listItem.append(cross);
            }
        }
    }



    //МОДЕЛЬ
    class Contact {
        constructor(firstName, secondName, age) {
            this.firstName = firstName;
            this.secondName = secondName;
            this.age = age;
        }
        addInList(newContact){
            
            listContact.push(newContact);
            firstName.value = '';
            secondName.value = '';
            age.value = '';
            firstName.focus();
            console.log(listContact);
        }
    }

    //Контроллер

    class Controller {
        static addContact() {
            let newContact = new Contact(firstName.value, secondName.value, age.value);
            newContact.addInList(newContact);
        }
        static showList() {
            let pageList = new PageList();
            pageList.createPage();
        }
    }
    let pageOne = new PageStart();
    pageOne.createPage();
    
    let firstName = document.querySelector('input.contact_firstName'),
        secondName = document.querySelector('input.contact_secondName'),
        age = document.querySelector('input.contact_age');

    const addButton = document.querySelector('button.contact_addButton'),
        showButton = document.getElementById('showButton');

    addButton.addEventListener('click', Controller.addContact);
    showButton.addEventListener('click', Controller.showList);
})
