// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {

//     const newArr = [];

//     for (const product of arr) {
//         if (prop === 'quantity') {
//             newArr.push(product.quantity)
//         }

//         if (prop === 'name') {
//             newArr.push(product.name);
//         }

//     }

//     return newArr;

// };

// console.log(getAllPropValues(products, 'name'));

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// OR

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {

//     let key;
//     let product;
//     const newArr = [];

//     for (product of arr) {

//         for (key in product) {
//             if (key === prop) {
//                 newArr.push(product[key]);
//             }
//         }
//     } return newArr;

// }
// console.log(getAllPropValues(products, 'name'));

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
