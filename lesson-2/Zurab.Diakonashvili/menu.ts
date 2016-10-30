/** ВОПРОСЫ :
 *  1. Интересно, насколько медленне обраюатываются строки-шаблоны: `текст ${myVar} текст` по сравнению со старым вариантом: 'текст ' + myVar + ' текст';
 *     В PHP обычно советуют не злоупотреблять подобными конструкциями как раз потому, что строки-шаблоны обрабатываются медленнее
 */

/**
 *  5) Улучшите класс с менюшкой добавив публичные методы
 *    getElem   - возвращает елемент в котором генерится меню;
 *    toggle    - открыть/закрыть элемент меню по метке;
 *    close     - закрыть элемент меню по метке;
 *    open      - открыть элемент меню по метке;
 *
 *  в интерфейсе реализуйте кнопками вызов этих методов (например над меню)
 *  P.S. для демонстрации
 */

type menuList = {title: string; id?: string; link?: string; items?: menuList}[];
type menuOpt = {element: HTMLElement, menuList: menuList};


let  menuList: menuList = [
    {
        title: 'Животные',
        id: 'animals',
        items: [
            {
                title: 'Млекопитающие',
                id: 'mammals',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие',
                id: 'others',
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
        id: 'fishes',
        items: [
            {
                title: 'Аквариумные',
                id: 'aquarium',
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
        this.element.addEventListener('click', this.clickHandler);
    }

    // toggle - открыть/закрыть элемент меню по метке;
    /*toggle(el: HTMLElement): void {
        let classList = el.classList;
        if (classList.contains('title')) {
            let parentLi = el.parentNode as HTMLLIElement;
            parentLi.classList.toggle('menu-open');
        }
    }*/

    protected clickHandler(this: void, ev: MouseEvent) {
        let el = ev.target as HTMLElement;
        let classList = el.classList;
        if (classList.contains('title')) {
            let parentLi = el.parentNode as HTMLLIElement;
            parentLi.classList.toggle('menu-open');
        }
        // this.toggle(el);
    }

    protected generateMenu(menuList?: menuList): string {
        if (!menuList) return '';

        let menuBody: string = '<li>';

        for (let menuListItem of menuList) {
            let {title, id, link, items} = menuListItem;

            menuBody += `<a ${id ? 'id="' + id + '"' : ''} ${items ? 'class="title"' : ''} ${link ? 'href="' + link + '"' : ''}>${title}</a>`;
            // menuBody += `<a ${items ? 'class="title"' : ''} ${link ? 'href="' + link : '"'}>${title}</a>`;
            menuBody += `${this.generateMenu(items)}</li>`;
        };

        return `<ul>${menuBody}</ul>`;
    }

    // getElem - возвращает елемент в котором генерится меню;
    public getElem(): HTMLElement {
        return this.element;
    }

    public toggle(id: string): void {
        const el: HTMLElement = this.element.querySelector(`#${id}`) as HTMLElement;
        el.parentElement.classList.toggle('menu-open');
    }

    // close - закрыть элемент меню по метке;
    public close(id: string): void {
        const el: HTMLElement = this.element.querySelector(`#${id}`) as HTMLElement;
        if (el.parentElement.classList.contains('menu-open')) {
            el.parentElement.classList.remove('menu-open');
        }
    }

    // open - открыть элемент меню по метке;
    public open(id: string): void {
        const el: HTMLElement = this.element.querySelector(`#${id}`) as HTMLElement;
        if (!el.parentElement.classList.contains('menu-open')) {
            el.parentElement.classList.add('menu-open');
        }
    }
}


let element = document.querySelector('.menu') as HTMLElement;
let nav = new Menu({element, menuList});



let buttons = document.createElement('div');

buttons.innerHTML = `
    <label>id: <input id="input" value="animals"></label>
    <button id="btnOpen">Open</button>
    <button id="btnClose">Close</button>
    <button id="btnToggle">Toggle</button>
`;

document.body.insertBefore(buttons, nav.getElem());

let input: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
let btnOpen: HTMLButtonElement = document.querySelector('#btnOpen') as HTMLButtonElement;
let btnClose: HTMLButtonElement = document.querySelector('#btnClose') as HTMLButtonElement;
let btnToggle: HTMLButtonElement = document.querySelector('#btnToggle') as HTMLButtonElement;

btnOpen.addEventListener('click', () => {
    nav.open(input.value);
});
btnClose.addEventListener('click', () => {
    nav.close(input.value);
});
btnToggle.addEventListener('click', () => {
    nav.toggle(input.value);
});
