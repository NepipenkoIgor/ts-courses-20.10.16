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
	protected list:typeList;
	protected rootEl:Element;
	private panelEl:HTMLDivElement;
	private menuEl:HTMLDivElement;
	
	// конструктор
	constructor (options:typeOptions) {
		
		if (document.querySelector(options.rootEl)) {
			this.rootEl = document.querySelector(options.rootEl);
		} else {
			this.rootEl = document.body;
		}
		if (list) {
			this.list = options.list;
			this.generateInterface ();
			this.setEventMenu ();
			this.setEventPanel ();
		}		
	}

	// методы
	protected generateMenu (list) {

	  let arr = list;
	  let z:string = `<ul>`;

	  for (let i of arr) {

		let isItemsTitle:string = "";
		if (i.items) {
		  z += `<li class="menuItem"><a class="title">${i.title}</a>`;
		} else {
		  z += `<li><a>${i.title}</a>`;
		}

		// вложенные данные
		if(i.items) {
			z += this.generateMenu(i.items);
		}
		z += `</li>`
	  }
	  z += `</ul>`
	  return z;

	}

	protected generatePanel () {	
		let panel =`
		<input type="text" class="panelText">
		<button id="toggle" type="button">Toggle</button>
		<button id="open" type="button">Open</button>
		<button id="close" type="button">Close</button>
		`;
		return panel;	
	} 

	protected generateInterface () {
		let rootEl = this.rootEl;
		
		let panel:HTMLDivElement = document.createElement("div");
		panel.className = "panel";
		panel.innerHTML = this.generatePanel();
		this.panelEl = panel;
		this.rootEl.appendChild(panel);

		let menu:HTMLDivElement = document.createElement("div");
		menu.className = "menuList";
		menu.innerHTML = this.generateMenu(this.list);
		this.menuEl = menu;
		this.rootEl.appendChild(menu);
	}

	protected setEventMenu () {
		this.menuEl.onclick = (ev:MouseEvent) => {
			let el = <HTMLAnchorElement>ev.target;
			let classList:DOMTokenList = el.classList;
			let panelText:HTMLInputElement = document.querySelector(".panelText");
			
			// очистка
			let menuItems:NodeList = this.rootEl.querySelectorAll(".menuItem");
			for (let b of menuItems) {
				let menuCurentItemClassList = b.classList;
				if (menuCurentItemClassList.contains("active")) {
					menuCurentItemClassList.remove("active");
				}
			}

			let parentLi:HTMLElement;
			if (classList.contains("title")) {
				parentLi = el.parentElement;
				parentLi.classList.toggle("menu-open");
			} else {
				parentLi = el.closest(".menuItem")
			}
			parentLi.classList.add("active");
			console.log(el.innerHTML); 
			panelText.value = parentLi.firstElementChild.innerHTML;

		}	
	}

	protected setEventPanel () {

		this.panelEl.onclick = (ev:MouseEvent) => {
			
			let activeEl = this.rootEl.querySelector(".active");

			switch(ev.target.id) {
			  case 'toggle':  
				activeEl.classList.toggle("menu-open");
				break;
			  case 'open':  
				activeEl.classList.add("menu-open");
				break;
			  case 'close': 
				activeEl.classList.remove("menu-open");
				break;
			}

		}
	} 

	public getElem () {
		return this.rootEl;
	}
}


let menu = new Menu(options);

