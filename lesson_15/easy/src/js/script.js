window.addEventListener('DOMContentLoaded', () => {

	'use strict';

	let tabs = require('./parts/tabs.js'),
			timer = require('./parts/timer.js'),
			scroll = require('./parts/scroll.js'),
			modal = require('./parts/modal.js'),
			form = require('./parts/form.js'),
			slider = require('./parts/slider.js'),
			calc = require('./parts/calc.js');

	tabs();
	timer();
	scroll();
	modal();
	form();
	slider();
	calc();
});
