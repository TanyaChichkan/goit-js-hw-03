// const findBestEmployee = function (employees) {

//     const keys = Object.entries(employees);

//     let num = 0;
//     let name;

//     for (let key of keys) {
//         if (key[1] > num) {
//             num = key[1];
//             name = key[0];
//         }
//     } return name;

// };

// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// or

// const findBestEmployee = function (employees) {
//   const values = Object.values(employees);
//   //   console.log(values);
//   let biggestNum = values[0];
//   let key;

//   for (let i = 0; i < values.length; i += 1) {
//     if (values[i] > biggestNum) {
//       biggestNum = values[i];
//     }
//   }
//   //   console.log(biggestNum);

//   const arr = Object.entries(employees);

//   for (key of arr) {
//     if (key.includes(biggestNum)) {
//       return key[0];
//     }
//   }
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );

// // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// );
// // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// );
