const humanScore = 0;
const computerScore = 0;
const humanScore_span = document.getElementById("hum_score");
const computerScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const Result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

rock_div.addEventListener("click", function()
{console.log("Hey! you clicked rock")})

paper_div.addEventListener("click", function(){
    console.log("Hey! you clicked Paper")
})

scissors_div.addEventListener("click", function(){
   console.log("Hey! you clicked Paper") 
})