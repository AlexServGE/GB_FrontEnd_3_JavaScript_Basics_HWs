// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


function consolePrintUserNetSalary() {
    let userGrossSalary = prompt("Введите размер Вашей заработной платы в виде числа");
    if (userGrossSalary === "") {
        console.log("Заданное значение должно состоять только из цифр");
    } else {
        userGrossSalary = +userGrossSalary;
        if (isNaN(userGrossSalary) || userGrossSalary < 0) {
            console.log("Заданное значение неверно");
        } else {
            const netSalary = (userGrossSalary) => userGrossSalary * 0.87;
            console.log(netSalary(userGrossSalary));
        }
    }
}

consolePrintUserNetSalary();

