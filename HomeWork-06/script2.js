var defaultString = 'hello MY name is JavaScript and I like your code styLe';
var stringArray = defaultString.split(' ');
console.log(stringArray);
for (var i = 0; i < stringArray.length; i++) {
    if(stringArray[i] != stringArray[i].toLowerCase()) {
        for (var j = 0; j < stringArray[i].length; j++) {
            if(stringArray[i][j] === stringArray[i][j].toLowerCase()) {
                console.log('маленькая:', stringArray[i][j]);
                stringArray[i][j] = stringArray[i][j].toUpperCase();
                console.log('теперь большая', stringArray[i][j]);
            } else {
                stringArray[i][j] = stringArray[i][j].toLowerCase();
                console.log(stringArray[i][j]);
            }
            
        }
        console.log(stringArray[i]);
    }
    
}
