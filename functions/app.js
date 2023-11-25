// **************************************************** 1 ****************************************************************

// function greetUser(name){
//     console.log(name);
// }
// greetUser(`Name : Syed Mehar Ali Shah`);
// greetUser(`Age : 22`);
// greetUser(`City : Karachi`);










// **************************************************** 2 ****************************************************************


// function currentDateTime(current){
//     console.log(current);
// }
// currentDateTime(`Current Date: ${new Date()}`);
// currentDateTime(`Current Time: ${new Date().toLocaleString()}`);






// **************************************************** 3 ****************************************************************input

// let btn = document.querySelector("#btn");

// btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     let user1 = document.querySelector('#input1').value;
//     let user2 = document.querySelector('#input2').value;
//     let fullName = `${user1} ${user2}`;

//     let h1 = document.createElement("h1");

//     h1.innerHTML = fullName;
//     document.body.appendChild(h1);

// })








// **************************************************** 4 ****************************************************************

// let btn = document.querySelector("#btn");

// btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     let user1 = parseInt(document.querySelector('#input1').value);
//     let user2 = parseInt(document.querySelector('#input2').value);
//     let sum = `${user1 + user2}`;

//     let h1 = document.createElement("h1");

//     h1.innerHTML = sum;
//     document.body.appendChild(h1);

// })



// **************************************************** 5 ****************************************************************



// function Add() {
//     let num1 = parseFloat(document.querySelector("#number1").value);
//     let num2 = parseFloat(document.querySelector("#number2").value);

//     let resultShow = num1 + num2;
//     document.querySelector("#txt").value = ` The result of Addition is : ${resultShow}`

//     if (num1 !== num1 || num2 !== num2) {
//         document.querySelector("#txt").value = `Please enter  numbers`;
//     }

// }

// function Sub() {
//     let num1 = parseFloat(document.querySelector("#number1").value);
//     let num2 = parseFloat(document.querySelector("#number2").value);

//     let resultShow = num1 - num2;
//     document.querySelector("#txt").value = ` The result of Subtraction is : ${resultShow}`

//     if (num1 !== num1 || num2 !== num2) {
//         document.querySelector("#txt").value = `Please enter  numbers`;
//     }

// }

// function Multiply() {
//     let num1 = parseFloat(document.querySelector("#number1").value);
//     let num2 = parseFloat(document.querySelector("#number2").value);

//     let resultShow = num1 * num2;
//     document.querySelector("#txt").value = `The result of Multiplication is : ${resultShow}`

//     if (num1 !== num1 || num2 !== num2) {
//         document.querySelector("#txt").value = `Please enter  numbers`;
//     }
// }

// function Divide() {
//     let num1 = parseFloat(document.querySelector("#number1").value);
//     let num2 = parseFloat(document.querySelector("#number2").value);

//     if (num1 === 0 || num2 === 0) {
//         document.querySelector("#txt").value = `${num1} is not divisible by ${num2}`;
//     } else if (num1 !== num1 || num2 !== num2) {
//         document.querySelector("#txt").value = `Please enter  numbers`;
//     } else {
//         let resultShow = num1 / num2;
//         document.querySelector("#txt").value = `The result of Division is : ${resultShow}`;
//     }
// }



// **************************************************** 6 ****************************************************************




// function square(number) {
//     console.log(number * number); ;
// }
// square(10);





// **************************************************** 8 ****************************************************************


// let btn = document.querySelector("#btn");

// btn.addEventListener("click", (event) => {
//     event.preventDefault();
//     let num1 = parseInt(document.querySelector('#num1').value);
//     let num2 = parseInt(document.querySelector('#num2').value);
//     let p = document.createElement("p")

//     for (let i = num1; i <= num2; i++) {
//         p.innerHTML += i;

//     }
//     document.body.appendChild(p);
// })


// **************************************************** 11 ****************************************************************



// let numnber = [10, 30, 40, 50, 60, 70, 80, 200, 5];
// let number1 = Math.max(...numnber);
// console.log(number1);    








// **************************************************** 12 ****************************************************************








