var myArray = [52, 'Nothing',, null, ];
for (var i = 0; i < myArray.length; i++) {
    if(myArray[i] === null) {
        console.log(`Элемент с индексом ${i} в массиве: ${myArray[i]} его тип: null`);
    } else {
        console.log(`Элемент с индексом ${i} в массиве: ${myArray[i]} его тип: ${typeof(myArray[i])}`);
    }
}