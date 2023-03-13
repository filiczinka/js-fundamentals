/*3. a) оголосіть дві змінні;
			b) запишіть у змінні будь-які значення;
			c) виведіть на екран значення змінних;
			d) скопіюйте значення однієї змінної в іншу;
			e) виведіть на екран значення змінних. */
let dogName = 'Sidzy ';
let dogAge = 2;
console.log(dogName, dogAge);
dogName = dogAge;
console.log(dogName);


/*4. Створіть об’єкт з 5-ма наступними властивостями: 
“String”, “Number”, “Boolean”, “Undefined”, “Null”. 
Значення кожної властивості повинно відповідати відповідному 
примітивному типу даних.*/
const primitives = {
	string: 'hello',
	number: 3,
	boolean: true,
	undefined: undefined,
	null: null,
}


/*5. Використовуючи функцію confirm() задайте користувачу 
питання про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult і виведіть в консоль.*/
const isAdult = confirm('Вам вже виповнилося 18 років?');
console.log(isAdult);


/*6. В зовнішньому файлі напишіть скрипт ,
в якому оголосіть змінні, для збереження таких даних:
				- ваше ім’я
				- ваше прізвище
				- навчальна група
				- ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль*/
const myName = 'Alina'; //string
const mySurname = 'Filippova'; //string
const groupsNumber = 749; //number
const myBthYear = 1999; //number
const myStatus = true; //boolean
console.log(myBthYear, groupsNumber, myStatus, myName, mySurname);
const myLovelyColor = null;
let myHairColor;
console.log(myLovelyColor, myHairColor);


/*7. За допомогою функції prompt() напишіть скрипт ,
який послідовно запитує в користувача логін, імейл та пароль, 
і виводить на екран повідомлення із введеними даними.
Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.*/
let userLogin = prompt('Enter your login', '');
let userMail = prompt('Enter your Email', '');
let userPass = prompt('Enter your password', '');
alert('Dear ' + userLogin + ',' + ' your email is' + userMail + ', ' + 'your password is ' + userPass + '.' );


/*8. Напишіть скрипт, який вираховує кількість секунд в годині, 
в добі, в місяці, записує результати в відповідні змінні, 
і виводить їх значення на екран. */
const secundInMinute = 60;
const minutInnHour = 60;
const hourInDay = 24;
let dayInMonth = 30;
const secundInHour = secundInMinute * minuteInHour;
console.log(secundInHour);
const secundInDay = secundInHour * hourInDay;
console.log(secundInDay);
const secundInMonth = secundInDay * dayInMonth;
console.log(secundInMonth);