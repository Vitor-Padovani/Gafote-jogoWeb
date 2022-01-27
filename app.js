let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const fire_div = document.getElementById("f");
const snow_div = document.getElementById("s");
const water_div = document.getElementById("w");
const rock_div = document.getElementById("r");
const leaf_div = document.getElementById("l");

function getComputerChoice() {
    const choices = ['f', 's', 'w', 'l', 'r'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber]
}

function convertToWord(letter) {
    switch (letter) {
        case "f":
            return"Fogo";
        case "s":
            return"Neve";
        case "w":
            return"Água";
        case "r":
            return"Terra";
        case "l":
            return"Folha";
    }
}

function win(userChoice, ComputerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} derrota ${convertToWord(ComputerChoice)}${smallCompWord}. Você venceu!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {
        userChoice_div.classList.remove('green-glow')
    }, 300);
}

function lose(userChoice, ComputerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} perde para ${convertToWord(ComputerChoice)}${smallCompWord}. Triste...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {
        userChoice_div.classList.remove('red-glow')
    }, 300);
}

function draw(userChoice, ComputerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} empata com ${convertToWord(ComputerChoice)}${smallCompWord}.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {
        userChoice_div.classList.remove('gray-glow')
    }, 300);
}

function game(userChoice) {
    const ComputerChoice = getComputerChoice();
    console.log("computer choice: " + ComputerChoice);
    console.log("user choice: " + userChoice);

    switch (userChoice + ComputerChoice) {
        case "fl":
        case "fs":
        case "sw":
        case "sp":
        case "wf":
        case "wr":
        case "rs":
        case "rf":
        case "lw":
        case "lr":
            win(userChoice, ComputerChoice);
            break;
        case "lf":
        case "sf":
        case "ws":
        case "ps":
        case "fw":
        case "rw":
        case "sr":
        case "fr":
        case "wl":
        case "rl":
            lose(userChoice, ComputerChoice);
            break;
        case "ff":
        case "ss":
        case "ww":
        case "rr":
        case "ll":
            draw(userChoice, ComputerChoice);
            break;
    }
}

function main() {
        
    fire_div.addEventListener('click', function() {
        game("f");
    })

    water_div.addEventListener('click', function() {
        game("w");
    })

    snow_div.addEventListener('click', function() {
        game("s");
    })

    leaf_div.addEventListener('click', function() {
        game("l");
    })

    rock_div.addEventListener('click', function() {
        game("r");
    })

}

main();
