// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

// Вопрос, какова природа arr? могут ли в нем быть массивы и объекты?

function getUnique(arr:any[]):any[] {
	let arr2: any[] = [];
	for (let x of arr) {
		if (arr2.indexOf(x) == -1) {
			arr2.push(x);
		}
	}
	return arr2;
}

let arr1 = [1,2,2,3];
let arr2 = [1,"два",2,3,"два"];
let arr3 = [1,"два",2,3,{key:"вложенный"}];

console.log((getUnique(arr1).join(", "))); 
console.log((getUnique(arr2).join(", "))); 
console.log(getUnique(arr3)); 