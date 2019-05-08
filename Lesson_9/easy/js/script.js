window.addEventListener('DOMContentLoaded', function() {
	'use strict';
	const log = (msg) => {console.log(msg);};
	// Табы
	let tab = document.querySelectorAll('.info-header-tab'),
		tabBlock = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	tabBlock.addEventListener('click', function(event) {
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

	function getTimeRemaining(endtime) {
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

	function setClock(id, endtime) {
		

		let timer = document.getElementById(id),
				seconds = timer.querySelector('.seconds'),
				minutes = timer.querySelector('.minutes'),
				hours = timer.querySelector('.hours'),
				timeInterval = setInterval(updateClock, 1000);



		function updateClock() {
			let t = getTimeRemaining(endtime);
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
		}
	}
	setClock('timer', deadline);


	// Скролл

	let menu = document.querySelector('ul');

	console.log(menu);

	menu.addEventListener('click', function(event) { 
		event.preventDefault();
		if (event.target && event.target.tagName == 'A') {
			document.querySelector(event.target.getAttribute('href')).scrollIntoView({block: "start", behavior: "smooth"});
		}
	});

	// Модальное окно

	let more = document.querySelector('.more'),
			infoBlock = document.querySelector('.info'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');
			
	function showModal() {
		overlay.style.display = 'block';
		event.target.classList.add('more-splash');
		document.body.style.overflow = 'hidden';

		close.addEventListener('click', function() {
			overlay.style.display = 'none';
			event.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
	}

	more.addEventListener('click', showModal);

	infoBlock.addEventListener('click', function(event) {
		console.log(event.target);
		if (event.target && event.target.classList.contains('description-btn')) {
			showModal();
		}
	});

});
