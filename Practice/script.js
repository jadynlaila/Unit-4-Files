// // let x = 45;

// // 45 + "2"; //concatination operator == 452

// // // prompt(`the answer to x is ${x}`);

// // console.log(``);

// // let firstWord = "banana";
// // let secondWord = "bandana";



// // console.log(`${firstWord.toLowerCase() < secondWord.toLowerCase()}`);

// // if(5 == 5){
// //     console.log(`it was equal`);
// // }
// // //practice:
// // if(5 < 6){
// //     console.log(`5 is less than 6`);
// // }

// // if(6 < 5){
// //     console.log(`6 is less than 5`);
// // }

// // //answer:
// // let check = false //true;

// // if(check = true){
// //     console.log(`it was true`);
// // }

// // if(check = false){
// //     console.log(`it was false`);
// // }

// // if(check) console.log(`it was true`);

// // if("") console.log(`this is false`); //wont run because this is false. only shows if parameters are true. proved to be false by its inabiliity to run

// // if("whatever") console.log(`this is truthy`);
// // if (0) console.log(`this is falsy`);


// // if(check){
// //     console.log(`it was true`);
// // }else{
// //     console.log(`it was false`);
// // }

// // //else if

// // if(year == 2020){
// //     console.log(`we are still here`);
// // }else if(year == 2021){
// //     console.log(`happy new year`);
// // }

// //SHORT QUIZ FOR PRACTICE

// let q1 = prompt(`what is 5+5`);
// let q2 = prompt(`what is 5+2`);
// let q3 = prompt(`what is 5+1`);
// let q4 = prompt(`what is 5+4`);
// let q5 = prompt(`what is 5+3`);
// let score = 0;

// if(q1 == 10){
//     console.log('Question 1 is correct');
//     score++;
// }
// if(q2 == 7){
//     console.log('Question 2 is correct');
//     score++;
// }
// if(q3 == 6){
//     console.log('Question 3 is correct');
//     score++;
// }
// if(q4 == 9){
//     console.log('Question 4 is correct');
//     score++;
// }
// if(q5 == 8){
//     console.log('Question 5 is correct');
//     score++;
// }
// alert(`Your score was ${score}`);


// if(name = Pam){
//     console.log(`cool`);
// }else{
//     console.log(`not so cool`);
// }

// // //rewritten w ternary operator
// // let coolness = (name = "Pam") ? "cool" : "not so cool";
// // console.log(`${coolness}`);

// // let result = (a + b < 4) ? "below" : "over";
// // console.log(`${result}`);

// switch (login){
//     case "Employee":
//         message = "Hello";
//         break;
//     case "Director":
//         message = "Greetings";
//         break;
//     case "": 
//         message = "No login";
//         break;
//     case "default":
//         message = ``;
//         break;
// }

// if(employee == true){
//     if(name == "karry"){
//         if(computer == "personal"){
    
//         }else if(computer == "work"){

//         }
//     }
// }

// if (shirt =="blue" || shirt == "red" || shirt == "green" || shirt == "pink"){
//     alert(`lookin good`);
// }

// if(time < 9 || time > 17 || weekdays == false){
//     message = "the store is closed"
// }else{
//     message = "the store is open"
// }

// //tells you if you need to fix your car
// //if your flat tire light is on
// //if your check engine light is on
// //if you have driven 30,000+ miles


// let flatTireLight = false;
// let checkEngineLight = true;
// let miles = 50000;
// if(flatTireLight || checkEngineLight || miles > 30000){
//     console.log('You need to get your car checked and fixed')
// }else{
//     console.log('You dont need a check yet');
// }


// let tvOn = true;
// let radioOn = true;
// let computerOn = false;
// if(tvOn && radioOn && computerOn){
//     //see if all three things are one
//     alert(`You have too much on... dont waste power`);
// }

// let pen = true;
// let paper = false;
// let mouse = false;
// let keyboard true;
// if((pen && paper) || (mouse && keyboard)){
//     console.log('youre good');
// }else){
//     console.log(`you suck`);
// }

// let upLate = true;
// let games = true;
// let breakfastSkipped = false;
// if(!upLate && !games && !breakfastSkipped){
//     console.log(`you can pass`);
// }else{
//     console.log(`you will suffer`);
// }

// for(let i = 1; i < 3; i++){
// 	console.log(`this has happened ${i} times`)
// }

// for(let i = 1; i < 10; i++){
//     console.log(`this has happened ${i+4}times`)
// }

// //answer

