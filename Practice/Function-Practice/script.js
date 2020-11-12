// function calcMath (num){
//     return (13 + 4 * num);
// }

// console.log(calcMath(4))
// console.log(calcMath(10));

// function removeVowel(input){
//     input = input.split("");
//     for(let i = 0; i < input.length; i++){
//         if(input[i] == "a" || input[i] == "e" || input[i] == "i"||input[i] == "o"|| input[i] == "u"){
//             input[i] = "";
//         }
//     }
//     let output = "";
//     for(let i = 0; i <input.length; i++){
//         output += input[i];
//     }
//     return(output);
// }
// console.log(removeVowel("practice"));




// function overFour(input){
//     let output = "";
//     input = input.split(" ");
//     for(let i = 0; i < input.length; i++){
//         if (input[i].length > 4){

//         }else{
//             output += `${input[i]} `;
//         }
//     }
//     return(output);
// }
// console.log(overFour(`Adipisicing voluptate sint eiusmod qui nostrud aliqua laboris sint irure est sit ut labore.`));

function math(){
    let number = Math.ceil(Math.random()*100);
    let output = number*4+13;

    console.log(`number: ${number}`);
    console.log(`output: ${output}`);
}
