type coordinates = {
    top: number,
    left: number
};

class Slider {
    private container: HTMLElement;
    private thumb: HTMLElement;

    public constructor(container: HTMLElement, thumb: HTMLElement) {
        this.container = container;
        this.thumb = thumb;

        this.thumb.addEventListener('mousedown', this.thumbMouseDownHandler.bind(this));
        this.thumb.addEventListener('dragstart', (): boolean => false);
    }

    private thumbMouseDownHandler(ev: MouseEvent): boolean {
        let thumbCoordinates: coordinates = Slider.getCoordinates(this.thumb);
        let shiftX: number = ev.pageX - thumbCoordinates.left;

        let sliderCoordinates = Slider.getCoordinates(this.container);

        let mouseMove = (ev: MouseEvent) => {
            let newLeft: number = ev.pageX - shiftX - sliderCoordinates.left;

            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge: number = this.container.offsetWidth - this.thumb.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            this.thumb.style.left = `${newLeft}px`;
        };

        let mouseUp = ():void => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        };

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);

        return false;
    }

    private static getCoordinates(elem: HTMLElement): coordinates {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}

let container: HTMLElement = document.getElementById('slider');
let slider = new Slider(container, container.children[0] as HTMLElement);