let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#pick");
const userScorePara = document.querySelector("#y_scr");
const compScorePara = document.querySelector("#comp_scr");
const restart = document.querySelector("#restart")
const pickHide = document.querySelector("#pick")

const genCompChoice = () => {
    const options = ["stone","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = (userChoice) => {
    console.log("Game was a Draw");
    msg.innerText = `It's a Draw!! Both selected ${userChoice}`;
    msg.style.backgroundColor = "#708090";
    restart.classList.remove("hide");
    pickHide.classList.remove("pick_hide");

}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You won");
        msg.innerText = `You Won!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        restart.classList.remove("hide");
        pickHide.classList.remove("pick_hide");
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You Lost!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        restart.classList.remove("hide");
        pickHide.classList.remove("pick_hide");
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice === compChoice){
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }
        else if(userChoice === "scissor"){
            userWin = compChoice === "stone"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

restart.addEventListener("click", () =>{
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msg.innerText = `Pick your move`;
    msg.style.backgroundColor = "#3d405b";
    restart.classList.add("hide");
    pickHide.classList.add("pick_hide");
})