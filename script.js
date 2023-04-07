// homework 04

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function pow(x, n) {
//     let res = x;
//     for (let i = 1; i < n; i++){
//         res *= x;
//     }
//     return res;
// }
// console.log(pow(2, 3));


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b)=> b-a);
// alert( arr ); // 8, 5, 2, 1, -10

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = users.map(item => item.name);
// alert( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item => ({
//     fullName : `${item.name} ${item.surname}`,
//     id : item.id
// })
// )

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

let getAverageAge = (arr) => arr.reduce((sum, user)=> sum + user.age, 0) / arr.length;
// console.log(getAverageAge(arr))
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28