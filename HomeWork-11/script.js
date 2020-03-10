class Man {
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

class OldMan extends Man {
    run() {
        console.log('I am running, but very slow');
    }
    go() {
        console.log('I am going, but very slow');
    }
    say() {
        return false;
    }
}
var layoutName;
class Layout {
    static createLayout(layoutName) {
        if (layoutName === 'Man') {
            return new Man();
        } else if (layoutName === 'OldMan') {
            return new OldMan();
        }
    }
}
/* let firstObj = new Man('Evgeniy');
console.log(firstObj);
firstObj.run();
firstObj.go();
firstObj.say();
let secondObj = new OldMan('mr.Policer');
console.log(secondObj);
secondObj.run();
secondObj.go();
secondObj.say();
 */
layoutName = prompt('What you want create: Man or OldMan ?');
Layout.createLayout();