// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arrayOfFiveEls = [];
let sumOfNumbersInArrayOfFiveEls = 0;
let minNumberInArrayOfFiveEls;
for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 9);
    sumOfNumbersInArrayOfFiveEls += number;
    if (i === 0) {
        minNumberInArrayOfFiveEls = number;
    } else if (number < minNumberInArrayOfFiveEls) {
        minNumberInArrayOfFiveEls = number;
    }
    arrayOfFiveEls.push(number);
}

console.log(arrayOfFiveEls);
console.log(sumOfNumbersInArrayOfFiveEls);
console.log(minNumberInArrayOfFiveEls);
console.log(arrayOfFiveEls.includes(3) ? `В массиве есть число 3 и оно расположено под индексом ${arrayOfFiveEls.indexOf(3)}` : "В массиве отсутствуют числа 3 ");