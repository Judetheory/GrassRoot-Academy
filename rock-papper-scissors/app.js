let humanScore = 0;
let computerScore = 0;
const humanScore_span = document.getElementById("hum_score");
const computerScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function GetComputerChoices() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}

function win(human, computer) {
    humanScore++;
    humanScore_span.innerHTML = humanScore;
    result_p.innerHTML = `${human} beats ${computer} 👏👏👏 You win!!!`
}

function lose(computer, human) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computer} beats ${human} 🤦🤦🤦You lost!!!`


}

function draw(human, computer) {
    result_p.innerHTML = `${human} equals ${computer}. A draw!!! Think of Changing your strategy`

}
function game(humanChoice) {
    const ComputerChoice = GetComputerChoices();
    switch (humanChoice + ComputerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(humanChoice, ComputerChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(ComputerChoice, humanChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(ComputerChoice, humanChoice);
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