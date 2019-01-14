let userScore = 0; 
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("m");

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'm'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissor";
    if(letter === "l") return "Lizard";
    return "Spock";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "You".fontsize(3).sub();
    const smallCompWord = "Sheldon".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. Darn it!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "You".fontsize(3).sub();
    const smallCompWord = "Sheldon".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. Buzzinga!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "You".fontsize(3).sub();
    const smallCompWord = "Sheldon".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Try again...`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "sp":
        case "pr":
        case "rl":
        case "lm":
        case "ms":
        case "sl":
        case "lp":
        case "pm":
        case "mr":
        case "rs":
            win(userChoice, computerChoice);
            break;
        case "ml":
        case "lr":
        case "rp":
        case "ps":
        case "sm":
        case "mp":
        case "pl":
        case "ls":
        case "sr":
        case "rm":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "pp":
        case "rr":
        case "ll":
        case "mm":
            draw(userChoice, computerChoice);
            break;
        
    }    
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
    lizard_div.addEventListener('click', () => game("l"));
    spock_div.addEventListener('click', () => game("m"));
}

main();