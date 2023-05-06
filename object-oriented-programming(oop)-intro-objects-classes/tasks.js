/*1. 
Напишіть клас Круг та реалізуйте функціонал:
- Визначте конструктор, який запитує координати центру кола, 
	його радіус та ініціалізує об'єкт;
- Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
- Визначте статичний метод, який приймає радіус та повертає 
	довжину кола для заданого радіусу;
- Визначте метод отримання об'єкта-кола, 
	який повертає копію поточного об'єкта;
- Визначте статичний метод, який приймає координати центра кола, 
	його радіус та повертає об'єкт кола із заданими параметрами;
- Визначте метод перевірки попадання крапки до кола;
- Визначте метод перетворення поточного стану об'єкта 
	на символьний рядок (toString()). */
class Circle {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
	}

	getCircumference() {
		return 2 * Math.PI * this.radius;
	}

	static getCircumferenceByRadius(radius) {
		return 2 * Math.PI * radius;
	}

	clone() {
		return new Circle(this.x, this.y, this.radius);
	}

	static createFromParams(x, y, radius) {
		return new Circle(x, y, radius);
	}

	containsPoint(x, y) {
		const distance = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
		return distance <= this.radius;
	}

	toString() {
		return `Сenter: (${this.x},${this.y}), radius: ${this.radius})`;
	}
}



/*2.
Напишіть функцію propsCount(currentObject), 
яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
Наприклад:*/

let mentor = {
	course: "JS fundamental",
	duration: 3,
	direction: "web-development"
};

function propsCount(currentObject) {
	return Object.keys(currentObject).length;
};




/*3. 
- Створіть клас Person, у якого конструктор приймає параметри 
	name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
- Від класу Person наслідується клас Student, конструктор 
	якого крім name і surname, приймає параметр year 
	(рік вступу до університету). 
- В класі Student необхідно перевизначити метод 
	showFullName(midleName), щоб виводилося не лише ім’я, прізвище, 
	але і по-батькові (midleName) студента. 
- Також в класі Student необхідно реалізувати метод showCourse(), 
який виводитиме поточний курс студента (від 1 до 6). 
Значення курсу визначатиметься як різниця поточного року 
(визначити самостійно) і року вступу до ВНЗ.
Приклад результату: */

class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	showFullName() {
		console.log(this.surname + ' ' + this.name);
	}
}

class Student extends Person {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}

	showFullName(midleName) {
		console.log(this.surname + ' ' + this.name + ' ' + midleName);
	}

	showCourse() {
		const thisYear = new Date().getFullYear();
		const course = thisYear - this.year + 1;
		return Math.max(1, Math.min(course, 6));
	}
};

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4


/*4. 
А. Реалізувати клас, який описує простий маркер. 
У класі мають бути такі компоненти:
- поле, яке зберігає колір маркера;
- поле, яке зберігає кількість чорнила в маркері (у відсотках);
- метод друку (метод приймає рядок і виводить текст 
	відповідним кольором;
текст виводиться до тих пір, поки в маркері є чорнило; 
один не пробіловий символ – це 0,5% чорнила в маркері).
В. Реалізувати клас, що описує маркер, що заправляється, 
успадкувавши його від простого маркера і додавши метод для 
заправки маркера. Продемонструвати роботу написаних методів */

class Marker {
	constructor(color, inkPercentage) {
		this.color = color;
		this.inkPercentage = inkPercentage;
	}

	print(text) {
		let printedText = "";
		for (let i = 0; i < text.length; i++) {
			if (this.inkPercentage > 0 && text[i] !== " ") {
				printedText += text[i];
				this.inkPercentage -= 0.5;
			} else {
				printedText += " ";
			}
		}
		console.log(`%c${printedText} , color: ${this.color}`);
	}
}

class RefillableMarker extends Marker {
	refill(percentage) {
		this.inkPercentage += percentage;
		if (this.inkPercentage > 100) {
			this.inkPercentage = 100;
		}
	}
}

// Приклад використання класів:
const marker = new Marker("blue", 50);
marker.print("Hello, world!"); // виведе текст синім кольором, використовуючи 50% чорнила
marker.print("This is a test."); // виведе текст синім кольором, використовуючи 45% чорнила (залишилося 5%)
const refillableMarker = new RefillableMarker("red", 80);
refillableMarker.print("This is a refillable marker."); // виведе текст червоним кольором, використовуючи 30% чорнила
refillableMarker.refill(50); // заправляємо маркер на 50%
refillableMarker.print("Now it has more ink."); // виведе текст червоним кольором, використовуючи 70% чорнила



/*5.
Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
	1) клас повинен мати метод showSalary(), 
	який буде виводити зарплату працівника. 
	Зарплата - це добуток ставки dayRate на кількість 
	відпрацьованих днів workingDays. 
	2) додати приватне поле experience і присвоїти йому значення 1.2 
	і використовувати його як додатковий множник при визначенні зарплати 
	– створити метод showSalaryWithExperience(). 
	Вивести значення зарплати з цим коефіцієнтом.
	3) додати гетери і сетери для поля experience. 
	Встановити значення experience = 1.5 і вивести його на екран.
	4) Вивести значення зарплати з новим experience.
	5) Створити кілька екземплярів класу (працівників) 
	з різними зарплатами, як показано в прикладі нижче. 
	Посортувати зарплату працівників із найбільшим experience 
	по зростанню і вивести результат в форматі: worker_fullName: salary_value 
	6) Реалізувати динамічне сортування для будь-якої 
	кількості працівників-екземплярів класу Worker.
	Example usage:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
. . . . . .

let worker3 = new Worker("Andy Ander", 29, 23);
. . . . . .

Output example:
John Johnson
John Johnson salary: 460
New experience: 1.2
John Johnson salary: 552
New experience: 1.5
John Johnson salary: 690

Tom Tomson
Tom Tomson salary: 1056
. . . . . .
New experience: 1.5
Tom Tomson  salary: 1584

Andy Ander
Andy Ander salary: 667
. . . . . .
New experience: 1.5
Andy Ander  salary: 1000.5

Sorted salary:
John Johnson: 690
Andy Ander: 1000.5
Tom Tomson: 1584 */

class Worker {
	#experience = 1.2;

	constructor(fullName, dayRate, workingDays) {
		this.fullName = fullName;
		this.dayRate = dayRate;
		this.workingDays = workingDays;
		this.#experience = 1.2; // default experience value
	}

	showSalary() {
		const salary = this.dayRate * this.workingDays;
		console.log(`${this.fullName} salary: ${salary}`);
		return salary;
	}

	showSalaryWithExperience() {
		const salary = this.showSalary() * this.#experience;
		console.log(`Salary with experience (${this.#experience}): ${salary}`);
		return salary;
	}

	get showExp() {
		return this.#experience;
	}

	set setExp(value) {
		this.#experience = value;
	}
};