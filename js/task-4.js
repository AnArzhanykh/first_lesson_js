let credits = 23580;
const pricePerDroid = 3000;

let totalPrice;


let quantityDroids = prompt('какое кол-во дроидов вы хотите купить?');

if(quantityDroids === null){
    console.log('Отменено пользователем!');
}

quantityDroids = Number(quantityDroids);


totalPrice = quantityDroids * pricePerDroid;

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    credits -= totalPrice;
    console.log(`Вы купили ${quantityDroids} дроидов, на счету осталось ${credits} кредитов.`);
}







