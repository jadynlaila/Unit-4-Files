function calcMath (num){
    return (13 + 4 * num);
}

console.log(calcMath(4))
console.log(calcMath(10));

function removeVowel(input){
    input = input.split("");
    for(let i = 0; i < input.length; i++){
        if(input[i] == "a" || input[i] == "e" || input[i] == "i"||input[i] == "o"|| input[i] == "u"){
            input[i] = "";
        }
    }
    let output = "";
    for(let i = 0; i <input.length; i++){
        output += input[i];
    }
    return(output);
}
console.log(removeVowel("practice"));
