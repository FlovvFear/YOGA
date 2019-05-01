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

	let deadline = '2019-05-01';

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

	let aboutLink = document.querySelector('[href="#about"]'),
			photoLink = document.querySelector('[href="#photo"]'),
			priceLink = document.querySelector('[href="#price"]'),
			contactsLink = document.querySelector('[href="#contacts"]'),
			aboutBox = document.querySelector('#about'),
			photoBox = document.querySelector('#photo'),
			priceBox = document.querySelector('#price'),
			contactsBox = document.querySelector('#contacts');


	aboutLink.addEventListener('click', function(event) {
		event.preventDefault();
		scrolling(aboutBox);
	});

	photoLink.addEventListener('click', function(event) {
		event.preventDefault();
		scrolling(photoBox);
	});

	priceLink.addEventListener('click', function(event) {
		event.preventDefault();
		scrolling(priceBox);
	});

	contactsLink.addEventListener('click', function(event) {
		event.preventDefault();
		scrolling(contactsBox);
	});

	function scrolling (content) {
		let w,
		t = content.offsetTop,
		timerId = setInterval(function() {
			w = window.pageYOffset;
			if(w == t) {
				clearInterval(timerId);
			}
			if(w < t) {
				scrollBy(0, 1);
			} else {
				scrollBy(0, -1);
			}
		}, 1);
	}
});
