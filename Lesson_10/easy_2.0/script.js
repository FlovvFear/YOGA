const log = (msg) => {console.log(msg);};
window.addEventListener('DOMContentLoaded', function() {


	class Options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		newDiv(text) {
			let div = document.createElement('div');
			document.body.appendChild(div);
			div.innerText = text;
			div.style.cssText = `font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
			div.style.background = this.bg;
			div.style.width = this.width + 'px';
			div.style.height = this.height + 'px';			
		}
	}

	let test1 = new Options(100,200,"red",30, "center");
	test1.newDiv("Привет");
	let test2 = new Options(200, 300, "yellow", 25, "right");
	test2.newDiv("Пока");
});


