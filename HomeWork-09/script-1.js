let oldPrice = {
    apple: 29,
    tomato: 30,
    peach: 78,
    pear: 35,
    raspberries: 100,
    potatoes: 14,
    carrot: 5,
}
let newPrice = {
    peach: 63,
    strawberry: 90,
    apple: 25,
    pear: 32,
    raspberries: 100,
    carrot: 5,
    tomato: 30,
};
let result = {};
function market() {
    for(let productOld in oldPrice) {
        for(let productNew in newPrice) {
            if(productOld === productNew 
                && oldPrice[productOld] === newPrice[productNew]) {
                    result[newPrice[productNew]] = productNew;
                }
        }
    }
    return result;
}
console.log(market());