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







// **************************************************** 10 ****************************************************************


// function arguments(...arg) {
//     console.log(...arg);
// }
// arguments("Hello", "World", 42);











// **************************************************** 11 ****************************************************************



// let numnber = [10, 30, 40, 50, 60, 70, 80, 200, 5];
// let number1 = Math.max(...numnber);
// console.log(number1);








// **************************************************** 12 ****************************************************************






// function value(width, height) {
//     return width * height;
// }
// console.log("Area with values:" + 5 * 10);

// function variable(varibleWidth, variableHeight) {
//     let variableWidth1 = 5;
//     let variableHeight2 = 10;
//     let variableWidthHeight = variableWidth1 * variableHeight2;
//     console.log("Area with variables:", variableWidthHeight);
// }
// variable();




// **************************************************** 13 ****************************************************************


// let sortButton = document.getElementById('btn');
// let inputElement = document.getElementById('input');
// let resultElement = document.getElementById('result');
// sortButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     let inputArray = inputElement.value.split(',');
//     let sortedArray = inputArray.sort();
//     resultElement.textContent = `Sorted Array: ${sortedArray}`;
// });







// **************************************************** 14 ****************************************************************



// let sortButton = document.getElementById('btn');
// let inputElement = document.getElementById('input');
// let resultElement = document.getElementById('result');

// sortButton.addEventListener('click', (event) => {
//     event.preventDefault();

//     let inputArray = inputElement.value.split(',').map(Number);

//     function sumArray(numbers) {
//         let total = 0;
//         for (const num of numbers) {
//             total += num;
//         }
//         return total;
//     }

//     let result = sumArray(inputArray);
//     resultElement.textContent = `Sum of the array: ${result}`;
// });


// **************************************************** 15 ****************************************************************


// let param = function inner() {
//     return typeof inner;
// }
// alert(param());


// function computePower(base, exponent) {
//     return base ** exponent;
// }



// **************************************************** 16 ****************************************************************


// const base = 2;
// const exponent = 3;
// const result = computePower(base, exponent);

// console.log(`${base} ki power ${exponent} is ${result}`);







// **************************************************** 17 ****************************************************************



// function dice() {
//     let random = Math.floor(Math.random() * 6) + 1;
//     return random;
//   }

//   let result = dice();
//   console.log(`The dice rolled: ${result}`);




// **************************************************** 18 ****************************************************************


// function number(number) {
//     return parseInt(number.toString().split('').reverse().join(''));
// }
// let x = 32243;
// let reverse = number(x);
// console.log(`Example x: ${x}`);
// console.log(`Expected Output: ${reverse}`);









// **************************************************** 20 ****************************************************************



// function para(str) {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// const inputString = 'the quick brown fox';
// const outputString = para(inputString);

// console.log(`Example String: ${inputString}`);
// console.log(`Expected Output: ${outputString}`);







// **************************************************** 21 ****************************************************************


// function word(str) {
//     let words = str.split(' ');

//     let longestWord = '';

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }
// let inputString = 'Web Development Tutorial';
// let longestWord = word(inputString);

// console.log(`Example String: ${inputString}`);
// console.log(`Expected Output: ${longestWord}`);









// **************************************************** 22 ****************************************************************



// function countVowels(str) {
//     let vowels = 'aeiou';
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// let inputString = 'The quick brown fox';
// let numberOfVowels = countVowels(inputString);

// console.log(`Example String: ${inputString}`);
// console.log(`Expected Output: ${numberOfVowels}`);













// **************************************************** 23 ****************************************************************




// function getTypeOf(value) {
//     return typeof value;
// }

// let exampleValues = [1, 'hello', true, { key: 'value' }, function () { }, undefined];

// for (let i = 0; i < exampleValues.length; i++) {
//     const value = exampleValues[i];
//     console.log(`Type of ${value}: ${getTypeOf(value)}`);
// }


// **************************************************** 26 ****************************************************************



// function calculateAge(birthYear, currentYear) {
//     let age1 = currentYear - birthYear;
//     let age2 = age1 - 1;

//     console.log(`Age calculator`);

//     console.log(`Current year :${currentYear}`);
//     console.log(`Birth year :${birthYear1}`);
//     console.log(`You are either ${age1} or ${age2} years old.`);

//     console.log(`Age calculator`);

//     console.log(`Current year :${currentYear}`);
//     console.log(`Birth year :${birthYear2}`);
//     console.log(`You are either ${age1} or ${age2} years old.`);
// }
// let birthYear1 = 1994;
// let birthYear2 = 1997;

// let currentYear = new Date().getFullYear();

// calculateAge(birthYear2, currentYear);



// **************************************************** 30 ****************************************************************



// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     console.log(`The circumference is ${circumference.toFixed(2)}.`);
// }

// function calcArea(radius) {
//     let area = Math.PI * Math.pow(radius, 2);
//     console.log(`The area is ${area.toFixed(2)}.`);
// }

// let circleRadius = 5;

// calcCircumference(circleRadius);
// calcArea(circleRadius);




// **************************************************** 29 ****************************************************************




// function celsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9 / 5) + 32;
//     console.log(`${celsius}°C is ${fahrenheit}°F.`);
// }

// function fahrenheitToCelsius(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5 / 9;
//     console.log(`${fahrenheit}°F is ${celsius}°C.`);
// }

// let celsiusTemperature = 30;
// let fahrenheitTemperature = 86;

// celsiusToFahrenheit(celsiusTemperature);
// fahrenheitToCelsius(fahrenheitTemperature);
