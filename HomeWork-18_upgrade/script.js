document.addEventListener('DOMContentLoaded', function () {

    ////////////////////////////////////////////////////////
    class View {
        constructor() {
            this.contactFirstName = '<label>Имя:<input type="text" class="contact_firstName" autofocus></label>'
            this.contactSecondName = '<label>Фамилия:<input type="text" class="contact_secondName"></label>'
            this.contactAge = '<label>Возраст:<input type="number" class="contact_age"></label>'
            this.button = document.createElement('button')
        }
        createPage() {
            document.body.innerHTML = '<div id="wraper"></div>';
            let wraper = document.getElementById('wraper');
            wraper.innerHTML = `${this.contactFirstName}${this.contactSecondName}${this.contactAge}`;
            wraper.append(this.button);
            this.firstName = document.querySelector('input.contact_firstName');
            this.secondName = document.querySelector('input.contact_secondName');
            this.age = document.querySelector('input.contact_age');
        }
        get contactData() {
            return [this.firstName.value, this.secondName.value, this.age.value]
        }
    }
    /////////////////////////////////////////////////////////View 1
    class ViewPageStart extends View {
        constructor() {
            super()
            this.listButton = document.createElement('button')
            this.listButton.id = 'showButton'
            this.listButton.innerText = 'Список'
            this.button.classList.add('contact_addButton')
            this.button.innerText = 'Добавить'
        }
        createPage() {
            super.createPage();
            document.body.append(this.listButton);
        }
        afterAdd() {
            this.firstName.value = '';
            this.secondName.value = '';
            this.age.value = '';
            this.firstName.focus();
        }
        bindAddContact(metod) {
            this.button.addEventListener('click', () => {
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

    //////////////////////////////////////////////////////////View 2

    class ViewPageList {
        constructor() {
            this.wrapper = document.createElement('div')
            this.wrapper.id = 'wraper_list'
            this.orderList = document.createElement('ol')
            this.backButton = document.createElement('button')
            this.blankList = document.createElement('h3')
            this.blankList.innerText = 'Нет данных для отображения!'
            this.backButton.id = 'back'
            this.backButton.innerText = 'Назад'
        }
        createPage(listContact) {
            document.body.innerHTML = '';
            document.body.append(this.wrapper);
            this.wrapper.append(this.orderList);
            this.wrapper.append(this.backButton);
            this.makeList(listContact);
        }
        makeList(listContact) {
            this.orderList.innerHTML = '';
            if (listContact.length > 0) {
                listContact.forEach((contact) => {
                    this.listItem = document.createElement('li');
                    this.listItem.id = `contact_${contact.id}`;
                    this.editBatton = document.createElement('img');
                    this.editBatton.src = 'image/45407.png';
                    this.editBatton.className = 'markEdit';
                    this.cross = document.createElement('span');
                    this.cross.className = 'markDel';
                    this.listItem.innerText = contact.secondName;
                    this.orderList.append(this.listItem);
                    this.listItem.append(this.editBatton);
                    this.listItem.append(this.cross);
                }
                )
            } else {
                this.orderList.append(this.blankList);
            }
        }
        get selectedNameId() {
            let target = event.target.parentNode.id;
            return parseInt(target.replace(/contact_/, ''))
        }
        bindDelEditContact(metodDelete, metodEdit) {
            this.orderList.addEventListener('click', () => {
                if (event.target.className === 'markDel') {
                    metodDelete();
                } else if (event.target.className === 'markEdit') {
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

    ////////////////////////////////////////////////////////View 3

    class ViewPageEdit extends View {
        constructor() {
            super()
            this.button.innerText = 'Изменить'
        }
        createPage(editContact) {
            super.createPage();
            this.indexContact = editContact[0];
            this.firstName.value = editContact[1];
            this.secondName.value = editContact[2];
            this.age.value = editContact[3];
        }
        bindCompeteEdit(metod) {
            this.button.addEventListener('click', () => {
                metod(this.indexContact, this.contactData)
            })
        }
    }

    ////////////////////////////////////////////////////////

    class Model {
        get listContact() {
            return JSON.parse(localStorage.getItem('listContact'))
        }
        saveList(tempList) {
            localStorage.setItem('listContact', JSON.stringify(tempList));
        }
    }
    ////////////////////////////////////////////////////////МОДЕЛЬ 1

    class ModelPageStart extends Model {
        constructor() {
            super()
            const initListContact = JSON.parse(localStorage.getItem('listContact')) || []
            this.saveList(initListContact)
        }
        get contactId() {
            if (this.listContact.length > 0) {
                return parseInt(this.listContact[this.listContact.length - 1].id) + 1
            } else {
                return 1;
            }
        }
        addContactInList(contactDataValue) {
            let tempListContact = this.listContact
            if (contactDataValue[1] != '') {
                const contactObj = {
                    id: this.contactId,
                    firstName: contactDataValue[0],
                    secondName: contactDataValue[1],
                    age: parseInt(contactDataValue[2]) || 0
                };
                tempListContact.push(contactObj);
                this.saveList(tempListContact);
            } else {
                alert('Нужне ввести хотя бы фамилию!');
            }
        }
    }

    ////////////////////////////////////////////////////////МОДЕЛЬ 2

    class ModelPageList extends Model {
        constructor() {
            super()
        }
        delContactFromList(idDelCont) {
            let tempListContact = this.listContact.filter((element) => idDelCont != element.id);
            this.saveList(tempListContact);
        }
    }

    ////////////////////////////////////////////////////////МОДЕЛЬ 3

    class ModelPageEdit extends Model {
        constructor() {
            super()
        }
        contactForEdit(idEditContact) {
            let editContact;
            this.listContact.forEach((item, index) => {
                if (item.id === idEditContact) {
                    editContact = [index, item.firstName, item.secondName, item.age]
                }
            })
            return editContact;
        }
        storeEditContact(index, newRecord) {
            let tempListRec = this.listContact;
            tempListRec[index].firstName = newRecord[0];
            tempListRec[index].secondName = newRecord[1];
            tempListRec[index].age = parseInt(newRecord[2]);
            this.saveList(tempListRec);
        }
    }

    /////////////////////////////////////////////////Контроллер 1

    class ControllerPageStart {
        constructor(view1, model1) {
            this.view = view1
            this.model = model1
            this.view.bindAddContact(this.handleAddContact)
            this.view.bindListContact(this.handlListContact)
        }
        initViewPageStart() {
            this.view.createPage();
        }
        handleAddContact = (contactDataValue) => {
            this.model.addContactInList(contactDataValue);
        }
        handlListContact = () => {
            control2.initViewPageList();
        }
    }

    /////////////////////////////////////////////////Контроллер 2

    class ControllerPageList {
        constructor(view2, model2, control1, control3) {
            this.view = view2
            this.model = model2
            this.control1 = control1
            this.control3 = control3
            this.view.bindDelEditContact(this.handlDeleteContact, this.handlInitPageEdit)
            this.view.bindBackToAddPage(this.handlBackToAddPage)
            this.handlBackToAddPage(this.handlControl1)
        }
        handlBackToAddPage = () => {
            this.control1.initViewPageStart();
        }
        initViewPageList() {
            this.view.createPage(this.model.listContact);
        }
        handlDeleteContact = () => {
            this.model.delContactFromList(this.view.selectedNameId);
            this.refreshListContact();
        }
        handlInitPageEdit = () => {
            this.control3.initPageEdit(this.view.selectedNameId);
        }
        refreshListContact() {
            this.view.makeList(this.model.listContact);
        }
    }

    /////////////////////////////////////////////////Контроллер 3

    class ControllerPageEdit {
        constructor(view3, model3) {
            this.view = view3
            this.model = model3
            this.view.bindCompeteEdit(this.handlCompeteEdit)
        }
        initPageEdit(id) {
            let editContact = this.model.contactForEdit(id);
            this.view.createPage(editContact);
        }
        handlCompeteEdit = (index, newRecord) => {
            this.model.storeEditContact(index, newRecord);
            control2.initViewPageList();
        }
        refreshListContact() {
            this.view.makeList(this.model.listContact);
        }
    }

    const view1 = new ViewPageStart();
    const view2 = new ViewPageList();
    const view3 = new ViewPageEdit();
    const model1 = new ModelPageStart();
    const model2 = new ModelPageList();
    const model3 = new ModelPageEdit();
    const control1 = new ControllerPageStart(view1, model1);
    const control3 = new ControllerPageEdit(view3, model3);
    const control2 = new ControllerPageList(view2, model2, control1, control3);
    control1.initViewPageStart();

})
