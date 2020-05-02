function parse(command) {
    let result = 0;
    if (command != null) {
        let pos = command.match(/o/);
        let resultArray = [];
        if (pos) {
            for (let i = 0; i <= pos.index; i++) {
                switch (command[i]) {
                    case 'i':
                        result += 1;
                        break;
                    case 'd':
                        result -= 1;
                        break;
                    case 's':
                        result *= result;
                        break;
                    case 'o':
                        resultArray.push(result);
                        break;
                    default:
                        break;
                }
            }
            console.log(resultArray);
        } else {
            console.log('Нет команды на возврат числа!!!');
        }
    } }

parse('iiisdoso');