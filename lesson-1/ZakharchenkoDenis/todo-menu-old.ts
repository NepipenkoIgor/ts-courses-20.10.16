type menuList ={title: string, items: any}[];

// let menuList: menuList = [
//     {title: 'JavaScript', items: ['React', 'Angular2', 'Cycle.js']},
//     {title: 'Dart', items: ['Flutter', 'Angular2', 'Polymer']},
// ];

let list: menuList = [
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
    },
    {
       title: 'Птицы', items: [
        {
            title: 'Ворон'
        },
        {
            title: 'Сокол'
        }
    ]
    }
   ]


function generateMenu (list): string {
    let arg = arguments[0];
    let z:string = `<ul>`;
    // console.log(arg);
   
    for(let a of arg){
    // console.log(a);
        z+=`<li><a class="title">${a.title}</a><ul>`
        for(let item of a.items){
            z+=`<li>`

            // console.log(generateMenu);
            return generateMenu(a.items); 
            

            z+=`</li>`
        }
        z+=`</ul></li>`
    }

    z+=`</ul>`;
    console.log(1);     
    return z;

}

let navMenuList:HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenuList.innerHTML = generateMenu(list);
navMenuList.onclick =(ev:MouseEvent)=>{
    let el = <HTMLAnchorElement>ev.target;
    let classList = el.classList;
    if(classList.contains('title')){
        let parentLi =el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open')
    }
}