// 

const my_button = document.getElementById('my_button')

my_button.onclick = function() {
	event.preventDefault(); 
 
	const name = document.getElementById('name');

	const email = document.getElementById('email');

	let classNames = name.	classList;

	console.log(classNames);

	if (name.value == "") {
		classNames.add("red");
		console.log(name.classList);
	} 
	else {
		classNames.remove("red");
		console.log(name.classList);	
	} 


}

  