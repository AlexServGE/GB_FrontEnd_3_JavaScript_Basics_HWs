// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function consolePrintUserMaxNum(num1, num2, num3) {
    let result;
    const maxNumber = (someNum1, someNum2) => someNum1 > someNum2 ? someNum1 : someNum2;
    result = maxNumber(num1, num2);
    result = maxNumber(result, num3);
    console.log(result);
}

consolePrintUserMaxNum(1, 3, 2);