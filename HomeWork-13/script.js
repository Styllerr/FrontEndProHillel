var list = []
class Displey {                         //View
    static showCreateObj(name) {
        console.log(`You create: ${name}`);
        this.showList();
    }
    static showDeleteObj(name) {
        console.log(`You delete: ${name}`);
        this.showList();
    }
    static showList() {
        console.log(list);
    }
}

class Human {                           //Model
    constructor(name) {
        this.name = name;
        this.type = 'human';
    }
    static createHuman(name) {
        let newObj = new Human(name);
        this.addToList(newObj);
    }

    static addToList(obj) {

        list.unshift(obj);
        this.showResultCreate(obj);
    }
    static deleteFromList(type, name) {
        list.forEach(function(item, i) {
            if(item.type === type && item.name === name) {
                list.splice(i,1);
                
            }
        });
        this.showResultDelete(name);
    }
    static showResultCreate(obj) {
        Displey.showCreateObj(obj.name);
    }
    static showResultDelete(name) {
        Displey.showDeleteObj(name);
    }
}
class Animal extends Human {         //Model
    constructor(name) {
        super(name);
        this.type = 'animal';
    }
    static createAnimal(name) {
        let newObj = new Animal(name);
        this.addToList(newObj);
    }
    static addToList(obj) {
        list.push(obj);
        this.showResultCreate(obj);
    }
}



class Ivent {                     //Controller
    static createHumanObj(nameObj) {
        Human.createHuman(nameObj);
    }
    static createAnimalObj(nameObj) {
        Animal.createAnimal(nameObj);
    }
    static deleteHumanObj(nameObj) {
        Human.deleteFromList('human',nameObj);
    }
    static deleteAnimalObj(nameObj) {
        Animal.deleteFromList('animal', nameObj);
    }
}


Ivent.createAnimalObj('Cat');
Ivent.createHumanObj('Vasya');
Ivent.createHumanObj('Ivan');
Ivent.createAnimalObj('Barsic');

Ivent.deleteHumanObj('Ivan');

Ivent.deleteAnimalObj('Cat');
