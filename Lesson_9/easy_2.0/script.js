const log = (msg) => {console.log(msg);};
window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let input = document.querySelector('#age');

	function showUser(surname, name) {
		alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
	}

	showUser();
});
