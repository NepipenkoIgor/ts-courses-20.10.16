// 4)
//    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//    цифры и специальные символы должны остаться на месте
//       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//       s1tar3t 2   low5  ->  t1rat3s 2   wol5


function isLetter (l:string):boolean {
	let reg = /[a-z]/i;
	return reg.test(l);	
} 

function reverseWord (word:string):string {
	//  создаем массив букв
	let wordArr:string[] = word.split("");
	// создаем пустой объект
	let wordObj:{} = {};
	let reversedLetterArr:string[] = [];
    // добaвляем в объект и массив значения из слова-массива
	for (let i:number = wordArr.length - 1; i > -1; i--) {
		if (isLetter(wordArr[i])) {
			reversedLetterArr.push(wordArr[i]);
		} else {
			wordObj[i] = wordArr[i];	
		}	
	}
	// console.log(wordObj); 
	// console.log(onlyLetterArr); 

	// вставка чисел из объекта в массив на позицию
	for (let key in wordObj) {
		let position:number = +key;
 		reversedLetterArr.splice(position, 0, wordObj[key]);
	} 
	// console.log(onlyLetterArr); 
	let reversedWord:string = reversedLetterArr.join("");
	return reversedWord;

}

function reverse (str:string):string {
	// создаем массив с массивами
	let arrNew:string[] = [];
	// разбиваем строку на массив слов
	let arrString:string[] = str.split(" ");
	for (let word of arrString) {
        
        // работа со словом
        let wordNew:string = reverseWord(word);

		// добавляем перевернутые в новый массив
		arrNew.push(wordNew);
	}
	let reversedStr:string = arrNew.join(" ");
	return reversedStr;
}

let str:string = "s1tar3t 2 hellow";

console.log(str); 
console.log(reverse (str) ); 
