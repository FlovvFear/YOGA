const log = (msg) => {console.log(msg);};
window.addEventListener('DOMContentLoaded', function() {


	let input = document.querySelector('#age');
	// log(input.value);

	function showUser(surname, name) {
		this.value = input.value;
		alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}

	showUser('Ivan', 'Ivanov');
});
