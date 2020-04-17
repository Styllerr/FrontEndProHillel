document.addEventListener('DOMContentLoaded', function () {

    //View 1
    class PageStart {
        constructor() {
            this.contactFirstName = '<label>Имя:<input type="text" class="contact_firstName" autofocus></label>'
            this.contactSecondName = '<label>Фамилия:<input type="text" class="contact_secondName"></label>'
            this.contactAge = '<label>Возраст:<input type="number" class="contact_age"></label>'
            this.listButton = document.createElement('button')
            this.listButton.id = 'showButton'
            this.listButton.innerText = 'Список'
            this.addButton = document.createElement('button')
            this.addButton.classList.add('contact_addButton')
            this.addButton.innerText = 'Добавить'
            this.createPage()
        }
        createPage() {
            document.body.innerHTML = '<div id="wraper_contact"></div>';
            document.body.append(this.listButton);
            let wraperContact = document.getElementById('wraper_contact');
            wraperContact.innerHTML = `${this.contactFirstName}${this.contactSecondName}${this.contactAge}`;
            wraperContact.append(this.addButton);
            this.firstName = document.querySelector('input.contact_firstName');
            this.secondName = document.querySelector('input.contact_secondName');
            this.age = document.querySelector('input.contact_age');
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
                this.orderList = document.createElement('ol'),
                this.backButton = document.createElement('button'),
                this.backButton.id = 'back',
                this.backButton.innerText = 'Назад';
        }
        createPage(listContact) {
            document.body.innerHTML = '';
            document.body.append(this.wrapper);
            this.wrapper.append(this.orderList);
            this.wrapper.append(this.backButton);
            this.makeList(listContact);
        }
        makeList(listContact) {
            if (listContact.length > 0) {
                let indexContact = listContact.length;
                this.orderList.innerHTML = '';
                for (let i = 0; i < indexContact; i++) {
                    this.listItem = document.createElement('li');
                    this.editBatton = document.createElement('img');
                    this.editBatton.src = 'image/45407.png';
                    this.editBatton.className = 'edit';
                    this.cross = document.createElement('span');
                    this.cross.className = 'markDel';
                    this.listItem.innerText = listContact[i].secondName;
                    this.orderList.append(this.listItem);
                    this.listItem.append(this.editBatton);
                    this.listItem.append(this.cross);
                }
            }
        }
        get selectedName() {
            return event.target.parentNode.innerText
        }

        bindDelEditContact(metodDelete, metodEdit) {
            this.orderList.addEventListener('click', () => {
                if (event.target.className === 'markDel') {
                    metodDelete();
                } else if (event.target.className === 'edit') {
                    metodEdit();
                }
            })
        }
        bindBackToAddPage(metod) {
            this.backButton.addEventListener('click', () => {
                metod();
            })
        }
    }
    
    //View 3

    class PageEdit {
        constructor() {
            this.contactFirstName = '<label>Имя:<input type="text" class="contact_firstName" autofocus></label>'
            this.contactSecondName = '<label>Фамилия:<input type="text" class="contact_secondName"></label>'
            this.contactAge = '<label>Возраст:<input type="number" class="contact_age"></label>'
            this.comleteButton = document.createElement('button')
            this.comleteButton.innerText = 'Изменить'
        }
        createPage(listContact, index) {
            this.indexEditContact = index;
            document.body.innerHTML = '<div id="wraper_editContact"></div>';
            let wraperEditContact = document.getElementById('wraper_editContact');
            wraperEditContact.innerHTML = `${this.contactFirstName}${this.contactSecondName}${this.contactAge}`;
            wraperEditContact.append(this.comleteButton);
            this.firstName = document.querySelector('input.contact_firstName');
            this.secondName = document.querySelector('input.contact_secondName');
            this.age = document.querySelector('input.contact_age');
            this.firstName.value = listContact.firstName;
            this.secondName.value = listContact.secondName;
            this.age.value = listContact.age;
        }
        get newContactData() {
            return [this.firstName.value, this.secondName.value, this.age.value]
        }
        bindCompeteEdit(metod) {
            this.comleteButton.addEventListener('click', () => {
                metod(this.indexEditContact, this.newContactData)
            })
        }

    }
    //МОДЕЛЬ

    class Contact {
        constructor() {
            this.listContact = JSON.parse(localStorage.getItem('listContact')) || []
        }
        addContactInList(contactDataValue) {
            const contactObj = {
                firstName: contactDataValue[0],
                secondName: contactDataValue[1],
                age: parseInt(contactDataValue[2])
            };
            this.listContact.push(contactObj);
            this.saveList(this.listContact);
        }
        delContactFromList(nameDelCont) {
            this.listContact = this.listContact.filter((element) => nameDelCont != element.secondName);
            this.saveList(this.listContact);
        }
        findEditContactList(selectedName) {
            let findObj;
            this.listContact.forEach(function (item, i) {
                if (item.secondName === selectedName) {
                    findObj = [item, i]
                }
            })
            return findObj
        }
        storeEditContact(index, newContactData) {
            const contactObj = {
                firstName: newContactData[0],
                secondName: newContactData[1],
                age: parseInt(newContactData[2])
            };
            this.listContact.splice(index, 1, contactObj)
            this.saveList(this.listContact);
        }
        saveList(listContact) {
            localStorage.setItem('listContact', JSON.stringify(listContact));
        }
    }

    //Контроллер

    class Controller {
        constructor(view, list, model, edit) {
            this.view = view
            this.list = list
            this.model = model
            this.edit = edit
            this.view.bindAddContact(this.handleAddContact)
            this.view.bindListContact(this.handlListContact)
            this.list.bindDelEditContact(this.handlDeleteContact, this.handlFindEditContact)
            this.list.bindBackToAddPage(this.handlBackToAddPage)
            this.edit.bindCompeteEdit(this.handlStoredEditContact)
        }
        handleAddContact = (contactDataValue) => {
            this.model.addContactInList(contactDataValue);
        }
        handlBackToAddPage = () => {
            this.view.createPage();
        }
        handlListContact = () => {
            this.list.createPage(this.model.listContact);
        }
        handlDeleteContact = () => {
            this.model.delContactFromList(this.list.selectedName);
            this.refreshListContact();
        }
        handlFindEditContact = () => {
            let editObj = this.model.findEditContactList(this.list.selectedName)[0];
            let editObjIndex = this.model.findEditContactList(this.list.selectedName)[1];
            this.edit.createPage(editObj, editObjIndex);
        }
        handlStoredEditContact = (index, updateContakt) => {
            this.model.storeEditContact(index, updateContakt);
            this.handlListContact();
        }
        refreshListContact() {
            this.list.makeList(model.listContact);
        }
    }

    const view = new PageStart();
    const list = new PageList();
    const edit = new PageEdit();
    const model = new Contact();
    const control = new Controller(view, list, model, edit);
})
