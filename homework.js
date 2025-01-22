// Функция для проверки числового ввода
// Открывает окно prompt, проверяет, что введённое значение является числом и не пустое, и возвращает его.
function getValidatedNumber(promptMessage) {
    let input;
    do {
        input = prompt(promptMessage); // Запрашиваем ввод от пользователя
        if (isNaN(input) || input.trim() === "") { // Проверяем, является ли значение числом
            alert("Пожалуйста, введите корректное числовое значение."); // Если нет, сообщаем об ошибке
        }
    } while (isNaN(input) || input.trim() === ""); // Повторяем запрос, пока не будет корректного значения
    return parseFloat(input); // Преобразуем строку в число с плавающей запятой
}

// Функция для проверки положительных чисел
// Проверяет, что число больше 0, и возвращает true или false.
function validatePositiveNumber(input, message) {
    if (input <= 0) { // Если число меньше или равно 0
        alert(message); // Выводим сообщение об ошибке
        return false; // Возвращаем false
    }
    return true; // Возвращаем true, если число корректное
}

// Функция для проверки корректного имени
// Запрашивает имя и проверяет, чтобы оно не было пустым и содержало только буквы.
function getValidatedName() {
    let name;
    do {
        name = prompt("Как вас зовут?"); // Запрашиваем имя
        if (!name || name.trim() === "" || !/[a-zA-Zа-яА-Я]/.test(name)) {
            alert("Пожалуйста, введите корректное имя, содержащее только буквы."); // Если некорректно, повторяем
        }
    } while (!name || name.trim() === "" || !/[a-zA-Zа-яА-Я]/.test(name));
    return name.trim(); // Возвращаем корректное имя
}

// Функция для проверки корректной даты
// Проверяет, существует ли дата с указанными годом, месяцем и днём.
function isValidDate(year, month, day) {
    const date = new Date(year, month - 1, day); // Создаём объект Date (месяцы начинаются с 0)
    return (
        date.getFullYear() === year && // Проверяем год
        date.getMonth() === month - 1 && // Проверяем месяц
        date.getDate() === day // Проверяем день
    );
}

// Функция для расчёта возраста
// Принимает дату рождения и текущую дату, возвращает возраст в годах, неделях и днях.
function calculateAgeDifference(birthDate, currentDate) {
    const diffInMilliseconds = currentDate - birthDate; // Разница в миллисекундах
    const millisecondsInDay = 24 * 60 * 60 * 1000; // Миллисекунд в сутках
    const ageInYears = currentDate.getFullYear() - birthDate.getFullYear(); // Разница в годах
    const totalDays = Math.floor(diffInMilliseconds / millisecondsInDay); // Разница в днях
    const totalWeeks = Math.floor(totalDays / 7); // Разница в неделях

    // Корректируем возраст в годах, если день рождения в этом году ещё не наступил
if (
    currentDate.getMonth() < birthDate.getMonth() || // Если текущий месяц меньше месяца рождения
    (currentDate.getMonth() === birthDate.getMonth() && // Или если текущий месяц равен месяцу рождения,
        currentDate.getDate() < birthDate.getDate()) // но текущий день меньше дня рождения
) {
    return {
        years: ageInYears - 1, // Уменьшаем возраст на 1 год, так как день рождения ещё не наступил
        weeks: totalWeeks, // Возвращаем общее количество недель с рождения
        days: totalDays, // Возвращаем общее количество дней с рождения
    };
}

// Если день рождения уже был в этом году, возвращаем возраст без изменений
return {
    years: ageInYears, // Возраст в годах
    weeks: totalWeeks, // Возвращаем общее количество недель с рождения
    days: totalDays, // Возвращаем общее количество дней с рождения
};

}

// 1. Запрос имени
let name = getValidatedName(); // Получаем корректное имя
alert(`Привет, ${name}!`); // Приветствуем пользователя

