# JS definition
JavaScript is a scripting or programming language that allows you to implement complex features on web pages.
Every time a web page does more than just sit there and display static information for you to look at - dis -
playing timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. - 
you can bet that JS is probably involved. It is a third layer of the layer cake of standard web technologies,
two of which (HTML and CSS):

```html
<!--

		 ^
		(I) <-- JS
		| |		
	 _______| |______
	/		 \
	|\|/|\\|/|/|/||\\|<-- CSS
	|		 |
	|	WEB	 |
	|		 |<-- HTML	
	------------------

-->
```

**HTML** is markup language that we use to structure and give meaning to our web page content, for example 
defining paragraphs, headings, and data tables, or embedding images and videos in the page.
**CSS** is a language of style rules that we use to apply styiling to out HTML content, for exmaple setting 
background colors and fonts, and laying out our content in multiple columns.
**JS** is a scripting language that enables you to create dynamically updating content, control multimedia,
animate images, and pretty much everyting else.

The threee layers build on top pf one another. Let's take a simple text label as an example. We can mark it 
up using HTML to give it structure and purpose:
```html
<p> Player 1: Chris</p>
```

Then we can add some CSS into the mix to get it looking nice:
```css
p {
	font-family: 'helvetica neue', helvetica, sans-serif;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-align: center;
	border: 2px solid rgba(0, 0, 200, 0.6);
	background: rgba(0, 0, 200, 0.3);
	color: rgba(0, 0, 200, 0.6);
	box-shadow: 1px 1px 2px rgba(0, 0, 200, 0.4);
	border-radius: 10px;
	padding: 3px 10px;
	display: inline-block;
	cursor: pointer;
}
```
JS is a lightweight **interpreted** programming language. The web browser receives the JS code in its original
text form and runs the script from that. From a technical standpoint, most modern JS interpreters actually use
a technique called **just-in-time-compiling** to improve performance; the JS source code gets compiled into a 
faster, binary format while the script is begin used, so that it can be run as quickly as possible. However,
JS is still considered an interpreted language, sine the compilation os handled at run time, rather than ahead
of time.


# Interpreted versus compiled code

***Interpreted languages*** - the code is run from top to bottom and the result of running the code is immediately
returned. You don't have to transform he code into a different form before the browser runs it. the code is 
received in its programmer-friendly text form and processed directly from that.
***Compiled languages*** - the code is transformed(compiled) into another form before they are tun by the computer.
The program is executed from a binary format, which was generated from the original program source code.


# Server-side versus client-side code

**Client side** code is code that is run on the user's computer - when a web page is viewed, the pages's client-side
code is downloaded, then run and displayed by the browser.
**Server side** code on the other hand is run on the server, then its results are downloaded and displayed in the 
browser. Popular server-side web languages include PHP, Python, Ruby, ASP.NET and... JS! JS can also be used as
a server-side language, for example in the popular Node.js environment.

# Dynamic versus static code

The word **dynamic** is used to describe both client-side JS, and server-side languages - it refers to the ability
to update the display of a web page/app to show different things in different circumstances, generating new content
as required. Server-side code dynamically generates new content on the server, e.g. pulling data from database, 
whereas client-side JS dynamically generates new content inside the browser on the client, e.g. creting a new HTML 
table, filling it with data requested from the server, then displaying the table in a web page shown to the user.
The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side)
usually work together.
a web page with no dynamically updating content is referred to as **static** - it just shows the same content all the
time.

# How do you add JS to your page?

JS applied to HTML in a similar manner to CSS. JS needs ***<script>*** element.
1. Create a html web page:
```html
	<!DOCTYPE html>
	<html lang="en-US">
		<head>
			<meta charset="utf-8">
			<title>Apply JS example</title>
		</head>
		<body>
			<button>Click me</button>
		</body>
	</html>
```
When you will open web-page in browser for you will be available only clickable button. But nothing happen if you 
click that button. To change it you need to connect a script to web page. To do so you need change our html and 
insert between ***<head>*** tag ***<script>***.

***<script>*** tag allow to add external JS which is in external file. For example:
```html
<script src="script.js" defer></script>
```

# Script loading strategies

There are a number of issues involved which getting scripts to load at the right time. A commin problem is that all
HTML on a page is loaded in the order in which it appears. If you are using JS to manipulate elements on the page 
(or more accurately, the Document Object Model), your code won't work if the JS is loaded and parsed before the
HTML you are trying to do something to.
Here we have magic construction to help:
```javascript
document.addEventListener("DOMContentLoaded", function() {
...
});
```
This is an event listener, which listens for the browser's "DOMContentLoaded" event, which signifies that the
HTML body is completely loaded and parsed. The JS inside this block will not run until after that event is 
fired, therefore the error is avoided (you'll learn about events later).

Also here other helpful attribute ***defer*** which tells the browser to continue downloading the HTML content
once the ***<script>*** tag element has been reached.
```javascript
<script src="our.js" defer></script>
```
In this case both the script and the HTML will load simultaneously and the code will work.

# async and defer
***async*** and ***defer*** - two modern features we can use to bypass the problem of the blocking script.
***async*** will download the script without blocking rendering the page and will execute it as soon as the
script finishes donwloading. You get no guarantee that scripts will run in any specific order, only that they will 
not stop the rest of the page from displaying. It is best to use **async** when the scripts in the page run inde -
pendently from each other and depend no on other script on the page.
Example:
```javascript
<script async src='js/vendor/jquery.js'></script>
<script async src='js/script2.js'></script>
<script async src='js/script3.js'></script>
```
You can't rely on the oreder the sripts will load in. **jqeury.js** may load before or after **script2.js** and
**script3.js** and if this is the case, any function in those scripts depending on jquery will produce an error
because jquery will not be defined at the time the script runs.
**async** should be used when you have a bunch of background scripts to load in, and you just want to get them in 
place asap. For example, maybe you have some game data files to load, which will be needed when the game actually 
begins, but for now you just want to get on with showing the game intro, titles, and lobby, without them being blocked
by script loading.

***defer*** will run scripts in the order they appear in the page and execute them as soon as the script and content are downloaded.
All scripts with the defer will load in the order they appear on the page. So we can be sure that **jquery.js** will load before 
**script2.js** e.t.c. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM
being in place.

Summary:
-**async** and **defe** both instruct the browser to download the script(s) in a separate thread, while the rest of the page
(the DOM, etc.) is downloading, so the page loading is not blocked by the scripts.
-If your scripts should be run immediately and they don't have any dependencies, then use **async**.
-If your scripts need to wait for parsing and depend on the other scripts and/or the DOM being in place, load them
using **defer** and put their corresponding **<script>** elements in the order you want the browser to execute them.
