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



/*3.Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
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



/*4.Напишіть функцію mapBuilder (keysArray, valuesArrays), 
яка приймає два масиви однакової довжини. 
Використовуючи ці масиви, функція повинна створювати об'єкт типу Map,
ключами якого є значення з першого масиву, 
а значеннями Map - значення з другого масиву. 
Після цього функція повертає даний об'єкт Map.
Приклади використання:*/
function mapBuilder(keysArray, valuesArray) {
  if (keysArray.length !== valuesArray.length) {
    throw new Error("Arrays must have the same length");
  }

  const map = new Map();
  keysArray.forEach((key, index) => {
    map.set(key, valuesArray[index]);
  });

  return map;
};

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"


/*5.За допомгою коду у нижче створюється масив, використовуючи цикл, 
до масиву записуються три функції. Логіка функцій проста, 
в консоль виводиться значення лічильника на момент створення функції.
На вигляд код виглядає логічним, але, якщо запустити цей код без змін, 
в консоль буде виведено двічі число 3.
Використовуючи механізм замикання, внесіть у код зміни, 
щоб у консоль вивелися число 0 та число 2(відповідно до виклику).*/ 

let arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); // 0
arr[arr.length - 1](); // 2


/*6.Змініть код використовуючи стрілкові функції, 
щоб в коді не використовувалися методи bind().*/
let server = {
  data: 0,
  convertToString: function (callback) {
    callback(() => {
      return this.data + "";
    });
  }
};

let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    return (callback) => {
      this.result = callback();
    };
  }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"