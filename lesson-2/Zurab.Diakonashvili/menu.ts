/** ВОПРОСЫ :
 *  1. Интересно, насколько медленне обраюатываются строки-шаблоны: `текст ${myVar} текст` по сравнению со старым вариантом: 'текст ' + myVar + ' текст';
 *     В PHP обычно советуют не злоупотреблять подобными конструкциями как раз потому, что строки-шаблоны обрабатываются медленнее
 */

type menuList = {title: string; link?: string; items?: menuList}[];
type menuOpt = {element: HTMLElement, menuList: menuList};


let  menuList: menuList = [
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
        this.element.addEventListener('click', this.clickHandler);
    }

    protected clickHandler(this: void, ev: MouseEvent) {
        let el = ev.target as HTMLElement;
        let classList = el.classList;
        if (classList.contains('title')) {
            let parentLi = el.parentNode as HTMLLIElement;
            parentLi.classList.toggle('menu-open');
        }
    }

    protected generateMenu(menuList?: menuList): string {
        if (!menuList) return '';

        let menuBody: string = '<li>';

        for (let menuListItem of menuList) {
            let {title, link, items} = menuListItem;

            menuBody += `<a ${items ? 'class="title"' : ''} ${link ? 'href=' + link : ''}>${title}</a>`;
            menuBody += `${this.generateMenu(items)}</li>`;
        };

        return `<ul>${menuBody}</ul>`;
    }
}


let element = document.querySelector('.menu') as HTMLElement;
let nav = new Menu({element, menuList});
