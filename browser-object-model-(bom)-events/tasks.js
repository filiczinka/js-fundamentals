/*1. 
За допомогою методів об’єкта window створити:
				1) нове вікно розміром 300х300 пікселів.
				2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
				3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
				4) із затримкою 2 сек закрийте вікно.*/

let myWindow = window.open("", "", "width=300,height=300");

setTimeout(() => {
	myWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
	myWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
	myWindow.close();
}, 6000);



/*2. 
Для заданої HTML-сторінки:
	<p id ='text'>I learning JavaScript events!</p> 
	<div>
					<button . . . . . >Change style!</button>
	</div>

напишіть функцію changeCSS(), яка спрацьовуватиме по кліку 
на кнопку і змінюватиме стиль вмісту тега <p>: колір 
шрифту – оранжевий,розмір шрифту 20px, шрифт сімейства "Comic Sans MS".*/


/*3. 
Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
				1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
				2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
				3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
				4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
				Приклад – курсор наведений на лінку.
https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png*/

const btnOne = document.getElementById('btn__one');
const btnTwo = document.getElementById('btn__two');
const btnThree = document.getElementById('btn__three');
const link = document.getElementById('link');

btnOne.addEventListener('click', () => {
	document.body.style.backgroundColor = 'blue';
});

btnTwo.addEventListener('dblclick', () => {
	document.body.style.backgroundColor = 'pink';
});

btnThree.addEventListener('mousedown', () => {
	document.body.style.backgroundColor = 'brown';
});
btnThree.addEventListener('mouseup', () => {
	document.body.style.backgroundColor = 'white';
});

link.addEventListener("mouseenter", () => {
	document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseleave', () => {
	document.body.style.backgroundColor = 'white';
});


/*4. 
Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png*/

const selectEl = document.getElementById('my__select');
const deleteBtn = document.getElementById('delete__btn');

deleteBtn.addEventListener('click', () => {
	const selectedIndex = selectEl.selectedIndex;

	selectEl.remove(selectedIndex);
});


/*5. 
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Приклад роботи:
https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png */

// JavaScript код
let myButton = document.getElementById('my__btn');
let output = document.getElementById('output');

myButton.addEventListener('click', function() {
  output.textContent = 'I was pressed!';
});

myButton.addEventListener('mouseenter', function() {
  output.textContent = 'Mouse on me!';
});

myButton.addEventListener('mouseleave', function() {
  output.textContent = 'Mouse is not on me!';
});



/*6. 
Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на
поточну сторінку при її розтязі/стисканні відповідні значення.
https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png*/

const sizeDisplay = document.getElementById('size__display');

function handleResize() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  sizeDisplay.textContent = `Window size: ${windowWidth}px x ${windowHeight}px`;
};

handleResize();
window.addEventListener('resize', handleResize);



/*7. 
На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
Код HTML-сторінки:
<select name="country" id="country">
				<option value="ger">Germany</option>
				<option value="usa">USA</option>
				<option value="ukr">Ukraine</option>
</select>

<select name="cities" id="cities"></select>
<p></p>
https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png*/



/*⭐⭐⭐
Придумайте просту гру з використанням цих спрайтів. 
На 2-3 дії користувача. (кліки миші, натискання клавіш).
Наприклад:
- вибір персонажа
- стрибок
https://user-images.githubusercontent.com/9075641/184331849-6cc33681-dcdf-4eef-830b-83fc43056e19.png*/