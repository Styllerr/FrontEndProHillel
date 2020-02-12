var defaultString = 'hello MY name is JavaScript and I like your code styLe';
var stringArray = defaultString.split(' '),                             //разбираем предложение на слова
    newStringArray;
for (var i = 0; i < stringArray.length; i++) {                          //ищем слова с прописной буквой
    if(stringArray[i] != stringArray[i].toLowerCase()) {
        newStringArray = stringArray[i].split('');                      //разбираем это слово на буквы
        for (var j = 0; j < newStringArray.length; j++) {
            if(newStringArray[j] === newStringArray[j].toLowerCase()) { //делаем замену букв
                newStringArray[j] = newStringArray[j].toUpperCase();
            } else {
                newStringArray[j] = newStringArray[j].toLowerCase();
            }
            stringArray[i] = newStringArray.join('');                   //собираем из новых букв слово
        }
    }
}
result = stringArray.join(" ");                                         //собираем предложение с измененными словами
alert(result + '- стало\n' + defaultString + '- а так было');