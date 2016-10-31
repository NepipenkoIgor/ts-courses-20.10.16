/**
 * 6) Реализуйте слайдер
 * http://learn.javascript.ru/task/slider
 */

class Slider {
    private _element: HTMLElement;
    private _thumb: HTMLElement;

    private _elementOffsetLeft: number;
    private _elementWidth: number;

    public constructor(elem: HTMLElement) {
        this._element = elem;
        this._thumb = this._element.querySelector('.thumb') as HTMLElement;

        let elemStyle: CSSStyleDeclaration = window.getComputedStyle(this._element);
        let thumbWidth: number = this._thumb.offsetWidth;
        let marginLeft: number = parseInt(elemStyle.marginLeft || '0');

        this._elementWidth = parseInt(elemStyle.width || '0') - thumbWidth;
        this._elementOffsetLeft = marginLeft + thumbWidth + 1;

        this._element.onmousedown = this.onMouseDown.bind(this);
        this._element.ondragstart = this.onDragStart.bind(this);
    }

    private onMouseDown(event: Event): void {
        this._thumb.style.position = 'absolute';
        this.moveAt(event);

        document.onmousemove = this.onMouseMove.bind(this);
        document.onmouseup = this.onMouseUp.bind(this);
    }

    private onMouseMove(event: Event): void {
        this.moveAt(event);
    }

    private onMouseUp(): void {
        document.onmousemove = () => {} /* null - так ошибка */;
        document.onmouseup = () => {} /* null - так ошибка */;
    }

    private onDragStart() {
        return false;
    }

    private moveAt(event): void {
        let left = event.pageX - this._elementOffsetLeft;

        if (left < 0) left = 0;
        if (left > this._elementWidth) left = this._elementWidth;

        // пошаговое перемещение
        left = Math.round(left / 20) * 20;

        this._thumb.style.left = left + 'px';
    }
};


const slider = new Slider(document.querySelector('#slider') as HTMLElement);