// for(let i = 5; i <= 13; i += 2){
//     console.log(i)
// }

// for(let i = 0; i < 5; i++){
//     console.log(`${2*i + 5}`)
// }

// for(let i = 5; i <=11; i++){
//     console.log(i);
// }

// for(let i = 1 ; i <= 9; i++){
//     console.log(`this is nice`);
// }

// for(let i = 11; i >= 1; i -= 2){
//     console.log(i);
// }

// let string = []
// for(let i = 1; i <= 5; i++){
//     string.push(Math.floor(Math.random()*100));
// }
// console.log(string)

// let sum = 0;
// let amount = 0;
// //shortcut is putting + in front of a prompt to turn it into a number instead of string automatically
// while(true){
//     let value = +prompt(`Enter a test score:`, `leave blank if done`);
//     if (!value) break;
//     sum += value;
//     amount++;
// }

// let average = sum / amount;
// let grade = ``

// if(average >= 90){
//     grade = `A`;
// }else if(average >= 80){
//     grade = `B`;
// }else if(average >= 70){
//     grade = `C`;
// }else if(average >= 60){
//     grade = `D`;
// }else{
//     grade = `F`;
// }

// console.log(`Sum: ${sum}`);
// console.log(`Amount: ${amount}`);
// console.log(`Average ${average}`);
// console.log(`Grade: ${grade}`);

// main: for(let i = 0; i < 50; i++){
//     if(i % 2 == 1) continue main; //was just continue first
//     console.log(i);
// }


// let i, j;
// loopOuter:
// for(i = 0; i < 3; i++){
//     loopInner:
//     for(j = 0; j < 3; j++){
//         if(i == j){
//             continue loopOuter;
//         }else{
//             console.log(`i = ${i}, j = ${j}`)
//         }
//     }
// }

// let string = []
// stringOuter:
// for(let i = 1; i <= 6; i++){
//     let randNum = (Math.floor(Math.random()*10 + 1));
//     if(!string.includes(randNum)){
//         string.push(randNum)
//     }else if(i <= 6){
//         continue stringOuter;
//     }else{
//         break;
//     }
// }
// console.log(string)

//i did a lot of this very wrongly.. no time to finish so correct format is below
// let num1 = 0;
// let num2 = 0;
// let num3 = 0;
// let num4 = 0;
// let num5 = 0;
// let num6 = 0;

// num1 = Math.ceil(Math.random() * 10);
// num2 = Math.ceil(Math.random() * 10);

// while (num1 == num2){
//     num2 = Math.ceil(Math.random() * 10);
// }else{
//     break;
// }

// num3 = Math.ceil(Math.random() * 10);
// while (num2 == num3 || num1 == num3){
//     num3 = Math.ceil(Math.random() * 10);
// }else{
//     break;
// }

// num4 = Math.ceil(Math.random() * 10);
// while (num1 = num4 || num2 == num4 || num3 === num4){
//     num4 = Math.ceil(Math.random() * 10);
// }else{
//     break;
// }

// num5 = Math.ceil(Math.random() * 10);
// while (num1 = num5 || num2 == num5 || num3 === num5 || num4 == num5){
//     num5 = Math.ceil(Math.random() * 10);
// }else{
//     break;
// }

// num6 = Math.ceil(Math.random() * 10);
// while(num1 = num6 || num2 == num6 || num3 === num6 || num4 == num6 || num5 == num6)

// //noooo nooo
// //this is the way to do it not ^^^^^
// while (true){
//     if(num2 == num1){
//         Math.ceil(Math.random() * 10);
//     }else{
//         break;
//     }
// }



// console.log(`${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}`);


//PRACTICE WORK 11/3 4.2 LOOP PRACTICE

//#1
// let sum = 0;
// for(let i = 0; i <= 1000; i++){
//     sum += i;
// } 
// console.log(sum);

// //#2
// let sum2 = 0;
// for(let i = 93; i <= 845; i++){
//     if(i % 2 == 1){
//         continue;
//     }
//     sum2 += i;
// }
// console.log(sum2);

// //#3
// let sum3 = 1;
// for(let i = 1; i <= 400; i++){
//     if(i % 6 == 0){
//         sum3 *= i;
//     }
// }
// console.log(sum3)

// //#4
// let number = 101;
// let output = true;
// for(let i = 2; i < number; i++){
//     if(number % i == 0){
//         output = false;
//         break;
//     }
// }
// console.log(output);

//#5
// let num = 13;
// let output2 = true;
// for(let i = 2; i <= 100; i++){
//     if(num % i == 0){
//         output2 = false;
//         break;
//     }else{
//         num + answer
//     }
    
