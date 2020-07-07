'use strict';

/*
 дан массив, нужно проверить, есть ли в нем элемент со значением 'c' или нет.
 Если есть - вывести 'есть', если нет - вывести 'нет'.*/

let arr = [1, 'b', 5, 5, 9, 4, 'c', 4, 'f'];

let flag = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'c') {
        flag = true;
        break;
    }
}

/**
 * Строгое равенство с true лишнее =)
 */
// if (flag === true) {
/*if (flag) {
 console.log('Есть');
 } else {
 console.log('Нет');
 }*/
/**
 * My solution
 */
console.log(flag ? 'Есть' : 'Нет');

/*
 необходимо создать функцию hasElem, которая параметром будет принимать массив и возвращать true,
 если 'c' есть в массиве, и false - если нет*/
/**
 * Excellent
 */
function hasElem(arr, elem = 'c'/*param default value*/) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return true;
        }
    }
    return false;
}

console.log(hasElem(arr, 'c'));

/*
 Дан массив с числами. Проверьте, что в этом массиве есть число 5.
 Если есть - выведите 'да', а если нет - выведите 'нет'.*/
flag = false; // reset flag
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        flag = true;
        break;
    }
}

console.log(flag ? 'Да' : 'Нет');

//if (flag === true) {
if (flag) {
    console.log('Да');
} else {
    console.log('Нет');
}

/*
 Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы.
 То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30.
 Если число не делится - выведите 'false', а если делится - выведите 'true'.*/
flag = false; // reset flag
let num = 17;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        flag = true;
        break; // miss stop cycle
    }
}
console.log(flag);
/*if (flag === true) {
 console.log(flag);
 } else {
 console.log(flag);
 }*/

/*
 Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
 Если есть - выведите 'да', а если нет - выведите 'нет'.*/
flag = false; // reset flag
for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        flag = true;
        break;
    }
}
console.log(flag ? 'Да' : 'Нет');
/*if (flag === true) {
    console.log('Да');
} else {
    console.log('Нет');
}*/
