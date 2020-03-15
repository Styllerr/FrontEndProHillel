class Man {                            //первый конструктор
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log('I am running');
    }
    go() {
        console.log('I am going');
    }
    say() {
        alert('Hi 2 all');
    }
}

class OldMan extends Man {             //второй конструктор
    run() {
        console.log('I am running, but very slow');
    }
    go() {
        console.log('I am going, but very slow');
    }
    say() { }
}
class Layout {                         //конструктор с статическим методом
    static createLayout(layoutName) {
        return new layoutName();
    }
}

let layoutName = prompt('What you want create: Man or OldMan ?');

if (layoutName === 'Man' || layoutName === 'man') {
    resault = Layout.createLayout(Man);
} else if (layoutName === 'OldMan' || layoutName === 'oldman') {
    resault = Layout.createLayout(OldMan);
} else {
    resault = null;
    console.log('ERROR');
}

if (resault) {                         //проверка
    console.log(resault);
    resault.run();
    resault.go();
    resault.say();
}
