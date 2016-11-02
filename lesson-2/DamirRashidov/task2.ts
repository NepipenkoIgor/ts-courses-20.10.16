
/** Why ??*/
function summator(...rest: (number|string)[]): number {
    let sum: number = 0;

    for(let i: number = 0; i < rest.length; i++) {
       // let value: number|string = rest[i];

        // if (typeof value === 'string') {
        //     sum += parseFloat(value);
        //     continue;
        // }

        // Вот так (без ввода переменной value) не работает, почему?

        if (typeof rest[i] === 'number') {
            sum += rest[i];
            continue;
        }
        if (typeof rest[i] === 'string') {
            sum += parseFloat(rest[i]);
            continue;
        }

        sum += value as number;
    }

    return sum;
}

console.log(summator(1, 2));
console.log(summator('1.3', 2));