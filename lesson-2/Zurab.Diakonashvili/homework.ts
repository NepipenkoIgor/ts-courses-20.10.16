/**
 * Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 * Возвращает true, если все аргументы, кроме первого входят в первый.
 * Первым всегда должен быть массив.
 */
function isInArray(arr: any[], ...rest: any[]): boolean {
    return rest.every(item => {
        return arr.indexOf(item) > 0;
    });
}
console.log('--- isArray ------');
console.log("[1, 3, 5], 3, 5 =>", isInArray([1, 3, 5], 3, 5)); // true
console.log("['1', '3', '5'], '3', '5' =>", isInArray(['1', '3', '5'], '3', '5')); // true
console.log("['1', '3', '5'], '3', 5 =>", isInArray(['1', '3', '5'], '3', 5)); // false
console.log("[1, 3, 5], 3, 5, 6 =>", isInArray([1, 3, 5], 3, 5, 6)); // false


/**
 * писать функцию summator(), которая сумирует переданые ей аргументы.
 * Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */
function summator(...rest: number[]): number;
function summator(...rest: string[]): string;
function summator(...rest: (number|string)[]): any {
    if (!rest.length) return;

    if (typeof rest[0] === 'number') {
        return rest.reduce((sum: number, current: number): number => {
            return sum + current;
        });
    }

    return rest.reduce((sum: string, current: string): string => {
        return sum + current;
    });
}
console.log('--- summator ------');
console.log('11, 22 =>', summator(11, 22)); // 33
console.log("'11', '22' =>", summator('11', '22')); // '1122'
console.log("'' =>", summator()); // undefined


/**
 * Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 * и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 * Порядок элементов результирующего массива должен совпадать с порядком,
 * в котором они встречаются в оригинальной структуре.
 */
type arrayOfAny = any[];
function getUnique(...arr: arrayOfAny): arrayOfAny {
    return arr.filter(item => {
        return !~arr.indexOf(item, arr.indexOf(item) + 1);
    });
}
console.log('--- getUnique ------');
console.log('[1, 2, 3, 4, 5] =>', getUnique(1, 2, 3, 4, 5)); // 1, 2, 3, 4, 5
console.log('[1, 2, 3, 4, 4] =>', getUnique(1, 2, 3, 4, 4)); // 1, 2, 3


/**
 *  Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
 *  цифры и специальные символы должны остаться на месте
 *     s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 *     s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 *     s1tar3t 2   low5a ->  t1rat3s 2   awo5l
 */
function reverse(str: string): string {
    function isLetter(char: string) {
        return char.toLowerCase() != char.toUpperCase();
    };

    function findALetter(arr: string[], fromPos: number, toPos: number): number {
        for (let i=fromPos; i<toPos+1; i++) {
            if (isLetter(arr[i])) return i;
        };
        return -1;
    };

    function findALetterBack(arr: string[], fromPos: number, toPos: number): number {
        for (let i=fromPos; i>toPos; i--) {
            if (isLetter(arr[i])) return i;
        };
        return -1;
    };

    function replaceLetters(wordArr: string[], pos1: number, pos2: number): string[] {
        let temp = wordArr[pos1];
        wordArr[pos1] = wordArr[pos2];
        wordArr[pos2] = temp;
        return wordArr;
    };

    function reverseWord(word: string): string {
        let arrWord = word.split('');
        let pos1 = 0;
        let pos2 = arrWord.length - 1;
        let posMiddle = Math.floor(arrWord.length / 2);

        while (pos1 <= posMiddle && pos2 >= posMiddle) {
            pos1 = findALetter(arrWord, pos1, posMiddle);
            pos2 = findALetterBack(arrWord, pos2, posMiddle);
            if (pos1 <= posMiddle && pos2 >= posMiddle) {
                replaceLetters(arrWord, pos1, pos2);
                pos1++;
                pos2--;
            };
        };

        return arrWord.join('');
    };

    let arrStr = str.split(' ');

    return arrStr.map(word => {
        return reverseWord(word);
    }).join(' ');
}
console.log('--- reverse ------');
console.log('s1tar3t 2 hellow =>', reverse('s1tar3t 2 hellow'));
console.log('s1ta$%r3t 2 hel^low =>', reverse('s1ta$%r3t 2 hel^low'));
console.log('s1tar3t 2   low5a =>', reverse('s1tar3t 2   low5a'));


/** 5-е задание в файле "menu.ts" */
