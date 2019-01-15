//The Javascript program is for the 'Rock-Paper-Scissor-Lizard-Spock game'

//Initializing variables and constant for future use

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

//This function is for making random computer choice. Thanks to java we have Math.random() function..

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'm'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

//This function mainly converts the userChoice of 'r', 'p', 's', 'l', 'm' to 'Rock', 'Paper', 'Scissor', 'Lizard', 'Spock' respectively.

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissor";
    if(letter === "l") return "Lizard";
    return "Spock";
}

//This function is for the winning,Losing and draw scenario where the user score will increment by one point if you win, the computer choice will increment by one point if you loose and no change in point in case of draw. I have also added a green glowing thingy for win, red glowing thingy for lose and a gray glowing thingy for draw.

//Win Function

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

//Lose Function

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

//Draw Function

function draw(userChoice, computerChoice) {
    const smallUserWord = "You".fontsize(3).sub();
    const smallCompWord = "Sheldon".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Try again...`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

//Game function for the necessary logic for winning, losing and drawing

//Scissor cuts paper, paper covers rock
//Rock crushes lizard, lizard poisons Spock
//Spock smashes scissor, scissor decapacitates lizard
//Lizard eats paper, paper disproves Spock
//Spock vaporizes stone
//and just as it always has
//Rock crushes stone

//Rock = 'r'
//Paper = 'p'
//Scissor = 's'
//Lizard = 'l'
//Spock = 'm'

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

//This is the main function where if the user click a choice, it will call the game function

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
    lizard_div.addEventListener('click', () => game("l"));
    spock_div.addEventListener('click', () => game("m"));
}

main();