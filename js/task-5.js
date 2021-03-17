let country = prompt('Укажите страну куда совершить доставку');

if (country !== null){
    country = country.toLowerCase();

    const Chine = 'Китай';
    const Chile = 'Чили';
    const Australia = 'Австралия';
    const India = 'Индия'
    const Jamaica = 'Ямайка'


    switch (country){
        case 'китай' :
            let priceChine = 100;  
            alert(`Доставка в ${Chine} будет стоить ${priceChine} кредитов`);
            break

        case 'чили':
            let priceChile = 250;
            alert(`Доставка в ${Chile} будет стоить ${priceChile} кредитов`);
            break  


        case 'австралия':
            let priceAustralia = 170;
            alert(`Доставка в ${Australia} будет стоить ${priceAustralia} кредитов`);
            break

        case 'индия' :
            let priceIndia = 80; 
            alert(`Доставка в ${India} будет стоить ${priceIndia} кредитов`);
            break

        case 'ямайка':
            let priceJamaica = 120;        
            alert(`Доставка в ${Jamaica} будет стоить ${priceJamaica} кредитов`);
            break

        default :
            alert('В вашей стране доставка не доступна')
    }
} else alert('Вы отменили заказ')

