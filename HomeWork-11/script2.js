let listAnimals = [];

class Animals {                             //создает животное, добовляет в массив, удаляет из массива
    constructor(name) {
        this.name = name;
    }
    addToList() {
        listAnimals.push(this.name);
        new WatchAnimals().watchCreate(this.name);

    }
    deleteFromList(removeAnimal) {
        listAnimals.splice(listAnimals.indexOf(removeAnimal), 1);
    }
}

class WatchAnimals {                        //следит за созданием и удалением записей, вызывает метод Show
    watchCreate(name) {
        new Show().showCreate(name);
    }
    watchDelete(removeAnimal) {
        Show.showDelete(removeAnimal);
    }
}

class Show {                                //выводит в консоль
    showCreate(name) {
        console.log('Congratulations! You created' + ' ' + name);
    }
    showDelete(removeAnimal) {
        console.log('You delete' + ' ' + removeAnimal);
    }
}

do {
    nameAnimals = prompt('What animal you want creat?');
    newObj = new Animals(nameAnimals);
    newObj.addToList(this.name);
    more = confirm('Maybe more?');
} while (more);

console.log(listAnimals);

do {
    removeAnimal = prompt('Which animal do you want to remove?');
    if(removeAnimal) {
        newObj.deleteFromList(removeAnimal);
        more = confirm('Next animal?');
    } else break;
} while (more);

console.log('Final array:' + ' ' + listAnimals);