/*1.Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
    <h2 class="head">header1</h2>
    <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
    <h2>header3</h2>
    <h2 class="head">header4<span>inner elem2</span></h2>
    <h2>header5</h2> */

let head = $("h2.head");
head.css("background-color", "green");

let innerElements = head.find(".inner");
innerElements.css("font-size", "35px");


/*2. На HTML-сторінці є посилання <a>. У випадку коли,
href починається на https://, потрібно додати посиланню атрибут target="_blank".*/

$('a[href^="https://"]').attr('target', '_blank');


/*3. Знайдіть теги <div>, які стоять безпосередньо після <h3> 
і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
   <h3>header1</h3>
   <div>text1</div>
   <h3>header2</h3>
   <div>text2</div> */

$('h3 + div').each(function () {
    $(this).insertBefore($(this).prev('h3'));
});


/*4.На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того,
як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.  */
let checkboxes = $('input[type="checkbox"]');
checkboxes.on('change', function () {
    let checkedCount = checkboxes.filter(':checked').length;
    checkboxes.prop('disabled', checkedCount >= 3);
});