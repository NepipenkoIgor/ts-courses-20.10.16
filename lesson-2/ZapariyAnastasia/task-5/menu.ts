type menuList ={title: string;link?: string;items?: menuList}[];
type menuOpt = {element: HTMLElement,menuList: menuList};

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
    getElem(): HTMLElement; //-возвращает елемент в котором генерится меню;
    toggle(title: string): void; //открыть/закрыть элемент меню по метке;
    close(title: string): void; //закрыть элемент меню по метке;
    open(title: string): void; //открыть элемент меню по метке
}

class Menu implements IMenu {
    protected element: HTMLElement;
    protected menuList: menuList;
    private menuMap: {};

    public constructor(opt: menuOpt) {
        this.element = opt.element;
        this.menuList = opt.menuList;
        this.element.innerHTML = this.generateMenu(this.menuList);
        this.element.addEventListener('click', this.clickHandler);
        this.createMenuMap();
    }

    protected clickHandler(this: void, ev: MouseEvent) {
        let el = ev.target as HTMLElement;
        let classList = el.classList;
        if (classList.contains('title')) {
            let parentLi = el.parentNode as HTMLLIElement;
            parentLi.classList.toggle('menu-open');
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
            z += `${this.generateMenu(a.items)}</li>`;
        }
        return `${z}</ul>`;
    }
    
    public getElem(): HTMLElement {
        return this.element;
    }
    
    public toggle(title: string): void {
        let anchorElem: HTMLAnchorElement = this.menuMap[title];
        if (!anchorElem) return;
        
        let classList = anchorElem.classList;
        if (classList.contains('title')) {
            anchorElem.click();
        }
    }
    public close(title: string): void {
        let anchorElem: HTMLAnchorElement = this.menuMap[title];
        if (!anchorElem) return;
        
        let classList = anchorElem.classList;
        let parentEl = anchorElem.parentElement;
        if (classList.contains('title') && parentEl.classList.contains('menu-open')) {
            //anchorElem.click();
            parentEl.classList.remove('menu-open');
        }
    }
    public open(title: string): void {
        let anchorElem: HTMLAnchorElement = this.menuMap[title];
        if (!anchorElem) return;
        
        let classList = anchorElem.classList;
        let parentEl = anchorElem.parentElement;
        if (classList.contains('title') && !parentEl.classList.contains('menu-open')) {
            parentEl.classList.add('menu-open');
        }
    }
    
    private createMenuMap(): void {
        this.menuMap = {};
        let anchorArray: NodeListOf<HTMLAnchorElement> = this.element.getElementsByTagName('a');
        for (let i = 0; i < anchorArray.length; i++) {
            this.menuMap[anchorArray[i].textContent] = anchorArray[i];
        }
    }
}

let element = document.querySelector('.menu') as HTMLElement;
let nav = new Menu({element, menuList});

let toggleButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('toggle');
toggleButton.addEventListener('click', () => {
    nav.toggle('Животные');
});

let closeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('close');
closeButton.addEventListener('click', () => {
    nav.close('Млекопитающие');
});

let openButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('open');
openButton.addEventListener('click', () => {
    nav.open('Млекопитающие');
})