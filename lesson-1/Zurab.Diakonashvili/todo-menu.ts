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
                    {title: 'Змеи'},
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
                    {
                        title: 'Морская форель',
                        items: [
                            {title: 'Морская форель КРАСНАЯ'},
                            {title: 'Морская форель ЗЕЛЕНАЯ'},
                            {
                                title: 'Морская форель СИНЯЯ',
                                items: [
                                    {title: 'Морская форель СИНЯЯ (с перламутром)'}
                                ]
                            },
                        ]
                    }
                ]
            },
        ]
    }
];



function generateMenu(list: menuList) {
    if (!list) return '';

    let result: string = '';
    let ancorClassName: string = '';
    let itemsBody: string = '';

    for (let listItem of list) {
        ancorClassName = itemsBody = '';
        let {title, items} = listItem;

        if (items) {
            ancorClassName = ' class="title"';
            itemsBody = generateMenu(items);
        };

        result += `<li><a${ancorClassName}>${title}</a>${itemsBody}</li>`;
    };

    return `<ul>${result}</ul>`;
}



let navMenuList: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);



navMenuList.onclick = (evt: MouseEvent) => {
    let elem = evt.target as HTMLAnchorElement;
    let classList = elem.classList;
    if (classList.contains('title')) {
        let parentLi = elem.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    };
};
