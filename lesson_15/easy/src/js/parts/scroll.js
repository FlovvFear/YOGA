const scroll = () => {
  let menu = document.querySelector('ul');


	menu.addEventListener('click', (event) => { 
		event.preventDefault();
		if (event.target && event.target.tagName == 'A') {
			document.querySelector(event.target.getAttribute('href')).scrollIntoView({block: "start", behavior: "smooth"});
		}
	});
}

module.exports = scroll;