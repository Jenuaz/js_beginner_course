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
## License
[MIT](https://choosealicense.com/licenses/mit/)

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


