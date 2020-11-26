"use strict";

let player1 = prompt("Player 1, what is your nickname?");
let player2 = prompt("Player 2, what is your nickname");
document.getElementById(`play1`).textContent = `${player1}`;
document.getElementById(`play2`).textContent = `${player2}`;

let turnCount = 1;
let cells = [`a1`, `a2`, `a3`, `b1`, `b2`, `b3`, `c1`, `c2`, `c3`];

    function choseCell() {
    if(turnCount%2 == 0){
        document.getElementsByClassName(`boxes`).textContent = "X"
        turnCount++;
        document.getElementById(`turn`).textContent = `Turn - ${turnCount.length}`
    }else{
        document.getElementsByClassName(`boxes`).textContent = "O"
        turnCount++;
        document.getElementById(`turn`).textContent = `Turn - ${turnCount.length}`
    }
    console.log(turnCount)
}

