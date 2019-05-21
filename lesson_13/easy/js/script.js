window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	const log = (msg) => {console.log(msg);};
	// Табы
	let tab = document.querySelectorAll('.info-header-tab'),
		tabBlock = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	const hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	const showTabContent = (b) => {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

	tabBlock.addEventListener('click', event => {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Таймер

	let deadline = '2019-07-01';

	const getTimeRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor((t / 1000) % 60),
				minutes = Math.floor((t / 1000 / 60) % 60),
				hours = Math.floor((t / (1000 * 60 * 60)));
				if (seconds < 10) {
					seconds = "0" + seconds;
				}
				if (minutes < 10) {
					minutes = "0" + minutes;
				}
				if (hours < 10) {
					hours = "0" + hours;
				}
				return {
					'total' : t,
					'seconds' : seconds,
					'minutes' : minutes,
					'hours' : hours
				};
	}

	const setClock = (id, endtime) => {
		

		let timer = document.getElementById(id),
				seconds = timer.querySelector('.seconds'),
				minutes = timer.querySelector('.minutes'),
				hours = timer.querySelector('.hours');

		const updateClock = () => {
			let t = getTimeRemaining(endtime),
			timeInterval = setInterval(updateClock, 1000);
			seconds.textContent = t.seconds;
			minutes.textContent = t.minutes;
			hours.textContent = t.hours;


			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
			if (Date.parse(endtime) < Date.parse(new Date())) {
				seconds.textContent = '00';
				minutes.textContent = '00';
				hours.textContent = '00';
			}
		};
		updateClock();
	};
	setClock('timer', deadline);


	// Скролл

	let menu = document.querySelector('ul'),
			isActiveBtn;


	menu.addEventListener('click', event => { 
		event.preventDefault();
		if (event.target && event.target.tagName == 'A') {
			document.querySelector(event.target.getAttribute('href')).scrollIntoView({block: "start", behavior: "smooth"});
		}
	});

	// Модальное окно

	let overlay = document.querySelector('.overlay');

			
			const bindModal = (overlayStatus, overflowStatus, classListMethod, el) => {
				if(classListMethod == 'add') isActiveBtn = el;
				if(!el) el = isActiveBtn;
				overlay.style.display = overlayStatus;
				el.classList[classListMethod]('more-splash');
				document.body.style.overflow = overflowStatus;
			};
		
		
			document.body.addEventListener('click', event => {
				let target = event.target;
		
				if(target.classList.contains('more') || target.classList.contains('description-btn')) bindModal('block', 'hidden', 'add', target);
				if(target.classList.contains('popup-close')) bindModal('none', '', 'remove');
			});

	// Отправка формы
	document.body.addEventListener('input', (event) => {
		let target = event.target;
		if (target.getAttribute('type') === 'tel') target.value = target.value.replace(/[^0-9+]/, '');
	});

	let message = {
		loading: "Загрузка...",
		success: "Спасибо! Скоро мы с вами свяжемся!",
		failure: "Что-то пошло не так"
	};

	let statusMessage = document.createElement('div');

	statusMessage.classList.add('status');

	let formSend = (formName) => {
		formName.appendChild(statusMessage);
		let input = formName.querySelectorAll('input');
		let formData = new FormData(formName);

		function postData(data) {
			return new Promise(function(resolve, reject) {
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

				request.onreadystatechange = function () {
					if (request.readyState < 4) {
						resolve();
					} else if(request.readyState === 4) {
						if(request.status == 200 && request.status < 300) {
							resolve();
						}
						else {
							reject();
						}
					} 
				};
				let obj = {};
				formData.forEach((value, key) => {
				obj[key] = value;
				});
				let json = JSON.stringify(obj);

				request.send(json);
			});
		}

		

		function clearInput() {
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		}

		postData(formData)
			.then(() => statusMessage.innerHTML = message.loading)
			.then(() => statusMessage.innerHTML = message.success)
			.catch(() => statusMessage.innerHTML = message.failure)
			.then(clearInput);
	};

	document.body.addEventListener('submit', (event) => {
		event.preventDefault();
		formSend(event.target);
	});

	// Слайдер

	let slideIndex = 1,
			slides = document.querySelectorAll('.slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.querySelectorAll('.dot');

	showSlides();

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', () => {
		plusSlides(-1);
	});

	next.addEventListener('click', () => {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', event => {
		let target = event.target;

		for (let i =0; i < dots.length + 1; i++) {
			if (target.classList.contains('dot') && target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

	// Калькулятор 

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

});
