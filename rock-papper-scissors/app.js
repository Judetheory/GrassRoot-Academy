const humanScore = 0;
const computerScore = 0;
const humanScore_span = document.getElementById("hum_score");
const computerScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const Result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function GetComputerChoices() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}

function game(humanChoice) {
    const ComputerChoice = GetComputerChoices();
    switch (humanChoice + ComputerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("Win!!!");
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            console.log("Lose!!!");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("Draw!!");
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })
    paper_div.addEventListener('click', function() {
        game("paper");
    })
    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();