const calc = () => {
  let persons = document.querySelectorAll('.counter-block-input')[0],
			restDays = document.querySelectorAll('.counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('input', function() {
		if(this.value[0] == 0) {
			this.value = this.value.replace(/0/, '');
		}
		this.value = this.value.replace(/[^0-9]/, '');
		personsSum = +this.value;
		total = (daysSum + personsSum) * 4000;

		if(persons.value == '' || restDays.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
		}
	});

	restDays.addEventListener('input', function() {
		if(this.value[0] == 0) {
			this.value = this.value.replace(/0/, '');
		}
		this.value = this.value.replace(/[^0-9]/, '');
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;

		if(persons.value == '' || restDays.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
		}
	});

	place.addEventListener('change', function() {
		if(persons.value == '' || restDays.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});
}

module.exports = calc;