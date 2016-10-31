type menuList = {title: string, items?: menuList}[];

let menuList: menuList = [
    {
        title: 'Животные', items: [
        {
            title: 'Млекопитающие', items: [
            {title: 'Коровы'},
            {title: 'Ослы'},
            {title: 'Собаки'},
            {title: 'Тигры'}
        ]
        },
        {
            title: 'Другие', items: [
            {title: 'Змеи'},
            {title: 'Птицы'},
            {title: 'Ящерицы'},
        ],
        },
    ]
    },
    {
        title: 'Рыбы', items: [
        {
            title: 'Аквариумные', items: [
            {title: 'Гуппи'},
            {title: 'Скалярии'}
        ]
        },
        {
            title: 'Форель', items: [
            {title: 'Морская форель'}
        ]
        },
    ]
    }
   ];

function generateMenu(list?: menuList): string {
    if(!list) {
        return ``;
    }

    let htmlText:string = `<ul>`;
    for(let a of list){
        let expandedClass: string = a.items ? `class="title"` : ``;
        htmlText += `<li><a ${expandedClass}>${a.title}</a>`
        htmlText += generateMenu(a.items);
        htmlText += `</li>`
    }
    htmlText += `</ul>`;

    return htmlText;
}


let navMenuList:HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(menuList);
navMenuList.onclick =(ev:MouseEvent)=>{
    let el = ev.target as HTMLAnchorElement;
    let classList = el.classList;
    if(classList.contains('title')){
        let parentLi =el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open')
    }
}