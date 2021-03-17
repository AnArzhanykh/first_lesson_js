const ADMIN_PASSWORD = 'jqueryismyjam';
let message;


do{
    message = prompt('Ведите пароль');

    if(message === null){
        // console.log('Отменено пользователем!');
        alert('Отменено пользователем!')
        break
    }

    if(message === ADMIN_PASSWORD){
        // console.log('Добро пожаловать!');
        alert('Добро пожаловать!')
        break
    } else {
        // console.log('Доступ запрещен, неверный пароль!');
        alert('Доступ запрещен, неверный пароль!')
        break
    }

} while(true)