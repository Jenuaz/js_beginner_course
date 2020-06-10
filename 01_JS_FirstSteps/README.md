# JS Functional programming

Basics to have understanding how to work with JS. Some insights:
- What variables exist?
- Basics rules.


## Variables:

### First way:	
```javascript
let variableName = "value";
```
**let** - allow to change what the variable point to: variableName = "changed".

### Second way:
```javascript
const variableName = "value";
```
**const** - prohibits us to change pointer so : variableName = "changed"; <--- give us Error.

### Third way:	
```javascript
var variableName = "Something here";
```
**var** - is oldes way to declare variable;

## Naming rules:

### Functions, property or variable starts with:
- letter;
- $ <-- sign;
- _ <-- underscore; 
\[ after the first character you are free to use (numbers, letters, dollar signs or underscores)\]
# Comments:
```javascript
// One line comment;
let variable = "any"; //One line comment
/* 
 multy comment lines
 can be devided too.
*/
```

# Statements:
In JS code ends with an ';' based on the ECMAScript rules. However, adding ';' <- IS'T REQUIRED.
In some cases ommiting a semicolon can cause some problems - Automatic Semicolon Insertion (ASI) which means
that semicolon will be automatically added where JS think it's should be. So better to put -> ';' rather than do not.
!Use tool 'Prettier' - which put ; where it necessary.

# Output:
```javascript
console.* methods output information to a console. 
```
## Example:
```javascript
console.log("This is log message"); //this will print out a message 
!More commonly it is used to show the current value of a variable when debugging.
console.warn("Sending warring to a console");
console.error("Sending error message to the console");
console.trace(); //allow to view currrent stack trace.
```
When creating web application, the use of ```console.*``` critical for quickly debugging problems.
# Console statements:
```
Google Chrome - Ctrl + Shift + i
Firefox - Crtl + Shift + k
```
# So what can it really do?

The core client-side JS language consists of some common programming features that allow you to do thing like:
- Store useful values inside variables. 
```javascript
let name = prompt('any value here');
```
- Operations on pieces of text (known as "strings" in programming). For example:
```javascript
function addName(tmp){
	let name = 'Player name: ' + tmp;
	return name; 				//the result of it will be new value of variable name 
						//"Player name: {stored value of tmp variable}"
}
```
- Running code in response to certain events occurring on a web page. We use 'click' event in our
example [here](https://github.com/Jenuaz/js_beginner_course/tree/master/01_JS_FirstSteps/ex00) to detect when the button is clicked and then run code that updates the text.

What is even more exciting however is the functionality build on top of the client-side JS language. ***APIs***
(Application Programming Interfaces) provide you with extra tools to use in your JS code. APIs are ready-made sets
of code building blocks that allow a developer to implement programms that would otherwise be hard or impossible
to implement. They do the same thing for programming that ready-made furniture kits do fore home building - it is much
easier to take ready-cut panels and screw them together to make a bookshelf tham it is to work out the design yourself,
go and find the correct wood, cut all the panels to the right size and shape, find the correct-sized screws, and then 
put them together to make a bookshelf.
APIs generally fall in two categories:
- Browser APIs (Core JS language).
- 3rd party APIs.

***Browswe APIs*** are build into your web browser, and are able to expose data from the surrounding computer environment,
or do useful complex things. For example:
- The ***DOM (Document Object Model) API*** allows you to manipulate HTML and CSS, creating, removing and changing HTML,
dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content
displayed that's DOM in action.
- ***Geolocation API*** retrives geolocation information. This is how Google Maps is able to find your location and plot
it on a map.
- ***Canvas*** and ***WebGL*** APIs allow you to create animated 2D and 3D graphics. People are doing some amazing things useing 
these web technologies - see Chrome Experiments and webglsamples.
- Audio and Video APIs like HTMLMediaElement and WebRTC allow you to do really interesting things with mutimedia, such as play 
audio and video right in a web page, or grab video from your web camera and display it on someone else's computer.

***Third party APIs*** are not built into the browser by default, and you generally have to grab their code and information from
somewhere on the Web example:
- Twitter API allows you to do things like displaying your lates tweets on your website.
- Google Maps API and OpenStreetMap API allows you to embed custom maps into you website.

# What JS doing on your page?

A very common use of JS is to dynamically modify HTML and CSS to update a user interface, via Document Object Model API.
**NOTE**: code in your web documents is generally loaded and executed in the order it appears on the page. If the JS loads
and tries to run before the HTML and CSS it is affecting has been loaded, errors can occur.

## Browser security

Each browser tab has its own separate bucket(execution environments) for running code - this mean that in most cases the code
in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab - or on another 
web site. This is a good security measure - if this were not the case, then pirates could start writing code to steal information
from other websites, and other such bad things.
***Note***:Possibility of to sand data between different websites/tabs in a safe manner exist anyway for beginner is not a point.

## JavaScript running order

When the browser encounters a block of JS, it generally rins it in order, from top to bottom. This means that you need to be 
careful what order you put things in. For example:

```javascript
const para = docunt.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
	let name = prompt('Enter a new name');
	para.textContent = 'Player 1: ' + name;
} 
```
Here we selectiong a text paragraph (line 1), then attaching an event listener to it (line 3) so that when the paragraph is 
clicked, the UpdateNmae() code block (lines 5-8) is run. The UpdateName(code block - this type of reusable code blocks are called
 "functions") asks the user for a new name, and then inserts that name into paragraph to update the display.
If you swapped the order of the first two lines of code, it would no longer work - instead, you'd get an error returned in the 
browser developer console - **TypeError: para is undefined**. This means that the para object does not exist yet, so we can't add 
an event listener to it.
 

## License
[MIT](https://choosealicense.com/licenses/mit/)


