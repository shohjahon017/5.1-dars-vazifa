//Destructuring assignment ga oid vazifa
//1-masala
// const info = ["Ali", 30, "Toshkent"];
// let [name, age, city] = info;
// console.log(name);

//2-masala
// const colors = ["red", "green", "blue", "yellow", "purple"];
// let [q, y, ...res] = colors;
// console.log(res);

//3-masala
// function firstAndLast(arr) {
//   const [first, , , last] = arr;
//   return [first, last];
// }

// const result = firstAndLast([10, 20, 30, 40]);
// console.log(result); // [10, 40]

//4-masala
// const numbers = [1, 2, 3, 4, 5, 6];
// let [a, b, c, d, e, f] = numbers;
// console.log(b, e);

//#### **2. Object Destructuring:**
//1-masala
// const book = {
//   title: "JavaScript for Beginners",
//   author: "John Doe",
//   year: 2021,
// };
// let { title, author } = book;
// console.log(title, author);

//2-masala
// const location = {
//   city: "Toshkent",
//   coordinates: {
//     latitude: 41.2995,
//     longitude: 69.2401,
//   },
// };
// let { coordinates: latitude, longitude } = location;
// console.log(latitude, longitude);

//3-masala
// const person = {
//   firstName: "Ali",
//   lastName: "Valiyev",
//   age: 28,
// };
// let { firstName: fName, lastName: lName } = person;
// console.log(fName, lName);

//4-masala
// const settings = {
//   theme: "dark",
//   language: "uz",
// };
// let { theme, language = "ru" } = settings;
// console.log(theme, language);

//#### **3. Qo'shimcha Mashqlar:**
//1-masala
// function configure(options) {
//   const { host = "localhost", port = 8080, protocol = "http" } = options;
//   console.log(`Connecting to ${protocol}://${host}:${port}`);
// }

// configure({ host: "127.0.0.1" }); // Connecting to http://127.0.0.1:8080

//2-masala
// function combineAndExtract(arr1, arr2) {
//   const res = {
//     first: arr1[0],
//     second: arr1[1],
//     third: arr2[0],
//   };
//   return res;
// }

// const result = combineAndExtract([1, 2], [3, 4, 5]);
// console.log(result); // { first: 1, second: 2, third: 3 }

//Masalalar.
// ESLATMA masalalarni har uch turdagi funksiyalar yordamida ishlansin.
//  Jami 30 ta funksiya yuklanadi
//1-masala
// let arr = [1, 2, 3, 6, 5, 8, 7, 9];
// function sumOddElements(arg) {
//   let sum = 0;
//   for (const element of arg) {
//     if (element % 2 == 1) {
//       sum += element;
//     }
//   }
//   return sum;
// }

//express
// const sumOddElements = function (arg) {
//   let sum = 0;
//   for (const element of arg) {
//     if (element % 2 == 1) {
//       sum += element;
//     }
//   }
//   return sum;
// };

//arrow
// const sumOddElements = (arg) => {
//   let sum = 0;
//   for (const element of arg) {
//     if (element % 2 == 1) {
//       sum += element;
//     }
//   }
//   return sum;
// };
// console.log(sumOddElements(arr));

//2-masala
