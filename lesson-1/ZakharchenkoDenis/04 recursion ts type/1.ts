type typeList = {title:string, items?:typeList}[];

let list:typeList = [
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

function generateMenu (list?:typeList):string {

  if (!list) {
      return "";
  }

  let arr = list;
  let z:string = `<ul>`;

  for (let i of arr) {

    let isItemsTitle:string = "";
    if (i.items) {
      isItemsTitle = `<a class="title">${i.title}</a>`;
    } else {
      isItemsTitle = `${i.title}`;
    }

    z += `<li>${isItemsTitle}`;

    // вложенные данные
    if(i.items) {
      z += generateMenu(i.items);
    }
    z += `</li>`
  }
  z += `</ul>`
  return z;

}

let navMenuList:Element = document.querySelector('.menu');
navMenuList.innerHTML = generateMenu(list);
navMenuList.onclick = (ev:MouseEvent) => {
    var el = <HTMLAnchorElement>ev.target;
    var classList:DOMTokenList = el.classList;
    if (classList.contains('title')) {
        var parentLi:HTMLLIElement = el.parentNode;
        parentLi.classList.toggle('menu-open');
    }
};