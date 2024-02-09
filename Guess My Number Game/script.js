'use strict';

// Secret Number

let number = Math.trunc(Math.random() * 20) + 1;
let highscore = Number(document.querySelector('.highscore').textContent);
let score = 20;

let displayMessage = function (message) { 
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // No Number
    if (!guess) {
        displayMessage(" No Number!");
    }
    //When player wins
    else if (guess === number) {
         displayMessage(" Correct Number!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        
        if (score > highscore) { 
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('.guess').disabled = true;
        
    }
    //When guess is wrong
    else if (guess !== number) { 
        if (score > 0) {
            displayMessage(guess > number ? "Too High!" : "Too Low!");
                
            score--;
            document.querySelector('.score').textContent = score;
        } else { 
             displayMessage("You Lost the Game!"); 
        }
    }
});

// Reset the Game

document.querySelector('.again').addEventListener('click', function () { 
    
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = "";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').disabled = false;
})



