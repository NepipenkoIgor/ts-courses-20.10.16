type menuItem ={title: string, items?: menuItem[]};

let menuList1: menuItem[] = [
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
            {title: 'Морская форель'}
          ]
        },
      ]
    }
];

function generateMenu(list: menuItem[]): string {
    let z:string = `<ul>`;
    for(let a of list){
      z+= generateItem(a);
    }
    z+=`</ul>`;
    return z;
}

function generateItem(item: menuItem): string {
  let z:string ='';

  if (!item.items) {
    z+= `<li><a>${item.title}</a></li>`;
    return z;
  } else {
    z+= `<li><a class="title">${item.title}</a><ul>`;
  }

  for(let node of item.items){
    z += generateItem(node);
  }
  z+=`</ul></li>`;

  return z;
}


let navMenuList:HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
let html: string = generateMenu(menuList1);
navMenuList.innerHTML = html;
navMenuList.onclick =(ev:MouseEvent)=>{
    let el = <HTMLAnchorElement>ev.target;
    let classList = el.classList;
    if(classList.contains('title')){
        let parentLi =el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open')
    }
}