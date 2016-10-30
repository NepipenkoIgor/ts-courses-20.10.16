// task №1 isInArray

function isInArray(array: any[], ...rest): boolean {
  for (let i = 0; i < rest.length; i++) {
    if (array.indexOf(rest[i]) === -1 ) return false;
  }
  
  return true;
}

// task №2 summator

function isString(a):a is string{
  if(typeof a === 'string'){
     return true;
  }
  return false;
}

function summator1(...args: (number | string)[]): number {
  let res;
  
  // если написать
  // let res: number - не работает, почему?
  
  res = args.reduce( (sum: number, currentArg: number | string): number => {
    let argAsNumber: number;
  
    argAsNumber = isString(currentArg) ? parseInt(currentArg, 10) : currentArg;

    return sum + argAsNumber;
  });

  return res;
}

function summator2(...args: (number|string)[]): number {
  let res: number = 0;

  for( let i = 0; i < args.length; i++) {
    
    res += isString(args[i]) ? parseInt(<string>args[i], 10) : <number>args[i];
    // почему не работает без явного указания что args[i] строка?
  }

  return res;
}

// task №3 getUnique(arr)

function getUnique(arr: any[]): any[] {
  let resArray: any[] = [];
  
  for (let i = 0; i < arr.length; i++) {
    if ( !isInArray(resArray, arr[i])) {
      resArray.push(arr[i]);
    }
  }
  return resArray;
}

let ar1 = [1, 2, 3, 'asdf', false, null];
let ar2 = [1, 2, 3, 1, 'asdf', 1, false, 'asdf', 'h'];
let ar3 = [false, false, true, undefined, true];

// console.log(getUnique(ar1));
// console.log(getUnique(ar2));
// console.log(getUnique(ar3));



// task №4 getUnique(arr)

function reverseLettersInSentence(sentence: string):string {
  let wordArray = sentence.split(' ');
  let reversedWordArray = [];
  let reversedSentence: string;
  
  for (let i = 0; i < wordArray.length; i++) {
    let reversedWord = reverseLettersInWord(wordArray[i]);
    reversedWordArray.push(reversedWord);
  }
  
  reversedSentence = reversedWordArray.join(' ');
  
  return reversedSentence;
}

function reverseLettersInWord(word: string): string {
  let reversedLettersArray = word.split('');
  let i = 0;
  let j = word.length - 1;
  
  while (i < j) {
    if (isLetter(word[i]) && isLetter(word[j]) ) {
      reversedLettersArray[i] = word[j];
      reversedLettersArray[j] = word[i];
      i++;
      j--;
    } else if (!isLetter(word[i])) {
      j--;
    } else if (!isLetter(word[j])) {
      i++;
    }
  }
  
  return reversedLettersArray.join('');
}

function isLetter(char: string): boolean {
  let charCode = char.charCodeAt(0);
  
  if (charCode >= 60 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
    return true;
  }
  
  return false;
}

console.log(reverseLettersInSentence('s1tar3t 2 hellow'));     // ->  t1rat3s 2 wolleh
console.log(reverseLettersInSentence('s1ta$%r3t 2 hel^low'));  // ->  t1ra$%t3s 2 wol^leh
console.log(reverseLettersInSentence('s1tar3t 2   low5'));     // ->  t1rat3s 2   wol5