"use strict";
let score= 0;
let randomNum = 0;
let bestScore = 0;
randomNum = Math.floor(Math.random() * 100);
document.getElementById("currentNumber").textContent = randomNum;
document.getElementById("current").textContent = `Current Streak - ${score}`
document.getElementById("best").textContent = `Best Streak - ${score}`
function lessThan(){
    let temp = Math.floor(Math.random() * 100);
    if(randomNum < temp){
        score++;
        console.log("correct");
        if(score > bestScore){
            bestScore = score;
            document.getElementById("best").textContent = `Best Streak - ${bestScore}`;
        }
    }else{
        console.log("incorrect");
        score="0";
    }
    randomNum = temp;
    document.getElementById("currentNumber").textContent = randomNum;
    document.getElementById("current").textContent = `Current Streak - ${score}`;
}

function greaterThan(){
    let temp = Math.floor(Math.random() * 100);
    if(randomNum < temp){
        score++;
        console.log("correct");
        if(score > bestScore){
            bestScore = score
            document.getElementById("best").textContent = `Best Streak - ${bestScore}`;
        }
    }else{
        console.log("incorrect");
        score="0";
    }
    randomNum = temp;
    document.getElementById("currentNumber").textContent = randomNum;
    document.getElementById("current").textContent = `Current Streak - ${score}`;
}
