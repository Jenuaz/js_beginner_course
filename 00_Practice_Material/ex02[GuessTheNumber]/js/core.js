let resetButton;
let guessCount = 1;
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

function resetGame(){
	/* guessCount we put to 1 - it's our turns. Empties all the text out of
	 * the information paragraphs. We select all paragraphs inside
	 * <div class="resultParas"></div>, then loop through each one, 
	 * setting their textContent to ''(and empty string).
	 */
	guessCount = 1;

	const resetParas = document.querySelectorAll('.resultParas p');
	for (let i = 0; i < resetParas.length; i++){
		resetParas[i].textContent = '';
	}
	/* Remove the button from the screen */
	resetButton.parentNode.removeChild(resetButton);
	/*Enables the form elements, and empties and focuses the text field,
	 * ready for new guess to be entered.
	 */
	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();
	/*Generates a new random number so that you are not just guessing
	 * the same number again!
	 */
	lastResult.style.backgroundColor = 'white';
	randomNumber = Math.floor(Math.random() * 100) + 1;
}

function setGameOver() {
	/* The first two lines disable the form text input and button
	 * by setting their disabled properties to true. This is necessary
	 * because if we didn't, the user could submit more guesses after 
	 * the game is over, which would mess things up.
	 */
	guessField.disabled = true;
	guessSubmit.disabled = true;
	/* The next three lines generate a new <button> element, set its text label
	 * to 'Start new game!', and add it to the bottom of our existing HTML
	 */
	resetButton = document.createElement('Button');
	resetButton.textContent = 'Start new game!';
	document.body.append(resetButton);
	/* The final line sets an event listener on our new button so that when 
	 * it is clicked, a function called resetGame() is run
	 */
	resetButton.addEventListener('click', resetGame);
}

function checkGuess() {
	/* declares a variable and sets its value to the current value entered
	 * inside the text field. We also run this value through the built-in
	 * Number() constructor, just to make sure the value is definitely a number.
	 */
	let userGuess = Number(guessField.value);
	if (guessCount === 1) {	// 
		guesses.textContent = 'Previous guesses: ';
	}
	/* Below appends userGuess value onto the end of the guesses paragraph plus
	 * a blank space so there will be a space between each guess shown
	 */
	guesses.textContent += userGuess + ' ';
	/* The first if(){ } checks whether the user's guesess is equal to the randomNumber
	 * set at the top of our JS. If it is, the player has guesserd correctly and the game
	 * in won, so we show the player a congratulations message with a nice green color,
	 * clear the contents of the Low/High guess information box, and run a function called
	 * setGameOver(), which we'll discuss later.
	 */
	if (userGuess === randomNumber) {
		lastResult.textContent = 'Congratulations! You got it right!';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';
		setGameOver();
	/* If we get out of chances to guess */
	} else if (guessCount === 10) {
		lastResult.textContent = '!!!GAME OVER !!!';
		setGameOver();
	/* This code block runs if nether of the two tests returns true. */
	} else {
		lastResult.textContent = 'Wrong!';
		lastResult.style.backgroundColor = 'red';
		if (userGuess < randomNumber) {
			lowOrHi.textContent = 'Last Guess was too low!';
		} else if (userGuess > randomNumber) {
			lowOrHi.textContent = 'Last Guess was too high!';
		}
	}
	guessCount++;	// shows that user uses up their trun (same as guessCount = guessCount + 1);
	guessField.value = ''; 
	guessField.focus();
}
/* Here we adding an event listener to the guessSubmit button. This is a method that takes two input 
 * values (called arguments) - the type of event we are listenting out for (in this case click) as a
 * string, and the code we want to run when the event occurs(in this case the checkGuess() function).
 * Note that we don't need to specify the parentheses when writing it inside addEventListener().
 */

guessSubmit.addEventListener('click', checkGuess);
