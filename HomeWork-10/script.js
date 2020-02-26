function Student(name) {
    this.name = name
    var age = 30,                           //приватное свойство 1
        group = 'FTF90-21';                       //приватное свойство 2
    this.getInfoStudent = function () {     //публичный метод
        console.log('Student' + ' ', name + '. Age:' + ' ' + age + ', group: ' + ' ' + group)
    }
}
var sidorov = new Student('Sidorov');       //объект 1
sidorov.method1 = function () {             //его уникальный метод    
    alert('Congratulation!!!');
}
var chukavov = new Student('Chukavov');     //объект 2
chukavov.method1 = function () {            //его уникальный метод
    let averRating = prompt('Your average rating?');
    if (averRating < 33) {
        level = 'Low :(';
    } else if (averRating < 66) {
        level = 'Middle :)';
    } else {
        level = 'Very good !!!';
    }
    return level;
}
sidorov.getInfoStudent();
sidorov.method1();
chukavov.getInfoStudent();
chukavov.method1();
console.log(level);
