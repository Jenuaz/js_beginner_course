# Events

Let's imagine that we have function called checkGuess() without which not receive any
parameters.
```javascript
function checkGuess(){
 console.log("Anything here!")
}
```
To force this function run for some cirsumstances we need to initialize the event. 
Events are things that happen in the browser - a button bing clicked, a page loading,
 a video playing etc. - in response to which we can run blocks of code. The constructs
that listen out for the event happening are called **event listeners**, and the blocks
of code that run in response to the event firing are called **event handlers**.
So if we have somewhere in html file class which called 'guessSubmit', event allow us
to add a listener for this button. So we will listen the button until it clicked.
After that we run checkGuess() function.

Add the following line below your checkGuess() function:
```javascript
guessSubmit.addEventListener('click', checkGuess);
```
# Loops

Loops are very inportant concept in programming, which allow you to keep running a piece
of code over and over again, until a certain condition is met. 
To start with, go to your browser developer tools JS console again, and enter the following:
```javascript
for (let i = 1; i < 21 ; i++) { console.log(i) }
```
What happened? The numbers is 1 to 20 where printed out in your console. This is because
of the loop. A **for** loop takes three input values (arguments):

1. **A starting value**:  in this case we are starting a count at 1, but this could be any
number you like. You could replace the letter **i** with any name you like too, but **i**
is used as a convention because it's short and easy to remember.
2. **An exit condiditon**: Here we have specified **i < 21** - the loop will keep going
until **i** is no longer less than 21. When **i** reaches 21, the loop will not longer run.
3. **An incrementor**: We have specified **i++**, which means "add 1 to i". The loop will
run once for every value of **i**, until **i** reaches a value of 21 (as discussed above).
In this case, we are simply printing the value of **i** out to the console on every iteration
using **console.log()**.


Let's imagine that we have html page:
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<sript type="text/javascript" src="js/core.js" defer></script>
	</head>
	<body>
		<div class="container">
			<p> Anything here </p>
			<p> Anything else </p>
			<p> Something else </p>
		</div>
	</body>
</html>
```
To get all \<p> elements from div element which class is container and this class is parent for
\<p> elements we will do the next manipulations:
```javascript
<!--						   class  elements
 						___________  _
						|	  | | |-->
const pElementsList = document.querySelectorAll('.container  p');
```
In other words we select all p elements nested in class container.
Good example [here](https://github.com/Jenuaz/js_beginner_course/tree/master/00_Practice_Material/ex03%5BSelectAllClassElements%5D")
