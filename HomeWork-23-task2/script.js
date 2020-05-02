let sortArray = [5, 3, 2, 8, 1, 4];
let result = [];
let count = sortArray.length;

for (i = 0; i < count; i++) {
    if (sortArray[0] % 2 != 0 && sortArray[0] != 0) {
        let minElement = sortArray[0];
        sortArray.forEach(function (item, index) {
            if (item % 2 != 0) {
                if (item < minElement) {
                    minElement = item;
                    sortArray[index] = sortArray[0];
                    sortArray[0] = minElement;
                }
            }
        })
        result.push(sortArray.shift());
    } else {
        result.push(sortArray.shift());
    }
}
console.log(result);
