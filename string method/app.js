
// ********************************************* 1 *****************************************************


// function add(){
// let firstname = document.querySelector("#firstname").value;
// let lastname = document.querySelector("#lastname").value;
// let fullName = document.querySelector("#fullname")
// let fullName1 = firstname + " " + lastname;
// fullName.innerHTML = fullName1
// console.log(fullName);
// }






// ********************************************* 2 *****************************************************


// function mb(){
//     let mobile = document.querySelector("#mobile").value;
//     let length = document.querySelector("#length");
//     length.innerHTML = mobile.length;
// }


// ********************************************* 3 *****************************************************



// let name2 = "pakistani";
// let name1 = name2.slice(7,8)
// console.log(name1);



// let show = document.querySelector("#show");
// let show1 = document.querySelector("#show1");

// let name2 = "pakistani";
// let name1 = name2.slice(7,8);

// show.innerHTML = `String : ${name2}`;
// show1.innerHTML = `Index of '${name1}' : ${name2.indexOf(name1)}`;



// ********************************************* 4 *****************************************************



// let show = document.querySelector("#show");
// let show1 = document.querySelector("#show1");

// let name2 = "Hello World";
// let name1 = name2.slice(9,10);

// show.innerHTML = `String : ${name2}`;
// show1.innerHTML = `Index of '${name1}' : ${name2.lastIndexOf(name1)}`;





// ********************************************* 5 *****************************************************



// let show = document.querySelector("#show");
// let show1 = document.querySelector("#show1");

// let name2 = "pakistani";
// let name1 = name2.slice(3,4);

// show.innerHTML = `String : ${name2}`;
// show1.innerHTML = `Character at index ${name2.indexOf(name1)} : ${name1}  `;






// ********************************************* 6 *****************************************************



// function add(){
// let firstname = document.querySelector("#firstname").value;
// let lastname = document.querySelector("#lastname").value;
// let fullName = document.querySelector("#fullname");
// fullName.innerHTML = firstname.concat(" ", lastname);
// }




// ********************************************* 7 ************************************* 


// let city = "Hyderbabad";
// let city2 = city.replace("Hyder", "Islam");
// console.log(`City: ${city}`);
// console.log(`After Replacement : ${city2}`);








// ********************************************* 8 ************************************* 

// let message = "Ali and Sami are best friends. They play cricket and football together"
// let message2 = message.replaceAll("and", "&");
// console.log(`Message : ${message}`);
// console.log(`After replacment : ${message2}`);








// ********************************************* 9 ************************************* 

// let container1 = document.querySelector('.container1');
// let container2 = document.querySelector('.container2');
// let container3 = document.querySelector('.container3');
// let container4 = document.querySelector('.container4');


// let value = 472;
// container3.innerHTML = `Value : ${value}`;
// container4.innerHTML = `Type : ${typeof(value)}`;

// let changeType = value.toString();
// container1.innerHTML = `Value : ${value}`;
// container2.innerHTML = `Type : ${typeof(changeType)}`;





// ********************************************* 10 ************************************* 



// function url(){
//     let input = document.querySelector('#input');
//     let container = document.querySelector('.container');



// container.innerHTML = input.value}


// ********************************************* 11 ************************************* 



// function convert(){
//     let input = document.querySelector('#input');
//     let container1 = document.querySelector('.container1');
//     let container2 = document.querySelector('.container2');

//     container1.innerHTML = `User input : ${input.value}`;
//     container2.innerHTML = `Upper Case : ${input.value.toUpperCase()}`;

// }







// ********************************************* 12 ************************************* 



// function convert(){
//     let input = document.querySelector('#input');
//     let container1 = document.querySelector('.container1');
//     let container2 = document.querySelector('.container2');

//     container1.innerHTML = `User input : ${input.value}`;
//     container2.innerHTML = `Lower Case : ${input.value.toLowerCase()}`;

// }





// ********************************************* 14 ************************************* 



