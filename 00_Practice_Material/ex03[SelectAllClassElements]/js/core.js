let arrayForElements = [];
const allElementsFromClassContainer = document.querySelectorAll('.container p');


for(let i = 0 ; i < allElementsFromClassContainer.length ; i++){
	arrayForElements.push('*' + allElementsFromClassContainer[i].textContent);
}

if (arrayForElements.length > 0){
	alert('Length of class:' + allElementsFromClassContainer.length + '\n' + arrayForElements.join('\n'));
}
