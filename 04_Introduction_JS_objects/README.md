In JS most thins are objects, from core JSfeatures like strings and arrays to the browser APIs build on top of JS.
You can create even own objects to encapsulate related functions and variables into efficent packages and act as 
handy data containers. 
Object is a collection of related functionality stored in a single grouping. You can create your own object, but
that is quite advanced and we won't be covering it until much later in the course. For now, we'll just briefly 
discuss the build-in objects that your browser contains, which allow you to do lots of useful things.
Here is example:
We have html structure:
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<script type="text/javascript" src="js/core.js">
	</head>
	<body>
		<p class='guesses'></p>
		<input type="text" id="guessField" class="guessField">
	</body>
</html>
```

```javascript
const guessField = document.querySelector('.guessField');
```
To get reference, we used the **querySelector()** method of the document object. querySelector() takes one piece of
information - a CSS selector that selects the element you want a reference to. Because **guessField** now contains a
reference to an **<input>** element, it now has access to a number of properties (basically variables stored inside
objects, some of which can't have their values changed) and methods (basically functions stored inside objects). One
method available to input elements is focus().
Variables that don't contain references to form elements won't have **focus()** available to them. For example,
the guesses constant contains a reference to a **<p>** element. But it's not a form element.

Before start you should have some familiarity with HTML and CSS.

## Let's play with browser objects
Take a look at here at repository.
