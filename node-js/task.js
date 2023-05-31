/*1.Створити Node.js http-сервер, який слухатиме запити 
на порт 5000 на локальній  машині. Сервер повинен повертати сторінку,
що містить ім’я поточного користувача операційної системи, 
тип операційної системи, час роботи системи в хвилинах 
(використати модуль OS), поточну 
робочу директорію і назву файлу сервера (використати модуль path).*/
// const http = require('http');
// const host = 'localhost';
// const port = 5000;
// const os = require('os');
// const path = require('path');

// const requestListener = (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   const username = os.userInfo().username;
//   const osType = os.type();
//   const uptimeInMinutes = Math.floor(os.uptime() / 60);
//   const currentWorkingDirectory = process.cwd();
//   const serverFilename = path.basename(__filename);

//   const responseHtml = `
//     <html>
//       <head>
//         <title>Server Information</title>
//       </head>
//       <body>
//         <h1>Server Information</h1>
//         <p>Current user name: ${username}</p>
//         <p>OS Type: ${osType}</p>
//         <p>System Work Time: ${uptimeInMinutes}</p>
//         <p>Current Work Directory: ${currentWorkingDirectory}</p>
//         <p>Server file name: ${serverFilename}</p>
//       </body>
//     </html>
//   `;

//   res.end(responseHtml);
// };

// const server = http.createServer(requestListener);

// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}/`);
// });


/*2.Необхідно створити власний модуль personalmodule.js, 
який містить функцію, що приймає ім’я системного юзера 
і працює з поточним часом та на основі пори доби виводить 
повідомлення із привітанням юзера. Щоб експортувати змінні 
чи функції модуля на зовні можна використати об’єкт module.exports. 
Створіть Node.js сервер, який з використанням 
функціоналу розробленого модуля повертатиме наступну сторінку:*/

// personalModule.js

// function greetUser(username) {
//   const currentTime = new Date();
//   const currentHour = currentTime.getHours();

//   let greeting;

//   if (currentHour < 12) {
//     greeting = `Good Morning, ${username}!`;
//   } else if (currentHour < 18) {
//     greeting = `Good Afternoon, ${username}!`;
//   } else {
//     greeting = `Good Evening, ${username}!`;
//   }

//   return greeting;
// }

// module.exports = {
//   greetUser: greetUser
// };


// server
const http = require('http');
const personalModule = require('./personalModule');
const host = 'localhost';
const port = 3000;
const os = require('os');
const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  const username = os.userInfo().username;
  const greeting = personalModule.greetUser(username);
  const currentDate = new Date().toLocaleString();

  res.write(`<h1>${greeting}</h1>`);
  res.write(`<p>Date of request: ${currentDate}</p>`);
  res.end();
});

server.on('error', (error) => {
  console.error('Error running Server', error.message);
});

server.listen(3000, () => {
  console.log(`Server is running on  http://${host}:${port}`);
});



/*⭐⭐⭐
Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, а потім зчитує цей файл та виводить вміст на екран.

Кроки:
Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація.
Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл.
Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати отриману інформацію функції writeToTextFile().
Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу.*/