document.addEventListener('DOMContentLoaded', function () {
    //Представление 1
    class PageStart {
        constructor() {
            this.contactFirstName = '<label>Имя:<input type="text" class="contact_firstName"></label>',
            this.contactSecondName = '<label>Фамилия:<input type="text" class="contact_secondName"></label>',
            this.contactAge = '<label>Возраст:<input type="number" class="contact_age"></label>',
            this.contactAddButton = '<button class="contact_addButton">Добавить</button>',
            this.showButton = '<button id="showButton">Список</button>';
        }
        createPage() {
            document.body.innerHTML = '<div id="wraper_contact"></div>' + this.showButton;
            wraper_contact.innerHTML = `${this.contactFirstName}${this.contactSecondName}${this.contactAge}${this.contactAddButton}`;
        }
    }



    // const firstName = document.querySelector('input.contact_firstName'),
    //     secondName = document.querySelector('input.contact_secondName'),
    //     age = document.querySelector('input.contact_age'),
    //     addButton = document.querySelector('button.contact_addButton');

    // addButton.addEventListener('click', Eventer.addContackt())

    //МОДЕЛЬ
    class Contact {
        constructor(firstName, secondName, age, view) {
            this.name = firstName;
            this.secondName = secondName;
            this.age = age;
            this.view = view;
        }
    }
    //Контроллер
    class Event {
        constructor(view) {
            this.view = view;
        }
        addContact() {

        }
    }
    let pageOne = new PageStart();
    pageOne.createPage();

    let control = new Event(pageOne);
})
