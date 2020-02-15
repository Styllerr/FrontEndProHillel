var firstArray = [5, 97, 33, 'brother', 54, null, 'cat', 45, 'mouse', 98, '', 'homework', 45, 45, 75],
    secondArray = ['cat', 5, 'somebody', 'brother', 33, 4, 98, 'home', 5, 45, '', 93, 54, 'brother', null],
    resultArray = [],
    repidFlag = true; // флаг проверки уникальности в массиве результатов
for (i = 0; i < firstArray.length; i++) {
    let notOneFlag = 0; // флаг проверки уникальности во втором массиве
    repidFlag = resultArray.every(function (item) {
        return item != firstArray[i];
    })
    if (repidFlag === true) {
        secondArray.forEach(function (item) {
            if (firstArray[i] === item && notOneFlag === 0) {
                notOneFlag = 1;
                resultArray.push(item);
            }
        });
    }
}
console.log(resultArray);

resultArray.forEach(function(item) {
    console.log(typeof item);
    switch (typeof(item)) {
        case 'number':
            if (item % 5 === 0) {
                item = 'FIVE';
            }
            break;
        case 'string':
            if (item.length > 5) {
                item = 'FSTR';
            }
            break;
    }
});
console.log(resultArray);
