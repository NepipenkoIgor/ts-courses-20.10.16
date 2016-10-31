
var list:any = [
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

function generateMenu (list:any, parent:HTMLElement, deep:number = 1):void {

  let ul:HTMLElement = document.createElement('ul');
  parent.appendChild(ul);

  let arr = list;
  for (let i:number = 0; i < arr.length; i++) {

    // создаем элементы
    let li:HTMLElement = document.createElement('li');
    // li.className = "menu-open";
    li.innerHTML = `${arr[i].title}`;
    ul.appendChild(li);

    // вложенные данные
    if(Array.isArray(arr[i].items)) {
      li.innerHTML = `<a class="title">${arr[i].title}</a>`;
      deep++;
      let arr2 = arr[i].items;

      generateMenu(arr2, li, deep);

      deep--;
    }

  }

}

var navMenuList:Element = document.querySelector('.menu');
generateMenu(list, navMenuList, 1);
navMenuList.onclick = function (ev:MouseEvent) {
    var el = <HTMLAnchorElement>ev.target;
    var classList:DOMTokenList = el.classList;
    if (classList.contains('title')) {
        var parentLi:HTMLLIElement = el.parentNode;
        parentLi.classList.toggle('menu-open');
    }
};