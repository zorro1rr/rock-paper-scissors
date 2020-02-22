//make variables for each button
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
//make variables for computer's buttons (going to turn background color effects via JS)
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');

//make array for possible computer choices
const computerChoices = ['rock', 'paper', 'scissors'];

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function(array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

//result handlers
const lossHandler = function() {
    setTimeout(function() {
        alert("Loss!");
        location.reload();
    }, 1000);
};

const winHandler = function() {
    setTimeout(function() {
        alert("Win!");
        location.reload();
    }, 1000);
};

const tieHandler = function() {
    setTimeout(function() {
        alert("Draw!");
        location.reload();
    }, 1000);
};

//function to check for actual button clicks
const clickHandler = function(event) {
    //make sure click was on a button, if not end the function
    let choice = event.target.closest('[name]')
    if (!choice) return;

    //get rid of directions
    const directions = document.querySelector('#directions');
    directions.innerHTML = '<p>Computer Choosing...</p><img src="images/arrowR.png" alt="arrow">';
    // need to get number 0-2 to make a computerChoices
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    //shuffle the computerChoice array
    shuffle(computerChoices);
    console.log('computer\'s choice = ' + computerChoices[computerChoice]);
    //get the rock, paper or scissor name from the button
    let userInput = choice.getAttribute('name');
    //check if the name matches the first element in the shuffled computerChoices array
    console.log('user\'s choice = ' + userInput);
    //plug the random number 0-2 into the array index for each choice and run else if statements to check them against possible userInputs.
    const decider = function() {
        //make variables to keep the user choice's background blue after selection
        const blueRock = '<button type="button" id="btn1" name="rock"><img src="images/rock L.png" alt="rock" style="background-color: blue;" style="color: blue;"></button>';
        const bluePaper = '<button type="button" id="btn2" name="paper"><img src="images/paper n.png" alt="paper" style="background-color: blue;" style="color: blue;"></button>';
        const blueScissor = '<button type="button" id="btn3" name="scissors"><img src="images/scissor OJ R.png" alt="scissors" style="background-color: blue;" style="color: blue;"></button>';

        if (computerChoices[computerChoice] === 'rock') {
            img1.innerHTML = '<button type="button" style="background-color: red;" style="color: red;"><img src="images/rock L.png"  alt="rock"></button>';
            setTimeout(function() {
                directions.innerHTML = 'The Computer Choices rock!'
                if (userInput === 'rock') {
                    btn1.outerHTML = blueRock;
                    tieHandler();
                } else if (userInput === 'scissors') {
                    btn3.outerHTML = blueScissor;
                    lossHandler();
                } else if (userInput === 'paper') {
                    winHandler();
                    btn2.outerHTML = bluePaper;
                }
            }, 1000);
        }
        if (computerChoices[computerChoice] === 'paper') {
            img2.innerHTML = '<button type="button"  style="background-color: red;" style="color: red;"><img src="images/paper n.png" alt="paper"></button>';
            setTimeout(function() {
                directions.innerHTML = 'The Computer Choices paper!'
                if (userInput === 'rock') {
                    btn1.outerHTML = blueRock;
                    lossHandler();
                } else if (userInput === 'scissors') {
                    btn3.outerHTML = blueScissor;
                    winHandler();
                } else if (userInput === 'paper') {
                    tieHandler();
                    btn2.outerHTML = bluePaper;
                }
            }, 1000);
        }
        if (computerChoices[computerChoice] === 'scissors') {
            img3.innerHTML = '<button type="button"  style="background-color: red;" style="color: red;"><img src="images/scissor OJ R.png" alt="scissors"></button>';
            setTimeout(function() {
                directions.innerHTML = 'The Computer Choices scissors!'
                if (userInput === 'rock') {
                    btn1.outerHTML = blueRock;
                    winHandler();
                } else if (userInput === 'scissors') {
                    btn3.outerHTML = blueScissor;
                    tieHandler();
                } else if (userInput === 'paper') {
                    lossHandler();
                    btn2.outerHTML = bluePaper;
                }
            }, 1000);
        }
    };
    decider();
};
document.addEventListener('click', clickHandler, false);
