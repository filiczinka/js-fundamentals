/*1. Написати функцію compact() яка має приймати на вхід масив, 
а на вихід має повертати значення нового масиву без повторень.
приклад:*/

const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(arr) {
	const newArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (!newArray.includes(arr[i])) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

compact(arr); // поверне [5, 3, 4, 6, 7]




/*2.Написати функцію createArray(start, end), 
яка приймає на вхід 2 параметри:
- початкове значення
- кінцеве значення
а на виході отримує масив із діапазоном цих значень 
(реалізувати достатньо лише із числовими значеннями)
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9] */
let start = +prompt('початкове значення:')
let end = +prompt('кінцеве значення:')


function createArray(start, end) {
	let arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}
console.log(createArray(start, end));


/*3.Задані цілі числа a і b (a < b). 
Виведіть усі цілі числа від a до b включно, 
при цьому a виводится 1 раз, число а+1 - два рази і т.д. */

let a = +prompt('Enter a:');
let b = +prompt('Enter b:');

if (a >= b) {
	console.log('a must be less than b');
} else {
	for (let i = a; i <= b; i++) {
		let repetitions = i - a + 1;
		for (let j = 0; j < repetitions; j++) {
			console.log(i);
		}
	}
}



/*4. Напишіть функцію randArray(k), яка заповнюватиме масив 
k випадковими цілими числами. Випадкові числа генеруються із 
діапазону 1-500.
randArray(5);  // [399,310,232,379,40]*/
let k = 5;

function randArray(k) {
	let arr = [];
	for (let i = 0; i <= k; i++) {
		arr.push(Math.floor((Math.random() * 500 + 1)))
	}
	return arr;
}
console.log(randArray(k));



/*5.Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, 
але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)*/

let  array = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

function funcName(array){
	let newArr = [...array].flat(2);
	let arrNumb = newArr.filter((e) => {
		return typeof e === 'number';
	});
	let arrString = newArr.filter((e) => {
		return typeof e === 'string';
	});
	return [arrNumb, arrString]
} 

console.log(funcName(array));



/*6.
Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну 
із арифметичних операцій та повертає її результат. Вид операції 
визначається цілим числом op: 1 – віднімання, 2 – добуток, 
3 – ділення, інші значення – додавання.*/

let numOne = +prompt('A');
let numTwo = +prompt('B');
let operation = +prompt('Op');

function calc(a, b, op) {
	switch (op) {
		case 1: return a - b;
		case 2: return a * b;
		case 3: return a / b;
		default: return a + b;
	}
}

console.log(calc(numOne, numTwo, operation));



/*7.(додатково) Напишіть функцію findUnique(arr), 
яка приймає масив arr і перевіряє на унікальність його елементи. 
Якщо всі елементи масиву унікальні (не мають дублів), 
то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true */