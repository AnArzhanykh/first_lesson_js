let total = 0;

console.log(total);

do{
    let entreNumber = prompt('Ведите число');

    if (entreNumber === null){
        alert(total)
        break
    }

    entreNumber = Number(entreNumber);

    if(Number.isNaN(entreNumber)){
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    total += entreNumber;

} while(true)