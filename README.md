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
