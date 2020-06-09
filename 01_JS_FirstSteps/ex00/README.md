The threee layers build on top pf one another. Let's take a simple text label as an example. We can mark it 
up using HTML to give it structure and purpose:
```html
<!DOCTYPE html>
<html>
	<head>
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
		<meta content="utf-8" http-equiv="encoding">
		<link rel="stylesheet" href="style.css"> 
		<script type="text/javascript" href="logic.js"></script>
	</head>
	<body>
		<p> Player 1: Chris</p>
	</body>
</html>
```

Then we can add some CSS into the mix to get it looking nice file: style.css:
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

And then we add our JS file:logic.js :

```javascript
let para = null;

function updateName() {
	let name = 'Select name: ';	
	para.textContent = 'Player: ' + name;
}

window.addEventListener() { 'load' ,
	function () {
		para = document.querySelector('p');
		para.addEventListener('click', updateName);
	}
});
```
