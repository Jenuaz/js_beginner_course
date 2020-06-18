# JS Functional programming

Basics to have understanding how to work with JS. Some insights:
- What variables exist?
- Basics rules.

# What variable is?
A variable is container for a value, like a number we might use in a sum, or a string that we might
use part of sentence. But one special thing about variables is that their contained values can
change.
Example:

```html
<button> Press me </button>
```
```javascript
const button = document.querySelector('button');

button.onclick = function() {
	let name = prompt("What is your name");
	alert('Hello' + name + ', nice to see you!');
}
```

In this example pressing the button runs a couple of lines of code. The first line pops a box up
on the screen that asks the reader to enter their name, and them stores the value in a variable.
The second line displays a welcome message that includes their name, taken from the variable value.

Variables can also contain complex data and even entire functions to do amazing things.

If you declare the variable it exist even if there is no value in it. But if you trying to call
variable which is not exist at all it will cause the error. For better imagination image variable 
as box which can contain different stuff.


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
Constant are used to store values that are immutable or can't be changed and are created with 
the keyword **const**. We can use constants to store references to parts of our user interface.
The text inside some of them might change, but the HTML elements referenced stay the same.

### Third way:	
```javascript
var variableName = "Something here";
```
**var** - is oldes way to declare variable;

### Difference between var and let
Back when JS was first created, there was only **var**. This works basically fine in most cases,
but it has some issues in the way it works - it's design can sometimes be confusing or downright
annoying. So, **let** was created in modern versions of JS, a new keyword for creating variables
that works somewhat differently to var.
For start, if you write a multiline JS program that declares and initialize a variable, you can
actually declare a variable with var after you initialize it and it will still work. For example:
```javascript
myName = 'Chris';

function logName(){
	console.log(myName);
}

logName();

var myName;
```
This works because of hoisting - read var hoisting for more detail on the subject.
Hoising no longer works with **let**. If we change var to let in the above example,
it would fail with an error. This is a good thing - declaring a variable after you
initialize it results in confusing, harder to understand code.

Secondly, when you use **var**, you can declare the same variable as many times as you
like, but with let you can't. The following would work:
```javascript
var myName = 'Chris';
var myName = 'Bob';
```
But the following would throw an error on the second line:
```javascript
let myName = 'Chris';
let myName = 'Bob';
```
You have to do this insted:
```javascript
let myName = 'Chris';
myName = 'Bob';
```
That's why recommended to use **let** as much as possible in your code, rather than **var**.
There is no reason to use **var**, unless you need to support old versions of Internet Explorer
with your code (it doesn't support **let** until verion 11).

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

# Operators
JS operators allow us to perform tests, do math, join strings together, and other such things. If you haven't
already done so, save your code, refresh the page in your browser, and open the developer tools JS console in
browser using hot keys mentioned above in your browser. Then we can try typing the examples shown below -
type in each one from "Example" columns as shown, pressing Return/Enter after eah one, and see what results they
return.

Arithmetic examples:
| Operator| Name |Example |
|---|---|---|
| + |Addition | 1 + 10|
| - |Substraction | 20 - 10 |
| * |Multiplication | 3 * 7 |
| / |Division | 10 / 5 |

You can also use the **+** operator to join text strings together (in programming, this is called **concatenation**).
Try entering the following lines, one at a time:

```javascript
let name = 'Bingo';
name;
let hello = ' says hello!';
let greeting = name + hello;
greeting;			// This last one variable will contain the string "Bingo says hello!"
```

There are also some shortcut operators available, called **augmented assignment operators**. For example, if you
want to simply add a new text string to an existing one and return the result, you could do this:
```javascript
name += ' says hello!';
```
This is equivalent to:
```javascript
name = name + ' says hello!'; // here first name assign operational result of name content in the past and ' says hello!' string.
			      // new value of variable name is 'Bingo says hello!'
```
When we are running true/false test we use **comparison** operators:
|Operator | Name | Example |
| --- | --- | --- |
| ===|Strict equality (is it exactly the same?) | 5 === 2 + 4 // false </br> 'Chris' === 'Bob' //false </br> 5 === 2 + 3 //true </br> 2 === '2' // false; number versus string|
|!==|Non-equal (is it not the same?)| 5 !== 2 + 4 // true </br> 'Chris' !== 'Bob' //true </br> 5 !== 2 + 3 //false </br> 2 !== '2' // true; num. vs str|
| < | Less than | 6 < 10 // true </br> 20 < 10 // true |
| > | Grater than | 6 > 10 // false </br> 10 > 20 //true |


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


