let para = null;

function updateName(){
	let name = prompt('Enter a new name: ');
	para.textContent = 'Player1: ' + name;
}


//window.addEventListener - allow us to wait until the page will loaded in your browser and only then execute
//all js actions.
window.addEventListener('load', 
	function () {
		para = document.querySelector('p');
		console.log(para);
		para.addEventListener('click', updateName);
	}
);


