 // 5) Улучшите класс с менюшкой добавив публичные методы
 //    getElem -возвращает елемент в котором генерится меню;
 //     toggle открыть/закрыть элемент меню по метке;
 //     close закрыть элемент меню по метке;
 //     open открыть элемент меню по метке

 // в интерфейсе реализуйте кнопками вызов этих методов ( например над меню)
 // P.S. для демонстрации

 // недоделано!


type typeList = {title:string, items?:typeList}[];

let list:typeList = [
	{
		title: "Животные", items: [
		{
			title: "Млекопитающие", items: [
			{title: "Коровы"},
			{title: "Ослы"},
			{title: "Собаки"},
			{title: "Тигры"}
		]
		},
		{
			title: "Другие", items: [
			{title: "Змеи"},
			{title: "Птицы"},
			{title: "Ящерицы"},
		],
		},
	]
	},
	{
		title: "Рыбы", items: [
		{
			title: "Аквариумные", items: [
			{title: "Гуппи"},
			{title: "Скалярии"}
		]
		},
		{
			title: "Форель", items: [
			{title: "Морская форель"}
		]
		},
	]
	},
	{
		title: "Птицы", items: [
		{
			title: "Ворон"
		},
		{
			title: "Сокол"
		}
	]
	}
   ]

type typeOptions = {rootEl:string, list:typeList};

let options:typeOptions = {rootEl:".menu", list:list};

interface IMenu {
	getElem();
	// toggle ();
	// close ();
	// open ();
}

class Menu implements IMenu {
	// свойства
	protected rootEl: string;
	protected list:typeList;
	protected navMenuList:Element;
	
	// конструктор
	constructor (options:typeOptions) {
		
		this.rootEl = options.rootEl;
		if (document.querySelector(this.rootEl)) {
			this.navMenuList = document.querySelector(this.rootEl);
		} else {
			this.navMenuList = document.body;
		}
		if (list) {
			this.list = options.list;
			this.navMenuList.innerHTML = this.generateMenu(this.list);
			this.generatePanel ();
			this.setEvent ();
		}		
	}

	// методы
	protected generateMenu (list) {

	  let arr = list;
	  let z:string = `<ul>`;

	  for (let i of arr) {

		let isItemsTitle:string = "";
		if (i.items) {
		  isItemsTitle = `<a class="title">${i.title}</a>`;
		} else {
		  isItemsTitle = `${i.title}`;
		}

		z += `<li class="menuItem">${isItemsTitle}`;

		// вложенные данные
		if(i.items) {
			z += this.generateMenu(i.items);
		}
		z += `</li>`
	  }
	  z += `</ul>`
	  return z;

	}

	protected setEvent () {
		this.navMenuList.onclick = (ev:MouseEvent) => {
			let el = <HTMLAnchorElement>ev.target;
			let classList:DOMTokenList = el.classList;
			let panelText:HTMLInputElement = document.querySelector(".panelText");
			
			// очистка
			let menuItems:NodeList = this.navMenuList.querySelectorAll(".menuItem");
			for (let b of menuItems) {
				let menuCurentItemClassList = b.classList;
				if (menuCurentItemClassList.contains("active")) {
					menuCurentItemClassList.remove("active");
				}
			}

			if (classList.contains("title")) {
				let parentLi:HTMLLIElement = el.parentNode;
				parentLi.classList.toggle("menu-open");
				parentLi.classList.add("active");
				console.log(el.innerHTML); 
				panelText.value = el.innerHTML;
			}
		};		
	}

	protected generatePanel () {
		let navMenuList = this.navMenuList;
		let panel =`
		<input type="text" class="panelText">
		<button id="toggle" type="button">Toggle</button>
		<button id="toggle" type="button">Open</button>
		<button id="toggle" type="button">Close</button>
		`;
		let div = document.createElement("div");
		div.className = "panel";
		div.innerHTML = panel;
		navMenuList.insertBefore(div, navMenuList.firstChild);

		// дописать генерацию кнопок
	}  

	public getElem () {
		return this.navMenuList;
	}
}


let menu = new Menu(options);

