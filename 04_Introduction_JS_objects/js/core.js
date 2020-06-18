const guessField = document.querySelector('.guessField');
const guesses = document.querySelector('.newOne');
//Open browser console. Type guessField into console and the console shows you that the 
//variable contains an <input> element. You'll also notice that the console autocompletes
//the names of objects that exist inside the executin environment, including your variables!
//Now type the following:
//guessField.value = 'Hello';
//the value property represents the current value entered into the text field. You'll see that
//by entering this command, we've changed the text in the text field!
//Now type guesses:
//type it into console and pressing return. The console shows you that the variable contains a 
//<p> element.
//Try to entering following line:
//guesses.value
//The browser returns undefined, because paragraphs don't have the value property.
//To change the text inside a paragraph, you need the textContent property instead. Try this:
//guesses.textContent = ' Where is my paragraph? ';
//Now for some fun stuff. Try entering the below lines, one by one:
//guesses.style.backgroundColor = 'yellow';
//guesses.style.fontSize = '200%';
//guesses.style.padding = '10px';
//guesses.stype.boxShadow = '3px 3px 6px black';
//Every element on a page has a style property, which itself contains an object whose
//properties contain all the inline CSS styles applied to that element. This allow us to
//dynamically set new CSS styles on elements using JS.
