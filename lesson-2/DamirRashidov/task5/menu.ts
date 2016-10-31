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

class Menu {
    protected element: HTMLElement;
    protected menuList: menuList;

    public constructor(opt: menuOpt) {
        this.element = opt.element;
        this.menuList = opt.menuList;
        this.element.innerHTML = this.generateMenu(this.menuList);
        this.element.addEventListener('click', Menu.clickHandler)
    }

    protected static clickHandler(ev: MouseEvent): void {
        let el = ev.target as HTMLElement;
        let classList = el.classList;
        if (classList.contains('title')) {
            let parentLi = el.parentNode as HTMLLIElement;
            parentLi.classList.toggle('menu-open')
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
}

class ImprovedMenu extends Menu {
    private selectedLi: HTMLLIElement;

    public constructor(opt: menuOpt) {
        super(opt);

        this.generateButtons();
    }

    private generateButtons(): void {
        let div = document.createElement('div');

        let input = document.createElement('input');
        input.value = 'ul li';

        let updateSelectedLi = () => {
            this.selectedLi = document.querySelector(input.value) as HTMLLIElement;
        };

        updateSelectedLi();

        input.addEventListener('change', updateSelectedLi);
        div.appendChild(input);

        let buttonToggle = document.createElement('button');
        buttonToggle.innerText = 'Toggle';
        buttonToggle.addEventListener('click', () => {
            this.toggle();
        });
        div.appendChild(buttonToggle);

        let buttonOpen = document.createElement('button');
        buttonOpen.innerText = 'Open';
        buttonOpen.addEventListener('click', () => {
            this.open();
        });
        div.appendChild(buttonOpen);

        let buttonClose = document.createElement('button');
        buttonClose.innerText = 'Close';
        buttonClose.addEventListener('click', () => {
            this.close();
        });
        div.appendChild(buttonClose);

        this.element.insertBefore(div, this.element.children[0]);
    }

    public getElem(): HTMLElement {
        return this.element;
    }

    public toggle(): void {
        this.selectedLi.classList.toggle('menu-open');
    }

    public close(): void {
        if (this.selectedLi.classList.contains('menu-open')) {
            this.selectedLi.classList.remove('menu-open');
        }
    }

    public open(): void {
        if (!this.selectedLi.classList.contains('menu-open')) {
            this.selectedLi.classList.add('menu-open');
        }
    }
}

let element = document.querySelector('.menu') as HTMLElement;
let nav = new ImprovedMenu({element, menuList});