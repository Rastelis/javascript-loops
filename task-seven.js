document.write("<div><<<<<<<<<<<<<<<<<<<< task 7 >>>>>>>>>>>>>>>>>>>></div>")
loopCounter = 0;
gameWon = false;

let player = [
    {
        name: "Kazys",
        minPoints: 10,
        maxPoints: 20,
        roundWinner: false,
        lastGame: null,
        gamePoints: null
    },
    {
        name: "Petras",
        minPoints: 5,
        maxPoints: 25,
        roundWinner: false,
        lastGame: null,
        gamePoints: null
    }
];

while (true) {
    if (loopCounter === limit) {
        document.write("LIMIT REACHED!!!")
        break;
    }
    playGame();
    gameWon = printResult(gameWon);
    if (gameWon == true ) break;
    loopCounter++;
}


document.write("<div>****************************************</div>")

function printResult(gameWon) {
    document.write("Game results: ");
    let winIndexBuffer = null;
    for (let i = 0; i < player.length; i++) {
        document.write(player[i].name + " - " + player[i].gamePoints)
        if (i < player.length - 1) document.write(", ")
        else document.write(". ")
        if (winIndexBuffer == null) winIndexBuffer = i;
        else if (player[i].gamePoints > player[winIndexBuffer].gamePoints) winIndexBuffer = i;
    }
    if (player[winIndexBuffer].gamePoints >= 222) {
        document.write(player[winIndexBuffer].name + " Won the game!!");
        gameWon = true;
    }
    else document.write(player[winIndexBuffer].name + " Won the round");
    document.write("<br/>");
    
    return gameWon;
}

function playGame() {
    for (let i = 0; i < player.length; i++) {
        player[i].lastGame = rand(player[i].minPoints, player[i].maxPoints);
        if (player[i].gamePoints == null) player[i].gamePoints = player[i].lastGame;
        else player[i].gamePoints += player[i].lastGame;
    }
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}