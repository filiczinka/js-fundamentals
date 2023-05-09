/*1. 
На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
				1) першого елемента списку
				2) останнього елемента списку
				3) другого елемента списку
				4) четвертого елемента списку
				5) третього елемента списку
Приклад:
•        1
•        2
•        3
•        4
•        5
Результат виводу: 1, 5, 2, 4, 3*/


const list = document.getElementById('list');

const items = [
	list.firstElementChild.textContent, // перший елемент 
	list.lastElementChild.textContent, // останній елемент 
	list.children[1].textContent, // другий елемент 
	list.children[3].textContent, // четвертий елемент 
	list.children[2].textContent // третій елемент 
];
alert(items.join(', '));




/*2. 
Для сторінки
<body>
	<h1>I'am a big header!!!</h1>
	<div id="myDiv">
		<p>First paragraph</p>
		<p>Second paragraph</p>
		<p>Third paragraph</p>
		<p>Fourth paragraph</p>
	</div>
	<ul id="myList">
		<li>Make</li>
		<li>me</li>
		<li>horizontal!</li>
	</ul>
	<span>Make me invisible, please!</span>
</body>
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.*/

const h1 = document.querySelector("h1");
h1.style.color = "black";
h1.style.backgroundColor = "#93c47d";

const myDiv = document.getElementById('myDiv');
const paragraphs = [
	myDiv.firstElementChild.style.fontWeight = 'bold', // перший елемент 
	myDiv.children[1].style.color = 'red', // другий елемент 
	myDiv.children[2].style.textDecoration = 'underline', // третій елемент 
	myDiv.children[3].style.fontStyle = 'italic', // четвертий елемент 
];

const listItems = document.querySelectorAll('#myList li');

listItems.forEach(function (item) {
	item.style.display = 'inline-block';
});

const span = document.querySelector('span');
span.style.display = 'none';


/*3. 
Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
<body>
	main class="mainClass check item">         
		 <div id="myDiv">
				 <p>First paragraph</p>           
		 </div>
 </main> 
</body>*/

const body = document.body;
const main = document.createElement('main');
main.setAttribute('class', 'mainClass check item');

const div = document.createElement('div');
div.setAttribute('id', 'myDiv');

const p = document.createElement('p');
p.textContent = 'First paragraph';

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);


/*4.
Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/Jjabvez*/

const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

btn.addEventListener('click', function() {
	const inputs = document.querySelectorAll('.arr');
	const data = [];
	
	inputs.forEach(function(input) {
		data.push(input.value);
	});
	
	outBlock.innerHTML = data.join('<br>');
});


/*5. 
Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/abzLvqo*/
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const animValue = circle.dataset.anim;
  circle.classList.add(animValue);
});

circles.forEach(circle => {
  const classList = circle.classList;
  const hasAnimation = Array.from(classList).some(className => className.startsWith('animate-'));
  const message = hasAnimation ? 'Анімація була застосована.' : 'Анімація не була застосована.';

  console.log(`Для елемента з класом 'circle' ${message}`);
});



/*6.
Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/dyjyeGO */

const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');

const price = document.getElementById('outprice');

let currentPrice = colors[0].dataset.price;

colors.forEach(color => {
  color.addEventListener('click', () => {
    document.querySelector('.color.active').classList.remove('active');
    color.classList.add('active');

    currentPrice = color.dataset.price;
    price.innerText = currentPrice;
  });
});

sizes.forEach(size => {
  size.addEventListener('click', () => {
    document.querySelector('.size.active').classList.remove('active');
    size.classList.add('active');
    
    currentPrice = size.dataset.price;
    price.innerText = currentPrice;
  });
});



/*⭐⭐⭐
(Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
Зробити електронний годинник у такому стилі. 
https://user-images.githubusercontent.com/9075641/182206079-7c4aa5f0-50d9-4808-bec7-6d3af7bdada9.gif*/
