//make variables for each button
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
//make variables for computer's buttons (going to turn background color effects via JS)
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
//make variable for directions text
const directions = document.querySelector('#directions');
//grab container3 to reset after result
const container3 = document.querySelector('.container3');
//make array for possible computer choices
const computerChoices = ['rock', 'paper', 'scissors'];

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

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

//grab innerHTML of container3 for refresh
const refresh = container3.innerHTML;

const lossHandler = function () {
  setTimeout(function(){
    directions.innerHTML = '<p>You loss</p>' + '<br>' + '<button playAgain>Play Again</button>';
    //refresh the background color on old selection
    container3.innerHTML = refresh;
  }, 1000);
};

const winHandler = function () {
  setTimeout(function(){
    directions.innerHTML = '<p>You Win!</p>' + '<br>' + '<button playAgain>Play Again</button>';
    //refresh the background color on old selection
    container3.innerHTML = refresh;
  }, 1000);
};

const tieHandler = function (){
  setTimeout(function(){
    directions.innerHTML = '<p>Draw!</p>' + '<br>' + '<button playAgain>Play Again</button>';
    //refresh the background color on old selection
    container3.innerHTML = refresh;
  }, 1000);
};

//make function to reload page when play again button is pressed
const reload = function () {
  let playAgain = (event.target.closest('[playAgain]'));
  if(!playAgain) return;
  location.reload();
};

//function to deal with userinputted button choice
const clickHandler = function (event) {
  //make sure click was on a button, if not end the function
  let choice = (event.target.closest('[name]'));
    if(!choice) return;

  //get rid of directions
  directions.innerHTML = '<p>Computer Choosing...</p><img src="arrowR.png" alt="arrow">';

  // need to get number 0-2 to make a computerChoices
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);
  //shuffle the computerChoice array
  shuffle(computerChoices);
  console.log('computer\'s choice = ' +  computerChoices[computerChoice]);
  //get the rock, paper or scissor name from the button
  let userInput = choice.getAttribute('name');
  //check if the name matches the first element in the shuffled computerChoices array
  console.log('user\'s choice = ' + userInput);
  //plug the random number 0-2 into the array index for each choice and run else if statements to check them against possible userInputs.

  if (computerChoices[computerChoice] === 'rock') {
    img1.innerHTML = '<button type="button" style="background-color: red;" style="color: red;"><img src="rock L.png"  alt="rock"></button>';
    if(userInput === 'rock') {
      tieHandler();
    } else if (userInput === 'scissors') {
      lossHandler();
    } else if (userInput === 'paper') {
      winHandler();
    }

  } if (computerChoices[computerChoice] === 'paper') {
    img2.innerHTML = '<button type="button"  style="background-color: red;" style="color: red;"><img src="paper n.png" alt="paper"></button>';
    if(userInput === 'rock') {
      lossHandler();
    } else if (userInput === 'scissors') {
      winHandler();
    } else if (userInput === 'paper') {
      tieHandler();
    }

  } if (computerChoices[computerChoice] === 'scissors') {
    img3.innerHTML = '<button type="button"  style="background-color: red;" style="color: red;"><img src="scissor OJ R.png" alt="scissors"></button>';
    if(userInput === 'rock') {
      console.log('win');
      winHandler();
    } else if (userInput === 'scissors') {
      console.log('tie');
      tieHandler();
    } else if (userInput === 'paper') {
      lossHandler();
      console.log('loss');

    }
  }
};


document.addEventListener('click', clickHandler, false);
document.addEventListener('click', reload, false);
