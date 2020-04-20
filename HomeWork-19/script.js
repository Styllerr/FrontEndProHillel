document.addEventListener('DOMContentLoaded', function () {
    class View {
        constructor() {
            this.inputText = document.createElement('input')
            this.inputText.type = 'text'
            this.buttonAdd = document.createElement('button')
            this.buttonAdd.innerText = 'Add block'
            this.wrapper = document.querySelector('div.wrapper')
            this.buttonAdd.addEventListener('click', this.addNewBlock)
            this.inputText.addEventListener('input', () => this.addText())
            this.rander()
        }
        rander() {
            this.wrapper.append(this.inputText, this.buttonAdd)
        }
        addNewBlock() {
            let newBlock = new Subject();
            observer.addSubject(newBlock);
        }
        get text() {
            return this.inputText.value
        }
        addText() {
            const arg = this.text;
            observer.trigger(arg);
        }
    }

    class Subject {
        constructor() {
            this.block = document.createElement('div')
            this.block.className = 'blockText'
            this.wrapper = document.querySelector('div.wrapper')
            this.wrapper.append(this.block)
        }
        update(arg) {
            this.block.innerText = arg;
        }
    }

    class Observer {
        constructor() {
            this.subject = []
        }
        addSubject(subject) {
            this.subject.push(subject)
        }
        trigger(arg) {
            this.subject.forEach(element => element.update(arg))
        }
    }
    const view = new View();
    const observer = new Observer();

})