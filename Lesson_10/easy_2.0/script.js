const log = (msg) => {console.log(msg);};
window.addEventListener('DOMContentLoaded', () => {


	class Options {
		constructor(height = 200, width = 200, bg = "purple", fontSize = "12px", textAlign = "center") {
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
			div.style.cssText = `
			font-size: ${this.fontSize}px; 
			text-align: ${this.textAlign}; 
			background: ${this.bg};
			width: ${this.width}px;
			min-height: ${this.height}px`;	
		}
	}

	let test1 = new Options();
	test1.newDiv("Привет");
	let test2 = new Options(300, 250, "red");
	test2.newDiv("Человек");
	let test3 = new Options(200, 300, "yellow", 25, "right");
	test3.newDiv("Пока");
});


