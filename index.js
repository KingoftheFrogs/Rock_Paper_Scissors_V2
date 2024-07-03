function playGame() {
    var userChoice = document.getElementById("userChoice").value.toLowerCase();
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    var resultMessage = "";

    switch (computerChoice) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    if (userChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = "You win!";
    } else {
        resultMessage = "You lose!";
    }

    document.getElementById("result").value = resultMessage;
}