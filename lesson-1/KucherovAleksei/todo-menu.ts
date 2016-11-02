type menuList = {title: string, items?: menuList}[];

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
                    {
                        title: 'Змеи',
                        items: [
                            {title: 'Кобра'},
                            {title: 'Анаконда'},
                            {title: 'Удав'},
                        ]
                    },
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
                ],
            },
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
            },
        ]
    }
];

function generateMenu(list: menuList): string {

    let z: string = `<ul>`;

    for (let a of list) {
        if (a.hasOwnProperty('items')) {
            z += `<li><a class="title">${a.title}</a>${generateMenu(a.items)}</li>`;
            continue;
        }
        z += `<li><a class="item">${a.title}</a></li>`;
    }
    z += `</ul>`;
    return z;
}

let navMenuList: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = (ev: MouseEvent) => {
    let el = ev.target as HTMLAnchorElement;
    let classList = el.classList;
    if (classList.contains('title')) {
        let parentLi = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    }
};