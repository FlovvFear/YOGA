let box = document.querySelector('.box'),
    btn = document.querySelector('.btn');

btn.addEventListener('click', function() { 
	animate(function(timePassed) {
			box.style.left = timePassed / 5 + 'px';
			box.style.top = timePassed / 5 + 'px';
	  }, 2240);
});

function animate(draw, duration) {
	var start = performance.now();
  
	requestAnimationFrame(function animate(time) {
	  // определить, сколько прошло времени с начала анимации
	  var timePassed = time - start;
  
	  // возможно небольшое превышение времени, в этом случае зафиксировать конец
	  if (timePassed > duration) timePassed = duration;
  
	  // нарисовать состояние анимации в момент timePassed
	  draw(timePassed);
  
	  // если время анимации не закончилось - запланировать ещё кадр
	  if (timePassed < duration) {
		requestAnimationFrame(animate);
	  }
  
	});
  }

