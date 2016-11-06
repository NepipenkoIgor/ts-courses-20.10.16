 // 6) Реализуйте слайдер
 // http://learn.javascript.ru/task/slider

// Важно:
// Слайдер должен нормально работать при резком движении мыши влево или вправо, за пределы полосы. При этом бегунок должен останавливаться четко в нужном конце полосы.
// При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть все равно работает (это удобно для пользователя).

const option:{root:string, thumb:string} = {
	root: ".slider",
	thumb: ".thumb"
};

interface ISlider {
	rootEl:HTMLElement;
	thumb:HTMLElement;
	rootElCordinate:Object;
}

class Slider implements ISlider {
	private rootEl:HTMLElement;
	private thumb:HTMLElement;
	private rootElCordinate:Object;

	constructor (opt) {
		if (opt.root && (typeof opt.root == "string") && document.querySelector(opt.root)) {
			this.rootEl = document.querySelector(opt.root);
		}
		if (opt.thumb && (typeof opt.thumb == "string") && document.querySelector(opt.thumb)) {
			this.thumb = document.querySelector(opt.thumb);
		}
		this.setEvent();
	}
	
	private setEvent () {
		let body = document.body;
		let thumb = this.thumb;
		body.onmousedown = (ev:Event) => {
			
			if (ev.target == thumb) {
				this.moveAt(ev);

				document.onmousemove = (ev:Event) => {
    				this.moveAt(ev);
  				}

  				document.onmouseup = (ev:Event) => {
					document.onmousemove = null;
					thumb.onmouseup = null;
				}
			}
		}

		window.onload = (ev) => {
			this.ifResizeOrScrollPage ();
		}

		window.onresize = (ev) => {
			this.ifResizeOrScrollPage ();
		}

		window.onscroll = (ev) => {
			this.ifResizeOrScrollPage ();
		}
	}

	private moveAt(ev) {
		if (true) {
			let delta:number = ev.pageX - this.rootElCordinate.left;

			if (delta < 0) {
				delta = 0;
			} else if (delta > this.rootEl.clientWidth - this.thumb.offsetWidth) {
				delta = this.rootEl.clientWidth - this.thumb.offsetWidth;
			} 
			this.thumb.style.left = delta + 'px';
		    console.log(delta); 
		}    
	}

	private ifResizeOrScrollPage () {
		this.rootElCordinate = this.getCoords(this.rootEl);
	}

	private getCoords(elem) {
		// (1)
		let box = elem.getBoundingClientRect();

		let body = document.body;
		let docEl = document.documentElement;

		// (2)
		let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

		// (3)
		let clientTop = docEl.clientTop || body.clientTop || 0;
		let clientLeft = docEl.clientLeft || body.clientLeft || 0;

		// (4)
		let top = box.top + scrollTop - clientTop;
		let left = box.left + scrollLeft - clientLeft;

		return {
			top: top,
			left: left
		};
	}

}

let slider = new Slider (option);