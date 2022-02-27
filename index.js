// Задание № 1
// Напишите оператор if, такой, чтобы в качестве выражения в скобках у него были значения true, false.
// Например, if (true) или if (false).
// Посмотрите как работает этот оператор, поместив какую-нибудь команду после круглых скобок.
// Например, console.log(1)

let msg=prompt("Выберите 1 и 0")
let bool=false 
bool = msg==1 && true;

let str1='Правильный выбор'
let str2='Выброр так себе'


alert('1 - Вариант с if else с положительным выражением')
if(bool){
    console.log(str1)
} else{
    console.log(str2)
}


alert('2 - Вариант с if else с отрицательным(!) выражением')
if(!bool){
    console.log(str2)
}else{
    console.log(str1)
}


alert('3 - Вариант с тернарным оператором ? ')
bool?console.log(str1): console.log(str2)


alert('4 - Вариант с оператороми &&-для true  и  ||-для false ')
bool &&console.log(str1)
bool || console.log(str2)


alert('5 - Вариант switch-case')
switch(bool){
    case true: console.log(str1)
    break
    default:  console.log(str2)
}




// Задание № 2
// Написать программу на Js, которая рекомендует фильм в зависимости от возраста пользователя.
// Программа сначала должна спросить у пользователя его возраст.
// Если возраст от 1 до 13: посоветуйте ваш любимый мультфильм
// Если возраст от 14 до 17: посоветуйте приключенчиский фильм.
// Если возраст от 18 и выше: посоветуйте серьёзный фильм.
// Если пользователь ввёл не верный возраст, сообщите ему об ошибке.
// Задание необходима выполнить с помощью if else 

let errMsg = "Error"

alert(start())

function start(){
    let message
    do{
        message = getMessage(checkAge())
    }while(message==errMsg)
    return message
}


function checkAge() {
    let age
    do{
    age = prompt("Укажите ваш возраст, в числовом формате от 1 до 100!",'')
    }while(age=='')
return age
}

function getMessage(age){
    let arrAge = [1,14,18,100]
    let msg
if(age<arrAge[0]){
    msg="Ограничение по возрасту, просмотр разрешается с 1 года"
}else if(age<arrAge[1]){
    msg="Предлагаем к просмотру мульфильмы"
}else if(age<arrAge[2]){
    msg="Предлагаем к просмотру приключенческие фильмы"
}else if(age<=arrAge[3]){
    msg="Предлагаем к просмотру фильмы формата 18+"
}else if(age>arrAge[3]){
    msg="Вам ооочень много лет, фильмы формата 18+ могут погубить вас )))"
}else{
    msg=errMsg
}
return msg
}


// Задание № 3
// Сделать последовательное упрощение к булевым велечинам.


// (2 < 3) && (3 > 4) || true
// (true) && (false) || true
// false || true
// true
// Ответ: true


// !true && (!true || 100 !=  5 * 5)
// !true && (!true || true)
// !true && (true)
// !true && (true)
// false
// Ответ: false


// ('123' == 123) || ((10 <= 10) && (' ' === false))
// (true) || ((true) && (false))
// (true) || (false)
// true
// Ответ: true
