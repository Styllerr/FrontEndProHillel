var myArray = [52, 'Nothing',, null, 17, 'Cat'];
for (var i = 0; i < myArray.length; i++) {
    if(myArray[i] === null) {
        console.log(`Элемент с индексом ${i}: тип null - ${myArray[i]}`);
    } else {
        console.log(`Элемент с индексом ${i}: тип ${typeof(myArray[i])} - ${myArray[i]}`);
    }
}