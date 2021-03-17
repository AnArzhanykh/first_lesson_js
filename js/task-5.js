let country = prompt('Укажите страну куда совершить доставку');

let price;
let deliveryСountry;

if (country !== null){
    country = country.toLowerCase();
    
    switch (country){
        case 'китай' :
            deliveryСountry = 'Китай';
            price = 100;  
            alert(`Доставка в ${deliveryСountry} будет стоить ${price} кредитов`);
            break

        case 'чили':
            deliveryСountry = 'Чили';
            price = 250;
            alert(`Доставка в ${deliveryСountry} будет стоить ${price} кредитов`);
            break  


        case 'австралия':
            deliveryСountry = 'Австралия';
            price = 170;
            alert(`Доставка в ${deliveryСountry} будет стоить ${price} кредитов`);
            break

        case 'индия' :
            deliveryСountry = 'Индия';
            price = 80; 
            alert(`Доставка в ${deliveryСountry} будет стоить ${price} кредитов`);
            break

        case 'ямайка':
            deliveryСountry = 'Ямайкаай';
            price = 120;        
            alert(`Доставка в ${deliveryСountry} будет стоить ${price} кредитов`);
            break

        default :
            alert('В вашей стране доставка не доступна')
    }
} else alert('Вы отменили заказ')

