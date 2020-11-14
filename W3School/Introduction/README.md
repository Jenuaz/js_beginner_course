# JS can change HTML Content

- getElementById() - it finds an HTML element by it's id attribute value.
- innerHTML - variable which allow to change element content. So you can
get or insert an information of child elements.

! JS accepts both double and single quotes.

Example:

1. Let's create an html page(Save as index.html):

<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<main>
			<div id="demo"></div>			
		</main>
		<footer>

		</footer>
	</body>
</html>

2.Run the page in browser then open a console F12 (Chrome browser). Here we
will select our element from our document:

document.getElementById('demo').innerHTML = 'Hello JS'; //way how to insert data
const content = element.innerHTML; //return current data of the element

!Notice: innerHTML replace the current value of the inner value.
!Recommendation:
Try to avoid usage of innerHTML in code to insert an simple txt content. Instead
use node.textContent. This not count sent content as HTML it will insert it as
unhandled txt.

Try this:
HTML point that tag <script> inserted by innerHTML must not run. But there is
exist method to run the script without <script> tag:
	let tmp = "<img src="x" onerror="alert('here is a point')">";
	document.getElementById('demo').innerHTML = tmp;

You can change not only the content also you can change the style of the element.
To do so let's see the next emaple. We have an full image with off/on lights.
Now we will change the visible area for it by using overflow css adjust by using
JS button. Look at our example of html (index.html) and try to figureout why
it's work as it is.
Notice that when we get an element by Id it return only one unique value our 
html object, but when we ask document.getElementsByClassName it return a list
of elements which have 
