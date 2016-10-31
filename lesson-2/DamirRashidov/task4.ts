
function reverseCharsInWords(str: string): string {
    let arr: string[] = str.split(' ');

    for (let i: number = 0; i < arr.length; i++) {
        let word: string[] = arr[i].split('');

        for (let left: number = 0, right: number = word.length - 1; left < right;) { // Идем слева и справа по слову пока не "встретимся"
            if (isLetter(word[left]) && isLetter(word[right])) {
                [word[left], word[right]] = [word[right], word[left]];
                left++;
                right--;
                continue;
            }

            if (!isLetter(word[left])) {
                left++;
            }

            if (!isLetter(word[right])) {
                right--;
            }
        }

        arr[i] = word.join('');
    }

    return arr.join(' ');
}

function isLetter(char: string): boolean {
    return /[a-z]/i.test(char);
}

let tests: string[][] = [
    ['s1tar3t 2 hellow', 't1rat3s 2 wolleh'],
    ['s1ta$%r3t 2 hel^low', 't1ra$%t3s 2 wol^leh'],
    ['s1tar3t 2   low5', 't1rat3s 2   wol5']
];

for (let i: number = 0; i < tests.length; i++) {
    console.log(`Ввод: "${tests[i][0]}"`);
    console.log(`\tВывод:       "${reverseCharsInWords(tests[i][0])}"`);
    console.log(`\tДолжно быть: "${tests[i][1]}"`);
}