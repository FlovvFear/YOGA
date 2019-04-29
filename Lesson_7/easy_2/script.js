let clock = document.createElement('div');

document.body.appendChild(clock);

function startTime() {
	let date = new Date(),
    	hours = date.getHours(),
    	minutes = date.getMinutes(),
		seconds = date.getSeconds();
		if (hours < 10) {
			hours = "0" + hours;
		}
  		if (minutes < 10) {
			minutes = "0" + minutes;
		}
  		if (seconds < 10) {
			seconds = "0" + seconds;
		}
  		clock.innerHTML = hours + ":" + minutes + ":" + seconds;
  		setTimeout(startTime, 1000);
}
startTime();