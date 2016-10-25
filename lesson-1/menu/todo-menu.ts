type menuList = {
    title: string,
    items?: menuList
}[];

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
                    {title: 'Ящерицы'}
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
            },
        ]
    }
];

function generateMenu(list: menuList): string {
    let z: string = `<ul>`;

    for (let item of list) {
        z += `<li>`;

        if (item.items) {
            z += `<a class="title">${item.title}</a>${generateMenu(item.items)}`;
        } else {
            z += `${item.title}`;
        }

        z += `</li>`;
    }

    z += `</ul>`;
    return z;
}

let navMenuList: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick = (ev: MouseEvent)=> {
    let el = <HTMLAnchorElement>ev.target;
    let classList = el.classList;
    if (classList.contains('title')) {
        let parentLi = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open')
    }
}