// 2. Запрос даты рождения
const CURRENT_DATE = new Date(); // Получаем текущую дату
let birthYear = getValidatedNumber("Введите год вашего рождения:"); // Запрашиваем год
let birthMonth = getValidatedNumber("Введите месяц вашего рождения (число от 1 до 12):"); // Запрашиваем месяц
let birthDay = getValidatedNumber("Введите день вашего рождения:"); // Запрашиваем день

if (!isValidDate(birthYear, birthMonth, birthDay)) { // Проверяем корректность даты
    alert("Введенная дата рождения некорректна. Проверьте ввод.");
} else {
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // Создаём объект даты рождения
    if (birthDate > CURRENT_DATE) { // Проверяем, не указана ли дата в будущем
        alert("Дата рождения не может быть в будущем.");
    } else {
        const ageData = calculateAgeDifference(birthDate, CURRENT_DATE); // Рассчитываем возраст
        alert(
            `Вам ${ageData.years} лет, что составляет ${ageData.weeks} недель или ${ageData.days} дней.`
        );
    }
}

// 3. Периметр квадрата
let squareSide = getValidatedNumber("Введите длину стороны квадрата (в см):"); // Запрашиваем длину стороны
if (validatePositiveNumber(squareSide, "Длина стороны квадрата должна быть больше нуля.")) {
    let perimeter = 4 * squareSide; // Рассчитываем периметр
    alert(`Периметр квадрата равен ${perimeter} см.`);
}

// 4. Площадь окружности
let radius = getValidatedNumber("Введите радиус окружности (в см):"); // Запрашиваем радиус
if (validatePositiveNumber(radius, "Радиус окружности должен быть больше нуля.")) {
    let circleArea = Math.PI * Math.pow(radius, 2); // Рассчитываем площадь
    alert(`Площадь окружности равна ${circleArea.toFixed(2)} см².`); // Округляем до 2 знаков
}

// 5. Скорость движения
let distance = getValidatedNumber("Введите расстояние между городами (в км):"); // Запрашиваем расстояние
if (validatePositiveNumber(distance, "Расстояние должно быть больше нуля.")) {
    let time = getValidatedNumber("За сколько часов хотите добраться? (Можно вводить дробные числа)"); // Запрашиваем время
    if (validatePositiveNumber(time, "Время должно быть больше нуля.")) {
        let speed = distance / time; // Рассчитываем скорость
        alert(`Вам нужно двигаться со скоростью ${speed.toFixed(2)} км/ч.`);
    }
}

// 6. Конвертор валют
const EXCHANGE_RATE = 0.96; // Фиксированный курс доллара к евро
let dollars = getValidatedNumber("Введите сумму в долларах:"); // Запрашиваем сумму в долларах
if (validatePositiveNumber(dollars, "Сумма должна быть больше нуля.")) {
    let euros = dollars * EXCHANGE_RATE; // Конвертируем в евро
    alert(`${dollars} долларов равно ${euros.toFixed(2)} евро.`);
}

// 7. Шоколадки и сдача
let wallet = getValidatedNumber("Введите сумму денег в кошельке (в тенге):"); // Запрашиваем сумму в кошельке
if (validatePositiveNumber(wallet, "Сумма должна быть больше нуля.")) {
    let chocolatePrice = getValidatedNumber("Введите цену одной шоколадки (в тенге):"); // Запрашиваем цену шоколадки
    if (validatePositiveNumber(chocolatePrice, "Цена должна быть больше нуля.")) {
        if (wallet < chocolatePrice) { // Проверяем, хватает ли денег
            let deficit = chocolatePrice - wallet; // Считаем, сколько не хватает
            alert(`Вам не хватает ${deficit.toFixed(2)} тенге для покупки шоколадки.`);
        } else {
            let chocolates = Math.floor(wallet / chocolatePrice); // Количество шоколадок
            let change = wallet % chocolatePrice; // Остаток денег
            alert(`Вы можете купить ${chocolates} шоколадок. Ваша сдача: ${change.toFixed(2)} тенге.`);
        }
    }
}
