var stringDefault = '25 Vasya 37 Nikolay 46 Evgeniy'; //по умолчанию, если пользователь ни чего не вводит
var string = prompt('Enter some Keys and Values');
string = string || stringDefault;
var myArray = string.split(' '),
    myObject = {};
for(i = 0; i < myArray.length; i++) {
    if(i % 2 === 0) {
        myObject[myArray[i]] = myArray[i+1];
    }
}
console.log(myObject);