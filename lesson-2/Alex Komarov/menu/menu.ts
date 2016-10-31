type menuList ={title: string;link?: string;items?: menuList}[];
type menuOpt = {element: HTMLElement,menuList: menuList}
let menuList: menuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие',
                items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
                ],
            }
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель',
                items: [
                    {title: 'Морская форель'}
                ]
            }
        ]
    }
];

interface IMenu {
    getElem(): HTMLElement;
    toggle(): void;
    close(): void;
    open(): void;
}

class Menu implements IMenu {
    protected element: HTMLElement;
    protected menuList: menuList;
    private _selectedElement: HTMLElement;

    public constructor(opt: menuOpt) {
        this.element = opt.element;
        this.menuList = opt.menuList;
        this.element.innerHTML = this.generateMenu(this.menuList);
        this.element.addEventListener('click', this.clickHandler.bind(this))
    }

    protected clickHandler(this: Menu, ev: MouseEvent) {
        let el = ev.target as HTMLElement;
        this._selectedElement = el;
        this.toggle();
    }

    private _expand(element: HTMLElement, type: 'toggle' | 'close' | 'open'): void {
        let classList = element.classList;
        if (classList.contains('title')) {
            let parentLi =element.parentNode as HTMLLIElement;

            switch(type) {
                case 'toggle': parentLi.classList.toggle('menu-open'); break;
                case 'close': parentLi.classList.remove('menu-open'); break;
                case 'open': parentLi.classList.add('menu-open'); break;
            }
        }
    }

    protected generateMenu(menuList: menuList): string {
        let z: string = `<ul>`;
        for (let a of menuList) {
            z += `<li><a ${a.items ? 'class=title' : ''} ${a.link ? 'href=' + a.link :
                ''}>${a.title}</a>`;
            if (!a.items) {
                z += `</li>`;
                continue;
            }
            z += `${this.generateMenu(a.items)}</li>`
        }
        return `${z}</ul>`
    }

    public getElem(): HTMLElement {
        return this.element;
    }

    public readonly toggle: () => void = (function() {
        if(this._selectedElement) {
            this._expand(this._selectedElement, 'toggle');
        }
    }).bind(this)

    public readonly close: () => void = (function() {
        if(this._selectedElement) {
            this._expand(this._selectedElement, 'close');
        }
    }).bind(this)

    public readonly open: () => void = (function() {
        if(this._selectedElement) {
            this._expand(this._selectedElement, 'open');
        }
    }).bind(this)
}

let element = document.querySelector('.menu') as HTMLElement;
let nav = new Menu({element, menuList});

let intMenu: IMenu = nav;

let toggleElement = document.querySelector('.toggle-menu') as HTMLElement;
let closeElement = document.querySelector('.close-menu') as HTMLElement;
let openElement = document.querySelector('.open-menu') as HTMLElement;
toggleElement.addEventListener('click', intMenu.toggle);
closeElement.addEventListener('click', intMenu.close);
openElement.addEventListener('click', intMenu.open);