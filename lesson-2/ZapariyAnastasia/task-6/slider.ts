class Slider {
    private sliderElement: HTMLElement;
    private thumbElement: HTMLElement;
    private sliderCoords: {top: number, left: number};
    private thumbCoords: {top: number, left: number};
    
    public constructor(sliderElement: HTMLElement) {
        this.sliderElement = sliderElement;
        this.thumbElement = document.createElement('div');
        this.thumbElement.className = 'thumb';
        this.sliderElement.appendChild(this.thumbElement);
    
        this.sliderCoords = this.getCoords( this.sliderElement);
    
        this.thumbElement.addEventListener('dragstart', () => false);
        this.thumbElement.addEventListener('mousedown', this.mouseDownHandler.bind(this));
    }
    
    private getCoords(elem: HTMLElement): {top: number, left: number} {
    
        let box = elem.getBoundingClientRect();
    
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    
    private mouseDownHandler(e: MouseEvent): boolean {
        this.thumbCoords = this.getCoords( this.sliderElement);
        let shiftX = e.pageX - this.thumbCoords.left;
        
        let mouseMove = (e:MouseEvent) => {
            
            let newLeftPosition = e.pageX - shiftX - this.sliderCoords.left;
            
            if (newLeftPosition < 0) {
                newLeftPosition = 0;
            }
            
            let rightEdgePosition = this.sliderElement.offsetWidth - this.thumbElement.offsetWidth;
            if (newLeftPosition > rightEdgePosition) {
                newLeftPosition = rightEdgePosition;
            }
    
            this.thumbElement.style.left = newLeftPosition + 'px';
        };
        
        let mouseUp = (e: MouseEvent) => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        };
        
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
        
        return false;
    }
}

let sliderElement = document.getElementById('slider') as HTMLElement;

let slider = new Slider(sliderElement);