// }
// console.log(output2);


// let string = [];
// for(let num = 1; num < 100; num++){
//     if(num == 1){
//         string += `1, `;
//         continue;
//     }else if (num == 2){
//         string += `2, `;
//         continue;
//     }
//     for(i = 2; i < num; i++){
//         if ( i == ( num - 1) || num == 1 || num == 2){
//             string += num + ", ";
//             break;
//         }else if(num % i == 0){
//             break;
//         }
//     }
// }
// console.log(string);


//#6
// let input = 4;
// let solution = 1;
// for(i = 1; i <= input; i++){
//     if(i <= input){
//         solution *= i;
//         continue;
//     }else{
//         break;
//     }
// }
// console.log(solution);

//#7

// let input1 = 18;
// let input2 = 24;
// let solution = 0;
// for(i = 1; i < input1; i++){
//     if(input1 % i == 0 && input2 % i == 0){
//         solution = i;
//     }
// }
// console.log(solution);

//#8
//unfinished
// let input = 5;
// for(i = 1; i > input; i++){
//     if(i > input){
//     }
//}



//ARRAYS 

// let arr = [];
// let colors = [`red`, `red${i}`, `orange`]

// array[2]; //this represents orange

//array practice



// let arr = [1,2,3,4];
// console.log(arr.length);

// arr[150] = 10;
// console.log(arr.length);

// arr.push(3);

// let end = arr.pop();
// console.log(end);
// console.log(arr.length);
// end = arr.pop();
// console.log(end);
// console.log(arr.length);
// console.log(arr);


let box1 = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31];
let box2 = [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31];
let box3 = [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31];
let box4 = [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31];
let box5 = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
// console.log(box1);
// console.log(box2);
// console.log(box3);
// console.log(box4);
// console.log(box5);
// box3[10] = 22;
// box4[6] = 14;
// box5[15] = 31;
// box1[9] = 19;
// box2[11] = 23;
// box2[box2.length-1]

//wrong lolz 
// let input = 1;
// let binaryarr = []
// for(i = 0; i < 1; i++){
//     if(input = box1){
//         binaryarr.push(1);
//     }else{
//         binaryarr.push(0);
//         break;
//     }
// }
// for(i = 0; i < 1; i++){
//     if(input = box2){
//         binaryarr.push(1);
//     }else{
//         binaryarr.push(0);
//         break;
//     }
// }
// for(i = 0; i < 1; i++){
//     if(input = box3){
//         binaryarr.push(1);
//     }else{
//         binaryarr.push(0);
//         break;
//     }
// }
// for(i = 0; i < 1; i++){
//     if(input = box4){
//         binaryarr.push(1);
//     }else{
//         binaryarr.push(0);
//         break;
//     }
// }
// for(i = 0; i < 1; i++){
//     if(input = box5){
//         binaryarr.push(1);
//     }else{
//         binaryarr.push(0);
//         break;
//     }
// }
// console.log(binaryarr);
//wrong lolz ^^
//right kind of i think i copied idk 
// let input = 19;
// let output = [];
// loop: 
// while(true){
//     for(let i = 0; i < box5.length; i++){
//         if(input == box5[i]){
//             output += "1 ";
//             break;
//         }
//     }
//     output += "0 ";
//     break loop;
// }

// loop: 
// while(true){
//     for(let i = 0; i < box4.length; i++){
//         if(input == box4[i]){
//             output += "1 ";
//             break;
//         }
//     }
//     output += "0 ";
//     break loop;
// }

// loop: 
// while(true){
//     for(let i = 0; i < box3.length; i++){
//         if(input == box3[i]){
//             output += "1 ";
//             break;
//         }
//     }
//     output += "0 ";
//     break loop;
// }

// loop: 
// while(true){
//     for(let i = 0; i < box2.length; i++){
//         if(input == box2[i]){
//             output += "1 ";
//             break;
//         }
//     }
//     output += "0 ";
//     break loop;
// }

// loop: 
// while(true){
//     for(let i = 0; i < box1.length; i++){
//         if(input == box1[i]){
//             output += "1 ";
//             break;
//         }
//     }
//     output += "0 ";
//     break loop;
// }
// console.log(output);

let input = "classic";
let music = ["jazz", "blues"];
music.push("R&B");
if(music.length % 2 == 1){
    music[Math.floor(music.length / 2)] = input;
}
music.unshift("rap", "acapella");
console.log(music);
