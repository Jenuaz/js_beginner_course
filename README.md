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
