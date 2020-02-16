var firstArray = [5, 97, 33, 'brother', 54, null, 'cat', 45, 'mouse', 98, '', 'homework', 45, 45, 75],
    secondArray = ['cat', 5, 'somebody', 'brother', 33, 4, 98, 'home', 5, 45, '', 93, 54, 'brother', null],
    resultArray = [],
    repidFlag = true;                        // флаг проверки уникальности в массиве результатов
for (i = 0; i < firstArray.length; i++) {
    let notOneFlag = 0;                      // флаг проверки уникальности во втором массиве
    repidFlag = resultArray.every(function(item) {
        return item != firstArray[i];
    })
    if (repidFlag === true) {               //если этого элемента еще нет в новом массиве
        secondArray.forEach(function(item) {
            if (firstArray[i] === item && notOneFlag === 0) {
                resultArray.push(item);
                notOneFlag = 1;              //флаг, что этот совпавший элемент уже добавлен в новый массив
            }
        });
    }
}
resultArray.forEach(function(item, index) { //замена чилел кратных 5 и стрнгов более 5 символов
    if (typeof item === "number" && item % 5 === 0) {
        resultArray[index] = 'FIVE';
    } else if (typeof item === "string" && item.length > 5) {
        resultArray[index] = 'FSTR';
    }
});
console.log(resultArray);