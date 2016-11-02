
  // Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  // Возвращает true, если все аргументы, кроме первого входят в первый.
  // Первым всегда должен быть массив.

function isInArray(first:any[], ...rest):boolean {
    if (!Array.isArray(first)) {
        return false;
    }

    for (let i:number = 0; i < rest.length; i++) {
        if (first.indexOf(rest[i]) == -1) {
            return false;
        }
    }
    return true;
}

let arr = [10,"a","b"];
let a1 = 10;
let a2 = "a";
let a3 = "b";

console.log(isInArray(arr, a1, a2, a3)); 
