/*1.
Напишіть функцію sumSliceArray(arr, first, second), 
яка приймає масив arr і два числа (first и second) – 
порядкові номери елементів масиву, які необхідно скласти. 
Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
Функція повинна генерувати винятки, якщо були введені не числа, 
і коли одне з чисел або обидва більшого розміру за довжину масиву. 
Напишіть код, який використовує цю функцію, передбачте обробку 
можливих винятків.*/

function sumSliceArray(arr, first, second) {
	try {
		first = parseInt(first);
		second = parseInt(second);
		if (first >= arr.length || second >= arr.length) {
			throw 'Порядковий номер не може бути більшим або рівним довжині масиву!';
		}
		if (first < 0 || second < 0) {
			throw 'Порядковий номер не може бути від\'ємним!';
		}
		return arr[first] + arr[second];
	} catch (error) {
		console.error(error);
	}
}

// приклад використання функції
const arr = [1, 2, 3, 4, 5];
const sum = sumSliceArray(arr, 2, 4); // 8
console.log(sum);



/*2.Створіть функцію checkAge(), яка запитує у користувача його ім'я, 
вік та статус (адмін, модератор, користувач) та генерує модальне 
вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років 
(генерується помилка типу RangeError).користувач не ввів жодних даних 
в будь-якому полі (виводиться повідомлення The field is empty! 
	Please enter your age з типом помилки Error). 
	У полі статус введено неправильне слово (тип помилки EvalError).
	в полі вік введено нечислове значення. У всіх інших випадках 
	користувач отримає доступ до перегляду фільму. 
	У блоці catch передбачена можливість виведення назви та опису 
	помилки.*/

function checkAge() {
	try {
		const userName = prompt("Please enter your name:");
		const userAge = prompt("Please enter your age:");
		const userStatus = prompt("Please enter your status (admin, moderator, or user):");

		if (!userAge) {
			throw new Error("The field is empty! Please enter your age");
		}
		const age = parseInt(ageInput);
		if (isNaN(age)) {
			throw new TypeError("The age entered is not a number");
		}
		if (age < 18 || age > 70) {
			throw new RangeError("You must be between 18 and 70 years old to access this content");
		}
		if (userStatus !== "admin" && userStatus !== "moderator" && userStatus !== "user") {
			throw new EvalError("Invalid status entered");
		}
		alert("Welcome to the movie!");
	} catch (error) {
		alert(`Error: ${error.name}. ${error.message}`);
	}
}



/*3.Реалізуйте функцію calcRectangleArea(width, height), 
яка приймає 2 параметри ширина прямокутника width і висота 
прямокутника height і обраховує його площу. 
Передбачити припинення виконання програми і генерацію винятку
у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі 
виняткові ситуації.*/

function calcRectangleArea(width, height) {
	try {
		if (isNaN(width) || (isNaN(height))) {
			throw new Error('Вказане не числове значення!')
		} else if (width < 0 || height < 0) {
			throw new Error('Число не може бути від\'ємним')
		}
	} catch (error) {
		alert(`Error: ${error.name}. ${error.message}`)
		throw error;
	}
	return s = width * height;
}

calcRectangleArea(2, 5); // 10
calcRectangleArea('a', 2); // Error('Вказане не числове значення!')
calcRectangleArea(-2, 5); // Error('Число не може бути від'ємним')



/*4.Створіть клас MonthException, конструктор якого приймає 
параметр message і ініціалізує поле name значенням MonthException.
Реалізуйте функцію showMonthName(month), в якій параметр month – це 
порядковий номер місяця в році. Функція повертає назву місяця 
відповідно до введеного номера місяця. У випадку некоректного 
вводу кидається ексепшн у вигляді об’єкта класу MonthException з 
повідомленням Incorrect month number.
Напишіть код, який використовує цю функцію, 
передбачте обробку можливих винятків.
Приклад роботи програми:
console.log(showMonthName(5));
May
console.log(showMonthName(14));
MonthException Incorrect month number*/




/*5.Реалізуйте функцію showUser(id), яка приймає параметром 
користувацьке id і повертає об’єкт, який містить значення переданої 
id. Також функція викидає помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив 
користувацьких айді ids, перевіряє з використанням функції 
showUser() кожен елемент масиву ids на коректність, 
в разі виключної ситуації виводить повідомлення про помилку. 
Функція showUsers(ids) повертає масив об’єктів, де значеннями 
ключів є коректні елементи ids.

Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ] */

function showUser(id) {
	if (id < 0) {
		throw new Error(`ID must not be negative: ${id}`);
	}
	return obj = { id: id, }
}

function showUsers(ids) {
  const correctIds = [];

  for (let i = 0; i < ids.length; i++) {
    let id = ids[i];
    try {
      const user = showUser(id);
      correctIds.push(user);
    } catch (error) {
      console.error(error.message);
    }
  }
  return correctIds;
}