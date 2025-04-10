let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreDisplay = document.querySelector("#userScore");
let compScoreDisplay = document.querySelector("#compScore");
let resetBtn = document.querySelector(".resetBtn");

const genCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreDisplay.innerText = compScore; 
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("userChoice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");;
        playGame(userChoice);
    });
});

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31"
}

resetBtn.addEventListener("click", resetGame);