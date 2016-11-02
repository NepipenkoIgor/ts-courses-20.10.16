// 2)
//  писать функцию summator(), которая сумирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено


function summator(a:number|string, ...rest):number|string|boolean {

	if (!a || rest.length == 0) {
		console.log("недостаточно аргументов"); 
		return false;
	}
	

	for (let x of rest) {
		if ((typeof a !== typeof x) || !(typeof x === "number" || typeof x === "string")) {
			console.log("неправильный тип аргументов"); 
			return false;
		}
	}

	let sum = a;

	for (let x of rest) {
		sum += x;
	}
	return sum;
	
};


console.log(summator(1,2,3)); 
console.log(summator("сто","пятьсот","один")); 

console.log(summator()); 
console.log(summator(1)); 
console.log(summator("сто","пятьсот",1)); 
