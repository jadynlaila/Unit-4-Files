"use strict";

function createPigLatinWord(word){
    let splitWord = word.split("");
    let output = "";

    if(splitWord[0] == "a" || splitWord[0] == "e" || splitWord[0] == "i" || splitWord[0] == "o" || splitWord[0] == "u"){
        return (word + "yay");
    }

    for(let i = 0; i <splitWord.length; i++){
        if(splitWord[0] == "a" || splitWord[0] == "e" || splitWord[0] == "i" || splitWord[0] == "o" || splitWord[0] == "u"){
            return (splitWord.join("")+ "ay");
        }else{
            let temp = splitWord.shift();
            splitWord.push(temp);
        }
    }

}
console.log(createPigLatinWord("birthday"));

function createPigLatinSentence(){
    let string;
    string = document.getElementById("input").value;
    string = string.split(" ");
    for(let i = 0; i < string.length; i++){
        string[i] = createPigLatinWord(string[i]);
    }
    string = string.join(" ");
    document.getElementById("output").textContent = string;
}