// let container1 = document.querySelector('.container1');
// let container2 = document.querySelector('.container2');


// let num = 35.36;
// container1.innerHTML = `Number : ${num}`;
// container2.innerHTML = `Result : ${num.toString().replace('.','')}`;



// ********************************************* 15 ************************************* 





// let container1 = document.querySelector('.container1');
// let container2 = document.querySelector('.container2');
// let container3 = document.querySelector('.container3');

// let a = "3";
// let b = "3";
// let x = a + b;

// container1.innerHTML = `a is ${a}`;
// container2.innerHTML = `b is ${b}`;
// container3.innerHTML = `a + b is ${x}`;





// ********************************************* 16 ************************************* 





// let container1 = document.querySelector('.container1');
// let container2 = document.querySelector('.container2');
// let container3 = document.querySelector('.container3');

// let a = "3";
// let b = "3";
// let y = a - b;

// container1.innerHTML = `a is ${a}`;
// container2.innerHTML = `b is ${b}`;
// container3.innerHTML = `a - b is ${y}`;



// ********************************************* 17 ************************************* 


// function valid(){
//     let input = document.querySelector('#input').value;
//     let container = document.querySelector('.container');

//     let arr = ["!",",",".","@"];

//     for(let i=0; i<arr.length; i++){
//         if(input.includes(arr[i])){
//             container.innerHTML = "";
//             alert("please enter a valid username")
//         } else{
//             container.innerHTML = input
//         }
//     }
// }






// ********************************************* 18 ************************************* 


// let user = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
// let A = ["cake", "apple", "pie", "cookie", "chips" , "patties"];
// let isAvailable = false;
// for( let i = 0; i < A.length; i++ ){
// if(user.toLowerCase() === A[i].toLowerCase()){
//     isAvailable = true;
//     break;
// }
// }if(isAvailable){
//     alert("available");
// }else{
//     alert("not available");
// }


// ********************************************* 19 ************************************* 




// let container1 = document.querySelector(".container");
// let input1 = prompt("Enter first string");
// let input2 = prompt("Enter second string");
// if(input1 > input2){
//     container1.innerHTML = `${input1} is greater than ${input2}`;
// }else if(input1 < input2){
//     container1.innerHTML = `${input2} is greater than ${input1}`;
// }else if(input1 === input2){
//     container1.innerHTML = `Both are equal`;
// }else{
//     container1.innerHTML = `invalid string`;
// }




// ********************************************* 20 ************************************* 
// ********************************************* not compelte ************************************* 



// let input = prompt("enter your password");

// if(/^[A-Za-zd]/.test(input)){
//     console.log(input);
// }else{
//     console.log("invalid");
// }






// ********************************************* 21 ************************************* 



// let uni = "university of karachi";
// for(let i = 0; i < uni.length; i++){
//     console.log(uni[i]);
// }


// ********************************************* 22 ************************************* 



// let user = prompt("enter text");
// console.log(`User Input : ${user}`);
// console.log(`Last character  of input : ${user.slice(-1)}`);


// let str = "Pakistan";
// for (let i = 0; i < str.length; i++) {
//     if(str[i] === "a" || str[i] === "e " || str[i] === "i " || str[i] === "o" || str[i] === "u"){
//         console.log(str.charAt(i));

//     }
// }


















































































































// **************************************************************** Other Topic ****************************************************************

// let div = document.createElement("div");
// let para = document.createElement("p");
// let nodeText = document.createTextNode("Hello world!");
// div.appendChild(para);
// para.appendChild(nodeText);
// console.log(div);

// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// let home = document.createTextNode("home");
// let about = document.createTextNode("about");
// let contact = document.createTextNode("contact");
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// li1.appendChild(home);
// li1.setAttribute("class", "home");
// li2.appendChild(about);
// li2.setAttribute("class", "about");
// li3.appendChild(contact);
// li3.setAttribute("class", "contact");      
// console.log(ul)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      






























