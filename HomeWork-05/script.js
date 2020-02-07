var variant = ['камень', 'ножницы', 'бумага'],
    resultList = ['победил!!!', 'проиграл :('];
var compVariant = variant[Math.floor(Math.random()*3)];
console.log('Компьютер выбрасывает:', compVariant);
var userVariant = prompt('Вы показываете: Камень, Ножницы или Бумага?');
if (userVariant === null) {
    alert('Зря! А могли бы поиграть...');
} else {
    userVariant = userVariant.toLocaleLowerCase();
    var userVariantIndex = variant.indexOf(userVariant);
    if(userVariantIndex === -1) {
        alert('Проверте правильность ввода слова');
    } else {
        if(userVariant === compVariant) {
            alert('Ничья!\n' + 'Вы оба выбрали' + ' ' + userVariant);
        } else {
            switch (compVariant) {
                case 'камень':
                    if (userVariantIndex === 2) {
                         result = 0;
                    } else {
                        result = 1;
                    }
                    break;
                case 'ножницы':
                    if (userVariantIndex === 0) {
                        result = 0;
                   } else {
                       result = 1;
                   }
                   break;
                case 'бумага':
                    if (userVariantIndex === 1) {
                        result = 0;
                   } else {
                       result = 1;
                   }
                    break;
            }
            alert('Ты' + ' ' + resultList[result] + '.\n' + 'Твой выбор:' 
            + ' ' + userVariant + ' ' + 'против' + ' ' + compVariant);
        }
    }
}