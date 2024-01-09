var playerOneScore = 0;
var playerTwoScore = 0;

function getRandomNumber(){
   var x = Math.random();
    x *= 6;
    x = Math.floor(x) + 1;

    return x;
}

function changeDice(dice, x){
    if (document.getElementById(dice))
    {
        document.getElementById(dice).setAttribute("src", "images/dice" + x.toString() + ".png");
    }
}

function checkWinner(x,y){

    if(x > y){
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }
    else if(x < y){
        document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

function toss(){

    diceOne = getRandomNumber();
    changeDice("dice1", diceOne);
    diceTwo = getRandomNumber();
    changeDice("dice2", diceTwo);
    checkWinner(diceOne, diceTwo);

}

toss();