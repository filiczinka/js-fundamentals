/*1.
Дано три цілих числа: a, b, c. 
Перевірте істинність висловлювання: a < b < c*/
const a = 1;
const b = 2;
const c = 3;

if (a < b && b < c) {
  console.log(true);
} else {
  console.log(false);
}


/* 2. Допишіть код, щоб в консолі браузера з'явилися рядки, 
які написані в коментарях, оперуючи при цьому змінними х і у.*/
let x = 1;
let y = 2;

let res1 = "" + x + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = true + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x == true;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = (x - x) / (y - y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""


/*3. Використовуючи функцію prompt() задайте користувачу питання 
про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult. 
В залежності від отриманого значення виведіть відповідне 
повідомлення про статус особи. Наприклад: при виконанні 
умови вік більше 18 вивести “Ви досягли повнолітнього віку”. 
Якщо вік менше 18 років вивести “Ви ще надто молоді”, */
const isAdult = +prompt('Вам вже виповнилося 18 років?');
console.log(isAdult);
if (isAdult < 18) {
result = 'Ви ще надто молоді'
} else {
result = 'Ви досягли повнолітнього віку'
}


/*4.
Задано масив чисел, знайти число яке найбільш часто входить в масив,
занести це число в новий масив і видалити всі входження цього числа 
із поточного масиву.*/
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data = ... // 5
...
console.log(arr) // [4, 2, 1, 6, 3, 2]


/*5. Користувач вводить три довжини сторін трикутника 
(використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
    a) визначити і вивести в консоль площу трикутника 
    b) перевірити чи цей трикутник є прямокутним і вивести в консоль 
		результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, 
в іншому випадку вивести 'Incorrect data‘. 
Результат обчислення площі трикутника виводити в консоль 
з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).*/
const sideOne = +prompt('Введіть довжину сторони A', '');
const sideTwo = +prompt('Введіть довжину сторони В', '');
const sideThree = +prompt('Введіть довжину сторони С', '');

const perimeter = sideOne + sideTwo + sideThree;
console.log("P =", perimeter);
const halfPerimeter = perimeter / 2;

const area = Math.sqrt(halfPerimeter * (halfPerimeter - sideOne) * (halfPerimeter - sideTwo) * (halfPerimeter - sideThree));
console.log("S =", area.toFixed(3));

const largeSide = Math.max(sideOne, sideTwo, sideThree);
const rightTriangle = Math.max(sideOne, sideTwo, sideThree) ** 2 

if () {
console.log('Цей трикутник прямокутний');
} else {
console.log('Цей трикутник не прямокутний');
};

if (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0) {
  console.log('Incorrect data');
};

/*6. 
Написати умовну конструкцію, яка в залежності від часу доби виводитиме 
відповідне привітання. 
Потрібно отримати реальний час доби із системи. 
Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.*/
function hour(parametr) {
  let result;
  if (parametr > 23 || parametr < 5) {
    console.log('Доброї ночі');
  } else if (parametr > 5 && parametr < 11) {
    console.log('Доброго ранку');
  } else if (parametr > 11 && parametr < 17) {
    console.log('Доброго дня');
  } else if (parametr > 17 && parametr < 23) {
    console.log('Доброго вечора');
  }
  return result;
}