"use strict";

let colors=["red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "white"];
let turn = 1;
let answer = [];
let guessCount = 0;
let guessArray = [];

document.getElementById("submitButton").onclick = function(){submitGuess();}
document.getElementById("clearButton").onclick = function(){clearGuess();}

let resetGame = () => {
    let turn = 1;
    let answer = [];
    let guessCount = 0;
    let guessArray = [];
    let elemList = document.getElementsByClassName(`main`);
    for(let item = 0; item < elemList.length; item++){
        for(let color = 0; color < colors.length; colors++){
            if(elemList[item].classList.contains(colors[color])){
                elemList[item].classList.remove(colors[color]);
            }
        }
    }

    clearGuess();

    document.getElementById(`guessText`).textContent = "Guess?";
    document.getElementById(`clearButton`).textContent = "Clear";
    document.getElementById(`submitButton`).textContent = "Submit";
    document.getElementById(`submitButton`).onclick = function () { submitGuess();}
    document.getElementById(`submitButton`).onclick = function () { clearGuess();}

}


let youWin = function(){
    document.getElementById(`guessText`).textContent = "Winner!"
    document.getElementById(`submitButton`).textContent = "Reset?"
    document.getElementById(`submitButton`).onclick = function () { resetGame();}

    document.getElementById(`clearButton`).textContent = "You win!"
    document.getElementById(`clearButton`).onclick = function () {  }
}

let youLose = () => {
    document.getElementById(`guessText`).textContent = "Correct Answer:";
    for(let marble = 1; marble <= 4; marble++){
        document.getElementById(`g${marble}`).classList.add(answer[marble]);
    }

    document.getElementById(`submitButton`).textContent = "Reset?"
    document.getElementById(`submitButton`).onclick = function () { resetGame();}

    document.getElementById(`clearButton`).textContent = "You lose";
    document.getElementById("clearButton").onclick = "Clear";



}

let correct = function(){
    let corrCorr = 0;
    let corrInc = 0; 

    for(let i = 0; i < 5; i++){
        if(answer.includes(guessArray[i])){
            if(answer[i-1] == guessArray[i]){
                corrCorr++;
            }else{
                corrInc++;
            }
        }
    }

    let i = 1;

    for(i; i <= corrCorr; i++){
        let corr = `c${turn}${i}`;
        document.getElementById(corr).classList.add(`white`);
    }
    if(corrCorr == 4){
        return setTimeout( () => {youWin()}, 1);

    }

    for(i; i <= (corrCorr + corrInc); i++){
        let corr = `c${turn}${i}`;
        document.getElementById(corr).classList.add(`black`);

    }

    clearGuess();

}

function isCorrect(){
    let doubleCorrect = 0;
    let singleCorrect = 0;

    for(let marble = 1; marble <= 4; marble++){
        if(answer.includes(guessArray[marble])){
            if(answer[marble] == guessArray[marble]){
                doubleCorrect++;
            }else{
                singleCorrect++;
            }
        }
    }

    let indicatorMarble = 1;

    for(indicatorMarble; indicatorMarble <= doubleCorrect; indicatorMarble++){
        let marbleName = `c${turn}${indicatorMarble}`;
        document.getElementById(marbleName).classList.add(`white`);
    }

    if(doubleCorrect ==4){
        youWin();
    }

    for(indicatorMarble; indicatorMarble <=(doubleCorrect + singleCorrect); indicatorMarble++){
        let marbleName = `c${turn}${indicatorMarble}`;
        document.getElementById(marbleName).classList.add(`black`);
    }

    clearGuess();
}

function submitGuess(){
    if(guessArray.length < 4){
        return;
    }
        
    for(let i = 1; i < 5; i++){
        let guess = `${turn}${i}`;
        document.getElementById(guess).classList.add(guessArray[i]);
    }

    isCorrect();

    turn++;

    if(turn > 9){
        youLose();
    }
    
}

function clearGuess(){
    let elemList = document.getElementsByClassName(`guess`);
    for(let i = 0; i < elemList.length; i++){
        let elemListItem = elemList[i];
        for(let j = 0; j < colors.length; j++){
            if(elemListItem.classList.contains(colors[j])){
                elemListItem.classList.remove(colors[j]);
            }
        }
        guessCount = 0;
        guessArray = [];
    }
}

let createAnswer = function(){
    answer = [];
    for(let marble = 1; marble <= 4;){
        let newColor = colors[Math.floor(Math.random() * 7)];
        if(answer.includes(newColor)){
            continue;
        }else{
            answer[marble] = newColor;
            marble++;
        }
    }
    console.log(answer);
}

createAnswer();

let chooseColor = function(color){

    let elemList = document.getElementsByClassName(`guess`);
    for(let item = 0; item < elemList.length; item++){
        let elemListItem = elemList[item];
        if(elemListItem.classList.contains(color)){
            return;
        }
    }

    if(guessCount < 4){
        guessCount ++;
        let guessName = `g${guessCount}`;
        document.getElementById(guessName).classList.add(color);
        guessArray[guessCount] = color;
    }
}