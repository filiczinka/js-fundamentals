/*1.Напишіть код в / Ваш код /, щоб він працював*/
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5" 


/*2.Напишіть код в / Ваш код /, щоб він працював*/
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26


/*3.
Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
Якщо параметри типу Number відсутні, повертає число 0.*/


function mul(...args) {
  let hasNumber = false;
  let result = 1;
  for (let arg of args) {
    if (typeof arg === "number") {
      hasNumber = true;
      result *= arg;
    }
  }
  return hasNumber ? result : 0;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0