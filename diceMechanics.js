var playerOneScore = 0;
var playerTwoScore = 0;

function getRandomNumber(){
   var x = Math.random();
    x *= 6;
    x = Math.floor(x) + 1;

    return x;
}

function changeDice(dice, x){

      var diceImage = document.getElementById(dice);

    if (diceImage) {
        switch (x) {
            case 1:
                diceImage.src = "images/dice1.png";
                break;
            case 2:
                diceImage.src = "images/dice2.png";
                break;
            case 3:
                diceImage.src = "images/dice3.png";
                break;
            case 4:
                diceImage.src = "images/dice4.png";
                break;
            case 5:
                diceImage.src = "images/dice5.png";
                break;
            case 6:
                diceImage.src = "images/dice6.png";
                break;
            default:
                console.error("Invalid dice value: " + x);
                break;
        }
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